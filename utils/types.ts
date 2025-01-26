import {z} from 'zod'
import { createPropertySchema } from '@/lib/schema/schema'

export type PropertyProps = z.infer<typeof createPropertySchema> & {
    id: string
    rating: number
    createdAt: Date
}