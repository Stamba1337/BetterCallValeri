$(document).ready(function(){

		$("#saulvideointro").show();

		//set source for all youtube links to be called later

		var underpass = '<iframe width="640" height="385" src="https://www.youtube.com/embed/A0GEUbjosc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
		var toplane ='<iframe width="640" height="385" src="https://www.youtube.com/embed/62QJG_LXURE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
		var ageofempires ='<iframe width="640" height="385" src="https://www.youtube.com/embed/WtWP4Aky8SE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
		var bomba ='<iframe width="640" height="385" src="https://www.youtube.com/embed/JsOUrBU-2R0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

		//handle click functionality on video thumbs

		$("#videocontentmodule div").click(function() {

			// get id of selected video
			var selectedVid = $(this).attr('id');

			// set code for sidebar, used when clicked


			//based on selected video, replace image selector image with youtube vid
			switch(selectedVid)
			{
				case "suelink":
					//set main panel to have selected video
					 $("#videocontentmodule").html(underpass);
					 // set right sidebar to have new video selector
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
				 break;
				case "tigertrouble":
					//set main panel to have selected video
					 $("#videocontentmodule").html(toplane);
					 // set right sidebar to have new video selector
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
				 break;
				case "mailbag":
					//set main panel to have selected video
					 $("#videocontentmodule").html(ageofempires);
					 // set right sidebar to have new video selector
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
				 break;
				case "wayfarer":
					//set main panel to have selected video
					 $("#videocontentmodule").html(bomba);
					 // set right sidebar to have new video selector
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
				 break;
				default:
				//set main panel to have selected video
				$("#videocontentmodule").html(underpass);
				 // set right sidebar to have new video selector
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
			};

		});

		// handle clicking of sidebar video selector

		$(".consultationsside").click(function() {

			// get id of selected sidebar video link
			var selectedVidSide = $(this).attr('id');

			//based on selected sidebar video, replace the youtube video in the video area
			switch(selectedVidSide)
			{
				case "suelinkside":
					//set main panel to have selected video
					$("#videocontentmodule").html(underpass);
				break;
				case "tigertroubleside":
					//set main panel to have selected video
					$("#videocontentmodule").html(toplane);
				break;
				case "mailbagside":
					//set main panel to have selected video
					$("#videocontentmodule").html(ageofempires);
				break;
				case "wayfarerside":
					//set main panel to have selected video
					$("#videocontentmodule").html(bomba);
				break;
				default:
					//set main panel to have selected video
					$("#videocontentmodule").html(underpass);
			};

		});

});

function killVideo() {
	$("#flashcontent").remove();
	$("#saulheader").attr("src","media/images/mainheader_saul_update.jpg");
}

function killVideoespanol() {
	$("#enespanol").remove();
}

