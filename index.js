const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => { 
  res.status(404).send( 
      "<h1>Page not found on the server</h1>") 
}) 

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
