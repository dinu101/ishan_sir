"use client";
import React, { useEffect, useRef, useState } from "react";

type Review = {
  id: number;
  name: string;
  country: string;
  image: string;
  review: string;
  rating: number;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Aarav Patel",
    country: "India",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5,
    review: "Exceptional development skills and very professional communication throughout the entire project lifecycle.",
  },
  {
    id: 2,
    name: "Emily Johnson",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    review: "Delivered beyond expectations with a clean and scalable solution.",
  },
  {
    id: 3,
    name: "Lucas Martin",
    country: "Canada",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    rating: 5,
    review: "Strong technical knowledge and very responsive support.",
  },
  {
    id: 4,
    name: "Sophia Müller",
    country: "Germany",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    rating: 5,
    review: "Very detail-oriented and committed to quality delivery.",
  },
  {
    id: 5,
    name: "Noah Williams",
    country: "Australia",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    rating: 5,
    review: "Modern UI implementation with excellent performance optimization.",
  },
  {
    id: 6,
    name: "Oliver Brown",
    country: "UK",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    rating: 5,
    review: "Clean coding standards and great project management.",
  },
  {
    id: 7,
    name: "Camille Dubois",
    country: "France",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
    rating: 5,
    review: "Creative solutions and excellent collaboration experience.",
  },
  {
    id: 8,
    name: "Haruto Tanaka",
    country: "Japan",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    rating: 5,
    review: "Efficient problem solving and structured development process.",
  },
  {
    id: 9,
    name: "Mateus Silva",
    country: "Brazil",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    rating: 5,
    review: "Reliable developer with excellent attention to detail.",
  },
  {
    id: 10,
    name: "Ahmed Khan",
    country: "UAE",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 5,
    review: "Highly professional and technically sound implementation.",
  },
  {
    id: 11,
    name: "Giulia Rossi",
    country: "Italy",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    rating: 5,
    review: "Very smooth workflow and excellent user experience design.",
  },
  {
    id: 12,
    name: "Carlos Fernández",
    country: "Spain",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 5,
    review: "Delivered high-quality results on time and within budget.",
  },
  {
    id: 13,
    name: "Daan Visser",
    country: "Netherlands",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    review: "Strong backend structure and scalable architecture.",
  },
  {
    id: 14,
    name: "Luca Steiner",
    country: "Switzerland",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    review: "Professional attitude with enterprise-level coding standards.",
  },
  {
    id: 15,
    name: "Min-jun Park",
    country: "South Korea",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    review: "Excellent UI polish and performance improvements.",
  },
  {
    id: 16,
    name: "Isabella Clarke",
    country: "New Zealand",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    rating: 5,
    review: "Very creative and technically skilled developer.",
  },
  {
    id: 17,
    name: "Erik Johansson",
    country: "Sweden",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 5,
    review: "Smooth animations and clean user interface.",
  },
  {
    id: 18,
    name: "Henrik Larsen",
    country: "Norway",
    image: "https://randomuser.me/api/portraits/men/95.jpg",
    rating: 5,
    review: "Delivered enterprise-quality work under tight deadlines.",
  },
  {
    id: 19,
    name: "Santiago López",
    country: "Mexico",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    rating: 5,
    review: "Very efficient and easy to collaborate with.",
  },
  {
    id: 20,
    name: "Rizky Pratama",
    country: "Indonesia",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    rating: 5,
    review: "User-focused design and strong backend logic.",
  },
];

const ReviewSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = container.querySelector(".review-card")?.clientWidth || 0;
        const gap = 24; // 1.5rem = 24px
        const scrollAmount = cardWidth + gap;

        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % reviews.length;
          
          container.scrollTo({
            left: scrollAmount * nextIndex,
            behavior: "smooth",
          });

          return nextIndex;
        });
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            Real feedback from global clients 🌍
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="review-card flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 snap-start"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.country}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <span key={index} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 italic leading-relaxed">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const cardWidth = container.querySelector(".review-card")?.clientWidth || 0;
                    const gap = 24;
                    container.scrollTo({
                      left: (cardWidth + gap) * index,
                      behavior: "smooth",
                    });
                    setCurrentIndex(index);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ReviewSection;