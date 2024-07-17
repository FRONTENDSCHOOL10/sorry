import '/src/styles/style.scss';
import cssText from '/src/styles/pages/_header.scss?inline';
import headerScript from '/src/js/headerScript';
//console.log(cssText);

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
          <a href="/src/pages/search" class="nav__search"
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
`;

const searchHeaderTemplate = document.createElement('template');
searchHeaderTemplate.innerHTML = `
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
          <a href="/index.html" class="nav__search__x"
            ><img src="/assets/desktop-x.svg" alt="검색 닫기"
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
`;

const miniHeaderTemplate = document.createElement('template');
miniHeaderTemplate.innerHTML = `<style>
  ${cssText}
</style>
  <header class="header">
    <h1 class="header__logo">
      <a class="header__logo__link" href="/">
        <img src="/assets/desktop_logo.svg" alt="타잉" />
      </a>
    </h1>
  </header>`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
  connectedCallback() {
    this.headerScript();
  }
  headerScript() {
    headerScript(this.shadowRoot);
  }
}

class SearchHeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(searchHeaderTemplate.content.cloneNode(true));
  }
  connectedCallback() {
    this.headerScript();
  }
  headerScript() {
    headerScript(this.shadowRoot);
  }
}

class miniHeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(miniHeaderTemplate.content.cloneNode(true));
  }
}

customElements.define('header-component', HeaderComponent);
customElements.define('search-header-component', SearchHeaderComponent);
customElements.define('mini-header-component', miniHeaderComponent);
