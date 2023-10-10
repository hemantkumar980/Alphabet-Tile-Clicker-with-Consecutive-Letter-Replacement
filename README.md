# Alphabet-Tile-Clicker-with-Consecutive-Letter-Replacement
it displays a tile for every letter in the alphabet in uppercase format. Then if a tile is clicked, that letter is appended to the current string that exists in the element with ID outputString. If at any point there are 3 consecutive letters that are the same, replace them with an underscore. For example, if A, B, C, F, F, F, G is clicked in that order, the string that appears in outputString would be ABC_G. If 6 of the same letter appears after, for example, clicking A six times followed by a B, then outputstring would be _B.
This program is a simple React application that allows users to click on letter tiles and display a string of letters with some special rules. Here's an explanation of the key parts of the program:

1. **Imports**:
   - The program imports `useState` from React and `createRoot` from `react-dom/client`.

2. **Styles**:
   - `style` object defines some CSS styles for the letter tiles and container.

3. **Tile Component**:
   - The `Tile` component represents an individual letter tile.
   - It takes two props: `letter` and `onClick`.
   - Each letter tile is displayed as a button with the provided letter.
   - When the button is clicked, it calls the `onClick` function with the associated letter.

4. **Application Component**:
   - The `Application` component is the main component of the application.
   - It manages the state of an `outputString` using the `useState` hook. `outputString` starts as an empty string.
   - The `handleClick` function is defined to handle the click events on letter tiles.
     - It concatenates the clicked letter to the current `outputString`.
     - It checks if there are three consecutive identical letters in the `newOutputString` using a regular expression (`/(.)\1\1/`).
     - If three consecutive identical letters are found, it replaces them with an underscore (`_`) using `.replace()` and updates `outputString` with the modified string.
     - If not, it updates `outputString` with the new string.
   - The component renders:
     - A container (`<aside>`) for the letter tiles, where each letter is displayed as a `Tile` component.
     - The `outputString` displayed in a `<div>` with the id "outputString."

5. **Rendering the App**:
   - The program uses `createRoot` to create a root for the React application within the HTML element with the id "root."
   - The `Application` component is rendered inside the root using `root.render(<Application />)`.

Overall, this program creates a React application with a set of letter tiles. When a letter tile is clicked, the clicked letter is added to the `outputString`. If three consecutive identical letters are entered, they are replaced with an underscore. The application demonstrates the use of React state and components to manage and display dynamic content based on user interactions.
