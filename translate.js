var parser = require('json-parser');
var request = require('request');
var http = require('http');
var PORT = 8000; // Порт открытия сервера

var url = require('url');

const translate = (toTranslate, callback) => {
      var params = {
        key:'trnsl.1.1.20160904T210218Z.1a9263894f50b212.c63defa7503a9009f03076a0f8390790f634b8b6',
        text:toTranslate,
        lang:'en-ru',
        format:'plain'
      };

        request({
            method: 'get',
            uri: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
            qs:params
          }, function (error, response, body) {
            if (error)
              throw error;

            var object = parser.parse(body);
            callback(object.text[0]);
          });
};

http
  .createServer(function(request, response) {

    var params = url.parse(
      request.url,
      true
    );

    var answer = translate(params.query.tl, function(data){
      console.log(data);
      // Заголовки ответа
      response.writeHead(200, {
        'Content-Type': 'text/html',
        //'Content-Length': data.length,
      });

      // Пишем тело ответа
      response.write(data + "\n");

      // Закрываем запрос, отправляем ответ
      response.end();
    });

  })
  .listen(PORT, function () {
    console.log("Let's get started: ", PORT);
  });
