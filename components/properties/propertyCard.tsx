import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardContent } from "../ui/card"
import PropertyPrice from "../global/property-price"
import { PropertyProps } from "@/utils/types"

const PropertyCard = ({property}: {property: PropertyProps}) => {
  return <Card className="w-full max-w-sm">
    <CardHeader className="p-0 items-center">
        <Link href={`/property/${property.slug}`}>
            <Image 
                src={property.images[1]} 
                alt={property.name}
                height={300}
                width={300}
                sizes="100vw"
                priority={true}
                className="w-full h-full object-cover"
            />
        </Link>
    </CardHeader>
    <CardContent className="p-4 flex-between gap-4">
        <div>
            <h3 className="text-sm font-semibold tracking-wider">{property.category}, {property.country}</h3>
            <h3 className="text-muted-foreground text-sm">{property.name}</h3>
            <PropertyPrice value={Number(property.price)} className="text-md " />
        </div>
        <div className="flex-center gap-2">
            ★ <span className="text-xs font-bold font-mono">{property.rating}</span>
        </div>
    </CardContent>
  </Card>
}
export default PropertyCard