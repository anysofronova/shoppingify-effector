import bottle from '@/app/assets/svg/bottle.svg';

export const ShoppingListTop = () => {
  const onAdd = () => {
    //
  };
  return (
    <div className="px-4 pt-3">
      <div className="flex w-full p-2 bg-cyan-800 rounded-2xl text-white font-medium justify-center">
        <div className="relative bottom-3.5 -rotate-12 right-2.5">
          <img src={bottle} alt="bottle" className="w-32" />
        </div>
        <div className="flex flex-col relative right-2 justify-center gap-1">
          <div className="text-sm">Didn&apos;t find what you need?</div>
          <button
            onClick={onAdd}
            type="submit"
            className="bg-white text-slate-700 px-3 py-1 rounded-lg text-sm"
          >
            Add item
          </button>
        </div>
      </div>
    </div>
  );
};
