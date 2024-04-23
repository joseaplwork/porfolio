interface Props {
  text: string;
}

export default function Chip({ text }: Props) {
  return (
    <span className="inline-block text-secondary-color text-xs px-2 border-2 border-secondary-color rounded-full">
      {text}
    </span>
  );
}
