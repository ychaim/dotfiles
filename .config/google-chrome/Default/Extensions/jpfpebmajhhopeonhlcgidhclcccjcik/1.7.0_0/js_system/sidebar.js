var panels=0;$(function(){if(getValue("options.sidebar.showDelicious")==1&&getValue("options.sidebar.deliciousUsername")!=""){$("#delicious").show();panels++}else{$("#delicious").remove()}if(getValue("options.sidebar.showGooglebookmarks")==1){$("#googlebookmarks").show();panels++}else{$("#googlebookmarks").remove()}if(getValue("options.sidebar.showPinboard")==1){$("#pinboard").show();panels++}else{$("#pinboard").remove()}if(getValue("options.sidebar.showBookmarks")==1){$("#bookmarks").show();panels++}else{$("#bookmarks").remove()}if(getValue("options.sidebar.showHistory")==1){$("#history").show();panels++}else{$("#history").remove()}if(getValue("options.sidebar.showApps")=="1"){$("#apps").show();panels++;loadApps("sidebar")}else{$("#apps").remove()}var b=panels*281;$("#sidebars").css({width:b,right:(-1*b)+3});$("#bookmarks,#history").css("height",$(window).height());$("#d_bookmarks").css("height",$(window).height());function c(){if(parseInt($("#sidebars").css("right"))<0){if(getValue("options.sidebar.showBookmarks")==1){if($("#bookmarks ul li").length<1){bookmarksLoad("1")}}$("#sidebars").animate({right:0},100)}$("#bookmarks,#history").css("height",$(window).height());$("#d_bookmarks").css("height",$(window).height());if(getValue("options.sidebar.showHistory")==1){renderHistoryItems()}}function a(){if(parseInt($("#sidebars").css("right"))==0){if(panels==1&&$("#sidebars > div").length==2){$("#sidebars").css("width",281)}$("#sidebars").animate({right:-b+3},175)}}if(localStorage["options.sidebaractivation"]=="position"||getValue("options.scrollLayout")==1){$("#sidebar-toggle").hover(function(){if(SORTINGGROUPS===false&&SORTING===false){c()}});$("#sidebars").mouseenter(function(){c()});$("#container").mouseenter(function(){a()})}else{if(getValue("options.scrollLayout")!=1){if(getValue("options.sidebar.showBookmarks")==1){bookmarksLoad("1")}$("#sidebars").mouseleave(function(){a()});$(window).mousewheel(function(g,i){var h=$(g.target).attr("id");var f=$(g.target).attr("class");if(h=="pages"||h=="container"||h=="main"||f=="link"||f=="title"||f=="thumbnail"||f=="thumbnail_container"||f=="thumbnail_extra"){if(i>0){a()}else{c()}}})}}});