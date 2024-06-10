const Post = require('../Models/Post');
const Atletica = require('../Models/Atletica'); // Importe os modelos relevantes
const Aviso = require('../Models/Aviso');
const Comodidades = require('../Models/Comodidades');
const Eventos = require('../Models/Eventos');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'foto' || file.fieldname === 'video') {
            cb(null, './backend/uploads/');
        } else {
            cb(new Error('Nome do campo inválido'), null);
        }
    },
    filename: (req, file, cb) => {
        if (file.fieldname === 'foto' || file.fieldname === 'video') {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        } else {
            cb(new Error('Nome do campo inválido'), null);
        }
    }
});

const upload = multer({ storage: storage });

exports.createPost = async (req, res) => {
    upload.fields([{ name: 'foto', maxCount: 1 }, { name: 'video', maxCount: 1 }])(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        try {
            const { user_id, name, status, post_type, nome, descricao, email_contato, local, data_inicio, data_fim } = req.body;

            const requiredFields = {
                'Atletica': ['nome', 'descricao', 'email_contato'],
                'Aviso': ['nome', 'descricao'],
                'Comodidade': ['nome', 'descricao', 'local'],
                'Evento': ['nome', 'descricao', 'data_inicio', 'data_fim', 'local']
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
                case 'Comodidade':
                    specificPost = await Comodidades.create({
                        post_id: post.id,
                        nome,
                        descricao,
                        local,
                        foto: req.files['foto'] ? req.files['foto'][0].path : null,
                        video: req.files['video'] ? req.files['video'][0].path : null
                    });
                    break;
                case 'Evento':
                    specificPost = await Eventos.create({
                        post_id: post.id,
                        nome,
                        descricao,
                        data_inicio,
                        data_fim,
                        local,
                        foto: req.files['foto'] ? req.files['foto'][0].path : null,
                        video: req.files['video'] ? req.files['video'][0].path : null
                    });
                    break;
                default:
                    throw new Error('Tipo de postagem inválido');
            }

            res.status(201).json({ post, specificPost });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
};