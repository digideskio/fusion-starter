# VinSolutions JavaScript Starter Kit
This is a starter kit for building a new React project at VinSolutions. The goal: Make it easy to start a robust new client-side app using modern tooling:

* [React](https://facebook.github.io/react/) for rich, fast, client-side components  
* [Babel](http://babeljs.io) for compiling ES6 to ES5, so we can enjoy the new version of JavaScript today  
* [Browserify](http://browserify.org/) for bundling all JS including npm packages for use in the browser  
* [Mocha](http://mochajs.org) for automated tests with [Chai](http://chaijs.com/) for assertions
* [Istanbul](https://github.com/gotwarlost/istanbul) for code coverage data
* [TrackJS](http://trackjs.com) for JS error tracking in production  
* [ESLint](http://eslint.org/) for linting JS  
* [SASS](http://sass-lang.com/) for styling  
* [Gulp](http://gulpjs.com) glues all this together in a handy automated build

The starter kit includes a working example app that puts all of the above to use.

## Get Started
1. **[Install Node](https://nodejs.org).** The build process relies on NodeJS and npm.
2. **[Install Git](https://git-scm.com/downloads).**
3. **Clone the project from GitHub.**  To clone this project to your machine, open the command line of your choice and type `git clone https://github.com/coryhouse/vin-javascript-starter-kit.git`. This command will create a copy of this repo in your current directory. I suggest using Git Bash for your command line work, but if you're not comfortable with the Unix command line, this starter kit will also work on the Window DOS command prompt.
4. **Install Packages.** On your command line, cd to the new folder that was created in the previous step. Type `npm install`. This will install all the necessary packages which are listed in package.json. npm is basically Nuget for Node. So running `npm install` is comparable to restoring Nuget packages.
5. **Run Gulp.** Type `gulp` in the root of your project (same dir where you just ran `npm install`). This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, you'll want to keep the command line open at all times so that your code is rebuilt and tests run automatically everytime you hit save.

## Testing
Streamlined automated testing is a core feature of this starter kit. All tests are placed in files that end in .spec.js. They are placed in the same directory as the file under test. Why?
+ The existence of tests is highly visible. If a corresponding .spec file hasn't been created, it's obvious.
+ Easy to open since they're in the same folder as the file being tested.
+ Easy to create new test files when creating new source files.
+ Short import paths are easy to type and less brittle.
+ As files are moved, it's easy to move tests alongside.

## Code Coverage
Code coverage is calculated and reported via Istanbul. To view your current code coverage, run `gulp coverage`. This will open a tab in your default browser which displays code coverage statistics.

## Debugging
When you run the default Gulp task by typing `gulp`, no JS is minified. Why? Because minifying slows the build. For production or in-browser debugging, you'll want to minify the JS via `gulp build`.  A [sourcemap](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) is generated by the `gulp build` task to enable easy debugging of minified JS. This means your original JS source will be displayed in your browser's dev console.

There are a few quirks with debugging via Sourcemaps:
1. Browsers vary in the way they allow you to view the original source. Chrome automatically shows the original source if a sourcemap is available. Safari, in contrast, will display the minified source and you'll [have to cmd+click on a given line to be taken to the original source](http://stackoverflow.com/questions/19550060/how-do-i-toggle-source-mapping-in-safari-7).
2. In Chrome (and perhaps other browsers), when you make a source code change, you must close the source view tab you were using and repoen it to see the updated source code. It appears Chrome clings to the old sourcemap until you close and reopen the source view tab. To clarify, you don't have to close the actual tab that is displaying the app, just the tab in the console that's displaying the source file that you just changed.


