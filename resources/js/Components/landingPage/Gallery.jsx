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
                <h2 className="text-3xl font-semibold text-gray-800 w-auto border-b-4 border-[#169870]">Gallery</h2>
            </div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    {[
                         "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/cover-parks.jpg",
                         "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/virginia/HR19103109P_024_78dfa23d-5ddc-47f1-8c3e-e518a70f85cf.jpg",
                         "https://indiaoutbound.info/wp-content/uploads/2022/12/Theme-Parks.jpg",
                         "https://img.okezone.com/content/2015/09/15/406/1214679/ini-bedanya-theme-park-mnc-dengan-disneyland-p9D1pwZh3i.jpg",
                         "https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlbWUlMjBwYXJrfGVufDB8fDB8fHww&w=1000&q=80",
                         "https://images.pexels.com/photos/136412/pexels-photo-136412.jpeg?cs=srgb&dl=pexels-scott-webb-136412.jpg&fm=jpg"
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
