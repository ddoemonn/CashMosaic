import { render, screen } from '@testing-library/react'
import Header from '../Header'
import { expenses } from '../../expenses'


describe('Header', () => {

    it('should render the "Expense Tracker" heading', () => {
        render(<Header />);

        const header = screen.getByRole('heading',{
            name: 'Expense Tracker'
        });

        expect(header).toBeInTheDocument();
    })
    
    it('should render the balance ', () => {
        render(<Header />);

        const balance = screen.getByRole("heading",{
            level: 1,
        });

        expect(balance).toHaveTextContent("$420.00")
    })

    it('should render the income ', () => {
        render(<Header/>);

        const income = screen.getByTestId("income");

        expect(income).toHaveTextContent("$450")
    })

    it('should render the expense ', () => {
        render(<Header />);

        const expense = screen.getByTestId("expense");

        expect(expense).toHaveTextContent("$30")
    })

    it('should render with an empty array', () => {
        render(<Header />);

        const yourBalance = screen.queryByRole('heading',{
            level: 3
        });

        expect(yourBalance).not.toBeInTheDocument();
    })





})