
      
      var secDuration = 6;
      var image = 1;
      var maxImages = 4;
      var slider = document.getElementById('slider');
      var timeout
      
     
      function changeImage(requiredImage) {
      
        
        if (!requiredImage && requiredImage != 0){ 
          if(image < maxImages){
            image++;
          }
          else{
            image = 1;
          }
        }
        else{ 
          if(requiredImage > maxImages){
            image = 1;
          }
          else if(requiredImage < 1){ 
            image = maxImages;
          }
          else{
            image = requiredImage; 
          }
        }
        
        slider.className = "image"+image;
        
        
        clearTimeout(timeout)
        timeout = setTimeout("changeImage()",secDuration*400);
      }
      
      
      function nextImage(){
        changeImage(image+1);
      }
      function prevImage(){
        changeImage(image-1);
      }
      
      
      changeImage(1);
  