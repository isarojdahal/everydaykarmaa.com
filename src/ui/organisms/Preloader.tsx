import { useEffect, useState } from "react";
import EKLogo from "@/assets/logos/WHITELOGO_transparent@3x.png";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function handleLoad() {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }

    handleLoad();
  }, [setIsLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed z-[100] inset-0 bg-everydaykarma grid place-content-center">
      <style>
        {`
            body {
              overflow: hidden;
            }
            
            @keyframes text-enter {
              from {
                transform: translateY(5rem);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
            .animate-text-enter {
              animation: text-enter 1.25s ease-in-out;
            }
          `}
      </style>

      <div className="flex flex-col animate-pulse">
        <img
          src={EKLogo}
          alt="EverydayKarma Logo"
          className="block mx-auto size-52"
        />
        <div className="text-center text-gray-100 -mt-6 animate-text-enter">
          <p className="text-4xl font-semibold">EverydayKarma</p>
          <p className="text-sm mt-1 uppercase">Enlightening Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
