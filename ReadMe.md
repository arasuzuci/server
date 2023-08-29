# Health Fit Server

A poc project for health fit

## Prerequisites

- NodeJs
- MySQL

## Env setup

- Create a new file `.env` and copy all the values from `.env.example`
- Replace `env` values with actual values, you can get the `env` file from us

[Note: Please make sure you have created `database` in your local machine, with the same name mentioned on `DB_DATABASE` in .env file]

## How to start the server?

- Start a command prompt from the project location
- `cd server`
- `npm install`
- `node index`

[If you could see this line on your cmd, you're good to go: `Server is running on port {SomePort}`]

## Run Seeders

- If you're setting up the project for the first time, you can use the seeders file to add initial data to start working.
- You can perform it with the below command:
- Open a command prompt in project location, then `cd server`
- Your `cmd` location should be something like this `\HealthFit\server>`
- Run `npx sequelize-cli db:seed:all`

[If the seeders got successfully executed, you'll be able to view the added data on the tables]

## message code

[first 2 digit which file && last 2 digit message code common for all files ]

01 - success code [Register successfully]
02 - bad request code [please check require field has filled]
03,04 - email or password incorrect [Password incorrect]
CA05 - Something went wrong. Please try again later
