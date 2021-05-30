import * as React from 'react';
interface Props {
  onChange: (val: any) => void;
}

const SearchInput: React.FC<Props> = ({ onChange }) => {
  const [params, updateParams] = React.useState('');

  function handleValueChange(value: string) {
    updateParams(value);
    onChange({ keyword: value });
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
