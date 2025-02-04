import { cn } from "@/lib/utils"

const PropertyPrice = ({value, className}: {value:number, className?:string}) => {
    // const stringValue = value.toFixed(2)
    // const [intValue, floatValue] = stringValue.split('.')
  return (
    <p className={cn('mt-2', className)}>
        <span className="text-[10px] align-super">₦</span>
        <span className="font-mono text-xl">{value.toFixed(2).padEnd(2, '0')} <span className="font-sans text-muted-foreground text-sm">/ anum</span></span>
        {/* <span className="text-[10px] align-super">{floatValue}</span> */}
    </p>
  )
}
export default PropertyPrice