import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('should render', () => {
    render(<Button />)

    expect(screen.getByRole('button')).toBeDefined()
  })

  it('should render with given text', async () => {
    const text = 'Click me'

    render(<Button>{ text }</Button>)

    expect(screen.getByText(text))
  })

  it('should call given function when clicked', async () => {
    const myOnClick = vi.fn()
    const wrapper = render(<Button onClick={ myOnClick }></Button>)
    const button = await wrapper.findByRole('button')

    fireEvent.click(button)

    waitFor(() => expect(myOnClick).toHaveBeenCalled())
  })
})
