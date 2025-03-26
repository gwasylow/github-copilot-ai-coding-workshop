<!-- When Copilot generates code or answers questions, it tries to match your coding practices and preferences such as which libraries you use or how you name your variables. However, it might not always have enough context to do this effectively. For example, if you work with a specific framework version, you need to provide additional context in your prompts.

To enhance Copilot's responses, you can use custom instructions to provide it with contextual details about your team's workflow, tools, or project specifics. Copilot then incorporates these custom instructions with every request. -->

<!-- MOVE THIS FILE INTO .github/security-api.prompt.md -->

<!-- sample file: -->
<!-- >>>>>>>>>>>>>>>>>>>>>>>> -->
# Custom instructions for Copilot

## Security standards
When generating API code, please follow these security practices:

1. Authentication & Authorization
    - Always include authentication middleware
    - Implement role-based access control
    - Use JWT tokens with proper expiration

2. Input Validation
    - Validate all request parameters
    - Sanitize user inputs
    - Use parameterized queries for database operations

3. Rate Limiting
    - Implement rate limiting middleware
    - Add request throttling
    - Set appropriate limits based on endpoint sensitivity

4. Security Monitoring
    - Include error logging setup
    - Add audit trails for sensitive operations
    - Include security event monitoring code

Please ensure all generated code follows OWASP security best practices.
<!-- <<<<<<<<<<<<<<<<<<<<<<<< -->