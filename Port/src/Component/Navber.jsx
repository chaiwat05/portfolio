import React, { useState } from 'react';
export default function Navber() {
  return (
<>

<div className="navbar bg-base-300">
          <div className="flex-1">
                  <a className="btn btn-ghost text-xl text-white bg-purple-800">Home</a>
          </div>
          <div className="flex">
                  <ul className="menu menu-horizontal px-1 font-bold">
                        <li className="btn bg-purple-500  text-white"><p onClink={()=>setMenu(home)}>Portfolio</p></li>
                        <li className="btn bg-red-500     text-white"><a href="#aboutme">About Me</a></li>
                        <li className="btn bg-orange-500  text-white"><p onClink={()=>setMenu(Skill)}>Skill</p></li>
                        <li className="btn bg-yellow-500  text-white"><p>Project</p></li>
                  </ul>
          </div>
</div>

</>
)
}

  