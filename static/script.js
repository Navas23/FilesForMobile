
var win = $(document);
var mode = 0; //0 == none, 1 == sidebar, 2==file-options, 3==creating-link, 4 == more-info
var optionsDeployed = false;
var yDeployed = 0;

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
  },500);

}

var hideCover = function(){

  $('.opacity').transition({
    'opacity' : 0
  },500,function(){
    $(this).hide();
    mode = 0;
  });

}

var showSidebar = function(){

  $( '.sidebar' ).transition({
    'x' : 0
  },500, function(){
    mode = 1;
  });
  showCover();

}

var hideSidebar = function(){

  $( '.sidebar' ).transition({
    'x' : '-100%'
  },500);
  hideCover();

}

var showOptions = function(){

  $( '.file-options' ).transition({
    'y' : '-289px'
  },500, function(){
    mode = 2;
    yDeployed = '-289px';
  });
  showCover();

}

var deployOptions = function(){

  if( !optionsDeployed && mode == 2 ){

    $( '.file-options' ).transition({
      'y' : '-100%'
    },500, function(){
      optionsDeployed = true;
      yDeployed = '-100%'
    });

  }

}

var undeployOptions = function(){

  if( !optionsDeployed ){
    hideOptions();
  }else{

    $( '.file-options' ).transition({
      'y' : '-289px'
    },500, function(){
      optionsDeployed = false;
      yDeployed = '-289px';
    });

  }

}

var hideOptions = function(){

  $( '.file-options' ).transition({
    'y' : '0%'
  },500);

  hideCover();

}

var showCreateLink = function(){

  if( mode == 2 ){

    $( '.file-options' ).transition({
      'y' : '-413px'
    },500);

    $( '.create-link-container' ).show().transition({
      'x' : '0'
    },500, function(){
      mode = 3;
    });

  }

}

var hideCreateLink = function(){

  if( mode == 3 ){

    $( '.file-options' ).transition({
      'y' : yDeployed
    },500);

    $( '.create-link-container' ).transition({
      'x' : '100%'
    },500, function(){
      mode = 2;
      $(this).hide();
    });

  }

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

.on('click', '.options-more', function(){

  if( mode == 3 ){

    $( '.create-link-container' ).transition({
      'x' : '100%'
    },500, function(){
      $(this).hide();
    });

  }
  
  $('.file-options').transition({
    'height' : '100%',
    'y' : '-100%'
  },500, function(){
    mode = 4;
  });

})
