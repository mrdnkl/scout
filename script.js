$(document).ready(function () {
    var t = $('#example').DataTable({
      //options
    });

    $.ajax({
        url: 'http://api.randomuser.me/?results=100&seed=foobar',
        dataType: 'json',
        success: function (data) {
          for ( var i = 0; i < data.results.length; i++ ) {
            t.row.add([
              data.results[i].user.name.first + " " + data.results[i].user.name.last,
              data.results[i].user.email,
              data.results[i].user.cell, ]).draw();
              }
        }
    });

});
