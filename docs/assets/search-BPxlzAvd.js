import"./style-BKCA0iKf.js";document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("searchInput"),l=document.getElementById("searchButton"),d=document.getElementById("searchRecent"),o=document.getElementById("recentNone"),a=document.getElementById("clearAllButton"),i=()=>{const e=JSON.parse(localStorage.getItem("recentSearches"))||[];e.length>0?(o.style.display="none",a.style.display="inline-flex",e.forEach(t=>{const n=document.createElement("li");n.classList.add("recentSearchWord");const s=document.createElement("span");s.textContent=t,n.appendChild(s);const c=document.createElement("button");c.classList.add("removeButton"),c.innerHTML='<img src="/src/assets/icon/X.svg" alt="삭제">',c.addEventListener("click",()=>{h(t)}),n.appendChild(c),d.appendChild(n)})):(o.style.display="block",a.style.display="none")},m=e=>{let t=JSON.parse(localStorage.getItem("recentSearches"))||[];t=[e,...t.filter(n=>n!==e)],t.length>5&&t.pop(),localStorage.setItem("recentSearches",JSON.stringify(t))},h=e=>{let t=JSON.parse(localStorage.getItem("recentSearches"))||[];t=t.filter(n=>n!==e),localStorage.setItem("recentSearches",JSON.stringify(t)),location.reload()},S=()=>{localStorage.removeItem("recentSearches"),location.reload()};l.addEventListener("click",()=>{const e=r.value.trim();e&&(m(e),r.value="",location.reload())}),r.addEventListener("keypress",e=>{e.key==="Enter"&&(e.preventDefault(),l.click())}),a.addEventListener("click",S),i()});
