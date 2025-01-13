// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

// Middleware
app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments.json');
      return;
    }
    res.send(data);
  });
});

// Add a comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments.json');
      return;
    }
    const comments = JSON.parse(data);
    comments.push(newComment);
    fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
      if (err) {
        res.status(500).send('Error writing comments.json');
        return;
      }
      res.send(comments);
    });
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});