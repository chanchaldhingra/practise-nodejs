// const os = require('os');

// console.log(os.userInfo());

// const path = require('path');

// console.log(path.sep);

// const {readFileSync, writeFileSync} = require('fs');

// console.log(readFileSync('./new/first.txt', 'utf8'));

// console.log('console');

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') res.write('Welcome to homepage');
    else if (req.url === '/about') res.write('Welcome to about page');
    
    res.end()
});

server.listen(5000);