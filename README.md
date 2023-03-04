# playwright-playground

So this is little fun project to combine Playwright and Jenkins.

Basically:

- Tests are pushed to repo
- Jenkins deploys dynamic docker agent that takes Playwright docker image as parameter
- Jenkins pulls tests from repository and runs them inside Playwright container
- Report is generated and submitted to Jenkins HTML reports

This [Repo](https://github.com/Tomasz64/playwright-playground-jenkins-job) contains job that creates dynamic agent which pulls playwright docker image and executes all tests.
