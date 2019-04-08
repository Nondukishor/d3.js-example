
// d3.select("body").style("background-color", "black");
// d3.selectAll("p").style("color", "blue");

// another way
// var paragraphs = document.getElementsByTagName("p");
// for (var i = 0; i < paragraphs.length; i++) {
//   var paragraph = paragraphs.item(i);
//   paragraph.style.setProperty("color", "blue", null);
// }


//this random color in pagraph tag

// d3.selectAll("p").style("color", function () {
//     return "hsl(" + Math.random() * 360 + ",100%,50%)";
// });

//color paragph where p index devided by 2

// d3.selectAll("p").style("color", function (d, i) {
//     return i % 2 ? "#fff" : "#eee";
// });

//font size declearation

// d3.selectAll("p")
//     .data([4, 8, 15, 16, 23, 42])
//     .style("font-size", function (d) { return d + "px"; });


//create and append p element in body 

// d3.select("body")
//     .selectAll("p")
//     .data([4, 8, 15, 16, 23, 42])
//     .enter().append("p")
//     .text(function (d) { return "I’m number " + d + "!"; });



//update p tag
// var p = d3.select('body')
//     .selectAll('p')
//     .data([4, 8, 15, 16, 23, 42])
//     .text((d) => {
//         return d;
//     })

//append p tag 
// p.enter().append('p')
//     .text((d) => { return d; });

//exit p tag
// p.exit().remove();

// d3.selectAll("circle").transition()
//     .duration(750)
//     .delay(function (d, i) { return i * 10; })
//     .attr("r", function (d) { return Math.sqrt(d * scale); });









var data = [30, 86, 168, 281, 303, 365];

d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("width", function (d) { return d * 2 + "px"; })
    .text(function (d) { return '$ ' + d; });





