import { useEffect, useState } from 'react';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import categories from '../../data/categories.json';
import { withBase } from '../../utils/asset-url.js';
import './header.css';

/**
 * Header 컴포넌트 — fixed header
 *
 * Props:
 * @param {number} cartCount - 장바구니에 담긴 상품 수 [Optional, 기본값: 0]
 *
 * Example usage:
 * <Header cartCount={2} />
 */
function Header({ cartCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`mg-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="mg-header__top">
        <button
          type="button"
          className="mg-header__hamburger"
          aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <a href="/" className="mg-header__logo">
          <h1>
            <img src={withBase('/images/logo/mongle-logo-knit.png')} alt="" className="mg-header__logo-symbol" />
            <span className="mg-header__logo-text">몽글</span>
          </h1>
        </a>

        <div className="mg-header__utils">
          <button type="button" aria-label="검색">
            <Search size={22} />
          </button>
          <button type="button" aria-label="마이페이지">
            <User size={22} />
          </button>
          <button type="button" className="mg-header__cart" aria-label="장바구니">
            <ShoppingCart size={22} />
            {cartCount > 0 && <span className="mg-header__badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      <nav className="mg-header__gnb" aria-label="주요 카테고리">
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              onMouseEnter={() => setOpenCategoryId(category.id)}
              onMouseLeave={() => setOpenCategoryId(null)}
            >
              <a href={`#${category.id}`}>{category.name}</a>
              <div
                className={`mg-header__dropdown${openCategoryId === category.id ? ' is-open' : ''}`}
              >
                <ul>
                  {category.subcategories.map((sub) => (
                    <li key={sub}>
                      <a href={`#${category.id}`}>{sub}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {isMobileMenuOpen && (
        <nav className="mg-header__mobile-nav" aria-label="모바일 메뉴">
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <a href={`#${category.id}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
