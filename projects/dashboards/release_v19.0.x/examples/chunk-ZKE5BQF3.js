function p(a,r){let{dataFieldIds:e}=a.properties||{},t;return e?t=Object.keys(e).reduce((o,s)=>{let n=e[s];return o[s]=r[n],o},{}):t={value:r.value},t}export{p as a};
