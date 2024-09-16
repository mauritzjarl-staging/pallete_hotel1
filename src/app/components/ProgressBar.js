export default function ProgressBar({ total, current, totalLabel, currentLabel }) {
    // Calculate percentage of the current value relative to the total
    const percentage = (current / total) * 100;
  
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        {/* Top Row with Customizable Total and Current Labels */}
        <div className="flex justify-between flex-col lg:flex-row mb-2 sm:h-20 md:h-15 xl:h-14 align-middle items-center">
          <div className="text-black font-bold ">
            {total.toLocaleString()}{" "}
            <span className="font-normal text-gray-600">{totalLabel}</span>
          </div>
          <div className="text-black font-bold ">
            {current.toLocaleString()}{" "}
            <span className="font-normal text-gray-600">{currentLabel}</span>
          </div>
        </div>
  
        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-4 relative">
          <div
            className="bg-orange-500 h-4 rounded-full text-center text-xs font-bold text-white flex items-center justify-center"
            style={{ width: `${percentage}%` }}
          >
            {Math.round(percentage)}%
          </div>
        </div>
      </div>
    );
  }
  