import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { allprod, gprod, prodid, add_prod } from './database.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set static folder to current directory
app.use(express.static(__dirname));

//set CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // แทนที่ 'http://example.com' ด้วยโดเมนของเว็บไซต์ที่คุณต้องการอนุญาตให้ใช้ข้อมูลนี้
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // ระบุเมธอดที่อนุญาต
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // ระบุหัวข้อที่อนุญาตให้ส่งผ่าน
    next();
});

// Routes
app.get('/', async (req, res) => {
    const allpd = await allprod()
    res.json(allpd);
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, 'product.html'));
});

app.get('/product/:id', async (req, res) => {
    const id = req.params.id;
    let aprod = await prodid(id)
    res.json(aprod);
    
});

app.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, 'edit.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
