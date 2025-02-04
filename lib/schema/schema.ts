import {z} from 'zod'
// import { formatDecimalNumbers } from '../utils'

// const currency = z
//         .string()
//         .refine((value) => /^\d+(\.\d{2})?$/.test(formatDecimalNumbers(Number(value))), 'Price must have exactly two decimal places')


//Create Property Schema
export const createPropertySchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 character'),
    slug: z.string().min(3, 'Slug must be at least 3 character'),
    tagline: z.string().min(3, 'Tagline must be at least 3 character'),
    price: z.coerce.number().int().min(0, 'price must be a positive number.',),
    category: z.string().min(3, 'Category must be at least 3 character'),
    description: z.string().min(3, 'Description must be at least 3 character'),
    country: z.string(),
    bedrooms: z.coerce.number(),
    beds: z.coerce.number(),
    guests: z.coerce.number(),
    baths: z.coerce.number(),
    numReviews: z.coerce.number(),
    amenities: z.string(),
    images: z.array(z.string()).min(1, 'Property must have at least one image'),
    isFeatured: z.boolean()
})

// User signin schema
export const signInFormSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'password must be at least 6 characters')
})

// User signup schema
export const signUpFormSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password must be at least 6 characters'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords dont match',
    path: ['confirmPassword']
})