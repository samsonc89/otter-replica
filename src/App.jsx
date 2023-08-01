import { Feature } from "./components";
import { Hero, How, Questions, Testimonials, Why } from "./containers";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <How />
        <Testimonials />
        <Feature />
        <Why />
        <Questions />
      </MainLayout>
    </>
  );
}

export default App;
