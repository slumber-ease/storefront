jQuery(document).ready(function(){
	//Right Click Protection
	//$(document).bind("contextmenu",function(e){ return false;});
	
	//Content Area Mods
	//Content Area Mods
	$(".pagecontainer > table:eq(1) tr:first td:first").addClass("org-background");
	$(".org-background table:eq(1)").addClass("org-content");
	$(".org-background table:eq(3)").addClass("content-middle");
	$(".v4stw").addClass("slider-content-middle");
	
	//Getting and Setting Store Categories
	if($("#org-categories").length > 0) {
		if($("#LeftPanel .lcat").length > 0) {
			$("#org-categories").html($("#LeftPanel .lcat").html());
		}
		$("#org-categories ul[class=lev1]").find("li:last").addClass("org-lastitem");
	}
	
	//Search Box
	var stxt = $("#org-search #org-input").find("input[class=v4sbox]").val();
	$("#org-search #org-input").find("input[class=v4sbox]").focus(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
	$("#org-search #org-input").find("input[class=v4sbox]").blur(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == "") {
			$("#org-search #org-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$("#org-search #org-submit").find("input").click(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
    
	//Footer
	var d = new Date();
	var footer = "\n\r<div class=\"org-wrapcens\">\n<div id=\"org-footer\">\n\n<div class=\"footer-area\">\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-4 text-center\">\n<a href=\"https:\/\/my.ebay.co.uk\/ws\/eBayISAPI.dll?AcceptSavedSeller&amp;mode=0&amp;preference=0&amp;ssPageName=STRK:MEFS:ADDMP&amp;sellerid=slumberease\" class=\"footer-btn\" target=\"_blank\"><i class=\"fa fa-heart\" aria-hidden=\"true\"><\/i> add us to your favourites<\/a>\n<\/div>\n<div class=\"col-md-4\">\n<div class=\"logo text-center\">\n<a href=\"http:\/\/www.ebaystores.co.uk\/slumberease\"><img src=\"https:\/\/slumber-ease.github.io\/storefront\/images\/logo.png\" alt=\"\"><\/a>\n<\/div>\n<\/div>\n<div class=\"col-md-4 text-center\">\n<a href=\"https:\/\/my.ebay.co.uk\/ws\/eBayISAPI.dll?AcceptSavedSeller&amp;sellerid=slumberease&amp;ssPageName=STRK:MEFS:ADDSTR&amp;rt=nc\" class=\"footer-btn\" target=\"_blank\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"><\/i> subscribe to our newsletter<\/a>\n<\/div>\n<\/div>\n<h3>new furniture, new you<\/h3>\n<\/div>\n<\/div>\n<div class=\"footer-bottom-area\">\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n<div class=\"footer-menu\">\n<ul>\n<li><a href=\"http:\/\/www.ebaystores.co.uk\/slumberease\">Home<\/a><\/li>\n<li><a href=\"http:\/\/www.ebaystores.co.uk\/slumberease\/about-us\">About Us<\/a><\/li>\n<li><a href=\"http:\/\/www.ebaystores.co.uk\/slumberease\/payments\">payments<\/a><\/li>\n<li><a href=\"http:\/\/www.ebaystores.co.uk\/slumberease\/delivery\">Delivery<\/a><\/li>\n<li><a href=\"http:\/\/www.ebaystores.co.uk\/slumberease\/returns\">Returns<\/a><\/li>\n<li><a href=\"https:\/\/www.ebay.co.uk\/fdbk\/feedback_profile\/slumber-ease?filter=feedback_page:All&amp;_trksid=p2545226.m2531.l4585\" target=\"_blank\">Feedback<\/a><\/li>\n<li><a href=\"http:\/\/contact.ebay.co.uk\/ws\/eBayISAPI.dll?FindAnswers&amp;requested=slumber-ease&amp;_trksid=p2545226.m2531.l4583&amp;rt=nc\" target=\"_blank\">Contact Us<\/a><\/li>\n<\/ul>\n<\/div>\n\n<\/div>\n<\/div>\n<div class=\"row\">\n<div class=\"col-md-12 text-center\">\n<p><b>Copyright @ 2021, All rights reserved.<\/b><\/p>\n<\/div>\n<\/div>\n<\/div>\n<\/div>\n\n<\/div>\n<\/div>";
	
    if(pageName != "PageAboutMeViewStore") {
		if($(".org-content").length > 0) {
			$(".org-content").after(footer);			
		}
	}
});
