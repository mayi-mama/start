$(function(){

    $btnMenu = $('#js-btn-menu');
    $gnav = $('.gnav');

    $btnMenu.on('click', function(){
        $btnMenu.toggleClass('active');
        $gnav.addClass('show');
        $gnav.animate({width: 'toggle'} , 200);
    });

    $document.on('click', function(e){
        $(!$(e.target).closet($gnav).length && !$(e.target).closet($btnMenu).length) {
            if($gnav.hasClass('show')){
                $gnav.removeClass('show');
                $btnMenu.toggleClass('active');
                $gnav.animate({width: 'toggle'}, 200);
            };
        };
    });
});