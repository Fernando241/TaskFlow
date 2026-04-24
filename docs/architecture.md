# TaskFlow - Architecture Decisions

---

## 2026-04 - Initial Setup

### Decision

Use Vue 3 with Vite and Composition API.

### Reason

Modern standard for fast and scalable frontend development.

---

## State Management

### Decision

Use Pinia as centralized store.

### Reason

Simple, lightweight, and aligned with Vue 3 ecosystem.

---

## Derived State

### Decision

Use getters for filtered tasks and counters.

### Reason

Avoid duplicated state and ensure consistency.

---

## Persistence Layer

### Decision

Use localStorage for tasks and filter state.

### Reason

Provides persistence without backend dependency during early stages.

---

## UI State Handling

### Decision

Explicitly handle loading, empty, and feedback states.

### Reason

Simulate real-world UX behavior and improve user experience.

---

## 2026-04 - Transition to Scalable Architecture (NEXT PHASE)

### Problem

The store is becoming too large and responsible for multiple concerns:

* Business logic
* Persistence
* UI-related state

### Decision (Planned)

Refactor architecture by introducing:

* composables (useTasks, useFilters)
* services (taskService for persistence/API)
* cleaner separation of concerns

### Expected Outcome

* Better maintainability
* Easier testing
* Scalable structure for future backend integration

### Risks

* Overengineering
* Logic duplication between store and composables

### Mitigation

* Move logic incrementally
* Keep store as single source of truth
* Avoid duplicating state
