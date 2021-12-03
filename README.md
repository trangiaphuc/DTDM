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

### Hosting AWS:
#### Host Back End using EC2:
- Create EC2 Instance
- Config SecurityGroup Inbound Rule
- Connect EC2 using SSH
- Pull this project using cmd: git pull https://github.com/trangiaphuc/DTDM.git
- <b>cd aws_t_be</b>
- Config aws-sdk:
   - <b>cd routes</b>
   - <b>vi index.js</b>
   - Press i in your keyboard
   - Update acessKeyId, secretKeyId, sessionToken
   - Press Esc in your keyboard, then enter :wq to quit Vim editor
   - <b>cd ..</b> to return to aws_t_be
- Start Back End with cmd: <b>npm start</b>
- Copy the <b>Public IPV4 Address</b>. Using this IPV4 to call API in Front End.
#### Host Front End using S3:
- Create S3 Bucket
- coming soon...

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
