# basic-calculator
**Basic Calculator README**

This README file provides an overview and explanation of the "Advanced Calculator" code implementation. The calculator is a simple web application that allows users to perform basic arithmetic calculations.

### How to Use the Calculator

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. The calculator will be displayed on the webpage, and you can start using it by clicking the buttons.

### Features

1. Display: The calculator has a display area where the entered numbers and calculation results are shown.

2. Number Buttons: The calculator has buttons for numbers 0-9, allowing you to input operands.

3. Operator Buttons: The calculator has buttons for basic arithmetic operators (+, -, *, /), allowing you to perform calculations.

4. Clear Button (C): The "C" button clears the current calculation and resets the calculator.

5. Equal Button (=): The "=" button calculates the result of the entered expression and displays it on the screen.

6. Expression History: The calculator displays the expression history in the top area of the calculator, showing the sequence of operands and operators used in the calculations.

### Code Structure

The code is written in HTML, CSS, and JavaScript and divided into two main parts:

#### 1. HTML (index.html)

The HTML file defines the structure of the calculator UI, including the display area, buttons for numbers and operators, and event listeners to handle user input.

#### 2. JavaScript (index.js)

The JavaScript file contains the logic to handle user input, perform calculations, and update the display and expression history accordingly.

Key Functions:

- `appendToDisplay(value)`: This function is called when a number button is clicked. It appends the clicked number to the current display.

- `clearDisplay()`: This function is called when the "C" button is clicked. It clears the calculator and resets all variables.

- `handleOperator(operator)`: This function is called when an operator button (+, -, *, /) is clicked. It handles the operations and updates the display and expression history.

- `calculate()`: This function is called when the "=" button is clicked. It performs the arithmetic calculation based on the entered expression and displays the result.

- `updateDisplay()`: This function updates the calculator's display and expression history with the current values.

### Styling

The calculator UI is styled using CSS, defining the layout, button styles, and display appearance.

### Compatibility

The calculator is designed to work in modern web browsers that support JavaScript and CSS. It is optimized for desktop and mobile devices.

### Contributing

If you find any issues or would like to add new features to the calculator, feel free to fork the repository and submit a pull request.


### Acknowledgments

The calculator implementation is based on a template created by an anonymous developer. We extend our gratitude for their open-source contribution.

For any questions or support, please contact at [harrys3023@gmail.com](mailto:harrys3023@gmail.com).
