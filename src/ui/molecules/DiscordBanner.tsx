import React, { useEffect, useState } from "react";

export interface DiscordBannerPropType {
  icon: React.ReactNode; // Allow passing custom icons
  url: string;
  text: string;
}

export default function DiscordBanner({
  icon,
  url,
  text,
}: DiscordBannerPropType) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer"); // Select the footer element

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFooterVisible(entry.isIntersecting); // Set state based on footer visibility
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the footer is visible
    );

    if (footer) {
      observer.observe(footer); // Start observing the footer
    }

    // Cleanup when the component unmounts
    return () => {
      if (footer) {
        observer.unobserve(footer); // Stop observing
      }
    };
  }, []);

  // If the footer is visible, hide the banner
  if (isFooterVisible) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 left-0 right-0 bg-everydaykarma text-white px-5 py-4 flex justify-between items-center z-50 md:hover:bg-blue-900"
    >
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <p className="text-xl font-bold">{text}</p>
        </div>
      </div>
      <button className="bg-white text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
        Join Now
      </button>
    </a>
  );
}
