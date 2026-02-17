# COSTMETIKA Notion Workspace Structure
## Strategic Organization for 90-Day Content Calendar Management

---

## Workspace Overview

### Purpose
Central hub for planning, producing, tracking, and analyzing COSTMETIKA's content across all platforms (TikTok, Instagram, Blog, Live Events).

### Key Objectives
1. **Visibility**: Team can see what's planned, in progress, and published
2. **Collaboration**: Seamless handoffs between strategy, creation, and publishing
3. **Accountability**: Clear ownership and deadlines for each piece of content
4. **Performance**: Track metrics and optimize based on data
5. **Scalability**: Templates and workflows that work beyond 90 days

---

## Page Hierarchy

```
📁 COSTMETIKA Content Hub (Home)
│
├── 📊 Dashboard & Analytics
│   ├── 30/60/90 Day Targets
│   ├── Weekly Performance Snapshot
│   ├── Content Status Board
│   └── Team Workload View
│
├── 📅 Content Calendar Master
│   ├── Calendar View (All Platforms)
│   ├── By Platform (TikTok, Instagram, Blog, Live)
│   ├── By Pillar (Education, Community, Inclusive, etc.)
│   └── By Status (Idea → Published)
│
├── 📝 Content Production
│   ├── TikTok/Reels Database
│   ├── Instagram Feed Database
│   ├── Instagram Stories Database
│   ├── Blog Posts Database
│   └── Live Events Database
│
├── 🎨 Creative Assets Library
│   ├── Templates & Guidelines
│   ├── Product Photography
│   ├── Graphics & Designs (Link to Figma)
│   ├── Stock Footage & B-Roll
│   └── Music & Sound Library
│
├── 📚 Strategic Documents
│   ├── Content Strategy Framework
│   ├── Monthly Themes (Radiant Romance, Spring Awakening, Earth Day)
│   ├── Content Pillars Deep-Dive
│   ├── Audience Personas
│   └── Brand Voice & Guidelines
│
├── 🤝 Influencer Partnerships
│   ├── Influencer Database
│   ├── Outreach Tracker
│   ├── Campaign Performance
│   └── Content Submissions
│
├── 📈 Performance Analytics
│   ├── Weekly Review Template
│   ├── Monthly Deep-Dive Template
│   ├── Top Performing Content
│   └── Content Experiments Log
│
├── 🗂️ Templates & Workflows
│   ├── Content Brief Templates
│   ├── Caption Templates
│   ├── Hashtag Banks
│   ├── Script Templates
│   └── SOPs (Standard Operating Procedures)
│
└── 🎯 Campaign Management
    ├── Month 1: Radiant Romance
    ├── Month 2: Spring Awakening
    ├── Month 3: Earth Day Beauty
    └── Live Shopping Events
```

---

## Database Schemas

### 1. Master Content Calendar Database

**Purpose**: Single source of truth for all content across platforms

**Properties**:

| Property | Type | Description | Options/Formula |
|----------|------|-------------|-----------------|
| **Title** | Title | Post headline/topic | - |
| **Status** | Select | Production stage | Idea → Scripted → Filmed → Edited → Scheduled → Published |
| **Platform** | Multi-select | Where to publish | TikTok, IG Feed, IG Reels, IG Stories, Blog, Live Event |
| **Pillar** | Select | Content pillar alignment | Education First, Community & Connection, Inclusive Beauty, Transparent Luxury, Effortless Elegance |
| **Publish Date** | Date | When it goes live | - |
| **Assigned To** | Person | Owner responsible | - |
| **Content Type** | Select | Format category | Tutorial, Explainer, Transformation, BTS, Product Spotlight, UGC Feature, Q&A, Myth-Busting, Routine |
| **Monthly Theme** | Select | Campaign alignment | Radiant Romance, Spring Awakening, Earth Day Beauty |
| **Priority** | Select | Urgency level | High, Medium, Low |
| **Production Deadline** | Date | When creation must be done | - |
| **Hook/Headline** | Text | Opening line or title | - |
| **CTA** | Text | Call-to-action | - |
| **Products Featured** | Multi-select | Related products | [Product names from catalog] |
| **Related Campaign** | Relation | Links to campaign | Links to Campaign Management DB |
| **Assets Needed** | Multi-select | Production requirements | Video, Photos, Graphics, Props, Models |
| **Asset Status** | Select | Asset readiness | Not Started, In Progress, Ready |
| **Link to Figma** | URL | Design file link | - |
| **Link to Draft** | URL | Google Doc or file | - |
| **Performance Metrics** | Text | Post-publish data | Views, Likes, Comments, Shares, CTR |
| **Engagement Rate** | Number | Calculated metric | % |
| **Conversions** | Number | Orders attributed | - |
| **Notes** | Text | Additional context | - |
| **Days Until Due** | Formula | Urgency indicator | `dateBetween(prop("Production Deadline"), now(), "days")` |

