function colidiu() {
    var largura = nave.width;
    var altura = nave.height;
    return (xNave + largura) > xInimigo &&
    xNave < (xInimigo + largura) &&
    (yNave + altura) > yInimigo &&
    yNave < (yInimigo + altura)
    }
    function movimentaNaveInimigo(tecla) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (tecla == "ArrowLeft") { // Seta para esquerda
    xNave -= 50;
    xNave = Math.max(0, xNave);
    } else if (tecla == "ArrowRight") { // Seta para direita
    xNave += 50;
    xNave = Math.min(canvas.width - 160, xNave);
    } else if (tecla == "ArrowUp") { // Seta para cima
    yNave -= 50;
    yNave = Math.max(0, yNave);
    } else if (tecla == "ArrowDown") { // Seta para baixo
    yNave += 50;
    yNave = Math.min(canvas.height - nave.height, yNave);
    } else if (tecla == "a") { // Tecla A
    xInimigo -= 50;
    xInimigo = Math.max(0, xInimigo);
    } else if (tecla == "d") { // Tecla D
    xInimigo += 50;
    xInimigo = Math.min(canvas.width - 160, xInimigo);
    } else if (tecla == "w") { // Tecla W
    yInimigo -= 50;
    yInimigo = Math.max(0, yInimigo);
    } else if (tecla == "s") { // Tecla S
    yInimigo += 50;
    yInimigo = Math.min(canvas.height - inimigo.height, yInimigo);
    }
    ctx.drawImage(nave, xNave, yNave);
    ctx.drawImage(inimigo, xInimigo, yInimigo);
    
    if (colidiu()) {
    alert("Chocou uma com a outra!");
    }
    }
    