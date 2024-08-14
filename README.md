This codebase comes in support of the following article: [Clean Architecture in Practice with TypeScript, Prisma, Next.js](https://www.arnaudrenaud.com/articles/clean-architecture-typescript-prisma-next/).

## Run app

Install dependencies, generate Prisma client and apply database schema to a local SQLite file:

```sh
npm install
npx prisma migrate deploy
```

Start Next.js server:

```sh
npm run dev
```

Try command `MakeReservation`:

```sh
curl --location 'http://localhost:3000/api/reservations' \
--header 'Content-Type: application/json' \
--data '{
    "startDate": "2024-08-14T14:00:00Z",
    "endDate": "2024-08-14T15:00:00Z"
}'
```
