$(document).ready(function(){
    var btnSend = $('#send');
    btnSend.click(function (){
        var phone = $('#phone').val();
        if (!phone) {
            swal('Please enter a phone number');
            return;
        }
        var text = $('#text').val();
        if (!text) {
            swal("Please enter message");
            return;
        }
        var url = 'http://api.whatsapp.com/send?phone='+ phone + '&text=' + text;
        var win = window.open(url , '_blank');
        win.focus();
    });
});