<!-- When Copilot generates code or answers questions, it tries to match your coding practices and preferences such as which libraries you use or how you name your variables. However, it might not always have enough context to do this effectively. For example, if you work with a specific framework version, you need to provide additional context in your prompts.

To enhance Copilot's responses, you can use custom instructions to provide it with contextual details about your team's workflow, tools, or project specifics. Copilot then incorporates these custom instructions with every request. -->

<!-- Use a .github/copilot-instructions.md file:
If you define custom instructions in both the .github/copilot-instructions.md file and in settings, Copilot tries to combine instructions from both sources. -->

<!-- MOVE THIS FILE INTO .github/copilot-instructions.md -->

<!-- sample file: -->
<!-- >>>>>>>>>>>>>>>>>>>>>>>> -->
# Custom instructions for Copilot

## Project context
This project is a web application built with NextJs and Node.js, also using pnpm instead of npm.

## Indentation
We use tabs, not spaces.

## Coding style
Use camelCase for variable names and prefer arrow functions over traditional function expressions.

## Testing
We use Jest for unit testing and Playwright for end-to-end testing.
<!-- <<<<<<<<<<<<<<<<<<<<<<<< -->