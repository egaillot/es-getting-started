Hi there.

In case you're struggling with starting a server that answers questions asked
by the [Extreme Startup server](https://github.com/rchatley/extreme_startup),
you may use the code here to get your foot into the door.

# To run the Node server locally

Start the server on port `1234` (or whatever port you prefer).

```sh
$> git checkout nodejs && PORT=1234 npm start
```

You should then be able to request the server on port `1234` (or whatever port
you've chosen).

```sh
$> curl localhost:1234/?q=4592e550:%20what%20is%205%20plus%2016      # should return 21
```

# To run the Node server on the cloud

You have many options. One of them is using [Heroku](https://www.heroku.com).

## Heroku

If you follow this path, make sure you have a Heroku account (you might have to
[create one](https://signup.heroku.com) if you don't already have one). You
will also need the [heroku
CLI](https://devcenter.heroku.com/articles/heroku-cli).

Then. Log in from the CLI.
```sh
$> heroku login
```

Get on the `nodejs` branch.
```sh
$> git checkout nodejs
```

Create the Heroku app. You should get an app name in return.
```sh
$> heroku create        # Creating app... done, ⬢ secure-river-23103
```

Here, the app name is `secure-river-23103`.

Then set the `heroku` Git remote for that app.
```sh
$> heroku git:remote -a secure-river-23103
```

Make sure you have the Heroku buildpack for Node.js.
```sh
$> heroku buildpacks:set heroku/nodejs
```

Almost there. You may now deploy your app on the Heroku cloud.
```sh
$> git push -f heroku HEAD:master
```

Toward the end of the output you should see the message
`https://secure-river-23103.herokuapp.com/ deployed to Heroku` (with the name
of _your_ app, of course). You should be able now to access your app on the
Internet!
```sh
$> curl https://secure-river-23103.herokuapp.com/?q=4592e550:%20what%20is%205%20plus%2016   # should return 21
```

That's it. You're set. To redeploy your app after making some changes in the
code, push again on the `heroku` Git remote.
```sh
$> git push -f heroku HEAD:master
```
