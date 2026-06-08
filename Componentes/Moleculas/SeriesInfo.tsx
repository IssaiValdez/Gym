import Badge from '../Atomos/Badge';

interface SeriesInfoProps {
  series: number;
  repetitions: number;
}

export default function SeriesInfo({ series, repetitions }: SeriesInfoProps) {
  return (
    <Badge 
      text={`${series} series x ${repetitions} repeticiones`} 
      variant="secondary" 
    />
  );
}
