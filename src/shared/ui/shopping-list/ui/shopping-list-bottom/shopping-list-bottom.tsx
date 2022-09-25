import { FormEvent, useState } from 'react';

export const ShoppingListBottom = () => {
  const [text, setText] = useState<string>('');
  const onAdd = (data: FormEvent<HTMLFormElement>) => {
    console.log(data);
  };
  return (
    <div className="w-full px-4 py-3 bg-white">
      <form
        onSubmit={onAdd}
        className="flex border-2 border-amber-300 rounded-md overflow-hidden"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          placeholder="Enter a name"
          className="flex-1 p-2 placeholder:text-sm placeholder:text-slate-500 placeholder:font-light outline-none"
        />
        <button
          type="submit"
          className="bg-amber-300 text-white px-2 py-1 rounded-l-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};
