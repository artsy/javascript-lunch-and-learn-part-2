var url = require('url')
var $ = require('jquery')

$(function() {
  $('#container').html(
    'Your url path, curtousy of the Node url package, is ' +
    url.parse(location.href).path
  )
})
