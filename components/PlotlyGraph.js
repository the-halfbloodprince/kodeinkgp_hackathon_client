import React from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const PlotlyGraph = () => {
    var data = [
      {
        x: [
          "2013-10-04 22:23:00",
          "2013-11-04 22:23:00",
          "2013-12-04 22:23:00",
        ],
        y: [1, 3, 6],
        type: "scatter",
      },
    ];
    return (
      
    <div className="">
      <Plot
                data={data}
                layout={{paper_bgcolor:'#9168e9',plot_bgcolor:'#9168e9',margin:{l:'0',r:'0',t:'0','b':'35'},width:'490',height:'200'}}
                
        
      />
    </div>
  );
};

export default PlotlyGraph;
