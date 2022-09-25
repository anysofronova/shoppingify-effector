import {
  ListItems,
  ShoppingListBottom,
  ShoppingListTop,
} from '@/shared/ui/shopping-list/ui';

export const ShoppingList = () => (
  <div className="flex flex-col h-[100vh] justify-center w-fit bg-amber-100 self-end gap-3">
    <ShoppingListTop />
    <ListItems />
    <ShoppingListBottom />
  </div>
);
