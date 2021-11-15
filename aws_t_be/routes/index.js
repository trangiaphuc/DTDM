var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

var translate = new AWS.Translate({
  region: "us-east-1",
  accessKeyId: "ASIAXKTXZ3MBCT7ZPDPZ",
  secretAccessKey: "BwBJ2GMMkZHiQDm+nUyfWpoZkuWerfJOFLDsyebJ",
  sessionToken: "FwoGZXIvYXdzEMH//////////wEaDHjZNKlpYUwsL/ugySLPASmet+uPM2k9X+cRt0AqTw9Gi/AjF6DD7TUo39jVpzjxoRl6PME2exV3IeIquciyxckXBA9Bl3WTCi3TdD5jtEGHy3MeqBS+ofyb52JbDP/yTSUskMeQKOBguegLd4t+IaZwRf0+ZHTBT5ZMBIfSRrisgxS5myPYcX/KvCjhoXhIR81j/Kpx09jWcA5n6UjtPGcfkDX5El1FPta40hLS3odtMYT3pofx6LpGFX3yJc9//QihPsfqxmjTsBcOsoaUfJDteuPjrz/qk8q0OY+GpCi3usaMBjIt/hV/Ycgvy5neLEEIGnQRQz8ds2T1sMa7nD6d8HUun6A/ojtYSA1fsZXp5qci"});


router.post('/translate', function(req, res, next) {
  var params = {
    SourceLanguageCode: req.body.SourceLanguageCode, /* required */
    TargetLanguageCode: req.body.TargetLanguageCode, /* required */
    Text: req.body.Text, /* required */
  }
  translate.translateText(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     {
      console.log(data);
      res.status(200).send(data);
    } 
  });

});

module.exports = router;
