
var win = $(document);
var mode = 0; //0 == none, 1 == sidebar, 2==file-options

win.on('click', '.hamburger', function(){

  $( '.sidebar' ).transition({
    'x' : 0
  },800, function(){
    mode = 1;
  });

  $('.opacity').show().transition({
    'opacity' : 1
  },800);

})

.on('click', '.back', function(){

  if( mode == 1 ){

    $( '.sidebar' ).transition({
      'x' : '-100%'
    },800);

  }else if( mode == 2 ){

    $( '.file-options' ).transition({
      'y' : '0%'
    },800);

  }

  $('.opacity').transition({
    'opacity' : 0
  },800,function(){
    $(this).hide();
    mode = 0;
  });

})

.on('click', '.file .more', function(){

  $( '.file-options' ).transition({
    'y' : '-289px'
  },800, function(){
    mode = 2;
  });

  $('.opacity').show().transition({
    'opacity' : 1
  },800);

})

.on('click', '.sidebar-element', function(){

  $('.sidebar-element.active').removeClass('active');
  $(this).addClass('active');

})

.on('click', '.opacity', function(){
  $('.back').click();
})
