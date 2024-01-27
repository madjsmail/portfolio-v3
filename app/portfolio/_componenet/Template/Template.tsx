import Badge from "@/app/_lib/components/Badge/badge";
import MaterialCard from "@/app/_lib/components/matrialCard/MatrialCard";
import React from "react";

function Template() {
  return (
    <div className="content-grid template-grid">
      <div className="grid-header">
        <Badge type={"baby-powder"}>Templates</Badge>
        <h1>Tampletes</h1>
        <h3>the is some boilerplate code i start my projects from</h3>
      </div>
      <div className="container">
        <MaterialCard
        href="/some-article"
        imageUrl="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="ExpressJs Starting template"
        description="a starting template for bult with expressjs"
      />
        <MaterialCard
        href="/some-article"
        imageUrl="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="nestjs Starting template"
        description="a starting template for  nestjs"
      />
        <MaterialCard
        href="/some-article"
        imageUrl="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Dashcn "
        description="a dashboard built with next and shadcn"
      />
        <MaterialCard
        href="/some-article"
        imageUrl="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="base css"
        description="the base css for my projects"
      />
        </div>
    </div>
  );
}

export default Template;
