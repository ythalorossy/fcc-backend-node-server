'use strict';
let http = require('http');

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];


http.get(url1, (res) => {
    
    let body = [];
    res.on('data', data => body.push(data));    
    res.on('end', () => {
        console.log(body.join(''));

        http.get(url2, (res) => {
            
            let body = [];
            res.on('data', data => body.push(data));    
            res.on('end', () => {
                console.log(body.join(''));
                
                http.get(url3, (res) => {
                    
                    let body = [];
                    res.on('data', data => body.push(data));    
                    res.on('end', () => {
                        console.log(body.join(''));

                    });
                });
                
            });
        });

        
    });
});