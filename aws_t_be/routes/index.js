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
  accessKeyId: "ASIAXKTXZ3MBOPLC55Z2",
  //secret access key//*require
  secretAccessKey: "Icu47czNLbDFHIR3neyold1vkGOXF8lkMG1Suokg", 
  //session Token//*require
  sessionToken: "FwoGZXIvYXdzELD//////////wEaDF7lt/zjOBn5ZiX3BiLPAV9XyMxwC6LB+Nb29OSEREGrAcxwhlzVM6eyYYixesT0lIv1B9P1hV9Kq/OjMgPnUzOTnbKyoiHxMr8cgpiGAbuUAC2smWIATrzLyt2rro70H6pnhVPQC8XLftrWl8DjK3yBHpKQA9kZgIFzoukLxohCEZj+9cJe0MUyeCwgxDuBzPziwIAjtia5hq6aKgeDwS/qVCWYd8H4AucpPEdGqBozUwfgIS9JuKQk/CKGyZabCR3rVlXLOGRPbDCaRTlUt4Icmd3eaR9TEpZCVwNsqijgtuuNBjIt75VYmqa1IgytGzjhqfEgjr4kfOQCRhQt5po9L8jZRgHlZcDKuG6skIHtC8Ab"
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
      console.log(text);
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
