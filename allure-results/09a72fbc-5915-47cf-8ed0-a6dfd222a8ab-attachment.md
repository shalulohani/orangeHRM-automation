# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\deleteEmployee.spec.ts >> Delete an employee
- Location: tests\deleteEmployee.spec.ts:6:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-table-row:has-text("John")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.oxd-table-row:has-text("John")')

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Employee Information" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints...": John
- text: Employee Id
- textbox
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Id "
      - columnheader "First (& Middle) Name "
      - columnheader "Last Name "
      - columnheader "Job Title "
      - columnheader "Employment Status "
      - columnheader "Sub Unit "
      - columnheader "Supervisor "
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | "use strict";
  2  | Object.defineProperty(exports, "__esModule", { value: true });
  3  | exports.DeleteEmployeePage = void 0;
  4  | const test_1 = require("@playwright/test");
  5  | class DeleteEmployeePage {
  6  |     page;
  7  |     constructor(page) {
  8  |         this.page = page;
  9  |     }
  10 |     async navigateToEmployeeList() {
  11 |         await this.page.getByRole('link', { name: 'PIM' }).click();
  12 |         await this.page.getByRole('link', { name: 'Employee List' }).click();
  13 |     }
  14 |     async searchEmployee(name) {
  15 |         const searchBox = this.page.locator('input[placeholder="Type for hints..."]').first();
  16 |         await searchBox.fill(name);
  17 |         await this.page.getByRole('button', { name: 'Search' }).click();
  18 |     }
  19 |     async deleteEmployee(name) {
  20 |         // Wait for table to load
  21 |         await this.page.waitForSelector('.oxd-table-body');
  22 |         // Locate the row containing the employee name
  23 |         const row = this.page.locator(`.oxd-table-row:has-text("${name}")`);
> 24 |         await (0, test_1.expect)(row).toBeVisible();
     |                                       ^ Error: expect(locator).toBeVisible() failed
  25 |         // Click delete icon
  26 |         await row.locator('i.oxd-icon.bi-trash').click();
  27 |         // Confirm deletion
  28 |         await this.page.getByRole('button', { name: 'Yes, Delete' }).click();
  29 |     }
  30 |     async verifyDeletion() {
  31 |         await (0, test_1.expect)(this.page.locator('.oxd-toast')).toBeVisible();
  32 |         await (0, test_1.expect)(this.page.locator('.oxd-toast')).toContainText('Successfully Deleted');
  33 |     }
  34 | }
  35 | exports.DeleteEmployeePage = DeleteEmployeePage;
  36 | 
```