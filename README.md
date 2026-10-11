# 🗳️ Meherunnesa Antara — Election Campaign Website
### Candidate for Vice President-1 (Strategy) | Volunteer Development Forum (VDF)
**Divisional Executive Committee Election 2026 • Narayanganj District • October 13, 2026**  
**Campaign Hashtag:** `#Vote_For_Antara`  
**Live Site / Domain:** `https://vote-antara.vercel.app`

---

## 🌟 Overview & Campaign Philosophy
This is the official election campaign web platform for **Meherunnesa Antara**, candidate for **Vice President-1 (Strategy)** in the Volunteer Development Forum (VDF) Divisional Executive Committee Election 2026.

Antara is an **Anthropology researcher** at Shaikh Burhanuddin Post Graduate College (2022–2026), an active volunteer at **BRAC**, former task force member at **SERAC Bangladesh**, and volunteer with **The Hunger Project Bangladesh (Project Tarunno)**. As a dedicated grassroots organizer and committed regular **blood donor** from Narayanganj, her campaign fuses qualitative ethnographic research rigor with energetic youth mobilization to build a stronger, evidence-backed VDF.

---

## 🎨 Visual Design & Retro-Modern Aesthetic
The website is crafted with a bold **colorful retro design aesthetic** with modern youth appeal:
- **VDF Brand Colors**: 
  - **VDF Blue** (`#1E4D8B` / `#12335E`) — Official Forum identity & credibility
  - **VDF Orange** (`#F26522` / `#FF8547`) — High energy, community warmth, action
  - **Retro Purple Accents** (`#7C3AED` / `#581C87`) — Youth strategy, creativity & innovation
  - **Sunshine Yellow** (`#FFD13B`) & **Mint** (`#10B981`) — Retro pop badges & stickers
- **Neo-Brutalist & Retro Touches**:
  - Chunky `3px` dark ink borders (`#121826`)
  - Hard retro drop shadows (`box-shadow: 6px 6px 0px #121826`)
  - Floating tilt stickers (`#Vote_For_Antara`, `Regular Blood Donor`, `Narayanganj`)
  - Retro animated marquee ticker ribbons
  - Button-press micro-interactions
  - Halftone dot texture overlays
- **Typography (Google Fonts)**:
  - **Headings**: `Outfit` (Ultra-bold 800/900 display font)
  - **Accents & Badges**: `Space Grotesk` (Geometric retro-modern monospace)
  - **Body Copy**: `Plus Jakarta Sans` (Crisp, highly legible contemporary sans)

---

## 🚀 Key Features & Interactive Elements

1. **Hero Section**:
   - High-definition framed portrait of Meherunnesa Antara with retro stickers
   - Campaign headline and subheadline: *"Building a Stronger VDF Together"*
   - Quick-action buttons: *Commit to Vote*, *Explore Platform*, and *Download Campaign Poster*
   - Live micro-stats ticker (Years volunteering, Community interviews, Pledged supporters)

2. **Live Election Countdown Clock**:
   - Dynamic real-time countdown to **October 13, 2026, 08:00 AM BST**
   - Animated retro cards tracking Days, Hours, Minutes, and Seconds

3. **About Meherunnesa Antara**:
   - Academic anthropology background & qualitative field research in Narayanganj
   - Core personal values: *Fairness, Teamwork, Patience, Accountability*
   - Dedicated **Life-Saving Blood Donor** spotlight

4. **Strategic Platform (6 Pillars)**:
   - 01: Youth-Led Strategy & Digital Ideation
   - 02: Grassroots Field Experience (BRAC, SERAC, Hunger Project)
   - 03: Community-First Inclusivity (Marginalized groups & transport workers)
   - 04: Proven Track Record of Execution & Mobilization
   - 05: Strategic Vision & Mobile Journalism (MoJo)
   - 06: Blood Donor Network & Humanitarian Mutual Aid

5. **Experience & Leadership Timeline**:
   - Visual chronological timeline of her service journey
   - Badges, milestones, and organization tags

6. **VDF Strategic Connection & Roadmap**:
   - Overview of VDF (inspired by the volunteer development philosophy of VSO Bangladesh)
   - Four strategic pillars for VP-1: *Data-Driven Impact*, *Volunteer Upskilling*, *Strategic Partnerships*, and *Inclusive Decentralization*

