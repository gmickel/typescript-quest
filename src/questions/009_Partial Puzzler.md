---
title: Partial Puzzler
description: Solve the mystery of TypeScript's Partial utility type!
level: 9
correctAnswer: 2
difficulty: "Intermediate"
timeLimit: 30
---

## Context

### Question
What does the `Partial<T>` utility type do in TypeScript?

## Answers
- It makes all properties of T required
- It makes all properties of T optional
- It removes all properties from T
- It makes all properties of T readonly

## Explanation
The correct answer is that it makes all properties of T optional. The `Partial<T>` utility type in TypeScript constructs a type with all properties of T set to optional. This is useful when you want to create an object where only a subset of properties are required.

## Hint
Think about what "partial" might mean in the context of object properties.