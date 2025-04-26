interface ExperienceProps {
  company: string;
  role: string;
  start: string;
  end: string;
}

export const ExperienceCard = ({
  company,
  role,
  start,
  end,
}: ExperienceProps) => {
  return (
    <div className="w-full px-4 md:px-8 flex flex-col text-left border-b border-neutral-700 py-4 md:gap-2">
      <div className="w-full flex flex-row justify-between">
        <h3 className="text-lg md:text-4xl text-primary">{company}</h3>
        <h3 className="text-xs md:text-lg text-neutral-400 flex flex-col justify-center">
          {start} - {end}
        </h3>
      </div>

      <h4 className="w-full text-sm md:text-2xl">{role}</h4>
    </div>
  );
};
