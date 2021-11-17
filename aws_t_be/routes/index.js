var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

var translate = new AWS.Translate({
  region: "us-east-1",
  accessKeyId: "ASIAXKTXZ3MBF2XGZAHY",
  secretAccessKey: "r0DKnHs3bNL445RJsb5MJHwox4k2T+ZwUB5i/yIY",
  sessionToken: "FwoGZXIvYXdzEMz//////////wEaDEP1UuZvcgMsk7AHISLPAd7QITdp3skDUb2zJAQAf39BrpMlJEho67bQmBvxPLoEtcmlJh+ZrF0tTNUZW9k1siv9+Uz4BStMWkSKEsSEb0wtusZGcAXqFJJ6mdEImpB8r3C6pjPvGrTrbR6/nRLcTPbCBqGk4VVH62lEdqZmLmGaF2weZuiGu8TTUDfn9fyTrHiGrAH3bWRFeKgpn/PcKJfkr/pvHcf8DDdjB/FzCmCKW/TuvPvbU+7E5Ru7FJrEvR5CIsmy8dGz14FcI5ux8wnBhys2uB5xLE0vFsnOySji4siMBjItLVEIiuMWDJYWMd3jRkJP9noC+GO5sSeiZU1dLe0/NpERmwBzAAK5eDoI60Mp"});


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
