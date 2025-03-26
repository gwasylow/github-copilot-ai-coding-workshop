Demo showcase:

1. Make a Sound App:
EXERCISE 1:
> Open the folder
> Make sure there's no possible to run an app:
[x] node_modules deleted
[x] explain the code of an /app, bref review (page.tsx / layout.tsx / global.css ./lib/audioplayer.tsx)
> run terminal with npm / pnpm dev, display its not working correctly

[COPILOT] How to run app from @workspace using pnpm? I got an error: sh: next: command not found  ELIFECYCLE  Command failed.  WARN  Local package.json exists, but node_modules missing, did you mean to install?
> Execute necessary commands in CoPilot:
- Ensure pnpm is installed: Verify that pnpm is installed globally by running pnpm --version. If not, install it using npm install -g pnpm.
- Install dependencies: Run pnpm install in the root of your workspace to install all dependencies.
- Run the app: Use pnpm dev to start the Next.js development server.
- Check package.json scripts: Ensure the dev script is defined in your package.json:

> run pnpminstall from Copilot
> App started to work: explain the UI and potential fixes required:

EXERCISE 2:
[x] Explain the position of  
<div className="flex gap-4 items-center flex-col sm:flex-row">
    I made this change to get a better understanding of how to use the Next.js framework.
    <AudioPlayer />
</div> 
[x] Move the <AudioPlayer /> component above
[x] select the component and runcopilot CMD+I with following prompt:
> [COPILOT] center this component using tailwind
[x] Show: RE-RUN options
[x] Explain different Models usage (CLaude, OopenAI, Gemini).
<div className="flex justify-center w-full">
    <AudioPlayer />
</div>

EXERCISE 3:
> Go to ./lib/audiplayer.tsx
> Move audplayer.tsx and EXPLAIN THE CONTEXT
[COPILOT] @workspace /explain

EXERCISE 4: Agent mode & optimization
[COPILOT] show me possible optimizations for a code and explain step by step how the potential new code is going to work
> Check for 2-3 different options available

EXERCISE 5: Commit automatisation:
[COPILOT] create commit message that explains recent changes and add to a git commit command in terminal
[TERMINAL] git show HEAD

EXERCISE 6: /explain
> select piece of a code and run /explain
[COPILOT] /explain

EXERCISE 7: Architecture diagram creation
[COPILOT] create architecture diagram for @workspace
> Go to https://mermaidviewer.com/editor/9O8ZN2Ilyv9TZtvSDpBmZ and visalize the graph TD:
> copy & paste, voila!

EXERCISE 8: Documentation
[COPILOT] create github technical documentation for the project, use:

act like business analyst, add:
- Business information about application usage (keep it a short business language)

act like engineer , add:
- Technical summary
- Technical explanation of an application
- Possible new features for further implementation

[COPILOT] add this documentation as a part of README.MD
> READ ME visualization: https://markdownlivepreview.com/
> copy & paste, voila!

EXERCISE 9: Context references:
[COPILOT] @workspace where is the database connection configured?

EXERCISE 10: Security
[COPILOT] Check security level of application, do a review of all OWASP 10 items and validate, preapre final report with PASS / FAIL status. Add scoring and prepare a summary.
> View security report, we can extract this information to PDF/README.MD



 x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x



2. DotNet Testing app:
> Explain the solution
EXERCISE 1:
[COPILOT] explain the solution, technologies and possible technical debt, if any. 

EXERCISE 2:
[COPILOT] what can i do with outdated packages? How to make sure the update procedure is safe?

EXERCISE 2:
> Organize Program.cs to an old class styling
[COPILOT] Make this class in a origin Program

EXERCISE 3: Logging:
[COPILOT] Add basic logging class which displays information to a console

EXERCISE 4: /fix command
[COPILOT] @workspace /fix
> Code optimization

EXERCISE 5:
> Add new folder ./Logic
[COPILOT] Put this code to a new file
> May work ... :)

EXERCISE 6: Testing
> Select LoggerClass
[COPILOT] /tests using MSTest library
New window will appear, we can choose the solution, however some fixes will be required
> Some references will be needed!
> dotnet test
[COPILOT] what are the dotnet test paremeters?
dotnet test --verbosity n [choose param]

EXERCISE 7: Security check
[COPILOT] Check security level of application, do a review of all OWASP 10 items and validate, preapre final report with PASS / FAIL status. Add scoring and prepare a summary.
> View security report, we can extract this information to PDF/README.MD

EXERCISE 8: Architecture diagram creation
[COPILOT] create architecture diagram for @workspace
> Go to https://mermaidviewer.com/editor/9O8ZN2Ilyv9TZtvSDpBmZ and visalize the graph TD:
> copy & paste, voila!

EXERCISE 9: /simplify usage
[COPILOT] /simplify

EXERCISE 10:
[COPILOT] Add comments to the most important part of a code, make sure header is fulfilled with author, data, class usage and company info




 x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x



2. DOCKER sample
> Go to ./006-DOCKER
> Create new dotnet webapp
dotnet new mvc -n MyWebApp

EXERCISE 1: DOCKER
[COPILOT] create DOCKER file for the application, make sure application is able to be deployed as Microsoft Azure Web Application, keep the secrets save using Azure Key Vault
> insert new DOCKERFILE
[COPILOT] /optimize for docker

EXERCISE 2: MS Azure DevOps pipeline
> Check for security
[COPILOT] create Azue MS DevOps pipeline for application deployment to Azure Web Application service
> save the file and review
[COPILOT] /explain

EXERCISE 3: GitHub Actions
[COPILOT] optimize pipeline for github actions, make the application secured
> save the file and review
[COPILOT] /explain

EXERCISE 4: Coding
[COPILOT] /generate transient service for Logger
builder.Services.AddTransient<ILogger, Logger>();
> Code won't work yet
[COPILOT] /fix
builder.Services.AddTransient<ILogger<Program>, Logger<Program>>();

EXERCISE 5: Documentation for a code
[COPILOT] /doc

EXERCISE 6: MS DevOps WIKI Doucmentation generation
[COPILOT] create MS DevOps wiki page with @file techical documenation

EXERCISE 7: SNAKE GAME in /Home View:
[COPILOT] generate simple snake game using simple js and canvas with no spectacular css and modern libraries