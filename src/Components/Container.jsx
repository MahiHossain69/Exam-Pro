import React from "react"


  
    function Container({children,className}) {
        return (
          <div className={`Container mx-auto px-[150px] ${className}`}>{children}</div>
        )
      }
  


export default Container
