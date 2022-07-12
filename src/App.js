import "./App.css";
import Form from "./components/Form";
import IntroText from "./components/IntroText";

function App() {
  return (
    <main className="App">
      <section className="container">
        <IntroText />
        <Form />
      </section>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Daveamegs">DaveAmegs</a>.
        </p>
      </footer>
    </main>
  );
}

export default App;
