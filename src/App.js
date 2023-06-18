import "./App.css";

function App() {
  function createNewStudent() {
    console.log("hi");
  }

  return (
    <div className="App">
      <form onSubmit={createNewStudent}>
        <p>Enter your name</p>
        <input type="text" placeholder="Your Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
