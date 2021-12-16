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

    componentDidMount() {
        document.title = "AWS Translate";
    }

    callTranslate() {
        if (!(this.state.text === '')) {
            let data = {
                SourceLanguageCode: this.state.sourceLanguageCode, /* required */
                TargetLanguageCode: this.state.targetLanguageCode, /* required */
                Text: this.state.text
            }

            console.log(data.SourceLanguageCode + " " + data.TargetLanguageCode + " " + data.Text);

            axios.post('http://44.192.16.165:9000/translate/', data)
                .then(res => {
                    console.log(res.data);
                    console.log(res.data.TranslatedText);
                    const data = res.data;
                    JSON.stringify(data);
                    this.setState({ translatedText: data.TranslatedText });
                })
        }
        else {
            this.setState({ translatedText: '' });
        }
    }

    handleSelectSourceLanguage(event) {
        this.setState({ sourceLanguageCode: event.target.value },
            () => {
                this.setState({ text: '' });
                this.setState({ translatedText: '' });
            }
        );
    }

    handleSelectTargetLanguage(event) {
        this.setState({ targetLanguageCode: event.target.value },
            () => {
                this.callTranslate();
            }
        );
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value },
            () => {
                this.callTranslate()
            }
        );
    }

    render() {
        let languageData =
            [
                { "value": "en", "text": "English" },
                { "value": "vi", "text": "Vietnamese" },
                { "value": "af", "text": "Afrikaans" },
                { "value": "sq", "text": "Albanian" },
                { "value": "am", "text": "Amharic" },
                { "value": "ar", "text": "Arabic" },
                { "value": "hy", "text": "Armenian" },
                { "value": "az", "text": "Azerbaijani" },
                { "value": "bn", "text": "Bengali" },
                { "value": "bs", "text": "Bosnian" },
                { "value": "bg", "text": "Bulgarian" },
                { "value": "ca", "text": "Catalan" },
                { "value": "zh", "text": "Chinese (Simplified)" },
                { "value": "zh-TW", "text": "Chinese (Traditional)" },
                { "value": "hr", "text": "Croatian" },
                { "value": "cs", "text": "Czech" },
                { "value": "da", "text": "Danish" },
                { "value": "fa-AF", "text": "Dari" },
                { "value": "nl", "text": "Dutch" },
                { "value": "et", "text": "Estonian" },
                { "value": "fa", "text": "Farsi (Persian)" },
                { "value": "tl", "text": "Filipino, Tagalog" },
                { "value": "fi", "text": "Finnish" },
                { "value": "fr", "text": "French" },
                { "value": "fr-CA", "text": "French (Canada)" },
                { "value": "ka", "text": "Georgian" },
                { "value": "de", "text": "German" },
                { "value": "el", "text": "Greek" },
                { "value": "gu", "text": "Gujarati" },
                { "value": "ht", "text": "Haitian Creole" },
                { "value": "ha", "text": "Hausa" },
                { "value": "he", "text": "Hebrew" },
                { "value": "hi", "text": "Hindi" },
                { "value": "hu", "text": "Hungarian" },
                { "value": "is", "text": "Icelandic" },
                { "value": "id", "text": "Indonesian" },
                { "value": "ga", "text": "Irish" },
                { "value": "it", "text": "Italian" },
                { "value": "ja", "text": "Japanese" },
                { "value": "kn", "text": "Kannada" },
                { "value": "kk", "text": "Kazakh" },
                { "value": "ko", "text": "Korean" },
                { "value": "lv", "text": "Latvian" },
                { "value": "lt", "text": "Lithuanian" },
                { "value": "mk", "text": "Macedonian" },
                { "value": "ms", "text": "Malay" },
                { "value": "ml", "text": "Malayalam" },
                { "value": "mt", "text": "Maltese" },
                { "value": "mr", "text": "Marathi" },
                { "value": "mn", "text": "Mongolian" },
                { "value": "no", "text": "Norwegian" },
                { "value": "ps", "text": "Pashto" },
                { "value": "pl", "text": "Polish" },
                { "value": "pt", "text": "Portuguese" },
                { "value": "pt-PT", "text": "Portuguese (Portugal)" },
                { "value": "pa", "text": "Punjabi" },
                { "value": "ro", "text": "Romanian" },
                { "value": "ru", "text": "Russian" },
                { "value": "sr", "text": "Serbian" },
                { "value": "si", "text": "Sinhala" },
                { "value": "sk", "text": "Slovak" },
                { "value": "sl", "text": "Slovenian" },
                { "value": "so", "text": "Somali" },
                { "value": "es", "text": "Spanish" },
                { "value": "es-MX", "text": "Spanish (Mexico)" },
                { "value": "sw", "text": "Swahili" },
                { "value": "sv", "text": "Swedish" },
                { "value": "ta", "text": "Tamil" },
                { "value": "te", "text": "Telugu" },
                { "value": "th", "text": "Thai" },
                { "value": "tr", "text": "Turkish" },
                { "value": "uk", "text": "Ukrainian" },
                { "value": "ur", "text": "Urdu" },
                { "value": "uz", "text": "Uzbek" },
                { "value": "cy", "text": "Welsh" },
            ];

        const renderLanguage = languageData.map((item, i) => {
            return (
                <option key={i} value={item.value}>{item.text}</option>
            )
        }, this)
        return (
            <form className="m-2">
                <div className="d-flex justify-content-between">
                    <div className="form-group w-100 p-3">

                        <b htmlFor="exampleFormControlSelect1" style={{ color: "#162B3C" }} >SOURCE LANGUAGE</b>

                        <select
                            className="form-select form-select mb-3"
                            aria-label=".form-select-lg example"
                            value={this.state.sourceLanguageCode}
                            onChange={this.handleSelectSourceLanguage}>
                            {renderLanguage}
                        </select>

                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            type="text"
                            rows="18"
                            value={this.state.text}
                            placeholder="Enter Your Text Here"
                            onChange={this.handleTextChange}
                        ></textarea>

                    </div>
                    <div className="form-group w-100 p-3">

                        <b htmlFor="exampleFormControlSelect1" style={{ color: "#162B3C" }}>TARGET LANGUAGE</b>

                        <select
                            className="form-select form-select mb-3"
                            aria-label=".form-select-lg example"
                            value={this.state.targetLanguageCode}
                            onChange={this.handleSelectTargetLanguage}>
                            {renderLanguage}
                        </select>

                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            type="text"
                            rows="18"
                            value={this.state.translatedText}
                            placeholder="Translattion"
                            readOnly={true}
                        ></textarea>

                    </div>
                </div>
            </form>
        )
    }
}