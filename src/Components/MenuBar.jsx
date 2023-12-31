import {Link} from "react-router-dom";

export default function MenuBar()
{
    return(
    <div className="sticky">
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Garrett Rudisill</span>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg dark:text-white md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
                    <Link to={"/construction"} className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'>
                        Home
                    </Link>
                    <Link to={"/about"} className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'>
                        About
                    </Link>
                    <li>
                        <a href="https://www.linkedin.com/in/garrett-rudisill/"
                           className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}
