// Day 1n : Angular Architecture

// my-angular-app/
// │
// ├── src/
// │   ├── app/
// │   ├── assets/
// │   ├── environments/   (if your project has it)
// │   ├── index.html
// │   ├── main.ts
// │   └── styles.css
// │
// ├── angular.json
// ├── package.json
// ├── tsconfig.json
// └── ...


// You should understand roughly:

// src/app/ → Your Angular components, services, models, etc.
// src/assets/ → Images, icons, static files.
// main.ts → Starting point of the Angular application.
// index.html → Main HTML page where Angular gets loaded.
// angular.json → Angular CLI/build configuration.
// package.json → Project dependencies and npm scripts.
// tsconfig.json → TypeScript configuration.
// environment File → Configuration for a particular deployment environment, such as development, testing, or production. 
// 1) environment.ts — development
// 2) environment.prod.ts — production


// Understand the basic flow:

// ng serve
//    ↓
// Angular build/dev server
//    ↓
// main.ts
//    ↓
// App component
//    ↓
// Angular renders UI
//    ↓
// Browser