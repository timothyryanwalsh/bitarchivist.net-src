/**
 * Created by fabiomadeira on 25/02/15. Customized by Tim Walsh in March 2018.
 */

$(document).ready(function(e) {
    
    // jQuery for page scrolling feature
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({
            scrollTop: e(this.hash).offset().top
        }, 1e3)
    })
});


