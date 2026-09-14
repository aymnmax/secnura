# Web Development AI Rules & Architecture

## Purpose

This document defines the standards that AI assistants must follow when designing, implementing, reviewing, or refactoring this web application.

The goal is to produce code that is:

- Production-ready
- Maintainable
- Scalable
- Type-safe
- Testable
- Secure
- Accessible
- Consistent
- Easy for another developer to understand

Do not sacrifice architecture or maintainability just to produce code faster.

---

# 1. Default Technology Stack

Unless the project explicitly specifies otherwise, use:

- Next.js
- React
- TypeScript
- Next.js App Router
- Tailwind CSS or the project's existing UI library
- TanStack Query for server state
- React Hook Form for forms
- Zod for validation
- Axios or the project's centralized HTTP client
- ESLint
- Prettier
- Git

Do not introduce a new library when the existing project already provides the required functionality.

Before adding a dependency, check whether the task can be solved using the existing stack.

---

# 2. Core Engineering Principles

Always follow:

1. Separation of concerns
2. Single responsibility
3. Composition over inheritance
4. Explicit dependencies
5. Reusable abstractions
6. Strong typing
7. Minimal duplication
8. Predictable data flow
9. Secure defaults
10. Accessibility by default
11. Performance by default
12. Simple solutions before complex solutions

Avoid premature abstraction.

Do not create abstractions merely because two pieces of code look similar. Abstract when there is a real shared responsibility or repeated behavior.

---

# 3. Project Architecture

Prefer feature/domain-based organization.

Example:

```text
src/
├── app/
│   ├── (auth)/
│   ├── dashboard/
│   ├── users/
│   └── layout.tsx
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── schemas/
│   │   ├── types/
│   │   └── use-cases/
│   │
│   ├── users/
│   └── rewards/
│
├── components/
│   ├── ui/
│   ├── forms/
│   └── layout/
│
├── lib/
│   ├── api/
│   ├── auth/
│   └── utils/
│
├── hooks/
├── types/
├── constants/
└── config/
```

Organize business code around features rather than creating huge global folders.

---

# 4. Layered Data Flow

Business logic should not be tightly coupled to UI components.

Preferred flow:

```text
Page / Component
       ↓
Hook / Server Action
       ↓
Use Case
       ↓
Repository
       ↓
API Client
       ↓
Backend API
```

For simpler features, some layers may be unnecessary.

Do not create five layers for a trivial operation just to follow a pattern.

The architecture should match the complexity of the feature.

---

# 5. Component Rules

Components must have a clear responsibility.

Prefer:

```text
Dashboard
├── DashboardHeader
├── StatsCards
├── SalesChart
├── RecentOrders
└── ActivityList
```

over a single 1,500-line component.

Rules:

- Keep components focused.
- Prefer composition.
- Avoid deeply nested component logic.
- Avoid duplicated UI.
- Keep business logic outside presentational components when it becomes complex.
- Use reusable components only when reuse or consistency justifies them.
- Do not create unnecessary micro-components.

Avoid components with vague names such as:

```text
CommonComponent
UniversalComponent
HelperComponent
SomethingComponent
```

Use names that describe their responsibility.

---

# 6. TypeScript Rules

Use strict TypeScript.

Avoid:

```ts
const data: any = response.data;
```

Prefer:

```ts
const data: User = response.data;
```

For unknown external data:

```ts
const data: unknown = response.data;
```

Then validate it.

Rules:

- Avoid `any`.
- Prefer `unknown` for unknown values.
- Avoid unnecessary type assertions.
- Define API request and response types.
- Keep domain types meaningful.
- Use discriminated unions where appropriate.
- Do not duplicate types unnecessarily.
- Keep types close to their feature when they are feature-specific.

Example:

```ts
interface User {
  id: string;
  name: string;
  email: string;
}
```

---

# 7. Runtime Validation

TypeScript does not validate runtime API data.

Use Zod for important external boundaries.

Preferred flow:

```text
API response
     ↓
Zod validation
     ↓
Application/domain data
```

Example:

```ts
const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});
```

Validate:

- API responses when necessary
- Form input
- URL/query parameters when necessary
- Environment variables
- External/untrusted data

---

# 8. API Architecture

Use one centralized API client.

Example:

```text
lib/api/
├── client.ts
├── auth.ts
├── users.ts
└── rewards.ts
```

