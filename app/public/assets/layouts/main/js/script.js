// DevelR0X

$(document).ready(function(){

    // Language changer
    $('.header-top a[data-lang]').click(function(){
        document.cookie = 'lang=' + $(this).attr('data-lang') + '; path=/';
        location.reload(); // For fast reload
    });

    // Google analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-163433920-1');
});