Demo showcase:

1. Make a Sound App:
EXERCISE 1:
> Open the folder
> Make sure there's no possible to run an app:
[x] node_modules deleted
[x] explain the code of an /app, bref review (page.tsx / layout.tsx / global.css ./lib/audioplayer.tsx)
> run terminal with npm / pnpm dev, display its not working correctly

[Copilot] How to run app from @workspace using pnpm? I got an error: sh: next: command not found  ELIFECYCLE  Command failed.  WARN  Local package.json exists, but node_modules missing, did you mean to install?
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

EXERCISE 7: Architecture diagram
[COPILOT] 