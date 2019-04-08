d3.select('h1').
    style('color', 'red')
    .attr('class', 'heading')
    .text("update heading tag")

d3.select('body').append('p').text('first pragraph');
d3.select('body').append('p').text('second pragraph');
d3.select('body').append('p').text('third pragraph');
d3.select('body').append('p').text('forth pragraph');


d3.selectAll('body').style('color','blue')