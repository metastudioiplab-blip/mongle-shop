import { Bone, Cookie, Droplets, Footprints, Shirt, ToyBrick } from 'lucide-react';
import categories from '../../data/categories.json';
import './category-icon-bar.css';

const ICONS = {
  Bone,
  Cookie,
  ToyBrick,
  Shirt,
  Footprints,
  Droplets,
};

/** 카테고리 아이콘 바 — 원형 배경, hover 시 coral 전환 0.2s */
function CategoryIconBar() {
  return (
    <nav className="mg-icon-bar" aria-label="카테고리 바로가기">
      <ul>
        {categories.map((category) => {
          const Icon = ICONS[category.icon];
          return (
            <li key={category.id}>
              <a href={`#${category.id}`} className="mg-icon-bar__item">
                <span className="mg-icon-bar__circle">
                  <Icon size={24} />
                </span>
                <span className="mg-icon-bar__label">{category.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default CategoryIconBar;
