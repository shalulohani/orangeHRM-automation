# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\addEmployee.spec.ts >> Add new employee
- Location: tests\addEmployee.spec.ts:7:5

# Error details

```
TypeError: add.enterFirstName is not a function
```

# Test source

```ts
  1  | import { test } from '../fixtures/baseTest';
  2  | import { expect } from '@playwright/test';
  3  | import { AddEmployeePage } from '../pages/AddEmployeePage';
  4  | import { logStep, logSuccess } from '../utils/logger';
  5  | import { randomFirstName, randomLastName } from '../utils/dataUtils';
  6  | 
  7  | test('Add new employee', async ({ page }) => {
  8  | 
  9  |   const add = new AddEmployeePage(page);
  10 | 
  11 |   const firstName = randomFirstName();
  12 |   const lastName = randomLastName();
  13 | 
  14 |   logStep('Navigating to Add Employee page');
  15 |   await add.navigateToAddEmployee();
  16 | 
  17 |   logStep(`Entering employee details: ${firstName} ${lastName}`);
> 18 |   await (add as any).enterFirstName(firstName);
     |                      ^ TypeError: add.enterFirstName is not a function
  19 |   await (add as any).enterLastName(lastName);
  20 | 
  21 |   logStep('Saving employee record');
  22 |   await add.saveEmployee();
  23 | 
  24 |   logStep('Verifying success message');
  25 |   await (add as any).verifySuccess();
  26 | 
  27 |   logSuccess(`Employee ${firstName} ${lastName} added successfully`);
  28 | });
  29 | 
```