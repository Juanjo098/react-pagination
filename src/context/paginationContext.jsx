import { useEffect } from 'react';
import { createContext, useState } from 'react';
import axios from 'axios';

export const PaginationContext = createContext();

export function PaginationProvider({ children }){
  const [filters, setFilters] = useState({ page: 1, limit: 3, maxButtons: 2, loanStatus: '0', loanType: '0', paidStatus: '0', name: '' })
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:3000/api/v1',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDQ3MjI1MDA1NGFjMmJmYzc1YjMwYiIsInJvbGUiOjEsImlhdCI6MTcxMzg5MTQ1NX0.Ed9x29_3BItDA1sxNBVpRRGVU_fkS5KyABOibEvAsW4'
      }
    })

    axiosInstance.get('/loans', { params: filters })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [filters])



  return (
    <PaginationContext.Provider
      value={{ data, setData, filters, setFilters }}
    >
      {children}
    </PaginationContext.Provider>
  )
}