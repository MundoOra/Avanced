function regresar(){
  window.location = "menu1.html";
  
} 

$("#revisar").click( function(){

  Swal.fire({
    
      title: 'Custom width, padding, color, background.',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("img/nyan-cat.gif")
        top
        no-repeat
      `,
      html:'<button class="redondo" onclick="regresar()">regresar</button>',
      showConfirmButton:false
  });
});