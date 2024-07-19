---
title: Fantastic Functions
description: Let's explore TypeScript function syntax!
level: 2
correctAnswer: 2
difficulty: "Beginner"
---

## Context

### Question
Which of the following correctly defines a TypeScript function that takes two numbers as parameters and returns their sum?

## Answers
- `function addNumbers(a, b): number { return a + b; }`
- `function addNumbers(a: number, b: number): number { return a + b; }`
- `function addNumbers(a: number, b: number) { return a + b; }`
- `function addNumbers(a: int, b: int): int { return a + b; }`

## Explanation
The correct answer is `function addNumbers(a: number, b: number): number { return a + b; }`. This function definition correctly specifies that both parameters `a` and `b` are of type `number`, and the function returns a `number`. In TypeScript, it's good practice to explicitly type your function parameters and return values.

## Hint
Remember, TypeScript uses `:` for type annotations, and `number` is the type for all numeric values.