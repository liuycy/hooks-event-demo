import * as React from 'react';
import SearchInput from './SearchInput';

function App() {
  const [params, updateParams] = React.useState({ keyword: '' });
  const [pager, setPager] = React.useState({} as any);
  const [output, updateOutput] = React.useState('');

  const handleFetch = (newParams: any, newPager: any) => {
    updateOutput(
      `keyword: ${newParams.keyword}, pager: ${newPager.current}, ${newPager.size}`
    );
    setPager({ ...newPager, size: ~~(100 * Math.random()) });
  };

  const handleChange = React.useCallback((obj: any) => {
    setPager((pager: any) => {
      const newPager = { ...pager, current: 1 };
      const newParams = { ...obj };
      updateParams(newParams);
      handleFetch(newParams, newPager);
    });
  }, []);

  return (
    <div className="App">
      <SearchInput onChange={handleChange} />
      <div>{output}</div>
    </div>
  );
}

export default App;
