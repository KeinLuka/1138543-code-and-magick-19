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
var TEXT_HEIGHT_BAR = 5;
var BAR_HEIGHT = 150;
var barWidth = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
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

  names.forEach(function (elem, i) {
    var leftMargin = CLOUD_X + GAP + i * (FONT_GAP + GAP);
    var positionName = CLOUD_HEIGTH - GAP_TEXT_BOTTOM;
    var positionTime = CLOUD_HEIGTH - GAP - ((BAR_HEIGHT * times[i]) / maxTime) - TEXT_HEIGHT_BAR;
    var positionRectY = TEXT_HEIGHT + CLOUD_HEIGTH - GAP;
    var barHeight = -1 * ((BAR_HEIGHT * times[i]) / maxTime);
    var colorRect = ((elem === playerName) ? 'rgba(255, 0, 0, 1)' : 'hsla(210, ' + (Math.random() * 100) + '%, 50%, 1)');
    ctx.fillStyle = '#000';
    ctx.fillText(elem, leftMargin, positionName);
    ctx.fillText(Math.round(times[i]), leftMargin, positionTime);
    ctx.fillStyle = colorRect;
    ctx.fillRect(leftMargin, positionRectY, barWidth, barHeight);
  });
};
