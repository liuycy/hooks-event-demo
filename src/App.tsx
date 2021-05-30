import * as React from 'react';
import SearchInput from './SearchInput';

function App() {
  const [params, updateParams] = React.useState({ keyword: '' });
  const [output, updateOutput] = React.useState('');

  const handleChange = (obj: any) => {
    const newParams = { ...obj };
    updateParams(newParams);
    updateOutput(`keyword: ${newParams.keyword}`);
  };

  return (
    <div className="App">
      <SearchInput onChange={handleChange} />
      <div>{output}</div>
    </div>
  );
}

export default App;
