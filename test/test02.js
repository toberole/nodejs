var fs = require("fs");

//  异步读取文件
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

// 同步读取文件
var data = fs.readFileSync('input.txt');

console.log("同步读取文件：" + data.toString());

console.log("程序执行结束!");