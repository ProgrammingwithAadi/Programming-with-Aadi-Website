$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Science Enthusiast"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Computer Lover", "Bookworm", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

function sendEmail(){
    Email.send({
    Host : "smtp.gmail.com",
    Username : "programmingwithaadi.tech@gmail.com",
    Password : "ngrxriicrguxdvwg", // This is an app password and will not work if you try to sign in
    To : 'programmingwithaadi.tech@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("subject").value,
    Body : "Name: " + document.getElementById("name").value +
    "<br> Email: " + document.getElementById("email").value +
    "<br> Subject: " + document.getElementById("subject").value +
    "<br> Body: " + document.getElementById("message").value
}).then(
    message => alert("Message Sent Successfully !!!"), alert("Message Sent Successfully!!")
);}
