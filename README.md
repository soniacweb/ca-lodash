# ca-lodash

JAVASCRIPT SYNTAX, PART II
Lodash
In this project, you will be implementing some of the most exciting functionality from the widely-popular lodash.js library. You will be implementing ten methods that add new functionality for numbers, strings, objects, and arrays.

In implementing each method, we will follow these four steps:

Specify the functionality of the method we are implementing
Ideate a game plan for how to implement this functionality in code
Implement our game plan
Test our code to ensure it works as expected
We encourage you to try to complete the “Ideate” and “Implement” steps on your own before consulting our suggestions for each. It may be difficult at points, but working through difficult problems on your own will be incredibly helpful in your journey to become a stronger developer. Once you’ve come up with a solution on your own, or if you have become so stuck you are no longer being productive, check out our steps to see our suggestions for how to solve the problem.

Objectivie: 
Working on 10 different methods from the lodash library.


#### Testing locally on VSC: 

<img src="./Screenshot 2020-11-21 at 13.40.00.png" />


# Implement _.clamp()

1. Specify: The first method we will implement is .clamp(). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of the method:

.clamp() takes three arguments: a number, a lower bound, and an upper bound
.clamp() modifies the provided number to be within the two provided bounds
If the provided number is smaller than the lower bound, it will return the lower bound as the final number
If the number is larger than the upper bound, it will return the upper bound as the final number
If the number is already within the two bounds, it will return the number as the final number
You can see a diagram demonstrating this functionality here.

When you’ve ideated a game plan for how to implement this functionality, move on to the next step to see how we plan to do it.

2. Ideate: There are a number of different ways to implement this method. One that might have come to your mind would be to use control flow to compare the current value and to the bounds and return the proper result. We are going to present a different solution in these steps so that you can keep considering unexpected ways to solve problems.

Add the .clamp() method to the lodash object.

Use Math.max() to clamp the number by the lower bound. The return value of Math.max() called with the number and the lower bound will be the larger of the two values, meaning it will be clamped by the lower bound.

Use Math.min() to clamp the number by the upper bound. The return value of Math.min() called with the number and the upper bound will be the smaller of the two.

Return the final value of these two operations, which will be the clamped number.

Once you have tried implementing this game plan in code, move on to the next step to see how we do it.

3. Implement: Let’s implement our game plan in code.

Add a method to our _ object called clamp.
Add three parameters to this method: number, lower, and upper.
Within the method, create a variable called lowerClampedValue that is set equal to the return value of Math.max() called with number and lower.
Create a variable called clampedValue that is set equal to the return value of Math.min() called with lowerClampedValue and upper.
Return clampedValue as our final value from the method.
Once you’ve finished implementing this method, move on to the next step to test it.

```
const _ = {

  clamp(number, lower, upper) {
    let lowerClampedVal = Math.max(number, lower)
    let clampedVal = Math.min(lowerClampedVal, upper)
    return clampedVal
  }
}

```