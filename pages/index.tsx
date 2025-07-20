/** import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              pages/index.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

*/


//update to see the working app with only one house

/** 
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the ALX Listing App</h1>

      <Card
        title="Cozy Apartment"
        image="/assets/house1.jpg"  // Make sure this image exists
        description="A beautiful and modern apartment in the city center."
      />

       <Card
        title="Cozy Apartment"
        image="/assets/house2.jpg"  // Make sure this image exists
        description="A beautiful and modern apartment in Atimpoku, Volta, Ghana."
      />

      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert('Booking...')} />
      </div>
    </main>
  );
}

*/
import { useState } from "react";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

// ✅ Hero Section as a separate component
const Hero = () => (
  <section className="bg-cover bg-center text-white p-20"
    style={{ backgroundImage: `url('/your-hero-bg.jpg')` }}>
    <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
    <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
  </section>
);

// ✅ Main Home Component
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
      <Hero />

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
