$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('#description');
      var amount = $('#amount');
      var data = {item: item.val(), amount: amount.val()};

      $.ajax({
        type: 'POST',
        url: '/budget',
        data: data,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
      return false;
  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/budget/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
