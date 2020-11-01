# How to :running: the game

To install the packages needed run:
```
npm install
```
To get started run:

```
npm start
```
To run tests:

```
npm test
```


# Additional features :dizzy:

Sadly I found out about this opportunity pretty late in the week, but given more time I would have liked to:

- Add animations after each answer is submitted.
- When the guess is incorrect turn the correct answer green (right now only the incorrect answer turns red and an alert gets triggered with the correct answeer).
- Add a landing page component with an illustration and a start button
- Add subtle sounds to give extra feedback to the user after an option is chosen.
- Write more tests.
- Refine CSS (move reset button and spend more time with overall styling)

# Known issues :space_invader:

- If you click the options fast enough the button color cannot keep up. I would like to refine timeouts and methods that control the flow of the application.
- If I add 'key' prop to the answer options the green or red color stops showing when a user selects an answer.
- The question countdown timer was a last minute feature so it is a little bit buggy. When app starts if countdown winds down to 0 it goes to the next questions, but if you select an option and go to the next question you would have to wait for the timer to wind down twice to skip the question. You can comment out where this.setTimer() gets called in componentDidMount(), reset() and handleAnswerOptionClick ().


