
var win = $(document);

win.on('click', '.hamburger', function(){

  $( '.sidebar' ).transition({
    'x' : 0
  },800);

})

.on('click', '.back', function(){

  console.log('click');
  $( '.sidebar' ).transition({
    'x' : '-100%'
  },800);

})
