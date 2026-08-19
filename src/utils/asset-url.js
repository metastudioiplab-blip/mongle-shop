/**
 * withBase — public 폴더 자산의 절대경로를 배포 base 경로 기준으로 변환
 *
 * Props:
 * @param {string} path - '/'로 시작하는 public 자산 경로 (예: '/images/banner/banner1.jpg') [Required]
 *
 * Example usage:
 * withBase('/images/banner/banner1.jpg')
 */
export function withBase(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
