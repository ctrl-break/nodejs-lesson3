#Lesson 3

1) Создать программу для получения информации о последних
новостей с выбранного вами сайта в структурированном виде.

**Usage**  
`$ node news.js`  

2) Создать переводчик слов с английского на русский, который будет
обрабатывать входящие GET запросы и возвращать ответы,
полученные через API Яндекс.Переводчика.

**Usage**  
Start server  
`$ node translate.js`  

Send get request  
`$ curl http://127.0.0.1:8000/?tl=StringToTranslate`  

Example:   
`$ curl http://127.0.0.1:8000/?tl=A%20journey%20of%20thousand%20miles%20begins%20with%20a%20single%20step  
Путешествие в тысячу миль начинается с одного шага`  
