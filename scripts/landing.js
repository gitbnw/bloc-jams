             var revealPoint = function(el) {

                 el.style.opacity = 1;
                 el.style.transform = "scaleX(1) translateY(0)";
                 el.style.msTransform = "scaleX(1) translateY(0)";
                 el.style.WebkitTransform = "scaleX(1) translateY(0)";

             };
             var points = document.getElementsByClassName('point');

             for (var i = 0; i < points.length; i++) {
                 console.log(points[i])
                 revealPoint(points[i]);
             }
             