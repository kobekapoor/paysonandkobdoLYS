<<<<<<< Updated upstream



var currentlyChanged = {};
var timer = {};


var iconFadeLength = 750;
var switchingBackLength = 4000;


function switchLogo(element, name) {

    if(currentlyChanged[name] == true)
    {
        clearTimeout(timer[name]);
        return;
    }
    currentlyChanged[name] = true;

    $(element).animate({'opacity': 0}, iconFadeLength, function () {
        $(this).attr('src','images/servicesIcons/'+name+'_ORANGE.svg')      
    }).animate({'opacity': 1}, iconFadeLength);
  }
  

  function switchLogoBack(element, name) {

    if(timer[name])
    {
        clearTimeout(timer[name]);
        timer[name]  = null;
    }

    timer[name] = setTimeout(
        function() 
        {

            $(element).animate({'opacity': 0}, iconFadeLength, function () {
                $(this).attr('src','images/servicesIcons/'+name+'_GREY.svg')
            }).animate({'opacity': 1}, iconFadeLength);
            currentlyChanged[name] = false;
        }, switchingBackLength);
        
  }

  
=======
function hover(element, name) {
    //element.setAttribute('src', 'images/servicesIcons/'+name+'_OTHER.svg');
    $(element).fadeOut(300, function(){
        $(this).attr('src','images/servicesIcons/'+name+'_OTHER.svg').bind('onreadystatechange load', function(){
           if (this.complete) 
            $(this).fadeIn(290);
        });
    });

  }
  
  function unhover(element, name) {
    element.setAttribute('src', 'images/servicesIcons/'+name+'.svg');

  }
>>>>>>> Stashed changes
