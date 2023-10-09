import { fireEvent, render, screen } from '@testing-library/react'
import History from '../History'
import { expenses } from '../../expenses'
import * as actionDelete from '../../../actions/actionDelete'; // Adjust the import path to your actionDelete file


jest.mock('../../../actions/actionDelete.tsx', () => {
    return {
        __esModule: true,
        default: jest.fn()
    };
});




describe('History',() => {

    it('should render expense array in the correct order', () => {
        render(<History expenses={expenses} />);

        const firstLiItem = screen.getAllByTestId("label")[0]


        expect(firstLiItem).toHaveTextContent('Flower');

        
    })

    it('should render a list with the correct number of items', () => {
        render(<History expenses={expenses} />);

        const expenseArray = screen.getAllByRole('listitem')

        expect(expenseArray).toHaveLength(4);

    })

    it('should not render History when the array is empty', () => {
        render(<History expenses={[]} />) 

        const firstLiLabel = screen.queryByRole('list')

        expect(firstLiLabel).toBeNull()
    })

    it('should call actionDelete function when delete button is clicked', async () => {
        render(<History expenses={expenses} />);

        const deleteButton = screen.getByTestId('delete-button-1');
        fireEvent.click(deleteButton);

        expect(actionDelete.default).toHaveBeenCalled();
    })

})
