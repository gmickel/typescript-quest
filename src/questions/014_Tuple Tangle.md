---
title: Tuple Tangle
description: Unravel the mysteries of TypeScript tuples!
level: 14
correctAnswer: 3
difficulty: "Intermediate"
---

## Context

### Question
What is the type of `t` in the following TypeScript code?

```typescript
let t: [string, number] = ["hello", 10];
```

## Answers
- An array of string and number
- An object with string and number properties
- A tuple with a string and a number
- A union of string and number

## Explanation
The correct answer is a tuple with a string and a number. In TypeScript, tuples are arrays with a fixed number of elements whose types are known. In this case, `t` is defined as a tuple with exactly two elements: the first must be a string, and the second must be a number.

## Hint
Tuples in TypeScript are like arrays with a fixed structure and known types for each position.