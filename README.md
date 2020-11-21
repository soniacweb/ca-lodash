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

# Implement .inRange()


1. Specify: The next number method we will implement is .inRange(). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of the method:

.inRange() takes three arguments: a number, a start value, and an end value
.inRange() checks to see if the provided number falls within the range specified by the start and end values
If the provided number is smaller than the start value, .inRange() will return false
If the provided number is larger than or equal to the end value, .inRange() will return false
If the provided number is within the start and end values, .inRange() will return true
If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value
If the provided start value is larger than the provided end value, the two values should be swapped
When you’ve ideated a game plan for how to implement this functionality, move on to the next step to see how we plan to do it.

2. Ideate: As always, there are a number of different solutions that could work to solve this problem. This is just one solution.

Add the .inRange() method to the lodash object.
Check to see if the end value is undefined. If so, set the end value equal to the start value and then set the start value equal to 0.
Check to see if the start value is larger than the end value. If so, swap the two values. Note: We will need to use a temporary variable to do this. To understand why, imagine if we tried to swap values without one. We might start by setting the end value equal to the start value. When we then go to set the start value equal to the end value, the end value will have already been overwritten and the swap can’t be completed. To solve this, we create a variable that will temporarily store the end value to access when we need to set the new start value and complete the swap.
Using boolean operators, find out if the number is in the specified range.
Return the value of the previous operation from the method.
Once you have tried implementing this game plan in code, move on to the next step to see how we do it.

3. Implement: Let’s implement our game plan in code.

Add a method to our _ object called inRange.
Add three parameters to this method: number, start, and end.
Within the method, create an if statement that checks to see if end is undefined.
Within the if statement block, set end equal to start. Then set start equal to 0.
After the previous if statement, add another if statement. This if statement should check whether start is bigger than end.
Within the if statement block, swap the two start and end values. Create a variable called temp that is set to the current end value. Then set end equal to start. Finally, set start equal to temp.
After our second if statement, create a variable called isInRange and set it equal to a boolean expression that checks if start is smaller than or equal to number and if number is smaller than end.
Finally, return the value of isInRange from the method.
Once you’ve finished implementing this method, move on to the next step to test it.

# Implement .words()

1. Specify: Let’s start implementing some string methods! The first string method we will implement is .words(). We will be writing a slightly modified version of this method to save you some time. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work. Then read below to see which pieces of functionality you will implement.

Here is a summary of what your method should do:

.words() takes one argument: a string
.words() splits the string into an array of words
A word is defined by a space-separated string of characters, so each space character, ' ', indicates the end of one word and the start of the next
Note: You may have noticed in the documentation that this function has a pattern parameter. Your method does not need to accept the additional pattern parameter, we will only split our string into words based on spaces
When you’ve ideated a game plan for how to implement this functionality, move on to the next step to see how we plan to do it.

2. Ideate: This solution probably has the most potential solutions of the methods we have implemented thus far. We’ve opted to use a built-in JavaScript method to make this method as short and readable as possible.

Add the .words() method to the lodash object.

Use the string .split() method to split the provided string on space characters into an array of words.

Return the array of words generated in the previous step.

Once you have tried implementing this game plan in code, move on to the next step to see how we do it.

3. Implement: Let’s implement our game plan in code.

Add a method to our _ object called words.
Add one parameter to this method: string.
Within the method, create a variable called words and set its value equal to string split on space characters ' ' using the .split() method.
Return the value of words from the method.
Once you’ve finished implementing this method, move on to the next step to test it.