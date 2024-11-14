import "./App.css";
import { Container } from "./components/Container";
import { Counter } from "./components/state/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Container styles={{ margin: 10 }}></Container>
    </div>
  );
}

export default App;
