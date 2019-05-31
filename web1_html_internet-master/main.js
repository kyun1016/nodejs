var http = require('http');
var fs = require('fs');
//동적인 활용을 위한 선언
//참고, nodejs url parse query string
var url = require('url');


var app = http.createServer(function(request,response){
    var _url = request.url;
    //동적인 접근을 하도록 설정해준다.
    var queryData = url.parse(request.url, true).query;
    //가독성을 높이기 위해서 title로 묶어주었다.
    var title = queryData.id;
    console.log(queryData.id);
    //기본 홈페이지로 가도록 설정해준다.
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);

    fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
        //if(err) throw err;
        //템플릿을 활용해 문서를 처리하였다.
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>
        `;
        response.end(template);
    })







});
app.listen(3000);
