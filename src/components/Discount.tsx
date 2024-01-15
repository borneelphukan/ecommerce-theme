import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCar, FaMoneyBill, FaLifeRing, FaHeadphones } from 'react-icons/fa';

const Discount: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 30,
    hours: 24,
    minutes: 60,
    seconds: 60,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const { days, hours, minutes, seconds } = prevCountdown;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval); // Stop the countdown when it reaches 0
          return prevCountdown; // Return the same state to avoid undefined
        } else {
          const newSeconds = seconds === 0 ? 59 : seconds - 1;
          const newMinutes = seconds === 0 ? (minutes === 0 ? 59 : minutes - 1) : minutes;
          const newHours = minutes === 0 ? (hours === 0 ? 23 : hours - 1) : hours;
          const newDays = hours === 0 ? (days === 0 ? 0 : days - 1) : days;

          return {
            days: newDays,
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds,
          };
        }
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Format the countdown values as strings with leading zeros
const formattedCountdown = Object.entries(countdown).map(([unit, value]) => {
  switch (unit) {
    case 'days':
      return `${value} Days`;
    case 'hours':
      return `${value} Hours`;
    case 'minutes':
      return `${value} Min`;
    case 'seconds':
      return `${value} Sec`;
    default:
      return '';
  }
});

  return (
    <div>
      <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:mx-[10%] my-5">
        <div>
          <Image
            src="/discount-image.webp"  // Replace with the correct path to your image
            alt="Discount Banner"
            width={600}  // Set the desired width
            height={300}  // Set the desired height
          />
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-300">
          <div className="my-5">
            <Image
              src="/discount-logo.png"  // Replace with the correct path to your image
              alt="Discount Banner"
              width={250}  // Set the desired width
              height={250}  // Set the desired height
            />
          </div>
          <h3>{formattedCountdown.join(' ')}</h3>
          <a href="#" className="font-bold text-gray-700 hover:text-red-700 transition-colors duration-300 underline underline-offset-8 decoration-red-700 my-5">
            Buy Now
          </a>
        </div>
      </div>
      <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:mx-[10%] md:my-5 md:mb-5">
        <div className="flex flex-col items-center my-5"><FaCar size={30} /><b>Free Shipping</b><p>For all order over $99</p></div>
        <div className="flex flex-col items-center my-5"><FaMoneyBill size={30} /><b>Money Back Guarantee</b><p>If good have Problems</p></div>
        <div className="flex flex-col items-center my-5"><FaLifeRing size={30} /><b>Online Support 24/7</b><p>Dedicated support</p></div>
        <div className="flex flex-col items-center my-5"><FaHeadphones size={30} /><b>Payment Secure</b><p>100% secure payment</p></div>
      </div>
    </div>
  );
}

export default Discount;
