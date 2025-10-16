const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get("/file/:filename", function(req, res){
  const name = req.params.filename;
  
  // Use __dirname to get the absolute path to your files
  const filePath = path.join(__dirname, name);
  
  fs.readFile(filePath, "utf-8", function(err, data){
    if (err) {
      console.log("ERROR:", err.message);
      console.log("Looking for file at:", filePath);
      return res.json({ 
        error: true,
        message: err.message,
        filename: name,
        path: filePath
      });
    }
    
    res.json({
      data: data,
      success: true
    });
  });
});

app.listen(3000);