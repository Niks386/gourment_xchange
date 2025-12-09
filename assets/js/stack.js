(function ($, window, document) {
    'use strict';

    $(document).ready(function () {
        if (!$('.stack-wrap').length) return;

        const STACK_DATA = [
            { label: 'Stack 01', folder: 'stack-01', bare: { s1: 'stack-01-1st-storey.webp', s2: 'stack-01-2nd-storey.webp', s3: 'stack-01-3rd-storey.webp' }, cross: 'section-stack-01_02_04_06_08-label.webp' },
            { label: 'Stack 02', folder: 'stack-02', bare: { s1: 'stack-02-1st-storey.webp', s2: 'stack-02-2nd-storey.webp', s3: 'stack-02-3rd-storey.webp' }, cross: 'section-stack-01_02_04_06_08-label.webp' },
            { label: 'Stack 03', folder: 'stack-03', bare: { s1: 'stack-03-1st-storey.webp', s2: 'stack-03-2nd-storey.webp', s3: 'stack-03-3rd-storey.webp' }, cross: 'section-stack-03_05_07-label.webp' },
            { label: 'Stack 04', folder: 'stack-04', bare: { s1: 'stack-04-1st-storey.webp', s2: 'stack-04-2nd-storey.webp', s3: 'stack-04-3rd-storey.webp' }, cross: 'section-stack-01_02_04_06_08-label.webp' },
            { label: 'Stack 05', folder: 'stack-05', bare: { s1: 'stack-05-1st-storey.webp', s2: 'stack-05-2nd-storey.webp', s3: 'stack-05-3rd-storey.webp' }, cross: 'section-stack-03_05_07-label.webp' },
            { label: 'Stack 06', folder: 'stack-06', bare: { s1: 'stack-06-1st-storey.webp', s2: 'stack-06-2nd-storey.webp', s3: 'stack-06-3rd-storey.webp' }, cross: 'section-stack-01_02_04_06_08-label.webp' },
            { label: 'Stack 07', folder: 'stack-07', bare: { s1: 'stack-07-1st-storey.webp', s2: 'stack-07-2nd-storey.webp', s3: 'stack-07-3rd-storey.webp' }, cross: 'section-stack-03_05_07-label.webp' },
            { label: 'Stack 08', folder: 'stack-08', bare: { s1: 'stack-08-1st-storey.webp', s2: 'stack-08-2nd-storey.webp', s3: 'stack-08-3rd-storey.webp' }, cross: 'section-stack-01_02_04_06_08-label.webp' }
        ];

        window.__STACK_DATA__ = STACK_DATA;

        const bodyDataset = document.body.dataset || {};
        const defaultStackIndex = Math.min(
            Math.max(parseInt(bodyDataset.stackIndex ?? '0', 10) || 0, 0),
            STACK_DATA.length - 1
        );
        const defaultPageLabel = bodyDataset.stackLabel || STACK_DATA[defaultStackIndex].label;
        const defaultDropdownLabel = STACK_DATA[0]?.label || 'Stack 01';

        function getLoader($img) {
            const $wrapper = $img.closest('.panzoom-img');
            if (!$wrapper.length) return null;
            $wrapper.addClass('stack-loader-parent');
            let $loader = $wrapper.find('.stack-loader-overlay');
            if (!$loader.length) {
                $loader = $('<div class="stack-loader-overlay stack-loader-hidden"><div class="stack-loader-spinner"></div></div>');
                $wrapper.append($loader);
            }
            return $loader;
        }

        function showLoader($img) {
            const $loader = getLoader($img);
            if ($loader) {
                requestAnimationFrame(() => $loader.removeClass('stack-loader-hidden'));
            }
        }

        function hideLoader($img) {
            const $loader = getLoader($img);
            if ($loader) $loader.addClass('stack-loader-hidden');
        }

        function loadImageWithLoader($img, src) {
            showLoader($img);
            $img.off('.stackLoader');
            $img.on('load.stackLoader error.stackLoader', function () {
                hideLoader($img);
            });
            $img.attr('src', src);
        }

        let activeStorey = 's1';
        let activeStack = null;

        // ⭐ AUTO-GENERATE STACK PAGE LINK
        function getStackPageLink(stack) {
            if (!stack || !stack.label) return 'stack1.html';
            const num = stack.label.replace(/\D+/g, '');
            const cleanNum = parseInt(num, 10);
            return `stack${cleanNum}.html`;
        }

        function updateStackVisuals(stack) {
            if (!stack) return;
            const base = `./assets/images/product/heritage-terrace/${stack.folder}/`;

            $('.stack-wrap .columns-3 > .relative').each(function (i) {
                const bareKey = 's' + (i + 1);
                $(this).find('a.stack-img').attr({
                    'data-bare-plan': stack.bare[bareKey],
                    'data-cross-plan': stack.cross,
                    'data-folder': stack.folder
                });
            });

            loadImageWithLoader($('#bare-plan-img'), base + stack.bare[activeStorey]);
            loadImageWithLoader($('#cross-plan-img'), base + 'cross-section/' + stack.cross);

            const cleanLabel = stack.label.replace(/^Stack\s0*/, 'Stack 0');
            $('.breadcrumb-item.current-page').text(cleanLabel);

            // UPDATE CHANGE STOREY BUTTON URL
            $('.back-storey').attr('href', getStackPageLink(stack));
        }

        function showTab(target) {
            $('.tab-content').hide();
            $('#tab-' + target).fadeIn(300);
            $('.tab-menu-list-vertical li').removeClass('active-tab');
            $('.tab-menu-list-vertical li[data-tab-target="' + target + '"]').addClass('active-tab');
        }

        function setFallbackImage(selector) {
            $(selector).on('error', function () {
                $(this).attr('src', './assets/images/fallback.webp');
            });
        }

        $(document).on('click', '.stack-img', function (e) {
            e.preventDefault();
            if ($('#stack-map-popup').is(':animated')) return;

            const $el = $(this);
            const storeyLabel = $el.find('span').first().text().toLowerCase();
            if (storeyLabel.includes('2nd')) activeStorey = 's2';
            else if (storeyLabel.includes('3rd')) activeStorey = 's3';
            else activeStorey = 's1';

            const stackIndex = defaultStackIndex;

            activeStack = STACK_DATA[stackIndex];
            updateStackVisuals(activeStack);

            const $dropdown = $('#stack-storey-dd');
            $dropdown.find('.custom-dropdown-text').text(activeStack.label);
            $dropdown.find('.custom-dropdown-item').removeClass('selected');
            $dropdown.find('.custom-dropdown-item').eq(stackIndex).addClass('selected');

            showTab('bare-plan');
            $('#stack-map-popup').fadeIn(300);
        });

        $(document).on('click', '.back-storey', function () {
            $('#stack-map-popup').fadeOut(300, function () {
                activeStack = null;
                activeStorey = 's1';

                const $dropdown = $('#stack-storey-dd');
                $dropdown.find('.custom-dropdown-text').text(defaultDropdownLabel);
                $dropdown.find('.custom-dropdown-item').removeClass('selected');
                $dropdown.find('.custom-dropdown-item').eq(0).addClass('selected');

                $('.breadcrumb-item.current-page').text(defaultPageLabel);
            });
        });

        $(document).on('click', '.tab-menu-list-vertical li', function () {
            const target = $(this).data('tab-target');
            if (target) showTab(target);
        });

        showTab('bare-plan');

        (function initStackDropdown() {
            const $dropdown = $('#stack-storey-dd');
            if (!$dropdown.length) return;

            const $btn = $dropdown.find('.custom-dropdown-btn');
            const $text = $dropdown.find('.custom-dropdown-text');
            const $listInner = $dropdown.find('.custom-dropdown-list-inner');

            $listInner.empty();
            STACK_DATA.forEach((s, i) => {
                $listInner.append(`<div class="custom-dropdown-item" data-index="${i}">${s.label}</div>`);
            });

            $text.text(defaultDropdownLabel);
            $listInner.find('.custom-dropdown-item').eq(0).addClass('selected');

            $btn.on('click', function (e) {
                e.stopPropagation();
                $('.custom-dropdown').not($dropdown).removeClass('open');
                $dropdown.toggleClass('open');
            });

            $listInner.on('click', '.custom-dropdown-item', function (e) {
                e.stopPropagation();
                const idx = $(this).data('index');
                const sel = STACK_DATA[idx];
                if (!sel) return;

                $listInner.find('.custom-dropdown-item').removeClass('selected');
                $(this).addClass('selected');
                $text.text(sel.label);
                activeStack = sel;

                updateStackVisuals(sel);

                setTimeout(() => $dropdown.removeClass('open'), 100);
            });

            $(document).on('click keydown', function (e) {
                if (!$(e.target).closest('#stack-storey-dd').length || e.key === 'Escape') {
                    $dropdown.removeClass('open');
                }
            });
        })();

        setFallbackImage('#bare-plan-img');
        setFallbackImage('#cross-plan-img');
    });
})(jQuery, window, document);