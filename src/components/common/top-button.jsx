import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import './top-button.css';

const SCROLL_THRESHOLD_PX = 400;

/** 공통 UI — 탑 버튼, 400px 이상 스크롤 시 등장, 클릭 시 smooth scroll */
function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button type="button" className="mg-top-button" aria-label="맨 위로 이동" onClick={scrollToTop}>
      <ArrowUp size={22} />
    </button>
  );
}

export default TopButton;
