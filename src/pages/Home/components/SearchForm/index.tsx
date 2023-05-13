import { FormEvent, useRef } from 'react';

interface Props {
  onSearch: (value: string) => void;
}

const SearchForm = ({ onSearch }: Props): JSX.Element => {
  const inp = useRef<HTMLInputElement>(null);

  //   TODO instead of submit can add debounce search
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (inp.current) {
      onSearch(inp.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        ref={inp}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </form>
  );
};

export default SearchForm;
