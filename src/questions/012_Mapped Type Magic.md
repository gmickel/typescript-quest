---
title: Mapped Type Magic
description: Unlock the secrets of TypeScript's mapped types!
level: 12
correctAnswer: 4
difficulty: "Expert"
---

## Context

### Question
What does the following mapped type do?

```typescript
type Nullable<T> = { [P in keyof T]: T[P] | null };
```

## Answers
- It makes all properties of T required
- It removes null from all properties of T
- It makes all properties of T optional
- It makes all properties of T nullable

## Explanation
The correct answer is that it makes all properties of T nullable. This mapped type creates a new type based on T, where each property can be either its original type or `null`. The `[P in keyof T]` part iterates over all properties of T, and `T[P] | null` creates a union type of the original property type and `null`.

## Hint
Think about what adding `| null` to a type does in TypeScript.