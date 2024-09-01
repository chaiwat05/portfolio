import React from 'react'

function Portfolio() {
  return (
    <>
<div id='Portfolio' className="flex justify-center pt-[30px]">
              <h1 className="w-[300px] text-center text-5xl font-mono bg-purple-500 p-6 rounded-lg text-[#fff] ">Portfolio</h1>
</div>

<div className="hero-content m-auto ">
        <div className="flex justify-around pt-[100px] gap-10">

                <div className="w-[500px] h-[500px] rounded-lg overflow-hidden">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>

                <div className="text-3xl  text-white pl-[100px] ">
                            <h1 className=" font-mono">Chaiwat Ausatpanchi</h1>                  
                            <p className="mt-[30px] font-mono ">
                                            Lorem ipsum dolor sit ametsssss consectetur  
                                           distinctio provident sint quod ducimus  
                                           tempora magnam aliquid ratione debitis 
                            </p>
                            <a className="mt-[50px] flex justify-center btn text-xl text-white bg-purple-500">Connect With Me</a>
                </div>

        </div>
</div>
</>
  )
}

export default Portfolio