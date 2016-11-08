$(document).ready(function (){
   
   
    $('.b_top_cart').click(function (){
        if ($(this).hasClass('b_top_cart__mopen')) {
        } else {
            $(this).addClass('b_top_cart__mopen');
            
            var setHeight = $(window).height()-$('.b_top_menu').height()-$('#bx-panel').height();
            
            var scrollBlockOriginHeight = $('.b_top_cart__list').outerHeight(true);
            var scrollBlockOriginScrollHeight = $('.b_top_cart__list__scroll').outerHeight(true);
            var empContent = scrollBlockOriginHeight-scrollBlockOriginScrollHeight;
            if (scrollBlockOriginHeight > setHeight) {
                $('.b_top_cart__list__scroll').css({
                    'height' : (setHeight-empContent)+'px'
                });
            }
            return false;
        }
    });
    $(document).click(function(event) {
        if ($(event.target).closest(".b_top_cart").length) {
            return;
        }
        $('.b_top_cart__list__scroll').css({
            'height' : 'auto'
        });
        $('.b_top_cart').removeClass('b_top_cart__mopen');
    });


    $('.b_top_cart__price').live('click', function (){
        var windowWidth = $(window).width();
        if ($('.b_top_cart').hasClass('b_top_cart__mopen')) {
            $('.b_top_cart__list__scroll').css({
                'height' : 'auto'
            });
            $('.b_top_cart').removeClass('b_top_cart__mopen');
        }
        return false;
    });

    

    //CatalogLeftMenuController();
    SiteTopMenuFxController();
    //CatalogLeftMenuScroll();
    $(window).scroll(function(){
        //CatalogLeftMenuController();
        //CatalogLeftMenuFxController();
        SiteTopMenuFxController();
    });
    
    function SiteTopMenuFxController() {
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollPos >= $('.b_top_menu').height()) {
            $('.b_top_menu').addClass('b_top_menu__fixed');
        } else {
            $('.b_top_menu').removeClass('b_top_menu__fixed');
        }
    }
    
    function CatalogLeftMenuFxController() {
        
        if ($('.b_fx_left_menu__open').length > 0) {
            var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollPos >= $('.b_top_menu').height()) {
                $('.b_fx_left_menu__open').animate({
                    top : $('.b_top_menu').height()
                }, 100);
            } else {
                $('.b_fx_left_menu__open').stop(true);
                $('.b_fx_left_menu__open').animate({
                    top : $('.b_top_menu').height()
                }, 100);
            }
        }
    }
    
    function CatalogLeftMenuScroll() {
        
        var scrollHtml = '<div class="b_fx_catalog_filter__scroll__visible">';
            scrollHtml += '<div class="b_fx_catalog_filter__scroll__visible__header"></div>';
            scrollHtml += '<div class="b_fx_catalog_filter__scroll__visible__body">';
                scrollHtml += '<div class="b_fx_catalog_filter__scroll__visible__mline">';
                scrollHtml += '</div>';
            scrollHtml += '</div>';
            scrollHtml += '<div class="b_fx_catalog_filter__scroll__visible__footer"></div>';
            
        scrollHtml += '</div>';
        
//        $('.b_fx_catalog_filter__scroll').append(scrollHtml);
        
        
        /*
        var scrollWrapperH = $('.scr_pages__scroll').outerHeight();
        var scrollInnerH = $('.scr_pages__scroll').children().outerHeight();
        
        
        var innerScrollBar = $('.scr_pages__scroll__line__pol').outerHeight();
        
        var polScroll = (innerScrollBar*scrollWrapperH)/scrollInnerH;
        
        $('.scr_pages__scroll__line__mv').css({
            height : polScroll+'px'
        });
        */
        /*$('.b_catalog__element__scroll').css({
            height : $(window).height()-60-40
        });
        $('body').addClass('b_catalog__element__html_body');*/
        
        
        
        /*
        $('.b_fx_catalog_filter__inner').scroll(function (){
            console.log($(this).scrollTop());
        });
        */
    }
    
    
    $('#index_slider_23').CKoSliderBlock({
        showNav : true
    });
    $('#index_slider_24').CKoSliderBlock({
        playInterval : 4000
    });
    $('#index_slider_25').CKoSliderBlock({
        playInterval : 5000
    });
   
   
               
    
    $('.b_order_detail_recall__star').live('click',function (){
        
        var parentMainBlock = $(this).parents('.b_order_detail_recall');
        var parentBlock = $(this).parent();
        var btnId = $(this).data('btn');
        
        if (!parentMainBlock.hasClass('b_order_detail_recall__empty')) {
            return false;
        }
        
        if (parentBlock.find('.star_pre_select').length > 0) {
            $(this).removeClass('star_pre_select');
            parentBlock.find('a').removeClass('b_order_detail_recall__star_f');
            $('#set_recall_btn_'+btnId).removeClass('b_order_detail_item_btn__pre_select');
            parentMainBlock.find('.b_order_detail_recall__val').text('0');
            parentBlock.find('.star_pre_select').removeClass('star_pre_select');
        } else {
            $(this).addClass('star_pre_select');
            var hoverIndex = $(this).index();
            for(var i = 0; i <= hoverIndex; i++) {
                parentBlock.find('a').eq(i).addClass('b_order_detail_recall__star_f');
            }
            $('#set_recall_btn_'+btnId).addClass('b_order_detail_item_btn__pre_select');
        }
        return false;
    });
   
   
   $('.b_order_detail_item_btn__review').live('click',function (){
       
       var blId = $(this).data('bl-id');
       $('#detail_basket_item_'+blId).addClass('b_order_detail_item_open_f');
       $(this).parents('.b_order_detail_item__footer').hide();
       
       $('#detail_basket_item_review_'+blId).addClass('b_order_detail_item__review_form_open_mode');
       
       return false;
   });
   
   
    /*$('.b_fx_catalog_filter__wrapper').hover(
        function () {
            $('body').addClass('b_catalog__element__html_body');
        },
        function() {
            $('body').removeClass('b_catalog__element__html_body');
        }
            
    );        */
    
    
    
    CVklIndexSliderFood.init();
    
    $('.empty_reviews_informer_close').hover(
        function (){
            $(this).addClass('empty_reviews_informer_pre_open');
            $(this).animate({'width' : '92'}, 200);
        },
        function (){
            $(this).stop();
            $(this).removeClass('empty_reviews_informer_pre_open');
            $(this).css({
                'width' : '50'
            });
        }
    );
    
    
    
    CVklElemen.controllHashUrl();
    
    
});


