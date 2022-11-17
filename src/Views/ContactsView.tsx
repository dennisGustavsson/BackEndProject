import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";
import BreadcrumbSection from "../Sections/BreadcrumbSection";
import ContactFormSection from "../Sections/ContactFormSection";
const ContactsView = () => {


  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage='Contacts' />
      <iframe
        className='map google-map'
        title='google-map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d857.0984240248613!2d15.214954675796243!3d59.27391598348483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14e28e532c05%3A0xafa950e40634bfcb!2s%C3%96rebro%20Slott!5e0!3m2!1ssv!2sse!4v1666713168765!5m2!1ssv!2sse'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
      <ContactFormSection />

      <FooterSection />
    </>
  );
};
export default ContactsView;
