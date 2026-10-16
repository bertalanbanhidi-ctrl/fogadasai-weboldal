const button=document.querySelector('.menu-toggle');
const menu=document.querySelector('.nav-links');
if(button&&menu){
  button.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    button.setAttribute('aria-expanded',String(open));
    button.textContent=open?'✕':'☰';
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    menu.classList.remove('open');
    button.setAttribute('aria-expanded','false');
    button.textContent='☰';
  }));
}
const yr=document.getElementById('year');if(yr)yr.textContent=new Date().getFullYear();
