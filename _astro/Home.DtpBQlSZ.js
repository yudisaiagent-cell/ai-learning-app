import{a as e,t}from"./useStore.8hAnF1ji.js";import{t as n}from"./Ic.CTWJy8ks.js";import{t as r}from"./url.DBrnEn_p.js";import{t as i}from"./jsx-runtime.C2aMnSBe.js";var a=i(),o=()=>{let e=new Date().getHours();return e<5?`לילה טוב`:e<12?`בוקר טוב`:e<17?`צהריים טובים`:e<21?`ערב טוב`:`לילה טוב`};function s({firstPath:i,firstLabel:s,cardIds:l,labIds:u,chapters:d}){let f=t(),p=f?.last,m=d.flatMap(e=>e.subs.map(e=>e.id)),h=f?m.filter(e=>f.subtopicsDone[e]).length:0,g=f?l.filter(t=>e(f,t)).length:0,_=f?Object.values(f.quizzes).filter(e=>e.mastered).length:0,v=f?u.filter(e=>f.labs[e]?.done).length:0,y=d.filter(e=>e.slug),[b,x]=(p?.label??s).split(` · `),S=f?g>0?`${g} כרטיסיות מחכות לחזרה היום.`:p?`עצרת ב${x?`־${x}`:`פרק ${b}`}.`:`הפרק הראשון מוכן. מתחילים?`:``;return(0,a.jsxs)(`div`,{className:`hm`,children:[(0,a.jsxs)(`header`,{className:`hm__head`,children:[(0,a.jsxs)(`h1`,{className:`hm__greet`,children:[o(),`, דאש.`]}),(0,a.jsx)(`p`,{className:`hm__fact`,"aria-live":`polite`,children:S||`\xA0`})]}),(0,a.jsxs)(`section`,{className:`hm__panel hm__continue`,"aria-labelledby":`hm-cont`,children:[(0,a.jsx)(`h2`,{id:`hm-cont`,children:p?`המשך מאיפה שעצרת`:`מתחילים כאן`}),(0,a.jsxs)(`a`,{className:`hm__row`,href:p?.path??i,children:[(0,a.jsxs)(`span`,{className:`hm__row-main`,children:[(0,a.jsx)(`span`,{className:`hm__row-title`,children:x??b}),x&&(0,a.jsx)(`span`,{className:`hm__row-sub`,children:b})]}),(0,a.jsxs)(`span`,{className:`btn btn--primary hm__go`,children:[p?`המשך`:`התחל`,` `,(0,a.jsx)(n,{name:`next`,size:18})]})]})]}),(0,a.jsxs)(`dl`,{className:`hm__tiles`,children:[(0,a.jsxs)(`div`,{className:`hm__tile`,children:[(0,a.jsx)(`dt`,{children:`נלמדו`}),(0,a.jsxs)(`dd`,{children:[(0,a.jsx)(`span`,{className:`num`,children:f?h:`–`}),(0,a.jsxs)(`small`,{children:[` מתוך `,(0,a.jsx)(`span`,{className:`num`,children:m.length}),` תתי-נושאים`]})]})]}),(0,a.jsxs)(`a`,{className:`hm__tile hm__tile--link`,href:r(`/review/`),children:[(0,a.jsx)(`dt`,{children:`לחזרה היום`}),(0,a.jsxs)(`dd`,{children:[(0,a.jsx)(`span`,{className:`num`,children:f?g:`–`}),(0,a.jsx)(`small`,{children:` כרטיסיות`})]})]}),(0,a.jsxs)(`div`,{className:`hm__tile`,children:[(0,a.jsx)(`dt`,{children:`פרקים שנשלטו`}),(0,a.jsxs)(`dd`,{children:[(0,a.jsx)(`span`,{className:`num`,children:f?_:`–`}),(0,a.jsxs)(`small`,{children:[` מתוך `,(0,a.jsx)(`span`,{className:`num`,children:y.length}),` בבוחן`]})]})]}),(0,a.jsxs)(`div`,{className:`hm__tile`,children:[(0,a.jsx)(`dt`,{children:`מעבדות`}),(0,a.jsxs)(`dd`,{children:[(0,a.jsx)(`span`,{className:`num`,children:f?v:`–`}),(0,a.jsxs)(`small`,{children:[` מתוך `,(0,a.jsx)(`span`,{className:`num`,children:u.length}),` הושלמו`]})]})]})]}),(0,a.jsxs)(`section`,{className:`hm__panel`,"aria-labelledby":`hm-map`,children:[(0,a.jsxs)(`div`,{className:`hm__panel-head`,children:[(0,a.jsx)(`h2`,{id:`hm-map`,children:`מפת הקורס`}),(0,a.jsxs)(`span`,{className:`hm__chip num`,children:[y.length,`/`,d.length,` פרקים`]})]}),(0,a.jsx)(`ol`,{className:`map`,children:d.map(e=>{let t=e.subs.filter(e=>f?.subtopicsDone[e.id]).length,n=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`span`,{className:`map__n num`,children:e.order}),(0,a.jsx)(`span`,{className:`map__title`,children:e.title}),e.slug?(0,a.jsx)(`span`,{className:`map__cells`,"aria-label":`${t} מתוך ${e.subs.length} תתי-נושאים נלמדו`,children:e.subs.map(e=>(0,a.jsx)(`span`,{className:`map__cell ${f?.subtopicsDone[e.id]?`is-done`:``}`,title:e.title},e.id))}):(0,a.jsx)(`span`,{className:`map__soon`,children:`בקרוב`})]});return(0,a.jsx)(`li`,{className:e.slug?``:`is-soon`,children:e.slug?(0,a.jsx)(`a`,{className:`map__row`,href:r(`/learn/${e.slug}/`),children:n}):(0,a.jsx)(`div`,{className:`map__row`,children:n})},e.order)})})]}),(0,a.jsx)(`style`,{children:c})]})}var c=`
.hm { display: flex; flex-direction: column; gap: var(--gap); padding-top: 20px; }
.hm__head { display: flex; flex-direction: column; gap: 6px; padding-bottom: 14px; }
.hm__greet { font: 600 28px/1.2 var(--font); letter-spacing: -0.01em; }
.hm__fact { font-size: 17px; color: var(--text-2); min-height: 1.6em; }

.hm__tiles { margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: var(--gap); }
.hm__tile { display: flex; flex-direction: column; justify-content: space-between; gap: 10px; min-height: 104px; padding: 16px; background: var(--surface); border-radius: var(--radius-card); color: var(--text); }
.hm__tile--link:hover { text-decoration: none; background: var(--surface-2); }
.hm__tile dt { font-size: 14px; color: var(--muted); }
.hm__tile dd { margin: 0; display: flex; flex-direction: column; gap: 2px; }
.hm__tile dd > .num { font: 400 32px/1 var(--font); color: var(--text); }
.hm__tile small { font-size: 13px; color: var(--muted); }

.hm__panel { padding: var(--pad); background: var(--surface); border-radius: var(--radius-card); display: flex; flex-direction: column; gap: 12px; }
.hm__panel h2 { font: 600 15px/1.3 var(--font); }
.hm__continue { background: var(--accent-tint); }
.hm__continue h2 { color: var(--accent); }
.hm__panel-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.hm__chip { font: 500 12px/1 var(--font); padding: 5px 10px; border-radius: 999px; background: var(--pill-neutral-bg); color: var(--pill-neutral-ink); }

.hm__row { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 14px 16px; min-height: 76px; background: var(--raised); border: 1px solid var(--border); border-radius: var(--radius-inner); color: var(--text); transition: border-color 160ms var(--ease-out); }
.hm__row:hover { text-decoration: none; border-color: var(--control); }
.hm__row:hover .hm__go { background: #3a3b37; }
.hm__row-main { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.hm__row-title { font: 600 18px/1.3 var(--font); }
.hm__row-sub { font-size: 14px; color: var(--muted); }
.hm__go { flex: none; }

.map { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }
.map__row { display: grid; grid-template-columns: 1.8em 1fr auto; grid-template-areas: "n t s" "n c c"; align-items: center; gap: 6px 10px; min-height: 48px; padding: 10px 12px; border-radius: 12px; background: var(--raised); color: var(--text); }
.map__n { grid-area: n; } .map__title { grid-area: t; } .map__soon { grid-area: s; } .map__cells { grid-area: c; }
a.map__row:hover { text-decoration: none; outline: 1px solid var(--control); }
.is-soon .map__row { background: transparent; color: var(--muted); }
.map__n { font-size: 14px; color: var(--muted); }
.map__title { font-size: 15px; line-height: 1.35; }
.map__cells { display: flex; gap: 3px; direction: rtl; }
.map__cell { flex: 1; max-width: 28px; }
.map__cell { height: 8px; border-radius: 999px; background: var(--surface-2); transition: background-color 300ms var(--ease-out); }
.map__cell.is-done { background: var(--accent); }
.map__soon { font-size: 13px; color: var(--muted); }

@media (min-width: 1024px) {
  .hm { padding-top: 36px; }
  .hm__greet { font-size: 32px; letter-spacing: -0.02em; }
  .hm__tiles { grid-template-columns: repeat(4, 1fr); }
}
`;export{s as default};