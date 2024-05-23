import { IoMenu } from 'react-icons/io5';
import { FaRegUser, FaCartPlus } from 'react-icons/fa';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import MobileNavigation from './MobileNavigation';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigationToggler = () => setOpen((prev) => !prev);

  return (
    <header className="flex flex-col gap-2 bg-neutral-800 pt-4 relative">
      <AnimatePresence>
        {open && <MobileNavigation navigationToggler={navigationToggler} />}
      </AnimatePresence>
      <div className="">
        <div className="mx-auto flex justify-between px-3 max-w-[1200px]">
          <div className="flex gap-2">
            <button
              onClick={navigationToggler}
              className="cursor-pointer md:hidden"
            >
              <IoMenu fontSize={24} />
            </button>
            <div className="flex">
              <img
                className="w-20"
                src="https://res.cloudinary.com/ddx7todbr/image/upload/v1713606629/Electronics%20Parts%20Listing%20Website/s0l9tr2tn1qdzdbupymp.avif"
                alt=""
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Link>
              <FaRegUser fontSize={22} />
            </Link>
            <Link>
              <FaCartPlus fontSize={22} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full bg-neutral-400 p-2">
        <form className="flex w-[700px] justify-between rounded-lg">
          <input
            className="text-neutral-900 p-4 w-full rounded-tl-md rounded-bl-md focus:outline-none"
            type="search"
            name="part number"
            id=""
            placeholder="Enter keyword or part#"
          />
          <button
            type="submit"
            className="flex items-center justify-center bg-red-600 w-16 rounded-tr-md rounded-br-md"
          >
            <FaMagnifyingGlass />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
