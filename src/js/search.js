import '/src/styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {

   const searchInput = document.getElementById('searchInput');
   const searchButton = document.getElementById('searchButton');
   const recentList = document.getElementById('searchRecent');
   const recentNone = document.getElementById('recentNone');
   const clearAllButton = document.getElementById('clearAllButton');

   // 로컬 스토리지에서 최근 검색어 가져온 다음 화면에 표시
   const loadRecentSearches = () => {
      const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
      // 검색어가 있으면 recentNone 메시지 숨기고 검색어 표시
      if (recentSearches.length > 0) {
         recentNone.style.display = 'none';
         clearAllButton.style.display = 'inline-flex';
         recentSearches.forEach(term => {
            const li = document.createElement('li');
            li.classList.add('recentSearchWord');

            const span = document.createElement('span');
            span.textContent = term;
            li.appendChild(span);

            // 삭제 버튼 추가
            const button = document.createElement('button');
            button.classList.add('removeButton');
            button.innerHTML = '<img src="/src/assets/icon/X.svg" alt="삭제">';
            button.addEventListener('click', () => {
               removeSearchTerm(term);
            });
            li.appendChild(button);

            recentList.appendChild(li);
         });
      } else {
         recentNone.style.display = 'block';
         clearAllButton.style.display = 'none';
      }
   };

   // 검색어를 로컬 스토리지에 추가
   const addSearchTerm = term => {
      let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
      recentSearches = [term, ...recentSearches.filter(item => item !== term)];
      if (recentSearches.length > 5) recentSearches.pop();
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
   };

   // 검색어를 로컬 스토리지에서 제거
   const removeSearchTerm = term => {
      let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
      recentSearches = recentSearches.filter(item => item !== term);
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
      location.reload(); // 변경사항을 반영하기 위해 새로고침
   };

   // 모든 검색어를 로컬 스토리지에서 제거
   const clearAllSearchTerms = () => {
      localStorage.removeItem('recentSearches');
      location.reload(); // 변경사항을 반영하기 위해 새로고침
   };

   // 검색 버튼 클릭 시 검색어 추가
   searchButton.addEventListener('click', () => {
      const term = searchInput.value.trim();
      if (term) {
         addSearchTerm(term);
         searchInput.value = '';
         location.reload(); // 변경사항을 반영하기 위해 새로고침
      }
   });

   // Enter 키 입력 시 검색어 추가
   searchInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
         e.preventDefault();
         searchButton.click();
      }
   });

   // 모두 지우기 버튼 클릭 시 모든 검색어 삭제
   clearAllButton.addEventListener('click', clearAllSearchTerms);

   loadRecentSearches(); // 페이지 로드 시 최근 검색어를 불러와서 표시

});
