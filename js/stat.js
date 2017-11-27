'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(100, 20);
  ctx.bezierCurveTo(120, 20, 380, 10, 530, 20);
  ctx.bezierCurveTo(530, 20, 540, 155, 530, 290);
  ctx.bezierCurveTo(530, 290, 380, 295, 120, 290);
  ctx.bezierCurveTo(120, 290, 110, 155, 120, 20);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.bezierCurveTo(110, 10, 370, 0, 520, 10);
  ctx.bezierCurveTo(520, 10, 530, 145, 520, 280);
  ctx.bezierCurveTo(520, 280, 370, 285, 110, 280);
  ctx.bezierCurveTo(110, 280, 100, 145, 110, 10);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var barHeight = 150;
  var barWidth = 40;
  var indent = 50;
  var initialX = 140;
  var initialY = 100;
  var step = barHeight / (max - 0);
  var lineHeight = 15;
  var yForName = 270;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = 'rgba(0, 0, 255, 1)';
    }

    ctx.fillText(names[i], initialX + indent * i + barWidth * i, yForName);
    ctx.fillText(Math.round(times[i]), initialX + indent * i + barWidth * i, initialY - lineHeight);
    ctx.fillRect(initialX + indent * i + barWidth * i, initialY + barHeight - times[i] * step, barWidth, times[i] * step);
  }
};
