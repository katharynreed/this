var tracker = 1;

$(document).ready(function() {

  $("#startplaying").click(function(event) {
    event.preventDefault();
    $(".frame"+tracker).hide();
    tracker+=1;
    $(".frame"+tracker).show();
  });

  $(".click").click(function(event) {
    event.preventDefault();
    $(".frame"+tracker).hide();
    tracker += 1;
    $(".frame"+tracker).show();
  });
});
