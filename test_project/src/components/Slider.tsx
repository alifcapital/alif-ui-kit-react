import { useState } from "react"
import { Slider } from "../../../src"

export const SliderApp = () => {
  const [value, setValue] = useState(120);

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <br/>
      <div style={{ width: '300px' }}>
        <Slider  value={value} ariaLabel="slider range"  min={10} max={20} onChange={(value)=> setValue(value)}  />
      </div>
    </div>
  )
}
