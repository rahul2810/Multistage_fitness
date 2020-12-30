# Multistage fitness Test - Web App
## About
### Multistage fitness App
Multistage fitness test is a web application that can enable MSFT/Beep test/PACER test. 

Built using .Net Core & Angular 10. :sparkles:
 
The current version is an MVP that can support all basic features required to run the tests. 

Future versions may include support for customizable participants list, levels and persitent storage of data on a database.

![Multistage fitness test screenshot](https://github.com/rahul2810/Multistage_fitness/blob/main/beep_test_screenshot.png?raw=true)

### Multistage fitness Test (MSFT) / Beep test / PACER test
The multi-stage fitness test (MSFT), also known as the beep test, PACER (Progressive Aerobic Cardiovascular Endurance Run), PACER test, or the 20 m Shuttle Run Test (20 m SRT), is a running test used to estimate an athlete's aerobic capacity (VO2 max). The test requires participants to run 20 meters back and forth across a marked track keeping time with beeps. Every minute or so, the next level commences: the time between beeps gets shorter; participants must run faster. If a participant fails to reach the relevant marker in time, they are cautioned. A second caution ends the test for that runner. The number of shuttles completed successfully is recorded as the score of that runner. The score is recorded in Level.Shuttles format (e.g. 9.5).

To know more : [click here](https://www.youtube.com/watch?v=9XgGPULnDxY&t=40s&ab_channel=1st4sport) (Video credits : 1st4sport)
 
## Pre-requisites:
1. Visual Studio IDE
2. NPM Installed : https://www.npmjs.com/get-npm
3. Angular CLI Installed : `npm install -g @angular/cli`

## Steps to run the application (on local):
1. Open .Net Solution file on visual studio. (AspNetCoreTest\Solution\Backend\YoYo-Web-App.Api\YoYo-Web-App.sln)
2. Run IIS Express. This should launch the Api on the browser. (https://localhost:44337/api/TestPage)
3. Open Command Prompt & Navigate to solution folder. (AspNetCoreTest\Solution\Frontend\YoYo-WebApp-UI\) 
4. Run on Command Prompt: `npm install` (This should install all the dependancies)
5. Run on Command Prompt: `ng serve`  
6. Open on Browser: http://localhost:4200/ (This will launch the application)
