# Guide to Running the App on Server

Follow these steps to set up and run your application on the server.

## Step 1: Create the `.env` File

Create a `.env` file in the root directory of your project. Use the `.env.example` file as a reference to set up the necessary environment variables.

```sh
cp .env.example .env
```

## Step 2: Start a Development Version

To start a development version of the app, use the following command:

```sh
docker compose -f docker-compose.dev.yml up -d --build
```

## Step 3: Receive Trusted SSL Certificate

Generate a trusted SSL certificate using Certbot with the command:

```sh
./certbot/init-letsencrypt.sh
```

## Step 4: Restart Docker in Production Version

After obtaining the SSL certificate, restart your Docker containers in production mode with:

```sh
docker compose -f docker-compose.prod.yml up -d --build
```

## Step 5: Enjoy My CV

Once everything is set up and running, you can enjoy my CV on the deployed application. 🙂😉

