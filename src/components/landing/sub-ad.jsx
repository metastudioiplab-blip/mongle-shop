import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { withBase } from '../../utils/asset-url.js';

const GALLERY_ITEMS = [
  { id: 'baby1', src: withBase('/images/story/baby1.jpg'), caption: '몽글이랑 첫 만남', handle: '@콩이네' },
  { id: 'baby2', src: withBase('/images/story/baby2.jpg'), caption: '햇살 좋은 날, 나란히', handle: '@보리하루' },
  { id: 'baby3', src: withBase('/images/story/baby3.jpg'), caption: '여름엔 커플룩', handle: '@수박이네' },
  { id: 'baby4', src: withBase('/images/story/baby4.jpg'), caption: '쌍둥이 니트 데뷔', handle: '@초코네' },
];

/** sub_ad — 몽글 이야기, 인스타 피드 스타일 사진 갤러리 */
function SubAd() {
  return (
    <Box component="section" sx={{ bgcolor: 'var(--bg-section)', py: { xs: 10, md: 15 } }}>
      <Container maxWidth={false} sx={{ maxWidth: 'var(--container-max)', px: { xs: '20px', md: '60px' } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Typography variant="h2" component="h2" sx={{ mb: 1.5 }}>
            몽글 이야기
          </Typography>
          <Typography sx={{ color: 'var(--text)', mb: 0.5 }}>
            몽글과 우리 아이의 하루하루
          </Typography>
          <Typography sx={{ color: 'var(--coral)', fontWeight: 600, fontSize: 14 }}>
            #몽글과우리아기
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 2, md: 3 },
          }}
        >
          {GALLERY_ITEMS.map((item) => (
            <Box
              key={item.id}
              component="figure"
              sx={{
                m: 0,
                transition: 'transform 0.3s ease-out',
                '&:hover': { transform: 'translateY(-6px)' },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: 'var(--radius-card)',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={`${item.caption} ${item.handle}`}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Box component="figcaption" sx={{ mt: 1.5, textAlign: 'center' }}>
                <Typography sx={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>
                  {item.caption}
                </Typography>
                <Typography sx={{ fontSize: 12, color: 'var(--coral)' }}>{item.handle}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 7 } }}>
          <Box
            component="button"
            type="button"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 3.5,
              py: 1.25,
              borderRadius: 'var(--radius-button)',
              border: 'none',
              bgcolor: 'var(--coral)',
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'default',
            }}
          >
            우리 아이 자랑하기
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SubAd;
