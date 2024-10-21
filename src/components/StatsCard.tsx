import React from "react";

const StatsCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 space-y-8  bg-gradient-to-r from-lime-400 via-lime-300 to-lime-400">
      {/* Stats Row */}
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 mb-6">
        <div className="border-r border-white pr-6">
          <h2 className="text-4xl font-bold text-blue-500">15</h2>
          <p className="text-gray-700 font-semibold">years of expertise</p>
        </div>
        <div className="border-r border-white pr-6">
          <h2 className="text-4xl font-bold text-blue-500">80+</h2>
          <p className="text-gray-700 font-semibold">IT professionals</p>
        </div>
        <div className="border-r border-white pr-6">
          <h2 className="text-4xl font-bold text-blue-500">2K</h2>
          <p className="text-gray-700 font-semibold">success stories</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-500">15+</h2>
          <p className="text-gray-700 font-semibold">industries covered</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 max-w-2xl">
        Since 1989. For millions of users. We are responsible for delivering top-quality, secure, and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow.
      </p>
    </div>
  );
};

export default StatsCard;
