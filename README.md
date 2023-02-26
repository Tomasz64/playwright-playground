# playwright-playground

So this is little fun project to combine Playwright and Jenkins.

Basically:

- Tests are pushed to repo
- Jenkins deploys dynamic docker agent that takes Playwright docker image as parameter
- Jenkins pulls tests from repository and runs them inside Playwright container
- Report is generated and submitted to Jenkins HTML reports