7. **Interactive Photo Gallery with Lightbox**:
   - 12 real campaign, fieldwork, and VDF workshop photographs
   - Category filtering: *All*, *Grassroots Fieldwork*, *VDF & VSO Programs*, *Health & Aid*, *Youth & Culture*
   - Fullscreen modal lightbox with Next/Previous navigation and keyboard controls (`Esc`, `ArrowLeft`, `ArrowRight`)

8. **Testimonials & Endorsements**:
   - **Md. Nur Islam Nur** (BRAC Supervisor)
   - **Prof. Md. Rahmat Ullah** (Academic Advisor & Faculty, Dept. of Anthropology)

9. **Interactive "Commit to Vote" & Supporter Card Generator**:
   - Voters input their Name and select their Upazila/Area
   - Instantly generates an official **Digital Voter Supporter Badge**
   - **HTML5 Canvas PNG Download**: 1-click download of a high-resolution personalized badge
   - Triggers festive **Canvas Confetti** celebration and sound chimes

10. **Action Center / Volunteer Sign-up**:
    - Volunteer application form with role selection
    - 1-click social share buttons for WhatsApp, Facebook, X (Twitter), and Copy Link
    - Direct contact info (Phone, Email, Office address)

11. **Audio Micro-Interactions**:
    - Optional 8-bit retro sound synthesizers built with pure HTML5 Web Audio API
    - Toggle button in navbar to mute or unmute

---

## 📁 Project Structure

```
Voteantora/
├── index.html                 # Main single-page application
├── vercel.json                # Vercel configuration (caching & security headers)
├── README.md                  # Documentation and setup guide
└── assets/
    ├── css/
    │   └── style.css          # Retro-modern design system & responsive styling
    ├── js/
    │   └── main.js            # Countdown, Canvas card generator, Lightbox, Confetti, Audio
    └── images/
        ├── antara-portrait.jpg                # Candidate portrait
        ├── antara-hero.jpg                    # Hero visual crop
        ├── campaign-poster.png                # Official election poster
        ├── vdf-logo.jpg                       # Official VDF logo
        ├── og-preview.jpg                     # Open Graph 1200x630 social share card
        ├── favicon.png                        # Browser favicon
        ├── fieldwork-narayanganj.jpg          # Field research at transport counter
        ├── fieldwork-transport-workers.jpg    # Volunteer survey with drivers
        ├── vdf-constitution-workshop.jpg      # VDF constitution validation workshop
        ├── strategic-planning-workshop.jpg    # Strategy meeting with team
        ├── vdf-vso-cultural-gathering.jpg     # VDF & VSO community cultural celebration
        ├── vdf-district-session.jpg           # VDF district knowledge session
        ├── community-health-outreach.jpg      # Active health item distribution
        ├── community-health-kit-handover.jpg  # Equipment handover to youth
        ├── community-dialogue-meeting.jpg     # Dialogue with local elders
        ├── youth-volunteer-gathering.jpg      # Large youth rally selfie
        ├── save-the-children-symposium.jpg    # Save the Children symposium
        └── short-film-doc-fest.jpg            # Bangladesh Film Festival MoJo delegation
```

---

## 🛠️ Local Development

To run the site locally without any installation or build steps:

```bash
# Clone the repository
git clone https://github.com/munim-430/Voteantora.git
cd Voteantora

# Start a local static HTTP server (Python 3)
python3 -m http.server 8080

# Open in browser
xdg-open http://localhost:8080
```

---

## ☁️ Deployment to Vercel

### Option 1: Automatic Deployment via GitHub (Recommended)
1. Push this repository to GitHub: `https://github.com/munim-430/Voteantora`.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import the `munim-430/Voteantora` repository.
4. Framework Preset: **Other** (Static Site).
5. Root Directory: `./` (Leave as default).
6. Click **Deploy**. Your site will be live instantly!

### Option 2: Manual Deployment via Vercel CLI
```bash
npm i -g vercel
cd Voteantora
vercel --prod
```

The included `vercel.json` automatically configures clean URLs, asset caching (`Cache-Control: public, max-age=31536000`), and standard security headers.

---

## 📞 Campaign Contact Information
- **Candidate**: Meherunnesa Antara
- **Position**: Vice President-1 (Strategy)
- **Organization**: Volunteer Development Forum (VDF), Narayanganj District
- **Email**: `meherunantara71@gmail.com`
- **Phone**: `01407717472`
- **Address**: Borabo, Tarabo Pourashava, Rupganj, Narayanganj, Bangladesh
- **Hashtag**: `#Vote_For_Antara`