import Badge from "@/app/_lib/components/Badge/badge";
import MaterialCard from "@/app/_lib/components/matrialCard/MatrialCard";
import React from "react";

const image = 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?'
function Template() {
  const cardData = [
    {
      href: "/some-article",
      imageUrl: image, // Assuming you have a variable named `image` with the image URL
      title: "ExpressJs Starting template",
      description: "a starting template built with expressjs"
    },
    {
      href: "/some-article",
      imageUrl: image,
      title: "nestjs Starting template",
      description: "a starting template for nestjs"
    },
    {
      href: "/some-article",
      imageUrl: image,
      title: "Dashcn",
      description: "a dashboard built with next and shadcn"
    },
    {
      href: "/some-article",
      imageUrl: image,
      title: "base css",
      description: "the base css for my projects"
    },
    {
      href: "/some-article",
      imageUrl: image,
      title: "vite react",
      description: "react starting template with vite plus folder structure" 
    }
  ];
  return (
    <div className="content-grid template-grid">
      <div className="grid-header">
        <Badge type={"baby-powder"}>Templates</Badge>
        <h1>Tampletes</h1>
        <h3>the is some boilerplate code i start my projects from</h3>
      </div>
      <div className="container">
            
          {cardData.map((card, index) => (
            <MaterialCard
              key={index} 
              {...card} 
            />
          ))}
      
        </div>
    </div>
  );
}

export default Template;
