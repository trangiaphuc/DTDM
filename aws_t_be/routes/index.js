var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var got = require('got');
var jsdom = require('jsdom');
const {JSDOM} = jsdom;
var validUrl = require('valid-url');

//Tạo constructor AWS translate
var aws_translate = new AWS.Translate({
  //region//*require
  region: "us-east-1",
  //access key Id//*require
  accessKeyId: "ASIAXKTXZ3MBNXWRT477",
  //secret access key//*require
  secretAccessKey: "WmWjfcc+VOWeGyBFRUTefQEcGAYH9tGZi9waYbM3", 
  //session Token//*require
  sessionToken: "FwoGZXIvYXdzENv//////////wEaDGC5JVLk6fkvXsNZMCLPAbgTC57k1YrgROAUdmaqeZ5mlbQ57mraYIb6XmPhgRZweOQgZFuBN4ZUMaPL/1LnTMn6u8lHM5x2e+YJLLIVFCua6Mo1r4f5eKVDqzZUTgtqTq1bV7++mn2rpCwRQ+qHggi2IT7ZyJQl+gKm7b7N2jx1KXc2bYYnzKZzsRxNcmrS36WnSSAatvq/lj+jYY3X8uazP844RguMBOBqAx8PieuoOuq3qAzU3LFCXRhn2mOYbFdHQ0K+jZAhLbVHMShMKMdIsHWoGhu7UWfRDUXi/yiA27yNBjItrX+STDVRsxykYq4EStpZAay3qsGHjLHsbmObWKBEd7AIR3XnQWcV0P+ASKZ1"
});

//Test Route
router.post('/', (req, res) => {
  res.status(200).send({message: 'Hello AWS Translate!'})
})

//Translate Route
router.post('/translate', function(req, res, next) {
  
  async function urlTranslate(input) {
    try{
      const response = await got(input);
      const dom = new JSDOM(response.body);
      var text = dom.window.document.querySelector('body').textContent;
      //Gọi hàm translate translate văn bản đã lấy được từ url như văn bản thông thường
      translate(req, text);
    }
    catch(err) {
      var data = {};
      data.TranslatedText = "❗You are entering invalid URL! Can not translate!"
      res.send(data);
    }
  }

  function translate(req, text) {
    var params = {
      SourceLanguageCode: req.body.SourceLanguageCode, //Ngôn ngữ của văn bản/* required */
      TargetLanguageCode: req.body.TargetLanguageCode, //Ngôn ngữ muốn chuyển thành/* required */
      Text: text, //Văn bản/* required */
    }

    aws_translate.translateText(params, function(err, data) {
      if (err) res.status(500).send(err); // Nếu có lỗi xảy ra
      else     {
        res.status(200).send(data);//Nếu không có lỗi//Thành công
      } 
    });
  }


  //Nhận chuỗi từ request body
  const input = req.body.Text;
  
  //Kiểm tra xem chuỗi có phải là một url trang web hay không
  if(validUrl.isUri(input)){
    //Nếu là url chuyển đến translate wed đó
    //START ZONE GOT URL
      urlTranslate(input);
      //END GOT URL ZONE
  }
  else{
    //Nếu người dùng nhập vào là một văn bản thuần
    translate(req, input);
  }
});

module.exports = router;
