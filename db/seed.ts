import {PrismaClient} from '@prisma/client'
import sampleData from './sample-data'

const main = async () => {
    const prisma = new PrismaClient
    await prisma.property.deleteMany()
    await prisma.account.deleteMany()
    await prisma.session.deleteMany()
    await prisma.verificationToken.deleteMany()
    await prisma.user.deleteMany()

    await prisma.property.createMany({data: sampleData.properties})
    await prisma.user.createMany({data: sampleData.users})

    console.log('Database seeded successfully')
}
main()