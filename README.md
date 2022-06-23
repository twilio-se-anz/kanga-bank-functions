# Twilio Functions Example

Kanga Bank is a fictitious bank for kangroos? yeah, sure ok.

This is an example project showing how to use Twilio Serverless functions with Prisma with Supabase

## Twilio Studio Flow

Check out the `flow.json` file in the `assets` folder.

Import it into Twilio Studio and modify the URL endpoint

You will also require an airtable account and API key

### Configuration

Check out the `example.env` file for configuration settings, make a copy and call it `.env`

Inside your `.env` set the following variables as appropriate

```sh
ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxx
AUTH_TOKEN=xxxxxxxxxxxxxxx
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[HOST].supabase.co:5432/postgres
```

## Installing Prisma

Run `npm i -D prisma` to install as a dev dependency

Then `npx prisma init` to initialize the project, it will create a `prisma/prisma.schema` file for you to edit

Next steps:

1. Set the `DATABASE_URL` in the `.env` file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in `schema.prisma` to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run `prisma db pull` to turn your database schema into a Prisma schema.
4. Run `prisma generate` to generate the Prisma Client. You can then start querying your database.

### Example schema

For this project we're going to create a really simple schema as follows

### Going live

Now push it to supabase with `npx primsa db push`

And finally push our functions to Twilio with `twilio serverless:deploy`

## Troubleshooting

### Ensure you're using Node 14.x

For Mac
`brew unlink node`
`brew link node@14`

Verify with
`node --version`

If not, ensure you've set your path
`echo 'export PATH="/opt/homebrew/opt/node@14/bin:$PATH"' >> ~/.zshrc`
`source ~/.zshrc`
