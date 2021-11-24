var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

var translate = new AWS.Translate({
  region: "us-east-1",
  accessKeyId: "ASIAXKTXZ3MBO7ZUSYSP",
  secretAccessKey: "B6FLdVWQqmwy0QWPy10FIg06rZv2xfXogoUMw1Gq",
  sessionToken: "FwoGZXIvYXdzEKf//////////wEaDLtxVdBPDz/5kumHTSLPAWOVyAWap3NkR1E5LYr9wLjsvFut1RJjX+CZFuayj+bozGVtKxCicUgPHk/uI77Weg7P/ST3PLyzcwfUVZXy/F7qqZdtZvKejSEiexrMewLkjSnNUi5D3H9ScrGYczzf6iHJqiYDGuW94GbI50www37cd39SLQxhuFxp5Yx+qpuDIr/knOwrWxCX/rwQaY0ShEt1wnd+c6Lei6k1zwkGhTonnizuy6/89yYbwHKNWoQgGPQbJbsmZKKEauzXgQuGqPOh56BE2sKsEFo7r7ZPCCiY9fiMBjItTlEkQHqhE0T0/oIRJvOnWC7OO+tlgHej3qL4M2gvgBeirF+r2E9YDou8+dE1"});

router.get('/', (req, res) => {
  res.status(200).send({message: "Hello, AWS Translate Here!"});
})

router.post('/translate', function(req, res, next) {
  var params = {
    SourceLanguageCode: req.body.SourceLanguageCode, /* required */
    TargetLanguageCode: req.body.TargetLanguageCode, /* required */
    Text: req.body.Text, /* required */
  }
  translate.translateText(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     {
      // console.log(data);
      res.status(200).send(data);
    } 
  });

});

module.exports = router;
