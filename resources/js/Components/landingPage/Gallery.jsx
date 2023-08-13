import React, { useState } from 'react';

const Gallery = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    const openZoom = (imageUrl) => {
        setZoomedImage(imageUrl);
    };

    const closeZoom = () => {
        setZoomedImage(null);
    };

    return (
        <div>
            <div className="mb-5 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-semibold text-gray-800">Gallery</h2>
                <div className="w-24 border-b-4 border-[#F39F19]"></div>
            </div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    {[
                         "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
                         "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
                         "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
                         "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp",
                         "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
                         "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                    ].map((imageUrl, index) => (
                        <div className="flex w-1/3 flex-wrap" key={index}> 
                            <div
                                className="w-full p-1 md:p-2 transition duration-300 transform hover:scale-105 hover:shadow-lg"
                                onClick={() => openZoom(imageUrl)}
                            >
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={imageUrl}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {zoomedImage && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 " style={{ zIndex: 1000 }} >
                    <div className="max-w-3xl w-full">
                        <button
                            className="absolute top-4 right-4 text-white text-2xl"
                            onClick={closeZoom}
                        >
                            &#x2715;
                        </button>
                        <img
                            alt="zoomed"
                            className="w-full h-auto"
                            src={zoomedImage}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