var CVklIndexSliderReview = {
    
    
    props : {
        
        wrapperBlockHeight : 0,
        sliderBlockHeight : 0,
        
        reviewBlockHeight : 0,
        reviewTextAnswer : 0,
        originReviewText : '',
        originAnswerText : ''
        
        
    },
    
    init : function () {
        
        //this.props.wrapperBlockHeight = $('#index_reviews').outerHeight(false);
        //this.props.sliderBlockHeight = $('.b_index_reviews__item').first().outerHeight(false);

        //this.props.reviewBlockHeight = $('.b_index_reviews__item').first().find('.b_index_reviews__text').outerHeight(false);
        

        //this.props.reviewTextAnswer = $('.b_index_reviews__item').first().find('.b_index_reviews__answer__text').outerHeight(false);
        
        
        //this.props.innerDinItem = $('.b_index_reviews__item').first().outerHeight(true);
        
        /*this.props.originReviewText = $('.b_index_food_review__text__toogle').first().find('a').text();*/
        this.props.originAnswerText = $('.b_index_reviews__answer__text-link').first().find('a').text();

        $('#index_reviews').find('.b_index_reviews__item').each(function (){
            var sLength = $(this).find('.b_index_reviews__text').text().length;
            if (sLength < 225) {
                $(this).find('.b_index_reviews__text-link a').remove();
            }
            
        });


    },
    
    openReview : function (obLink) {
        
        
        var opParent = obLink.parents('.b_index_reviews__item');
        this.setStartParams();
        if (obLink.hasClass('open_review_text')) {
            
            
            //var blockEndHeight = opParent.outerHeight(true);
            //var reSizeInt = blockEndHeight-this.props.innerDinItem;
            
            
            //this.recountItemHeight(opParent, reSizeInt);
            
            obLink.removeClass('open_review_text');
        } else {
            
            
            $('.b_index_reviews__text-link a').removeClass('open_review_text');
            
            opParent.find('.b_index_reviews__text').css({
                'height' : 'auto'
            });
            /*var blockEndHeight = opParent.outerHeight(true);
            var reSizeInt = blockEndHeight-this.props.innerDinItem;
            if (reSizeInt <= 0) {
                reSizeInt = 0;
            }*/

            //this.recountItemHeight(opParent, reSizeInt);
            

            
            
            obLink.text('Свернуть');
            obLink.addClass('open_review_text');
        }
        
        
        return false;
    },
    
    
    openAnswer : function (obLink) {
        
        var opParent = obLink.parents('.b_index_reviews__item');
        
        this.setStartParamsAnswer();
        if (obLink.hasClass('open_review')) {
            
            var blockEndHeight = opParent.outerHeight(true);
            
            var reSizeInt = blockEndHeight-this.props.innerDinItem;
            
            this.recountItemHeight(opParent, reSizeInt);
            obLink.removeClass('open_review');
            opParent.find('.b_index_reviews__answer__text').css({
                'height' : ''
            });
            
        } else {
        
        
            $('.b_index_reviews__answer__text-link a').removeClass('open_review');
            
            opParent.find('.b_index_reviews__answer__text').css({
                'height' : 'auto'
            });
            
            //var blockEndHeight = opParent.outerHeight(true);
            
            //var reSizeInt = blockEndHeight-this.props.innerDinItem;
            
            //this.recountItemHeight(opParent, reSizeInt);
            
            
            obLink.text('Свернуть');
            obLink.addClass('open_review');
            
        }
        return false;
    },
    
    
    setStartParams : function () {
        
        $('.b_index_reviews__text').css({
            height : this.props.reviewBlockHeight+'px'
        });
        /*$('#index_reviews').css({
            'height' : (this.props.wrapperBlockHeight)+'px'
        });
        $('#index_reviews__inner').css({
            'height' : (this.props.sliderBlockHeight)+'px'
        });*/
        
        $('.b_index_reviews__text-link a').text(this.props.originAnswerText);
        
    },
    
    setStartParamsAnswer : function () {
        
        $('.b_index_reviews__answer__text').css({
            height : this.props.reviewTextAnswer+'px'
        });
        /*$('#index_reviews').css({
            'height' : (this.props.wrapperBlockHeight)+'px'
        });
        $('#index_reviews__inner').css({
            'height' : (this.props.sliderBlockHeight)+'px'
        });*/
        
        $('.b_index_reviews__answer__text-link a').text(this.props.originAnswerText);
        
    },
    
    
    recountItemHeight: function (obItem, iHeight) {
        
        if (iHeight < 0) {
            return false;
        }
 
        
        /*$('#index_reviews').css({
            'height' : (this.props.wrapperBlockHeight+iHeight)+'px'
        });
        $('#index_reviews__inner').css({
            'height' : (this.props.sliderBlockHeight+iHeight)+'px'
        });
        obItem.css({
            'height' : (this.props.sliderBlockHeight+iHeight)+'px'
        });
        */
    }
    
    
};


var CVklIndexSliderFood = {
    
    
    props : {
        wrapperBlockHeight : 0,
        wrapperBlockFullHeight : 0,
        reviewOutInnerHeight : 0,
        reviewTextInnerHeight : 0,
        originReviewText : '',
        originAnswerText : '',
        
        /***/
        blockStartHeight : 0,
        tdStartHeight : 0
        
    },
    
    init : function () {
        this.props.wrapperBlockHeight = $('.b_index_food_review').height();
        this.props.wrapperBlockFullHeight = $('.b_index_food_review').outerHeight(true);
        this.props.reviewOutInnerHeight = $('.b_index_food_answer__text').first().outerHeight(true);
        
        this.props.reviewTextInnerHeight = $('.b_index_food_review__text').first().outerHeight(true);
        
        this.props.originReviewText = $('.b_index_food_review__text__toogle').first().find('a').text();
        this.props.originAnswerText = $('.b_index_food_answer__text__toogle').first().find('a').text();
                
                
        this.props.blockStartHeight = $('.b_index_food_review').outerHeight(true);
//        console.log(this.props.blockStartHeight);
        
        this.props.tdStartHeight = $('#review_slide_rbl').find('td').first().outerHeight(true);
//        console.log(this.props.tdStartHeight);
        
        $('#review_slide_rbl').find('td').each(function (){
            
            var sLength = $(this).find('.b_index_food_review__text').text().length;
            if (sLength < 205) {
                $(this).find('.b_index_food_review__text__toogle').remove();
            }
        });
        
    },
    
    openReviewEx : function (obLink) {
        
        var opParentTd = obLink.parents('td');
        
        
        if (obLink.hasClass('open_review')) {
            
            $('.b_index_food_review__text').css({
                'height' : this.props.reviewTextInnerHeight+'px'
            });
            $('.b_index_food_review__text__toogle a').text(this.props.originReviewText);
            $('.b_index_food_review__text__toogle a').removeClass('open_review');
            
        } else {
            $('.b_index_food_review__text').css({
                'height' : 'auto'
            });
            $('.b_index_food_review__text__toogle a').text('Свернуть');
            $('.b_index_food_review__text__toogle a').addClass('open_review');
        }
        return false;
    },
    openAnswerEx : function (obLink) {
        
        var opParentTd = obLink.parents('td');
        
        if (obLink.hasClass('open_answer')) {
            
            $('.b_index_food_answer__text').css({
                'height' : this.props.reviewOutInnerHeight+'px'
            });
            $('.b_index_food_answer__text__toogle a').text(this.props.originAnswerText);
            $('.b_index_food_answer__text__toogle a').removeClass('open_answer');
        } else {
            
            $('.b_index_food_answer__text').css({
                'height' : 'auto'
            });
            $('.b_index_food_answer__text__toogle a').text('Свернуть');
            $('.b_index_food_answer__text__toogle a').addClass('open_answer');
        }
        
        
        return false;
    },
    
    openReview  : function (obLink) {

        this.setStartParamsReview();
        var opParentTd = obLink.parents('td');
        
        if (obLink.hasClass('open_review')) {
            
            var blockEndHeight = opParentTd.find('.b_index_food_review__out__inner').outerHeight(true);
            
            
            var reHeight = (this.props.wrapperBlockHeight+(blockEndHeight-this.props.reviewOutInnerHeight));
            if (reHeight < this.props.wrapperBlockFullHeight) {
                reHeight = this.props.wrapperBlockFullHeight;
            }

            
            $('.b_index_food_review').css({
                'height' : (reHeight)+'px'
            });
            
            obLink.removeClass('open_review');
        } else {
            
            opParentTd.find('.b_index_food_review__text').css({
                'height' : 'auto'
            });
            var blockEndHeight = opParentTd.find('.b_index_food_review__out__inner').outerHeight(true);
            
            var newTextHeight = opParentTd.find('.b_index_food_review__text').outerHeight(true);
            if (newTextHeight < this.props.reviewTextInnerHeight) {
                this.setStartParamsReview();
                return false;
            }

            $('.b_index_food_review').css({
                'height' : (this.props.wrapperBlockHeight+(blockEndHeight-this.props.reviewTextInnerHeight))+'px'
            });
            obLink.text('Свернуть');
            obLink.addClass('open_review');
        }
        
        return false;
    },
    
    openAnswer : function (obLink) {
        
        this.setStartParams();
        var opParentTd = obLink.parents('td');
        
        if (obLink.hasClass('open_answer')) {
            
            var blockEndHeight = opParentTd.find('.b_index_food_review__out__inner').outerHeight(true);
            $('.b_index_food_review').css({
                'height' : (this.props.wrapperBlockHeight+(blockEndHeight-this.props.reviewOutInnerHeight))+'px'
            });
            
            obLink.removeClass('open_answer');
            
        } else {
            $('.b_index_food_answer__text__toogle a').removeClass('open_answer');
            opParentTd.find('.b_index_food_answer__text').css({
                'height' : 'auto'
            });
            var blockEndHeight = opParentTd.find('.b_index_food_review__out__inner').outerHeight(true);
            

            
            $('.b_index_food_review').css({
                'height' : (this.props.wrapperBlockHeight+(blockEndHeight-this.props.reviewOutInnerHeight))+'px'
            });
            obLink.text('Свернуть');
            obLink.addClass('open_answer');
        }
        
        return false;
    },
    setStartParams : function () {
        
        
        
        
        $('.b_index_food_review').css({
            'height' : this.props.wrapperBlockFullHeight+'px'
        });
        $('.b_index_food_answer__text').css({
            'height' : this.props.reviewOutInnerHeight+'px'
        });
        $('.b_index_food_answer__text__toogle a').text(this.props.originAnswerText);
        
    },
    setStartParamsReview : function () {
        
        
        
        
        $('.b_index_food_review').css({
            'height' : this.props.wrapperBlockFullHeight+'px'
        });
        $('.b_index_food_review__text').css({
            'height' : this.props.reviewTextInnerHeight+'px'
        });
        $('.b_index_food_review__text__toogle a').text(this.props.originReviewText);
    }
    
    
    
};



