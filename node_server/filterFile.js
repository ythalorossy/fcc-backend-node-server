var filter = require('./mymodule');

var file = process.argv[2],
    ext  = process.argv[3]; 

filter(file, ext, (error, data) => {
    if (error) 
        throw error;
    
    data.forEach(file => console.log(file));
});