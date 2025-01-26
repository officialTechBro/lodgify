import PropertyCard from "./propertyCard"
import { PropertyProps } from "@/utils/types"

const PropertyList = ({data, limit}: {data: PropertyProps[], limit?: number}) => {
  const limitedProperties = limit ? data.slice(0, limit) : data
  return <div className="my-10">
    {data.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {limitedProperties.map((property:PropertyProps) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </div>
    ) : (
      <div>
        <p>No properties found</p>
      </div>
    )}
  </div>
}
export default PropertyList