/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
 app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
 app.use(express.json())
dotenv.config();

let PORT = 5000;

app.post("/user/generateToken", (req, res) => {
    const data = req.body
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(data, jwtSecretKey, {expiresIn: '1d'});
    res.json(token);
});

app.get("/user/validateToken", (req, res) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
 
    try {
        const token = req.headers.cookie;
 
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            return res.send("Successfully Verified");
        } else {
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is listening on the port ${PORT}`)
})