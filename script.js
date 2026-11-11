
document.addEventListener("DOMContentLoaded", function () {

    const marker = document.querySelector("a-marker");
    const status = document.getElementById("status");

    
    marker.addEventListener("markerFound", function () {
        status.innerHTML = "Marker Found";
        status.style.backgroundColor = "green";
    });

   
    marker.addEventListener("markerLost", function () {
        status.innerHTML = "Marker Lost";
        status.style.backgroundColor = "red";
    });

    

    const ball = document.querySelector("#colorBall");

    const colors = ["red", "blue", "green", "yellow", "orange"];

         let colorIndex = 0;

    ball.addEventListener("click", function () {

    colorIndex = (colorIndex + 1) % colors.length;

    ball.setAttribute("color", colors[colorIndex]);

    });

   

    AFRAME.registerComponent('grow-on-click', {

         init: function () {

            this.el.addEventListener('click', () => {

            let currentScale = this.el.object3D.scale;

            currentScale.multiplyScalar(1.2);

        });
    }
    

   });

});
