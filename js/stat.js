'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 20;
var GAP_TEXT_TOP = 10;
var GAP_TEXT_BOTTOM = 30;
var GAP = 50;
var FONT_GAP = 40;
var TEXT_HEIGHT = 10;
var TEXT_HEIGHT__BAR = 5;
var BAR_HEIGHT = 150;
var barWidth = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_TEXT_TOP, CLOUD_Y + GAP_TEXT_TOP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_TEXT_TOP, CLOUD_Y + TEXT_HEIGHT + 2 * GAP_TEXT_TOP);

  var maxTime = getMaxElement(times);
  var playerName = 'Вы';

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + i * (FONT_GAP + GAP), CLOUD_HEIGTH - GAP_TEXT_BOTTOM);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + i * (FONT_GAP + GAP), CLOUD_HEIGTH - GAP - ((BAR_HEIGHT * times[i]) / maxTime) - TEXT_HEIGHT__BAR);
    ctx.fillStyle = ((names[i] === playerName) ? 'rgba(255, 0, 0, 1)' : 'hsla(210, ' + (Math.random() * 100) + '%, 50%, 1)');
    ctx.fillRect(CLOUD_X + GAP + i * (barWidth + GAP), TEXT_HEIGHT + CLOUD_HEIGTH - GAP, barWidth, -1 * ((BAR_HEIGHT * times[i]) / maxTime));
  }
};
