import { ShoppingCart } from 'lucide-react';
import './mobile-cart-bar.css';

/**
 * MobileCartBar 컴포넌트 — 모바일 전용 하단 sticky 장바구니 요약 바
 *
 * Props:
 * @param {number} cartCount - 장바구니에 담긴 상품 수 [Optional, 기본값: 0]
 *
 * Example usage:
 * <MobileCartBar cartCount={2} />
 */
function MobileCartBar({ cartCount = 0 }) {
  if (cartCount === 0) {
    return null;
  }

  return (
    <div className="mg-mobile-cart-bar">
      <span className="mg-mobile-cart-bar__summary">
        <ShoppingCart size={18} />
        장바구니 {cartCount}개 담김
      </span>
      <a href="#cart" className="mg-mobile-cart-bar__button">
        장바구니 보기
      </a>
    </div>
  );
}

export default MobileCartBar;
