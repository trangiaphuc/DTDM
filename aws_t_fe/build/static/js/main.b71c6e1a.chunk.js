(this.webpackJsonpaws_t_fe=this.webpackJsonpaws_t_fe||[]).push([[0],{25:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var l=a(2),n=a.n(l),u=a(19),i=a.n(u),r=(a(25),a(26),a(6)),s=a(7),c=a(3),A=a(9),o=a(8),x=a(20),v=a.n(x),g=a(0),h=function(e){Object(A.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={text:"",translatedText:"",sourceLanguageCode:"en",targetLanguageCode:"vi"},e.handleTextChange=e.handleTextChange.bind(Object(c.a)(e)),e.handleSelectSourceLanguage=e.handleSelectSourceLanguage.bind(Object(c.a)(e)),e.handleSelectTargetLanguage=e.handleSelectTargetLanguage.bind(Object(c.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title="AWS Translate"}},{key:"callTranslate",value:function(){var e=this;if(""!==this.state.text){var t={SourceLanguageCode:this.state.sourceLanguageCode,TargetLanguageCode:this.state.targetLanguageCode,Text:this.state.text};console.log(t.SourceLanguageCode+" "+t.TargetLanguageCode+" "+t.Text),v.a.post("http://35.175.248.10:9000/translate",t).then((function(t){console.log(t.data.TranslatedText),e.setState({translatedText:t.data.TranslatedText})}))}else this.setState({translatedText:""})}},{key:"handleSelectSourceLanguage",value:function(e){var t=this;this.setState({sourceLanguageCode:e.target.value},(function(){t.setState({text:""}),t.setState({translatedText:""})}))}},{key:"handleSelectTargetLanguage",value:function(e){var t=this;this.setState({targetLanguageCode:e.target.value},(function(){t.callTranslate()}))}},{key:"handleTextChange",value:function(e){var t=this;this.setState({text:e.target.value},(function(){t.callTranslate()}))}},{key:"render",value:function(){var e=[{value:"en",text:"English"},{value:"vi",text:"Vietnamese"},{value:"af",text:"Afrikaans"},{value:"sq",text:"Albanian"},{value:"am",text:"Amharic"},{value:"ar",text:"Arabic"},{value:"hy",text:"Armenian"},{value:"az",text:"Azerbaijani"},{value:"bn",text:"Bengali"},{value:"bs",text:"Bosnian"},{value:"bg",text:"Bulgarian"},{value:"ca",text:"Catalan"},{value:"zh",text:"Chinese (Simplified)"},{value:"zh-TW",text:"Chinese (Traditional)"},{value:"hr",text:"Croatian"},{value:"cs",text:"Czech"},{value:"da",text:"Danish"},{value:"fa-AF",text:"Dari"},{value:"nl",text:"Dutch"},{value:"et",text:"Estonian"},{value:"fa",text:"Farsi (Persian)"},{value:"tl",text:"Filipino, Tagalog"},{value:"fi",text:"Finnish"},{value:"fr",text:"French"},{value:"fr-CA",text:"French (Canada)"},{value:"ka",text:"Georgian"},{value:"de",text:"German"},{value:"el",text:"Greek"},{value:"gu",text:"Gujarati"},{value:"ht",text:"Haitian Creole"},{value:"ha",text:"Hausa"},{value:"he",text:"Hebrew"},{value:"hi",text:"Hindi"},{value:"hu",text:"Hungarian"},{value:"is",text:"Icelandic"},{value:"id",text:"Indonesian"},{value:"ga",text:"Irish"},{value:"it",text:"Italian"},{value:"ja",text:"Japanese"},{value:"kn",text:"Kannada"},{value:"kk",text:"Kazakh"},{value:"ko",text:"Korean"},{value:"lv",text:"Latvian"},{value:"lt",text:"Lithuanian"},{value:"mk",text:"Macedonian"},{value:"ms",text:"Malay"},{value:"ml",text:"Malayalam"},{value:"mt",text:"Maltese"},{value:"mr",text:"Marathi"},{value:"mn",text:"Mongolian"},{value:"no",text:"Norwegian"},{value:"ps",text:"Pashto"},{value:"pl",text:"Polish"},{value:"pt",text:"Portuguese"},{value:"pt-PT",text:"Portuguese (Portugal)"},{value:"pa",text:"Punjabi"},{value:"ro",text:"Romanian"},{value:"ru",text:"Russian"},{value:"sr",text:"Serbian"},{value:"si",text:"Sinhala"},{value:"sk",text:"Slovak"},{value:"sl",text:"Slovenian"},{value:"so",text:"Somali"},{value:"es",text:"Spanish"},{value:"es-MX",text:"Spanish (Mexico)"},{value:"sw",text:"Swahili"},{value:"sv",text:"Swedish"},{value:"ta",text:"Tamil"},{value:"te",text:"Telugu"},{value:"th",text:"Thai"},{value:"tr",text:"Turkish"},{value:"uk",text:"Ukrainian"},{value:"ur",text:"Urdu"},{value:"uz",text:"Uzbek"},{value:"cy",text:"Welsh"}].map((function(e,t){return Object(g.jsx)("option",{value:e.value,children:e.text},t)}),this);return Object(g.jsx)("form",{className:"m-2",children:Object(g.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(g.jsxs)("div",{className:"form-group w-100 p-3",children:[Object(g.jsx)("b",{htmlFor:"exampleFormControlSelect1",style:{color:"#162B3C"},children:"SOURCE LANGUAGE"}),Object(g.jsx)("select",{className:"form-select form-select mb-3","aria-label":".form-select-lg example",value:this.state.sourceLanguageCode,onChange:this.handleSelectSourceLanguage,children:e}),Object(g.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",type:"text",rows:"18",value:this.state.text,placeholder:"Enter Your Text Here",onChange:this.handleTextChange})]}),Object(g.jsxs)("div",{className:"form-group w-100 p-3",children:[Object(g.jsx)("b",{htmlFor:"exampleFormControlSelect1",style:{color:"#162B3C"},children:"TARGET LANGUAGE"}),Object(g.jsx)("select",{className:"form-select form-select mb-3","aria-label":".form-select-lg example",value:this.state.targetLanguageCode,onChange:this.handleSelectTargetLanguage,children:e}),Object(g.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",type:"text",rows:"18",value:this.state.translatedText,placeholder:"Translattion",readOnly:!0})]})]})})}}]),a}(n.a.Component),b=function(e){Object(A.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{children:Object(g.jsx)("div",{children:Object(g.jsx)("nav",{className:"navbar text-white",style:{backgroundColor:"#162B3C"},children:Object(g.jsx)("div",{className:"container-fluid",children:Object(g.jsxs)("span",{className:"navbar-brand mb-0 h1",children:[Object(g.jsx)("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/7AARRHVja3kAAQAEAAAAPAAA/+EDO2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4NCjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4NCgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJCQzFGMTlFMkJGQzExRUFBNjVFQkExOTU5Mjc4MkM3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJCQzFGMTlGMkJGQzExRUFBNjVFQkExOTU5Mjc4MkM3Ij4NCgkJCTx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJCQzFGMTlDMkJGQzExRUFBNjVFQkExOTU5Mjc4MkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJCQzFGMTlEMkJGQzExRUFBNjVFQkExOTU5Mjc4MkM3Ii8+DQoJCTwvcmRmOkRlc2NyaXB0aW9uPg0KCTwvcmRmOlJERj4NCjwveDp4bXBtZXRhPg0KPD94cGFja2V0IGVuZD0ndyc/Pv/bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIADIAMgMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APybooroPCvwk8XePNAvdW0Hwj4r17SdNz9svtN0e5u7W0wMnzJY0ZEwOTuIwK+wPj7N7HP0VM1hcJpFvqDW9wun3bMkF0YmEE7LjcEfG1iMjIBJGRU0nh3UodVt7F9N1GO/uxGYLVrVxPOJMeXsTG5t+RtwDuzxmgCnRXQeFvhJ4u8dWmqXGh+EfFeuW+hsU1KXTtHubuPTmHJE7RowiI9HxXPI6yIGU7lbkEd6A1FooooACcCv02/ZquPGf7J2vfso6J4w/a4+Kng/XPHNpoPiLwn8N/Cnh261LRYtIv7/AP0OC+23ttDM123mo6eRM8Z3bt4CFvzLhRZZkVpEhVmCtI4YrGCeWIUFsDqdoJ44BPFfVXiL9ur9qH9nb4KeF/C8viqax8LaJpr6R4S8W2Ol2F1dWemupT7NpuvJE08Ue35Qsc6zRKFT92FCL5+MxNGNSGHnOKlO/Km0nKy15b7tbtLWx3YWnPklWUW4xtdq9l622v0vofZPxH+Alt+3J4i/al/Zn0uH7JN4F/aI0nxpoltbKxeHT9ZvhpGreUqg+Xb2y3JunAwAZScccd34s+Mmg/tC/tReGf22YYbO+0D4C+HfiNZ3UKQeVZTvomoSxeHLUkEgTXNtrtrIvIJeFiOFFfl74S/4KS/HHwN+1B4m+NWj/EK8sfih4ysn07Wdej02x331u626mMwmDyEGLW3wUjUgxKQQck8f4S/am+IPgT9mHxH8F9I8TXFj8L/F2pQaxq+gLbW7RXt3CbcxymVozMuDa22VSRVbyVyDzmvqs+/9NWf/AACvrcO39J3XU+4P2T/2ytH/AGr/AIBfBv4L6X+0Z8Uv2aPjJ4d1O806K60hbqXw38RNU1PUPNilvXspo5o7qSeRVd7kNCpkYgEOQPg/4/8AgnxJ8NPj5468O+MbiK78X6D4i1DT9cuIpfOjub6K5kS4lV9q7leQOwYqpIYEqp4H0R+x/wD8FD/jPpWn6N4S0X4geDdB/wCEH0/yPD2p6h8OoPEWvaLapvYpZTQ6fcXASMFiTMwVFbCtgBR4L+0l8Or74c/FBzqXiqHxtdeJ7ODxOdbVpzLqQvgbgTTeeBL50m/zG35Y+YCTkkDip5rhYZi8sbaquPMlyys11anyqL3Wik2u2htWwdeeDWNteF+W9479uXmcvnZI4OiiivbPJCvQfgR+1L46/ZuuLgeFdaaDTb4k3uk3cQutNvs4B8yB/lyQAC6bXwMbscV59RXDmWW4TMMPLCY6lGpTlvGSUk+2jutN0+j1R1YPG4jCVVXws3Ca2cW0/vR9MW37afwn8ZxKfG37OPg2a9bma78N3raSsrdz5KIDz6mUmkuv2p/gB4f/AHmg/s3211c/wnWPEs8sKn1MbCUMPbjPrXzRRXxv/EM8lTtCVeMP5I4rExh/4CqySXkrLyPov9dMyavJUnL+Z0KLl97p6+ruz1z4s/tq+Mfib4WuvDen2/h7wF4PvMrPoPhPT10u1u15GJ2T95KCDgqWCHrt9PPfiP8AEDUvip461LxDqxg+3anIrNHBH5cFvGiLHFDEuTtjjjRI0UkkKigknJOLRX02V8O5ZlqSwFCNO19UtXzcrk295OXLG7bbfKrvRHi47N8bjL/Wqrle2jeml7WWyS5nZKyV33CiiivaPNCiiigAooooAKKKKACiiigD/9k=",alt:"logo"}),"AWS Translate"]})})})})})}}]),a}(n.a.Component);var d=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(b,{}),Object(g.jsx)(h,{})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,u=t.getLCP,i=t.getTTFB;a(e),l(e),n(e),u(e),i(e)}))};i.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(d,{})}),document.getElementById("root")),j()}},[[46,1,2]]]);
//# sourceMappingURL=main.b71c6e1a.chunk.js.map