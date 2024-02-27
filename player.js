import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const player = d3
    .select('#player')
    
const svg = player
    .append("svg")
    .attr('viewBox', '0 0 500 350')
    .attr('width', 500)
    .attr('height', 350)
    .style('background', '#F9F5EE')

const Base =  svg
    .append('rect')
    .attr('width', 495)
    .attr('height', 345)
    .attr('x', 1)
    .attr('y', 1)
    .attr('fill', '#F9F5EE')
    .attr('stroke', '#539FB0',) 
    .attr('stroke-width', 2)
    .attr('rx', 30) 
    .attr('ry', 30); 

// creating the record
const CircleOuter =  svg
    .append('ellipse')
    .attr('rx', 140)
    .attr('ry', 140)
    .attr('cx', 250)
    .attr('cy', 175)
    .attr('fill', '#539FB0');

const CircleMiddle =  svg
    .append('ellipse')
    .attr('rx', 60)
    .attr('ry', 60)
    .attr('cx', 250)
    .attr('cy', 175)
    .attr('fill', '#F9F5EE');

const CircleInner =  svg
    .append('ellipse')
    .attr('rx', 5)
    .attr('ry', 5)
    .attr('cx', 250)
    .attr('cy', 175)
    .attr('fill', '#539FB0');

// creating the turn buttons

const TurnButtonOne =  svg
    .append('ellipse')
    .attr('rx', 15)
    .attr('ry', 15)
    .attr('cx', 465)
    .attr('cy', 280)
    .attr('fill', '#539FB0');

const TurnButtonTwo =  svg
    .append('ellipse')
    .attr('rx', 15)
    .attr('ry', 15)
    .attr('cx', 465)
    .attr('cy', 315)
    .attr('fill', '#539FB0');

// creating the needle arm

const Rectangle1 =  svg
    .append('rect')
    .attr('width', 30)
    .attr('height', 40)
    .attr('x', 40)
    .attr('y', 90)
    .attr('fill', '#539FB0')
    .attr('rx', 5) 
    .attr('ry', 5); 

const Rectangle2 =  svg
    .append('rect')
    .attr('width', 30)
    .attr('height', 40)
    .attr('x', 40)
    .attr('y', 290)
    .attr('fill', '#539FB0')
    .style('transform', 'rotate(-10deg)')
    .attr('rx', 5) 
    .attr('ry', 5); 

const Line1 =  svg
    .append('line')
    .attr('x', 40)
    .attr('y', 90)
    .attr('fill', 'none')
    .attr('stroke', '#539FB0',) 
    .attr('stroke-width', 6)
    .attr("x1", 55)
    .attr("y1", 130)
    .attr("x2", 55)
    .attr("y2", 202); 

const Line2 =  svg
    .append('line')
    .attr('x', 40)
    .attr('y', 90)
    .attr('fill', 'none')
    .attr('stroke', '#539FB0',) 
    .attr('stroke-width', 6)
    .attr("x1", 55)
    .attr("y1", 200)
    .attr("x2", 110)
    .attr("y2", 285); 

const CircleOne =  svg
    .append('ellipse')
    .attr('rx', 12)
    .attr('ry', 12)
    .attr('cx', 55)
    .attr('cy', 165)
    .attr('fill', '#539FB0');

const Line3 =  svg
    .append('line')
    .attr('x', 40)
    .attr('y', 90)
    .attr('fill', 'none')
    .attr('stroke', '#539FB0',) 
    .attr('stroke-width', 2)
    .attr("x1", 80)
    .attr("y1", 300)
    .attr("x2", 105)
    .attr("y2", 295); 


