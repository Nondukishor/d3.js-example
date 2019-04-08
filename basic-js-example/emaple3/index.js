var dataset = [1, 2, 3, 4, 5, 6]
d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    // .text("D3 is awsome!!");
    .text((d)=>{ return d})