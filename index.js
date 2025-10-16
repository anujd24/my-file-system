const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get("/file/:filename", function(req, res){
  const name = req.params.filename;
  
  fs.readFile(name, "utf-8", function(err, data){
    if (err) {
      // This will show what's wrong in Vercel logs
      console.log("ERROR:", err.message);
      return res.json({ 
        error: true,
        message: err.message,
        filename: name
      });
    }
    
    // Check if data is empty
    if (!data || data.trim() === '') {
      return res.json({
        error: true,
        message: "File is empty",
        filename: name
      });
    }
    
    res.json({
      data: data,
      success: true
    });
  });
});

app.listen(3000);