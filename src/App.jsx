import { Feature, Navbar } from "./components";
import { Header, How, Questions, Testimonials, Why } from "./containers";

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
        <Questions />
      </main>
    </>
  );
}

export default App;
