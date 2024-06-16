const Post = require('../Models/Post');
const Atletica = require('../Models/Atletica');
const Aviso = require('../Models/Aviso');
const Comodidades = require('../Models/Comodidades');
const Eventos = require('../Models/Eventos');
const multer = require('multer');
const path = require('path');
const User = require('../models/User');

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'foto' || file.fieldname === 'video') {
            cb(null, path.join(__dirname, '../uploads/'));
        } else {
            cb(new Error('Nome do campo inválido'), null);
        }
    },
    filename: (req, file, cb) => {
        if (file.fieldname === 'foto' || file.fieldname === 'video') {
            cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
        } else {
            cb(new Error('Nome do campo inválido'), null);
        }
    }
});

const upload = multer({ storage: storage });

// Middleware de upload para os campos 'foto' e 'video'
exports.upload = upload.fields([{ name: 'foto', maxCount: 1 }, { name: 'video', maxCount: 1 }]);

// Função para criar uma nova postagem
exports.createPost = async (req, res) => {
    upload.fields([{ name: 'foto', maxCount: 1 }, { name: 'video', maxCount: 1 }])(req, res, async (err) => {
        if (err) {
            console.error('Error uploading files:', err);
            return res.status(400).json({ error: 'File upload failed' });
        }

        try {
            const { user_id, name, status, post_type, nome, descricao, endereco, cidade, cep, uf, complemento, contato, email_contato, data_inicio, data_fim } = req.body;

            const requiredFields = {
                'Atletica': ['nome', 'descricao', 'email_contato'],
                'Aviso': ['nome', 'descricao'],
                'Comodidades': ['nome', 'descricao', 'endereco', 'cidade', 'cep', 'complemento', 'contato'],
                'Eventos': ['nome', 'descricao', 'data_inicio', 'data_fim', 'endereco', 'cidade', 'cep', 'uf', 'complemento', 'email_contato']
            };

            if (!post_type || !requiredFields[post_type]) {
                throw new Error('Tipo de postagem inválido');
            }

            for (const field of requiredFields[post_type]) {
                if (!req.body[field]) {
                    throw new Error(`${field.charAt(0).toUpperCase() + field.slice(1)} é obrigatório para ${post_type}`);
                }
            }

            const post = await Post.create({ user_id, name, status, post_type });

            let specificPost;
            switch (post_type) {
                case 'Atletica':
                    specificPost = await Atletica.create({
                        post_id: post.id,
                        nome,
                        descricao,
                        email_contato,
                        foto: req.files['foto'] ? req.files['foto'][0].path : null,
                        video: req.files['video'] ? req.files['video'][0].path : null
                    });
                    break;
                case 'Aviso':
                    specificPost = await Aviso.create({ post_id: post.id, nome, descricao });
                    break;
                case 'Comodidades':
                    specificPost = await Comodidades.create({
                        post_id: post.id,
                        nome,
                        descricao,
                        endereco,
                        cidade,
                        cep,
                        uf,
                        complemento,
                        contato,
                        foto: req.files['foto'] ? req.files['foto'][0].path : null,
                        video: req.files['video'] ? req.files['video'][0].path : null
                    });
                    break;
                case 'Eventos':
                    specificPost = await Eventos.create({
                        post_id: post.id,
                        nome,
                        descricao,
                        data_inicio,
                        data_fim,
                        endereco,
                        cidade,
                        cep,
                        uf,
                        complemento,
                        email_contato,
                        foto: req.files['foto'] ? req.files['foto'][0].path : null,
                        video: req.files['video'] ? req.files['video'][0].path : null
                    });
                    break;
                default:
                    throw new Error('Tipo de postagem inválido');
            }

            res.status(201).json({ post, specificPost });
        } catch (error) {
            console.error('Erro na API:', error);
            res.status(400).json({ error: error.message });
        }
    });
};

