import { CTA, Header } from "../components";
import { How, Testimonials } from "../containers";
import MainLayout from "../layouts/MainLayout";
import image from "../assets/header-sitters.jpg";
import ctaImage from "../assets/cta-parents.webp";

function Sitters() {
  const content = {
    heading: "Become a sitter, on your own time",
    text: "Sitter is the petcare solution created for the people who need it as much as the people who provide it. We connect sitters with families who are in a pinch and need backup care.",
    btnText: "Join us",
    img: image,
    topShape: "bottom-right",
    bottomShape: "middle-left",
    bottomColor: "#fbd3b6",
    ctaHeading: "Make people’s day with kind, compassionate petcare.",
    ctaBtn: "Sign up",
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
