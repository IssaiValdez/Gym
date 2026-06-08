import Image from 'next/image';

interface ExerciseImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ExerciseImage({ 
  src, 
  alt, 
  width = 300, 
  height = 200 
}: ExerciseImageProps) {
  return (
    <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}
