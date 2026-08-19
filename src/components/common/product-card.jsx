import { useState } from 'react';
import { Heart } from 'lucide-react';
import { withBase } from '../../utils/asset-url.js';
import './product-card.css';

/**
 * ProductCard 컴포넌트
 *
 * Props:
 * @param {object} product - 상품 정보 { id, name, price, image, badge } [Required]
 *
 * Example usage:
 * <ProductCard product={product} />
 */
function ProductCard({ product }) {
  const [isWished, setIsWished] = useState(false);

  return (
    <article className="mg-product-card">
      <div className="mg-product-card__media">
        <img src={withBase(product.image)} alt={product.name} />
        {product.badge && <span className="mg-product-card__badge">{product.badge}</span>}
        <button
          type="button"
          className={`mg-product-card__wish${isWished ? ' is-active' : ''}`}
          aria-label={isWished ? '찜 해제' : '찜하기'}
          aria-pressed={isWished}
          onClick={() => setIsWished((prev) => !prev)}
        >
          <Heart size={18} fill={isWished ? 'currentColor' : 'none'} />
        </button>
      </div>
      <h4 className="mg-product-card__name">{product.name}</h4>
      <p className="mg-product-card__price">{product.price.toLocaleString('ko-KR')}원</p>
    </article>
  );
}

export default ProductCard;
