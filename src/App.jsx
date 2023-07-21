import { Feature, Navbar } from "./components";
import { Header, How, Testimonials, Why } from "./containers";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <How />
        <Testimonials />
        <Feature />
        <Why />
      </main>
    </>
  );
}

export default App;