Do not create Axios instances inside individual components.

Bad:

```tsx
const response = await axios.get("/users");
```

inside random UI components.

Prefer:

```text
Component
   ↓
Hook
   ↓
Service/Repository
   ↓
Central API client
```

The API client should centrally handle:

- Base URL
- Headers
- Authentication
- Error normalization
- Timeouts
- Request configuration
- Response handling

---

# 9. Authentication

Authentication must have a clear architecture.

Typical flow:

```text
Login
  ↓
Authentication endpoint
  ↓
Session/token
  ↓
Authenticated application
```

For token refresh:

```text
API request
    ↓
Access token
    ↓
401?
    ↓
Refresh session/token
    ↓
Retry original request
```

Important:

- Avoid duplicate refresh requests.
- Handle concurrent requests safely.
- Do not expose secrets to the browser.
- Never put private credentials in public environment variables.
- Do not rely on frontend route hiding for authorization.
- Backend authorization is mandatory.

---

# 10. State Management

Separate server state from UI state.

Use TanStack Query for server state:

```text
Users
Orders
Rewards
Dashboard data
Notifications
```

Use local state for local UI state:

```text
Modal open/closed
Selected tab
Dropdown state
Temporary input
```

Use Context only when state is genuinely shared and relatively stable.

Do not put every application value into a global store.

---

# 11. Forms

Use:

- React Hook Form
- Zod

Preferred flow:

```text
Form
 ↓
React Hook Form
 ↓
Zod validation
 ↓
Submit handler
 ↓
Use case/API
```

Forms must handle:

- Initial values
- Validation
- Loading state
- Server errors
- Field errors
- Success state
- Disabled state
- Accessibility

Do not duplicate validation logic unnecessarily between components.

---

# 12. Error Handling

Every API-driven screen should consider:

```text
Loading
Success
Empty
Error
Retry
Unauthorized
Forbidden
Network failure
```

Never design only the happy path.

Use meaningful error messages.

Do not expose raw backend errors to users when they contain technical information.

---

# 13. Loading and Empty States

Avoid blank screens.

Use:

- Skeletons for content-heavy loading
- Spinners when appropriate
- Empty-state components
- Retry actions
- Helpful messages

Example:

```text
Loading...
     ↓
Data available → Show content

No data → Show empty state

Request failed → Show error + retry
```

---

# 14. UI Design System

Define design tokens before building many screens.

Standardize:

- Colors
- Typography
- Font sizes
- Font weights
- Spacing
- Border radius
- Shadows
- Breakpoints
- Buttons
- Inputs
- Cards
- Tables
- Dialogs
- Toasts
- Badges
- Alerts

Do not randomly introduce values such as:

```css
margin: 13px;
margin: 17px;
margin: 21px;
```

Prefer a consistent spacing system.

---

# 15. Responsive Design

Every page must be responsive unless explicitly designed for a fixed environment.

Think in:

```text
Mobile
Tablet
Desktop
Large desktop
```

Do not simply shrink desktop UI.

Consider:

- Navigation
- Tables
- Forms
- Cards
- Modals
- Typography
- Touch targets
- Horizontal overflow

Mobile usability is a first-class requirement.

---

# 16. Accessibility

Follow WCAG principles.

Always consider:

- Semantic HTML
- Keyboard navigation
- Focus states
- Labels for inputs
- Alt text for meaningful images
- Proper heading hierarchy
- Sufficient contrast
- Accessible buttons
- Accessible dialogs
- Screen-reader support
- Reduced motion where appropriate

Never use a `<div>` as a button when a `<button>` is appropriate.

---

# 17. Security

Never trust frontend input.

Frontend restrictions are not authorization.

Bad:

```text
Hide Admin button
→ Assume user cannot access admin functionality
```

Correct:

```text
Frontend restriction
+
Backend authorization
```

Always consider:

- Authentication
- Authorization
- Input validation
- XSS
- CSRF where applicable
- Secure cookies/session handling
- Secret management
- Rate limiting on backend
- File upload validation
- Dependency security
- Least privilege

Never expose:

- API secrets
- Private keys
- Database credentials
- Service account credentials

in client-side code.

---

# 18. Environment Variables

Separate environments.

Example:

```text
.env.local
.env.development
.env.production
```

Public variables should be explicitly public.

