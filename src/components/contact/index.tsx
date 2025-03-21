import ContactForm from "./contact-form";

const ContactSection = () => {
  return (
    <section className="project bg-[#2D2DC3]" id="contact">
      <div className="max-w-[1536px] flex flex-col gap-[36px] mx-auto md:p-[100px] px-[24px] py-[60px]">
        <div className="flex items-center w-full justify-between">
          <header>
            <span className="uppercase font-semibold">Collaboration</span>
            <h2 className="md:text-[54px] font-bold pt-[15px] text-[32px] md:leading-[102%]">
              Got a project ?
              <br />
              Let's Talk.
            </h2>
          </header>
        </div>

        <div className="w-full h-[1px] bg-white" />

        <p className="max-w-[716px]">
          We're a team of creatives who are excited about unique ideas and help
          digital and fin-tech companies to create amazing identity by crafting
          top-notch UI/UX.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
