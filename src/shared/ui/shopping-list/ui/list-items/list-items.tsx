import { MdModeEditOutline } from 'react-icons/md';

import { ListItem } from '@/shared/ui/shopping-list/ui/list-items/list-item';

export const ListItems = () => (
  <div className="w-full flex flex-col justify-items-start flex-1 align-top h-full px-4">
    <div className="flex justify-between items-center">
      <h2>Shopping list</h2>
      <div className="text-xl text-slate-700 cursor-pointer">
        <MdModeEditOutline />
      </div>
    </div>
    <div>
      <div className="text-sm text-slate-400">Fruit and vegetables</div>
      <div>
        <ListItem count={3} title="Acocado" />
      </div>
    </div>
  </div>
);