Never put secrets in variables intended for client-side exposure.

Validate required environment variables during application startup/build.

---

# 19. Performance

Performance must be considered during implementation.

Prefer:

- Server Components where appropriate
- Static rendering where appropriate
- Dynamic rendering only when needed
- Image optimization
- Code splitting
- Lazy loading
- Pagination
- Caching
- Efficient API requests
- Avoiding unnecessary re-renders

Do not optimize blindly.

Measure before making complicated performance changes.

---

# 20. Next.js Rules

Use the App Router appropriately.

Prefer Server Components when interactivity is not required.

Use `"use client"` only when necessary.

Client Components are appropriate for:

- State
- Effects
- Browser APIs
- Event-driven interactions
- Client-side libraries that require the browser

Do not make the entire application a Client Component without a reason.

---

# 21. SEO

For public websites, consider:

- Page metadata
- Title
- Description
- Open Graph
- Twitter/X metadata where relevant
- Canonical URLs
- Sitemap
- Robots configuration
- Semantic HTML
- Structured data when appropriate

Do not prioritize SEO for private dashboards where search indexing is irrelevant.

---

# 22. Routing

Keep routes predictable.

Example:

```text
/login
/dashboard
/users
/users/[id]
/rewards
/settings
```

Protect private routes using proper authentication/authorization mechanisms.

Do not rely only on client-side redirects for security.

---

# 23. Repository Pattern

Use repositories when the application has meaningful data-access complexity.

Example:

```ts
interface UserRepository {
  getUser(id: string): Promise<User>;
  getUsers(): Promise<User[]>;
}
```

Implementation:

```text
UserRepository
      ↓
API implementation
```

This keeps business logic independent from the specific data-access mechanism.

Do not create repositories for every trivial function if they add no useful abstraction.

---

# 24. Use Case Pattern

Use cases should represent meaningful business operations.

Examples:

```text
CreateUser
ApproveReward
RedeemPoints
CalculateCommission
ResetPassword
```

A use case should describe business behavior rather than HTTP details.

Bad:

```text
PostUserToEndpoint
```

Better:

```text
CreateUser
```

---

# 25. Service Layer

Services should contain reusable application/business operations when appropriate.

Avoid giant services.

Bad:

```text
UserService
- login
- payment
- email
- reports
- file uploads
- notifications
```

Prefer focused services.

---

# 26. Dependency Inversion

High-level business logic should not depend directly on:

```text
Axios
Browser APIs
localStorage
specific UI components
```

Use abstractions when they provide real value.

The goal is testability and separation of responsibilities.

---

# 27. Naming Conventions

Use clear names.

Components:

```text
UserCard.tsx
RewardTable.tsx
LoginForm.tsx
```

Hooks:

```text
useAuth.ts
useUsers.ts
useRewards.ts
```

Functions:

```text
createUser()
getUserById()
calculateReward()
```

Booleans:

```text
isLoading
isAuthenticated
hasPermission
canEdit
```

Avoid:

```text
data
temp
foo
thing
handleStuff
```

unless the scope makes the meaning genuinely obvious.

---

# 28. File Naming

Use one consistent convention.

Recommended:

```text
PascalCase.tsx     → React components
camelCase.ts       → utilities/hooks/services
kebab-case         → route segments when appropriate
```

Do not mix conventions randomly.

Follow the existing repository convention if one already exists.

---

# 29. Git Rules

Use meaningful branches:

```text
main
develop
feature/authentication
feature/dashboard
fix/token-refresh
refactor/user-repository
```

Use meaningful commits:

```text
feat: add user authentication
fix: handle expired access token
refactor: extract user repository
chore: update dependencies
docs: update architecture guide
```

Avoid:

```text
update
changes
final
final2
new changes
```

Never commit:

```text
.env
private keys
credentials
secrets
large generated files
```

unless explicitly required and safe.

---

# 30. Testing Strategy

Use tests where they provide meaningful confidence.

Recommended levels:

```text
Unit tests
    ↓
Business logic

Component tests
    ↓
Important UI behavior

Integration tests
    ↓
Feature workflows

E2E tests
    ↓
Critical user journeys
```

Prioritize:

- Authentication
- Permissions
- Business calculations
- Payments
- Rewards/points
- Critical forms
- Important workflows

Do not chase 100% coverage at the expense of useful tests.

