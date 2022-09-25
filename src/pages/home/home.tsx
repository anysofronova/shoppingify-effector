import { useTitle } from 'react-use';

import { ShoppingList } from '@/shared/ui';

export const HomePage = () => {
  useTitle('Home');
  return (
    <div className="flex w-full">
      <div className="font-bold w-full">MY</div>
      <ShoppingList />
    </div>
  );
};
