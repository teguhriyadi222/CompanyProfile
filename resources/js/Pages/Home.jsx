import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import Gallery from "@/Components/landingPage/Gallery";
import Footer from "@/Components/landingPage/Footer";
import Attractions from "@/Components/landingPage/Attractions";


export default function Home(props) {
    console.log(props);
    const [navbar, setNavbar] = useState(false);
    const [activePage, setActivePage] = useState("home");

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const handleScroll = () => {
        const homeSection = document.getElementById("home");
        const aboutSection = document.getElementById("about");
        const wahanaSection = document.getElementById("wahana");
        const gallerySection = document.getElementById("Gallery");
        const contactSection = document.getElementById("Contact");

        if (homeSection && isElementInViewport(homeSection)) {
            setActivePage("home");
        } else if (aboutSection && isElementInViewport(aboutSection)) {
            setActivePage("about");
        } else if (wahanaSection && isElementInViewport(wahanaSection)) {
            setActivePage("wahana");
        } else if (gallerySection && isElementInViewport(gallerySection)) {
            setActivePage("Gallery");
        } else if (contactSection && isElementInViewport(contactSection)) {
            setActivePage("Contact")
        };
    }
    const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div>
            <nav className="w-full bg-white shadow sticky top-0 z-10 ">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="javascript:void(0)">
                                <h2 className="text-2xl font-bold">Wonderland Park</h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className={`text-gray-600 ${activePage === "home" ? "px-4 py-2 text-white bg-[#F39F19] rounded-md" : "hover:px-4 py-2 hover:text-white hover:bg-[#F39F19] hover:rounded-md"}`}>
                                    <a href="#home" onClick={() => handlePageChange("home")}>Home</a>
                                </li>
                                <li className={`text-gray-600 ${activePage === "about" ? "px-4 py-2 text-white bg-[#F39F19] rounded-md" : "hover:px-4 py-2 hover:text-white hover:bg-[#F39F19] hover:rounded-md"}`}>
                                    <a href="#about" onClick={() => handlePageChange("about")}>About US</a>
                                </li>
                                <li className={`text-gray-600 ${activePage === "wahana" ? "px-4 py-2 text-white bg-[#F39F19] rounded-md" : "hover:px-4 py-2 hover:text-white hover:bg-[#F39F19] hover:rounded-md"}`}>
                                    <a href="#wahana" onClick={() => handlePageChange("wahana")}>Attractions</a>
                                </li>
                                <li className={`text-gray-600 ${activePage === "Gallery" ? "px-4 py-2 text-white bg-[#F39F19] rounded-md" : "hover:px-4 py-2 hover:text-white hover:bg-[#F39F19] hover:rounded-md"}`}>
                                    <a href="#Gallery" onClick={() => handlePageChange("Gallery")}>Gallery</a>
                                </li>
                                <li className={`text-gray-600 ${activePage === "Contact" ? "px-4 py-2 text-white bg-[#F39F19] rounded-md" : "hover:px-4 py-2 hover:text-white hover:bg-[#F39F19] hover:rounded-md"}`}>
                                    <a href="#Contact" onClick={() => handlePageChange("Contact")}>Contact US</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                        <Link
                            href={route('login')}
                            className="px-4 py-2 text-white bg-[#169870] rounded-md shadow hover:bg-gray-800"
                        >
                            Sign in
                        </Link>
                        <Link
                            href={route('register')}
                            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </nav>


            <section id="home" className="bg-gray-200" style={{ backgroundImage: "url('https://res.dayoutwiththekids.co.uk/image/upload/w_1600,q_75,c_fill/v1659526622/attractions/d/drayton-manor-theme-park-e473a255/drayton_manor2_lnhmyv.jpg')" }}>
                <div className="flex justify-center">
                    <div className="px-20 py-32 lg:w-1/2">
                        <div className="w-full">
                            <h1 className="mb-2 text-4xl font-medium text-gray-900">Welcome to Wonderland Park</h1>
                            <div className="leading-relaxed">Experience Thrills, Laughter, and Memories that Last a Lifetime.</div>
                            <p className="mt-4 text-gray-600">
                                <span className="mr-2" role="img" aria-label="Clock">&#128339;</span> Open Hours: Mon - Fri: 9 AM - 8 PM, Sat - Sun: 10 AM - 10 PM
                            </p>
                            <button className="mt-4 rounded-xl bg-gradient-to-b from-yellow-300 to-yellow-500 px-8 py-2 text-xl text-white hover:shadow-2xl">
                                <span className="mr-2" role="img" aria-label="Ticket">&#128184;</span> Buy Ticket
                            </button>
                        </div>
                    </div>
                </div>
            </section>




            <section id="about" className="bg-white">
                <div className="mx-auto max-w-5xl px-6 py-16 text-center flex flex-col items-center">
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
                        <div className="w-24 border-b-4 border-[#F39F19]"></div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        <p className="mt-4 md:mt-0 md:mr-8 text-gray-600 md:text-left">
                            Welcome to Wonderland Park! We are the place where moments turn into everlasting memories. Since our grand opening, we have been dedicated to providing unforgettable experiences for visitors of all ages. As a pioneering theme park, Wonderland Park merges fantasy and reality. Innovative attractions, captivating rides, and top-notch entertainment are all part of every visitor's journey. We are a team of experts, from creative designers to experienced engineers, working diligently to create a safe, enjoyable, and inspiring environment. Safety and customer satisfaction are our primary concerns.

                            Our park is more than just an amusement park; it's a realm of dreams and adventures. Every corner holds its own story, and each ride is meticulously designed for visitor satisfaction. We take pride in being a top family vacation destination, hosting special events, and school outings. Thank you for choosing Wonderland Park as your recreational haven. We are committed to constant innovation, growth, and the creation of unforgettable memories. Let's explore the wonders we offer together and create timeless memories at Wonderland Park!
                        </p>
                        <img className="mt-4 md:mt-0 h-100 w-full md:w-1/2 rounded-md object-cover object-center shadow" src="https://nibble-images.b-cdn.net/nibble/original_images/dufan_ontang_anting_b518417d7b_-UkJB7NRJ.jfif" alt="Wonderland Park" />
                    </div>
                </div>
            </section>



            <section id="wahana" className="container mx-auto mt-20">
                <Attractions fasiltas={props.fasiltas} />
            </section>




            <section id="Gallery" className="container mx-auto mt-20">
                <Gallery />
            </section>



            <div className="container my-24 mx-auto md:px-6">

                <section id="Contact" className="container mx-auto mt-20">
                    <div className="flex justify-center">
                        <div className="mb-12 flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
                            <div className="w-24 border-b-4 border-[#F39F19]"></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="mb-12 w-full grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                            <form>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <div className="mb-3 pt-0">
                                        <input type="text" placeholder="Your Name" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full" />
                                    </div>

                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <div className="mb-3 pt-0">
                                        <input type="text" placeholder="Email" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full" />
                                    </div>
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <textarea
                                        className="peer block w-full rounded text-sm border border-slate-300 outline-none  px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        rows="3" placeholder="Your message"></textarea>
                                </div>

                                <button className="w-full bg-[#169870] text-white active:bg-[#F39F19] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                            <div className="flex flex-wrap">
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-blue-100 p-4 text-primary shadow-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold dark:text-white">
                                                Technical support
                                            </p>
                                            <p className="text-neutral-500 dark:text-neutral-200">
                                                support@example.com
                                            </p>
                                            <p className="text-neutral-500 dark:text-neutral-200">
                                                +1 234-567-89
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-blue-100 p-4 text-primary shadow-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold dark:text-white">
                                                Sales questions
                                            </p>
                                            <p className="text-neutral-500 dark:text-neutral-200">
                                                sales@example.com
                                            </p>
                                            <p className="text-neutral-500 dark:text-neutral-200">
                                                +1 234-567-89
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="align-start flex">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-blue-100 p-4 text-primary shadow-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 22s-8-4.5-8-11a8 8 0 0116 0c0 6.5-8 11-8 11zM12 12a2 2 0 100-4 2 2 0 000 4z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold dark:text-white">Address</p>
                                            <p className="text-neutral-500 dark:text-neutral-200">
                                                123 Park Street, Wonderland
                                            </p>
                                            <p className="text-neutral-500 dark:text-neutral-200">
                                                Cityville, Countryland
                                            </p>
                                            <p className="text-neutral-500 dark:text-neutral-200">
                                                Postal Code: 12345
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="align-start flex">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-blue-100 p-4 text-primary shadow-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold dark:text-white">Bug report</p>
                                            <p className="text-neutral-500 dark:text-neutral-200">
                                                bugs@example.com
                                            </p>
                                            <p className="text-neutral-500 dark:text-neutral-200">
                                                +1 234-567-89
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <section>
                <Footer />

            </section>


        </div>

    );
}