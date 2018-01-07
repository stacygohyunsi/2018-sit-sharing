const express = require('express');
const path = require('path');

let app = express();

app.get('/', (req, res)=> {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen('3000', () => {
	console.log('app is listening on port 3000');
})