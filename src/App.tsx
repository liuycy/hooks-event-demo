import * as React from 'react';
import SearchInput from './SearchInput';

function App() {
  const [params, updateParams] = React.useState({ keyword: '' });
  const [pager, setPager] = React.useState({} as any);
  const [filter, setFilter] = React.useState({} as any);
  const [output, updateOutput] = React.useState('');

  const handleFetch = (newParams: any, newPager: any, newFilter: any) => {
    updateOutput(
      `keyword: ${newParams.keyword}, pager: ${newPager.current}, ${newPager.size}, filter: ${newFilter.pid}, ${newFilter.id}`
    );
    setPager({ ...newPager, size: ~~(100 * Math.random()) });
    setFilter({ ...newFilter, id: ~~(10000 * Math.random()) + 10000 });
  };

  const handleChange = React.useCallback((obj: any) => {
    setPager((pager: any) => {
      setFilter((filter: any) => {
        const newFilter = { ...filter, pid: 0 };
        const newPager = { ...pager, current: 1 };
        const newParams = { ...obj };
        updateParams(newParams);
        handleFetch(newParams, newPager, newFilter);
      });
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
