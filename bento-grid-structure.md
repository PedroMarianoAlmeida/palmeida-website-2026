# BentoGrid Structure Documentation

This document explains the layout, sizing, ordering, and importance hierarchy of each box in the BentoGrid component.

## Grid Configuration
- **Layout**: 12-column grid on large screens (`lg:grid-cols-12`)
- **Gap**: 4-unit spacing between boxes (`gap-4`)
- **Min Height**: 700px
- **Max Height**: 900px on large screens

---

## Box Breakdown

### 1. Growth & Design Systems (PRIMARY)
**Visual Hierarchy**: Primary Focus Area

**Dimensions**:
- Desktop: 4 columns × 2 rows (`lg:col-span-4 lg:row-span-2`)
- Mobile: Full width × 1 row

**Order**: `order-1` (First on mobile)

**Styling**:
- Border: `border-primary` (green accent)
- Hover: Strong glow effect (`shadow-[0_0_30px_rgb(0_168_107/0.45)]`)
- Scale: Subtle lift (`hover:scale-[1.025]`)
- Gradient: Primary color gradient overlay on hover

**Content Highlights**:
- Role: MERN Developer at NovaComp
- Focus: US solar provider acquisition flows
- Tech Stack: Next.js, MongoDB, LaunchDarkly, Storybook

**Importance**: ⭐⭐⭐⭐⭐ (Highest)
- Largest box with most prominent styling
- Primary color scheme indicates main professional focus

---

### 2. AI Orchestrator (SECONDARY)
**Visual Hierarchy**: Secondary Focus Area

**Dimensions**:
- Desktop: 4 columns × 1 row (`lg:col-span-4`)
- Mobile: Full width × 1 row

**Order**: `order-2` (Second on mobile)

**Styling**:
- Border: `border-secondary/70` (cyan accent)
- Hover: Moderate glow (`shadow-[0_0_24px_rgb(0_245_255/0.35)]`)
- Scale: Standard lift (`hover:scale-105`)
- Gradient: Secondary color gradient overlay on hover

**Content Highlights**:
- Focus: AI-native tooling integration
- Tech Stack: MCP, Playwright, Claude Code, Automation

**Importance**: ⭐⭐⭐⭐ (High)
- Secondary color scheme indicates important but supporting focus
- Medium-large size allocation

---

### 3. Technical Leadership & Mentorship
**Visual Hierarchy**: Standard

**Dimensions**:
- Desktop: 4 columns × 1 row (`lg:col-span-4`)
- Mobile: Full width × 1 row

**Order**: `order-3` (Third on mobile)

**Styling**:
- Border: `border-gray-700` (neutral)
- Hover: Subtle glow (`shadow-[0_0_20px_rgb(0_168_107/0.25)]`)
- Scale: Standard lift (`hover:scale-105`)
- Gradient: Faint primary gradient on hover

**Content Highlights**:
- Metric: 20+ developers mentored
- Activities: Weekly live sessions, career coaching, live debugging
- External Link: LinkedIn testimonials

**Importance**: ⭐⭐⭐ (Medium-High)
- Neutral border but includes social proof link
- Moderate size allocation

---

### 4. Industrial Roots & Leadership
**Visual Hierarchy**: Standard

**Dimensions**:
- Desktop: 2 columns × 1 row (`lg:col-span-2`)
- Mobile: Full width × 1 row

**Order**: `order-4` (Fourth on mobile)

**Styling**:
- Border: `border-gray-700` (neutral)
- Hover: Subtle yellow-tinted glow (`shadow-[0_0_20px_rgb(255_191_0/0.25)]`)
- Scale: Standard lift (`hover:scale-105`)

**Content Highlights**:
- Background: Former Electrical Engineer
- Experience: Led team of 6 electricians

**Importance**: ⭐⭐ (Medium-Low)
- Smallest width allocation
- Historical context rather than current focus

---

### 5. The Lab
**Visual Hierarchy**: Important

**Dimensions**:
- Desktop: 4 columns × 2 rows (`lg:col-span-4 lg:row-span-2`)
- Mobile: Full width × 1 row

