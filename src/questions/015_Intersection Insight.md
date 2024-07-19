---
title: Intersection Insight
description: Master the art of TypeScript intersection types!
level: 15
correctAnswer: 1
difficulty: "Intermediate"
---

## Context

### Question
What does the `&` operator do in the following TypeScript code?

```typescript
type A = { a: string };
type B = { b: number };
type C = A & B;
```

## Answers
- It creates an intersection type
- It creates a union type
- It creates an optional type
- It creates an enum type

## Explanation
The correct answer is that it creates an intersection type. In TypeScript, the `&` operator is used to create intersection types. An intersection type combines multiple types into one. In this case, type `C` will have both the properties of `A` and `B`, so it will have both an `a` property of type `string` and a `b` property of type `number`.

## Hint
Think about what the `&` symbol represents in set theory.