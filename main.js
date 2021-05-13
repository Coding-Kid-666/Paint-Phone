var touchEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var screenwidth = screen.width;
    var new_width = screenwidth-70;
    var newheight = screen.height-300;

    if (screenwidth < 992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = newheight;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e){
        //Addictonal Activity start
        console.log("Touch started succesfully.")
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        touchEvent = "touchStart";
        last_position_of_x = e.touches[0].clientX-canvasOffsetLeft;
        last_position_of_y = e.touches[0].clientY-canvasOffsetTop;
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e){

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
        console.log("Touch moved succesfully")
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }


    function clearit(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }