// import sampleData from "@/db/sample-data"
import PropertyList from "@/components/properties/property-list"
import { getLatestProperty } from "@/lib/actions/product.actions"

const HomePage =  async () => {
  const latestProperties = await getLatestProperty()
  return (
    <section className="flex-center flex-col">
      <PropertyList data={latestProperties} limit={16}/>
    </section>
  )
}
export default HomePage