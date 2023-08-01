import { Header } from "../components";
import { How } from "../containers";
import MainLayout from "../layouts/MainLayout";

function Parents() {
  const headingCopy = {
    heading: "Quality petcare, when you need it",
    text: "Sitter's care options are designed to cater to both planned and unplanned schedule changes, with sitters available with as little as 2 hours notice.",
  };
  return (
    <>
      <MainLayout>
        <Header />
        <How />
      </MainLayout>
    </>
  );
}

export default Parents;
