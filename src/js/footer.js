import cssText from '/src/styles/pages/_footer.scss?inline';

const footerTemplate = document.createElement('template');
console.log(cssText);
footerTemplate.innerHTML = `
  <style>
    ${cssText}
  </style>

<footer class="footer">
    <div class="util">
      <div class="util__div">
        <div class="announce">
          <p>공지사항</p>
          <a href="/sorry/index.html"
            >[안내] 합병보고 주주총회에 갈음하는 공고</a
          >
        </div>
        <div class="goto">
          <div>브랜드 바로가기 +</div>
          <hr />
          <div>그룹 계열사 바로가기 +</div>
        </div>
      </div>
      <div class="info">
        <div class="info__link">
          <span>고객센터</span>
          <span>이용약관</span>
          <span>개인정보처리방침</span>
          <span>청소년 보호정책</span>
          <span>법적고지</span>
          <span>이벤트</span>
          <span>인재채용</span>
        </div>
        <div class="info__adress">
          <p>
            <span>대표이사 : YANG JIEUL</span>
            <span><a href="">사업자정보확인</a></span>
            <span>사업자등록번호 : 188-88-01893</span>
            <span>통신판매신고번호 : 2020-서울마포-3641호</span>
          </p>
          <p>
            <span
              >사업장 : 서울특별지 마포구 상암산로 34, DMC디지털큐브
              15층(상암동)</span
            >
            <span>호스팅사업자 : 씨제이올리브네트웍스(주)</span>
          </p>
          <p>
            <span><a href="">고객문의 바로가기</a></span>
            <span><a href="">대표메일 : taing@cj.net</a></span>
            <span
              ><a href=""
                >고객센터 : 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)</a
              ></span
            >
          </p>
          <p>
            <span
              >ENM 시청자 상담식 (편성 문의 및 시청자 의견) :
              080-080-0780</span
            >
            <span>Mnet 고객센터(반송편성문의) : 1855-1631</span>
          </p>
        </div>
      </div>
      <ul class="community">
        <li class="youtube">
          <a href=""
            ><img src="/src/assets/icon/Youtube.png" alt="유튜브 바로가기"
          /></a>
        </li>
        <li class="instargram">
          <a href=""
            ><img
              src="/src/assets/icon/Instagram.png"
              alt="인스타그램 바로가기"
          /></a>
        </li>
        <li class="twitter">
          <a href=""
            ><img src="/src/assets/icon/Twitter.png" alt="트위터 바로가기"
          /></a>
        </li>
        <li class="facebook">
          <a href=""
            ><img src="/src/assets/icon/Facebook.png" alt="페이스북 바로가기"
          /></a>
        </li>
      </ul>
    </div>
    <div class="copyright">
      <span>Copyright &copy; 주식회사 타잉 All right reservd.</span>
    </div>
  </footer>
`;

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

customElements.define('footer-component', FooterComponent);

// import pb from '../api/pocketbase.js';
// import getPbImageURL from '../api/getPbImageURL.js';

// const urlList = {};

// async function community() {
//   try {
//     const resultList = await pb.collection('community_img').getList(1, 60);
//     // console.log(resultList);

//     resultList.items.forEach((list) => {
//       const imageURL = getPbImageURL(list);
//       urlList[list.name] = imageURL;
//     });
//   } catch (error) {
//     console.error('An error occurred while fetching the poster list:', error);
//     return {};
//   }
// }
// community().then(() => {
// });
