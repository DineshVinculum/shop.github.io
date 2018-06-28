jQuery(document).ready(function(){
    jQuery('.showcart').click(function(){
        jQuery('.block-quickcart').addClass('open');
    });
    jQuery('.close').click(function(){
        jQuery('.block-quickcart').removeClass('open');
    });
    jQuery('.location-select').click(function()
    {
        jQuery('.city-select').addClass('open');
        jQuery('body').addClass('city-opened');
    });
    jQuery('.close-city').click(function()
    {
        jQuery('.city-select').removeClass('open');
        jQuery('body').removeClass('city-opened');
    });
});
jQuery(document).click(function(event) {
    if (!jQuery(event.target).closest(".showcart,.block-quickcart.open").length) {
        jQuery("body").find(".block-quickcart").removeClass("open");
    }
    if (!jQuery(event.target).closest(".city-select,.location-select").length) {
        jQuery("body").find(".city-select").removeClass("open");
        jQuery('body').removeClass('city-opened');
    }
});