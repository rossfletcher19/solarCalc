# _Solar Calculator_

#### _An application that determines a user’s age based on a planet’s solar years, 2/9/18_

#### By _**Ross Fletcher**_

## Description _A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. This application will determine a user’s age based on a planet’s solar years._

## Planning

## Configuration/dependencies
  * NodeJS with full gulp and bower tasks, with Karma testing.
  * Dependencies are declared in package.json and bower.json. Run npm install and bower install.

## Specs
|  Behavior | Input  | Output  |
|---|---|---|
|  Take a person’s age in years and convert it into seconds. |  34 | 1,072,936,368  |
|  Take two dates and determine the difference, in seconds, between the two. | Jan 12, 2018 & Jan 20, 1986 |   |
|  Return the age of a human in Mercury years. | 32  | 133.83  |
|  Return the age of a human in Venus years. | 32  | 51.81  |
|  Return the age of a human in Mars years. | 32  | 17.09  |
|  Return the age of a human in Jupiter years. | 32  | 2.71  |
|  Determine how many years a user has left to live on each planet… | 32  | Jupiter: 3.95 years  |
|  If a user has already surpassed the average life expectancy, application should account for (and test) this possible outcome as well. | 01-16-1937  | "Wow you've surpassed the avg. life expectancy! You must be doing something right. Keep it up!!!"  |
|   |   |   |

## Integration
  * Initial boilerplate project folder with all dependencies
  * script files working together with import and export
  * Testing functions for with Karma before front end integration.
  * Integrate features and functions into front end...

## UX/UI
  * Include and modify bootstrap.
  * Develop custom style

## Polish
  * Refactor
  * Delete unused
  * Make README awesome

## Further Building Out/Refactoring
  * Refactor ageInSeconds function to work off birthdate and not entered age.

## Setup/Installation Requirements

* Clone this repo. <br />
`$ git clone https://github.com/rossfletcher19/solarCalc.git`
* cd into the cloned repo and run the following command from your terminal. <br/>
`$ npm install && bower install`
* Serve a production version of the web app by running this gulp task <br/>
`gulp serve --prod`


## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery-3.2.1_
* _npm, gulp, bower_
* _Karma testing_

### License

Copyright (c) 2018 **_Ross Fletcher_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
