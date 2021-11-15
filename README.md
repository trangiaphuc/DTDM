# Cloud Computing Project
Cloud Computing Project using NodeJS and ReactJS with AWS Translate 


### Installation: 
- Open <b>aws_t_be/routes/index.js</b> and config your <u>accessKeyId</u> and <u>secretKeyId</u>
- Open Terminal:
 - <b>cd aws_t_be</b>
 - <b>yarn start</b>/ <b>npm start</b>
- Open another Terminal:
 - <b>cd aws_t_fe</b>
 - <b>yarn start</b>/ <b>npm start</b>

### API:
- http://localhost:3000/translate/
- request:     
 + <b>"SourceLanguageCode"</b>: "",/source language code 
 + <b>"TargetLanguageCode"</b>: "", // target language code
 + <b>"Text"</b>: "",//text you want to translate
### Test: 
- Open your Browser
- Navigate to http://localhost:3000/
- Choose Source Language Code
- Choose Target Language Code
- Enter your Text in the Text Area
- Wait for Translation 
