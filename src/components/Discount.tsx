import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCar, FaMoneyBill, FaLifeRing, FaHeadphones } from 'react-icons/fa';

const Discount: React.FC = () => {
  const initialCountdown = {
    days: 30,
    hours: 24,
    minutes: 60,
    seconds: 60,
  };

  const [countdown, setCountdown] = useState(() => {
    const storedCountdown = JSON.parse(localStorage.getItem('countdown') || 'null');
    return storedCountdown || initialCountdown;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown: { days: any; hours: any; minutes: any; seconds: any; }) => {
        const { days, hours, minutes, seconds } = prevCountdown;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval); // Stop the countdown when it reaches 0
          return prevCountdown; // Return the same state to avoid undefined
        } else {
          const newSeconds = seconds === 0 ? 59 : seconds - 1;
          const newMinutes = seconds === 0 ? (minutes === 0 ? 59 : minutes - 1) : minutes;
          const newHours = minutes === 0 ? (hours === 0 ? 23 : hours - 1) : hours;
          const newDays = hours === 0 ? (days === 0 ? 0 : days - 1) : days;

          const newCountdown = {
            days: newDays,
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds,
          };

          localStorage.setItem('countdown', JSON.stringify(newCountdown)); // Store in localStorage

          return newCountdown;
        }
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Format the countdown values as strings with leading zeros
  const formattedCountdown: React.ReactNode[] = Object.entries(countdown).map(([unit, value]) => (
    <span key={unit}>
      {value} {unit.charAt(0).toUpperCase() + unit.slice(1)}{' '}
    </span>
  ));

  return (
    <div>
      <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:mx-[10%] my-5">
        <div>
          <Image
            src="/discount-image.webp"
            alt="Discount Banner"
            width={600}
            height={300}
          />
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-300">
          <div className="my-5">
            <Image
              src="/discount-logo.png"
              alt="Discount Banner"
              width={250}
              height={250}
            />
          </div>
          <div className="countdown-container">
            {formattedCountdown}
          </div>
          <a href="#" className="font-bold text-gray-700 hover:text-red-700 transition-colors duration-300 underline underline-offset-8 decoration-red-700 my-5">
            Buy Now
          </a>
        </div>
      </div>
      <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:mx-[10%] md:my-5 md:mb-5">
        <div className="flex flex-col items-center my-5"><FaCar size={30} /><b>Free Shipping</b><p>For all order over $99</p></div>
        <div className="flex flex-col items-center my-5"><FaMoneyBill size={30} /><b>Money Back Guarantee</b><p>If goods have Problems</p></div>
        <div className="flex flex-col items-center my-5"><FaLifeRing size={30} /><b>Online Support 24/7</b><p>Dedicated support</p></div>
        <div className="flex flex-col items-center my-5"><FaHeadphones size={30} /><b>Payment Secure</b><p>100% secure payment</p></div>
      </div>
    </div>
  );
}

export default Discount;
