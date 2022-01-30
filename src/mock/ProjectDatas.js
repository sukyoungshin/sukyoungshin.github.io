export const projectDatas = [
  {
    id: 1,
    title: '써브웨이(Subway) 리뉴얼 웹사이트',
    img: [
      'https://cdn.pixabay.com/photo/2021/10/04/16/42/dog-6680642_960_720.jpg', 
      'https://cdn.pixabay.com/photo/2021/10/04/09/20/animal-6679843_960_720.jpg',
      'https://cdn.pixabay.com/photo/2021/10/04/09/20/animal-6679843_960_720.jpg',
    ],
    techStack: [
      'React',
      'React-router',
      'Redux',
      'Styled-components',
      '구글/카카오OAuth',
      '카카오맵API'
    ],
    url: {
      'github': 'https://github.com/sukyoungshin/subway-renewal-mobile', 
      'live': 'https://subway-renewal-mobile.netlify.app/',
    }, 
    feature: [
      '구글/카카오OAuth 로그인구현', 
      '주문 페이지 : 카카오맵API를 활용하여, 지도 위에 입력받은 주소지 좌표값과 키워드검색 기능, 마커 및 인포윈도우 기능구현',
      'SplashScreen : localStorage 활용하여 브라우저에 저장',
      '주문 페이지 : Redux 활용하여 주문정보 전역관리',
      '모바일뷰',
      ]
  }, 
  {
    id: 2,
    title: '모멘텀 Momentum',
    img: [
      'https://cdn.pixabay.com/photo/2021/10/04/16/42/dog-6680642_960_720.jpg', 
      'https://cdn.pixabay.com/photo/2021/10/04/09/20/animal-6679843_960_720.jpg',
      'https://cdn.pixabay.com/photo/2021/10/04/16/42/dog-6680642_960_720.jpg'
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
      '랜덤 배경이미지', 
      '사용자의 이름을 입력받고 화면에 출력',
      '현재 시간 화면에 출력',
      '투두리스트 (localStorage 사용)',
      '사용자의 위치와 온도 나타내기 (API사용)',
      '다크모드 기능 (localStorage 사용)',
      ]
  }, 
  {
    id: 3,
    title: 'MBTI 나와 찰떡인 LOL챔피언은?',
    img: [
      'https://cdn.pixabay.com/photo/2021/10/04/16/42/dog-6680642_960_720.jpg', 
      'https://cdn.pixabay.com/photo/2021/10/04/09/20/animal-6679843_960_720.jpg',
      'https://cdn.pixabay.com/photo/2021/10/04/16/42/dog-6680642_960_720.jpg'
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
      '현재 url 클립보드로 복사하기 기능',
      '반응형 작업',
      ]
  }, 
];