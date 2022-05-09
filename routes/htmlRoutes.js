const path = require('path');
const router = require('express').Router();


app.get('/notes', function(request, response) {
    response.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;