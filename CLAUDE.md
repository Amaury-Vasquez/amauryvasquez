# Project Configuration for Claude Code

## Context Directories

When working on this project, always read and consider the context from these directories:

- `claude/` - Contains component usage guides and project-specific documentation

## Component Library

This project uses the `amvasdev-ui` component library. Key information:

- **Installation**: `npm install amvasdev-ui`
- **CSS Import**: Always import `"amvasdev-ui/dist/index.css"` in the root component
- **Theme System**: Built with daisyUI styling system with 14 predefined themes

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the project
- `npm run lint` - Run ESLint with custom rules for unused imports and import ordering

## ESLint Configuration

The project has custom ESLint rules configured:
- Removes unused imports automatically
- Enforces import ordering (builtin → external → internal → parent → sibling → index → object → type)
- Ignores variables starting with `_` from unused variable warnings
- No empty lines between import groups

## Import Configuration

This project uses path aliases for cleaner imports:
- **`@/` alias**: Maps to the `src/` directory for internal imports
- Example: `import ButtonLink from "@/components/ButtonLink"`

## Project Guidelines

1. **Component Usage**: Always refer to `claude/COMPONENT_USAGE_GUIDE.md` for examples and best practices when using amvasdev-ui components
2. **Import Organization**: Follow the configured import order rules and use `@/` alias for internal imports
3. **Styling**: Use standard TailwindCSS classes (no prefix required)
4. **TypeScript**: The project is fully typed with TypeScript support
5. **Conditional Rendering**: Use ternary operator `condition ? component : null` instead of conditional rendering with `&&` operator
6. **Data Storage**: Always store static data, constants, and configuration files under `@/data` directory
7. **Class Names**: Use `clsx` for dynamic class names with template literals instead of string concatenation