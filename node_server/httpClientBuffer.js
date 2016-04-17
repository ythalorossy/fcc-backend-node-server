var http = require('http'),
    bl = require('bl');


var url = process.argv[2];

http.get(url, (res) => {
    
    res.pipe(bl((err, data) => {
      if (err) throw err;
      data = data.toString();
      console.log(data.length);
      console.log(data);
    }));
    
}).on('error', (e) => console.log(`Got error: ${e.message}`));