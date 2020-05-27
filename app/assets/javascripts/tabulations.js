$(document).ready(function() {
    $('ul[class="category-content"]').hide()
    $('li[class="category-title"]')

    $( 'li[class="category-title"]').eq(0).click(function() {
        $('ul[class="category-content"]').eq(0).show('slow');
        $('ul[class="category-content"]').eq(1).hide('fast')
        $('ul[class="category-content"]').eq(2).hide('fast')
    });

    $( 'li[class="category-title"]').eq(1).click(function() {
        $('ul[class="category-content"]').eq(1).show('slow')
        $('ul[class="category-content"]').eq(0).hide('fast')
        $('ul[class="category-content"]').eq(2).hide('fast') 
    });

    $( 'li[class="category-title"]').eq(2).click(function() {
        $('ul[class="category-content"]').eq(2).show('slow');
        $('ul[class="category-content"]').eq(1).hide('fast')
        $('ul[class="category-content"]').eq(0).hide('fast') 
    });

    $('img[class="avatar rounded-circle"]').click(function() {
        $('div[class="dropdown-content"]').toggle('slow');

        
    });
    

    });