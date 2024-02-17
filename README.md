# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Links

- Solution URL: [Solution URL](https://github.com/lahanhelith/age-calculator-frontend-mentor)
- Live Site URL: [Live Site URL](https://aquamarine-faun-60a3fa.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid

### What I learned

This solution required me to learn how to work with CSS Grid as when I tried to do arrange the layout of the form in flexbox I felt that my CSS was getting more complicated and weird. So I decided to do the area with CSS grid which was appropriate for what I was using for.

Grid introduced a new CSS Unit called fr which is a unit that takes up a fraction of the available space. This is very useful when making responsive layouts as the size of 1fr changes with screen width.

### Continued development

It was quite frustrating to figure out how to write the Javascript so all the specific errors are checked for in the text. I plan on researching more and I'm willing to seek advice on how to clean up the code better so it doesn't look awful.

### Useful resources

- [How To Build Age Calculator App Using HTML CSS And JavaScript - GreatStack]([https://www.example.com](https://www.youtube.com/watch?v=_pw8vk1tAhs)) - This video taught me more about how to calculate ages and work with the Date object in general.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/lahanhelith)
