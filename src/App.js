import "./App.css";

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
      <footer className="footer">
        <input className="text-input" placeholder ="write a message..." />
        <button className="send">↑</button>
      </footer>
    </div>
  );
}

export default App;
