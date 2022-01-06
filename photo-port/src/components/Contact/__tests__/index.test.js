import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup)

describe('Contact Form', () => {
    it('renders', () => {
        render(<ContactForm></ContactForm>);
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm></ContactForm>);

        expect(asFragment()).toMatchSnapshot();
    })

    it('h1 tag renders', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);

        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
    })

    it('button renders', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);

        expect(getByTestId('btn')).toHaveTextContent('Submit');
    })
})