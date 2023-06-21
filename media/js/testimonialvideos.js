$(document).ready(function () {

    var badgerlinkcontent = '<div><video width="640" height="385" controls><source src="/media/images/hristo.mp4" type="video/mp4"></video></div>';
    var wendylinkcontent = '<div><object width="640" height="385"><param name="movie" value="http://www.youtube.com/v/P-nhEHXQcTs&hl=en_US&fs=1&"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/P-nhEHXQcTs&hl=en_US&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="640" height="385"></embed></object></div>';
    var carllinkcontent = '<div><video width="640" height="385" controls><source src="/media/images/pesho.mp4" type="video/mp4"></video></div>';

    $("#videocontentmodule div").click(function () {

        // get id of selected video
        var selectedVid = $(this).attr('id');


        //based on selected video, replace image selector image with youtube vid
        switch (selectedVid) {
            case "carl":
                //set main panel to have selected video 				
                $("#videocontentmodule").html(carllinkcontent);
                // set right sidebar to have new video selector 
                $("#rightcoltemp").hide();
                $("#rightcolnav").show();
                break;
            case "wendy":
                //set main panel to have selected video 				
                $("#videocontentmodule").html(wendylinkcontent);
                $("#rightcoltemp").hide();
                $("#rightcolnav").show();
                break;
            case "badger":
                //set main panel to have selected video 
                $("#videocontentmodule").html(badgerlinkcontent);
                // set right sidebar to have new video selector 
                $("#rightcoltemp").hide();
                $("#rightcolnav").show();
                break;
            default:
                //set main panel to have selected video 				
                $("#videocontentmodule").html(carllinkcontent);
                // set right sidebar to have new video selector 
                $("#rightcoltemp").hide();
                $("#rightcolnav").show();
        };

    });

    // handle clicking of sidebar video selector		

    $(".testimonialside").click(function () {

        // get id of selected sidebar video link
        var selectedVidSide = $(this).attr('id');

        //based on selected sidebar video, replace the youtube video in the video area
        switch (selectedVidSide) {
            case "carlside":
                //set main panel to have selected video 				
                $("#videocontentmodule").html(carllinkcontent);
                break;
            case "wendyside":
                //set main panel to have selected video 				
                $("#videocontentmodule").html(wendylinkcontent);
                break;
            case "badgerside":
                //set main panel to have selected video 
                $("#videocontentmodule").html(badgerlinkcontent);
                break;
            default:
                //set main panel to have selected video 				
                $("#videocontentmodule").html(carllinkcontent);
        };

    });

});


function killVideoespanol() {
    $("#enespanol").remove();
}

