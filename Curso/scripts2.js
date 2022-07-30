var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

    var nodes = [];

    for(var i = 0; i < 100; i++) {
        nodes.push ({
            x: Math.random() * 600,
            y: Math.random() * œ600
        });
    }
    

    for(var i = 0; i < 100; i++) {
        var node = nodes[i];
        context.beginPath();
        context.arc(node.x, node.y, 2, 0, Math.PI * 2);
        context.fill();
    }