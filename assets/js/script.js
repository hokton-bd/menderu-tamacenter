$(document).ready(function() {

    $('.nav-link').click(function(){
        var adjust = 0;
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    $('.js-modal-open').each(function() {

        $(this).on('click', function() {

            $('.slider').show();

            let target = $(this).data('target');
            let modal = document.getElementById(target);

            $(modal).addClass('slider-active');
            toggleChangeBtn();
            $(modal).fadeIn();

        });

        $('.js-modal-close').on('click', function() {

            let active = $('.slider-active');
            $(active).removeClass('slider-active');
            $('.js-modal').fadeOut();
            $('.slider').hide();

        });
        
    });


    function toggleChangeBtn() {
        var slideIndex = $('.js-slide').index($('.slider-active'));/*activeクラスがついている要素(現在表示中のスライド)のindexを取得*/
        $('.button').show();/*両ボタンを表示*/
        if(slideIndex == 0){/*一番最初の要素が表示されているとき*/
            $('.prev').hide();/*prevボタンを隠す。*/
            $('.next').show();

        }else if(slideIndex == $('.js-slide').length - 1){/*一番最後の要素が表示されているとき*/
            $('.next').hide();/*nextボタンを隠す。*/
            $('.prev').show();
            
        } else {
            $('.next').show();
            $('.prev').show();
        }
    }

    $('.next').click(function() {/*nextボタンを押したとき*/
        var $displaySlide = $('.slider-active');/*現在表示中のスライドを取得*/
        $displaySlide.removeClass('slider-active');/*そのスライドからactiveクラスを除いて表示されないようにする。*/
        $displaySlide.next().addClass('slider-active');/*次のスライドにactiveクラスをつけ、表示させる。*/
        toggleChangeBtn();/*nextボタンを隠すか判断*/
    });
    $('.prev').click(function() {/*prevボタンを押したとき*/
    var $displaySlide = $('.slider-active');/*現在表示中のスライドを取得*/
    $displaySlide.removeClass('slider-active');/*そのスライドからactiveクラスを除いて表示されないようにする。*/
    $displaySlide.prev().addClass('slider-active');/*前のスライドにactiveクラスをつけ、表示させる。*/
    toggleChangeBtn();/*prevボタンを隠すか判断*/
    });

});

$(window).on('load resize', function(){
    var winW = $(window).width();
    var devW = 1024;
    if (winW >= devW) {
      
        $('.twitter-timeline').attr('data-height', attr('2000'));

    } else if(winW > 500) {

        $('.twitter-timeline').attr('data-height', attr('400'));

    }


  });