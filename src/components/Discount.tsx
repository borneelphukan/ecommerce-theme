import Image from "next/image";
import React from "react";

const Discount: React.FC = () => {
    return (
        <div>
        <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:mx-[10%]">
            {/* Replace the text with the Image component */}
            <div>
                <Image
                    src="/discount-image.webp"  // Replace with the correct path to your image
                    alt="Discount Banner"
                    width={600}  // Set the desired width
                    height={300}  // Set the desired height
                />
            </div>      
            <div className="flex flex-col items-center justify-center bg-slate-300">
                <div>Logo</div>
                <p>DD-HH-MM-SS</p>
                 <p>Shop Now</p>
            </div>
        </div>
        <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:mx-[10%] my-10">     
            <div>Free Shipping</div>
            <div>Money Back Guarantee</div>
            <div>Online Support 24/7</div>
            <div>Payment Secure</div>
        </div>
        </div>
    )
}

export default Discount;
