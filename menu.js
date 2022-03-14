const portoes = document.getElementById('div_portao');
const portas = document.getElementById('div_porta');
const janelas = document.getElementById('div_janela');
const vidros = document.getElementById('div_vidros');
const corri = document.getElementById('div_corrimao');


const btnPortoes = document.getElementById('btn_menuPortao')
const btnPortas = document.getElementById('btn_menuPortas')
const btnJanela = document.getElementById('btn_menuJanelas')
const btnCorrimao = document.getElementById('btn_menuCorrimao')
const btnVidros = document.getElementById('btn_menuVidros')



//rola a pagina ate um determinado elemento
function rolar(elemento, desconto) {
    const y = elemento.getBoundingClientRect().top + desconto + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
    
}

// eventos dos botoes de menu
btnPortoes.addEventListener('click', ()=>{
    rolar(portoes, -300)
    
 })

 btnPortas.addEventListener('click', ()=>{
    rolar(portas,   -180)
    
 })

 
 btnJanela.addEventListener('click', ()=>{
    rolar(janelas, -50)
    
 })

 
 btnCorrimao.addEventListener('click', ()=>{
     console.log('ffffff',vidros)
     rolar(corri, 0)
    
 })

 btnVidros.addEventListener('click', ()=>{
    console.log('ffffff',vidros)
    window.scrollBy({
        top: 4500,
        behavior: 'smooth'
      })
   
})













 



