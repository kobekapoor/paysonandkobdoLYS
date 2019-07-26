
var currentlyChanged = {};
var timer = null;


var iconFadeLength = 1000;
var switchingBackLength = 5000;


function switchLogo(element, name) {

    if(currentlyChanged[name] == true)
    {
        return;
    }
    currentlyChanged[name] = true;

    $(element).animate({'opacity': 0}, iconFadeLength, function () {
        $(this).attr('src','images/servicesIcons/'+name+'_OTHER.svg')      
    }).animate({'opacity': 1}, iconFadeLength);
  }
  

  function switchLogoBack(element, name) {

    if(timer)
    {
        clearTimeout(timer);
        timer  = null;
    }

    timer = setTimeout(
        function() 
        {

            $(element).animate({'opacity': 0}, iconFadeLength, function () {
                $(this).attr('src','images/servicesIcons/'+name+'.svg')
            }).animate({'opacity': 1}, iconFadeLength);
            currentlyChanged[name] = false;
        }, switchingBackLength);
        
  }

  