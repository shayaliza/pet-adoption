"use client";
import Navbar from "@/app/components/navbar";
import React from "react";

function AboutUs() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {/* Header */}
      <header className="bg-blue-600 py-8 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">About Us</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto py-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            varius bibendum odio, id ultrices risus blandit ac. Proin
            condimentum eros vitae dolor varius, at semper metus interdum. Sed
            tincidunt in odio nec commodo. Nulla facilisi. Aenean sed ante non
            purus facilisis vehicula.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Fusce a ligula eu sapien cursus hendrerit. Nullam ut rhoncus purus.
            In hac habitasse platea dictumst. Sed vel posuere leo. Nunc in odio
            elit. Cras bibendum urna in dui sollicitudin viverra.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
