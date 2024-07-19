---
title: Type Inference Intrigue
description: Discover the magic of TypeScript's type inference!
level: 18
correctAnswer: 3
difficulty: "Intermediate"
---

## Context

### Question
What type will TypeScript infer for the variable `x` in the following code?

```typescript
let x = [1, "two", true];
```

## Answers
- `any[]`
- `Array<number | string | boolean>`
- `(number | string | boolean)[]`
- `[number, string, boolean]`

## Explanation
The correct answer is `(number | string | boolean)[]`. TypeScript uses type inference to determine the types of variables when they're not explicitly specified. In this case, it infers that `x` is an array that can contain elements of type `number`, `string`, or `boolean`. This is represented as a union type within an array type.

## Hint
TypeScript tries to infer the most specific type that encompasses all the values in the array.