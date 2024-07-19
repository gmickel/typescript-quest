---
title: Keyof Kinetics
description: Unlock the power of TypeScript's keyof operator!
level: 17
correctAnswer: 2
difficulty: "Expert"
---

## Context

### Question
What is the type of `K` in the following TypeScript code?

```typescript
interface Person {
  name: string;
  age: number;
}

type K = keyof Person;
```

## Answers
- `string`
- `"name" | "age"`
- `string | number`
- `Person`

## Explanation
The correct answer is `"name" | "age"`. The `keyof` operator in TypeScript creates a union type of all the keys in the given type. In this case, `Person` has two keys: `"name"` and `"age"`. Therefore, `keyof Person` results in the union type `"name" | "age"`.

## Hint
The `keyof` operator works with the keys of an object type, not the value types.