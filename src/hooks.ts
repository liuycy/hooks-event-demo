import * as React from 'react';
import debounce from 'lodash/debounce';

export function useDebounce<T extends (...args: any) => void>(
  fn: T,
  waiting = 200,
  deps = [fn, waiting]
) {
  const debouned = React.useRef(debounce(fn, waiting));
  React.useEffect(() => {
    debouned.current = debounce(fn, waiting);
    return debouned.current.cancel;
  }, deps);
  return debouned.current;
}
