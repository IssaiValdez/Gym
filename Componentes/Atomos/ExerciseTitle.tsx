interface ExerciseTitleProps {
  title: string;
}

export default function ExerciseTitle({ title }: ExerciseTitleProps) {
  return (
    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
      {title}
    </h3>
  );
}
