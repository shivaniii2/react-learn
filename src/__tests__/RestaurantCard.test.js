const { render,screen } = require("@testing-library/react")
import "@testing-library/jest-dom"
import ResCard from "../components/ResCardComponent"
import MOCK_DATA from "../mocks/resCardMock.json"

 test('should have restaurant card', () => { 
    render(
        <ResCard  resData={MOCK_DATA}/>
    )
    let data = screen.getByText("Narwana Junction Kitchen")
    expect(data).toBeInTheDocument()
  })