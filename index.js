const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get("/file/:filename", function(req, res){
  const name = req.params.filename;
  fs.readFile(name, "utf-8", function(err, data){
    res.json({
      data: data
    });
  });
});

app.listen(3000);