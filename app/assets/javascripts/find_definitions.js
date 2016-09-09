// Write Javascript here to handle the click for that button/link
$(document).ready(function() {
  $(".find-definitions").on("click", function() {
    // Get the term from the form
    var term = $("#term_name").val();
    console.log("I did it!")

    $.getScript({ url: "/definitions/show_def", data: { term: term } })

    // do other work
  })
})

// function definition(url) {
//
//      $.get(url, function (data) {
//          var temp = data[0]
//          alert("Data Loaded: " + data);
//          alert("temp.id = " + temp.id);
//          alert("temp.name = " + temp.name);
//      });
//  }
