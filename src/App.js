import './App.css';
import NavBar from "./components/NavBar"

function App() {

  const styles = {
    backgroundColor: "white",
    color: "black",
  }

  return (
    <div className="App">
      <header className="App-header" style = {styles}>
        <NavBar/>
      </header>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
