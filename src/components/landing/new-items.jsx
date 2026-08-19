import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProductCard from '../common/product-card.jsx';
import products from '../../data/products.json';

/** new_item — 신상품, 4열 1줄 (모바일 2열) */
function NewItems() {
  return (
    <Box component="section" id="new" sx={{ my: { xs: 10, md: 15 } }}>
      <Container maxWidth={false} sx={{ maxWidth: 'var(--container-max)', px: { xs: '20px', md: '60px' } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
          <Typography variant="h2" component="h2">
            NEW ARRIVAL
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {products.new.map((product) => (
            <Grid key={product.id} size={{ xs: 6, md: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default NewItems;
