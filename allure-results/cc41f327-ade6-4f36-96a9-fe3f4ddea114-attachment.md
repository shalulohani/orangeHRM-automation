# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\addUser.spec.ts >> Add new system user
- Location: tests\addUser.spec.ts:7:5

# Error details

```
TypeError: admin.enterEmployeeName is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - generic [ref=e113]:
            - heading "Admin" [level=6] [ref=e114]
            - heading "/ User Management" [level=6] [ref=e115]
        - link "Upgrade" [ref=e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e118] [cursor=pointer]: Upgrade
        - list [ref=e124]:
          - listitem [ref=e125]:
            - generic [ref=e126] [cursor=pointer]:
              - img "profile picture" [ref=e127]
              - paragraph [ref=e128]: manda user
              - generic [ref=e129]: 
      - navigation "Topbar Menu" [ref=e131]:
        - list [ref=e132]:
          - listitem [ref=e133] [cursor=pointer]:
            - generic [ref=e134]:
              - text: User Management
              - generic [ref=e135]: 
          - listitem [ref=e136] [cursor=pointer]:
            - generic [ref=e137]:
              - text: Job
              - generic [ref=e138]: 
          - listitem [ref=e139] [cursor=pointer]:
            - generic [ref=e140]:
              - text: Organization
              - generic [ref=e141]: 
          - listitem [ref=e142] [cursor=pointer]:
            - generic [ref=e143]:
              - text: Qualifications
              - generic [ref=e144]: 
          - listitem [ref=e145] [cursor=pointer]:
            - link "Nationalities" [ref=e146]:
              - /url: "#"
          - listitem [ref=e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=e148]:
              - /url: "#"
          - listitem [ref=e149] [cursor=pointer]:
            - generic [ref=e150]:
              - text: Configuration
              - generic [ref=e151]: 
          - button "" [ref=e153] [cursor=pointer]:
            - generic [ref=e154]: 
  - generic [ref=e155]:
    - generic [ref=e157]:
      - generic [ref=e158]:
        - generic [ref=e159]:
          - heading "System Users" [level=5] [ref=e161]
          - button "" [ref=e164] [cursor=pointer]:
            - generic [ref=e165]: 
        - separator [ref=e166]
        - generic [ref=e168]:
          - generic [ref=e170]:
            - generic [ref=e172]:
              - generic [ref=e174]: Username
              - textbox [ref=e176]
            - generic [ref=e178]:
              - generic [ref=e180]: User Role
              - generic [ref=e183] [cursor=pointer]:
                - generic [ref=e184]: "-- Select --"
                - generic [ref=e186]: 
            - generic [ref=e188]:
              - generic [ref=e190]: Employee Name
              - textbox "Type for hints..." [ref=e194]
            - generic [ref=e196]:
              - generic [ref=e198]: Status
              - generic [ref=e201] [cursor=pointer]:
                - generic [ref=e202]: "-- Select --"
                - generic [ref=e204]: 
          - separator [ref=e205]
          - generic [ref=e206]:
            - button "Reset" [ref=e207] [cursor=pointer]
            - button "Search" [ref=e208] [cursor=pointer]
      - generic [ref=e209]:
        - button " Add" [ref=e211] [cursor=pointer]:
          - generic [ref=e212]: 
          - text: Add
        - generic [ref=e213]:
          - separator [ref=e214]
          - generic [ref=e216]: (14) Records Found
        - table [ref=e218]:
          - rowgroup [ref=e219]:
            - row " Username  User Role  Employee Name  Status  Actions" [ref=e220]:
              - columnheader "" [ref=e221]:
                - generic [ref=e223] [cursor=pointer]:
                  - checkbox "" [ref=e224]
                  - generic [ref=e226]: 
              - columnheader "Username " [ref=e227]:
                - text: Username
                - generic [ref=e228]:
                  - generic [ref=e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=e230]:
                - text: User Role
                - generic [ref=e231]:
                  - generic [ref=e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=e233]:
                - text: Employee Name
                - generic [ref=e234]:
                  - generic [ref=e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=e236]:
                - text: Status
                - generic [ref=e237]:
                  - generic [ref=e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=e239]
          - rowgroup [ref=e240]:
            - row " Admin Admin manda user Enabled  " [ref=e242]:
              - cell "" [ref=e243]:
                - generic [ref=e247]:
                  - checkbox "" [ref=e248]
                  - generic [ref=e250]: 
              - cell "Admin" [ref=e251]:
                - generic [ref=e252]: Admin
              - cell "Admin" [ref=e253]:
                - generic [ref=e254]: Admin
              - cell "manda user" [ref=e255]:
                - generic [ref=e256]: manda user
              - cell "Enabled" [ref=e257]:
                - generic [ref=e258]: Enabled
              - cell " " [ref=e259]:
                - generic [ref=e260]:
                  - button "" [ref=e261] [cursor=pointer]:
                    - generic [ref=e262]: 
                  - button "" [ref=e263] [cursor=pointer]:
                    - generic [ref=e264]: 
            - row " Rohit123 ESS Rohit Yadav Enabled  " [ref=e266]:
              - cell "" [ref=e267]:
                - generic [ref=e270] [cursor=pointer]:
                  - checkbox "" [ref=e271]
                  - generic [ref=e273]: 
              - cell "Rohit123" [ref=e274]:
                - generic [ref=e275]: Rohit123
              - cell "ESS" [ref=e276]:
                - generic [ref=e277]: ESS
              - cell "Rohit Yadav" [ref=e278]:
                - generic [ref=e279]: Rohit Yadav
              - cell "Enabled" [ref=e280]:
                - generic [ref=e281]: Enabled
              - cell " " [ref=e282]:
                - generic [ref=e283]:
                  - button "" [ref=e284] [cursor=pointer]:
                    - generic [ref=e285]: 
                  - button "" [ref=e286] [cursor=pointer]:
                    - generic [ref=e287]: 
            - row " Saurabh Admin manda user Disabled  " [ref=e289]:
              - cell "" [ref=e290]:
                - generic [ref=e293] [cursor=pointer]:
                  - checkbox "" [ref=e294]
                  - generic [ref=e296]: 
              - cell "Saurabh" [ref=e297]:
                - generic [ref=e298]: Saurabh
              - cell "Admin" [ref=e299]:
                - generic [ref=e300]: Admin
              - cell "manda user" [ref=e301]:
                - generic [ref=e302]: manda user
              - cell "Disabled" [ref=e303]:
                - generic [ref=e304]: Disabled
              - cell " " [ref=e305]:
                - generic [ref=e306]:
                  - button "" [ref=e307] [cursor=pointer]:
                    - generic [ref=e308]: 
                  - button "" [ref=e309] [cursor=pointer]:
                    - generic [ref=e310]: 
            - row " testt ESS test test Enabled  " [ref=e312]:
              - cell "" [ref=e313]:
                - generic [ref=e316] [cursor=pointer]:
                  - checkbox "" [ref=e317]
                  - generic [ref=e319]: 
              - cell "testt" [ref=e320]:
                - generic [ref=e321]: testt
              - cell "ESS" [ref=e322]:
                - generic [ref=e323]: ESS
              - cell "test test" [ref=e324]:
                - generic [ref=e325]: test test
              - cell "Enabled" [ref=e326]:
                - generic [ref=e327]: Enabled
              - cell " " [ref=e328]:
                - generic [ref=e329]:
                  - button "" [ref=e330] [cursor=pointer]:
                    - generic [ref=e331]: 
                  - button "" [ref=e332] [cursor=pointer]:
                    - generic [ref=e333]: 
            - row " user1780837809064 ESS Yasmeen2 Elrayes Enabled  " [ref=e335]:
              - cell "" [ref=e336]:
                - generic [ref=e339] [cursor=pointer]:
                  - checkbox "" [ref=e340]
                  - generic [ref=e342]: 
              - cell "user1780837809064" [ref=e343]:
                - generic [ref=e344]: user1780837809064
              - cell "ESS" [ref=e345]:
                - generic [ref=e346]: ESS
              - cell "Yasmeen2 Elrayes" [ref=e347]:
                - generic [ref=e348]: Yasmeen2 Elrayes
              - cell "Enabled" [ref=e349]:
                - generic [ref=e350]: Enabled
              - cell " " [ref=e351]:
                - generic [ref=e352]:
                  - button "" [ref=e353] [cursor=pointer]:
                    - generic [ref=e354]: 
                  - button "" [ref=e355] [cursor=pointer]:
                    - generic [ref=e356]: 
            - row " user1780838783112 ESS Yasmeenn Elrayes Enabled  " [ref=e358]:
              - cell "" [ref=e359]:
                - generic [ref=e362] [cursor=pointer]:
                  - checkbox "" [ref=e363]
                  - generic [ref=e365]: 
              - cell "user1780838783112" [ref=e366]:
                - generic [ref=e367]: user1780838783112
              - cell "ESS" [ref=e368]:
                - generic [ref=e369]: ESS
              - cell "Yasmeenn Elrayes" [ref=e370]:
                - generic [ref=e371]: Yasmeenn Elrayes
              - cell "Enabled" [ref=e372]:
                - generic [ref=e373]: Enabled
              - cell " " [ref=e374]:
                - generic [ref=e375]:
                  - button "" [ref=e376] [cursor=pointer]:
                    - generic [ref=e377]: 
                  - button "" [ref=e378] [cursor=pointer]:
                    - generic [ref=e379]: 
            - row " user1780838805477 ESS Yasmeenn Elrayes Enabled  " [ref=e381]:
              - cell "" [ref=e382]:
                - generic [ref=e385] [cursor=pointer]:
                  - checkbox "" [ref=e386]
                  - generic [ref=e388]: 
              - cell "user1780838805477" [ref=e389]:
                - generic [ref=e390]: user1780838805477
              - cell "ESS" [ref=e391]:
                - generic [ref=e392]: ESS
              - cell "Yasmeenn Elrayes" [ref=e393]:
                - generic [ref=e394]: Yasmeenn Elrayes
              - cell "Enabled" [ref=e395]:
                - generic [ref=e396]: Enabled
              - cell " " [ref=e397]:
                - generic [ref=e398]:
                  - button "" [ref=e399] [cursor=pointer]:
                    - generic [ref=e400]: 
                  - button "" [ref=e401] [cursor=pointer]:
                    - generic [ref=e402]: 
            - row " user_03889 Admin Sriram Automation Enabled  " [ref=e404]:
              - cell "" [ref=e405]:
                - generic [ref=e408] [cursor=pointer]:
                  - checkbox "" [ref=e409]
                  - generic [ref=e411]: 
              - cell "user_03889" [ref=e412]:
                - generic [ref=e413]: user_03889
              - cell "Admin" [ref=e414]:
                - generic [ref=e415]: Admin
              - cell "Sriram Automation" [ref=e416]:
                - generic [ref=e417]: Sriram Automation
              - cell "Enabled" [ref=e418]:
                - generic [ref=e419]: Enabled
              - cell " " [ref=e420]:
                - generic [ref=e421]:
                  - button "" [ref=e422] [cursor=pointer]:
                    - generic [ref=e423]: 
                  - button "" [ref=e424] [cursor=pointer]:
                    - generic [ref=e425]: 
            - row " user_2919username ESS user_2919 user_2919last Enabled  " [ref=e427]:
              - cell "" [ref=e428]:
                - generic [ref=e431] [cursor=pointer]:
                  - checkbox "" [ref=e432]
                  - generic [ref=e434]: 
              - cell "user_2919username" [ref=e435]:
                - generic [ref=e436]: user_2919username
              - cell "ESS" [ref=e437]:
                - generic [ref=e438]: ESS
              - cell "user_2919 user_2919last" [ref=e439]:
                - generic [ref=e440]: user_2919 user_2919last
              - cell "Enabled" [ref=e441]:
                - generic [ref=e442]: Enabled
              - cell " " [ref=e443]:
                - generic [ref=e444]:
                  - button "" [ref=e445] [cursor=pointer]:
                    - generic [ref=e446]: 
                  - button "" [ref=e447] [cursor=pointer]:
                    - generic [ref=e448]: 
            - row " user_3079username ESS user_3079 user_3079last Enabled  " [ref=e450]:
              - cell "" [ref=e451]:
                - generic [ref=e454] [cursor=pointer]:
                  - checkbox "" [ref=e455]
                  - generic [ref=e457]: 
              - cell "user_3079username" [ref=e458]:
                - generic [ref=e459]: user_3079username
              - cell "ESS" [ref=e460]:
                - generic [ref=e461]: ESS
              - cell "user_3079 user_3079last" [ref=e462]:
                - generic [ref=e463]: user_3079 user_3079last
              - cell "Enabled" [ref=e464]:
                - generic [ref=e465]: Enabled
              - cell " " [ref=e466]:
                - generic [ref=e467]:
                  - button "" [ref=e468] [cursor=pointer]:
                    - generic [ref=e469]: 
                  - button "" [ref=e470] [cursor=pointer]:
                    - generic [ref=e471]: 
            - row " user_3315username ESS user_3315 user_3315last Enabled  " [ref=e473]:
              - cell "" [ref=e474]:
                - generic [ref=e477] [cursor=pointer]:
                  - checkbox "" [ref=e478]
                  - generic [ref=e480]: 
              - cell "user_3315username" [ref=e481]:
                - generic [ref=e482]: user_3315username
              - cell "ESS" [ref=e483]:
                - generic [ref=e484]: ESS
              - cell "user_3315 user_3315last" [ref=e485]:
                - generic [ref=e486]: user_3315 user_3315last
              - cell "Enabled" [ref=e487]:
                - generic [ref=e488]: Enabled
              - cell " " [ref=e489]:
                - generic [ref=e490]:
                  - button "" [ref=e491] [cursor=pointer]:
                    - generic [ref=e492]: 
                  - button "" [ref=e493] [cursor=pointer]:
                    - generic [ref=e494]: 
            - row " user_52913 Admin Sriram Automation Enabled  " [ref=e496]:
              - cell "" [ref=e497]:
                - generic [ref=e500] [cursor=pointer]:
                  - checkbox "" [ref=e501]
                  - generic [ref=e503]: 
              - cell "user_52913" [ref=e504]:
                - generic [ref=e505]: user_52913
              - cell "Admin" [ref=e506]:
                - generic [ref=e507]: Admin
              - cell "Sriram Automation" [ref=e508]:
                - generic [ref=e509]: Sriram Automation
              - cell "Enabled" [ref=e510]:
                - generic [ref=e511]: Enabled
              - cell " " [ref=e512]:
                - generic [ref=e513]:
                  - button "" [ref=e514] [cursor=pointer]:
                    - generic [ref=e515]: 
                  - button "" [ref=e516] [cursor=pointer]:
                    - generic [ref=e517]: 
            - row " user_9187username ESS user_9187 user_9187last Enabled  " [ref=e519]:
              - cell "" [ref=e520]:
                - generic [ref=e523] [cursor=pointer]:
                  - checkbox "" [ref=e524]
                  - generic [ref=e526]: 
              - cell "user_9187username" [ref=e527]:
                - generic [ref=e528]: user_9187username
              - cell "ESS" [ref=e529]:
                - generic [ref=e530]: ESS
              - cell "user_9187 user_9187last" [ref=e531]:
                - generic [ref=e532]: user_9187 user_9187last
              - cell "Enabled" [ref=e533]:
                - generic [ref=e534]: Enabled
              - cell " " [ref=e535]:
                - generic [ref=e536]:
                  - button "" [ref=e537] [cursor=pointer]:
                    - generic [ref=e538]: 
                  - button "" [ref=e539] [cursor=pointer]:
                    - generic [ref=e540]: 
            - row " user_93ef0 Admin Sriram Automation Enabled  " [ref=e542]:
              - cell "" [ref=e543]:
                - generic [ref=e546] [cursor=pointer]:
                  - checkbox "" [ref=e547]
                  - generic [ref=e549]: 
              - cell "user_93ef0" [ref=e550]:
                - generic [ref=e551]: user_93ef0
              - cell "Admin" [ref=e552]:
                - generic [ref=e553]: Admin
              - cell "Sriram Automation" [ref=e554]:
                - generic [ref=e555]: Sriram Automation
              - cell "Enabled" [ref=e556]:
                - generic [ref=e557]: Enabled
              - cell " " [ref=e558]:
                - generic [ref=e559]:
                  - button "" [ref=e560] [cursor=pointer]:
                    - generic [ref=e561]: 
                  - button "" [ref=e562] [cursor=pointer]:
                    - generic [ref=e563]: 
    - generic [ref=e565]:
      - paragraph [ref=e566]: OrangeHRM OS 5.8
      - paragraph [ref=e567]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e568] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test } from '../fixtures/baseTest';
  2  | import { expect } from '@playwright/test';
  3  | import { AdminPage } from '../pages/AdminPage';
  4  | import { logStep, logSuccess } from '../utils/logger';
  5  | import { randomUsername, randomPassword } from '../utils/dataUtils';
  6  | 
  7  | test('Add new system user', async ({ page }) => {
  8  | 
  9  |   const admin = new AdminPage(page);
  10 | 
  11 |   const username = randomUsername();
  12 |   const password = randomPassword();
  13 | 
  14 |   logStep('Navigating to Admin → User Management');
  15 |   await admin.navigateToAdmin();
  16 | 
  17 |   logStep('Entering employee name');
> 18 |   await admin.enterEmployeeName('John Doe'); // or dynamic if needed
     |               ^ TypeError: admin.enterEmployeeName is not a function
  19 | 
  20 |   logStep(`Entering username: ${username}`);
  21 |   await admin.enterUsername(username);
  22 | 
  23 |   logStep('Selecting user role');
  24 |   await admin.selectUserRole('ESS'); // or 'Admin'
  25 | 
  26 |   logStep('Setting password');
  27 |   await admin.enterPassword(password);
  28 | 
  29 |   logStep('Saving user');
  30 |   await admin.saveUser();
  31 | 
  32 |   logStep('Verifying user creation');
  33 |   await expect(page.locator(`text=${username}`)).toBeVisible();
  34 | 
  35 |   logSuccess(`User ${username} created successfully`);
  36 | });
  37 | 
```