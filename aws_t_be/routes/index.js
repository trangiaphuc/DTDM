var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var got = require('got');
var jsdom = require('jsdom');
const {JSDOM} = jsdom;
var validUrl = require('valid-url');

//Tạo constructor AWS translate
var translate = new AWS.Translate({
  region: "us-east-1",//region//*require
  accessKeyId: "ASIAXKTXZ3MBNO6NFS6I",//access key Id//*require
  secretAccessKey: "8FbWKNCMmc2cF2pWE4Jxd+kUOzZnvORabGmPa/Cm", //secret access key//*require
  sessionToken: "FwoGZXIvYXdzEKr//////////wEaDKCFeIABx/yhGQDcFCLPAajRe2dnssgJMpSJ04RtO5QrbtXyJ1r9AwKt6NUL2+AtBnOANBfeSu4M0UV2xpNwcxYmBaxijfxph9fmJArxWTZXNYE46o+CCGNYFLUb7/KnEJ7QSFSZKipG/jv/b02TbqhzCO8q2cSemhY7LXiYUpK07YlmAH0dkvncEbr1ouDgidltSfHvItOVNGpex9svQ336H0L/8O3jK+enq9+wv8OZyZRlNzCsp3YwOT3ADL+JlxzH/pZmw7avGLpusvXxU7hO5gglVGQetRJ/caT37iiE6rGNBjItEiVCL9WMa6rZNeue11KusSN3O4jvrEJuptLcJ/Y0CZFBN4Ieoj3Oa3uuRBH4"
  //session Token//*require
});

//Test Route
router.post('/', (req, res) => {
  res.status(200).send({message: 'Hello AWS Translate!'})
})

//Translate Route
router.post('/translate', function(req, res, next) {
  //Nhận chuỗi từ request body
  const input = req.body.Text;
  
  //Kiểm tra xem chuỗi có phải là một url trang web hay không
  if(validUrl.isUri(input)){
    //Nếu là url chuyển đến tran wed đó
    got(input)
    .then(response =>{
      //dung JSDOM để lấy body của web
      const dom = new JSDOM(response.body);
      var text = dom.window.document.querySelector('body').textContent;

      //Làm đẹp chuỗi
      text = text.replace(/\r?\n|\r/g, " ");
      text = text.trim();
      
      //Tạo params truyền vào AWS Translate API
      var params = {
        SourceLanguageCode: req.body.SourceLanguageCode, //Ngôn ngữ của văn bản web/* required */
        TargetLanguageCode: req.body.TargetLanguageCode, //Ngôn ngữ muốn chuyển thành/* required */
        Text: text, //Văn bản lấy được từ body web/* required */
      }
      
      //Gọi AWS Translate API translateText()
      translate.translateText(params, function(err, data) {
        if (err) res.status(500).send(err); // Nếu có lỗi xảy ra
        else{
          console.log(data)
          res.status(200).send(data);//Nếu không có lỗi//Thành công
        } 
      });
    })
  }
  else{
    //Nếu người dùng nhập vào là một văn bản thuần
    var params = {
      SourceLanguageCode: req.body.SourceLanguageCode, //Ngôn ngữ của văn bản/* required */
      TargetLanguageCode: req.body.TargetLanguageCode, //Ngôn ngữ muốn chuyển thành/* required */
      Text: input, //Văn bản/* required */
    }
    
    translate.translateText(params, function(err, data) {
      if (err) res.status(500).send(err); // Nếu có lỗi xảy ra
      else     {
        res.status(200).send(data);//Nếu không có lỗi//Thành công
      } 
    });
  }
});

module.exports = router;
