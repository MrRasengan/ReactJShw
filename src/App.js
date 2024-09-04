import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

function App() {
  return (
      <div className="app-container">
      <img src={logo} className="App-logo" alt="logo" />
      <Message text="Привет, это сообщение для домашнего задания по Reactу)))!" />
      <Message text="Это еще одно сообщение дополнительно." />
    </div>
  );
}

export default App;
