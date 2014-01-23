'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Oh Yea");
		$(".jumbotron p").toggleClass("active");
	});

	$(".project").click(function(e) {
		$(".project p").toggleClass("active");
	});



	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	// a click handler of the button that changes the width
	// and the description
	$("#submitBtn").click(updateProject);
}

    // the event that update the width and description of the 
    // project div
function updateProject(e) {
    //read the chosen id
    var projectid = $('#project').val();
    $(projectid).animate({
    	width: $('#width').val()
    });
    // read the new description
	var descript = $('#description').val();
	$(projectid + " .project-description ").text(descript);
	$(".project").click(function(e) {
		$(".project p").toggleClass("active");
	});
}


function projectClick(e){
	

	e.preventDefault();
	
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	console.log("Number of matching items: "+ jumbotronHeader.length); 
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) {
		containingProject.append("<div class= 'project-description'><p>Descrition of the project.</p></div>");
	}
	else {
		$(".project p").toggleClass("active");
	}

	//toggle project description
	$(".project p").toggleClass("active");

	
}