---
title: Generic Genius
description: Unleash the power of TypeScript generics!
level: 5
correctAnswer: 3
difficulty: "Intermediate"
---

## Context

### Question
Which of the following correctly defines a generic function `identity` that takes an argument of any type and returns it?

## Answers
- `function identity(arg: any): any { return arg; }`
- `function identity<T>(arg) { return arg; }`
- `function identity<T>(arg: T): T { return arg; }`
- `function identity(arg: T): T { return arg; }`

## Explanation
The correct answer is `function identity<T>(arg: T): T { return arg; }`. This function uses a type parameter `T` to capture the type of the input argument. It then uses this type for both the parameter and the return type, ensuring that the function returns the same type as it receives.

## Hint
Generics in TypeScript allow you to create reusable components that can work over a variety of types.