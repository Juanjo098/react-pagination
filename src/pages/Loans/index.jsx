import { PaginationProvider } from '../../context/paginationContext';
import { LoanTable } from './LoanTable';
import { FiltersForm } from './FiltersForm';
import { PaginationButtons } from './PaginationButtons';

function LoanPage() {
  return (
    <PaginationProvider>
      <div>
        <FiltersForm />
        <PaginationButtons />
      </div>
      <LoanTable />
    </PaginationProvider>
  )
}

export default LoanPage;