const User = require('../models/user'); // Corrigir o caminho da importação do modelo User, se necessário
const axios = require('axios');
const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');

exports.createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        
        if (!username || !email || !password || !role) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        // Verifique se o email já está em uso
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email já está em uso' });
        }

        let userData = { username, email, password, role };

        // Lidar com upload de imagem
        if (req.file) {
            const imagePath = path.join(__dirname, '..', 'uploads', req.file.filename);
            userData.foto = imagePath;
        }

        const user = await User.create(userData);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Adicionar middleware para tratar uploads de imagem
const multer = require('multer');

// Configuração do multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Local onde as imagens serão salvas
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Exportar o upload middleware
exports.upload = upload.single('foto');
