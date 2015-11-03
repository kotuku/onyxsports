$(document).ready(function () {

    // Contact
    $('#send').click(function () {
        $.ajax({
            url: $("#frm").attr('action'),
            method: 'POST',
            data: $('#frm').serialize(),
            dataType: 'json',
            beforeSend: function () { $('#send').attr('value', 'Message sending.....'); },
            success: function (data) { $('#send').attr('value', 'Message sent successfully'); },
            error: function (err) { $('#send').attr('value', 'There was an error!'); }
        });
        return false;
    });

});
     