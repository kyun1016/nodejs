//nodejs의 파일 시스템의 일부분을 활용해보았다.
//마치 include<filesystem>과 비슷하다고 생각된다.
//https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfile_file_options_callback
var fs = require('fs');

fs.readFile('nodejsFileRead/sample.txt', 'utf-8',(err, data) =>{
  if (err) throw err;
  console.log(data);
});
