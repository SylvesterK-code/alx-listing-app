This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.





..........................................................................................



# ALX Listing App

This project is a simple Airbnb clone focused on building a scalable and responsive property listing page using Next.js, TypeScript, TailwindCSS, and reusable components.

## Folder Structure

- `components/`: Reusable UI components like Card and Button.
- `interfaces/`: TypeScript interfaces for props and data.
- `constants/`: App-wide constants like API base URLs.
- `public/assets/`: Images and icons used across the app.

## How to Run Locally

```bash
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app
npm install
npm run dev









responsive listing page

mkdir -p components/layout
ni components/layout/Header.tsx 
ni components/layout/Footer.tsx 
ni components/layout/Layout.tsx

................................................
mkdir -p components/layout
ni components/layout/Header.tsx 
ni components/layout/Footer.tsx 
ni components/layout/Layout.tsx


mkdir constants 
mkdir interfaces
ni constants/index.ts 
ni interfaces/index.ts


✅ Complete Steps from Start to Finish
🔧 1. Project Setup
Created a Next.js 13+ app with TypeScript, Tailwind CSS, and ESLint.

Set up a clean directory structure:

/components

/constants

/interfaces

/pages

/public/assets (for images)

📁 2. Defined Property Interface
Created a file interfaces/index.ts:

ts
Copy
Edit
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount?: string;
}
📦 3. Created Property Listing Sample
Created a file constants/index.ts:

ts
Copy
Edit
import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/your-hero-bg.jpg",
    discount: ""
  },
  // Add more properties here...
];
🧱 4. Built Reusable Components
✅ 4.1 PropertyCard.tsx in /components/PropertyCard.tsx
tsx
Copy
Edit
import { PropertyProps } from "@/interfaces";

const PropertyCard = ({ name, address, image, rating, price }: PropertyProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{`${address.city}, ${address.country}`}</p>
      <div className="mt-2">
        <span className="text-yellow-500">★ {rating}</span>
        <span className="ml-2 text-gray-700">${price}/night</span>
      </div>
    </div>
  </div>
);

export default PropertyCard;
✅ 4.2 Pill.tsx in /components/Pill.tsx
tsx
Copy
Edit
interface PillProps {
  label: string;
  onClick: () => void;
  active?: boolean;
}

const Pill = ({ label, onClick, active = false }: PillProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium border ${
      active ? "bg-blue-600 text-white" : "bg-white text-gray-800"
    }`}
  >
    {label}
  </button>
);

export default Pill;
🌟 5. Built the Listing Page (Milestone 2 - Task 0)
/pages/index.tsx
tsx
Copy
Edit
import { useState } from "react";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const filters = ["All", "Top Villa", "Self Checkin", "Free WiFi", "Beachfront", "Mountain View"];

  const filteredProperties = selectedFilter === "All"
    ? PROPERTYLISTINGSAMPLE
    : PROPERTYLISTINGSAMPLE.filter(property =>
        property.category.includes(selectedFilter)
      );

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white p-20"
        style={{ backgroundImage: `url('/assets/your-hero-bg.jpg')` }}
      >
        <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Pills */}
      <section className="flex flex-wrap gap-2 px-6 py-4">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            onClick={() => setSelectedFilter(filter)}
            active={filter === selectedFilter}
          />
        ))}
      </section>

      {/* Property Listing */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.name} {...property} />
        ))}
      </section>
    </>
  );
};

export default Home;
🧼 6. Fixed All Errors
Removed duplicate export default statements.

Removed unused Hero component.

Removed extra PropertyCard and PropertyProps declarations.

Corrected all image paths to use /assets/... (not public/assets/...).

✅ Final Output:
You now have:

A hero section with a background image and welcome message.

A filter pill section to filter properties by category.

A responsive grid of property cards dynamically rendered from your sample data.