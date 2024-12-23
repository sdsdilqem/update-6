import React from 'react';
import { Shirt, Smartphone } from 'lucide-react';
import FeaturedBanner from './FeaturedBanner';

export default function FeaturedBanners() {
  const banners = [
    {
      title: 'Yeni Kolleksiya',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
      icon: Shirt,
      color: 'bg-purple-500/85',
      link: '/category/geyim'
    },
    {
      title: 'Premium Elektronika',
      image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800',
      icon: Smartphone,
      color: 'bg-blue-500/85',
      link: '/category/elektronika'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-[5px] sm:gap-3">
      {banners.map((banner) => (
        <FeaturedBanner key={banner.title} {...banner} />
      ))}
    </div>
  );
}