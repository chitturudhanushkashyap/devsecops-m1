const express = require('express');
const app = express();

app.use(express.json());

// Intentional vulnerability
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`You searched for: ${query}`);
});

// Hardcoded secret
const SECRET_KEY = "my_super_secret_password_123";

app.get('/', (req, res) => {
    res.send('Project M1 Demo Application Running');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
