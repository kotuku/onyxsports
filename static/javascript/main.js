$(document).ready(function () {

    // When the user clicks the toTop button, we want the page to scroll to the top.
    $("#toTop").click(function () {

        // Disable the default behaviour when a user clicks an empty anchor link.
        // (The page jumps to the top instead of // animating)
        event.preventDefault();

        // Animate the scrolling motion.
        $("html, body").animate({
            scrollTop: 0
        }, "slow");

    });

    // Contact
    $('#frm').submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: $("#frm").attr('action'),
            method: 'POST',
            data: $("#frm").serialize(),
            dataType: 'json',
            beforeSend: function () { $('#send').attr('value', 'Message sending.....'); },
            success: function (data) { $('#send').attr('value', 'Message sent successfully'); },
            error: function (err) { $('#send').attr('value', 'There was an error!'); }
        });
    });

});
     