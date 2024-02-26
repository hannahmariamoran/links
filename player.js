import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const player = d3
    .select('#player')
    
const svg = player
    .append("svg")
    .attr('viewBox', '0 0 600 400')
    .attr('width', 550)
    .attr('height', 350)
    .style('background', '#F9F5EE')

const Base =  svg
    .append('rect')
    .attr('width', 500)
    .attr('height', 350)
    .attr('x', 50)
    .attr('y', 25)
    .attr('fill', '#F9F5EE')
    .attr('stroke', '#539FB0',) 
    .attr('stroke-width', 3)
    .attr('rx', 30) 
    .attr('ry', 30); 

// creating the record
const CircleOuter =  svg
    .append('ellipse')
    .attr('rx', 140)
    .attr('ry', 140)
    .attr('cx', 310)
    .attr('cy', 200)
    .attr('fill', '#539FB0');

const CircleMiddle =  svg
    .append('ellipse')
    .attr('rx', 60)
    .attr('ry', 60)
    .attr('cx', 310)
    .attr('cy', 200)
    .attr('fill', '#F9F5EE');

const CircleInner =  svg
    .append('ellipse')
    .attr('rx', 5)
    .attr('ry', 5)
    .attr('cx', 310)
    .attr('cy', 200)
    .attr('fill', '#539FB0');

// creating the turn buttons

const TurnButtonOne =  svg
    .append('ellipse')
    .attr('rx', 15)
    .attr('ry', 15)
    .attr('cx', 520)
    .attr('cy', 345)
    .attr('fill', '#539FB0');

const TurnButtonTwo =  svg
    .append('ellipse')
    .attr('rx', 15)
    .attr('ry', 15)
    .attr('cx', 520)
    .attr('cy', 305)
    .attr('fill', '#539FB0');

// creating the needle arm

const Rectangle1 =  svg
    .append('rect')
    .attr('width', 30)
    .attr('height', 40)
    .attr('x', 80)
    .attr('y', 105)
    .attr('fill', '#539FB0')
    .attr('rx', 5) 
    .attr('ry', 5); 

const Rectangle2 =  svg
    .append('rect')
    .attr('width', 30)
    .attr('height', 40)
    .attr('x', 80)
    .attr('y', 305)
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
    .attr("x1", 95)
    .attr("y1", 130)
    .attr("x2", 95)
    .attr("y2", 202); 

const Line2 =  svg
    .append('line')
    .attr('x', 40)
    .attr('y', 90)
    .attr('fill', 'none')
    .attr('stroke', '#539FB0',) 
    .attr('stroke-width', 6)
    .attr("x1", 95)
    .attr("y1", 200)
    .attr("x2", 145)
    .attr("y2", 285); 

const CircleOne =  svg
    .append('ellipse')
    .attr('rx', 12)
    .attr('ry', 12)
    .attr('cx', 95)
    .attr('cy', 165)
    .attr('fill', '#539FB0');

const Line3 =  svg
    .append('line')
    .attr('x', 40)
    .attr('y', 90)
    .attr('fill', 'none')
    .attr('stroke', '#539FB0',) 
    .attr('stroke-width', 2)
    .attr("x1", 120)
    .attr("y1", 300)
    .attr("x2", 145)
    .attr("y2", 295); 


