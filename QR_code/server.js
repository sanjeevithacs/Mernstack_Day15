const express = require("express");
const app = express(); //creating a server
const path = require("path");
const qrCode = require("qrcode");

app.use(express.json()); //header will be available in this application

app.use(express.static(path.join(__dirname, "public"))); //to make as static

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/qr", async (req, res) => {
    // console.log(req.body);
    let link = req.body.data;
    let genQr = await qrCode.toDataURL(link);
    res.json(genQr);
});

app.get("/qr", async (req, res) => { // Added async here
    let link = req.query.link;
    let genQr = await qrCode.toDataURL(link);
    res.json(genQr);
});

app.listen(3000, () => {
    console.log("server is running");
});