import { render , screen} from "@testing-library/react"
import Contact from "../components/Contact"
import '@testing-library/jest-dom'


describe('Contact us page test cases', () => {
    test('should be loaded', () => { 
        render(<Contact/>);
        
       // Query
        let pageHeading = screen.getByText(/Contact Us Page/);
        
        // Assertion 
        
        expect(pageHeading).toBeInTheDocument()
       
       
    
     })
     
     test('should have an input field', () => { 
        render(<Contact/>);
       let placeholder = screen.getByPlaceholderText('Type your query here');
       expect(placeholder).toBeInTheDocument();
        
      })
      
      
      test('should have a submit btton', () => { 
        render(<Contact/>);
        let button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
       })
       
       
       test('should have a button with text submit on it', () => { 
        render(<Contact/>);
        let buttons = screen.getByText('Submit');
        expect(buttons).toBeInTheDocument();
       })
       
       
       // if you want to check for all list of elements then
       
       test('should have two input fields', () => { 
        render(<Contact/>);
        let input = screen.getAllByRole("textbox");
        expect(input.length).toBe(2)
        })
    
});

