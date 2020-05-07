import React from 'react'
import { render } from '@testing-library/react'
import ContactForm from './ContactForm'

test('render ContactForm without errors', () =>{
    render(<ContactForm />)
})