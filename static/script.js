
var win = $(document);
var mode = 0; //0 == none, 1 == sidebar, 2==file-options, 3==creating-link
var optionsDeployed = false;

var intervalo = setInterval( function(){
  if( typeof Hammer !== 'undefined' ){
    clearInterval( intervalo );
    hammerLoaded = true;
    mc = new Hammer(win[0] , {
      domEvents:true
    });
    mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  }
},50)

var showCover = function(){

  $('.opacity').show().transition({
    'opacity' : 1
  },800);

}

var hideCover = function(){

  $('.opacity').transition({
    'opacity' : 0
  },800,function(){
    $(this).hide();
    mode = 0;
  });

}

var showSidebar = function(){

  $( '.sidebar' ).transition({
    'x' : 0
  },800, function(){
    mode = 1;
  });
  showCover();

}

var hideSidebar = function(){

  $( '.sidebar' ).transition({
    'x' : '-100%'
  },800);
  hideCover();

}

var showOptions = function(){

  $( '.file-options' ).transition({
    'y' : '-289px'
  },800, function(){
    mode = 2;
  });
  showCover();

}

var deployOptions = function(){

  if( !optionsDeployed ){

    $( '.file-options' ).transition({
      'y' : '-100%'
    },800, function(){
      optionsDeployed = true;
    });

  }

}

var undeployOptions = function(){

  if( !optionsDeployed ){
    hideOptions();
  }else{

    $( '.file-options' ).transition({
      'y' : '-289px'
    },800, function(){
      optionsDeployed = false;
    });

  }

}

var hideOptions = function(){

  $( '.file-options' ).transition({
    'y' : '0%'
  },800);

  hideCover();

}

var showCreateLink = function(){

  $( '.file-options' ).transition({
    'y' : '-413px'
  },800);

  $( '.create-link-container' ).transition({
    'x' : '0'
  },800, function(){
    mode = 3;
  });

}

var hideCreateLink = function(){

  $( '.file-options' ).transition({
    'y' : '-289px'
  },800);

  $( '.create-link-container' ).transition({
    'x' : '100%'
  },800, function(){
    mode = 2;
  });

}

win.on('click', '.hamburger', function(){
  showSidebar();
})

.on('click', '.back', function(){

  if( mode == 1 ){
    hideSidebar();
  }else if( mode == 2 ){
    hideOptions();
  }else if( mode == 3 ){
    hideCreateLink();
  }

})

.on('click', '.file .more', function(){
  showOptions();
})

.on('click', '.sidebar-element', function(){

  $('.sidebar-element.active').removeClass('active');
  $(this).addClass('active');

})

.on('click', '.opacity', function(){
  $('.back').click();
})

.on('swipeup', '.file-options', function(){
  deployOptions();
})

.on('swipedown', '.file-options', function(){
  undeployOptions();
})

.on('swiperight', '.files-container', function(){
  $('.hamburger').click();
})

.on('swipeleft', '.sidebar', function(){
  $('.back').click();
})

.on('click', '.selector', function(){
  $(this).toggleClass('active');
})

.on('click', '.option.create-link', function(){
  showCreateLink();
})
