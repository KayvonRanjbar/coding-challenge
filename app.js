function toggleLinks() {
  $('#login').toggle();
  $('#logout').toggle();
}

$(document).ready(function() {

  $('#login').click(toggleLinks);
  $('#logout').click(toggleLinks);
});