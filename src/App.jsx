import { Feature } from "./components";
import { Header, How, Questions, Testimonials, Why } from "./containers";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Header />
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
