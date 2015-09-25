function mc_pageinfo(author,published,updated) {
	document.write('<div class="pageinfo">');
	if (author) {
		if (author == "Commissioned") {
			document.write('Author: <a href="/home/team/commissioned.html">Commissioned</a>');
			} else if (author == "Dave Owen") {
			document.write('Author: <a href="/home/team/dave-owen.html">Dave Owen</a>');
			} else {
			document.write('Author: ' + author);
			}
		if (published || updated) {
			document.write(', ');
		}
	}
	if (published) {
		document.write('First published: ' + published);
		if (updated) {
			document.write(', ');
		}
	}
	if (updated) {
		document.write('Last updated: ' + updated);
	}
	document.write('</div>');
}
// Mobile
function mc_menu() {
   var mc_nav = document.getElementById('nav');
   if (mc_nav.style.display == 'block') {
      mc_nav.style.display='none';
   } else {
      mc_nav.style.display='block';
   }
}
// Resize Images
var viewPortWidth = 1000;
var viewPortHeight = 800;
 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
 if (typeof window.innerWidth != 'undefined') {
   viewPortWidth = window.innerWidth,
   viewPortHeight = window.innerHeight
 }
// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
 else if (typeof document.documentElement != 'undefined'
 && typeof document.documentElement.clientWidth !=
 'undefined' && document.documentElement.clientWidth != 0) {
    viewPortWidth = document.documentElement.clientWidth,
    viewPortHeight = document.documentElement.clientHeight
 }
 // older versions of IE
 else {
   viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
   viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
 }
function resizeImg(id) {
   var img = document.getElementById(id);
   var imgwidth = img.style.pixelWidth;
   if (imgwidth > viewPortWidth*0.93) {
      img.style.width = (viewPortWidth*0.9) + "px";
      img.style.height = 'auto';
   }
}