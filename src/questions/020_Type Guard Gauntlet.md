---
title: Type Guard Gauntlet
description: Master the art of TypeScript type guards!
level: 20
correctAnswer: 4
difficulty: "Expert"
---

## Context

### Question
Which of the following is NOT a valid type guard in TypeScript?

## Answers
- `typeof x === "string"`
- `x instanceof Array`
- `"property" in x`
- `x as string`

## Explanation
The correct answer is `x as string`. While `x as string` is a valid type assertion in TypeScript, it's not a type guard. Type guards are expressions that perform a runtime check that guarantees the type in some scope. The other options are valid type guards: `typeof` checks for primitive types, `instanceof` checks if an object is an instance of a class, and the `in` operator checks if a property exists on an object.

## Hint
Type guards in TypeScript are used to narrow down the type of a variable within a conditional block.