**Views**:
1. **Calendar View** - See all content by publish date
2. **Kanban by Status** - Drag-and-drop production workflow
3. **Table by Platform** - Filter by TikTok, Instagram, Blog
4. **By Pillar** - Ensure content pillar distribution
5. **This Week** - Filter: Publish Date = This Week
6. **Overdue** - Filter: Status ≠ Published AND Production Deadline < Today
7. **My Assignments** - Filter: Assigned To = Current User

---

### 2. TikTok/Reels Production Database

**Purpose**: Detailed brief and tracking for short-form video

**Properties**:

| Property | Type | Description |
|----------|------|-------------|
| **Title** | Title | Video topic |
| **Status** | Select | Idea → Scripted → Filmed → Edited → Scheduled → Published |
| **Publish Date** | Date | Go-live date |
| **Assigned To** | Person | Creator responsible |
| **Pillar** | Select | Content pillar |
| **Hook (0-3s)** | Text | Opening line |
| **Script** | Text | Full video script with timestamps |
| **Visual Requirements** | Text | Shot list, props, products |
| **Duration** | Number | Target length in seconds |
| **Hashtags** | Multi-select | Tags to use |
| **Link in Bio** | Text | CTA destination |
| **Products Featured** | Multi-select | Products shown |
| **Filming Date** | Date | Shoot scheduled |
| **Editing Deadline** | Date | Edit by date |
| **Raw Footage Location** | URL | File storage link |
| **Final Video Location** | URL | Edited file link |
| **Posted URL** | URL | Live TikTok/Reels link |
| **Views** | Number | Performance |
| **Likes** | Number | Performance |
| **Comments** | Number | Performance |
| **Shares** | Number | Performance |
| **Engagement Rate** | Formula | `(Likes + Comments + Shares) / Views * 100` |
| **Thumbnail Preview** | File | Video preview image |
| **Related Master Calendar** | Relation | Links to Master Calendar DB |

**Views**:
1. **This Week's Shoot** - Filter: Filming Date = This Week
2. **In Editing** - Filter: Status = Edited
3. **Scheduled** - Filter: Status = Scheduled, Sort: Publish Date
4. **Top Performers** - Sort: Engagement Rate DESC
5. **Gallery View** - Thumbnail previews

---

### 3. Blog Posts Database

**Purpose**: Long-form content planning and SEO tracking

**Properties**:

| Property | Type | Description |
|----------|------|-------------|
| **Title** | Title | Article headline |
| **Status** | Select | Outline → Draft → Edit → SEO Optimize → Publish → Promote |
| **Publish Date** | Date | Go-live date |
| **Writer** | Person | Author |
| **Editor** | Person | Reviewer |
| **Pillar** | Select | Content pillar |
| **Primary Keyword** | Text | SEO target |
| **Secondary Keywords** | Text | Additional SEO terms |
| **Target Word Count** | Number | Length goal |
| **Actual Word Count** | Number | Final length |
| **Outline** | Text | Section breakdown |
| **Draft Link** | URL | Google Doc link |
| **Featured Image** | File | Hero image |
| **Internal Links** | Text | Links to other posts/products |
| **Content Upgrade** | Text | Lead magnet (checklist, guide) |
| **Meta Description** | Text | SEO snippet |
| **Published URL** | URL | Live blog link |
| **Organic Traffic** | Number | Monthly visits |
| **Conversions** | Number | Email signups or sales |
| **Related Master Calendar** | Relation | Links to Master Calendar DB |

**Views**:
1. **Editorial Calendar** - Calendar view by Publish Date
2. **In Production** - Filter: Status = Draft OR Edit
3. **Published & Performing** - Filter: Status = Publish, Sort: Organic Traffic DESC
4. **SEO Focus** - Group by: Primary Keyword
5. **Content Upgrade Tracker** - Show: Content Upgrade field

---

### 4. Live Shopping Events Database

**Purpose**: Plan and execute weekly Thursday night events

**Properties**:

