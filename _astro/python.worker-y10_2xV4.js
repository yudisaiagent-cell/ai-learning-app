let e=null;function t(){return e??=(async()=>{let e=new URL(`/ai-learning-app/`.replace(/\/$/,``)+`/pyodide/`,self.location.origin).href;return(await import(
/* @vite-ignore */
e+`pyodide.mjs`)).loadPyodide({indexURL:e})})(),e}self.onmessage=async e=>{if(`warm`in e.data){await t(),self.postMessage({warm:!0});return}let{id:n,code:r}=e.data,i=``,a=``;try{let e=await t();e.setStdout({batched:e=>i+=e+`
`}),e.setStderr({batched:e=>a+=e+`
`}),await e.runPythonAsync(r),self.postMessage({id:n,ok:!0,stdout:i,stderr:a})}catch(e){let t=String(e?.message??e).split(`
`).filter(e=>!e.includes(`/lib/python`)&&!e.includes(`_pyodide`)).join(`
`);self.postMessage({id:n,ok:!1,stdout:i,stderr:a+t})}};