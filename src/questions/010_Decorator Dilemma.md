---
title: Decorator Dilemma
description: Unravel the complexities of TypeScript decorators!
level: 10
correctAnswer: 1
difficulty: "Expert"
---

## Context

### Question
What is the correct syntax for creating a method decorator in TypeScript?

## Answers
- `function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {}`
- `function methodDecorator(constructor: Function) {}`
- `function methodDecorator<T>(target: T) {}`
- `function methodDecorator(target: any, propertyKey: string) {}`

## Explanation
The correct answer is `function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {}`. In TypeScript, a method decorator is a function that takes three arguments: the target object (which can be the constructor function for a static member or the prototype of the class for an instance member), the name of the decorated method, and a property descriptor. This signature allows the decorator to observe, modify, or replace the method definition.

## Hint
Method decorators in TypeScript need access to information about the method they're decorating.