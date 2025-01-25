import {DarkThemeToggle} from "flowbite-react";

export default async function HeaderComponent() {
    return (

        <nav className="bg-gray-900">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                <a href="https://racketeer.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg version="1.1" className="h-12 self-center fill-white" xmlns="http://www.w3.org/2000/svg"
                         x="0px" y="0px"
                         viewBox="0 100 450 400">
                        <g id="XMLID_1_">
                            <path id="XMLID_33_" d="M128.2,43className-106.3,0-212.6,0-319c93,0,186,0,279,0c0,106.3,0,212.6,0,319
		C314.2,434.8,221.2,434.8,128.2,434.8z M281.9,396.8c10.7,15.5,23.9,26.6,41,32.5c21.9,7.5,42.7,5.3,60.9-9.9
		c14.7-12.2,21.1-28.7,22.3-47.3c0.9-14.5-2.3-28.3-9-41.7C358.5,352.5,320.4,374.5,281.9,396.8z M291,350.8
		c-46.9-46.5-93.9-93.2-140.6-139.5c-6.6,6.5-13.8,13.5-21.1,20.6c46.9,46.6,93.8,93.2,140.9,140C276.6,365.5,283.6,358.4,291,350.8
		z M303.8,125.1c17.2,64.3,34.1,128.1,51.3,192.2c10-2.7,19.4-5.3,29.2-7.9C367.1,245,350.1,181.3,333,117.3
		C323,119.9,313.8,122.4,303.8,125.1z M209.2,167.6c33.2,57.7,66.2,114.9,99.3,172.4c9-5.2,17.5-10.2,26.2-15.3
		c-33.3-57.8-66.2-114.9-99.2-172.3C226.6,157.6,218.3,162.4,209.2,167.6z"/>
                            <path id="XMLID_32_" d="M281.9,396.8c38.5-22.2,76.7-44.3,115.2-66.5c6.7,13.5,9.9,27.2,9,41.7c-1.2,18.6-7.6,35.1-22.3,47.3
		c-18.3,15.2-39,17.4-60.9,9.9C305.7,423.4,292.5,412.3,281.9,396.8z"/>
                            <path id="XMLID_31_" d="M291,350.8c-7.5,7.6-14.4,14.7-20.8,21.2c-47-46.7-94-93.4-140.9-140c7.3-7.1,14.5-14.2,21.1-20.6
		C197.1,257.7,244.1,304.3,291,350.8z"/>
                            <path id="XMLID_30_" d="M303.8,125.1c9.9-2.7,19.2-5.2,29.2-7.8c17.1,64.1,34.1,127.8,51.3,192.1c-9.8,2.7-19.2,5.2-29.2,7.9
		C338,253.2,321,189.4,303.8,125.1z"/>
                            <path id="XMLID_29_" d="M209.2,167.6c9.1-5.2,17.3-10,26.2-15.1c33,57.3,65.9,114.5,99.2,172.3c-8.7,5.1-17.2,10-26.2,15.3
		C275.4,282.5,242.4,225.3,209.2,167.6z"/>
                        </g>
                    </svg>

                    <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">Racketeer</span>
                    <span className="self-center whitespace-nowrap text-sm font-semibold text-white">- Happy to serve</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="mt-4 flex flex-row">
                        <li>
                            <a href="rackets"
                               className="block rounded px-3 py-2 text-white hover:text-gray-300"
                               aria-current="page">Rackets</a>
                        </li>
                        <li>
                            <a href="strings"
                               className="block rounded px-3 py-2 text-white hover:text-gray-300">Strings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
