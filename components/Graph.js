import React from "react";
import PlotlyGraph from "./PlotlyGraph";



const Graph = () => {
	

  return (
	  <div className='font-poppins font-bold rounded-3xl bg-[#9168e9] w-3/4 p-5 overflow-hidden flex flex-col text-end'>
		  <p className = 'text-xs'>Current Market Price</p>
		  <p className = 'text-2xl'> $ 468354</p>
		  <PlotlyGraph/>
	</div>
  );
};

export default Graph;
