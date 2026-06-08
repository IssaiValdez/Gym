import { ExerciseCard } from '../Moleculas';

interface Exercise {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ExercisesListProps {
  exercises: Exercise[];
}

export default function ExercisesList({ exercises }: ExercisesListProps) {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            title={exercise.title}
            description={exercise.description}
            image={exercise.image}
            imageAlt={exercise.title}
          />
        ))}
      </div>
    </section>
  );
}
