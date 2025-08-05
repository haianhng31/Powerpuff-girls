import React from "react";

function LandingPage() {
  return (
    <div className="bg-[#FFF5F8] min-h-screen text-gray-800">
      
      {/* About Us Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">About Us</h1>
        <p className="text-lg mb-8">
          Powerpuff is a website by women for women. You can find articles, travel guides, health advice,
          and more, all in one place!
        </p>
        <img
          src="https://via.placeholder.com/800x400"
          alt="About Us"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </section>

      {/* How It Started Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-pink-600 mb-4">How It Started</h2>
        <p className="text-lg mb-8">
          We wanted to create a space where girls and women could feel truly seen, 
          supported, and safe. Our site brings together inspiring blogs, 
          an interactive map highlighting safe and unsafe areas, health tips, and travel safety advice
           — all designed to help women navigate the world with confidence.
        </p>
        <img
          src="https://via.placeholder.com/800x400"
          alt="How It Started"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </section>

      {/* Popular Articles Section */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold text-pink-600 mb-6">Popular Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src="https://via.placeholder.com/400x300"
                alt="Article"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">[Article Title]</h3>
                <p className="text-sm text-gray-600">
                  [Put the articles down when we find them]
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default LandingPage;

