import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './main-banner.css';

const SLIDES = [
  {
    id: 1,
    type: 'image',
    src: '/images/banner/banner1.jpg',
    caption: '말랑하고 부드러운 것들, 몽글',
    ctaLabel: '베스트 보러가기',
    ctaHref: '#best',
  },
  {
    id: 2,
    type: 'video',
    src: '/video/video2.mp4',
    caption: '신나는 우리 아이들',
    ctaLabel: '신상품 보러가기',
    ctaHref: '#new',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/banner/banner3.jpg',
    caption: '오늘도 몽글몽글한 산책',
    ctaLabel: '산책 용품 보러가기',
    ctaHref: '#walk',
  },
  {
    id: 4,
    type: 'video',
    src: '/video/video1.mp4',
    caption: '함께라서 더 몽글몽글',
    ctaLabel: '몽글 이야기 보러가기',
    ctaHref: '#story',
  },
];

const AUTO_PLAY_INTERVAL_MS = 5000;

/** main_ad — 사진·영상 혼합 4장 슬라이드 메인 배너 (사진 5s / 영상 재생 길이만큼, fade 1s ease-in-out) */
function MainBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef({});

  useEffect(() => {
    const activeSlide = SLIDES[currentIndex];
    const advance = () => setCurrentIndex((prev) => (prev + 1) % SLIDES.length);

    SLIDES.forEach((slide, index) => {
      if (slide.type !== 'video') return;
      const videoEl = videoRefs.current[slide.id];
      if (!videoEl) return;
      if (index === currentIndex) {
        videoEl.currentTime = 0;
        videoEl.play().catch(() => {});
      } else {
        videoEl.pause();
      }
    });

    if (activeSlide.type === 'video') {
      const videoEl = videoRefs.current[activeSlide.id];
      let timeoutId;

      const scheduleAdvance = () => {
        timeoutId = setTimeout(advance, videoEl.duration * 1000);
      };

      if (videoEl && videoEl.readyState >= 1 && !Number.isNaN(videoEl.duration)) {
        scheduleAdvance();
      } else if (videoEl) {
        videoEl.addEventListener('loadedmetadata', scheduleAdvance, { once: true });
      }

      return () => {
        clearTimeout(timeoutId);
        if (videoEl) videoEl.removeEventListener('loadedmetadata', scheduleAdvance);
      };
    }

    const timeoutId = setTimeout(advance, AUTO_PLAY_INTERVAL_MS);
    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section className="mg-banner" aria-label="메인 배너">
      {SLIDES.map((slide, index) => (
        <div key={slide.id} className={`mg-banner__slide${index === currentIndex ? ' is-active' : ''}`}>
          {slide.type === 'video' ? (
            <video
              ref={(el) => {
                videoRefs.current[slide.id] = el;
              }}
              src={slide.src}
              muted
              loop
              autoPlay
              playsInline
              aria-label={slide.caption}
            />
          ) : (
            <img src={slide.src} alt={slide.caption} />
          )}
          <div className="mg-banner__overlay">
            <p>{slide.caption}</p>
            <a href={slide.ctaHref} className="mg-banner__cta">
              {slide.ctaLabel}
            </a>
          </div>
        </div>
      ))}

      <button type="button" className="mg-banner__arrow mg-banner__arrow--prev" aria-label="이전 배너" onClick={goToPrev}>
        <ChevronLeft size={28} />
      </button>
      <button type="button" className="mg-banner__arrow mg-banner__arrow--next" aria-label="다음 배너" onClick={goToNext}>
        <ChevronRight size={28} />
      </button>

      <div className="mg-banner__dots">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`mg-banner__dot${index === currentIndex ? ' is-active' : ''}`}
            aria-label={`${index + 1}번째 배너로 이동`}
            aria-current={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default MainBanner;
