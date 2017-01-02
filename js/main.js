// Array with menu structure
const menuList = ['about', 'fleet', 'contact'];

$(document).ready(function() {
    
    // Navbar animations
    $('.navbar').hide().slideDown(1000);
    $('.nav-item').hide().slideDown(1000);
        
    // Prevent selecting on menu links
    $('.nav').addClass('noselect');
    
    // Bind scroll action to all menu links
    $.each(menuList, function(index, item){
        $('#'+item + '-link').click(function(e){
            e.preventDefault();
            goToByScroll(item)
            // Hide collapse after click on item
            $('.collapse').collapse('hide');
        });
    });
});

function goToByScroll(itemId){
    $('html,body').animate({
        scrollTop: $("#"+itemId).offset().top},
        'slow');
}
