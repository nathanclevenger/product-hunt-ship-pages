const core = require('@actions/core')
const github = require('@actions/github')
const fetch = require('node-fetch')
const yaml = require('yaml')

try {
    const productHuntToken = core.getInput('productHuntToken')
    const name = core.getInput('name')
    const environment = core.getInput('environment')

    const headers = {
        'accept': 'application/json',
        'content-type': 'application/json',
    }

    // TODO - get the Product Hunt variables from the `ship.yaml` file
    const variables = yaml.parse('')

    // TODO - figure out if the Page needs to be created or updated
    const body = JSON.stringify({
        operationName: 'UpcomingPageCreate',
        variables: {
            input: {
                name: 'Landing.Page.as',
                tagline: 'Instant Landing Pages hosted on GitHub Pages',
                thumbnailUuid: null,
                logoUuid: null,
                whoText: '<p>Hi, I&#x27;m Nathan Clevenger</p>',
                whatText: '<p>We are working on a new exciting product...</p>',
                media: null,
                whyText: '<p>Get early access before we launch on Product Hunt...</p>',
                successText: '<p>Thank you for supporting our project!</p><p></p>',
                templateName: 'default',
                brandColor: '#f64900',
                backgroundColor: '#000',
                backgroundImageUuid: null,
                websiteUrl: 'https://landing.pages.as',
                appStoreUrl: null,
                playStoreUrl: null,
                facebookUrl: null,
                twitterUrl: null,
                angellistUrl: null,
                privacyPolicyUrl: null,
                hiring: false,
                status: 'unlisted'
            }
        },
        query: 'mutation UpcomingPageCreate($input:UpcomingPageCreateInput!){response:upcomingPageCreate(input:$input){node{id slug __typename}errors{field messages __typename}__typename}}'
    })
  
    fetch('https://www.producthunt.com/frontend/graphql', { method: 'post', headers, body })
  
  
    core.setOutput('time', time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`)
  } catch (error) {
    core.setFailed(error.message)
  }