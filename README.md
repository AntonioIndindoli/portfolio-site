# Personal Website

This repository contains the source for the personal portfolio site of **Antonio Indindoli**.

> **React portfolio**

---

## Table of Contents

* [Tech Stack](#tech-stack)
* [Local Development](#local-development)

  * [Prerequisites](#prerequisites)
  * [Run Locally](#run-locally)
* [Deploying to Render](#-deploying-to-render)
* [Project Structure](#project-structure)

## Tech Stack

| Layer | Choice | Notes |
| ----------- | --------------- | ------------------------------ |
| **Frontend** | React (CRA v5) | Built to static files for prod |
| **Hosting** | **Render** | Free HTTPS, autoscaling |


---

## Local Development

### Prerequisites

* **Node.js** 18 LTS (or 20).
* **npm** (comes with Node) or **pnpm**.
* **Git**.

### Run Locally

```bash
# 1. Clone
$ git clone https://github.com/yourusername/gamedev-company-website.git
$ cd gamedev-company-website

# 2. Install deps
$ npm install

# 3. Start the dev server
$ npm start
```

---

## Deploying to Render

Use a **Static Site** service:

| Field             | Value                          |
| ----------------- | ------------------------------ |
| **Type**          | Static Site                    |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `build`                    |

Render will build the site and serve the files from its CDN.

---
## Project Structure

```
.
├── public/        # Static assets
├── src/           # React components
├── build/         # Production build (after `npm run build`)
├── package.json
└── README.md
```

---

