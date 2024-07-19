---
title: Discriminated Union Dilemma
description: Master the intricacies of discriminated unions in TypeScript!
level: 23
correctAnswer: 4
difficulty: "Expert"
---

## Context

### Question
What is the primary advantage of using discriminated unions in TypeScript?

## Answers
- They allow for multiple inheritance
- They provide runtime type checking
- They automatically generate type guards
- They enable exhaustive checking in switch statements

## Explanation
The correct answer is that they enable exhaustive checking in switch statements. Discriminated unions in TypeScript are particularly useful because they allow the compiler to know exactly which properties are available based on a discriminant property. This enables exhaustive checking in switch statements, meaning the compiler can ensure you've handled all possible cases. It's a powerful feature for creating type-safe code with complex conditional logic.

## Hint
Think about how the compiler might use the discriminant property to ensure all cases are handled in conditional statements.