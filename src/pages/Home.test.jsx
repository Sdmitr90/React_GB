import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Home from './Home'
import Buttom from "../components/Button/Button";

describe('Home', () => {
    it('render component Home', () => {
        render(<Home>Home</Home>)
    })
    it('render with snapshot', () => {
        const {asFragment} = render(<Home>Home</Home>)
        expect(asFragment()).toMatchSnapshot()
    })
});