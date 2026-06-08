interface ExerciseDescriptionProps {
  description: string;
}

export default function ExerciseDescription({ description }: ExerciseDescriptionProps) {
  return (
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      {description}
    </p>
  );
}
