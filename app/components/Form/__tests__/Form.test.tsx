import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../Form'
import * as actionAdd from '../../../actions/actionAdd'; // Adjust the import path to your actionDelete file


jest.mock('../../../actions/actionAdd.tsx', () => {
    return {
        __esModule: true,
        default: jest.fn()
    };
});



describe('Add Expense',() => {

    describe('Render', () => {

        it('should render the input',  () => {
            render(<Form />)
            
            const input = screen.getByPlaceholderText('New Expense');

            expect(input).toBeInTheDocument();
        })


    })

    describe('Behavior',() => {
        it('should be able to add text to the input', async () => {
            render(<Form />)
            const input = screen.getByPlaceholderText('New Expense');
            await userEvent.type(input, 'hey there')
            expect(input).toHaveValue("hey there")
        })

        it('should enable the submit button when text is input',async () => {
            render(<Form />)


            const input = screen.getByPlaceholderText('New Expense') //ACT
            await userEvent.type(input, 'hey there')

            const button = screen.getByRole('button', {
                name: 'Submit'
            })

            expect(button).toBeEnabled() // ASSERT
        })

        it('should empty the text input when submitted', async () => {
            render(<Form />) // ARRANGE

            const input = screen.getByPlaceholderText('New Expense') //ACT
            await userEvent.type(input, 'car expense')
            const button = screen.getByRole('button', {
                name: 'Submit'
            })
            await userEvent.click(button)
            await waitFor(() => {
                expect(input).toHaveValue("")// ASSERT
            })
        })

        it('should call actionAdd function when delete button is clicked', async () => {
            render(<Form />);
    
            const button = screen.getByRole('button', {
                name: 'Submit'
            })
            fireEvent.click(button);
    
            expect(actionAdd.default).toHaveBeenCalled();
        })

    })

})