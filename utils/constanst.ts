export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Lodgify"
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Lodgify | Your Ultimate Lodging Marketplace"
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
export const LATEST_PROPERTIES_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT) || 16

export const signInDefaultValue = {
    email: '',
    password: ''
}
export const signUpDefaultValue = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}