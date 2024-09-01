import React from 'react'

export default function AboutMe() 
{
  return (
<>

<div id="aboutme" className="flex justify-center">
              <h1 className="w-[300px] text-center text-5xl font-mono bg-red-500 p-6 rounded-lg text-[#fff] ">AboutMe</h1>
</div>             
<div className="bg-base-100 p-auto m-auto">
<div className="hero-content flex-row-reverse p-[50px]">  
    
              <img
                   src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                   class=" w-[500px] h-[300px] shadow-2xl" />

  <div>
              <p className="py-[20px] text-3xl px-[110px] font-mono text-[#fff]">
                    Provident cupiditate voluptatem et in. Quaeratasdasdasd 
                    fugiat ut assumenda excepturi exercitationemasdasdasllld<br/> 
                    quasi. In deleniti eaque autllllll repudiandae et a idlllllll nillllsi.
              </p>

    <div className="pl-[250px] pt-[30px] ">
      <div class=" w-[310px]">
             <progress className="progress progress-error w-full" value="80" max="100"></progress>
                     <div class=" flex items-center justify-center text-white">
                                                HTML
                     </div>
      </div>

      <div class="w-[310px] pt-[10px]">
              <progress className="progress progress-error w-full" value="40" max="100"></progress>
                      <div class="  flex items-center justify-center text-white">
                                                Power
                      </div>            
      </div>
      
      <div class="w-[310px] pt-[10px]">
              <progress className="progress progress-error w-full" value="70" max="100"></progress>
                      <div class="  flex items-center justify-center text-white">
                                                JaVa
                      </div>            
      </div>

      <div class="w-[310px] pt-[10px] pb-[25px]">
              <progress className="progress progress-error w-full" value="100" max="100"></progress>
                      <div class="  flex items-center justify-center text-white">
                                                React
                      </div>            
      </div>

    </div>
  </div>
</div>
</div>
</>
  )
}
