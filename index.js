const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((req, res, next) => { 
  res.status(404).send( 
      "<h1>Page not found on the server</h1>") 
}) 

app.listen(8080, () => {
    console.log("Server successfully running on port 8080");
  });