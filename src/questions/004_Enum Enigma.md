---
title: Enum Enigma
description: Decode the secrets of TypeScript enums!
level: 4
correctAnswer: 1
difficulty: "Beginner"
---

## Context

### Question
What will be the value of `Color.Green` in the following TypeScript enum?

```typescript
enum Color {
  Red,
  Green,
  Blue
}
```

## Answers
- 1
- 2
- "Green"
- undefined

## Explanation
The correct answer is 1. In TypeScript, when you declare an enum without initializing its members, they are automatically assigned numeric values starting from 0. So `Color.Red` would be 0, `Color.Green` would be 1, and `Color.Blue` would be 2.

## Hint
Think about how enums are initialized by default in TypeScript.