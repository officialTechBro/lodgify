//migrate
npx prisma migrate dev --name init  

//seed
npx tsx ./db/seed

//table GUI
npx prisma studio

//neon serverless driver
npm install @neondatabase/serverless @prisma/adapter-neon ws

npm install -D @types/ws bufferutil

* in prisma/schema add this to generator client -
previewFeatures = ["driverAdapters"]
