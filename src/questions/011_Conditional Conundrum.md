---
title: Conditional Conundrum
description: Master the art of conditional types in TypeScript!
level: 11
correctAnswer: 3
difficulty: "Expert"
---

## Context

### Question
What will be the type of `T` in the following conditional type?

```typescript
type T = string extends {}
  ? number
  : boolean;
```

## Answers
- `string`
- `boolean`
- `number`
- `never`

## Explanation
The correct answer is `number`. In this conditional type, we're checking if `string` extends `{}` (which is true for all types except `never`). Since `string` does indeed extend `{}`, the condition is true, so `T` resolves to `number`. Conditional types in TypeScript allow you to create types that depend on other types.

## Hint
Consider what it means for a type to "extend" another type in TypeScript.