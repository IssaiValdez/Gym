interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary';
}

export default function Badge({ text, variant = 'primary' }: BadgeProps) {
  const baseStyles = 'px-3 py-1 rounded-full text-sm font-medium';
  const variants = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-200 text-gray-800'
  };

  return (
    <span className={`${baseStyles} ${variants[variant]}`}>
      {text}
    </span>
  );
}