var CVklOrderDetailLikesC = {
    
    orderDetailStarHover : function (obItem) {
        var parentMainBlock = obItem.parents('.b_order_detail_recall');
        var parentBlock = obItem.parent();

        if (!parentMainBlock.hasClass('b_order_detail_recall__empty')) {
            return false;
        }

        if (parentBlock.find('.star_pre_select').length > 0) {
            return false;
        }


        parentBlock.find('a').removeClass('b_order_detail_recall__star_f');

        var hoverIndex = obItem.index();
        for(var i = 0; i <= hoverIndex; i++) {
            parentBlock.find('a').eq(i).addClass('b_order_detail_recall__star_f');
        }
        parentMainBlock.find('.b_order_detail_recall__val').text(i);
    },
    
    orderStarsOut : function (obItem) {
        
        var parentMainBlock = obItem.parents('.b_order_detail_recall');
        var parentBlock = obItem.parent();

        if (!parentMainBlock.hasClass('b_order_detail_recall__empty')) {
            return false;
        }

        if (parentBlock.find('.star_pre_select').length > 0) {
            return false;
        }

        parentBlock.find('a').removeClass('b_order_detail_recall__star_f');
        parentMainBlock.find('.b_order_detail_recall__val').text('0');
        
    },
    
    
    orderStarsBlockHover : function (obItem) {
        if (obItem.hasClass('b_order_detail_recall__empty')) {
            obItem.addClass('b_order_detail_recall__hover');
        }
    },
    orderStarsBlockOut : function (obItem) {
        if (obItem.hasClass('b_order_detail_recall__empty')) {
            obItem.removeClass('b_order_detail_recall__hover');
        }
    }
};


function CloseOrderDetailItem(eID) {
    
    $('#detail_basket_item_review_'+eID).removeClass('b_order_detail_item__review_form_open_mode');
    
    var obBlock = $('#detail_basket_item_'+eID);
    obBlock.find('.b_order_detail_item__footer').show();
    obBlock.removeClass('b_order_detail_item_open_f');
    return false;
}



function CatalogLeftMenuController() {
//        var setHeight = $(document).height()-$('.b_top_menu').height();
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPos >= $('.b_top_menu').height()) {
        var setHeight = $(window).height();
        $('.b_fx_catalog_filter__wrapper').addClass('b_fx_catalog_filter_fxmode');
        $('.b_fx_catalog_filter__logo').hide();
        $('.b_fx_catalog_filter__separator').hide();
        $('.b_fx_catalog_filter__wrapper').animate({
            top : 41
        }, 100);
    } else {
        var setHeight = $(window).height()-$('.b_top_menu').height()+9;
        $('.b_fx_catalog_filter__wrapper').stop(true);
        $('.b_fx_catalog_filter__logo').show();
        $('.b_fx_catalog_filter__separator').show();
        $('.b_fx_catalog_filter__wrapper').animate({
            top : 41
        }, 100);
        $('.b_fx_catalog_filter__wrapper').removeClass('b_fx_catalog_filter_fxmode');
    }
    $('.b_fx_catalog_filter__wrapper').css({
        'height' : setHeight+'px'
    });
    $('.b_fx_catalog_filter__inner').css({
        'height' : $(window).height()+'px'
    });
}

var CVklElemen = {
    
    openElement : function (eID, bMobile) {
        
        if (!bMobile) {
            bMobile = false;
        }
        
        var __this = this;
        
        CVklHashController.dynURL('#element_'+eID);
        
        $.ajax({
            data: {
                ELEMENT_ID : eID,
                AJAX : 'Y'
            },
            type: 'GET',
            url: "/ajax/element.php",
            success: function (data, textStatus, jqXHR) {
                __this.addBlock(data,"",0,bMobile);
            }
        });
        return false;
    },
    addBlock : function (data, sAddClass, maxHeight, mobile) {
        

        this.close();
        
        if (!sAddClass) {
            sAddClass = '';
        }
        if (!maxHeight) {
            maxHeight = 0;
        }
        
        if (!mobile) {
            mobile = false;
        }
        
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        var baseWindowHeight = $(window).height();
        var windowWidth = $(window).width();
        
        $('body').append('<div onclick="return CVklElemen.close(true)" id="ckofbox_block__shadow"></div>');
        $('body').append('<div class="'+sAddClass+'" id="b_catalog__element__wrapper">'+data+'</div>');
        
        if (mobile && windowWidth <= 375) {
            
            
            $('#b_catalog__element__wrapper').css({
                top : (scrollPos)+'px',
                height : baseWindowHeight
            });
            $('.b_catalog__element__scroll').css({
                height : baseWindowHeight
            });
            
            
            $('#b-wrapper').hide();
            $('#b-footer').hide();
            
        } else {
            
            if (maxHeight > 0 && maxHeight < $(window).height()) {
                baseWindowHeight = parseInt(maxHeight)+60;
            }

            $('#b_catalog__element__wrapper').css({
                top : (scrollPos+30)+'px',
                height : baseWindowHeight-60
            });
            $('.b_catalog__element__scroll').css({
                height : baseWindowHeight-60-40
            });
            
            
        }
        $('body').addClass('b_catalog__element__html_body');
        
    },
    close : function (bSetUrl) {
        $('#b_catalog__element__wrapper').remove();
        $('#ckofbox_block__shadow').remove();
        $('body').removeClass('b_catalog__element__html_body');
        $('#b-wrapper').show();
        $('#b-footer').show();
        
        if (bSetUrl) {
            CVklHashController.dynURL('#');
        }
        
        
        return false;
    },
    
    
    controllHashUrl : function () {
        
        var pageUrl = CVklHashController.getHashURL();
        if (pageUrl) {
            var elementID = pageUrl.split('element_');
            if (!elementID) {
                return false;
            }
            if (!elementID[1]) {
                return false;
            }
            if (elementID[1] > 0) {
                
                var windowWidth = $(window).width();
                var bMobile = false;
                if (windowWidth <= 375) {
                    bMobile = true;
                }
                CVklElemen.openElement(parseInt(elementID[1]), bMobile);
            }
        }
        
        
        
    }
    
    
};

var CVklHashController = {
    
    getHashURL : function(){
        var pageURLSplit = window.location.href.split('#');
        if(pageURLSplit[1] && pageURLSplit[1] != '') return pageURLSplit[1];
        return false;
    },
     dynURL : function (url){
        var histAPI=!!(window.history && history.pushState);
        if(histAPI){
            history.pushState(null,null, url);
        }
        else return false;
    }
    
}

