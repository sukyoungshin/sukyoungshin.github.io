export const projectDatas = [
  {
    id: 1,
    title: '써브웨이(Subway) 리뉴얼 웹사이트',
    img: [
      'https://github.com/sukyoungshin/TIL/blob/main/Note/images/subway_userflow1_order.gif?raw=true', 
      null,
      null,
    ],
    techStack: [
      'React',
      'React-redux',
      'React-router (v6)',
      'Styled-components',
      '구글/카카오OAuth',
      '카카오맵API',
    ],
    url: {
      'github': 'https://github.com/sukyoungshin/subway-renewal-mobile', 
      'live': 'https://subway-renewal-mobile.netlify.app/',
    }, 
    feature: [
      '회원가입 페이지에서 이메일 로그인과 구글 및 카카오 계정을 활용한 OAuth 로그인 기능 구현', 
      '주문 페이지에서 카카오맵API를 사용하여 써브웨이 매장을 찾고 위치와 정보를 지도 위에 나타냄',
      'React-redux를 활용한 전역상태관리 (장바구니 및 로그인 상태관리)',
      'Google Lighthouse의 기능을 활용하여 웹페이지의 성능 저하 원인을 파악 후 퍼포먼스 개선 (80점 → 90점)',
      '주문 페이지에서 하단 버튼의 색상을 활용해 활성화/비활성화 상태를 가시화하여 UX개선',
      ]
  }, 
  {
    id: 2,
    title: '모멘텀 Momentum',
    img: [
      null,
      null,
      null,
    ],
    techStack: [
      'HTML', 
      'CSS', 
      'JavaScript',
      'API'
    ],
    url: {
      'github': 'https://github.com/sukyoungshin/momentum', 
      'live': 'https://sukyoungshin.github.io/momentum/',
    },
    feature: [
      '입력받은 사용자의 이름을 화면에 출력', 
      '현재 시간 및 d-day를 화면에 출력',
      '사용자의 이름을 입력받고 화면에 출력',
      'localStorage를 활용한 투두리스트 구현',
      'Open Weather API를 활용하여 사용자의 위치와 온도, 주간날씨를 나타냄 ',
      ]
  }, 
  {
    id: 3,
    title: '개인 포트폴리오 페이지',
    img: [
      null,
      null,
      null,
    ],
    techStack: [
      'React',
      'Styled-components',
      'Axios',
      'React-router (v5)',
      'API',
    ],
    url: {
      'github': 'https://github.com/sukyoungshin/sukyoungshin.github.io', 
      'live': 'https://sukyoungshin.github.io/',
    },
    feature: [
      'React-router을 적용하여 구현한 첫번째 SPA 애플리케이션',
      'Sheet Best API를 활용하여 Contact 폼 내부에 입력된 데이터를 연동된 google sheet로 전송 (HTTP 서버통신)',
      'Figma를 활용하여 프로토타이핑 작업',
      'gh-pages를 사용한 첫 배포',
      ]
  }, 
  {
    id: 4,
    title: 'MBTI 나와 찰떡인 LOL챔피언은?',
    img: [
      null,
      null,
      null,
    ],
    techStack: [
      'React',
      'Styled-components',
      '반응형'
    ],
    url: {
      'github': 'https://github.com/sukyoungshin/lol-mbti', 
      'live': 'https://mbtilol.netlify.app/',
    },
    feature: [
      'styled-components를 적용하여 구현한 첫번째 SPA 프로젝트',
      'useState()와 props를 활용하여 MBTI 테스트 구현',
      'clipboard API를 활용하여 현재 페이지 링크 복사하기 기능 구현',
      '반응형 작업 (모바일, 데스크탑)',
      ]
  }, 
];