// Função para buscar todas as postagens
exports.getAllPosts = async (req, res) => {
    try {
        // Busca todas as postagens gerais
        const posts = await Post.findAll({ attributes: ['id', 'post_type', 'status', 'user_id'] });

        if (!posts || posts.length === 0) {
            return res.status(404).json({ error: 'Posts not found' });
        }

        let allPosts = [];

        // Para cada postagem geral, busca os dados específicos conforme o 'post_type'
        for (const post of posts) {
            let postType;

            switch (post.post_type) {
                case 'Atletica':
                    postType = await Atletica.findAll({
                        where: { post_id: post.id }, // Adicione a condição para filtrar pela postagem específica
                        attributes: ['id', 'nome', 'descricao', 'foto', 'video', 'email_contato'],
                    });
                    break;
                case 'Aviso':
                    postType = await Aviso.findAll({
                        where: { post_id: post.id },
                        attributes: ['id', 'nome', 'descricao'],
                    });
                    break;
                case 'Comodidades':
                    postType = await Comodidades.findAll({
                        where: { post_id: post.id },
                        attributes: ['id', 'nome', 'descricao', 'endereco', 'cidade', 'cep', 'uf', 'complemento', 'contato', 'foto', 'video'],
                    });
                    break;
                case 'Eventos':
                    postType = await Eventos.findAll({
                        where: { post_id: post.id },
                        attributes: ['id', 'nome', 'descricao', 'data_inicio', 'data_fim', 'endereco', 'cidade', 'cep', 'uf', 'complemento', 'email_contato', 'foto', 'video'],
                    });
                    break;
                default:
                    throw new Error('Invalid post type');
            }

            // Formata a URL da imagem (se existir) para ser acessível via HTTP
            postType = postType.map(postData => {
                if (postData.foto) {
                    postData.foto = `${req.protocol}://${req.get('host')}/uploads/${path.basename(postData.foto)}`;
                }
                if (postData.video) {
                    postData.video = `${req.protocol}://${req.get('host')}/uploads/${path.basename(postData.video)}`;
                }
                return postData;
            });

            allPosts.push({ ...post.toJSON(), postType });
        }

        res.status(200).json(allPosts);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getPostById = async (req, res) => {
    const { id } = req.params;
    console.log('Received ID:', id); // Log para verificar o ID recebido
    try {
        const user = await User.findAll({ attributes: ['id', 'username'] });
        const post = await Post.findByPk(id);
        if (!post) {
            console.log('Post not found with ID:', id); // Log quando o post não é encontrado
            return res.status(404).json({ error: 'Post not found' });
        }

        let specificPost;
        switch (post.post_type) {
            case 'Atletica':
                specificPost = await Atletica.findOne({ where: { post_id: id } });
                break;
            case 'Aviso':
                specificPost = await Aviso.findOne({ where: { post_id: id } });
                break;
            case 'Comodidades':
                specificPost = await Comodidades.findOne({ where: { post_id: id } });
                break;
            case 'Eventos':
                specificPost = await Eventos.findOne({ where: { post_id: id } });
                break;
            default:
                console.log('Invalid post type:', post.post_type); // Log quando o tipo de postagem é inválido
                throw new Error('Tipo de postagem inválido');
        }

        if (!specificPost) {
            console.log('Specific post details not found for ID:', id); // Log quando os detalhes específicos não são encontrados
            return res.status(404).json({ error: 'Specific post details not found' });
        }

        // Formatar URLs das imagens e vídeos para serem acessíveis via HTTP, se existirem
        if (specificPost.foto) {
            specificPost.foto = `${req.protocol}://${req.get('host')}/uploads/${path.basename(specificPost.foto)}`;
        }
        if (specificPost.video) {
            specificPost.video = `${req.protocol}://${req.get('host')}/uploads/${path.basename(specificPost.video)}`;
        }

        res.status(200).json({ ...post.toJSON(), specificPost, user });
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { name, status, ...specificData } = req.body; // Assume os campos específicos vêm no corpo da requisição

    try {
        const post = await Post.findByPk(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Atualiza os campos gerais da tabela Post
        await post.update({ name, status });

        // Atualiza os detalhes específicos da postagem com base no tipo de postagem
        let specificPost;
        switch (post.post_type) {
            case 'Atletica':
                specificPost = await Atletica.findOne({ where: { post_id: id } });
                if (specificPost) {
                    await specificPost.update(specificData);
                }
                break;
            case 'Aviso':
                specificPost = await Aviso.findOne({ where: { post_id: id } });
                if (specificPost) {
                    await specificPost.update(specificData);
                }
                break;
            case 'Comodidades':
                specificPost = await Comodidades.findOne({ where: { post_id: id } });
                if (specificPost) {
                    await specificPost.update(specificData);
                }
                break;
            case 'Eventos':
                specificPost = await Eventos.findOne({ where: { post_id: id } });
                if (specificPost) {
                    await specificPost.update(specificData);
                }
                break;
            default:
                return res.status(400).json({ error: 'Invalid post type' });
        }

        res.status(200).json({ message: 'Post updated successfully', specificPost });
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByPk(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Deleta o registro da tabela específica baseado no post_type
        switch (post.post_type) {
            case 'Atletica':
                await Atletica.destroy({ where: { post_id: id } });
                break;
            case 'Aviso':
                await Aviso.destroy({ where: { post_id: id } });
                break;
            case 'Comodidades':
                await Comodidades.destroy({ where: { post_id: id } });
                break;
            case 'Eventos':
                await Eventos.destroy({ where: { post_id: id } });
                break;
            default:
                throw new Error('Invalid post type');
        }

        // Deleta o registro da tabela Post após deletar o específico
        await post.destroy();

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};