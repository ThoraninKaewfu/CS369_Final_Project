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
    const [rows] = await db.query(`
    SELECT * 
    FROM prod
    WHERE id == ?
    `, [id])
    return rows
}

export async function add_prod(path_pic, name, details, type, price)
{
    const [rows] = await db.query(`
    INSERT INTO prod (path_picture, prod_name, details, type, price)
    VALUE (?, ?, ?, ?, ?)
    `, [path_pic, name, details, type, price])
    return rows
}

