function convert(e){return e.replace(/wx:/g,"s-").replace(/s-for-items/,"s-for").replace(/\.wxml/g,".swan").replace(/><\/input>/g,"/>").replace(/\s+form[A-Z]\w+=/g,e=>e.replace(/[A-Z]/g,e=>`-${e}`)).replace(/<[\w]+/gi,e=>e.replace(/[A-Z]/g,e=>["-",e.toLowerCase()].join(""))).replace(/data-\s*\S*=/g,e=>e.toLocaleLowerCase()).replace(/<\/[\w]+>/gi,e=>e.replace(/[A-Z]/g,e=>["-",e.toLowerCase()].join(""))).replace(/{{[^}]+(<)[^=\s][^}]+}}/gi,(e,r)=>e.replace(r,[r," "].join(""))).replace(/{{[^}\d\w]*(\.)[\d][^}]+}}/g,(e,r)=>e.replace(r,["0",r].join(""))).replace(/scroll-into-view=["']{{([^}]+)}}["']/g,(e,r)=>e.replace("{{","").replace("}}","").replace(r,`{=${r}=}`)).replace(/scroll-top=["']{{([^}]+)}}["']/g,(e,r)=>e.replace("{{","").replace("}}","").replace(r,`{=${r}=}`)).replace(/scroll-left=["']{{([^}]+)}}["']/g,(e,r)=>e.replace("{{","").replace("}}","").replace(r,`{=${r}=}`)).replace(/<template.*\s+data=["']({{[^}]+}})/g,(e,r)=>e.replace(r,`{${r}}`)).replace(/<image([^>]+)>/g,(e,r)=>e.match(/class=/)?e:e.replace(r,[' class="fix-image-cls" ',r].join(""))).replace(/url\(['"]?\/\/[^)]+['"]?\)/gi,e=>e.replace(/\/\//g,e=>`https:${e}`)).replace(/url=["']{{([^{}\s?=]+)}}/gi,(e,r)=>e.replace(r,`(${r}[0]=='/' && ${r}[1]=='/') ? 'https:' + ${r}:${r}`)).replace(/url\({{([^{}\s?=]+)}}/gi,(e,r)=>e.replace(r,`(${r}[0]=='/' && ${r}[1]=='/') ? 'https:' + ${r}:${r}`)).replace(/<video[^>]+(object-fit)=/g,(e,r)=>e.replace(r,"objectFit")).replace(/<video[^>]+(vslide-gesture|page-gesture)=/g,(e,r)=>e.replace(r,"page-gesture"))}module.exports=convert;