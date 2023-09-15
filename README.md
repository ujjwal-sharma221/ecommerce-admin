# An Ecommerce-admin panel made with Next.Js + Typescript 
### Tech Stack Used:
* PlanetScale
* Prisma
* ShadCn
* Tailwind Css
* Zustand
* Clerk
* Cloundinary

### To setup and run the project
1. Clone the project to your local system and run `npm i` in the source (`app`) directory
2. Setup an .env file in the source directory with the following values
   ```
   # For Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
   CLERK_SECRET_KEY,

   # Specify Authentication Routes
   NEXT_PUBLIC_CLERK_SIGN_IN_URL,
   NEXT_PUBLIC_CLERK_SIGN_UP_URL,
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,

   # For Database, use Planetcale and mySql
   DATABASE_URL,

   #For Images
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
   ```
3. Run `npm run dev` and the projet will be visible in  http://localhost:3000
