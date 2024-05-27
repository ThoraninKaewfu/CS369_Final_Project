import mysql from 'mysql2';
import dotenv from 'dotenv';
/*const mysql = require('mysql2');
const dotenv = require('dotenv');*/

dotenv.config()

// ตั้งค่าการเชื่อมต่อกับฐานข้อมูล MySQL
const db = mysql.createPool({
    host:       process.env.MYSQL_HOST,
    user:       process.env.MYSQL_USER,
    password:   process.env.MYSQL_PASS,
    port:       process.env.MYSQL_PORT,
    database:   process.env.MYSQL_DB
}).promise()

export async function allprod()
{
    const [rows] = await db.query("SELECT * FROM prod")
    return rows
}

export async function gprod(maxid)
{
    const [rows] = await db.query(`
    SELECT * 
    FROM prod
    WHERE id <= ?
    `, [maxid])
    return rows
}

export async function prodid(id)
{
    const [row] = await db.query(`
    SELECT * 
    FROM prod
    WHERE id = ?
    `, [id])

    return row
}

export async function add_prod(path_pic, name, details, type, price)
{
    const [maxid] = await db.query(`SELECT MAX(id) as maxId FROM prod`);
    const nextId = maxid[0].maxId + 1; // Accessing the value and adding 1
    
    const [rows] = await db.query(`
    INSERT INTO prod (id, path_picture, prod_name, details, type, price)
    VALUE (?, ?, ?, ?, ?, ?)
    `, [nextId, path_pic, name, details, type, price])
    return rows
}

export async function del_prod(id)
{
    try
    {
        await db.query(`
        DROP FROM prod
        WHERE id = ?        
        `, [id])
    }
    catch(error)
    {
        console.error('Error querying delete by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function check_user(username)
{
    const [row] = await db.query(`
    SELECT * 
    FROM users
    WHERE username = ?
    `, [username])

    if (row.length === 0) {
        return null; // User not found
    }

    return row[0];
}

export async function getaUser(id)
{
    const [row] = await db.query(`
    SELECT * 
    FROM users
    WHERE id = ?
    `, [id])

    return row
}

