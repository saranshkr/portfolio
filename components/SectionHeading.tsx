type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="text-3xl leading-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className="page-copy text-base md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