var CVklLiked = {
    
    
    setItem : function (eID, obItem) {
        
        $.ajax({
            url : '/ajax/liked.php',
            data : {
                "ID" : parseInt(eID)
            },
            success: function (data) {
                if (data) {
                    
                    if (data == "ADD") {
                        obItem.text('В избранном');
                    } else if (data == "UNSET") {
                        obItem.text('Добавить в избранное');
                    }
                }
            }
        });
        
        return false;
    }
    
    
};

var CVklCatalogFilter = {
    
    
    setFilter : function (obFilterForm) {
        
        

        
        $.ajax({
            url : obFilterForm.attr('action'),
            data : obFilterForm.serialize()+'&AJAX_FILTER_FF=Y',
            success: function (data) {
                $('#form_catalog_filter').html('');
                $('#form_catalog_filter').append(data);
                //CatalogLeftMenuController();
                DraggableFilter.init();
            }
        });
        $.ajax({
            url : obFilterForm.attr('action'),
            data : obFilterForm.serialize()+'&'+'&AJAX_FILTER=Y',
            success: function (data) {
                $('#b_catalog_filter_ajax').html('');
                $('#b_catalog_filter_ajax').append(data);
            }
        });
        
        
        return false;
    },
    submit : function () {
        $('#form_catalog_filter').submit();
    },
    changeAllsubmit : function (obThis,obGroup) {
        
        if (obThis.is(':checked')) {
            obGroup.find('input').attr('checked','checked');
            $('#form_catalog_filter').submit();
        } else {
            obGroup.find('input').removeAttr('checked');
            $('#form_catalog_filter').submit();
        }
    }
};


var CVklBasket = {
    
    add : function (eID, obLink, obQuantity) {
        
        if (obLink) {
            
            obLink.css({
                'position' : 'relative'
            });
            obLink.append('<div class="b_catalog__section__item__add2basket__animate"></div>');
            
            var posEndTop = $('.b_top_cart').offset().top;
            var posEndLeft = $('.b_top_cart').offset().left;
            
            var posStartTop = obLink.offset().top;
            var posStartLeft = obLink.offset().left;
            
            $('.b_catalog__section__item__add2basket__animate').animate({
                'top' : posEndTop-posStartTop,
                'left' : posEndLeft-posStartLeft
            },600, function (){
                $(this).remove();
            });
        }
        
        var quantityValue = 1;
        if (obQuantity) {
            quantityValue = parseInt(obQuantity.val());
        } else {
            quantityValue = parseInt($('#element_quantity_'+eID).val());
        }
        
        $.ajax({
            url : '/ajax/add2basket.php',
            type: 'POST',
            data : {
                'ELEMENT_ID' : parseInt(eID),
                'QUANTITY' : quantityValue
            },
            success: function (data, textStatus, jqXHR) {
                CVklBasket.reloadSmallBasket();
            }
        });

        
        return false;
    },
    addEx : function (eID, obLink) {
        
        if (obLink) {
            
            obLink.css({
                'position' : 'relative'
            });
            obLink.append('<div style="z-index: 19000" class="b_catalog__section__item__add2basket__animate"></div>');
            
            var posEndTop = $('.b_top_cart').offset().top;
            var posEndLeft = $('.b_top_cart').offset().left;
            
            var posStartTop = obLink.offset().top;
            var posStartLeft = obLink.offset().left;
            
            $('.b_catalog__section__item__add2basket__animate').animate({
                'top' : posEndTop-posStartTop,
                'left' : posEndLeft-posStartLeft
            },600, function (){
                $(this).remove();
            });
        }
        
        $.ajax({
            url : '/ajax/add2basket.php',
            type: 'POST',
            data : {
                'ELEMENT_ID' : parseInt(eID),
                'QUANTITY' : parseInt($('#element_det_quantity_'+eID).val())
            },
            success: function (data, textStatus, jqXHR) {
                CVklBasket.reloadSmallBasket();
            }
        });

        
        return false;
    },
    
    deleteByCartId : function(cID) {
        
        $.ajax({
            url : '/ajax/add2basket.php',
            type: 'POST',
            data : {
                'CART_ID' : parseInt(cID),
                'DELET_FROM_BASKET' : "Y"
            },
            success: function (data, textStatus, jqXHR) {
                CVklBasket.reloadSmallBasket();
            }
        });
        return false;
    },
    reloadSmallBasket : function () {
        
        $.ajax({
            url : '/ajax/components.php',
            type: 'GET',
            data : {
                'RELOAD_SMALL_BASKET' : 'Y'
            },
            success: function (data, textStatus, jqXHR) {
                $('.b_top_cart').html('');
                $('.b_top_cart').append(data);
            }
        });
        
    },
    quantituControlUp : function (eID, obItem) {
        
        if (obItem) {
            var obInput = obItem;
        } else {
            var obInput = $('#element_quantity_'+eID);
        }
        
        
        if (obInput.length > 0) {
            obInput.val(parseInt(obInput.val())+1);  
        }
        
        return false;
    },
    quantituControlDown : function (eID, obItem) {
        
        if (obItem) {
            var obInput = obItem;
        } else {
            var obInput = $('#element_quantity_'+eID);
        }
        if (obInput.length > 0 && parseInt(obInput.val()) >= 2 ) {
            obInput.val(parseInt(obInput.val())-1);  
        }

        return false;
    },
    
    quantituControlUpEx : function (eID) {
        
        var obInput = $('#element_det_quantity_'+eID);
        if (obInput.length > 0) {
            obInput.val(parseInt(obInput.val())+1);  
        }
        
        return false;
    },
    quantituControlDownEx : function (eID) {
        
        var obInput = $('#element_det_quantity_'+eID);
        if (obInput.length > 0 && parseInt(obInput.val()) >= 2 ) {
            obInput.val(parseInt(obInput.val())-1);  
        }

        return false;
    }
    
};


function CCatalogElementReviews() {
    
    var options = {
        itemsCount : 0,
        itemsWidth : 0,
        itemsHeight : 0,
        selected : 0,
        speed : 400
    };
    
    options.itemsCount = $('#catalog_element_reviews').children().length;
    options.itemsWidth = $('#catalog_element_reviews').children().outerWidth();
    options.itemsHeight = $('#catalog_element_reviews').children().outerHeight();
    
    if (options.itemsCount <= 0) {
        $('.b_catalog__element__reviews__slider__prev').hide();
        $('.b_catalog__element__reviews__slider__next').hide();
        return false;
    }
    
    $('#catalog_element_reviews').itenWidthOuter('<div id="catalog_element_reviews_slider"></div>');
    
    $('#catalog_element_reviews').css({
        'width' : options.itemsWidth,
        'height' : options.itemsHeight,
        'overflow' : 'hidden',
        'position' : 'relative'
    });
    
    var obInner = $('#catalog_element_reviews_slider');
    obInner.css({
        'position' : 'absolute',
        'top' : '0',
        'left' : '0',
        'width' : options.itemsWidth*options.itemsCount,
        'height' : options.itemsHeight
    });
    
    NavController();
    
    $('.b_catalog__element__reviews__slider__next').click(function (){
        
        if (options.selected == (options.itemsCount-1)) {
            return false;
        }
        
        obInner.animate({
            'left' : '-='+options.itemsWidth
        },options.speed);
        
        options.selected++;
        
        NavController();
        return false;
    });
    $('.b_catalog__element__reviews__slider__prev').click(function (){
        
        if (options.selected <= 0) {
            return false;
        }
        
        obInner.animate({
            'left' : '+='+options.itemsWidth
        },options.speed);
        
        options.selected--;
        
        NavController();
        return false;
    });
    
    function NavController() {
        
        if (options.itemsCount == 1) {
            $('.b_catalog__element__reviews__slider__prev').hide();
            $('.b_catalog__element__reviews__slider__next').hide();
        } else {
            if (options.selected == 0) {
                $('.b_catalog__element__reviews__slider__prev').hide();
                $('.b_catalog__element__reviews__slider__next').show();
            } else if (options.selected == (options.itemsCount-1)) {
                $('.b_catalog__element__reviews__slider__prev').show();
                $('.b_catalog__element__reviews__slider__next').hide();
            } else {
                $('.b_catalog__element__reviews__slider__prev').show();
                $('.b_catalog__element__reviews__slider__next').show();
            }
        }
    }
    
}

