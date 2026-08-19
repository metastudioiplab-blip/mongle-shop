import { useState } from 'react';
import Box from '@mui/material/Box';
import Header from './components/common/header.jsx';
import Footer from './components/common/footer.jsx';
import TopButton from './components/common/top-button.jsx';
import MobileCartBar from './components/common/mobile-cart-bar.jsx';
import MainBanner from './components/landing/main-banner.jsx';
import CategoryIconBar from './components/landing/category-icon-bar.jsx';
import BestItems from './components/landing/best-items.jsx';
import SubAd from './components/landing/sub-ad.jsx';
import NewItems from './components/landing/new-items.jsx';
import ReviewsSection from './components/landing/reviews-section.jsx';

const DEMO_CART_COUNT = 2;

function App() {
  const [cartCount] = useState(DEMO_CART_COUNT);

  return (
    <>
      <Header cartCount={cartCount} />

      <Box component="main" sx={{ pt: { xs: '64px', md: '112px' } }}>
        <MainBanner />
        <CategoryIconBar />
        <BestItems />
        <SubAd />
        <NewItems />
        <ReviewsSection />
      </Box>

      <Footer />
      <TopButton />
      <MobileCartBar cartCount={cartCount} />
    </>
  );
}

export default App;
