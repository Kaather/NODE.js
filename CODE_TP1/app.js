const express = require('express');
const app = express();
const port = 3000;

let requestCount = {};

app.use(function (req, res, next) {
    const now = new Date().toISOString();
    console.log(`[${now}]: ${req.path}`);
    requestCount[req.path] = (requestCount[req.path] || 0) + 1;
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/welcome', (req, res) => {
    res.send("Hello Bienvenue sur le TP 1 du cours d'architecture logicielle");
});

app.get('/secret', (req, res) => {
    res.status(401).send("Vous ne possédez pas les droits pour accéder à ma page secrète");
});

app.get('/error', (req, res) => {
    return res.status(500).json({ error: 'Erreur' });
});

app.get('/img', (req, res) => {
    return res.download('img/Caliste.jpg');
});

app.get('/redirectMe', (req, res) => {
    return res.redirect('https://www.iut-littoral.fr/');
});

app.get('/users/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Bienvenue sur la page de ${name}`);
});

app.get('/somme', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const resultat = a + b;
    res.send(`Le résultat de la somme de ${a} et ${b} est : ${resultat}`);
});

app.get('/metrics', (req, res) => {
    res.json({
        status: "healthy",
        requestCount: requestCount,
        uptime: process.uptime()
    });
});

app.use(function (req, res) {
    res.status(404).send("Cette page n'existe pas!");
    next();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
