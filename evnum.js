function revisar() {
 
    var puntos = 100;
    var a = 0;
    var e = 0;
    var pregunta1 = document.getElementById('uno').checked;
    var pregunta2 = document.getElementById('dos').checked;
    var pregunta3 = document.getElementById('tres').checked;
    var pregunta4 = document.getElementById('cuatro').checked;
    var pregunta5 = document.getElementById('cinco').checked;
    if(pregunta1==false){
    puntos=puntos-10;
    e++;
    }else{
    a++;
    }
    if(pregunta2==false){
    puntos=puntos-10;
    e++;
    }else{
    a++;
    }
    if(pregunta3==false){
    puntos=puntos-10;
    e++;
    }else{
    a++;
    }
    if(pregunta4==false){
    puntos=puntos-10;
    e++;
    }else{
    a++;
    }
    if(pregunta5==false){
    puntos=puntos-10;
    e++;
    }else{
    a++;
    }
    if(puntos==100){
    //window.alert("Exito");
    return bien();
    }else{
     //window.alert("Suerte la proxima");
     return mal();
    }
      
 }
 function regresar(){
     window.location = "menu1.html";
     
 } 



function bien(){
   
        Swal.fire({
            title: 'Excelente!',
           
          
            color: '#716add',
            background: '#fff ' ,
            backdrop: `
              rgba(0,0,123,0.4)
              url("img/felicidadesev.gif")
              top
              no-repeat
            `,
            html:'<audio id="intro" src="sonidos/victoria1.mp3" autoplay></audio>'
        });
     
} 
function mal(){
   
    Swal.fire({
        title: 'Esfuerzate mas',
       
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("img/trsiteev.gif")
          top
          no-repeat
        `,
        html:'<audio id="intro" src="sonidos/derrota2.mp3" autoplay></audio>'
      
    });
 
}
function atras(){
    Swal.fire({
       
       
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("img/adios1.gif")
          top
          no-repeat
        `,
        confirmButtonText:'<p onclick="regresar()">Menu</p>',
     
        html:'<audio id="intro" src="sonidos/derrota4.mp3" autoplay></audio>'
    });
}
