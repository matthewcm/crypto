# crypto

[![codecov](https://codecov.io/gh/matthewcm/crypto/branch/main/graph/badge.svg?token=3XOEVUP6N1)](https://codecov.io/gh/matthewcm/crypto)
[![Node.js CI](https://github.com/matthewcm/crypto/actions/workflows/client.yml/badge.svg)](https://github.com/matthewcm/crypto/actions/workflows/client.yml)



# Introduction

A react app that fetches crypto currency market updates from https://bittrex.github.io/api/v3

# Prerequisites

## Install Docker
Check the official Docker documentation for information how to install Docker on your operating system. And then install Docker and supporting tools.

# How to use

with Docker installed on your machine, run the following `make` commands

## To build and run the application

```bash
make build
```

## To stop and remove application docker containers

```bash
make down
```


---

# System Design Documentation

# Requirements

## Functional Requirements
1. Component should have a header and footer
2. Market summary displayed for all currencies
  a. https://api.bittrex.com/v3/markets/summaries
3. Header with a search tab to find details on specific currency
  a. https://api.bittrex.com/v3/markets/<marketSymbol>/summary
  b. E.g. - https://api.bittrex.com/v3/markets/ltc-btc/summary
4. Quality unit tests using react testing library
5. Docker build files
6. Back-end Health check and version info/pages
7. Keyboard navigation
  a. Shortcuts
  b. vim like navigation
8. Light/Dark themes

## Non-Functional Requirements
1. Authentication for backend rest calls
2. Professional styling and UX
3. ES lint defined/configured in the project folder for code quality
4. Good project structuring
5. Secured way of storing auth credentials
6. No Hardcoding
7. Efficient code (less loops, conditional statements)
8. Readable and well-structured package.json
9. Add typescript supporting functions
10. CI/CD
  a. Build checks on prs
  b. Tests on prs
  
  
# Technologies

- React
- Typescript
- Vite
- Reeact Redux
- Eslint
- Tailwind
- React Testing Library
- Express
- Docker


# High Level Design

## Quick wireframe sketch:
![image](https://user-images.githubusercontent.com/13544609/225100710-ffb5fe93-c6ed-41c7-bbb4-2eecf0491fd4.png)


## General Flow
![image](https://user-images.githubusercontent.com/13544609/225100220-e0911d1b-9ddf-4f4a-9733-1e22448de095.png)

# Core Components
## Back end

- Endpoint for market summary for all currencies.
  - Express server `GET`
- Endpoint for summary of specific currency.
  - Express server `GET`
- Endpoint for health check
  - Express server `GET`

- Authorised endpoints with auth0 jwt tokens.


## Front end

- Simple single page application with:
  - Header
  - Main section
  - Footer
  - Search tab

Main section:
- to `GET` retrieve and render information from a back end endpoint

Search tab:
- to send a `GET` request to back end endpoint, with an `id` of currency to view.
- `GET` request to retrieve a list of available currencies, better ease of use, rather than memorising / spelling correctly.
  - Fuzzy search maybe.
  
Authorization:
JWT Single Sign on login via Auth0. https://auth0.com/


# Scale

For purpose of this project scale is not required. However during application development can investigate some future scale ideas.
  

