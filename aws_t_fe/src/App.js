import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TranslationComponent from './components/translate';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
        <TranslationComponent/>
      </body>
    </div>
  );
}

export default App;
