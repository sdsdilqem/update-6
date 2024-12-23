import { useState, useRef, TouchEvent } from 'react';

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
}

export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 50 }: SwipeHandlers) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const touchXRef = useRef<number>(0);

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    touchXRef.current = e.targetTouches[0].clientX;
    setIsSwiping(true);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isSwiping) return;
    touchXRef.current = e.targetTouches[0].clientX;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    }
    
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }

    setIsSwiping(false);
    setTouchEnd(null);
    setTouchStart(null);
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    isSwiping,
    touchXRef
  };
}