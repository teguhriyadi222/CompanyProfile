import React, { useState } from "react";

const Attractions = ({ fasiltas }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleDescription = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="mb-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold text-gray-800 w-auto border-b-4 border-[#169870]">Explore Our Exciting Attractions</h2>
        <p className="text-gray-600 mt-2 mb-3">Discover a world of adventure and entertainment!</p>
      </div>
      <div className="grid gap-2 md:grid-cols-4">
        {fasiltas ? (
          fasiltas.map((data, index) => (
            <div className="relative mx-6" key={index} style={{ flex: '0 0 25%' }}>
              <div className="rounded-lg bg-white shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg mb-3">
                <img src={`storage/${data.image}`} className="w-full h-48 object-cover rounded-t-lg" alt={`Wahana ${index}`} />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-medium text-gray-800">{data.title}</h2>
                  <p className="text-gray-600 mb-4">
                    {expandedIndex === index ? data.description : data.description.slice(0, 100) + "..."}
                  </p>
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-base text-[#F39F19]"
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          'No data'
        )}
      </div>
    </div>
  );
};

export default Attractions;
