# Demo showcase:


## 1. Make a Sound App:
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


## 2. DotNet Testing app:
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


## 3. DOCKER sample
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

EXERCISE 8: /feedback - provide feedback to the Team test
[COPILOT] feedback 


 x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x


## 4. Immersive mode:
> go to github.com
> open your demo repositiory
> press copilot shotcut and choose IMMERSIVE MODE, and ask:
[COPILOT] walk through the complete process of creating, submitting, and managing pull requests on GitHub, from forking to merging.
> Alternatively:
[COPILOT] explain modern javascript libraries, benefits and potential risks to be considered
> As en extention:
[COPILOT] give me the top 3 names of javascrpt libraries
> The same questions we may ask using COPILOT addon.


 x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x


## 5. CoPilot Vision (experimentaty):
> go to linkedin / any other page or:
> Drag and drop images from your OS or from the Explorer view
> Paste an image from your clipboard
> Attach a screenshot of the VS Code window (select the paperclip 📎 button > Screenshot Window)

A warning is shown if the selected model currently does not have the capability to handle the file type. The only supported model at the moment will be GPT 4o, but support for image attachments with Claude 3.5 Sonnet and Gemini 2.0 Flash will be rolling out soon as well. Currently, the supported image types are JPEG/JPG, PNG, GIF, and WEBP.

!!! (select the paperclip 📎 button > Screenshot Window)
[COPILOT] explain what's visible on the screenshot
> we have an answer
[COPILOT] create xhtml and css with tailwind based on the right side of the screenshot


 x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x


## 6. Custom Instructions:


 x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x

 
 ## 7. GitHub Codespaces:


  x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x

 
 ## 8. GitHub Dependabot & Platform overview & security scanning:


 x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x


## Useful prompts:
[COPILOT] Refactor this code for better readability
[COPILOT] Suggest performance optimizations for this code
[COPILOT] Suggest how to break this monolithic function into smaller functions
[COPILOT] Generate SQL query for this data structure
[COPILOT] Explain this error message from the terminal
[COPILOT] What design pattern is used here? Explain
[COPILOT] Can this code be parallelized? Suggest how.
[COPILOT] Generate CI/CD pipeline YAML for GitHub Actions for this project
[COPILOT] Rewrite entire code base to a single line in go languange
[COPILOT] Write onboarding instructions for this project





x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x
Extras:

https://code.visualstudio.com/docs/copilot/copilot-vscode-features


Chat variables
Use chat variables in your chat prompt to reference context that is relevant to your question.

Chat variable   Description
#changes	    The list of source control changes.
#codebase	    Add relevant workspace content as context to your prompt.
#editor	        Add the visible contents of the active editor as context for your prompt.
#file	        Open a Quick Pick to select a file from your workspace and add it as context for your prompt.
#<filename>	    Type #, followed by a filename, to get filename suggestions for workspace files and attach as context.
#folder	        Type #folder:, followed by a folder name to select a folder from your workspace and add it as context for your prompt. Adding a folder adds all files within it as context.
#problems	    dd workspace issues and problems from the Problems panel as context. Useful while fixing code or debugging.
#selection	    Add the current editor selection as context to your prompt.
#sym	        Open a Quick Pick to select a symbol from your workspace and add it as context for your prompt.
#<symbol>	    Type #, followed by a symbol name, to get symbol suggestions for workspace files and attach as context.
#terminalSelection	    Add the current terminal selection as context to your chat prompt.
#terminalLastCommand    Add the last run terminal command as context to your chat prompt.
#testFailure    Add test failure information as context. Useful when running and diagnosing tests.
#VSCodeAPI	    Add the VS Code API as context to your prompt to ask questions related to VS Code extension development.