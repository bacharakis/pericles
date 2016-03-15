$(document).foundation();
$("#aboutExpand").hide();
$("a.moreExpand").click(function(){
var myLink = this,
    myelement = $(this).attr("rel");
$(myelement).slideToggle('normal', function() {
    $(myLink).text(
        $(this).is(':visible') ? "Less Modules" : "More Modules"
);

});
});
