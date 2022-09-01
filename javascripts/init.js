const initWidth = 1300,
    initHeight = 720,
    initMinFont = 13,
    initMaxFont = 100,
    initFlag = "none";// none / fa/ f / a

var initTop = 40;

var globalWidth = initWidth,
    globalHeight = initHeight,
    globalMinFont = initMinFont,
    globalMaxFont = initMaxFont,
    globalFlag = initFlag,
    globalTop = initTop,
    globalData,
    isRel = document.getElementById("av").checked;

var allW;


const color = d3.scale.category10();
const axis = d3.svg.axis().ticks(4);
const axisFont = d3.svg.axis().tickValues([0, 25, 50, 75, 100]);

d3.select('#widthSlider').call(d3.slider()
    .axis(axis)
    .value([0, initWidth])
    .min(0)
    .max(maxWidth)
    .step(20)
    .on("slide", function (evt, value) {
        d3.select('#widthText').text(value[1]);
    }))
;
d3.select('#heightSlider').call(d3.slider()
    .axis(axis)
    .value([0, initHeight])
    .min(0)
    .max(maxHeight)
    .step(20)
    .on("slide", function (evt, value) {
        d3.select('#heightText').text(value[1]);
    }))
;
d3.select('#fontSlider').call(d3.slider().axis(axisFont).value([initMinFont, initMaxFont]).on("slide", function (evt, value) {
    d3.select('#fontMin').text(value[0].toFixed(0));
    d3.select('#fontMax').text(value[1].toFixed(0));
}));

d3.select('#topRankSlider').call(d3.slider()
    .axis(axis)
    .value([0, initTop])
    .min(0)
    .max(maxTop)
    .step(5)
    .on("slide", function (evt, value) {
        d3.select('#topRankText').text(value[1]);
    }))
;
const metricName = [["Importance value (tf-idf ratio) "],["Compactness "],["All Words Area/Stream Area"],
    ["Weighted Display Rate"],["Average Normalized Frequency "]];

var metric = d3.select("body").append("svg")
    .attr("width",360)
    .attr("height", 250)
    .attr("class","metricSVG")
    .attr("id","metricSVG")
    .append("g");






var metric2 = d3.select("body").append("svg")
    .attr("width",100)
    .attr("height", 300)
    .attr("class","metricSVG2")
    .attr("id","metricSVG2");
