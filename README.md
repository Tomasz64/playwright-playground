# Playwright Playground

So this is little fun project to combine [Playwright](https://playwright.dev/) and [Jenkins](https://www.jenkins.io/).
I'm doing thisto learn new things and experiment with different frameworks.

Basically:

- Jenkins pulls configuration from This [Repo](https://github.com/Tomasz64/playwright-playground-jenkins-job) 
- Jenkins deploys dynamic docker agent with [Playwright docker](https://hub.docker.com/_/microsoft-playwright) image
- This repository is pulled to the Playwright workspace
- Tests are executed
- Report is generated and submitted to Jenkins HTML reports
