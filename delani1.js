
        
         $(document).ready(function(){
            $(".texta").hide();    
        $(".image4").hover(function(){
          $(this).stop().animate({opacity:.4},200);
          $('.texta').fadeIn();},
    
    
        function() {
          $(this).stop().animate({opacity:1},500)
          $('.texta').fadeOut();
        });
    
        $('.textb').hide();
        $('#work3').hover( function() {       
            $(this).find('.textb').fadeIn(300);
        }, function() {
            $(this).find('.textb').fadeOut(100);
        });
        $('.textd').hide();
        $('#work1').hover( function() {       
            $(this).find('.textd').fadeIn(300);
        }, function() {
            $(this).find('.textd').fadeOut(100);
        });
        $('.textc').hide();
        $('#work2').hover( function() {       
            $(this).find('.textc').fadeIn(300);
        }, function() {
            $(this).find('.textc').fadeOut(100);
        });
        $('.texte').hide();
        $('#work5').hover( function() {       
            $(this).find('.texte').fadeIn(300);
        }, function() {
            $(this).find('.texte').fadeOut(100);
        });
        $('.textf').hide();
        $('#work6').hover( function() {       
            $(this).find('.textf').fadeIn(300);
        }, function() {
            $(this).find('.textf').fadeOut(100);
        });
        $('.textg').hide();
        $('#work7').hover( function() {       
            $(this).find('.textg').fadeIn(300);
        }, function() {
            $(this).find('.textg').fadeOut(100);
        });
        $('.texth').hide();
        $('#work8').hover( function() {       
            $(this).find('.texth').fadeIn(300);
        }, function() {
            $(this).find('.texth').fadeOut(100);
        });
    })

    $('.sdesign').hide();
    $('.desig').click(function(){
        $('.desig').hide();
        $('.sdesign').show();
    });
    $('.sdesign').click(function(){
        $('.sdesign').hide();
        $('.desig').show();
    });
    