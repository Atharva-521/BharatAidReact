import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const HistogramWithLinePlot = ({ data }) => {
  const day = data ? data.map((element, index) => (index + 1)) : null;
  const svgRef = useRef(null);

  useEffect(() => {
    if (!data || !day) return;

    const width = 600;
    const height = 370;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 33;
    const marginLeft = 27;

    const x = d3.scaleLinear()
      .domain([day[0], day[day.length - 1]])
      .range([marginLeft, width - marginRight]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height - marginBottom, marginTop]);

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => x(day[i]) + 1)
      .attr("width", (width - marginLeft - marginRight) / day.length)
      .attr("y", (d) => y(d))
      .attr("height", (d) => y(0) - y(d))
      .attr("fill", "steelblue");

    // Line plot
    const line = d3.line()
      .x((d, i) => x(day[i]))
      .y((d) => y(d));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", line);

    svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
      .call(g => g.append("text")
        .attr("x", width)
        .attr("y", marginBottom - 4)
        .attr("fill", "currentColor")
        .attr("text-anchor", "end")
        .text("X Axis Label"));

    svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(height / 40))
      .call(g => g.select(".domain").remove())
      .call(g => g.append("text")
        .attr("x", -marginLeft)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("Y Axis Label"));

  }, [data, day]);

  return (
    <div className='w-full h-full'>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default HistogramWithLinePlot;
