'use server'
import {PrismaClient} from '@prisma/client'
import { convertToPlainObject } from '../utils'
import { LATEST_PROPERTIES_LIMIT } from '@/utils/constanst'


const prisma = new PrismaClient()

//Get latest Property
export const getLatestProperty = async () => {
    const data = await prisma.property.findMany({
        take: LATEST_PROPERTIES_LIMIT,
        orderBy: {
            createdAt: 'desc'
        }
    })
    return convertToPlainObject(data)
}

//Get single property by slug
export const getPropertyBySlug = async (slug: string) => {
    return await prisma.property.findFirst({
        where: {slug: slug},
    })
}