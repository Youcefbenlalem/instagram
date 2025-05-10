const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Utilisateur:', username, 'Mot de passe:', password);
    res.json({ message: "Identifiants reçus" });
});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
