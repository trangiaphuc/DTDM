# DTDM
Cloud Computing Project using NodeJS and ReactJS with AWS Translate 


##Installation: 
- Open aws_t_be/routes/index.js and config your accessKeyId and secretKeyId
- Open Terminal:
 - cd aws_t_be
 - yarn start/ npm start
- Open another Terminal:
 - cd aws_t_fe
 - yarn start/ npm start

##API:
- localhost:9000/translate
- request:     
  + "SourceLanguageCode": "",/source language code 
  + "TargetLanguageCode": "", // target language code
  + "Text": "",//text you want to translate
##Test: 
- Open your Browser
- Navigate to localhost:3000/
- Choose Source Language Code
- Choose Target Language Code
- Enter your Text in the Text Area
- Wait for Translation 
