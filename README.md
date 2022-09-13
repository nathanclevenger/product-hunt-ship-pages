# Product Hunt Ship Page Automation

GitHub Action for Creating and Managing Product Hunt Ship Pages from GitHub

Create a file called `_config.yaml` in your repository with the following contents:

```yaml
remote_theme: nathanclevenger/ship
name: Landing.Page.as
tagline: Instant Landing Pages hosted on GitHub Pages
thumbnail: https://nathanclevenger.landing.page.as/thumbnail.png
logo: https://nathanclevenger.landing.page.as/logo.png
whoText: <p>Hi, I&#x27;m Nathan Clevenger</p>
whatText: <p>We are working on a new exciting product...</p>
media: null
whyText: <p>Get early access before we launch on Product Hunt...</p>
successText: <p>Thank you for supporting our project!</p><p></p>
templateName: default
brandColor: '#f64900'
backgroundColor: '#000'
backgroundImage: https://nathanclevenger.landing.page.as/background.jpg
websiteUrl: https://landing.pages.as
appStoreUrl: null
playStoreUrl: null
facebookUrl: null
twitterUrl: null
angellistUrl: null
privacyPolicyUrl: null
hiring: false
status: unlisted
```

Then, create a file called `.github/workflows/publish.yaml` with the following contents:

```yaml
on: [push]

jobs:
  publish:
    runs-on: ubuntu-latest
    container: node:16
    steps:
      - uses: nathanclevenger/product-hunt-ship-pages@v1
        with:
          product-hunt-developer-token: ${{ secrets.PRODUCT_HUNT_DEVELOPER_TOKEN }}
          config-yaml-path: ship.yaml
```

Then, get your Product Hunt API token from [here](https://www.producthunt.com/v2/oauth/applications) and add it to your GitHub secrets as `PRODUCT_HUNT_DEVELOPER_TOKEN`.

Finally, push your changes to GitHub and your Ship Page will be created or updated on Product Hunt.