import React from "react";
import PlotlyGraph from "./PlotlyGraph";



const Graph = () => {
	

  return (
	  <div className='font-poppins  font-bold rounded-3xl bg-gray-800 w-3/4 p-5 overflow-hidden'>
		  <p>Current Market Price</p>
		  <p> $ 468354</p>
		  <PlotlyGraph/>
	</div>
  );
};

export default Graph;
