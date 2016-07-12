$(".category-name").click(function(e) {
	e.preventDefault();
	$(".category-name").addClass("active");
	$(".subcategory-name").removeClass("active");
	$(".form-subcategory").addClass("hidden");
	$(".form-category").removeClass("hidden");

});


$(".subcategory-name").click(function(e) {
	e.preventDefault();
	$(".subcategory-name").addClass("active");
	$(".category-name").removeClass("active");
	$(".form-category").addClass("hidden");
	$(".form-subcategory").removeClass("hidden");

})

