import { useEffect } from 'react';
import { createContext, useState } from 'react';
import axios from 'axios';

export const PaginationContext = createContext();

export function PaginationProvider({ children, endpoint, filtersValue }){
  const [filters, setFilters] = useState(filtersValue)
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_HOST,
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDQ3MjI1MDA1NGFjMmJmYzc1YjMwYiIsInJvbGUiOjEsImlhdCI6MTcxMzg5MTQ1NX0.Ed9x29_3BItDA1sxNBVpRRGVU_fkS5KyABOibEvAsW4'
      }
    })

    axiosInstance.get(endpoint, { params: filters })
      .then((res) => {
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