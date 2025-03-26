<!-- When Copilot generates code or answers questions, it tries to match your coding practices and preferences such as which libraries you use or how you name your variables. However, it might not always have enough context to do this effectively. For example, if you work with a specific framework version, you need to provide additional context in your prompts.

To enhance Copilot's responses, you can use custom instructions to provide it with contextual details about your team's workflow, tools, or project specifics. Copilot then incorporates these custom instructions with every request. -->

<!-- MOVE THIS FILE INTO .github/prompts/react-form.prompt.md -->

<!-- sample file: -->
<!-- >>>>>>>>>>>>>>>>>>>>>>>> -->
# Custom instructions for Copilot
Your goal is to generate a new React form component.

Ask for the form name and fields if not provided.

Requirements for the form:
* Use form design system components: [design-system/Form.md](../docs/design-system/Form.md)
* Use `react-hook-form` for form state management:
* Always define TypeScript types for your form data
* Prefer *uncontrolled* components using register
* Use `defaultValues` to prevent unnecessary rerenders
* Use `yup` for validation:
* Create reusable validation schemas in separate files
* Use TypeScript types to ensure type safety
* Customize UX-friendly validation rules
<!-- <<<<<<<<<<<<<<<<<<<<<<<< -->