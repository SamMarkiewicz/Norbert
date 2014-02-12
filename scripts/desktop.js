$('#m-box--navigation').localScroll(10000);
//.parallax(xPosition, speedFactor, outerHeight) options:
//xPosition - Horizontal position of the element
//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
$('header').parallax("50%", 0.1);
$('#m-box-intro').parallax("bottom", 0.1, true);
$('#m-box-instructions').parallax("bottom", 0.4, true);
$('#m-box-demo').parallax("bottom", 0.1, true);
