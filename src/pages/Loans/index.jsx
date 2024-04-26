import { PaginationProvider } from '../../context/paginationContext';
import { LoanTable } from './LoanTable';
import { FiltersForm } from './FiltersForm';
import { PaginationButtons } from './PaginationButtons';

function LoanPage() {
  const filtersValue = { page: 1, limit: 3, maxButtons: 2, loanStatus: '0', loanType: '0', paidStatus: '0', name: '' }

  return (
    <PaginationProvider endpoint={'/loans'} filtersValue={filtersValue}>
      <div>
        <FiltersForm />
        <PaginationButtons />
      </div>
      <LoanTable />
    </PaginationProvider>
  )
}

export default LoanPage;