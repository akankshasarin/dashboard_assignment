function getIcon(name) {
    const url = '/dist/'+name+'.svg';
    fetch(url)
    .then((res) => {
      if (res.status == 200) {
        return res.text();
      } else {
        const errMsg = `
        Failed to Fetch iconset "${url}".
        Response Status: ${res.status}.
        Please check "gruntfile.js" to ensure you are creating the icon.
        `;
        throw errMsg;
      }
    })
    .then((svg)=>{
      const el = document.createElement('div');
      el.className = 'svgContent hidden';
      el.id = `iconset-${name}`;
      el.innerHTML = svg;
      document.body.appendChild(el);
    }).catch(error => console.error(error));
  }

  export default getIcon;