# BentoGrid Structure Documentation: Product-First Edition

This document reflects the strategic pivot from "Study Projects" to "Shipped Products," promoting your SaaS to a Tier 1 focal point to align with a Senior Product Engineer persona.

## Grid Configuration

- **Layout**: 12-column grid on large screens (`lg:grid-cols-12`)
- **Gap**: 4-unit spacing between boxes (`gap-4`)
- **Interactive States**: Use `active:scale-95` on all boxes for tactile feedback.

---

## Box Breakdown

### 1. USD Latam Jobs (NEW PRIMARY)

**Visual Hierarchy**: Personal Product Anchor

**Dimensions**:

- Desktop: 4 columns × 2 rows (`lg:col-span-4 lg:row-span-2`)
- Mobile: Full width × 1 row

**Order**: `order-1` (First on mobile to match the Hero Link)

**Styling**:

- Border: `border-secondary/60` (Cyan accent to match "Building in Public")
- Hover: Intense Cyan glow (`shadow-[0_0_30px_rgb(0_245_255/0.4)]`)
- Special Detail: Add a **"Live Product"** badge in the top right corner using `absolute` positioning.

**Content Highlights**:

- Metric: 18 active users / Onboarding first paid users.
- Business: Subscription-based revenue model.
- Tech Stack: MERN Stack, Playwright (Scraping), Vercel.

**Importance**: ⭐⭐⭐⭐⭐ (Highest)

- Establishes you as a founder/builder, not just an employee.

---

### 2. Growth & Design Systems (CORPORATE PRIMARY)

**Visual Hierarchy**: Professional Authority

**Dimensions**:

- Desktop: 8 columns × 1 row (`lg:col-span-8`)
- Mobile: Full width × 1 row

**Order**: `order-2`

**Styling**:

- Border: `border-primary/50` (Green accent)
- Hover: Primary green glow (`shadow-[0_0_24px_rgb(0_168_107/0.3)]`)

**Content Highlights**:

- Role: Senior Software Engineer at NovaComp.
- Impact: High-conversion flows for US Solar providers.
- Tech Stack: Next.js, Storybook, LaunchDarkly.

**Importance**: ⭐⭐⭐⭐⭐ (Highest)

- Proves you can handle large-scale, high-stakes US client work.

---

### 3. Engineering Mentorship

**Visual Hierarchy**: Leadership Pillar

**Dimensions**:

- Desktop: 4 columns × 1 row (`lg:col-span-4`)

**Order**: `order-3`

**Styling**:

- Border: `border-gray-800` (Neutral)
- Content: Mention **Triple Ten** explicitly here to validate the "Tutor" part of your Hero.

**Content Highlights**:

- Metric: 20+ developers mentored.
- Skills: Code Reviews, Live Debugging, Career Coaching.

**Importance**: ⭐⭐⭐⭐ (High)

---

### 4. AI Orchestration

**Visual Hierarchy**: Technical Modernity

**Dimensions**:

- Desktop: 4 columns × 1 row (`lg:col-span-4`)

**Order**: `order-4`

**Content Highlights**:

- Focus: Automating development with Claude Code and MCPs.
- Link: How you use AI to scale USD Latam Jobs.

**Importance**: ⭐⭐⭐ (Medium-High)

---

### 5. Open Source & NPM

**Visual Hierarchy**: Architectural Credibility

**Dimensions**:

- Desktop: 4 columns × 1 row (`lg:col-span-4`)

**Order**: `order-5` (Replaces "The Lab")

**Content Highlights**:

- Metric: 30k+ combined stars.
- Focus: Reusable components and internal tools.

**Importance**: ⭐⭐⭐ (Medium)

---

### 6. Industrial Roots & Leadership

**Visual Hierarchy**: Foundational Story

**Dimensions**:

- Desktop: 6 columns × 1 row (`lg:col-span-6`)

**Order**: `order-6`

**Content Highlights**:

- Role: Former Electrical Engineer / Team Lead (6 people).
- Purpose: Explains your "seniority" mindset and leadership origins.

**Importance**: ⭐⭐ (Supporting)

---

### 7. Engineering Insights

**Visual Hierarchy**: Community Authority

**Dimensions**:

- Desktop: 6 columns × 1 row (`lg:col-span-6`)

**Order**: `order-7`

**Content Highlights**:

- Metric: 3,500+ LinkedIn followers.
- Focus: Building in public and sharing technical strategy.

**Importance**: ⭐⭐⭐ (Medium)

---

## Strategic Layout Map

### Desktop (12 columns)

```
Row 1: [USD Latam Jobs (4)] [Growth & Design Systems (8)]
Row 2: [USD Latam Jobs (cont)] [Mentorship (4)] [AI Orchestration (4)]
Row 3: [Open Source (4)] [Industrial Roots (4)] [Engineering Insights (4)]

```

_(Note: Row 3 can be adjusted to 6/6 for Industrial/Insights if you want a cleaner bottom edge.)_

---

## Key Tactical Changes

1. **Kill "The Lab"**: By distributing its contents into **USD Latam Jobs** (The Product) and **Open Source** (The Code), you remove the "student" vibe.
2. **Elevate NovaComp**: Moving it to an 8-column width makes it look like a massive, stable foundation for your career.
3. **Color Sync**: Use **Cyan** for things you _own_ (Jobs, AI) and **Green** for things you _do_ for others (NovaComp, Mentoring). This visual split helps recruiters categorize your talent instantly.

Would you like me to help you refine the specific **bullet points** for the NovaComp box to ensure they sound like "Senior" accomplishments?
