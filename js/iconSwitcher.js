function hover(element, name) {
    //element.setAttribute('src', 'images/servicesIcons/'+name+'_OTHER.svg');
    $(element).fadeOut(300, function(){
        $(this).attr('src','images/servicesIcons/'+name+'_OTHER.svg').bind('onreadystatechange load', function(){
           if (this.complete) 
            $(this).fadeIn(290);
        });
    });
    element.style.background = "#E7E7E7"
  }
  
  function unhover(element, name) {
    element.setAttribute('src', 'images/servicesIcons/'+name+'.svg');
    element.style.background = "white"
  }