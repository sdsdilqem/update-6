import React, { useState } from 'react';
import { Star, Award, Gift, Sparkles } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function RegistrationPrompt() {
  const [isVisible, setIsVisible] = useState(true);
  const { setShowAuthSheet } = useAuth();

  if (!isVisible) return null;

  const handleRegisterClick = () => {
    setShowAuthSheet({ isOpen: true, defaultTab: 'register' });
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Content */}
      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-t-2xl shadow-xl animate-slide-up">
        <div className="flex justify-center pt-2 pb-3">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full"/>
        </div>

        <div className="px-4 pb-8">
          {/* Header with Progress */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-500 rounded-xl">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Xoş gəlmisiniz!</h3>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-blue-500 rounded-full" />
              </div>
              <span className="text-xs font-medium text-blue-500">25%</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 rounded-xl">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mb-3">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-medium mb-1">Xüsusi Endirimlər</h4>
              <p className="text-sm text-gray-600">İlk alışınıza 20% endirim</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-xl">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mb-3">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-medium mb-1">VIP Status</h4>
              <p className="text-sm text-gray-600">Xüsusi müştəri imtiyazları</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-4 rounded-xl">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mb-3">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-medium mb-1">Bonus Hədiyyələr</h4>
              <p className="text-sm text-gray-600">Hər ay pulsuz hədiyyələr</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-4 rounded-xl">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-medium mb-1">500 Bonus</h4>
              <p className="text-sm text-gray-600">Dərhal istifadə imkanı</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsVisible(false)}
              className="px-6 py-3 text-gray-500 hover:text-gray-700 transition-colors text-sm"
            >
              İndi yox
            </button>
            <button
              onClick={handleRegisterClick}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25 text-sm font-medium"
            >
              <span>Qeydiyyatdan keç</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}