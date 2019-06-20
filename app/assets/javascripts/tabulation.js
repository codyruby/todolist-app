$(document).ready(function() {
    // Mets ici ton code
  
      $('.category-title').on('click',() => {
        $('.category-content').slideToggle('slow');
      });

      var $avatar = $(".avatar");
      $avatar.click(function(){
          $('.dropdown-content').toggle("fast");
      });
    });

   