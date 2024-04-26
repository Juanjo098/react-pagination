import { useCallback, useContext } from 'react';
import debounce from 'just-debounce-it';

import { PaginationContext } from '../../context/paginationContext';
import { getUpRange, getDownRange } from '../../utils';

export function PaginationButtons() {
  const { filters, setFilters, data } = useContext(PaginationContext);

  const debounceChangePage = useCallback(debounce((page) => {
    setFilters(prev => { return { ...prev, page } })
  }, 300), []);

  const currentPage = filters.page;
  const limit = filters.limit;
  const maxButtons = filters.maxButtons;
  const total = data?.total;

  return (
    <div>
      <PrevButtons currentPage={currentPage} limit={limit} total={total} maxButtons={maxButtons} debounceChangePage={debounceChangePage} />
      {(total  / limit) > 1 && <button disabled className='bg-gray-400'>{currentPage}</button>}
      <NextButtons currentPage={currentPage} limit={limit} total={total} maxButtons={maxButtons} debounceChangePage={debounceChangePage} />
    </div>
  )
}

function PrevButtons({ currentPage, total, maxButtons, debounceChangePage }){
  const range = getDownRange(currentPage, total, maxButtons);

  return (
    <>
    {currentPage !== 1 && <button onClick={() => debounceChangePage(1)}>Inicio</button>}
    {currentPage !== 1 && <button onClick={() => debounceChangePage(currentPage - 1)}>-1</button>}
    {range.map((value) => {
    return (
      <button onClick={() => debounceChangePage(value)} key={value}>{value}</button>
    )
  })}
    </>
  )
}

function NextButtons({ currentPage, limit, total, maxButtons, debounceChangePage }){
  const range = getUpRange(currentPage, limit, total, maxButtons);

  return (
    <>
        {
          range.map((value) => {
            return (
              <button onClick={() => debounceChangePage(value)} key={value}>{value}</button>
            )
          })
        }
        {(currentPage !== Math.round((total / limit)) && Math.round((total / limit))  !== 0) && <button onClick={() => debounceChangePage(currentPage + 1)}>+1</button>}
        {(currentPage !== Math.round((total / limit)) && Math.round((total / limit))  !== 0) && <button onClick={() => debounceChangePage(Math.round((total / limit)))}>Fin</button>}
    </>
  )
}