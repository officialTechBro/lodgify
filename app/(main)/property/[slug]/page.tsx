import { getPropertyBySlug } from "@/lib/actions/product.actions"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import PropertyPrice from "@/components/global/property-price"

import PropertyImages from "@/components/properties/property-images"
import PropertyImageCarousel from "@/components/properties/property-carousel"



const PropertyDetailsPage = async (props: {
    params: Promise<{slug: string}>
}) => {
    const {slug} = await props.params
    const property = await getPropertyBySlug(slug)
    if (!property) notFound()

  return <>
    <section>
      {/* images row */}
      <div>
        <div className="hidden md:flex md:items-center">
          <PropertyImages images={property.images} />
        </div>
        <div className="flex-center md:hidden">
          <PropertyImageCarousel images={property.images} />
        </div>
      </div>
      {/* sec section */}
      <div className="grid grid-cols-1 md:grid-cols-4 space-y-10">
            {/* details section */}
            <div className="col-span-3 p-5">
              <div className="flex flex-col gap-6">
                <h1 className="text-xl font-semibold font-mono">{property.name}</h1>
                <p className="text-muted-foreground text-sm font-mono">
                  <span className="pr-2">• {property.guests} guests</span>
                  <span className="pr-2">• {property.bedrooms} bedroom</span>
                  <span className="pr-2">• {property.beds} bed</span>
                  <span className="pr-2">• {property.beds} bath</span>
                </p>
                <div className="flex-center border rounded-md max-w-sm">
                    <h3 className="p-5 border-r-2">★ {property.rating} ratings</h3>
                    <h3 className="p-5">{property.numReviews} reviews</h3>
                </div>
                <div className="mt-10">
                  <p className="font-semibold font-mono text-[19px]">Description</p>
                  <p>{property.description}</p>
                </div>
              </div>
            </div>
            
            {/* action col */}
            <div>
              <Card>
                <CardContent className="p-4">
                  <div className="mb-2 flex justify-between items-center">
                    <PropertyPrice value={Number(property.price)} />
                  </div>
                  <Button className="w-full">Reserve</Button>
                </CardContent>
              </Card>
            </div>
      </div>
      
    </section>
  </>
}
export default PropertyDetailsPage