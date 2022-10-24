function siguiente(){
  window.location = "numerosev.html";
  
} 
function bien(){
  Swal.fire({
        
    color: '#716add',
    imageUrl:'img/bien.gif',
    
    background: '#fff url(/images/trees.png) ' ,
    backdrop: `
      rgba(0,0,123,0.4)
      
    `,
    html:'<audio id="intro" src="sonidos/asierto.mp3" autoplay></audio>',
    confirmButtonText:'<p onclick="siguiente()">Siguiente</p>',
});
  
} 
  ///////
  
  $("#bien2").click( function(){

    Swal.fire({
      imageUrl:'img/bien2.gif',
        
        color: '#716add',
        background: '#fff url(/images/trees.png)' ,
        backdrop: `
          rgba(0,0,123,0.4)
          `,
        html:'<audio id="intro" src="sonidos/victoria2.mp3" autoplay></audio>'
    });
 
  });
    ///////
  $("#mal1").click( function(){

    Swal.fire({
      imageUrl:'img/error.gif',
        color: '#716add',
        background: '#fff url(/images/trees.png)' ,
        backdrop: `
          rgba(0,0,123,0.4)
          
        `,
        html:'<audio id="intro" src="sonidos/error.mp3" autoplay></audio>'
    });
 
  });
  ///////
  $("#mal2").click( function(){

    Swal.fire({
      imageUrl:'img/error2.gif',     
        color: '#716add',
        background: '#fff url(/images/trees.png)' ,
        backdrop: `
          rgba(0,0,123,0.4)
          
        `,
        html:'<audio id="intro" src="sonidos/derrota4.mp3" autoplay></audio>'
    });
 
  });
///////
$("#mal3").click( function(){

  Swal.fire({
    imageUrl:'img/error3.gif',
      color: '#716add',
      background: '#fff url(/images/trees.png)' ,
      backdrop: `
        rgba(0,0,123,0.4)
        
      `,
      
      html:'<audio id="intro" src="sonidos/derrota2.mp3" autoplay></audio>'
  });

});
