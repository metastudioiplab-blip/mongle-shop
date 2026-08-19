import { Star } from 'lucide-react';
import reviews from '../../data/reviews.json';
import './reviews-section.css';

/** review — 반려동물 기준 후기 카드 3~4개 가로 배열 */
function ReviewsSection() {
  return (
    <section className="mg-reviews" aria-label="고객 후기">
      <div className="mg-reviews__container">
        <h2>몽글 가족들의 이야기</h2>
        <ul className="mg-reviews__list">
          {reviews.map((review) => (
            <li key={review.id} className="mg-reviews__card">
              <div className="mg-reviews__stars" aria-label={`별점 ${review.rating}점`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={`${review.id}-star-${index + 1}`}
                    size={16}
                    fill={index < review.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="mg-reviews__comment">{review.comment}</p>
              <p className="mg-reviews__author">{review.petName} 보호자</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ReviewsSection;
