import { CTA, Header } from "../components";
import { How, Testimonials } from "../containers";
import MainLayout from "../layouts/MainLayout";
import image from "../assets/header-parents.jpg";
import ctaImage from "../assets/cta-parents.webp";

function Sitters() {
  const content = {
    heading: "Become a sitter, on your own time",
    text: "Sitter is the petcare solution created for the people who need it as much as the people who provide it. We connect sitters with families who are in a pinch and need backup care.",
    btnText: "Join us",
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

export default Sitters;