var CVklForms = {
    
    sendForm : function (obForm) {

        $.ajax({
            url : obForm.attr('action'),
            data : obForm.serialize(),
            success: function (data) {
                obForm.html('');
                obForm.append(data);
            }
        });
        return false;
    },
    reloadCaptcha : function (obForm) {
        
        $.ajax({
            url : window.location.href,
            data : obForm.serialize()+'&RELOAD_CAPTCHA=Y',
            success: function (data) {
                obForm.html('');
                obForm.append(data);
            }
        });
        
        return false;
    }
    
    
};

var DraggableFilter = {
    
    options : {
        minVal : 0,
        maxVal : 500
    },
    
    init : function () {
        
        var __this = this;
        
        var obDragCursor = $('.b_filter_draggable__cursor');
        var obDragOrang = $('.b_filter_draggable__full');
        var obDragGreed = $('.b_filter_draggable__empty');
        
        this.options.minVal = 30;
        this.options.maxVal = 500;
        
        
        this.options.minVal = parseFloat($('#arr_property__minval').val());
        this.options.maxVal = parseFloat($('#arr_property__maxval').val());
        
        
        var value = $('#arr_property__kalorii_all').val();        
        var greedWidth = obDragGreed.width();
        var koef = (this.options.maxVal-this.options.minVal)/greedWidth;
        var rootGradPos = 0;
        
        
        
        if (value > 0) {
            rootGradPos = Math.ceil((value-parseInt(this.options.minVal))/koef);
            if (rootGradPos == greedWidth) {
                rootGradPos -= 1;
            } else {
                rootGradPos -= 2;
            }
        }
        
        obDragCursor.draggable({
            axis: "x",
            containment: "parent",
            create: function() {
                obDragOrang.css({
                    width : rootGradPos+'px'
                });
                obDragCursor.css({
                    left : rootGradPos+'px'
                });
            },
            drag: function(event, ui) {
                obDragOrang.css({
                    width : (ui.position.left)+'px'
                });
                __this.setVal(ui.position.left,koef);
            },
            stop : function () {
                CVklCatalogFilter.submit();
            }
        });
    },
    setVal : function (valGragPos, koef) {
        if (valGragPos > 0) {
            valGragPos += 1;
        }
        var resVal = Math.ceil(valGragPos*koef)+parseInt(this.options.minVal);
        $('#arr_property__kalorii_all').val(resVal);
        $('#arr_property__kalorii_all_text').text(resVal);
    }
};

var CVklOrder = {
    

    addPreloader : function () {
        $('#sale_order_form_wr').css({
            'position' : 'relative'
        });
        $('#sale_order_form_wr').append('<div id="sale_order_form_wr_preloader"></div>');
    },
    removePreloader : function () {
        $('#sale_order_form_wr_preloader').remove();
        $('#sale_order_form_wr').css({
            'position' : 'inherit'
        });
    },

    sendFormToOrder : function (obForm) {
        this.reloadForm(obForm.serialize()+'&MAKE_ORDER=Y');
        return false;
    },
    sendForm : function (obForm) {
        this.reloadForm(obForm.serialize());        
        return false;
    },
    sendOrderForm : function () {
        this.reloadForm($('#sale_order_form_wr').serialize()) ;
    },

    
    reloadForm : function (postData) {

        if (!postData) {
            postData = {
                'AJAX_SEND' : 'Y'
            };
        } else if (typeof postData === 'object') {
            postData['AJAX_SEND'] = 'Y';
        } else {
            postData += '&AJAX_SEND=Y';
        }
        CVklOrder.addPreloader();
        $.ajax({
            url : window.location.href,
            type: 'POST',
            data : postData,
            success: function (data) {
                $('#sale_order_form_wr').html('');
                $('#sale_order_form_wr').append(data);
                CVklOrder.removePreloader();
                CVklBasket.reloadSmallBasket();
            }
        });
    },
    
    setUserAccount : function (obForm) {
        this.reloadForm(obForm.serialize());
        return false;
    },
    
    setCompanyCode : function (obForm) {
        this.reloadForm(obForm.serialize());
        return false;
    },
    
    quantituControlUp : function (eID) {
        this.reloadForm({
            'ACTION' : 'Q_UP',
            'BS_ITEM' : parseInt(eID)
        });
        return false;
    },
    quantituControlDown : function (eID) {
        this.reloadForm({
            'ACTION' : 'Q_DOWN',
            'BS_ITEM' : parseInt(eID)
        });
        return false;
    },
    quantituControlUpdate : function (obInput,eID) {
        this.reloadForm({
            'ACTION' : 'Q_UPD',
            'BS_ITEM' : parseInt(eID),
            'VALUE' : obInput.val()
        });
        return false;
    },
    quantityControlDel : function (eID) {
        this.reloadForm({
            'ACTION' : 'Q_DEL',
            'BS_ITEM' : parseInt(eID)
        });
        return false;
    },
    
    openGiftsWindow : function () {
        $('.window_gifts__wrapper').remove();
        $.ajax({
            url : window.location.href,
            type: 'POST',
            data : {
                'OPEN_GIFTS_WINDOW' : 'Y'
            },
            success: function (data) {
                $('body').append(data);
                $('body').append('<div id="ckofbox_block__shadow"></div>');
            }
        });
        return false;
    },
    closeGiftsWindow : function () {
        $('.window_gifts__wrapper').remove();
        $('#ckofbox_block__shadow').remove();
        return false;
    },
    addGift : function (eID, actionID) {
        this.closeGiftsWindow();
        $.ajax({
            url : window.location.href,
            type: 'POST',
            data : {
                'ADD_GIFT' : eID,
                'ACTION_ID' : parseInt(actionID),
                'OPEN_GIFTS_WINDOW' : 'Y'
            },
            success: function (data) {
                /*$('body').append(data);
                $('body').append('<div id="ckofbox_block__shadow"></div>');*/
                CVklOrder.reloadForm();
            }
        });
        return false;
    },
    deleteGift : function (eID) {
        
        $.ajax({
            url : window.location.href,
            type: 'POST',
            data : {
                'DELETE_GIFT' : eID
            },
            success: function (data) {
                CVklOrder.reloadForm();
            }
        });
        return false;
    },
    getDeliveryZone : function (obInput, nosubmit) {
        
        if (obInput.val().length < 3) {
            return;
        }
        
  
        
        var NO_SUBMIT = "N";
        if (nosubmit && nosubmit === true) {
            NO_SUBMIT = "Y";
        }
        
        $.ajax({
            url : '/ajax/sale_order/get.php?ADRES='+obInput.val(),
            type: 'POST',
            data : {
                "NO_SUBMIT" : NO_SUBMIT
            },
            success: function (data, textStatus, jqXHR) {
                $('.b_sale_order__adres__search__val').html('');
                $('.b_sale_order__adres__search__val').append(data);
                if (data && data.length > 0) {
                    obInput.siblings('.b_sale_order__adres__search__val').show();
                } else {
                    obInput.siblings('.b_sale_order__adres__search__val').hide();
                }
                $('#order_search_house').val('');
            }
        });
    },
    setStreet : function (obLink) {
        $('#order_search_adres').val(obLink.data('name'));
        
        $('#sale_delivery_long').val(obLink.data('long'));
        $('#sale_delivery_lat').val(obLink.data('lat'));
        
        $('.b_sale_order__adres__search__val').hide();

        this.reloadForm($('#sale_order_form_wr').serialize());

        return false;
    },
    setStreetEx : function (obLink) {
        
        var obParent = obLink.parent();
        
        obParent.siblings('.frm_settings_adres_name').val(obLink.data('name'));
        obParent.siblings('.frm_settings_adres_lat').val(obLink.data('lat'));
        obParent.siblings('.frm_settings_adres_long').val(obLink.data('long'));
        obParent.hide();
        return false;
    },
    addComments : function () {
        if ($('.b_sale_order__add_comments').hasClass('b_sale_order__more__row__open')) {
            $('.b_sale_order__add_comments').removeClass('b_sale_order__more__row__open');
            $('.b_sale_order__add_comments__body').find('textarea').val('');
        } else {
            $('.b_sale_order__add_comments').addClass('b_sale_order__more__row__open');
        }
        return false;
    },
    checkHours : function (obInput) {
        var inputValue = parseInt(obInput.val());
        if (inputValue < 0 || inputValue > 24) {
            obInput.val('');
        }
    },
    checkMinuts : function (obInput) {
        var inputValue = parseInt(obInput.val());
        if (inputValue < 0 || inputValue > 59) {
            obInput.val('');
        }
    },
    
    getHouseCoord : function  (obInput) {
        
        
        $.ajax({
            url : '/ajax/sale_order/get_house.php',
            type: 'POST',
            data : {
                'STREET' : $('#order_search_adres').val(),
                'HOUSE' : obInput.val()
            },
            success: function (data, textStatus, jqXHR) {
                
                
                $('.b_sale_order__adres__search_house__val').html('');
                $('.b_sale_order__adres__search_house__val').append(data);
                $('.b_sale_order__adres__search_house__val').show();
                
                /*
                $('.b_sale_order__adres__search__val').html('');
                $('.b_sale_order__adres__search__val').append(data);
                if (data && data.length > 0) {
                    obInput.siblings('.b_sale_order__adres__search__val').show();
                } else {
                    obInput.siblings('.b_sale_order__adres__search__val').hide();
                }*/
            }
        });
        
        return false;
    },
    setHouse : function (obLink) {
        $('#order_search_house').val(obLink.data('name'));
        
        $('#sale_delivery_long').val(obLink.data('long'));
        $('#sale_delivery_lat').val(obLink.data('lat'));
        
        $('.b_sale_order__adres__search_house__val').hide();

        this.reloadForm($('#sale_order_form_wr').serialize());

        return false;
    },
    getHouseCoordEx : function  (obInput, profileID) {
        $.ajax({
            url : '/ajax/sale_order/get_house.php',
            type: 'POST',
            data : {
                'STREET' : $('#order_search_adres__'+profileID).val(),
                'PROFILE_ID' : profileID,
                'HOUSE' : obInput.val(),
                'NO_SUBMIT' : 'Y'
            },
            success: function (data, textStatus, jqXHR) {
                
                obInput.siblings('.b_sale_order__adres__search_house__val').html('');
                obInput.siblings('.b_sale_order__adres__search_house__val').append(data);
                obInput.siblings('.b_sale_order__adres__search_house__val').show();
            }
        });
        
        return false;
    },
    setHouseEx : function (obLink ,profileID) {
        $('#order_search_adres_house__'+profileID).val(obLink.data('name'));
        
        $('#sale_delivery_long__'+profileID).val(obLink.data('long'));
        $('#sale_delivery_lat__'+profileID).val(obLink.data('lat'));
        
        $('.b_sale_order__adres__search_house__val').hide();

        return false;
    }
    
};

