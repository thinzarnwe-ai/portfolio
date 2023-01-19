let mousecursor = document.querySelector(".cursor");
let navlinks = document.querySelectorAll(".nav-link");

window.addEventListener("mousemove",cursor)

function cursor(e){
  mousecursor.style.top = e.pageY + "px";
  mousecursor.style.left = e.pageX + "px";
}

new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});

  $('.portfolio-item').isotope({
        itemeSelector: '.item',
        layoutMode: 'fitRows'
    });
    $('.portfolio-menu ul li').click(function(){
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('.active');

        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter:selector
        });
        return false;
    })





