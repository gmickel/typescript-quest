---
title: Interface Intricacies
description: Unravel the mysteries of TypeScript interfaces!
level: 3
correctAnswer: 4
difficulty: "Beginner"
---

## Context

### Question
Which of the following is a correct way to define an interface for a `Person` object with `name` (string) and `age` (number) properties in TypeScript?

## Answers
- `type Person = { name: string, age: number }`
- `class Person { name: string; age: number; }`
- `const Person = { name: string, age: number }`
- `interface Person { name: string; age: number; }`

## Explanation
The correct answer is `interface Person { name: string; age: number; }`. In TypeScript, interfaces are used to define the shape of an object. This interface declares that a `Person` object must have a `name` property of type `string` and an `age` property of type `number`.

## Hint
Interfaces in TypeScript start with the `interface` keyword and use semicolons or newlines to separate property declarations.