var CVklAuth = {
    
    
    openRegForm : function (page) {
        var F_TYPE = '';
        if (page == 'PS') {
            F_TYPE = '&F_TYPE=PS';
        }

        $.ajax({
            url : '/ajax/components.php',
            type: 'POST',
            data : $('#vks_registration_frm').serialize()+'&REGISTRATION=Y'+F_TYPE,
            success: function (data) {
                CVklElemen.addBlock(data,'b_sale_order__wrapper fd');
            }
        });
        return false;
    },
    openAuthForm : function () {
        $.ajax({
            url : '/ajax/components.php',
            type: 'POST',
            data : $('#vks_auth_frm').serialize()+'&AUTH=Y',
            success: function (data) {
                CVklElemen.addBlock(data,'b_sale_order__wrapper b_sale_order__wrapper__auth', 650);
            }
        });
        return false;
    },
    openRecoveryForm : function () {
        this.addPreloader();
        $.ajax({
            url : '/ajax/components.php',
            type: 'POST',
            data : $('#vks_auth_frm').serialize()+'&RECOVERY=Y',
            success: function (data) {
                CVklAuth.removePreloader();
                CVklElemen.addBlock(data,'b_sale_order__wrapper b_sale_order__wrapper__auth', 650);
            }
        });
        return false;
    },
    addPreloader : function () {
        $('#b_catalog__element__wrapper').append('<div id="sale_order_form_wr_preloader"></div>');
    },
    removePreloader : function () {
        $('#b_catalog__element__wrapper').remove();
    }
    
};

var CVklWScroll = {
    
    
    openPage : function (pageName) {
        
        if (!pageName) {
            return;
        }
        
        $.ajax({
            url : '/ajax/pages/'+pageName+'.php',
            type: 'GET',
            success: function (data, textStatus, jqXHR) {
                CVklWScroll.setData(data);
            }
        });
        
        
        return false;
    },
    
    setData : function (data) {
        
        this.close();
        
        
        
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        $('body').append('<div onclick="return CVklWScroll.close()" id="ckofbox_block__shadow"></div>');
        $('body').append('<div id="lbscroll_wrapper">'+data+'</div>');
        $('#lbscroll_wrapper').css({
            top : (scrollPos+30)+'px'
            
        });
        
        
        
        
        
    },
    
    close : function () {
        $('#ckofbox_block__shadow').remove();
        $('#lbscroll_wrapper').remove();
        return false;
    },
    
    
    eScroll : function (obScroll) {
        
        /*
        var scrollWrapperH = $('.scr_pages__scroll').outerHeight();
        var scrollInnerH = $('.scr_pages__scroll').children().outerHeight();
        
        
        var scrolabalPath = scrollInnerH-scrollWrapperH;
        
        
        
        console.log(scrolabalPath);
        console.log(obScroll.scrollTop());*/
        
    }
    
    
    
    
};



var CVklDetailOfferReview = {
    
    
    submitForm : function (obForm) {
        
        $.ajax({
            url : '/ajax/add_offer_review.php',
            dataType: 'json',
            data : obForm.serialize(),
            success: function (data) {
                
                if (data.TYPE == "MESSAGE") {
                    
                    $.ajax({
                        url : window.location.href,
                        type: 'POST',
                        data : {
                            'RELOAD_PAGE_AJAX' : "Y"
                        },
                        success: function (data, textStatus, jqXHR) {
                            $('.b_order_detail').html('');
                            $('.b_order_detail').append(data);
                        }
                    });

                } else if (data.TYPE == "ERROR") {
                    obForm.find('.frm_review_res_error').html('');
                    if (data.TEXT == "LENGTH_NOT_ENOUGH") {
                        obForm.find('.frm_review_res_error').html('Слишком короткий отзыв');
                    } else {
                        obForm.find('.frm_review_res_error').html('Произошла ошибка');
                    }
                }
            }
        });
        return false;
    }
    
};

var CVklDetailOfferStar = {
    
    
    setStar : function (eId, orderID,obVal, obBtn) {
        
        var userSetVal = parseInt(obVal.text());
        if (userSetVal > 0) {
            $.ajax({
                url : '/ajax/set_offer_star.php',
                /*dataType: 'json',*/
                data : {
                    'ELEMENT_ID' : eId,
                    'ORDER_ID' : orderID,
                    'VALUE' : userSetVal
                },
                success: function (data) {
                    $.ajax({
                        url : window.location.href,
                        type: 'POST',
                        data : {
                            'RELOAD_PAGE_AJAX' : "Y"
                        },
                        success: function (data, textStatus, jqXHR) {
                            $('.b_order_detail').html('');
                            $('.b_order_detail').append(data);
                        }
                    });
                    obBtn.remove();
                }
            });
        }
        return false;
    }
    
    
};


