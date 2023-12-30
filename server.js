const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '/public', 'index.html'));
});  
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });