import React, { useState } from 'react';
import { Heart, MessageCircle, BarChart2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CommentsSheet from './CommentsSheet';
import StatisticsSheet from './statistics/StatisticsSheet';
import { sampleComments } from '../data/sampleComments';
import type { Post as PostType } from '../types/post';

type PostProps = PostType;

export default function Post({ 
  id,
  image, 
  title, 
  price, 
  username,
  avatar,
  likes, 
  comments,
  isSponsored
}: PostProps) {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const navigate = useNavigate();

  const handlePostClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest('button') ||
      target.tagName.toLowerCase() === 'button'
    ) {
      return;
    }
    navigate(`/product/${id}`);
  };

  const mockStats = {
    views: 1234,
    likes,
    comments,
    shares: 45
  };

  return (
    <>
      <div 
        className={`
          bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer 
          transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md
          ${isSponsored ? 'ring-2 ring-blue-500/20' : ''}
        `}
        onClick={handlePostClick}
      >
        <div className="relative">
          <img src={image} alt={title} className="w-full aspect-square object-cover" />
          
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg">
            <span className="font-semibold text-blue-600 text-xs sm:text-sm">₼{price}</span>
          </div>

          {isSponsored && (
            <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium">
              Endirim mövcuddur
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">{title}</h3>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-0.5 sm:space-x-1">
              <button className="hover:text-blue-500 transition-colors">
                <Heart className="w-[16px] h-[16px] sm:w-5 sm:h-5" />
              </button>
              <span className="text-[10px] sm:text-sm text-gray-600">{likes}</span>
            </div>
            <div className="flex items-center space-x-0.5 sm:space-x-1">
              <button 
                className="hover:text-blue-500 transition-colors"
                onClick={() => setIsCommentsOpen(true)}
              >
                <MessageCircle className="w-[16px] h-[16px] sm:w-5 sm:h-5" />
              </button>
              <span className="text-[10px] sm:text-sm text-gray-600">{comments}</span>
            </div>
            <div className="flex items-center space-x-0.5 sm:space-x-1">
              <button 
                className="hover:text-blue-500 transition-colors"
                onClick={() => setIsStatsOpen(true)}
              >
                <BarChart2 className="w-[16px] h-[16px] sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <CommentsSheet
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        comments={sampleComments}
      />

      <StatisticsSheet
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        stats={mockStats}
      />
    </>
  );
}