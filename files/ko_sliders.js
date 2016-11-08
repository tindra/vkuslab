(function( $ ) {
    $.fn.CKoSliderBlock = function(settings) {
        var __this = this;
        
        var options = $.extend({
            itemWidth : 0,
            itemHeight : 0,
            itemCoint : 0,
            obInner : false,
            speed : 600,
            playInterval : 6000,
            rootItem : 0,
            obNav : 0,
            timerId : false,
            showNav : false
        }, settings);
        
        options.obNav = this.siblings('.b_index_block__slider__nav');
        this.wrapInner('<div class="KoSliderWrapper"></div>');
        options.obInner = this.find('.KoSliderWrapper');
        
        function Init() {
            
            
            
            options.itemWidth = ($(window).width()/2);
            options.itemHeight = options.obInner.children().outerHeight();
            options.itemCoint = options.obInner.children().length;
            
            var visibelBlockHeight = parseInt($(window).height()-$('.b_top_menu__wrapper').height()-$('#bx-panel').height());
            if (visibelBlockHeight > 440) {
                options.itemHeight = visibelBlockHeight;
            }

            
            
            __this.find('.b_index_block__slider__item').css({
                'height' : options.itemHeight
            });
            __this.find('.b_index_block__slider__item__50').css({
                'height' : options.itemHeight/2
            });
            $('.b_index_block1__right__bl1, .b_index_block1__right__bl2').css({
                'height' : options.itemHeight/2
            });
            
            options.obInner.children().css({
                'width' : options.itemWidth
            });
            
            
            __this.css({
                'overflow' : 'hidden',
                'width' : options.itemWidth,
                'height' : options.itemHeight,
                'position' : 'relative'
            });
            options.obInner.css({
                'width' : options.itemCoint*options.itemWidth,
                'height' : options.itemHeight,
                'position' : 'absolute',
                'top' : '0',
                'left' : 0
            });
            
            

        }
        
        
        Init();
        $(window).resize(function(){
            Init();
            if (options.timerId) {
                clearTimeout(options.timerId);
            }
            options.obInner.stop(true, true);
        });
        
        
        if (options.showNav === true) {
            for (var i = 0; i < options.itemCoint; i++) {
                options.obNav.append('<a href="#"></a>');
            }
            /*options.obNav.css({
                'margin-left' : '-'+(options.obNav.width()/2)+'px'
            });*/
            options.obNav.find('a').first().addClass('selected');


            options.obNav.find('a').click(function (){
                showFromNav($(this));
                return false;
            });
        } else {
            options.obNav.hide();
        }
        
        
        options.timerId = setTimeout(function tick() {
            showNext();
            options.timerId = setTimeout(tick, options.playInterval);
        }, options.playInterval);
        
        
        function showNext() {
        

            if (options.rootItem == (options.itemCoint-1)) {
                options.obInner.animate({
                    'left' : '0'
                }, options.speed);
                options.rootItem = 0;

            } else {

                options.obInner.animate({
                    'left' : '-='+options.itemWidth
                }, options.speed);
                options.rootItem++;

            }
            options.obNav.find('a').removeClass('selected');
            options.obNav.find('a').eq(options.rootItem).addClass('selected');
        }

        function showFromNav(obNavItem) {

            if (options.timerId) {
                clearTimeout(options.timerId);
            }

            options.obInner.stop(true, true);


            options.obInner.stop(true, true);

            options.obInner.animate({
                    'left' : '-'+ options.itemWidth*obNavItem.index()
                },options.speed);

            options.rootItem = obNavItem.index();

            options.obNav.find('a').removeClass('selected');
            options.obNav.find('a').eq(options.rootItem).addClass('selected');

            options.timerId = setTimeout(function tick() {
                showNext();
                options.timerId = setTimeout(tick, options.playInterval);
            }, options.playInterval);

        }    


    };
})(jQuery);

/*
function CKoSliderBlock(obSlider) {
    

    
    this.options = {
        itemWidth : 0,
        itemHeight : 0,
        itemCoint : 0,
        obInner : false,
        speed : 600,
        playInterval : 6000,
        rootItem : 0,
        obNav : 0,
        timerId : false
    };
    
    this.options.itemWidth = obSlider.children().outerWidth();
    this.options.itemHeight = obSlider.children().outerHeight();
    this.options.itemCoint = obSlider.children().length;
    
    obSlider.children().css({
        'width' : this.options.itemWidth
    });
    
    this.options.obNav = obSlider.siblings('.b_index_block__slider__nav');
    
    obSlider.wrapInner('<div class="KoSliderWrapper"></div>');
    this.options.obInner = obSlider.find('.KoSliderWrapper');
    
    obSlider.css({
        'overflow' : 'hidden',
        'width' : this.options.itemWidth,
        'height' : this.options.itemHeight,
        'position' : 'relative'
    });
    this.options.obInner.css({
        'width' : this.options.itemCoint*this.options.itemWidth,
        'height' : this.options.itemHeight,
        'position' : 'absolute',
        'top' : '0',
        'left' : 0
    });
    
    for (var i = 0; i < this.options.itemCoint; i++) {
        this.options.obNav.append('<a href="#"></a>');
    }
    this.options.obNav.css({
        'margin-left' : '-'+(this.options.obNav.width()/2)+'px'
    });
    this.options.obNav.find('a').first().addClass('selected');

    
    /*
    this.options.timerId = setTimeout(function tick() {
        showNext();
        timerId = setTimeout(tick, this.options.playInterval);
    }, this.options.playInterval);
    */
   /*
    this.options.timerId = setInterval(function (){
        showNext();
    }, this.options.playInterval);

    this.options.obNav.find('a').click(function (){
        showFromNav($(this));
        return false;
    });

    function showNext() {
        
        console.log(obSlider.attr('id'));
        
        if (this.options.rootItem == (this.options.itemCoint-1)) {
            this.options.obInner.animate({
                'left' : '0'
            }, this.options.speed);
            this.options.rootItem = 0;
            
        } else {
            
            this.options.obInner.animate({
                'left' : '-='+this.options.itemWidth
            }, this.options.speed);
            this.options.rootItem++;
            
        }
        this.options.obNav.find('a').removeClass('selected');
        this.options.obNav.find('a').eq(this.options.rootItem).addClass('selected');
    }
    
    function showFromNav(obNavItem) {
        
        if (timerId) {
            clearTimeout(timerId);
        }
        this.options.obInner.stop(true, true);
        
                
        this.options.obInner.stop(true, true);
        
        this.options.obInner.animate({
                'left' : '-'+ this.options.itemWidth*obNavItem.index()
            },this.options.speed);
        
        this.options.rootItem = obNavItem.index();
        
        this.options.obNav.find('a').removeClass('selected');
        this.options.obNav.find('a').eq(this.options.rootItem).addClass('selected');
        
        timerId = setTimeout(function tick() {
            showNext();
            timerId = setTimeout(tick, this.options.playInterval);
        }, this.options.playInterval);
        
    }    
    
        
}*/