var CVklDetailOfferSiteReview = {
    
    
    submitForm : function (obForm) {
        $.ajax({
            url : '/ajax/add_site_review.php',
            dataType: 'json',
            data : obForm.serialize(),
            success: function (data) {
                if (data.TYPE == "MESSAGE") {
                    $.ajax({
                        url : window.location.href,
                        type: 'POST',
                        data : {
                            'RELOAD_PAGE_AJAX' : "Y"
                        },
                        success: function (data, textStatus, jqXHR) {
                            $('.b_order_detail').html('');
                            $('.b_order_detail').append(data);
                        }
                    });
                } else if (data.TYPE == "ERROR") {
                    obForm.find('.frm_review_res_error').html('');
                    if (data.TEXT == "LENGTH_NOT_ENOUGH") {
                        obForm.find('.frm_review_res_error').html('Слишком короткий отзыв');
                    } else {
                        obForm.find('.frm_review_res_error').html('Произошла ошибка');
                    }
                    
                }
            }
        });
        return false;
    }
    
};



var CVklPersonalSalesSet = {
    
    
    setGift : function (id, obItem) {
        
        
        if (obItem.hasClass('b_gifts__item__icon_active')) {
            $.ajax({
                url :  '/personal/get_sales.php',
                data: {
                    'GIFT' : parseInt(id)
                },
                success: function (data, textStatus, jqXHR) {
                    CVklPersonalSalesSet.animateAdd(obItem);
                }
            });
            
        }
        
        return false;
    },
    
    animateAdd : function (obItem) {
        obItem.css({
            'position' : 'relative'
        });
        
        
        obItem.append('<div class="b_gifts__item__icon_active__animate"></div>');
            
        var posEndTop = $('.b_personal_header__user_info__gifts__icon').offset().top;
        var posEndLeft = $('.b_personal_header__user_info__gifts__icon').offset().left;

        var posStartTop = obItem.offset().top;
        var posStartLeft = obItem.offset().left;

        $('.b_gifts__item__icon_active__animate').animate({
            'top' : posEndTop-posStartTop,
            'left' : posEndLeft-posStartLeft
        },600, function (){
            $(this).remove();
        });
        
        
        var rootValue = parseInt($('.b_personal_header__user_info__gifts__val').find('a').text());
        $('.b_personal_header__user_info__gifts__val').find('a').text(rootValue+1);
        
        
        obItem.removeClass('b_gifts__item__icon_active');
    }
    
    
}; 



var CVklIndexReviews = {
    
    options : {
        itenWidth : 0,
        itenWidthCount : 0,
        visible : 4,
        height: 0,
        activeItem : 1,
        sliderRvtimerId : false,
        slidersSpeed : 235000
    },
    
    init : function (oprionsCustom) {
        
        var windowWidth = $(window).width();
        
        if (!oprionsCustom) {
            oprionsCustom = {};
        }
        
        

        if (windowWidth <= 1919) {
            this.options.visible = 3;
        }  else if (windowWidth <= 1023) {
            this.options.visible = 2;
        }  else if (windowWidth <= 639) {
            this.options.visible = 1;
        }
        
        
        var obWrapper = $('#js-index_reviews');
        var obItems = $('.js-b_index_reviews__slider').children('.b_index_reviews__item');
        obWrapper.wrap( '<div class="b_index_reviews__slider-wrapper"></div>' );
        
        CVklIndexSliderReview.init();        
        
        
        this.options.itenWidthOuter = obItems.first().outerWidth(true);
        this.options.itenWidth = obItems.first().width();
        this.options.itenWidthCount = obItems.length;
        
        var itemStartWidth = this.options.itenWidthOuter+'px';
        
        $(window).resize(function(){
          this.options.itenWidthOuter = obItems.first().outerWidth(true);
        
          if (windowWidth <= 1919) {
              this.options.visible = 3;
          }  else if (windowWidth <= 1023) {
              this.options.visible = 2;
          }  else if (windowWidth <= 639) {
              this.options.visible = 1;
          }
        
        });
                
        if (this.options.itenWidthCount <= 0) {
            return false;
        }
        if (this.options.itenWidthCount <= this.options.visible) {
            return false;
        }
        
        
        obWrapper.after('<div class="b_index_reviews__slider-nav slider-nav slider-nav_thin js-b_index_reviews__slider-nav"></div>');
        $('.js-b_index_reviews__slider-nav').append('<a href="#" onclick="return CVklIndexReviews.prevSlide()" class="b_index_reviews__slider-nav__prev slider-nav__item slider-nav__item_prev"></a>');
        $('.js-b_index_reviews__slider-nav').append('<a href="#" onclick="return CVklIndexReviews.nextSlide()" class="b_index_reviews__slider-nav__next slider-nav__item slider-nav__item_next"></a>');
        
        
        if (this.options.itenWidthCount <= this.options.visible) {
            return false;
        }
              
    },
    
    nextSlide : function () {
        if (this.options.activeItem == (this.options.itenWidthCount-this.options.visible+1)) {
            this.options.activeItem = 0;
        }
        var obInnerSlide = $('.js-b_index_reviews__slider');
        obInnerSlide.animate({
            'left' : '-'+(this.options.itenWidthOuter*this.options.activeItem)
        }, 300);
                
        this.options.activeItem++;
        
        return false;
    },
    prevSlide : function () {
        
        if (this.options.activeItem <= 1) {
            
            return false;
            
        } else {
            
            var obInnerSlide = $('.js-b_index_reviews__slider');
            obInnerSlide.animate({
                'left' : '-'+(this.options.itenWidthOuter*(this.options.activeItem-2))
            }, 300);
            this.options.activeItem --;
        }
        
        return false;
    }
    /*
    showSlide : function (obNav) {
        
        clearInterval(this.options.sliderRvtimerId);
        
        this.options.activeItem = obNav.index();
        var obInnerSlide = $('#index_reviews__inner_slide');
        obInnerSlide.animate({
            'left' : '-'+(this.options.itenWidth*this.options.activeItem)
        }, 300);
        
        this.setActiveBol();
        this.options.activeItem++;
        
        this.options.sliderRvtimerId = setInterval(function (){
            CVklIndexReviews.nextSlide();
        }, this.options.slidersSpeed);
        
        return false;
    },
    
    setActiveBol : function () {
        $('.b_index_reviews__list__bool').find('a').removeClass('active');
        $('.b_index_reviews__list__bool').find('a').eq(this.options.activeItem).addClass('active');
    }*/
};

var CVklIndexReviewsBl = {
    
    options : {
        showItems : 4,
        activeItem : 0,
        itemsCount : 0,
        itemWidth : 0
    },
    
    init : function () {
        
        var __this = this;
        
        var windowWidth = $(window).width();
        if (windowWidth <= 740) {
            this.options.showItems = 1;
        } else if (windowWidth <= 750) {
            this.options.showItems = 2;
        }

        this.options.itemsCount = $('#review_slide_rbl').find('td').length;
        this.options.itemWidth = $('#review_slide_rbl').find('td').outerWidth(true);
        
        
        
        
    },
    
    navNext : function () {
        
        var __this = this;
        
        if (this.options.activeItem == (this.options.itemsCount-this.options.showItems)) {
            return false;
        }
        
        $('#review_slide_rbl').animate({
            left : '-='+__this.options.itemWidth+'px'
        }, 300);
        
        this.options.activeItem++;
        
        return false;
    },
    navPrev : function () {
        
        var __this = this;
        
        if (this.options.activeItem == 0) {
            return false;
        }
        
        $('#review_slide_rbl').animate({
            left : '+='+__this.options.itemWidth+'px'
        }, 300);
        
        this.options.activeItem--;
        
        return false;
    }
    
};


