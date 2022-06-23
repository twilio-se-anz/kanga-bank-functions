# Twilio Functions Example

Kanga Bank is a fictitious bank for kangroos? yeah, sure ok.

This is an example project showing how to use Twilio Serverless functions with Prisma with Supabase

## Twilio Studio Flow

Check out the `flow.json` file in the `assets` folder.

Import it into Twilio Studio and modify the URL endpoint

You will also require an airtable account and API key

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
