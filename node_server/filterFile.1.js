var fs = require('fs');

fs.readdir(process.argv[2], (err, list) => {
  if(err) throw err;
  list.forEach((file) => {
     if (file.split('.')[1] === process.argv[3]) {
         console.log(file);
     } 
  });
    
});