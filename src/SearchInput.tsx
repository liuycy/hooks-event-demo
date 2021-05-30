import * as React from 'react';
import { useDebounce } from './hooks';

interface Props {
  onChange: (val: any) => void;
}

const SearchInput: React.FC<Props> = ({ onChange }) => {
  const [params, updateParams] = React.useState('');

  const debouncedChange = useDebounce(onChange);

  function handleValueChange(value: string) {
    updateParams(value);
    debouncedChange({ keyword: value });
  }

  return (
    <div>
      <input
        type="text"
        value={params}
        onChange={(e) => handleValueChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
