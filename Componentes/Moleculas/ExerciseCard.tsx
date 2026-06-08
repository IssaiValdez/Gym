import { Badge, ExerciseTitle, ExerciseDescription, ExerciseImage } from '../Atomos';

interface ExerciseCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function ExerciseCard({ 
  title, 
  description, 
  image, 
  imageAlt 
}: ExerciseCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <ExerciseImage src={image} alt={imageAlt} />
      <div className="p-4 space-y-3">
        <ExerciseTitle title={title} />
        <ExerciseDescription description={description} />
        <Badge text="Ver detalles →" variant="primary" />
      </div>
    </div>
  );
}
