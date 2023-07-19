import { Navbar } from "./components";
import { Header, How } from "./containers";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <How />
      </main>
    </>
  );
}

export default App;
