jQuery(document).ready(function ($) {
    // Wait 8 seconds, then fade out loader
    setTimeout(function () {
        $("#loader-overlay").addClass("hidden");
        // Optional: fully remove from DOM after animation
        // setTimeout(function () {
        //     $("#loader-overlay").hide();
        // }, 1000); // match the CSS transition time (1s)
    }, 8000);

    // Menu open close functionality
    let isOpen = true; // menu open by default

    $('#menuToggle').on('click', function () {
        isOpen = !isOpen;

        // Toggle class for show/hide menu
        $('#menuContent').toggleClass('menu-hidden', !isOpen);

        // Toggle class for menuToggle button itself
        $('#menuToggle').toggleClass('menu-open', isOpen);
        $('#menuToggle').toggleClass('menu-closed', !isOpen);

        // Change icon between hamburger and close
        const iconHtml = isOpen
            ? '<img src="assets/images/menu/menu-icon-close.svg" alt="Menu Icon">'
            : '<img src="assets/images/menu/menu-icon-open.svg" alt="Menu Icon">';

        $('#menuIcon').html(iconHtml);

        // === If main menu is closed → close all submenus & overlay ===
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

    // === Overlay Click → Close All ===
    // $('#overlay').on('click', function () {
    //     closeAllSubmenus();
    // });

    // === HELPER FUNCTION: Close All Submenus ===
    function closeAllSubmenus() {
        $('#overlay-menu').removeClass('active-menu-overlay');
        $('.submenu').removeClass('active');
        $('.menu-plus').removeClass('rotate');
        $('.menu-item').removeClass('inactive');
    }

    // === Circle 360 Click → Close Overlay ===
    $("#circle360").on("click", function () {
        // Optional: disable repeated clicks
        $(this).off("click");

        // Wait 5 seconds after click, then fade out
        setTimeout(function () {
            $("#overlay-360").fadeOut(500);
            $("#main-menu").removeClass("hidden");
        }, 5000);
    });

    // Initialize 360 viewer
    if (window.CI360) {
        window.CI360.init({
            draggable: false
        });
    }
});