---

# 31. Code Review Rules

Before considering a feature complete, check:

### Architecture
- Is responsibility in the correct layer?
- Is business logic separated from UI?
- Is there unnecessary coupling?

### TypeScript
- Is `any` avoided?
- Are external data structures validated?
- Are types meaningful?

### UI
- Is the UI reusable where appropriate?
- Is responsive behavior correct?
- Are loading/error/empty states handled?

### Security
- Are permissions enforced by the backend?
- Are secrets protected?
- Is user input validated?

### Performance
- Are unnecessary requests avoided?
- Are unnecessary client components avoided?
- Is large data paginated?

### Accessibility
- Can the feature be used with keyboard navigation?
- Are inputs labeled?
- Are interactive elements semantic?

### Testing
- Are important business rules tested?
- Are critical workflows covered?

---

# 32. Anti-Patterns to Avoid

Avoid:

- Huge components
- Huge services
- Global state for everything
- `any` everywhere
- API calls directly inside random components
- Business logic inside JSX
- Duplicated API clients
- Duplicated validation
- Hardcoded secrets
- Hardcoded permissions
- Client-only authorization
- Unnecessary dependencies
- Premature abstractions
- Over-engineering simple features
- Copy-paste architecture
- Ignoring loading/error/empty states
- Ignoring mobile layouts
- Ignoring accessibility
- Ignoring tests for critical business logic

---

# 33. AI Coding Rules

When an AI assistant works on this project, it MUST:

1. Understand the existing architecture before modifying it.
2. Inspect related files before creating new abstractions.
3. Reuse existing components, utilities, services, hooks, and patterns.
4. Follow existing naming conventions.
5. Avoid introducing unnecessary dependencies.
6. Avoid breaking existing functionality.
7. Keep changes focused on the requested task.
8. Avoid unrelated refactoring.
9. Use TypeScript properly.
10. Never use `any` unless there is a documented unavoidable reason.
11. Validate external/untrusted data where appropriate.
12. Handle loading, error, empty, and success states.
13. Consider responsive behavior.
14. Consider accessibility.
15. Consider security.
16. Consider performance.
17. Add or update tests for important logic.
18. Explain architectural decisions when they are non-obvious.
19. If existing code conflicts with these rules, prefer the project's established architecture unless there is a clear reason to migrate it.
20. Never silently change business requirements.

---

# 34. Before Writing Code

The AI should first determine:

```text
1. What is the feature?
2. What existing code is related?
3. What data does it use?
4. Is the data server state or client state?
5. Does authentication apply?
6. Does authorization apply?
7. What API endpoints are involved?
8. What validation is required?
9. What UI states are required?
10. What responsive behavior is required?
11. What tests are needed?
12. Can existing components/utilities be reused?
```

Do not immediately start creating files without understanding the existing structure.

---

# 35. Implementation Workflow

Follow:

```text
Requirement
    ↓
Understand existing code
    ↓
Design approach
    ↓
Define types/schema
    ↓
Define API/data layer
    ↓
Implement business logic
    ↓
Implement UI
    ↓
Handle loading/error/empty states
    ↓
Responsive/accessibility review
    ↓
Tests
    ↓
Lint/typecheck
    ↓
Final review
```

---

# 36. Definition of Done

A feature is not complete merely because it works on the happy path.

Before marking it complete, verify:

- [ ] Requirements implemented
- [ ] Existing architecture followed
- [ ] TypeScript passes
- [ ] ESLint passes
- [ ] Formatting passes
- [ ] API errors handled
- [ ] Loading state handled
- [ ] Empty state handled
- [ ] Authentication handled
- [ ] Authorization handled
- [ ] Responsive UI checked
- [ ] Accessibility considered
- [ ] Security considered
- [ ] Performance considered
- [ ] Important tests added/updated
- [ ] No unnecessary dependencies
- [ ] No unrelated changes
- [ ] No secrets committed

---

# 37. Golden Rule

## Build the simplest architecture that can safely support the current requirements and foreseeable growth.

Do not:

```text
Over-engineer
```

and do not:

```text
Quickly hack everything together
```

The preferred approach is:

```text
Simple
    +
Clean
    +
Type-safe
    +
Testable
    +
Scalable
    +
Secure
```

When there is a trade-off, explain it before choosing a significantly more complex solution.
