import { Feature, Navbar } from "./components";
import { Header, How, Testimonials } from "./containers";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <How />
        <Testimonials />
        <Feature />
      </main>
    </>
  );
}

export default App;
