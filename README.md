# Welcome! 🚀🚀

<div align="left">
  <img src="https://logodownload.org/wp-content/uploads/2017/11/kabum-logo-2.png" alt="Logo KaBuM!" height="80px;"/>
  <br>
  <br>
</div>

This project aims to replicate a website from the company <strong>KaBuM!</strong>, according to the prototyping provided by the company.

Test the hosted project! 👉 https://kabum-omega.vercel.app/

# How I can run?

<details>
  <summary>Prerequisites</summary>
<br>

## Prerequisites
You will need [Node.js](https://nodejs.org) version 8.0 or greater installed on your system.

</details>

<details>
  <summary>Setup</summary>
<br>

## Setup

Get the code by either cloning this repository using git

```
git clone https://github.com/MarlonTereziano/KaBuM.git
```

... or [downloading source code](https://github.com/MarlonTereziano/KaBuM/archive/master.zip) code as a zip archive.
</details>

<details>
  <summary>Install dependencies</summary>
<br>

## Install dependencies

Once downloaded, open the terminal in the project directory, and install dependencies with:

```
yarn install
```
</details>
<details>
  <summary>Run!</summary>
<br>
Then start the example page with:

```
yarn dev
```

The app should now be up and running at http://localhost:3000 🚀
</details>

# Technologies 🧙‍

<div align="left">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png" alt="Logo Next" height="30px;" />
  &nbsp;
  &nbsp;
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="ReactJS" height="30px;"/>
  &nbsp;
  &nbsp;
  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="TypeScript" height="30px;"/>
  &nbsp;
  &nbsp;
  <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="Styled-Components" height="30px;"/>
</div>

## API

The API was created with <strong>MockAPI</strong>, as requested by the project. To perform all necessary requests, the pattern REST request was used. The requests in development for testing were made with <strong>Insomnia</strong>, and in the Front-end they were made with <strong>Axios</strong>, when necessary.

![image](https://user-images.githubusercontent.com/80834228/184504948-d77ffd72-9110-4717-bb0b-20ea145c1ebd.png)


## GIT

To perform the commits, the convention "Conventional Commits Pattern" was used
```
* API relevant changes
    * `feat` Commits, that adds a new feature
    * `fix` Commits, that fixes a bug
* `refactor` Commits, that rewrite/restructure your code, however does not change any behaviour
    * `perf` Commits are special `refactor` commits, that improve performance
* `style` Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
* `test` Commits, that add missing tests or correcting existing tests
* `docs` Commits, that affect documentation only
* `build` Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
* `ops` Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
* `chore` Miscellaneous commits e.g. modifying `.gitignore`
```
