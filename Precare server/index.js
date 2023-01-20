import express, { response } from 'express'
import cors from 'cors' ;
const app = express();
import request from 'request'

import bodyParser from 'body-parser';

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));


app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
  );

// app.get('/:id', function (req, res) {
app.get('/disease', function (req, res) {
  
  request(`http://127.0.0.1:5000/disease`, function (error, response, body) {
    console.error('error:', error); // Print the error
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the data receive
    res.send(body); 
  });
});

app.post('/symptoms', function (req, res) {

  var options = {
    method: 'POST',
    uri: 'http://127.0.0.1:5000/symptomList',
    body: req.body,
    json: true
};

    console.log(req.body.symptoms);
    var prognosis="";
    request(options,function(error,response,body)
    {
      console.error('error:', error); // Print the error
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body.final_prediction); // Print the data receive
      prognosis=body.final_prediction;
      res.send(body.final_prediction); 
    });
    
    
}
);


app.listen("5000", () => {
  console.log("Server is running! on PORT 5000");
});



