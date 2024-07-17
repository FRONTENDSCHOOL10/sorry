import cssText from '/src/styles/pages/_header.scss?inline';
console.log(cssText);

const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<style>
  ${cssText}
</style>
  <header class="header">
    <h1 class="header__logo">
      <a class="header__logo__link" href="/">
        <img src="/assets/desktop_logo.svg" alt="타잉" />
      </a>
    </h1>
    <nav class="header__nav">
      <ul class="header__nav__menu">
        <li>
          <a class="nav__live" href="/">
            <img src="/assets/desktop_live.svg" alt="" />실시간
          </a>
        </li>
        <li>
          <a class="nav__program" href="/">TV프로그램</a>
        </li>
        <li>
          <a class="nav__movie" href="/">영화</a>
        </li>
        <li>
          <a class="nav__paramount" href="/">
            <img src="/assets/desktop-paramount.svg" alt="파라마운트플러스" />
          </a>
        </li>
      </ul>
      <div class="header__nav__add">
        <div class="nav__add__wrapper">
          <a href="/pages/search" class="nav__search"
            ><img src="/assets/desktop-search.svg" alt="검색"
          /></a>

          <a href="/" class="nav__profile">
            <img src="/assets/desktop-gnb-profile.svg" alt="사용자 프로필" />
          </a>
        </div>
        <!-- 마우스 호버 레이어-->
        <div class="nav__profile__wrapper">
          <div class="user__info">
            <img
              src="/assets/desktop-gnb-profile.svg"
              alt="사용자 프로필 이미지"
            />
            <div class="user__info__detail">
              <p class="user__name">재송합민한</p>
              <a class="user__change" href="/src/pages/profiles"
                >프로필 전환 &gt;</a
              >
            </div>
          </div>
          <div class="user__menu">
            <ul class="user__menu__list">
              <li><a href="/">MY</a></li>
              <li><a href="/">이용권</a></li>
              <li><a href="/">쿠폰등록</a></li>
              <li><a href="/">고객센터</a></li>
              <li><a href="/src/pages/logout/logout">로그아웃</a></li>
            </ul>
          </div>
        </div>
        <!-- 마우스호버 레이어 -->
      </div>
    </nav>
  </header>

  <script>
    import { getStorage } from 'kind-tiger';

    const navProfile = document.querySelector('.nav__profile');
    const navProfileWrapper = document.querySelector('.nav__profile__wrapper');
    const userName = navProfileWrapper.querySelector('.user__name');
    let timer;

    function handleProfileLayer() {
      clearTimeout(timer);
      navProfileWrapper.style.display = 'block';
    }

    function handleProfileLayerRemove() {
      timer = setTimeout(() => {
        navProfileWrapper.style.display = 'none';
      }, 300);
    }

    navProfile.addEventListener('mouseover', handleProfileLayer);
    navProfile.addEventListener('mouseout', handleProfileLayerRemove);
    navProfileWrapper.addEventListener('mouseover', handleProfileLayer);
    navProfileWrapper.addEventListener('mouseout', handleProfileLayerRemove);

    if (localStorage.getItem('auth')) {
      getStorage('auth').then(({ isAuth, user }) => {
        if (isAuth) userName.textContent = user.username;
      });
    }

  </script>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
}

customElements.define('header-component', HeaderComponent);
