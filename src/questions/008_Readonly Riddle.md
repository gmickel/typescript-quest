---
title: Readonly Riddle
description: Uncover the secrets of TypeScript's readonly modifier!
level: 8
correctAnswer: 3
difficulty: "Intermediate"
---

## Context

### Question
What is the effect of the `readonly` modifier in the following TypeScript interface?

```typescript
interface Point {
  readonly x: number;
  y: number;
}
```

## Answers
- It makes the entire `Point` object immutable
- It prevents the `x` property from being declared
- It prevents the `x` property from being reassigned after initialization
- It makes the `x` property optional

## Explanation
The correct answer is that it prevents the `x` property from being reassigned after initialization. The `readonly` modifier in TypeScript is used to make a property immutable. Once a value is assigned to a `readonly` property, it cannot be changed. However, it's important to note that this only applies to the property itself, not to the entire object or any nested objects.

## Hint
Think about what "read-only" might imply in terms of modifying a value.