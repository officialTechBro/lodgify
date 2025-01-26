import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//convert prima object into a regular JS object
export function convertToPlainObject<T> (value: T): T  {
  return JSON.parse(JSON.stringify(value))
}

//format number with decimal
export function formatDecimalNumbers(num: number): string {
  const [int, dec] = num.toString().split('.')
  return dec ? `${int}.${dec.padEnd(2, '0')}` : `${int}.00`
}
