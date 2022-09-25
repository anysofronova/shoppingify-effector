import { IoCartOutline } from 'react-icons/io5';

import { Navigation } from '@/shared/ui';

export const Header = () => (
  <div className="h-[100vh] bg-white px-6 py-8 flex flex-col justify-between items-center max-w-[100px]">
    <div className="flex justify-center items-center max-w-full cursor-pointer">
      <img
        src="src/app/assets/svg/logo.svg"
        alt="logo"
        className="w-full h-full max-w-[30px]"
      />
    </div>
    <Navigation />
    <div className="bg-yellow-400 rounded-full p-2 cursor-pointer flex justify-center">
      <IoCartOutline className="text-white font-bold text-xl" />
    </div>
  </div>
);
