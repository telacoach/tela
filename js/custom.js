setNavbarClass();
$(document).ready(function() {
    setNavbarClass();
    $(window).scroll(function() {
        setNavbarClass();
    });
});

function setNavbarClass() {
    if ($(window).scrollTop() > 0) {
        $("#navbar").addClass("scrolled");
    } else {
        $("#navbar").removeClass("scrolled");
    }
}

// chat
$('#build').bind('click', function() {
    var inputText = $('#buildInput').val();
    var regMessage = /^#(\d):\s([^#.]*)/gm;
    var messages = inputText.split(regMessage);
    $('#chat').empty();
    for (var i=1; i<messages.length; i=i+3) {
      addMsg(messages[i], messages[i+1]);
    }
    return false;
  })
  
  $('#send').bind('submit', function() {
    var msgText = $('#msgInput').val();
    $('#msgInput').val('');
    
    if (msgText != '') addMsg(1, msgText);
    
    $('#chat').animate({ scrollTop: $('#chat').height() }, 600);
    
    return false;
  })
  
  function addMsg(people, msg) {
    console.log('addMsg');
    var side = 'right';
    var $_phone = $('#chat');
    var $_lastMessage = $('#chat .message:last');
    
    if (people == 1) side = 'right';
    if (people == 2) side = 'left';
    
    var time = new Date(),
        timeString = zero(time.getHours()) + ':' + zero(time.getMinutes());
    
    if ($_lastMessage.hasClass(side)) {
      
      $_lastMessage.append(
        $('<div>').addClass('message-text').text(msg).append(
          $('<div>').addClass('message-time').text(timeString)
        )
      )
      
    } else {
      
      $_phone.append(
        $('<div>').addClass('message '+side).append(
          $('<div>').addClass('message-text').text(msg).append('<div class="message-time">' + timeString + '</div>')
        ));
    } 
  }
  
  function zero(num) {
      return ('0' + num).slice(-2);
  }