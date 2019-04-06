# Script that posts links to Reddit

## How to run this

1. Clone this repository and cd into *reddit-api*

1. Create *local.settings.json* file and add:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "REDDIT_KEY": "YOUR-TOKEN-HERE",
  }
}
```

> Retrieve your Reddit access token by following steps in the *Get Reddit Authorisation token* section.

1. Run ```npm i``` and ```npm start```

1. To test your function, make a POST request to your function's URL [http://localhost:7071/api/submit-link](http://localhost:7071/api/submit-link) with a body that looks like this:

```json
{
    "title":"Use this *checklist* to review your application architecture from a *resiliency* standpoint; Application Design, Data Management, Security, Testing & Deployment",
    "url":"https://docs.microsoft.com/azure/architecture/checklist/resiliency",
    "sr":"/r/AZURE/"
}
```

## Get Reddit Authorisation token

Before requesting an authorization toked you need to create an application. If you haven't done that already, make sure to follow steps in this [quick start example](https://github.com/reddit-archive/reddit/wiki/OAuth2-Quick-Start-Example).

Make request to [https://www.reddit.com/api/v1/access_token](https://www.reddit.com/api/v1/access_token)

Authorization: Basic Auth
Username: <your_app_id>
Password: <your_app_secret>

Form Data:
grant_type: password
username: <your_reddit_username>
password: <your_reddit_password>

If all goes well, you should get a response that looks similar to this:

```json
{
    "access_token": "1224568486-RCwzdKMP4zdSt6ASetZpYa80qr4",
    "token_type": "bearer",
    "expires_in": 3600,
    "scope": "*"
}
```

🙋🏼 Happy coding! 🙋🏼