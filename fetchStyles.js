fetch('https://pallhotellet.se').then(r=>r.text()).then(t => { 
  const matches = t.match(/style\s*=\s*(['"])(?:(?!\1).)*color(?:(?!\1).)*\1/gi); 
  if(matches) console.log(matches.join('\n')); 
  else console.log('no matches'); 
});
