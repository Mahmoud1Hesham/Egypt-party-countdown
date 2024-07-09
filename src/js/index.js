/// <reference types="../../@types/jquery" />


$(document).ready(function(){
    console.log('hello');
    
// accordion section

    $(".accordion-header").on('click',function(){
        $(this).next(".accordion-content").slideToggle();
        $(".accordion-content").not($(this).next()).slideUp();
    });

// count down section
$(document).ready(function() {
    const $days = $('#days');
    const $hours = $('#hours');
    const $minutes = $('#minutes');
    const $seconds = $('#seconds');
    const currentYear = new Date().getFullYear();
    const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

    function UpdateCountDown() {
        const current = new Date();
        const diff = newYearTime - current;
        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const h = Math.floor(diff / 1000 / 60 / 60) % 24;
        const m = Math.floor(diff / 1000 / 60) % 60;
        const s = Math.floor(diff / 1000) % 60;

        $days.text(d);
        $hours.text(h < 10 ? '0' + h : h);
        $minutes.text(m < 10 ? '0' + m : m);
        $seconds.text(s < 10 ? '0' + s : s);
    }

    setInterval(UpdateCountDown, 1000);
});

// textarea funtionality

    const maxLength = 100;
    const $textArea = $('#text-counted');
    const $charCount = $('#chars');

    $textArea.on('input', function() {
        const textLength = $textArea.val().length;
        const remaining = maxLength - textLength;

        if (remaining < 0) {
            $textArea.val($textArea.val().substring(0, maxLength));
        }

        $charCount.text(`${Math.max(0, remaining)} Characters Remaining`);
    });

// Toggle sidebar
$('#sideBar').on('click', function () {
    $('.side-item').toggleClass('show');
    $('#sideBar').toggleClass('sidebar-open');
  });

  // Close sidebar
  $('#closeSidebar').on('click', function () {
    $('.side-item').removeClass('show');
    $('#sideBar').removeClass('sidebar-open');
  });
});


