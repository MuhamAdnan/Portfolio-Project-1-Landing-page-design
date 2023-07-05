function showPopup() {
    document.getElementById("popup").classList.add("show");
  }

  function hidePopup() {
    document.getElementById("popup").classList.remove("show");
  }
  

$('body').scrollspy({ target: '.navbar', offset: 100 });



$(document).ready(function() {
  // Initialize the Owl Carousel
  $('.owl-single').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  });

  // Handle click events on the links
  $('.service.link').click(function(e) {
    e.preventDefault();
    
    // Get the index of the clicked link
    var index = $(this).data('index');
    
    // Change the active link
    $('.service.link').removeClass('active');
    $(this).addClass('active');
    
    // Change the active slide in the carousel
    $('.owl-single').trigger('to.owl.carousel', [index - 1, 500]);
  });
});

// JavaScript code
function animateCounters() {
  const membersCounter = document.getElementById("members-counter");
  const teamCounter = document.getElementById("team-counter");
  const membersTarget = parseInt(membersCounter.getAttribute("data-number"));
  const teamTarget = parseInt(teamCounter.getAttribute("data-number"));
  const membersDuration = 500; // Duration in milliseconds for members counter
  const teamDuration = 520; // Duration in milliseconds for team counter
  const membersStep = membersTarget / membersDuration; // Increment per millisecond for members counter
  const teamStep = teamTarget / teamDuration; // Increment per millisecond for team counter

  let membersCurrent = 0;
  let teamCurrent = 0;

  const updateCounters = () => {
    membersCurrent += membersStep;
    teamCurrent += teamStep;

    membersCounter.textContent = Math.round(membersCurrent);
    teamCounter.textContent = Math.round(teamCurrent);

    if (membersCurrent < membersTarget) {
      requestAnimationFrame(updateCounters);
    }
  };

  requestAnimationFrame(updateCounters);
}

// Call the function to start the animation
animateCounters();

// carosuel

  $(document).ready(function() {
    // Initialize the Owl Carousel
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: false,
    });

    // Handle tab-like behavior for links
    $('.service.link').on('click', function(e) {
      e.preventDefault();

      // Remove active class from all links
      $('.service.link').removeClass('active');

      // Add active class to the clicked link
      $(this).addClass('active');

      // Get the data-index attribute value of the clicked link
      var index = $(this).data('index');

      // Go to the corresponding slide in the carousel
      $('.owl-carousel').trigger('to.owl.carousel', [index - 1, 300]);
    });

    // Set the initial active link
    $('.service.link[data-index="1"]').addClass('active');
  });



