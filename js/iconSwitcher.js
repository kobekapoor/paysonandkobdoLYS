function hover(element, name) {
    element.setAttribute('src', 'images/servicesIcons/'+name+'_OTHER.svg');
    element.style.background = "#E7E7E7"
  }
  
  function unhover(element, name) {
    element.setAttribute('src', 'images/servicesIcons/'+name+'.svg');
    element.style.background = "white"
  }