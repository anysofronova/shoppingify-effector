import { FC, useEffect, useRef, useState } from 'react';
import { MdAdd, MdOutlineDeleteOutline, MdRemove } from 'react-icons/md';

import { IItem } from '@/shared/interfaces';

export const ListItem: FC<IItem> = ({ count, title }) => {
  const [countValue, setCountValue] = useState<number>(count);
  const [mode, setMode] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        setMode(false);
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  return (
    <div className="w-full flex justify-between items-center gap-2">
      <div>{title}</div>
      {mode ? (
        <div
          className="border-2 border-amber-300 bg-white rounded-xl text-sm flex justify-between
        items-center w-full px-2 py-0.5"
          ref={ref}
        >
          <div className="text-amber-300 border-r border-amber-300 pr-1 text-xl cursor-pointer">
            <MdOutlineDeleteOutline />
          </div>
          {countValue > 1 ? (
            <div
              onClick={() => setCountValue(countValue - 1)}
              aria-hidden="true"
              className="cursor-pointer"
            >
              <MdRemove />
            </div>
          ) : (
            <div className="min-w-fit" />
          )}
          <div className="text-sm whitespace-nowrap">{countValue} pcs</div>
          <div
            className="cursor-pointer"
            onClick={() => setCountValue(countValue + 1)}
            aria-hidden="true"
          >
            <MdAdd />
          </div>
        </div>
      ) : (
        <div
          className="border-2 border-amber-300 px-2 py-0.5 rounded-full text-sm"
          onClick={() => setMode(true)}
          aria-hidden="true"
        >
          {countValue} pcs
        </div>
      )}
    </div>
  );
};
