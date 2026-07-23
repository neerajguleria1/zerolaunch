import {
  Rocket, Code2, Brain, Globe, Smartphone, TrendingUp, Shield,
  Search, Microscope, Map, Palette, Bug, Cloud, HeartHandshake,
  Heart, DollarSign, ShoppingCart, GraduationCap, Building2,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Rocket, Code2, Brain, Globe, Smartphone, TrendingUp, Shield,
  Search, Microscope, Map, Palette, Bug, Cloud, HeartHandshake,
  Heart, DollarSign, ShoppingCart, GraduationCap, Building2,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className, size = 24 }: IconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
}
