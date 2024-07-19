---
title: Recursive Type Riddle
description: Dive into the depths of recursive types in TypeScript!
level: 24
correctAnswer: 2
difficulty: "Expert"
---

## Context

### Question
What does the following TypeScript type definition represent?

```typescript
type JSON =
  | string
  | number
  | boolean
  | null
  | JSON[]
  | { [key: string]: JSON };
```

## Answers
- A union type of primitive values
- A recursive type definition for JSON-like structures
- An intersection type of objects and arrays
- A mapped type for object properties

## Explanation
The correct answer is a recursive type definition for JSON-like structures. This type definition accurately represents the structure of JSON data. It can be a primitive (string, number, boolean, or null), an array of JSON values, or an object with string keys and JSON values. The recursion comes from the fact that JSON is used in its own definition, allowing for nested structures of arbitrary depth.

## Hint
Look closely at how the type references itself within its own definition.