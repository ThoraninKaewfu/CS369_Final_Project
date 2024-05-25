const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ตั้งค่าการเชื่อมต่อกับฐานข้อมูล MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cs369_temp'
});

// เชื่อมต่อกับฐานข้อมูล
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

// Set static folder
app.use(express.static(__dirname));

// Routes
app.get('/home', (req, res) => {
    // Query all products from the database
    db.query('SELECT * FROM prod', (err, results) => {
        if (err) {
            console.error('Error retrieving products:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // Send JSON response with product data
        res.json(results);
    });
});

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    db.query('SELECT * FROM prod WHERE id = ?', [productId], (err, results) => {
        if (err) {
            console.error('Error retrieving product details:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Product not found');
            return;
        }
        res.json(results[0]);
    });
});


app.get('/edit', (req, res) => {
    // Query to get the max id
    db.query('SELECT MAX(id) AS max_id FROM prod', (err, results) => {
        if (err) {
            console.error('Error retrieving max id:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Get the max id from the result
        const maxId = results[0].max_id;

        // Calculate the new id by adding 1 to the max id
        const newId = maxId + 1;

        // Extract data from the request body
        const { path_picture, prod_name, details, type, price } = req.query;

        console.log("-------------------------------")
        console.log("Add new product from edit form")
        console.log(req.query)

        // Insert the new product into the database with the new id
        db.query('INSERT INTO prod (id, path_picture, prod_name, details, type, price) VALUES (?, ?, ?, ?, ?, ?)', [newId, path_picture, prod_name, details, type, price], (err, result) => {
            if (err) {
                console.error('Error inserting product:', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            console.log('New product added successfully');
            console.log("-------------------------------")
            res.status(200).sendFile(path.join(__dirname, 'home.html'));
        });
    });
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
