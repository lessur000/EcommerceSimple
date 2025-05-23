import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());

app.get("/api/products", (req, res) => {
    fs.readFile("products.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({error: "Error reading file"});
        }
        res.json(JSON.parse(data))
    })
})

app.listen(3001, () => console.log("Server running on port 3000"))