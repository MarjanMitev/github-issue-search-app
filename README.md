# Github Search React app for searching Github issues or pulls

This app lets you simplify the search process of GitHub issues and filters. It first works with issues but also can be
configured to work with pull-request. Will be explained in details below how this can be done.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Installing

A step by step series of examples that tell you how to get a development env running

Install app dependencies

```
npm i
```

## Configuring the app with properties for:

```
{
    github: {
        token: "58c693b29a582d10bc271cb5856f7b3ba3b9d358",
        apiUrl: "https://api.github.com/repos"
    },
    build: {
        gitHubRepo: "tensorflow", // this is the repo you want to search in
        gitHubProject: "tfjs",  // project in that repo
        searchType: "issues" // type of search, can be: pulls (for pull-requests), issues (for github issues related to defined project)
    }
}
```

Each time app is started you need to login with your github account -> go to settings -> developer settings -> generate personal token.
After this token is generated you can find configuration inside file:

```
./build/properties.js
```

## Running the app

App can be started in both dev mode and production mode (this mode minifies app resources and makes app production ready)

* **Development Mode**

```
npm run start-dev
```

* **Production Mode**

```
npm run start-prod
```

## Built With

* [Parcel](https://parceljs.org) - Zero config application bundler
* [Typescript](https://www.typescriptlang.org/) - Writing typed JavaScript that compiles into plan JavaScript
* [React](https://reactjs.org) - JavaScript library for building user interfaces
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [SASS](https://sass-lang.com) - Powerful css framework for building dynamic CSS, writing mixings, creating variables etc..

## Authors

* **Marjan Mitev** - *Full work* - [Marjan Mitev](https://github.com/MarjanMitev)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
