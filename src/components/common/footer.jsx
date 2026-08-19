import './footer.css';

/** footer — 3단(회사정보 / 고객센터 / SNS) + 사업자정보 + copyright */
function Footer() {
  return (
    <footer className="mg-footer">
      <div className="mg-footer__container">
        <div className="mg-footer__columns">
          <div className="mg-footer__column">
            <h3>MONGLE</h3>
            <p>말랑하고 부드러운 것들, 몽글</p>
            <p>서울특별시 성동구 몽글로 12길 8</p>
          </div>

          <div className="mg-footer__column">
            <h3>고객센터</h3>
            <p>1544-0000</p>
            <p>평일 10:00 – 18:00 (점심 12:30 – 13:30)</p>
            <p>주말 · 공휴일 휴무</p>
          </div>

          <div className="mg-footer__column">
            <h3>SNS</h3>
            <ul className="mg-footer__sns">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mg-footer__biz">
          <p>몽글(MONGLE) · 대표 신정화 · 사업자등록번호 000-00-00000</p>
          <p>통신판매업신고번호 제2026-서울성동-0000호</p>
        </div>

        <p className="mg-footer__copyright">© 2026 MONGLE. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
