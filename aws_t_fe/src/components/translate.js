import React from 'react'
import axios from 'axios';

export default class TranslationComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '', 
            translatedText: '',
            sourceLanguageCode: 'en',
            targetLanguageCode: 'vi',
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSelectSourceLanguage = this.handleSelectSourceLanguage.bind(this);
        this.handleSelectTargetLanguage = this.handleSelectTargetLanguage.bind(this);
    }

    componentDidMount(){
        document.title = "AWS Translate";
    }

    handleSelectSourceLanguage(event) {
        this.setState({sourceLanguageCode: event.target.value}, 
            ()=>{
                if(!(this.state.text === '')){
                    let data ={
                        SourceLanguageCode: this.state.sourceLanguageCode, /* required */
                        TargetLanguageCode: this.state.targetLanguageCode, /* required */
                        Text: this.state.text
                    }
                    
                    axios.post('http://localhost:9000/translate', data)
                    .then(res=>{
                        console.log(res.data.TranslatedText);
                        this.setState({translatedText: res.data.TranslatedText});
                    });
                }
            }
        );
    }

    handleSelectTargetLanguage(event) {
        this.setState({targetLanguageCode: event.target.value},
            ()=>{
                if(!(this.state.text === '')){
                    let data ={
                        SourceLanguageCode: this.state.sourceLanguageCode, /* required */
                        TargetLanguageCode: this.state.targetLanguageCode, /* required */
                        Text: this.state.text
                    }
                    
                    axios.post('http://localhost:9000/translate', data)
                    .then(res=>{
                        console.log(res.data.TranslatedText);
                        this.setState({translatedText: res.data.TranslatedText});
                    });
                }
            }
        );
    }

    handleTextChange(event) {
        this.setState({text: event.target.value}, 
            ()=>{
                let data ={
                    SourceLanguageCode: this.state.sourceLanguageCode, /* required */
                    TargetLanguageCode: this.state.targetLanguageCode, /* required */
                    Text: this.state.text
                }
                
                axios.post('http://localhost:9000/translate', data)
                .then(res=>{
                    console.log(res.data.TranslatedText);
                    this.setState({translatedText: res.data.TranslatedText});
                });
            }
        );
    }    
    render() {
        return (
        <form>
            <div className="d-flex justify-content-between">
                <div className="form-group w-100 p-3">
                    <label htmlFor="exampleFormControlSelect1">Select Source Language</label>
                    <select 
                        className="form-select form-select mb-3" 
                        aria-label=".form-select-lg example"
                        onChange={this.handleSelectSourceLanguage}>
                        <option defaultValue value="en">English</option>
                        <option value="vi">Vietnamese</option>
                        <option value="de">Germany</option>
                    </select>
                    
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1"
                        type="text" 
                        rows="20"
                        value={this.state.text} 
                        placeholder="Enter Your Text Here"
                        onChange={this.handleTextChange} 
                        ></textarea>
                </div>
                <div className="form-group w-100 p-3">
                    <label htmlFor="exampleFormControlSelect1">Select Source Language</label>
                    <select 
                    className="form-select form-select mb-3" 
                    aria-label=".form-select-lg example"
                    onChange={this.handleSelectTargetLanguage}>
                        <option defaultValue value="en">English</option>
                        <option value="vi">Vietnamese</option>
                        <option value="de">Germany</option>
                    </select>
            
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1"
                        type="text" 
                        rows = "20" 
                        value={this.state.translatedText} 
                        placeholder="Translattion"
                        readOnly = {true}
                        ></textarea>
                </div>
            </div>
        </form>
        )
    }
}