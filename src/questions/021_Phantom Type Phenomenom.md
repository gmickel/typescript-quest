---
title: Phantom Type Phenomenom
description: Dive deep into the world of phantom types in TypeScript!
level: 21
correctAnswer: 2
difficulty: "Expert"
---

## Context

### Question
What is the primary purpose of using phantom types in TypeScript?

## Answers
- To create types that can only be instantiated within a specific module
- To add compile-time checks without affecting the runtime representation
- To implement polymorphic functions
- To create self-referential types

## Explanation
The correct answer is to add compile-time checks without affecting the runtime representation. Phantom types are a technique where you add type parameters to a type that don't appear in its definition. This allows you to encode additional information at the type level, enabling more precise type checking at compile time without changing the runtime behavior or representation of the values.

## Hint
Think about how you might use the type system to enforce constraints that aren't represented in the actual data at runtime.