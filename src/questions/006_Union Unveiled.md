---
title: Union Unveiled
description: Master the art of TypeScript union types!
level: 6
correctAnswer: 2
difficulty: "Intermediate"
---

## Context

### Question
What is the purpose of the `|` operator in the following TypeScript code?

```typescript
let result: number | string;
```

## Answers
- It creates an intersection type
- It creates a union type
- It creates an optional type
- It creates an enum type

## Explanation
The correct answer is that it creates a union type. In TypeScript, the `|` operator is used to create union types. In this case, `result` can be either a `number` or a `string`. Union types are useful when a value can be one of several types.

## Hint
Think about what the `|` symbol might represent in set theory.