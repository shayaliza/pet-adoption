"use client";
import React from "react";
import Navbar from "@/app/components/navbar";

function WhyAdopt() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {/* Header */}
      <header className="bg-blue-600 py-8 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Why Adopt with Us</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto py-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to providing loving homes for pets in need. Our
            adoption process is designed to ensure that our furry friends find
            the best possible forever homes. We carefully vet all applicants and
            work with you to find the perfect match.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Wide Selection</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website offers a wide selection of animals looking for a home,
            from playful kittens to loyal dogs. You'll find a diverse range of
            species, breeds, and personalities, ensuring you can adopt the
            perfect pet that suits your lifestyle.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Expert Guidance</h2>
          <p className="text-gray-600 leading-relaxed">
            Our team of experienced animal experts and veterinarians is here to
            provide guidance and support throughout the adoption process. We
            offer valuable advice on pet care, training, and resources to make
            the transition to pet parenthood as smooth as possible.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Support and Resources
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We provide a wealth of resources, from adoption guides to pet care
            tips and educational articles. We believe in supporting pet owners
            every step of the way to ensure a happy and healthy life for both
            you and your new companion.
          </p>
        </div>
      </section>
    </div>
  );
}

export default WhyAdopt;
