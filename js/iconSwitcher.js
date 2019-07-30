


var currentlyChanged = {};
var timer = {};


var iconFadeLength = 1000;
var switchingBackLength = 5000;


function switchLogo(element, name) {

    if(currentlyChanged[name] == true)
    {
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

  