import { neonConfig } from '@neondatabase/serverless';
// import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// Sets up WebSocket connections for Neon to use WebSocket communication.
neonConfig.webSocketConstructor = ws;

// Retrieves the connection string from the environment variable.
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not defined.');
}

// Creates the PrismaClient and extends it with custom transformations.
// export const prisma = new PrismaClient().$extends({
//   result: {
//     property: {
//       price: {
//         compute(property) {
//           return property.price.toString(); // Convert price to string
//         },
//       },
//       rating: {
//         compute(property) {
//           return property.rating.toString(); // Convert rating to string
//         },
//       },
//     },
//   },
// });
