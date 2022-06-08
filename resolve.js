const path = require('path')
let path1, path2, path3

console.log("当前文件所在目录：", __dirname);

path1 = path.resolve('users/zj/', 'readme.md')
console.log(path1);