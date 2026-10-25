# Athlo

Private client coaching tool, built from the coach's Google Sheet.

## Pages
- **Welcome** (`index.html`) – client profile, today's session, weight trend, weekly schedule, backup/restore
- **Training Program** (`training-program.html`) – the 4-day split (Pull + Deadlifts, Push, Lower body, Upper body) with sets, reps, notes and demo videos; tick off exercises and log the weight used per set
- **Check-in** (`check-in.html`) – 17 weeks of daily weigh-ins with automatic weekly averages, a trend chart and CSV export
- **Nutrition** (`nutrition.html`) – 5-meal daily plan, editable

## Data
- Program, profile and the default meal plan live in `js/data.js`. Edit that file to update them.
- Everything entered in the tool (weigh-ins, ticks, loads, meal edits) is saved in the browser it was entered in. Use **Download backup** / **Restore backup** on the Home page to move it between devices.

## Running it
Plain HTML/CSS/JS, no build step. Open `index.html` in a browser, or serve the folder with any static host.
Pages are marked `noindex` so search engines skip them.
