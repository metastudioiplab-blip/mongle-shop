import { createTheme } from '@mui/material/styles';

/**
 * 몽글(MONGLE) 브랜드 테마
 *
 * - palette: 브리프 2장 디자인 토큰(coral 주조색 / sage 보조색 / 오프화이트 배경) 반영
 * - typography: Pretendard, 브리프 명시 크기·굵기·자간 반영
 * - shape.borderRadius: 카드 기준(16px), 버튼/이미지는 컴포넌트별 sx에서 개별 지정
 */
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF8A65',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#7BAE9E',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FDFBF7',
      paper: '#FDFBF7',
    },
    text: {
      primary: '#3A3A3A',
      secondary: '#8A8A8A',
    },
    divider: '#E8E2D8',
  },
  typography: {
    fontFamily: [
      'Pretendard',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: 'clamp(32px, 5vw, 56px)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: 'clamp(24px, 3vw, 36px)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '20px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
});

export default theme;
