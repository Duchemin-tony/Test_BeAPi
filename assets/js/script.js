/*
* Slider OWL Carousel 
* Latest Posts
*/ 
$('.owl-carousel').owlCarousel({
    loop:false,
    dots: true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        640:{
            items:2
        },
        960:{
            items:3
        },
        1200:{
            items:3
        }
    }
})

/*
* Popup video
*/
$('.link-video').click(function(){
    $('.video-popup').fadeIn();
    $('#iframeHolder').html('');
    var link = $(this).attr("link");
    $('#iframeHolder').html('<iframe src="'+link+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});
$('.close-video').click(function(){
    $('.video-popup').fadeOut();
    $('#iframeHolder').html('');
});

/*
* Scroll Effect
*/
const threshold = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove('reveal')
      observer.unobserve(entry.target)
    }
  })
}

document.documentElement.classList.add('reveal-loaded')

window.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(handleIntersect, options)
  const targets = document.querySelectorAll('.reveal')
  targets.forEach(function (target) {
    observer.observe(target)
  })
})