| Property | Type | Description |
|----------|------|-------------|
| **Event Name** | Title | Theme (e.g., "Valentine's Glow Guide") |
| **Date & Time** | Date | Thursday 7pm EST |
| **Status** | Select | Planning → Promoted → Live → Recap Posted |
| **Host** | Person | On-camera talent |
| **Theme** | Select | Monthly theme alignment |
| **Products Featured** | Multi-select | Items to showcase |
| **Exclusive Offers** | Text | Live-only deals |
| **Target Revenue** | Number | Sales goal |
| **Event Script** | Text | Outline/talking points |
| **Promotion Schedule** | Text | Pre-event Stories/posts |
| **Promo Assets** | File | Graphics for promotion |
| **Tech Setup Checklist** | Checkbox | Camera, lighting, internet tested |
| **Actual Viewers** | Number | Peak concurrent |
| **Total Views** | Number | Full reach |
| **Chat Engagement** | Number | Comments during live |
| **Orders During Live** | Number | Sales attributed |
| **Revenue Generated** | Number | Actual sales |
| **Recap Post Link** | URL | Post-event TikTok/Reel |
| **Recording Link** | URL | Saved live video |
| **Lessons Learned** | Text | Post-event notes |
| **Related Master Calendar** | Relation | Links to Master Calendar DB |

**Views**:
1. **Upcoming Events** - Filter: Date ≥ Today, Sort: Date ASC
2. **Past Performance** - Filter: Status = Recap Posted, Sort: Revenue DESC
3. **This Month** - Filter: Date = This Month
4. **Timeline View** - Visual event schedule

---

### 5. Influencer Partnership Database

**Purpose**: Manage nano/micro/retainer influencer relationships

**Properties**:

| Property | Type | Description |
|----------|------|-------------|
| **Influencer Name** | Title | Creator name |
| **Handle** | Text | @username |
| **Platform** | Multi-select | TikTok, Instagram |
| **Follower Count** | Number | Audience size |
| **Engagement Rate** | Number | % engagement |
| **Tier** | Select | Nano (1-10K), Micro (10-100K), Retainer |
| **Status** | Select | Prospect → Outreached → Interested → Shipped → Posted → Completed |
| **Campaign** | Select | Month 1, Month 2, Month 3, Ongoing |
| **Outreach Date** | Date | First contact |
| **Response Date** | Date | When they replied |
| **Shipping Date** | Date | Product sent |
| **Posting Deadline** | Date | Content due |
| **Deliverables** | Text | 1 TikTok, 2 Stories, etc. |
| **Compensation** | Select | Gifted, $100-500, $500-2K, Retainer |
| **Discount Code** | Text | Unique tracking code |
| **Posted Content Links** | Text | URLs to their posts |
| **Content Performance** | Text | Views, engagement |
| **Conversions** | Number | Orders from code |
| **ROI** | Formula | `prop("Conversions") * 50 / prop("Compensation")` |
| **Relationship Notes** | Text | Preferences, feedback |
| **Next Steps** | Text | Follow-up actions |

**Views**:
1. **Active Partnerships** - Filter: Status = Shipped OR Posted
2. **Awaiting Outreach** - Filter: Status = Prospect
3. **By Campaign** - Group by: Campaign
4. **Top Performers** - Sort: ROI DESC
5. **Retainer Partners** - Filter: Tier = Retainer

---

### 6. Campaign Management Database

**Purpose**: Track monthly themes and goals

**Properties**:

| Property | Type | Description |
|----------|------|-------------|
| **Campaign Name** | Title | Month 1: Radiant Romance |
| **Start Date** | Date | Feb 10 |
| **End Date** | Date | Mar 9 |
| **Theme** | Text | Strategic focus |
| **Messaging** | Text | Key messaging pillars |
| **Product Focus** | Multi-select | Featured products |
| **Target Followers** | Number | Growth goal |
| **Target Revenue** | Number | Sales goal |
| **Content Count** | Rollup | Sum of related content |
| **Live Events** | Relation | Links to Live Events DB |
| **Influencer Partnerships** | Relation | Links to Influencer DB |
| **Actual Followers** | Number | End result |
| **Actual Revenue** | Number | End result |
| **Top Performing Content** | Relation | Best posts |
| **Lessons Learned** | Text | Retrospective notes |

**Views**:
1. **Campaign Timeline** - Timeline view
2. **Active Campaign** - Filter: End Date ≥ Today
3. **Performance Summary** - Show: Targets vs. Actuals

---

