

$(document).ready(function () {
    $(".texta").hide();
    $('#work4').hover(function () {
        $(this).find('.texta').fadeIn(300);
    }, function () {
        $(this).find('.texta').fadeOut(100);
    });



    $('.textb').hide();
    $('#work3').hover(function () {
        $(this).find('.textb').fadeIn(300);
    }, function () {
        $(this).find('.textb').fadeOut(100);
    });
    $('.textd').hide();
    $('#work1').hover(function () {
        $(this).find('.textd').fadeIn(300);
    }, function () {
        $(this).find('.textd').fadeOut(100);
    });
    $('.textc').hide();
    $('#work2').hover(function () {
        $(this).find('.textc').fadeIn(300);
    }, function () {
        $(this).find('.textc').fadeOut(100);
    });
    $('.texte').hide();
    $('#work5').hover(function () {
        $(this).find('.texte').fadeIn(300);
    }, function () {
        $(this).find('.texte').fadeOut(100);
    });
    $('.textf').hide();
    $('#work6').hover(function () {
        $(this).find('.textf').fadeIn(300);
    }, function () {
        $(this).find('.textf').fadeOut(100);
    });
    $('.textg').hide();
    $('#work7').hover(function () {
        $(this).find('.textg').fadeIn(300);
    }, function () {
        $(this).find('.textg').fadeOut(100);
    });
    $('.texth').hide();
    $('#work8').hover(function () {
        $(this).find('.texth').fadeIn(300);
    }, function () {
        $(this).find('.texth').fadeOut(100);
    });
})

$('.sdesign').hide();
$('.desig').click(function () {
    $('.desig').hide();
    $('.sdesign').show();
});
$('.sdesign').click(function () {
    $('.sdesign').hide();
    $('.desig').show();
});

$('.sdevelopment').hide();
$('.develop').click(function () {
    $('.develop').hide();
    $('.sdevelopment').show();
});
$('.sdevelopment').click(function () {
    $('.sdevelopment').hide();
    $('.develop').show();
});

$('.sproduct').hide();
$('.produc').click(function () {
    $('.produc').hide();
    $('.sproduct').show();
});
$('.sproduct').click(function () {
    $('.sproduct').hide();
    $('.produc').show();
});


$('.contact').submit(function () {
    let nameValue = document.getElementById('name').value;
    let emailValue = document.getElementById('email').value;

    if (nameValue !== "" && emailValue !== "") {
        alert("Hello  " + nameValue + " , we have received your message and contact details. Thank you");
    }

    else {
        alert(" Enter your name,email and a message, then click submit button");
    }


})


