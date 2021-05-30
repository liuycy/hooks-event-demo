import * as React from 'react';
import SearchInput from './SearchInput';

function App() {
  const [params, updateParams] = React.useState({ keyword: '' });
  const [pager, setPager] = React.useState({} as any);
  const [output, updateOutput] = React.useState('');

  const handleChange = React.useCallback((obj: any) => {
    const newPager = { ...pager, current: 1 };
    setPager(newPager);
    const newParams = { ...obj };
    updateParams(newParams);
    updateOutput(`keyword: ${newParams.keyword}`);
  }, []);

  return (
    <div className="App">
      <SearchInput onChange={handleChange} />
      <div>{output}</div>
    </div>
  );
}

export default App;
