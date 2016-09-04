var request = require('request');
var xmlreader = require('xmlreader');
var clc = require('cli-color');

const cyan = clc.cyan;
const yellow = clc.yellow;
const green = clc.green;
const white = clc.white.bold;

const logo = `
                    _
 _ __ ___   ___  __| |_   _ ______ _
| '_ ' _ \\ / _ \\/ _' | | | |_  / _' |
| | | | | |  __/ (_| | |_| |/ / (_| |
|_| |_| |_|\\___|\\__,_|\\__,_/___\\__,_|

      `;

console.log(green(logo));

request('https://meduza.io/rss/all', function (error, response, xml) {
  if (error)
    throw error;

  if ( response.statusCode !== 200 )
    return console.log('incorrect statusCode: ', response.statusCode);

    xmlreader.read(xml, function (err, res){
        if(err) return console.log(err);

        // Выводим последние 3 новости. i < res.rss.channel.item.count() - все новости
        for(var i = 0; i < 3; i++){
            console.log( green(res.rss.channel.item.at(i).title.text()) );
            console.log( yellow(res.rss.channel.item.at(i).pubDate.text()) );
            console.log( res.rss.channel.item.at(i).description.text() );
            console.log( cyan(res.rss.channel.item.at(i).link.text()) );
            console.log( white(" * * * * * * * * * * * * * * * * * \n") );
        }
      });

});
