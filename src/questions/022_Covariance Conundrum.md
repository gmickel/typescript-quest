---
title: Covariance Conundrum
description: Unravel the mysteries of type variance in TypeScript!
level: 22
correctAnswer: 3
difficulty: "Expert"
---

## Context

### Question
Given the following code, which statement about type variance in TypeScript is true?

```typescript
interface Animal { name: string }
interface Dog extends Animal { breed: string }

const animals: Animal[] = [];
const dogs: Dog[] = [];

// Which assignment is type-safe?
```

## Answers
- `animals = dogs` is type-safe, but `dogs = animals` is not
- Both `animals = dogs` and `dogs = animals` are type-safe
- `animals = dogs` is type-safe, but `dogs = animals` is not
- Neither `animals = dogs` nor `dogs = animals` is type-safe

## Explanation
The correct answer is that `animals = dogs` is type-safe, but `dogs = animals` is not. This demonstrates that arrays in TypeScript are covariant. You can assign an array of a more specific type (Dog[]) to an array of a more general type (Animal[]). However, the reverse is not true because it could lead to runtime errors if you tried to add a generic Animal to an array that's supposed to contain only Dogs.

## Hint
Consider what operations would be safe to perform on these arrays after assignment.
