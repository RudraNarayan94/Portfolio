import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <div className="text-center tracking-tighter">
        <h2 className="my-10 text-4xl">Get in Touch</h2>

        {/* <p className="my-4">{CONTACT.address}</p> */}
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </p>

        {/* Classic Contact Form */}
        <form
          className="mt-10 mx-auto max-w-lg text-left px-4"
          action={`mailto:${CONTACT.email}`}
          method="POST"
          encType="text/plain">
          <div className="mb-4">
            <label className="block mb-2 text-sm text-stone-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 rounded bg-stone-900 text-white border border-stone-700 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm text-stone-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 rounded bg-stone-900 text-white border border-stone-700 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm text-stone-300">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-2 rounded bg-stone-900 text-white border border-stone-700 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition-all">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
