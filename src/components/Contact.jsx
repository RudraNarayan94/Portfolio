import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <div className="text-center tracking-tighter">
        <h2 className="my-10 text-4xl">Get in Touch</h2>

        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
