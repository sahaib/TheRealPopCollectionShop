"use client"
import { useMemo } from 'react';
import { motion } from 'framer-motion';

const AVATAR_COLORS = [
  ['#7209B7', '#3A0CA3'], // Purple theme
  ['#4361EE', '#4CC9F0'], // Blue theme
  ['#F72585', '#B5179E'], // Pink theme
  ['#4895EF', '#560BAD'], // Indigo theme
  ['#F77F00', '#D62828'], // Orange theme
];

interface ProfileAvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ProfileAvatar = ({ name, size = 'md' }: ProfileAvatarProps) => {
  const [gradientStart, gradientEnd] = useMemo(() => {
    // Generate consistent color based on name
    const index = Math.abs(name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % AVATAR_COLORS.length;
    return AVATAR_COLORS[index];
  }, [name]);

  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const sizeClasses = {
    sm: 'w-12 h-12 text-lg',
    md: 'w-24 h-24 text-2xl',
    lg: 'w-32 h-32 text-4xl'
  };

  return (
    <motion.div
      className={`rounded-full flex items-center justify-center font-bold text-white ${sizeClasses[size]}`}
      style={{
        background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {initials}
    </motion.div>
  );
}; 