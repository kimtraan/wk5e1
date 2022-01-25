import "./App.css";
import TextInput from "./TextInput.js";

function App() {
  return (
    <div className="App">
      <header className="header">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
      </style>
        <div className="logo" />
        <span className="title">Chipchat</span>
      </header>
      <TextInput />
    </div>
  );
}

export default App;