### 7. Performance Analytics Dashboard (Not a Database - Dashboard Page)

**Purpose**: Weekly and monthly performance tracking

**Components**:
- **Linked Database Views** showing:
  - This Week's Published Content (from Master Calendar)
  - Top 5 Performing Posts This Month (sorted by Engagement Rate)
  - Content Status Kanban (showing production pipeline)
  - Upcoming Deadlines (Production Deadline in next 7 days)

- **Embedded Formulas/Metrics**:
  - Total Followers Growth (manual update)
  - Engagement Rate Average (calculated from database)
  - Orders from Social (manual update from Shopify)
  - UGC Submissions (count from Influencer DB)

- **Charts** (using Notion's native charts or embedded from Sheets/Looker):
  - Follower growth trend line
  - Content volume by pillar (pie chart)
  - Engagement rate by platform (bar chart)
  - Revenue from Live Events (line chart)

---

## Workflow & Permissions

### Team Roles & Access

| Role | Access Level | Responsibilities |
|------|-------------|------------------|
| **Content Strategist** | Full Edit | Plans calendar, assigns content, tracks pillars |
| **Content Creator** | Edit (assigned items only) | Creates videos, writes scripts, films content |
| **Graphic Designer** | Edit (design assets) | Creates graphics, templates, thumbnails |
| **Social Media Manager** | Full Edit | Schedules posts, manages community, tracks metrics |
| **Editor/Copywriter** | Edit (blog + copy) | Writes blog posts, edits captions |
| **Analytics Lead** | Full Edit | Updates performance data, generates reports |
| **Leadership/Stakeholders** | View Only | Reviews dashboards and reports |

### Workflow Automation (Using Notion's Built-in Automations)

1. **Status Change Notifications**:
   - When Status → "Needs Review", notify Editor
   - When Status → "Scheduled", notify Social Media Manager
   - When Production Deadline < 3 days, notify Assigned To

2. **Auto-Create Checklists**:
   - When new Live Event created, add "Tech Setup Checklist" template
   - When new Blog Post created, add "SEO Checklist" template

3. **Deadline Reminders**:
   - 7 days before Production Deadline: Slack/email reminder
   - 3 days before Production Deadline: Urgent reminder
   - Day of Publish Date: "Going live today" notification

---

## Integration Strategy

### Notion ↔ Figma
- **Link Design Files**: URL property in Content Calendar links to Figma design files
- **Export from Figma to Notion**: Use Figma MCP to extract design specs into Notion pages
- **Asset Handoff**: Designers link final exports in "Assets Needed" property

### Notion ↔ Social Media Tools
- **Scheduling**: Export published content to Buffer/Later/Planoly CSV
- **Analytics**: Import performance data from platform analytics to update databases

### Notion ↔ Shopify
- **Product Catalog Sync**: Mirror product names/URLs from Shopify into Multi-select options
- **Revenue Tracking**: Manually update or use Zapier to pull Shopify sales data

### Notion ↔ Google Drive
- **Drafts & Scripts**: Link Google Docs in "Draft Link" property
- **Asset Storage**: Link Google Drive folders for video files (too large for Notion)

---

## Page Templates

### 1. Weekly Content Brief Template
```
# Week [Number]: [Theme Name]
**Dates**: [Start Date] - [End Date]
**Monthly Theme**: [Radiant Romance / Spring Awakening / Earth Day Beauty]

## Goals This Week
- [ ] [Number] TikToks published
- [ ] [Number] Instagram posts published
- [ ] [Number] blog posts published
- [ ] 1 Live Shopping Event (Thursday 7pm EST)

## Content Breakdown by Pillar
- **Education First** (35%): [List content]
- **Community & Connection** (25%): [List content]
- **Inclusive Beauty** (20%): [List content]
- **Transparent Luxury** (10%): [List content]
- **Effortless Elegance** (10%): [List content]

## Production Deadlines
- Monday: [Tasks]
- Tuesday: [Tasks]
- Wednesday: [Tasks]
- Thursday: [Tasks - LIVE EVENT PREP]
- Friday: [Tasks]

## Linked Content
[Embedded view of Master Calendar filtered to This Week]
```

---

### 2. Post Production Checklist Template
```
## Pre-Production
- [ ] Script approved
- [ ] Products sourced
- [ ] Props/backgrounds ready
- [ ] Talent/models confirmed
- [ ] Location secured

## Production
- [ ] Filmed/photographed
- [ ] Raw files uploaded to [Drive folder]
- [ ] Backup files saved

## Post-Production
- [ ] Edited
- [ ] Graphics/overlays added
- [ ] Music/sound added
- [ ] Captions/subtitles added
- [ ] Reviewed by [Editor name]
- [ ] Revisions completed

## Pre-Publish
- [ ] Caption written
- [ ] Hashtags selected
- [ ] CTA finalized
- [ ] Link in bio updated
- [ ] Scheduled in [tool name]

## Post-Publish
- [ ] First-hour engagement (respond to comments)
- [ ] Track performance at 24h
- [ ] Update database with metrics
```

---

### 3. Monthly Retrospective Template
```
# [Month Name] Campaign Retrospective
**Campaign**: [Campaign Name]
**Dates**: [Start] - [End]

## Goals vs. Actuals
| Metric | Target | Actual | % of Goal |
|--------|--------|--------|-----------|
| Follower Growth | | | |
| Engagement Rate | | | |
| Revenue | | | |
| Orders | | | |
| UGC Submissions | | | |

## Top Performing Content
1. [Post title] - [Platform] - [Engagement Rate]
2. [Post title] - [Platform] - [Engagement Rate]
3. [Post title] - [Platform] - [Engagement Rate]

## What Worked
- [Insight 1]
- [Insight 2]
- [Insight 3]

## What Didn't Work
- [Challenge 1 + why]
- [Challenge 2 + why]
- [Challenge 3 + why]

## Adjustments for Next Month
- [ ] [Action item 1]
- [ ] [Action item 2]
- [ ] [Action item 3]

## Audience Feedback
- [Notable comments/DMs]
- [Common questions]
- [Requests for future content]
```

---

## Implementation Roadmap

### Phase 1: Setup (Week 1)
1. Create page hierarchy and databases
2. Import existing content from markdown files
3. Set up views and filters
4. Define property options (pillars, statuses, etc.)
5. Add team members and set permissions

### Phase 2: Migration (Week 1-2)
1. Transfer Week 1 content briefs into Master Calendar
2. Create detailed entries in platform-specific databases
3. Link related content and campaigns
4. Upload templates and guidelines

### Phase 3: Training (Week 2)
1. Team walkthrough of workspace structure
2. Assign ownership and responsibilities
3. Practice workflow (Idea → Published)
4. Test automations and notifications

### Phase 4: Iteration (Ongoing)
1. Gather team feedback weekly
2. Adjust views and properties as needed
3. Refine workflows based on usage
4. Scale templates for future quarters

---

## Success Metrics for Notion Workspace

### Adoption Metrics
- [ ] 100% of content planned in Notion by Week 2
- [ ] All team members logging updates daily
- [ ] Zero missed deadlines due to lack of visibility

### Efficiency Metrics
- [ ] Reduce content planning time by 30%
- [ ] Decrease production handoff errors by 50%
- [ ] Increase on-time publishing rate to 95%

### Collaboration Metrics
- [ ] All stakeholders can view status without meetings
- [ ] Real-time updates eliminate "Where is this?" questions
- [ ] Retrospectives completed within 3 days of campaign end

---

## Visual Design Principles (For Figma)

### Notion Page Design
- **Color Coding**: Assign colors to pillars for at-a-glance recognition
  - Education First: Blue
  - Community & Connection: Pink
  - Inclusive Beauty: Purple
  - Transparent Luxury: Green
  - Effortless Elegance: Gold

- **Icons**: Use emojis or custom icons for page categories
  - 📊 Analytics
  - 📅 Calendar
  - 🎨 Creative
  - 📚 Strategy
  - 🤝 Partnerships

- **Cover Images**: Create branded cover images in Figma for each main page
  - Use COSTMETIKA brand colors and fonts
  - Feature product photography or campaign themes
  - Export at 1500 x 600 px

### Database Icons & Covers
- Consistent icon style (line icons or filled)
- Cover images for campaign pages (monthly themes)
- Thumbnail previews for video content

---

**Document Version**: 1.0
**Last Updated**: February 8, 2026
**Owner**: COSTMETIKA Content Team
**Next Review**: After Week 4 of implementation

---

**Related Documents**:
- COSTMETIKA-CONTENT-CALENDAR-Q1-2026.md
- COSTMETIKA-BLOG-EDITORIAL-CALENDAR.md
- COSTMETIKA-CONTENT-TEMPLATES.md
- COSTMETIKA-CONTENT-STRATEGY.md
