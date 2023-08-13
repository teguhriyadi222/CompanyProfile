import React from "react";

const Attractions = ({ fasiltas }) => {
  return (
    <div className="container mx-auto mt-20">
       <div className="mb-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold text-gray-800">Explore Our Exciting Attractions</h2>
        <div className="w-24 border-b-4 border-[#F39F19]"></div>
        <p className="text-gray-600 mt-2 mb-3">Discover a world of adventure and entertainment!</p>
      <div className="grid gap-2 md:grid-cols-4 ">
        {fasiltas ? (
          fasiltas.map((data, index) => (
            <div className="relative mx-6" key={index} style={{ flex: '0 0 25%' }}>
              <div className="rounded-lg bg-white shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg mb-3">
                <img src={`storage/${data.image}`} className="w-full h-48 object-cover rounded-t-lg" alt={`Wahana ${index}`} />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-medium text-gray-800">{data.title}</h2>
                  <a href="#" className="text-base text-yellow-600">Read More</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          'No data' 
        )}
      </div>
    </div>
    </div>
  );
}

export default Attractions;
