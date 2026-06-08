'use client';

import { PageHeader, ExercisesList } from '@/Componentes/Organismos';

interface Exercise {
  id: number;
  title: string;
  description: string;
  image: string;
}

const EXERCISES: Exercise[] = [
  {
    id: 1,
    title: 'Puxada frontal',
    description: '3 series x 12 repeticiones',
    image: '/exercises/puxada-frontal.svg'
  },
  {
    id: 2,
    title: 'Remada curvada',
    description: '3 series x 12 repeticiones',
    image: '/exercises/remada-curvada.svg'
  },
  {
    id: 3,
    title: 'Remada unilateral',
    description: '3 series x 12 repeticiones',
    image: '/exercises/remada-unilateral.svg'
  },
  {
    id: 4,
    title: 'Levantamiento terra',
    description: '3 series x 12 repeticiones',
    image: '/exercises/levantamiento-tierra.svg'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <PageHeader 
          title="Ejercicios de Gimnasio"
          subtitle="Rutina de entrenamiento completa"
        />
        <ExercisesList exercises={EXERCISES} />
      </main>
    </div>
  );
}
