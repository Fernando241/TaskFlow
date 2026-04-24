# TaskFlow

TaskFlow is a task management application built with Vue 3, designed as a real-world project to master scalable frontend architecture, state management, and professional development practices.

---

## 🚀 Tech Stack

* Vue 3 (Composition API)
* Vue Router
* Pinia (State Management)
* Vite
* ESLint + Prettier

---

## 📦 Features

* Full CRUD for tasks
* Persistent state using localStorage
* Task filtering (All / Completed / Pending)
* Derived state using getters
* Animated task list (TransitionGroup)
* UI states (loading, empty, feedback)
* Microinteractions and visual feedback

---

## 🧠 Purpose

This project focuses on:

* Building scalable frontend architecture
* Managing state professionally with Pinia
* Separating concerns between UI and logic
* Preparing for real backend integration

---

## 🏗️ Architecture Decisions

### State Management

Pinia is used as the central store. Derived state is handled using getters to avoid duplication.

### Persistence

localStorage is used as a temporary persistence layer, abstracted to allow future API integration.

### Component Design

Components are modular and follow single responsibility principles.

### UI/UX Strategy

UI states (loading, empty, feedback) are explicitly handled to simulate real-world application behavior.

---

## 📁 Project Structure

```bash
src/
├── views/
│   └── HomeView.vue
├── components/
│   └── tasks/
│       ├── TaskForm.vue
│       ├── TaskList.vue
│       ├── TaskItem.vue
│       └── TaskFilters.vue
├── stores/
│   └── taskStore.js
├── composables/   # (planned)
├── services/      # (planned)
```

---

## ⚙️ Constraints

* No backend integration yet
* localStorage used as temporary persistence
* Focus on architecture before adding complexity

---

## 🗺️ Roadmap

* [x] Task CRUD
* [x] Local persistence (tasks + filters)
* [x] UI states and animations
* [ ] Introduce composables (logic extraction)
* [ ] Abstract persistence layer (services)
* [ ] Prepare API integration
* [ ] Authentication and roles

---

## ▶️ Getting Started

```bash
npm install
npm run dev
```

---

## 📌 Status

Currently transitioning from a monolithic store approach to a scalable architecture using composables and service layers.

---

## 📄 License

Educational project.
