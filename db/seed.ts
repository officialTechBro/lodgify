import {PrismaClient} from '@prisma/client'
import sampleData from './sample-data'

const main = async () => {
    const prisma = new PrismaClient
    await prisma.property.deleteMany()

    await prisma.property.createMany({
        data: sampleData.properties
    })
    console.log('Database seeded successfully')
}
main()