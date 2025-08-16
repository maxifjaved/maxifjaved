# Claude Code Configuration

This project has been configured to work with Astro's AI integration following the official guide at https://docs.astro.build/en/guides/build-with-ai/

## AI Integration Setup ✅

- **Status**: Fully configured and verified
- **Context7 MCP Server**: Comprehensive Astro documentation ✓ Connected  
- **Configuration**: Project-scoped only (no global changes)
- **Capabilities**: Real-time Astro docs, code examples, configuration snippets, best practices, and Q&A

### Note on Official Astro MCP Server
The official Astro MCP server at `https://mcp.docs.astro.build/mcp` has known compatibility issues with Claude Code's project-scoped configuration due to bugs in the current implementation. Context7 provides excellent Astro documentation coverage as a reliable alternative.

## Development Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Project Structure

This is an Astro project with:
- TailwindCSS for styling
- Alpine.js for interactivity
- Content collections for projects and blogs
- Component-based architecture

## AI Development Notes

- Use `astro add` for adding integrations
- Follow Astro's file-based routing conventions
- Leverage Astro's component islands architecture
- Reference current Astro APIs via the MCP server integration