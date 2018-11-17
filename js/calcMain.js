window.onload = function calcMain() {
    var count = 0;

    function calc(value) {
        //alert(value);
        if (count <= 16) {
            document.getElementById("numDisplay").innerHTML += value;
            count++;
        }
    }

    function equal() {
        document.getElementById("numDisplay").innerHTML = eval(document.getElementById("numDisplay").innerHTML);
    }

    function clear() {
        if (count >= 1) {
            document.getElementById("numDisplay").innerHTML = '';
            count = 0;
        }
    }
    document.getElementById("one").onclick = function() {
        calc('1')
    };
    document.getElementById("two").onclick = function() {
        calc('2')
    };
    document.getElementById("three").onclick = function() {
        calc('3')
    };
    document.getElementById("four").onclick = function() {
        calc('4')
    };
    document.getElementById("five").onclick = function() {
        calc('5')
    };
    document.getElementById("six").onclick = function() {
        calc('6')
    };
    document.getElementById("seven").onclick = function() {
        calc('7')
    };
    document.getElementById("eight").onclick = function() {
        calc('8')
    };
    document.getElementById("nine").onclick = function() {
        calc('9')
    };
    document.getElementById("zero").onclick = function() {
        calc('0')
    };
    document.getElementById("add").onclick = function() {
        calc('+')
    };
    document.getElementById("subtract").onclick = function() {
        calc('-')
    };
    document.getElementById("multiply").onclick = function() {
        calc('*')
    };
    document.getElementById("divide").onclick = function() {
        calc('/')
    };
    document.getElementById("dec").onclick = function() {
        calc('.')
    };
    document.getElementById("mahbod").onclick = function() {
        calc('mahbod')
    };
    document.getElementById("clear").onclick = function() {
        clear()
    };
    document.getElementById("equal").onclick = function() {
        equal()
    };
    
  
  	var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var spawnLineY = 800;
    var spawnRate = 500;
    var spawnRateOfDescent = -0.50;
    var lastSpawn = -1;
    var objects = [];
    var startTime = Date.now();
    
  	animate();

    function spawnRandomObject() {
        var t;
        if (Math.random() <= 0.50 && Math.random() >= 0.25) {
            t = "rgb(0, 81, 255, 0.6)";
        } else if (Math.random() <= 0.25) {
            t = "rgb(0,0,0, 0.8)";
        } else {
            t = "rgb(255, 42, 77, 0.5)";
        }
        var object = {
            type: t,
            x: Math.random() * (canvas.width - 30) + 15,
            y: spawnLineY,
            r: Math.random() * 35 + 5
        }
        objects.push(object);
    }


    function animate() {
        var time = Date.now();
        if (time > (lastSpawn + spawnRate)) {
            lastSpawn = time;
            spawnRandomObject();
        }
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(0, spawnLineY);
        ctx.lineTo(canvas.width, spawnLineY);
        ctx.stroke();
        for (var i = 0; i < objects.length; i++) {
            var object = objects[i];
            object.y += spawnRateOfDescent;
            ctx.beginPath();
            ctx.arc(object.x, object.y, object.r, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = object.type;
            ctx.fill();
        }
    }
}