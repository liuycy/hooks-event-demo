import * as React from 'react';
import SearchInput from './SearchInput';

function App() {
  const [state, dispatch] = React.useReducer(
    (state: any, action: any) => {
      if (action.type === 'params') {
        return { ...state, params: { ...state.params, ...action.params } };
      }
      if (action.type === 'pager') {
        return { ...state, pager: { ...state.pager, ...action.pager } };
      }
      if (action.type === 'filter') {
        return { ...state, filter: { ...state.filter, ...action.filter } };
      }
      if (action.type === 'output') {
        return {
          ...state,
          output: `keyword: ${state.params.keyword}, pager: ${state.pager.current}, ${state.pager.size}, filter: ${state.filter.pid}, ${state.filter.id}`,
        };
      }

      return { ...state };
    },
    {
      params: { keyword: '' },
      pager: {},
      filter: {},
      output: '',
    }
  );

  const handleFetch = (newParams: any, newPager: any, newFilter: any) => {
    dispatch({
      type: 'output',
    });
    dispatch({
      type: 'pager',
      pager: { ...newPager, size: ~~(100 * Math.random()) },
    });
    dispatch({
      type: 'filter',
      filter: { ...newFilter, id: ~~(10000 * Math.random() + 10000) },
    });
  };

  const handleChange = React.useCallback((obj: any) => {
    const newFilter = { pid: 0 };
    const newPager = { current: 1 };
    const newParams = { ...obj };
    dispatch({ type: 'params', params: newParams });
    dispatch({ type: 'pager', pager: newPager });
    dispatch({ type: 'filter', params: newFilter });
    handleFetch(newParams, newPager, newFilter);
  }, []);

  return (
    <div className="App">
      <SearchInput onChange={handleChange} />
      <div>{state.output}</div>
    </div>
  );
}

export default App;
