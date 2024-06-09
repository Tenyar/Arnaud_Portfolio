//* This is a script for training purposes for css modification with JQuery framework.

// Ready function starting when the page is resized
$(window).resize(adjustContent);

function adjustContent(){
    // to not be in conflict with the @media inside the css.
    // For each container of my project if there's > 1 project or else, change style accordingly.
    $('.Table_Project').each(function () {
        // Numbers of project for one section ('.container')
        var projectList = [];
        // Random color selector for fun :)
        /*
        var colors = ["#ff0000","blue","gray", "green", "yellow", "red", "orange", "pink"];
        // Select a random index
        var rand = colors[Math.floor(Math.random() * colors.length)];
        // For test only
        $(this).children('.container').css('background-color', rand);
        */

        $(this).children('.container').each(function(){
            // For each <div>/.container inside the section we put it inside the array.
            projectList.push($(this));
        });
        // For each children of .container
        console.log("Length : " + projectList.length)
        if(projectList.length == 1){
            if($(window).width() > 980){
                projectList[0].css('border-left', 'none');
                projectList[0].css('border-right', 'none');
            } else {
                projectList[0].css('border-left', '0.1vh solid black');
                projectList[0].css('border-right', '0.1vh solid black');
            }
        } else {
            //for (var i = 1; i <= projectList.length; i++){
            //  if (i == projectList.length){
                // projectList[projectList.length-1].css('border-right', 'none');
                //}
            //}
        }
        console.log(projectList);
    });
}

