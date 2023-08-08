import { CTA, Header } from "../components";
import { How, Testimonials } from "../containers";
import MainLayout from "../layouts/MainLayout";
import image from "../assets/header-parents.jpg";
import ctaImage from "../assets/cta-parents.webp";

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
    ctaImg: ctaImage,
  };
  return (
    <>
      <MainLayout>
        <Header props={content} />
        <How />
        <CTA props={content} />
        <Testimonials filter={"Parent"} />
      </MainLayout>
    </>
  );
}

export default Parents;
