'use client'
import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"


const PropertyImages = ({images}:{images: string[]}) => {
  const [current, setCurrent] = useState(0)
  return (
    <div className="hidden sm:flex gap-3">
        <div>
           <Image 
            src={images[current]}
            alt="property"
            width={1000}
            height={1000}
            className="min-h-[300px] object-cover object-center"
           />
        </div>
        <div className="grid grid-cols-2 gap-1">
            {images.map((image, index) => (
              <div key={image} onClick={() => setCurrent(index)}>
                <Image 
                  src={image} 
                  alt="prop-image" 
                  width={300} 
                  height={300} 
                  className={cn("object-cover object-center border-2 w-full h-full mr-2 cursor-pointer hover:border-green-600", current === index && 'border-green-500')} />
              </div>
            ))}
        </div>
    </div>
    
  )
}
export default PropertyImages