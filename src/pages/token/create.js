import React from "react";

import TokenForm from "../../components/token-creator/TokenForm";

const CreateToken = () => {
  return (
    <>
      <div className="bg-[#06001D] min-h-screen text-white relative">
        {/* Stars background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array(30)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.7 + 0.1,
                }}
              ></div>
            ))}
        </div>

        <div className="container mx-auto px-4 py-16 pt-24 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                Create Your Solana Token
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Launch your own token on Solana in minutes without coding. Low
              fees, simple process, complete control.
            </p>
          </div>

          {/* Visual elements */}
          <div className="absolute top-24 right-1/4">
            <div className="w-12 h-12 relative">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-4 bg-purple-500 left-1/2 top-1/2 -translate-x-1/2 origin-bottom"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-16px)`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-48 left-1/5">
            <div className="w-6 h-6 bg-green-400 transform rotate-45"></div>
          </div>

          <div className="relative bg-[#0c0325] bg-opacity-50 rounded-xl backdrop-blur-sm   md:p-12 shadow-xl max-w-5xl mx-auto">
            <TokenForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateToken;
