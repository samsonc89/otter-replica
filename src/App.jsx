import { Navbar } from "./components";
import { Header, How, Testimonials } from "./containers";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <How />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
