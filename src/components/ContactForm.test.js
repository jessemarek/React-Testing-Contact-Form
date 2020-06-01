import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

test('render ContactForm without errors', () =>{
    render(<ContactForm />)
})

test('can fill in form and submit', () =>{
    const { getByLabelText, getByRole } = render(<ContactForm />)
    
    //Can type into the inputs
    fireEvent.change(getByLabelText(/first name*/i), { target: { value: 'Test'} })
    fireEvent.change(getByLabelText(/last name*/i), { target: { value: 'Name'} })
    fireEvent.change(getByLabelText(/email*/i), { target: { value: 'mail@trashcan.com'} })
    fireEvent.change(getByLabelText(/message/i), { target: { value: 'A message that is not required to submit the form'} })

    //Submit the form by clicking button
    fireEvent.click(getByRole('button', /submit/i))
})