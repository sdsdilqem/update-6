import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useSwipe } from '../../hooks/useSwipe';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomSheet({ isOpen, onClose, children }: BottomSheetProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [currentY, setCurrentY] = useState(0);
  const sheetRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe({
    onSwipeDown: () => {
      if (currentY > 100) {
        handleClose();
      } else {
        setCurrentY(0);
      }
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsClosing(false);
      setCurrentY(0);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div 
        className={`
          fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300
          ${isClosing ? 'opacity-0' : 'opacity-100'}
        `}
        onClick={handleClose}
      />
      <div 
        ref={sheetRef}
        className={`
          fixed left-0 right-0 bottom-0 z-50 
          bg-white rounded-t-2xl shadow-xl
          ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}
        `}
        style={{
          transform: `translateY(${currentY}px)`,
          transition: isDraggingRef.current ? 'none' : 'transform 0.2s ease-out'
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex justify-center pt-2 pb-3">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full"/>
        </div>
        <div className="px-4 sm:px-6 pb-8 max-h-[85vh] overflow-y-auto overscroll-y-contain">
          <div className="max-w-2xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}