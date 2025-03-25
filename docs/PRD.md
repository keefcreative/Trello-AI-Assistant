# 🧠 Trello AI Assistant – Product Requirements Document (PRD)

## 📘 Project Title
**Trello AI Assistant for Internal Design Agency Workflow**

---

## 🎯 Objective

To build a Trello Power-Up integrated with an AI backend and Supabase database, allowing internal agency staff to manage client boards efficiently. The assistant will handle tasks like summarizing feedback, generating to-do lists, enhancing briefs, and suggesting deadlines. The tool will be accessible only to agency staff and support a consistent board structure across clients.

---

## 👤 Target Users

| Role         | Description |
|--------------|-------------|
| **Agency Owner/Staff** | Internal users with full access to AI assistant tools |
| **Clients**   | No access to the Power-Up |
| **Designers** | Selected for context-aware AI prompts (not interacting with AI directly) |

---

## 🛠️ Architecture Overview

### 1. **Frontend (Trello Power-Up UI)**
- Adds a **Card Button** to each card under the Power-Ups section.
- Clicking the button opens a **floating modal** UI.
- Modal includes:
  - Dropdowns to select AI task, client board, and designer
  - Input and output display area
  - Buttons to push results back into the card (comment, checklist, etc.)

### 2. **Backend (Serverless Functions)**
- Hosted via Vercel or Cloudflare Workers (free tiers)
- Receives content from frontend, routes to OpenAI API
- Returns structured AI response
- Optional logging to Supabase

### 3. **Database (Supabase)**
Stores agency-wide card data and AI logs for insights and future automation.

---

## 🔍 Primary Features

| Feature | Description |
|--------|-------------|
| **Client Board Selector** | Dropdown to choose client board (visible only to agency staff) |
| **Designer Selector** | Dropdown to provide AI with designer context |
| **AI Assistant Modal** | Floating modal with buttons for: enhance brief, summarize comments, generate tasks, suggest deadline, summarize card |
| **Data Logging to Supabase** | On card creation/update, log data to Supabase |
| **Private Access** | Only accessible by internal agency team members |

---

## 📊 Supabase Data Tables

### `cards`
| Field | Type |
|-------|------|
| id | UUID |
| card_id | String |
| board_id | String |
| client_name | String |
| title | Text |
| description | Text |
| labels | Array |
| list | String |
| due_date | Timestamp |
| created_at | Timestamp |
| updated_at | Timestamp |

### `ai_logs`
| Field | Type |
|-------|------|
| id | UUID |
| card_id | String |
| operation_type | String |
| input_text | Text |
| output_text | Text |
| created_at | Timestamp |

---

## 🧱 UI Overview

### Entry Point
- Appears as a **Power-Up button on each card**
- Label: `AI Assistant`

### Modal UI
- Opens as a **floating modal**
- Contains:
  - Function dropdown: Enhance Brief, Summarize Comments, etc.
  - Client Board dropdown
  - Designer dropdown
  - Input text area (optional)
  - Output display
  - Button: "Insert to Card" (adds AI response as comment/checklist)

---

## 🚀 Build Plan (Incremental Milestones)

| Step | Description | Output |
|------|-------------|--------|
| ✅ Step 1 | Create PRD & folder structure | PRD.md + folder setup |
| ⏭️ Step 2 | Create Power-Up manifest and modal UI shell | Card button → floating modal |
| ⏭️ Step 3 | Build backend route for "Enhance Brief" | Serverless function with OpenAI |
| ⏭️ Step 4 | Connect modal to backend | Fetch + render AI output |
| ⏭️ Step 5 | Hook card data logging to Supabase | `cards` table update |
| ⏭️ Step 6 | Add dropdowns for Board & Designer context | Dynamic modal UI |
| ⏭️ Step 7 | Implement remaining AI tasks | Modular API routes |
| ⏭️ Step 8 | Add AI usage logging | `ai_logs` table writes |
| ⏭️ Step 9 | Refine UX & deploy | Polish, permissions, QA |

---

## 🗂️ Folder Structure
Trello-AI-Assistant/
│
├── frontend/
│   ├── manifest.json
│   ├── index.html
│   ├── client.js
│   ├── modal.js
│   └── styles.css
│
├── backend/
│   ├── api/
│   │   ├── enhanceBrief.js
│   │   ├── summarizeCard.js
│   │   └── generateTodos.js
│   └── utils/
│       ├── openai.js
│       └── supabase.js
│
├── docs/
│   ├── PRD.md
│   └── changelog.md
│
├── .env
└── README.md

---

## 🔐 Access & Security

- Only agency staff will install the Power-Up using a private developer key or via shared manifest URL.
- OpenAI key and Supabase keys will be securely stored in `.env` files (local/dev) and serverless environment variables (prod).
- Clients will not see or interact with the Power-Up.

---

## 🧠 Future Ideas (Not in MVP)

- AI training on historical client tone/brand
- Automatic task assignment to specific designers
- Slack/Email daily digest integration
- Assistant for reviewing designer output and matching to brief

---

## 📌 Notes

- GPT-4-turbo will be used for cost-efficiency and high performance.
- All functions will be modular to allow feature toggles per client or role.
- You’ll receive downloadable code for every step and a changelog in `docs/`.

---