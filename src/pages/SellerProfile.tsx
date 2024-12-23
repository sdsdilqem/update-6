import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Package, Clock, Heart } from 'lucide-react';
import { samplePosts } from '../data/samplePosts';
import PostGrid from '../components/PostGrid';

export default function SellerProfile() {
  const { username } = useParams();
  const sellerPosts = samplePosts.filter(post => post.username === username);
  
  const seller = {
    username: username,
    avatar: sellerPosts[0]?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    joinDate: 'Mart 2023',
    bio: 'Texnologiya həvəskarı və keyfiyyətli məhsulların satıcısı',
    rating: 4.8,
    totalSales: 45,
    totalLikes: sellerPosts.reduce((sum, post) => sum + post.likes, 0),
    responseTime: '~2 saat',
    verificationLevel: 'VERIFIED'
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-white sticky top-16 z-30 border-b">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-14 flex items-center space-x-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Satıcı profili</h1>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-start space-x-4 mb-6">
          <img
            src={seller.avatar}
            alt={seller.username}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h2 className="text-xl font-semibold">{seller.username}</h2>
              {seller.verificationLevel === 'VERIFIED' && (
                <Shield className="w-5 h-5 text-blue-500" />
              )}
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <div className="flex items-center bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{seller.rating}</span>
              </div>
              <span>•</span>
              <span>{seller.totalSales} satış</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{seller.bio}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
              <Clock className="w-4 h-4" />
              <span>Cavablama müddəti</span>
            </div>
            <p className="font-medium">{seller.responseTime}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
              <Heart className="w-4 h-4" />
              <span>Bəyənmə sayı</span>
            </div>
            <p className="font-medium">{seller.totalLikes}</p>
          </div>
        </div>

        {/* Active Listings */}
        <div>
          <h3 className="font-semibold mb-4">Aktiv elanlar</h3>
          <PostGrid posts={sellerPosts} />
        </div>
      </div>
    </div>
  );
}