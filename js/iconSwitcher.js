function hover(element, name) {


    $(element).animate({'opacity': 0}, 1000, function () {
        $(this).attr('src','images/servicesIcons/'+name+'_OTHER.svg')
    }).animate({'opacity': 1}, 1000);


    //element.setAttribute('src', 'images/servicesIcons/'+name+'_OTHER.svg');

  }
  
  function unhover(element, name) {
    $(element).animate({'opacity': 0}, 1000, function () {
        $(this).attr('src','images/servicesIcons/'+name+'.svg')
    }).animate({'opacity': 1}, 1000);
  }

  