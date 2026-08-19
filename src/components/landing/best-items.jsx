import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProductCard from '../common/product-card.jsx';
import products from '../../data/products.json';

/** best_item — 베스트 상품 8종, 4열(데스크탑) / 2열(모바일) */
function BestItems() {
  return (
    <Box component="section" id="best" sx={{ my: { xs: 10, md: 15 } }}>
      <Container maxWidth={false} sx={{ maxWidth: 'var(--container-max)', px: { xs: '20px', md: '60px' } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
          <Typography variant="h2" component="h2">
            BEST
          </Typography>
          <Typography sx={{ color: 'var(--text-sub)', mt: 1 }}>
            몽글이 가장 사랑받는 것들
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {products.best.map((product) => (
            <Grid key={product.id} size={{ xs: 6, md: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default BestItems;
