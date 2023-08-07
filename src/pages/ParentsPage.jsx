import { Header } from "../components";
import { How } from "../containers";
import MainLayout from "../layouts/MainLayout";

function Parents() {
  const headingContent = {
    heading: "Quality petcare, when you need it",
    text: "Sitter's care options are designed to cater to both planned and unplanned schedule changes, with sitters available with as little as 2 hours notice.",
    btnText: "Book petcare",
  };
  return (
    <>
      <MainLayout>
        <Header props={headingContent} />
        <How />
      </MainLayout>
    </>
  );
}

export default Parents;
