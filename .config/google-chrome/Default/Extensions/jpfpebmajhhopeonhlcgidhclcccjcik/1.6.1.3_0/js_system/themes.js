document.write('<style type="text/css">');

if ( localStorage['options.backgroundPattern'] !='null' && localStorage['options.backgroundPattern'] !=undefined)
document.write('html {background:none; background-image:url('+ localStorage['options.backgroundPattern']  +')!important; background-repeat-repeat;}');

if ( localStorage['options.background'] )
document.write('body {background:none; background-image:url('+ localStorage['options.background']  +');}');

if ( localStorage['options.backgroundPosition'] != 'left top' )
document.write('body {background-position: '+ localStorage['options.backgroundPosition']  +'}');
document.write('body {background-repeat:'+ localStorage['options.repeatbackground'] +';}');

if ( localStorage['options.colors.bg'] )
document.write('html {background-color:#'+localStorage['options.colors.bg']+';}');

if ( localStorage['options.fontface'] )
document.write('.link {font-family:' +localStorage['options.fontface']+';}');

if ( localStorage['options.fontsize'] )
document.write('.link .title {font-size:' +localStorage['options.fontsize']+'px;'+ localStorage['options.fontstyle']+'}');

if ( localStorage['options.colors.dialbg'] )

document.write('#pages li a {background:#' +localStorage['options.colors.dialbg']+'}');

if ( localStorage['options.colors.dialbginner'] )
document.write('.thumbnail_container {background:#' +localStorage['options.colors.dialbginner']+'}');

if ( localStorage['options.colors.dialbgover'] )

document.write('#pages li:hover a {background:#' +localStorage['options.colors.dialbgover']+'}');

if ( localStorage['options.colors.dialbginnerover'] )
document.write('#pages li a:hover .thumbnail_container {background:#' +localStorage['options.colors.dialbginnerover']+'}');

if ( localStorage['options.colors.border'] )
document.write('#pages li a {border-color: #' +localStorage['options.colors.border']+'}');

if ( localStorage['options.colors.borderover'] )
document.write('#pages li:hover a {border-color: #' +localStorage['options.colors.borderover']+'}');

if ( localStorage['options.colors.title'] )
document.write('.link .title {color: #' +localStorage['options.colors.title']+'}');

if ( localStorage['options.colors.titleover'] )
document.write('.link:hover .title {color: #' +localStorage['options.colors.titleover']+'}');

if ( localStorage['options.dialstyle.corners'] ) {
document.write('#pages li a {border-radius:'+localStorage['options.dialstyle.corners']+'px; }');
document.write('#pages li .thumbnail_container {border-radius:'+(localStorage['options.dialstyle.corners']-2)+'px '+(localStorage['options.dialstyle.corners']-2)+'px 0 0; }');
}

if ( localStorage['options.titleAlign'] ) {
  switch(localStorage['options.titleAlign']) {
    case 'center':
      document.write('.link .title {text-align:center}');
      break;
    case 'right':
      document.write('.link .title {text-align:right}');
      break;
    default:
      break;
  }
}

if ( localStorage['options.dialstyle.shadow']!='none' ) {
  if ( localStorage['options.dialstyle.shadow']=='glow' ) {
    document.write('#pages li a { -webkit-box-shadow: 0 1px 3px rgba(34,25,25,0.15) }');
  } else {
    document.write('div.shadow {background:url("images/shadow_'+localStorage['options.dialstyle.shadow']+'.png?v=99") no-repeat left top;}');
  }
}

if ( localStorage['options.customCss'] && localStorage['options.customCss']!='null' )
document.write(localStorage['options.customCss']);

document.write('<\/style>');