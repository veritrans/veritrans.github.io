$(document).ready(function(){$(".sidebar > li").click(function(e){if(!$(e.target).closest("ul.child-menu").length){var l=$(this).children(".child-menu"),s=$(this).children(".caret");$(".sidebar > li").children(".child-menu").not(l).slideUp(),$(".sidebar > li").children(".caret").not(s).removeClass("clicked"),l.slideToggle(),s.toggleClass("clicked")}}),window.location.href.indexOf("/vtweb/")>-1?$(".sidebar > li:nth-child(2) > .child-menu").css("display","block"):window.location.href.indexOf("/vtdirect/")>-1?$(".sidebar > li:nth-child(3) > .child-menu").css("display","block"):window.location.href.indexOf("/sandbox/")>-1?$(".sidebar > li:nth-child(4) > .child-menu").css("display","block"):window.location.href.indexOf("/papi/")>-1?$(".sidebar > li:nth-child(5) > .child-menu").css("display","block"):window.location.href.indexOf("/howto/")>-1?$(".sidebar > li:nth-child(6) > .child-menu").css("display","block"):window.location.href.indexOf("/faq/")>-1&&$(".sidebar > li:nth-child(7) > .child-menu").css("display","block")});