import { Feature, Navbar } from "./components";
import {
  Footer,
  Header,
  How,
  Questions,
  Testimonials,
  Why,
} from "./containers";

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
      <Footer />
    </>
  );
}

export default App;
