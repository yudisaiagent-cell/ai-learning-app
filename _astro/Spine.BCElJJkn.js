import{t as e}from"./useStore.8hAnF1ji.js";import{t}from"./jsx-runtime.C2aMnSBe.js";var n=t();function r({items:t,kind:r,current:i}){let a=e(),o=e=>!!(r===`subtopics`?a?.subtopicsDone[e]:a?.chaptersDone[e]),s=t.filter(e=>o(e.id)).length,c=i??t.find(e=>e.href&&!o(e.id))?.id;return(0,n.jsxs)(`div`,{className:`spine`,role:`img`,"aria-label":`${s} מתוך ${t.length} ${r===`subtopics`?`תתי-נושאים`:`פרקים`} נלמדו`,children:[(0,n.jsx)(`ol`,{className:`spine__row`,children:t.map(e=>{let t=o(e.id)?`done`:e.id===c?`here`:`ahead`,r=(0,n.jsx)(`span`,{className:`seg seg--${t}`});return(0,n.jsx)(`li`,{title:e.label,children:e.href?(0,n.jsx)(`a`,{href:e.href,tabIndex:-1,"aria-hidden":`true`,children:r}):r},e.id)})}),(0,n.jsx)(`span`,{className:`spine__count num`,"aria-hidden":`true`,children:a?`${s}/${t.length}`:``}),(0,n.jsx)(`style`,{children:`
        .spine { position: sticky; top: 52px; z-index: 14; display: flex; align-items: center; gap: 12px; padding: 4px var(--gutter) 12px; background: var(--surface); }
        .spine__row { list-style: none; margin: 0; padding: 0; display: flex; flex: 1; gap: 3px; align-items: center; max-width: var(--measure); }
        .spine__row li { flex: 1; display: flex; }
        .spine__row a { display: flex; flex: 1; padding-block: 8px; }
        .seg { display: block; flex: 1; height: 5px; border-radius: 999px; background: var(--control); transition: background-color 300ms var(--ease-out); }
        .seg--done { background: var(--accent); }
        .seg--here { background: var(--text); }
        .spine__count { font: 500 13px/1 var(--font); color: var(--muted); min-width: 2.8em; text-align: left; direction: ltr; }
        @media (min-width: 1024px) { .spine { position: static; background: transparent; padding: 8px 32px 0; } }
      `})]})}export{r as default};