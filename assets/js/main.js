jQuery(document).ready(function ($) {
    // Wait 8 seconds, then fade out loader
    setTimeout(function () {
        $("#loader-overlay").addClass("hidden");
        // Optional: fully remove from DOM after animation
        // setTimeout(function () {
        //     $("#loader-overlay").hide();
        // }, 1000); // match the CSS transition time (1s)
    }, 8000);

    //  Circle 360 Click → Close Overlay
    $("#circle360").on("click", function () {
        // Optional: disable repeated clicks
        $(this).off("click");

        // Wait 5 seconds after click, then fade out
        setTimeout(function () {
            $("#overlay-360").fadeOut(500);
            $(".navigation-wrap").removeClass("hidden");
        }, 5000);
    });

    // 360° Loader
    $("#circle-360-loader").on("click", function () {
        $(this).fadeOut(500);
        $("#360-loader").fadeOut(500);
    });

    // Menu open close functionality
    // Determine if .home-menu exists to set initial menu state
    let isOpen = $('#main-menu').hasClass('home-menu');

    // Set menu state on load based on isOpen
    $('#main-menu').toggleClass('menu-hidden', !isOpen);
    $('#menuToggle').toggleClass('menu-open', isOpen);
    $('#menuToggle').toggleClass('menu-closed', !isOpen);
    $('#menuIcon').html(
        isOpen
            ? '<img src="assets/images/menu/menu-icon-close.svg" alt="Menu Icon">'
            : '<img src="assets/images/menu/menu-icon-open.svg" alt="Menu Icon">'
    );

    $('#menuToggle').on('click', function () {
        isOpen = !isOpen;

        // Toggle class for show/hide menu
        $('#main-menu').toggleClass('menu-hidden', !isOpen);
        $('.bottom-menu').toggleClass('bottom-menu-active');
        $('#main-menu-overlay').toggleClass('active-menu-overlay');

        // Toggle class for menuToggle button itself
        $('#menuToggle').toggleClass('menu-open', isOpen);
        $('#menuToggle').toggleClass('menu-closed', !isOpen);

        // Change icon between hamburger and close
        const iconHtml = isOpen
            ? '<img src="assets/images/menu/menu-icon-close.svg" alt="Menu Icon">'
            : '<img src="assets/images/menu/menu-icon-open.svg" alt="Menu Icon">';

        $('#menuIcon').html(iconHtml);

        //  If main menu is closed → close all submenus & overlay
        if (!isOpen) {
            closeAllSubmenus();
        }
    });

    // Menu submenu functionality
    $('.menu-plus').on('click', function (e) {
        e.stopPropagation();

        const menuName = $(this).data('menu').replace('plus-', '');
        const $submenu = $('#submenu-' + menuName);
        const $overlay = $('#overlay-menu');
        const $this = $(this);

        // If submenu is already open → close it
        if ($submenu.hasClass('active')) {
            $submenu.removeClass('active');
            $overlay.removeClass('active-menu-overlay');
            $this.removeClass('rotate');
            $('.menu-item').removeClass('inactive');
            return;
        }

        // Close all submenus first
        $('.submenu').removeClass('active');
        $('.menu-plus').removeClass('rotate');

        // Activate current submenu
        $submenu.addClass('active');
        $overlay.addClass('active-menu-overlay');
        $this.addClass('rotate');

        // Make other menu items inactive
        $('.menu-item').addClass('inactive');
        $this.closest('.menu-item').removeClass('inactive');
    });

    //  Overlay Click → Close All
    // $('#overlay').on('click', function () {
    //     closeAllSubmenus();
    // });

    //  HELPER FUNCTION: Close All Submenus
    function closeAllSubmenus() {
        $('#overlay-menu').removeClass('active-menu-overlay');
        $('.submenu').removeClass('active');
        $('.menu-plus').removeClass('rotate');
        $('.menu-item').removeClass('inactive');
    }

    // Initialize 360 viewer
    if (window.CI360) {
        window.CI360.init({
            draggable: false
        });
    }

    // Full-Screen Owl Carousel Slider Initialization
    // If class is present in the DOM, apply the full-screen Owl Carousel Slider Initialization
    if ($('.full-carousel').length > 0) {
        $('.full-carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            navText: [
                '<img src="./assets/images/arrow-left.svg" alt="Arrow Left">',
                '<img src="./assets/images/arrow-right.svg" alt="Arrow Right">'
            ]
        });
    }

    // Tab menu functionality
    // If class is present in the DOM, apply the tab menu functionality
    if ($('.tab-menu-list').length > 0) {
        // Hide all tab contents first
        $('.tab-content').hide();

        // Show the first tab by default
        $('.tab-content').first().show();
        $('.tab-menu-list li').first().addClass('active-tab');

        // On tab click
        $('.tab-menu-list li').on('click', function () {
            var target = $(this).data('tab-target');

            // Remove active class from all tabs and add to clicked one
            $('.tab-menu-list li').removeClass('active-tab');
            $(this).addClass('active-tab');

            // Hide all tab contents and show selected
            $('.tab-content').hide();
            $('#tab-' + target).fadeIn(300);
        });
    }

    //-------- Image Zoom In Out
    if (document.querySelector('.panzoom-wrp')) {
        function initializePanzoom() {
            // Select all elements with the panzoom class
            const panzoomElems = document.querySelectorAll('.panzoom-img');

            // Loop through each element to initialize Panzoom
            panzoomElems.forEach((elem) => {
                const panzoom = Panzoom(elem, {
                    minScale: 1,
                    maxScale: 3,
                    contain: 'outside',
                    startX: 0,
                    startY: 0,
                });

                // We assume each image and its buttons are within the same container
                const container = elem.closest('.panzoom-container');

                // Look for zoom-in and zoom-out buttons with both custom and Fancybox classes
                const zoomInButton = container.querySelector('.zoom-in-btn, .fancybox__button--zoomIn');
                const zoomOutButton = container.querySelector('.zoom-out-btn, .fancybox__button--zoomOut');

                // Add event listeners for zooming
                if (zoomInButton) {
                    zoomInButton.addEventListener('click', function () {
                        panzoom.zoomIn();
                    });
                }

                if (zoomOutButton) {
                    zoomOutButton.addEventListener('click', function () {
                        panzoom.zoomOut();
                    });
                }

                // Optionally, you can enable zoom with the mouse wheel for the parent container
                // container.addEventListener('wheel', panzoom.zoomWithWheel);
            });
        }
        // Event listener for accordion toggle
        const tabMenuList = document.querySelectorAll('.tab-menu-list li');

        tabMenuList.forEach(list => {
            list.addEventListener('click', function () {
                setTimeout(() => {
                    initializePanzoom();
                }, 300);
            });
        });
        initializePanzoom();
    }
});