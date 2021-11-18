var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

var translate = new AWS.Translate({
  region: "us-east-1",
  accessKeyId: "ASIAXKTXZ3MBIHOKZKZE",
  secretAccessKey: "VjeGEpglGGKzQTibT6bNo6g+6cfOq3Vlq/CEf/Ef",
  sessionToken: "FwoGZXIvYXdzEAoaDM2/v1uK9T3UAvfIsiLPAciS254Ce/+juyDQbFKSQ0cG8YSVERrlgiO6OTrfg4MFFf3ONCT+btkIzmGVY0Zc9FtycaMP9DeUlU9XkLpE5XsJfY91cqW9RsJFGNT37ATIEw4kOgnoYwfnNZZdo/VQvI+H+jP2GX/DmXcchOAeE+Z8iDSMQR1WOHO2qbyc9lomaY0Vxts24EfiuFeecvYbmGVX05L8rU4NVb+ma45/RZser0vyCF1a4IxAfOhnvRtnFvaWL9nGXPSe4xm351yws/Edm1bIlD8YayP6sdT6DyjpvtaMBjItsS6JeJPFLePsbDJrc7IpBtq9HHk602tbXTfIfjH3sA9FdxnhoButsUxylm+u"});

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
