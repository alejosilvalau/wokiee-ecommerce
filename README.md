# wokiee-ecommerce

![wokiee-ecommerce](shop-item.gif)

---

![wokiee-ecommerce](shopping-cart.gif)

---

![wokiee-ecommerce](wishlist.gif)

---

## Summary

This is an ecommerce app, it has it's own database and has integration with stripe. Also, you can:
Wishlist products

- Change the user picture
- Make test purchases
- Leave a review on every product

The back end is deployed on Heroku, and the front end is on Netlify, and uses the PERN stack.

- [wokiee-ecommerce](#wokiee-ecommerce)
  - [Summary](#summary)
- [Usage](#usage)
  - [Scripts](#scripts)
  - [Front end](#front-end)
  - [Testing](#testing)
- [License](#license)

## Prerequisites

Please install or have installed the following:

- [nodejs and npm](https://nodejs.org/en/download/)
- [postgresql](https://postgresapp.com/)

# Usage

## Extra steps

1. First, complete all the ".env" variables available and decide to run the project wheater on "development" or "production"
2. Create the tables on the database. Opening "psql" on the terminal and copying the commands from the ".sql" file

## Back end

3. ```bash
   cd server
   npm start
   ```

## Front end

4. ```bash
   cd client
   yarn start
   ```

# License

This project is licensed under the [MIT license](LICENSE).
