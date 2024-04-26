import { useContext } from 'react';
import { PaginationContext } from '../../context/paginationContext';

export function LoanTable() {
  const { data } = useContext(PaginationContext);

  return (
    <>
      {
        data && data?.loans?.map((info) => {
          const date = new Date(info.date)
          return (
            <div key={info.loanId}>
              <p>{info.userName}</p>
              <p>{date.toLocaleString()}</p>
              <p>{info.amount}</p>
            </div>
          )
        })
      }
    </>
  )
}