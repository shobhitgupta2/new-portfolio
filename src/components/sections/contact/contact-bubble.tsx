interface ContactProps {
  name: string;
  url: string;
}

export const ContactBubble = ({ name, url }: ContactProps) => {
  return (
    <a
      href={url}
      className="transition-colors duration-200
          bg-neutral-600 hover:bg-neutral-800 rounded-full text-neutral-100
          dark:
          px-4 py-2"
    >
      {name}
    </a>
  );
};
