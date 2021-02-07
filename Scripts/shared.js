// $(document).ready(function(){
//     //mobile nav

//     var mobileNavControls = document.getElementById("toggle-nav");
//     var header = document.getElementById("header");
//     mobileNavControls.addEventListener("click", function(){
//         header.classList.toggle("mobile-active");
//     });

//     $("[data-mobile-dd]").on("click", function(){
//         $(this).closest(".mobile-li").toggleClass("active");
//     });
// });

jQuery(function($) {
    $(document).ready(function(){
        //mobile nav
        console.log("test")
        var mobileNavControls = document.getElementById("toggle-nav");
        var header = document.getElementById("header");
        mobileNavControls.addEventListener("click", function(){
            console.log("go")
            header.classList.toggle("mobile-active");
        });
    
        $("[data-mobile-dd]").on("click", function(){
            $(this).closest(".mobile-li").toggleClass("active");
        });
    });
});