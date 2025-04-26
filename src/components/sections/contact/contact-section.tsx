import { contacts } from "@/data/contacts";
import { ContactBubble } from "@/components/sections/contact/contact-bubble";

export const ContactSection = () => {
  return (
    <div
      id="experience-section"
      className="flex flex-col items-start justify-center w-full my-12 md:my-24"
    >
      <h2 className="text-4xl md:text-6xl my-12 px-4">get in touch</h2>
      <div className="px-4 flex flex-row gap-4">
        {contacts.map((contact) => (
          <ContactBubble
            key={contact.name}
            name={contact.name}
            url={contact.url}
          />
        ))}
      </div>
    </div>
  );
};
