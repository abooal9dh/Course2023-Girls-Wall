$('[data-text]').on('keyup', function(){
    $(this).attr('data-text', $(this).text());
  });