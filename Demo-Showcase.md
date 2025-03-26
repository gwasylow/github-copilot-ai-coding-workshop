# Demo Showcase

## 1. Make a Sound App

### Exercise 1: Initial Setup
- Open the folder
- Verify environment:
    - [ ] Remove node_modules
    - [ ] Code review: `/app` structure (page.tsx, layout.tsx, global.css, ./lib/audioplayer.tsx)
- Setup application:
    ```bash
    pnpm install
    pnpm dev
    ```

### Exercise 2: Component Positioning
- Review flex positioning:
    ```jsx
    <div className="flex gap-4 items-center flex-col sm:flex-row">
        <AudioPlayer />
    </div>
    ```
- Component centering with Tailwind
- AI Model comparison (Claude, OpenAI, Gemini)

### Exercise 3: AudioPlayer Component
- Component context review
- Code structure analysis

### Exercise 4-10: Advanced Features
- Code optimization
- Git commit automation
- Architecture diagramming
- Documentation generation
- Security review (OWASP Top 10)

## 2. DotNet Testing App

### Exercises 1-5: Setup and Structure
- Solution analysis
- Package management
- Program.cs restructuring
- Logging implementation
- Code organization

### Exercises 6-10: Testing and Documentation
- MSTest implementation
- Security validation
- Architecture documentation
- Code simplification
- Code documentation

## 3. Docker Sample

### Exercises 1-3: Container Setup
```bash
dotnet new mvc -n MyWebApp
```
- Dockerfile creation
- Azure DevOps pipeline
- GitHub Actions implementation

### Exercises 4-7: Application Features
- Logging service implementation
- Technical documentation
- DevOps Wiki setup
- Snake game implementation
