import { render, screen, fireEvent } from "@testing-library/react"

import { Button } from "@/components"

describe("components/Button test", () => {
  const mockFn = jest.fn()

  beforeEach(() => {
    render(<Button label='ボタン' onClick={mockFn} ariaLabel='hoge' />)
  })

  it("show a Button label", () => {
    expect(screen.getByText("ボタン")).toBeInTheDocument()
  })

  it("click event test ", () => {
    fireEvent.click(screen.getByRole("button"))
    expect(mockFn).toBeCalled()
  })
})
