"use strict";(function(){var a=devhd.pkg("pages");a.ChooserPage=function(){};var b=a.ChooserPage.prototype=new a.BasePage();b.service=function(d,c){this.pageInfo=d;this.width=c.width;this.initBase(c);this.startRenderHTML()};b.destroy=function(){this.destroyBase()};b.allowsSideArea=function(){return false};b.allowsPageHeader=function(){return true};b.startRenderHTML=function(){this.feedly.pushContext({uri:this.pageInfo.uri,pageNumber:this.pageInfo.pageNumber,title:"chooser",level:1});
this.feedly.clearNbrPages();this.feedly.setPageTitle(templates.page.chooser.title());var c=this;this.suggesto.askEssentials({alpha:false},function(d){c.pageElem.innerHTML=templates.page.chooser.layout(d)})};b.onMixIncluded=function(c){var d=this.element(c);if(d!=null){d.className="included"}};b.onMixExcluded=function(c){var d=this.element(c);if(d!=null){d.className="excluded"
}}})();