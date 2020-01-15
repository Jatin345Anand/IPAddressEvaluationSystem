window.addEventListener('load', init);
function init() {
    console.log('File has been loaded...');
    document.querySelector("#hip").addEventListener('clik', doPress);
}
function doPress() { console.log('Pressed'); };
// var dataset =[1,2,3,4,5,6,7,8,9];
var dataset = [80, 100, 56, 34, 123, 44, 566];
d3.select();
d3.selectAll();
d3.select('h3').style('color', 'blue').attr('class', 'heading').text('BAR CHART');
// d3.select('body').append('h4').text('IP DETAILS');
// d3.select('body').selectAll('p').data(dataset).enter().append('p').text('D3 is awesome') 
//   .text(function(d){return d;});
var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);
var svg = d3.select('svg').attr('width', svgWidth).attr('height', svgHeight);
var barChart = svg.selectAll('rect').data(dataset).enter().append('rect').attr('y', function (d) { return svgHeight - d; })
    .attr('height', function (d) { return d; })
    .attr('width', barWidth - barPadding)
    .attr('class', 'bar')
    .attr('transform', function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    })
