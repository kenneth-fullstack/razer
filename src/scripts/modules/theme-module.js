AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        991: {
          slidesPerView: 3,
        },

        767: {
          slidesPerView: 2,
        },

        575: {
          slidesPerView: 1,
        },
      }
    });

    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
      threshold: 1,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      })
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader)
    });


    /*
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
      }
      var $subMenu = $(this).next('.dropdown-menu');
      $subMenu.toggleClass('show');


      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass('show');
      });

      return false;
    });
    */


    $(document).ready(function () {
      $('#show-dropdown').click(function () {
        $('#dropdown').toggle();
      });

      $('#show-dropdown, #dropdown').mouseenter(function () {
        $('#dropdown').show();
      }).mouseleave(function () {
        $('#dropdown').hide();
        $('#dropdown-1').hide();
      });

      $('#show-dropdown-1').click(function () {
        $('#dropdown-1').toggle();
      });

      $('#show-dropdown-1, #dropdown-1').mouseenter(function () {
        $('#dropdown-1').show();

        $('#dropdown-1').mouseleave(function () {
          $('#dropdown-1').hide();
        })
      });

      $('.fa-bars').on('click', function () {
        $('ul.nav-list').show();
      });

      $('.close-menu').on('click', function () {
        $('ul.nav-list').removeAttr('style');
      });

      $('.close-product').on('click', function () {
        $('ul.nav-list .item .sub-menu').hide();
      });

      $('.close-headset').on('click', function () {
        $('ul.nav-list .item .sub-menu .item .sub-menu').hide();
      });
    });
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
  };

  return {
    init: init,
  };
})();
