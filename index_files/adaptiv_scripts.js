var MobileCatalogSlider = {
    
    options : {
        itemWidth : 0,
        itemWidthCount : 0,
        obCatalogInner : false,
        obCatalogSections : false,
        activeItem : 0,
        obCatalog : false
    },
    
    init : function () {
        
        var windowWidth = $(window).width();
        
        var obCatalog = $('#mobile_catalog_wrapper');
        this.options.obCatalog = obCatalog;
        this.options.obCatalogSections = obCatalog.find('.mobile_catalog__section_tb');
        
        this.options.itemWidth = this.options.obCatalogSections.first().outerWidth();
        this.options.itemWidthCount = this.options.obCatalogSections.length;
        
        obCatalog.wrapInner('<div id="mobile_catalog_inner"></div>');
        this.obCatalogInner = $('#mobile_catalog_inner');
        
        this.options.obCatalogSections.css({
            width : (obCatalog.outerWidth())+'px',
            'float' : 'left'
        });
        
        /*mobile_catalog__tb*/
        
        this.obCatalogInner .css({
            width : (this.options.itemWidth*this.options.itemWidthCount)+'px',
            'position' : 'relative'
        });
        obCatalog.css({
            overflow : 'hidden'
        });
        
        
        var intFindSectionIndex = 0;
        var url_hash = $(location).attr('href').split("#")[1];
        if (url_hash) {
            var findSection = parseInt(url_hash.replace('MENU_',""));
            if (findSection && findSection > 0 && $('#mobile_nav_id_'+findSection).length > 0) {
                intFindSectionIndex = $('#mobile_nav_id_'+findSection).index();
            }
        }
        if (intFindSectionIndex > 0) {
            this.options.activeItem = intFindSectionIndex;
            this.obCatalogInner.css({
                'left' : '-'+(this.options.activeItem*this.options.itemWidth)+'px'
            });
            this.setBlockHeight();
            this.setTitle();
        } else {
            this.setBlockHeight();
        }
    },
    
    next : function () {
        if (this.options.activeItem >= (this.options.itemWidthCount-1)) {
            return false;
        }
        
        this.options.activeItem++;
        
        this.obCatalogInner.animate({
            'left' : '-'+(this.options.activeItem*this.options.itemWidth)+'px'
        }, 300);
        
        this.setTitle();
        this.setBlockHeight();
        
        
        return false;
    },
    prev : function () {
        if (this.options.activeItem <= 0) {
            return false;
        }
        
        this.options.activeItem--;
        
        this.obCatalogInner.animate({
            'left' : '-'+(this.options.activeItem*this.options.itemWidth)+'px'
        }, 300);
        
        this.setTitle();
        this.setBlockHeight();
        return false;
    },
    setTitle : function () {
        var title = this.options.obCatalogSections.eq(this.options.activeItem).find('.mobile_catalog__section_tb__title').val();
        $('.mobile_catalog__sections_title').html(title);
    },
    setBlockHeight : function () {
        var initHeight = parseInt($('.mobile_catalog__section_tb').eq(this.options.activeItem).find('.mobile_catalog__tb').outerHeight());
        initHeight += 15;
        
        this.options.obCatalog.css({
            height : initHeight+'px'
        });
    },
    showBlockByHash : function (sID) {
        
        
        var intFindSectionIndex = 0;
        if (sID) {
            var findSection = sID;
            console.log(findSection);
            if (findSection && findSection > 0 && $('#mobile_nav_id_'+findSection).length > 0) {
                intFindSectionIndex = $('#mobile_nav_id_'+findSection).index();
                
                this.options.activeItem = intFindSectionIndex;
                this.obCatalogInner.css({
                    'left' : '-'+(this.options.activeItem*this.options.itemWidth)+'px'
                });
                this.setBlockHeight();
                this.setTitle();
            }
        }
    }
};

var MobileCatalogViewToggel = {
    
    
    
    change : function (obItem, type) {
        
        $('.mobile_catalog__view__toggle').removeClass('mobile_catalog__view__toggle__selected');

        if (type == 'r') {
            $('.mobile_catalog__view__slide').show();
            $('.mobile_catalog__view__slide').animate({
                left : '50%'
            }, 200);
        } else {
            $('.mobile_catalog__view__slide').css({
                left : '50%'
            });
            $('.mobile_catalog__view__slide').show();
            $('.mobile_catalog__view__slide').animate({
                left : '0'
            }, 200);
        }

        

        return false;
    }
    
};

$(document).ready(function (){
    MobileCatalogSlider.init();
    
    
    $('.mobile_header_menu').click( function (){
        
        
        if ($(this).hasClass('mobile_header_menu__c_open')) {
            $('.mobile_menu').hide();
            $('body').removeClass('b_catalog__element__html_body');
            $('.mobile_header_menu').removeClass('mobile_header_menu__c_open');
        } else {
            
            var setHeight = $(window).height()-$('.b_top_menu__wrapper').height()-$('#bx-panel').height();
            if ($('.b_top_menu__fixed').length > 0) {
                setHeight-$('.mobile_header').height();
            }
            
            $('.mobile_menu').css({
                height : setHeight+'px'
            });
            $('.mobile_menu').show();
            $('body').addClass('b_catalog__element__html_body');
            $('.mobile_header_menu').addClass('mobile_header_menu__c_open');
        }
        return false;
    });
    
});