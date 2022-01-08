import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const photo = {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

const mockToggleModal = jest.fn();

afterEach(cleanup)

describe('Modal', () => {
    it('renders', () => {
        render(<Modal photo={photo} onClose={mockToggleModal} />)
    })

    it('matched snapshot', () => {
        const { asFragment } = render(<Modal photo={photo} onClose={mockToggleModal} />);
        expect(asFragment()).toMatchSnapshot();
    })

    it('click event', () => {
        const { getByText } = render(<Modal photo={photo} onClose={mockToggleModal} />);
        fireEvent.click(getByText('Close'));
        expect(mockToggleModal).toHaveBeenCalled();
    })
})