var fs   = require('fs'),
    path = require('path');

module.exports = function (dir, ext, callback) {

    var out = [];
    
    fs.readdir(dir, (err, list) => {
    
      if (err) 
        return callback(err);
        
      list = list.filter((file) => {
        return (path.extname(file) === "." + ext);
      });
        
      callback(null, list);
    });
};


