
$(document).ready(function() {
  $("#quiz").submit(function(event) {

    const food = parseInt($("input:radio[name=food]:checked").val());
    const activity = parseInt($("input:radio[name=activity]:checked").val());
    const place = parseInt($("input:radio[name=place]:checked").val());
    const restaurant = parseInt($("input:radio[name=restaurant]:checked").val());
    console.log(food);
    console.log(activity);
    console.log(place);
    console.log(restaurant);
    const total = (food) + (activity) + (place) + (restaurant);
    console.log(total);

    if (total === 8 || total > 8) {
      $("#rock").show();
      $("#ryanReynolds").hide();
     }
    else {
      $("#ryanReynolds").show();
      $("#rock").hide();  
    }

    
    event.preventDefault();
  });
});