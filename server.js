
const express = require("express");
const mysql = require("mysql2/promise");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve your existing website files
app.use(express.static(__dirname));

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "daily_edit",
  port: Number(process.env.DB_PORT || 3306)
};

// Test the MySQL connection
app.get("/api/health", async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.query("SELECT 1");
    await connection.end();

    res.json({
      status: "success",
      message: "The Daily Edit is connected to MySQL!"
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    res.status(500).json({
      status: "error",
      message: "Could not connect to the database. Check server configuration."
    });
  }
});

// Get published articles from MySQL
app.get("/api/articles", async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [articles] = await connection.execute(`
      SELECT
        a.article_id,
        a.title,
        a.summary,
        a.content,
        a.image_url,
        a.article_url,
        c.category_name,
        au.author_name,
        a.published_at
      FROM articles a
      JOIN categories c ON a.category_id = c.category_id
      LEFT JOIN authors au ON a.author_id = au.author_id
      WHERE a.status = 'PUBLISHED'
      ORDER BY a.published_at DESC, a.created_at DESC
    `);

    await connection.end();
    res.json(articles);
  } catch (error) {
    console.error("Could not load articles:", error.message);
    res.status(500).json({
      error: "Could not load articles from the database."
    });
  }
});

app.listen(PORT, () => {
  console.log(`The Daily Edit server is running at http://localhost:${PORT}`);
});
