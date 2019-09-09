// $(document).ready(function() {
// // write your code here

// $.getJSON("data.json", function(data){
//     $(data).each(function(index , element){
//         $('#top-spots-body').append($('<tr>')
//         .append($('<td>').append(element.name))
//         .append($('<td>').append(element.description))
//         .append($('<td>').append('<a>http://maps.google.com/?q=</a>').append(element.location)));
//     });
// });

// })

$(document).ready(function(){
    $.getJSON('data.json',function(data){
        data.forEach(function(element){
            $('#top-spots-body').append('<tr><td>' + element.name + '</td><td>' + element.description + '</td><td><a class = "button" target = "blank" href=http://www.google.com/maps?q=' + element.location + '>Click for location</a></td></tr>')
        });
    });
});





