const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set static folder to current directory
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, 'product.html'));
});

app.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, 'edit.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
