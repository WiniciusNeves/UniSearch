const User = require('../models/User');
const multer = require('multer');
const path = require('path');

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'foto') {
            cb(null, path.join(__dirname, '../uploads/'));
        } else {
            cb(new Error('Nome do campo inválido'), null);
        }
    },
    filename: (req, file, cb) => {
        if (file.fieldname === 'foto') {
            cb(null, `foto-${Date.now()}${path.extname(file.originalname)}`);
        } else {
            cb(new Error('Nome do campo inválido'), null);
        }
    }
});

const upload = multer({ storage: storage });

exports.upload = upload.single('foto');

// Função para criar um novo usuário
exports.createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const foto = req.file ? req.file.filename : null;

        const user = await User.create({ username, email, password, role, foto });
        
        if (foto) {
            user.foto = `${req.protocol}://${req.get('host')}/uploads/${foto}`;
        }
        
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Função para fazer login do usuário
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ message: 'Erro ao acessar sua conta. Por favor, tente novamente mais tarde.' });
    }
};

// Função para atualizar o usuário com upload de foto
exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { username, email, password, role } = req.body;
        const foto = req.file ? req.file.filename : null;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        user.username = username || user.username;
        user.email = email || user.email;
        user.password = password || user.password;
        user.role = role || user.role;
        if (foto) {
            user.foto = `${req.protocol}://${req.get('host')}/uploads/${foto}`;
        }

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};