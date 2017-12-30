let name='ashutosh';

function makeUpperCase(word){
  return word.toUpperCase();
}

let template=`<h1>${makeUpperCase('hello')},${name}</h1>
<p>Welcome to the world community</p>`;
document.getElementById('template').innerHTML=template;
