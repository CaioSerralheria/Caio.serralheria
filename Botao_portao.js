console.log("botao portao")

var  portao = document.getElementById('btn_portao')

var  porta = document.getElementById('btn_portas')

var  janela = document.getElementById('btn_janela')

var  corrimao= document.getElementById('btn_corrimao')

var  vidro = document.getElementById('btn_vidros')




function scrooll(){
	

  document.querySelectorAll("img").forEach((img,index)=>{
  	
  	var tamanho_lista = document.querySelectorAll("img").length - 3
  	
    //const div = document.getElementById("faceboo")
    
    if(index >1  && index < tamanho_lista && img.getBoundingClientRect().top < window.innerHeight){ 
  
      img.classList.add("img_servico2")
    }
	//else if(index == tamanho_lista  && img.getBoundingClientRect().top < window.innerHeight){ 
  		
     // div.classList.add("facebook2")
      
   // }
    else{
		img.classList.remove("img_servico2")
		//div.classList.remove("facebook2")
    }
  })
}


function cria_img(lista, pasta, div) {
	
  	portao = Array.from(Array(lista).keys()) 	
		
		portao.forEach((index)=>{
			
			const divs = document.getElementById(div)
    
    	    const img = document.createElement("img")
    
    
    	    divs.appendChild(img)
    
    	    img.src="https://CaioSerralheria.github.io/Caio.serralheria/Img/"+pasta+"/"+pasta+index+".jpg"
    
    	    img.classList.add("img_servico")
    	    img.loading="lazy"
			
		})
		botao_servicos(div)
		

  }


var tela = document.getElementsByTagName('body')[0].clientWidth
	console.log("scroolllll", tela)
if (tela > 700) {
	cria_img(13, "Portao", "div_portao")
	cria_img(10, "Portas", "div_porta")
	cria_img(9, "Janelas", "div_janela")
	cria_img(14, "Corrimao", "div_corrimao")
	cria_img(15, "Vidros", "div_vidros")

	
} else {
		
	portao.addEventListener("click", ()=>{
		cria_img(13, "Portao", "div_portao")
	});

	porta.addEventListener("click",  ()=>{
		cria_img(10, "Portas", "div_porta")
	});


	janela.addEventListener("click",  ()=>{
		cria_img(9, "Janelas", "div_janela")
	});


	corrimao.addEventListener("click",  ()=>{
		cria_img(14, "Corrimao", "div_corrimao")
	});


	vidro.addEventListener("click",  ()=>{
		cria_img(15, "Vidros", "div_vidros")
	});
	
}


function botao_servicos(div) {
	//console.log("abrindo div port??o",document.getElementById(div).getBoundingClientRect().top)
	document.getElementById(div).style.width="100%"
	scrooll()
}


document.addEventListener("scroll", scrooll)

