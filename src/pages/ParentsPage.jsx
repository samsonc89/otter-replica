import { CTA, Header } from "../components";
import { How } from "../containers";
import MainLayout from "../layouts/MainLayout";
import image from "../assets/header-parents.jpg";

function Parents() {
  const content = {
    heading: "Quality petcare, when you need it",
    text: "Sitter's care options are designed to cater to both planned and unplanned schedule changes, with sitters available with as little as 2 hours notice.",
    btnText: "Book petcare",
    img: image,
    topShape: "middle-left",
    bottomShape: "bottom-left",
    bottomColor: "#94954c",
    ctaHeading: "Experienced petcare is right around the corner.",
    ctaBtn: "Book petcare",
  };
  return (
    <>
      <MainLayout>
        <Header props={content} />
        <How />
        <CTA props={content} />
      </MainLayout>
    </>
  );
}

export default Parents;