$(document).ready(function (){
   
   CVklIndexReviews.init();
   
   
   CVklIndexReviewsBl.init();
   $(window).resize(function(){
       CVklIndexReviewsBl.init();
   });
   
   
   var windowWidth = $(window).width();
   if (windowWidth <= 750) {

        var startX = 0;
        var startY = 0;
        var currentX = 0;
        var currentY = 0;
        var deltaY = 0;
        var bControlSlide = false;
        var bControlSiteRvSlide = false;

        $(window).bind("touchmove",function(e){
            if ($(e.target).closest("#review_slide_rbl").length > 0) {
                currentX = e.originalEvent.touches[0].clientX;
                currentY = e.originalEvent.touches[0].clientY;
                bControlSlide = true;
                if (startX == 0) {
                    startX = currentX;
                }
                if (startY == 0) {
                    startY = currentY;
                }
            } else if ($(e.target).closest("#index_reviews__inner").length > 0) {
                currentX = e.originalEvent.touches[0].clientX;
                currentY = e.originalEvent.touches[0].clientY;
                bControlSiteRvSlide = true;
                if (startX == 0) {
                    startX = currentX;
                }
                if (startY == 0) {
                    startY = currentY;
                }
            }
        });

        $(document).on('touchend', function(e) {

            deltaY = Math.abs((currentY-startY));
            if (bControlSlide && startX > 0 && currentX > 0 && deltaY <= 28) {
                if (startX > currentX) {
                    CVklIndexReviewsBl.navNext();
                } else {
                    CVklIndexReviewsBl.navPrev();
                }
            }
            
            if (bControlSiteRvSlide && startX > 0 && currentX > 0 && deltaY <= 28)
            {
                if (startX > currentX) {
                    CVklIndexReviews.nextSlide();
                } else {
                    CVklIndexReviews.prevSlide();
                }
                 
            }
            
            startX = 0;
            currentX = 0;
            startY = 0;
            currentY = 0;
            bControlSlide = false;
            bControlSiteRvSlide = false;
        });
    }

   
   
});


var CVklLunch = {
    
    
    
    addToBasket : function (pID, bsKey){
        if (!bsKey) {
            bsKey = "";
        }
        $.ajax({
            url : '/ajax/lunch.php',
            type: 'POST',
            data: {
                "PRODUCT_ID" : parseInt(pID),
                "BS_KEY" : bsKey,
                "ACTION" : "ADD_I"
            },
            success: function (data, textStatus, jqXHR) {
                CVklLunch.reloadPage();
            }
        });
        return false;
    },
    
    removeFromBasket : function (pID, bsKey){
        if (!bsKey) {
            bsKey = "";
        }
        $.ajax({
            url : '/ajax/lunch.php',
            type: 'POST',
            data: {
                "BASKET_ID" : parseInt(pID),
                "BS_KEY" : bsKey,
                "ACTION" : "REM_I"
            },
            success: function (data, textStatus, jqXHR) {
                
                CVklLunch.reloadPage();
            }
        });
        return false;
    },
    addBlock : function (){
        $.ajax({
            url : '/ajax/lunch.php',
            type: 'POST',
            data: {
                "ACTION" : "ADD_BL"
            },
            success: function (data, textStatus, jqXHR) {
                CVklLunch.reloadPage(false);
            }
        });
        return false;
    },
    removeBlock : function (bsKey) {
        $.ajax({
            url : '/ajax/lunch.php',
            type: 'POST',
            data: {
                "BS_KEY" : bsKey,
                "ACTION" : "REM_BL"
            },
            success: function (data, textStatus, jqXHR) {
                CVklLunch.reloadPage();
            }
        });
        return false;
    },
    
    removeBlockFromBasket : function (bsKey) {
        //On the order page
        $.ajax({
            url : '/ajax/lunch.php',
            type: 'POST',
            data: {
                "BS_KEY" : bsKey,
                "ACTION" : "REM_BL"
            },
            success: function (data, textStatus, jqXHR) {
                CVklOrder.reloadForm();
            }
        });
        
        return false;
    },
    
    
    setCompanyCode : function (obSelect) {
    
        $.ajax({
            url : '/ajax/lunch.php',
            type: 'POST',
            data: {
                "COMPANY_ID" : obSelect.val(),
                "ACTION" : "SET_CODE"
            },
            success: function (data, textStatus, jqXHR) {
                CVklLunch.reloadPage();
            }
        });
        
    },
    
    reloadPage : function (bIsInitTogle) {

        if (bIsInitTogle === false) {
            bIsInitTogle = false;
        } else {
            bIsInitTogle = true;
        }
        
        $.ajax({
            url : window.location.href,
            type: 'POST',
            data: $('#ajax_lunch_menu__bloks').serialize()+'&LUNCH_AJAX_RELOAD=Y',
            success: function (data, textStatus, jqXHR) {
                $('#ajax_lunch_menu__bloks').html('');
                $('#ajax_lunch_menu__bloks').append(data);
                if (bIsInitTogle) {
                    CVklLunch.initTogle();
                } else {
                    CVklLunch.togleOpenLast();
                }
            }
        });
    },
    
    togleOpenLast : function () {
        var bsKey = 0;
        $('.lunch_menu__block_title').each(function (){
            bsKey = $(this).data('bskey');
            $('#block_'+bsKey).removeClass('lunch_menu__block_wrapper__open');
            $('#input_'+bsKey).val('');

            $('#small_title_'+bsKey).removeClass('lunch_menu_result__block_title__close');
            $('#small_block_'+bsKey).hide();
        });
        
        if (bsKey > 0) {
            $('#title_'+bsKey).addClass('lunch_menu__block_title__open');
            $('#block_'+bsKey).addClass('lunch_menu__block_wrapper__open');
            $('#input_'+bsKey).val('Y');
            
            $('#small_title_'+bsKey).addClass('lunch_menu_result__block_title__close');
            $('#small_block_'+bsKey).show();
        }
    },
    
    togleTitle : function (bsKey) {
        
        if ($('#title_'+bsKey).hasClass('lunch_menu__block_title__open')) {
            $('#title_'+bsKey).removeClass('lunch_menu__block_title__open');
            $('#block_'+bsKey).removeClass('lunch_menu__block_wrapper__open');
            $('#input_'+bsKey).val('');
            
            $('#small_title_'+bsKey).removeClass('lunch_menu_result__block_title__close');
            $('#small_block_'+bsKey).hide();
            
        } else {
            $('#title_'+bsKey).addClass('lunch_menu__block_title__open');
            $('#block_'+bsKey).addClass('lunch_menu__block_wrapper__open');
            $('#input_'+bsKey).val('Y');
            
            $('#small_title_'+bsKey).addClass('lunch_menu_result__block_title__close');
            $('#small_block_'+bsKey).show();
        }
        
        return false;
    },
    
    initTogle : function () {
        
        
        $('.lunch_menu__block_title').each(function (){
            
            var bsKey = $(this).data('bskey');
            if ($('#title_'+bsKey).hasClass('lunch_menu__block_title__open')) {
                $('#block_'+bsKey).addClass('lunch_menu__block_wrapper__open');
                $('#input_'+bsKey).val('Y');
            
                $('#small_title_'+bsKey).addClass('lunch_menu_result__block_title__close');
                $('#small_block_'+bsKey).show();
            } else {
                $('#block_'+bsKey).removeClass('lunch_menu__block_wrapper__open');
                $('#input_'+bsKey).val('');

                $('#small_title_'+bsKey).removeClass('lunch_menu_result__block_title__close');
                $('#small_block_'+bsKey).hide();
            }
        });
    }
    
    
};


/*CVklElemen.openElement(33);*/
/*
function CSiteControlLeftMenu() {
    
    
    $('.b_fx_left_menu').hide();
    
    $(document).bind('mousemove',function(e){
        
        if (e.pageX <= 60) {
            $('.b_fx_left_menu').show();
        } else {
            $('.b_fx_left_menu').hide();
        }
        
    });
    
    
    
}*/