$(document).ready(function() {
    // Mets ici ton code
  
      $('.category-title').on('click',() => {
        $('.category-content').slideToggle('slow');
      });

      var $avatar = $(".avatar");
      $avatar.click(function(){
          $('.dropdown-content').toggle("fast");
      });

      $('.dropdown-item1').on('click',() => {
          $('#modal-form1').slideToggle('slow');
      });

      $('.dropdown-item2').on('click',() => {
          $('#modal-form2').slideToggle('slow');
      });

      $('.cancelbtn1').on('click',() => {
        $('#modal-form1').slideToggle('slow');
      });

      $('.cancelbtn2').on('click',() => {
        $('#modal-form2').slideToggle('slow');
      });


      $( "body" ).click(function( event ) {
        event.stopPropagation();
        // Do something
      });
});

   