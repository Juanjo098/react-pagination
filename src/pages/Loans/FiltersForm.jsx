import { useCallback, useContext } from 'react';
import debounce from 'just-debounce-it';

import { PaginationContext } from '../../context/paginationContext';

export function FiltersForm() {
  const { setFilters } = useContext(PaginationContext);

  const debounceSearch = useCallback(debounce((data) => {
    setFilters((prev) => {return { ...prev, ...data, page: 1 }});
  }, 300), []);

  const handleChange = (e => {
    const data = Object.fromEntries(new FormData(e.target.parentNode));
    debounceSearch(data)
  })

  return (
    <form onChange={(e) => {handleChange(e)}}>
      <select name="loanStatus">
        <option value={0}>Por aprobar</option>
        <option value={1}>Rechazado</option>
        <option value={2}>Aproados</option>
        <option value={3}>Atrasados</option>
      </select>
      <select name="loanType">
        <option value={0}>Ambos</option>
        <option value={1}>Efectivo</option>
        <option value={2}>En especie</option>
      </select>
      <select name="paidStatus">
        <option value={0}>Ambos</option>
        <option value={1}>Pagado</option>
        <option value={2}>No pagado</option>
      </select>
      <input type="text" placeholder='name' name='name'/>
    </form>
  )
}