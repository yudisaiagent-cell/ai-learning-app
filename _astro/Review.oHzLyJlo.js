import{n as e}from"./rolldown-runtime.WkwZ5CU-.js";import{t}from"./react.CmU_e8vp.js";import{a as n,o as r,r as i,t as a}from"./useStore.8hAnF1ji.js";import{t as o}from"./Ic.CTWJy8ks.js";import{t as s}from"./jsx-runtime.C2aMnSBe.js";var c=e(t(),1),l=s();function u({cards:e}){let t=a(),[s,u]=(0,c.useState)(null),[f,p]=(0,c.useState)(0),[m,h]=(0,c.useState)(!1),[g,_]=(0,c.useState)(`due`);(0,c.useEffect)(()=>{t&&!s&&u(e.filter(e=>n(r(),e.id)))},[t]);let v=(0,c.useMemo)(()=>{let n=[0,0,0,0,0];return e.forEach(e=>n[(t?.leitner[e.id]?.box??1)-1]++),n},[t]);if(!t||!s)return(0,l.jsx)(`p`,{className:`rv__loading`,children:`טוען כרטיסיות…`});let y=s[f],b=e=>{i(y.id,e),h(!1),p(e=>e+1)};return(0,l.jsxs)(`section`,{className:`rv`,children:[(0,l.jsx)(`div`,{className:`rv__boxes`,role:`img`,"aria-label":`כרטיסיות לפי קופסה: ${v.map((e,t)=>`קופסה ${t+1}: ${e}`).join(`, `)}`,children:v.map((e,t)=>(0,l.jsxs)(`div`,{className:`rv__box`,children:[(0,l.jsx)(`span`,{className:`rv__box-n num`,children:e}),(0,l.jsxs)(`span`,{className:`rv__box-l`,children:[`קופסה `,(0,l.jsx)(`span`,{className:`num`,children:t+1})]})]},t))}),y?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(`p`,{className:`rv__count`,children:[`כרטיס `,(0,l.jsx)(`span`,{className:`num`,children:f+1}),` מתוך `,(0,l.jsx)(`span`,{className:`num`,children:s.length}),` · `,y.chapterTitle]}),(0,l.jsxs)(`button`,{type:`button`,className:`rv__card ${m?`is-flipped`:``}`,onClick:()=>h(e=>!e),"aria-label":m?`הצד הקדמי`:`הפוך את הכרטיס`,children:[(0,l.jsxs)(`span`,{className:`rv__face rv__front`,"aria-hidden":m,children:[(0,l.jsx)(`span`,{className:`rv__q`,children:y.front}),(0,l.jsx)(`span`,{className:`rv__hint`,children:`הקש כדי להפוך`})]}),(0,l.jsx)(`span`,{className:`rv__face rv__back`,"aria-hidden":!m,children:(0,l.jsx)(`span`,{className:`rv__a`,children:y.back})})]}),(0,l.jsx)(`div`,{className:`rv__grade`,"aria-live":`polite`,children:m?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(`button`,{type:`button`,className:`btn`,onClick:()=>b(!1),children:[`עוד לא `,(0,l.jsx)(`span`,{className:`rv__sub`,children:`חוזר לקופסה 1`})]}),(0,l.jsxs)(`button`,{type:`button`,className:`btn btn--cloth`,onClick:()=>b(!0),children:[(0,l.jsx)(o,{name:`check`}),` ידעתי`]})]}):(0,l.jsx)(`button`,{type:`button`,className:`btn btn--cloth`,onClick:()=>h(!0),children:`הצג תשובה`})})]}):(0,l.jsxs)(`div`,{className:`rv__empty`,children:[(0,l.jsx)(`h2`,{children:g===`due`&&s.length===0?`אין כרטיסיות לחזרה היום`:`סיימת את החזרה`}),(0,l.jsx)(`p`,{children:`כרטיס שידעת עולה קופסה, והחזרה הבאה עליו תהיה מאוחר יותר: יום, יומיים, 4, 8 ואז 16 ימים. כרטיס שלא ידעת חוזר לקופסה 1.`}),(0,l.jsx)(`button`,{type:`button`,className:`btn`,onClick:()=>{_(`all`),u(e.slice().sort(()=>Math.random()-.5)),p(0),h(!1)},children:`תרגול חופשי של כל הכרטיסיות`})]}),(0,l.jsx)(`style`,{children:d})]})}var d=`
.rv { display: flex; flex-direction: column; gap: 18px; }
.rv__loading { color: var(--muted); }
.rv__boxes { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; }
.rv__box { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 12px 4px; background: var(--surface); border-radius: var(--radius-inner); }

.rv__box-n { font: 400 22px/1 var(--font); color: var(--text); }
.rv__box-l { font-size: 14px; color: var(--muted); }
.rv__count { font-size: 15px; color: var(--muted); }
.rv__card { all: unset; box-sizing: border-box; cursor: pointer; position: relative; display: grid; min-height: 260px; perspective: 1200px; }
.rv__card:focus-visible { outline: 2px solid var(--cloth); outline-offset: 3px; }
.rv__face { grid-area: 1 / 1; display: flex; flex-direction: column; justify-content: center; gap: 14px; padding: 28px 24px; border-radius: var(--radius-card); backface-visibility: hidden; transition: transform 460ms var(--ease-out); }
.rv__front { background: var(--surface); }
.rv__back { background: var(--accent); color: #fff; transform: rotateY(180deg); }
.rv__card.is-flipped .rv__front { transform: rotateY(-180deg); }
.rv__card.is-flipped .rv__back { transform: rotateY(0); }
.rv__q { font: 600 23px/1.35 var(--font); }
.rv__a { font: 400 20px/1.7 var(--f-text); }
.rv__hint { font-size: 14px; color: var(--muted); }
.rv__grade { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.rv__grade > .btn:only-child { grid-column: 1 / -1; }
.rv__grade .btn { min-height: 54px; flex-direction: column; gap: 2px; }
.rv__sub { font-size: 14px; color: var(--muted); }
.rv__empty { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; padding: var(--pad); background: var(--surface); border-radius: var(--radius-card); }
.rv__empty h2 { font-size: 22px; }
.rv__empty p { color: var(--ink-soft); font-size: 17px; }
@media (prefers-reduced-motion: reduce) { .rv__face { transition: none; } }
`;export{u as default};