**Order**: `order-5` (Fifth on mobile)

**Styling**:
- Border: `border-gray-700` (neutral)
- Hover: White glow (`shadow-[0_0_20px_rgba(255,255,255,0.15)]`)
- Scale: Standard lift (`hover:scale-105`)

**Content Highlights**:
- Focus: Full-stack product development
- Activities: Micro-SaaS experiments, NPM publishing, internal tooling
- CTA: "Check the Project List →"

**Importance**: ⭐⭐⭐⭐ (High)
- Large size (2 rows) indicates importance despite neutral border
- Product development and entrepreneurial focus

---

### 6. Open Source Contributor
**Visual Hierarchy**: Standard

**Dimensions**:
- Desktop: 2 columns × 2 rows (`lg:col-span-2 lg:row-span-2`)
- Mobile: Full width × 1 row

**Order**: `order-6` (Sixth on mobile)

**Styling**:
- Border: `border-gray-700` (neutral)
- Hover: White glow (`shadow-[0_0_20px_rgba(255,255,255,0.15)]`)
- Scale: Standard lift (`hover:scale-105`)

**Content Highlights**:
- Metric: Repositories with 30k+ combined stars
- External Link: GitHub profile

**Importance**: ⭐⭐⭐ (Medium)
- Narrow but tall (2 rows)
- Social proof through star count and external link

---

### 7. Engineering Insights
**Visual Hierarchy**: Standard

**Dimensions**:
- Desktop: 6 columns × 1 row (`lg:col-span-6`)
- Mobile: Full width × 1 row

**Order**: `order-7` (Last on mobile)

**Styling**:
- Border: `border-gray-700` (neutral)
- Hover: White glow (`shadow-[0_0_18px_rgba(255,255,255,0.15)]`)
- Scale: Subtle lift (`hover:scale-[1.02]`)

**Content Highlights**:
- Metric: 3,500+ developers reached weekly
- Focus: Career strategy, technical writing
- CTA: "Explore by Topic →"

**Importance**: ⭐⭐⭐ (Medium)
- Wide but single row
- Content marketing/community focus

---

## Layout Strategy

### Desktop Grid Layout (12 columns)
```
Row 1: [Growth & DS (4)] [AI Orchestrator (4)] [Tech Leadership (4)]
Row 2: [Growth & DS (4)] [Industrial (2)] [The Lab (4)] [Open Source (2)]
Row 3: [Industrial (cont)] [The Lab (4)] [Open Source (2)]
Row 4: [Engineering Insights (6)]
```

### Mobile Layout (order-based)
1. Growth & Design Systems
2. AI Orchestrator
3. Technical Leadership & Mentorship
4. Industrial Roots
5. The Lab
6. Open Source Contributor
7. Engineering Insights

---

## Importance Hierarchy Summary

**Tier 1 (Primary Focus)**:
- Growth & Design Systems - Largest box, primary color, main professional role

**Tier 2 (Secondary Focus)**:
- AI Orchestrator - Secondary color, modern tech focus
- The Lab - Large size (2 rows), entrepreneurial work

**Tier 3 (Supporting Areas)**:
- Technical Leadership & Mentorship - Community impact
- Open Source Contributor - Developer credibility
- Engineering Insights - Thought leadership

**Tier 4 (Background Context)**:
- Industrial Roots - Historical context, career transition story

---

## Design Patterns

### Color Coding
- **Primary Green Border**: Main professional focus (Growth & Design Systems)
- **Secondary Cyan Border**: Secondary expertise area (AI Orchestrator)
- **Gray Borders**: Supporting content areas
- **Accent Colors**: Used in hover states and internal text highlights

### Size Allocation
- **2-row boxes**: Most important content (Growth & Design Systems, The Lab, Open Source)
- **4-column wide**: Standard important content
- **6-column wide**: Broad but less deep content (Engineering Insights)
- **2-column wide**: Compact supporting info (Industrial Roots, Open Source vertical)

### Interaction Hierarchy
- Stronger hover effects (glow + scale) on more important boxes
- External links indicate social proof opportunities
- CTAs guide users to deeper engagement
