$(document).ready(function() {

    $('.tabs .tab-links a').on('click', function(event)  {
        var currentAttrValue = $(this).attr('rel');

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        event.preventDefault();
    });

    $('.searchBar a').on('click', function(event)  {
        var optionsAttrValue = $(this).attr('rel');
          event.preventDefault();

        // Change/remove current tab to active
        $(this).parent('li').addClass('searchBarOptions').siblings().removeClass('searchBarOptions');

    });


});
