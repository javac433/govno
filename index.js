const express = require('express');
const app = express();
const port = 3000;
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send("ты лох!");
});

app.get('/register', (req, res) => {
	res.sendFile('reg.html');
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
