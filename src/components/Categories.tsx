import Image from "next/image";
import React from "react";

interface Category {
  src: string;
  name: string;
  alt: string;
}

const categoriesData: Category[] = [
  { src: "/footer-images/image-1.webp", name:"Cosmetics", alt: "Company Logo" },
  { src: "/footer-images/image-2.webp", name:"Plants", alt: "Company Logo" },
  { src: "/footer-images/image-3.webp", name:"Cars", alt: "Company Logo" },
  { src: "/footer-images/image-4.webp", name:"Houses", alt: "Company Logo" },
  { src: "/footer-images/image-5.webp", name:"Pets", alt: "Company Logo" },
  { src: "/footer-images/image-6.webp", name:"Hygiene", alt: "Company Logo" },
];

const Categories: React.FC = () => {
  return (
    <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6">
      {categoriesData.map((category, index) => (
        <div key={index} className="relative group ">
          <Image
            src={category.src}
            alt={category.alt}
            width={500}
            height={400}
            className="h-full w-30 transition duration-300 transform"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-60 transition-opacity bg-white duration-300 ease-in-out hover:opacity-40">
            <p className="font-bold text-lg">{category.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
