---
title: Async Adventure
description: Navigate the asynchronous world of TypeScript!
level: 13
correctAnswer: 2
difficulty: "Intermediate"
---

## Context

### Question
Which of the following correctly defines an asynchronous function in TypeScript that returns a Promise resolving to a number?

## Answers
- `function asyncFunc(): Promise { return Promise.resolve(42); }`
- `async function asyncFunc(): Promise<number> { return 42; }`
- `function asyncFunc(): Promise<number> { return 42; }`
- `async function asyncFunc(): number { return Promise.resolve(42); }`

## Explanation
The correct answer is `async function asyncFunc(): Promise<number> { return 42; }`. In TypeScript, an async function always returns a Promise. The `async` keyword before the function declaration automatically wraps the return value in a Promise. The return type `Promise<number>` indicates that the Promise will resolve to a number.

## Hint
Remember that `async` functions in TypeScript always return Promises, and you can specify the type that the Promise resolves to.