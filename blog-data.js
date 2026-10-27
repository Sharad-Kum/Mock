/* ===================================================================
   blog-data.js : the one file you edit to update the NEWSLETTER parts
   of the blog (index segments + series.html). Essay cards stay as
   plain HTML in blogs.html.
   - Add an edition: add one line to the right section's editions.
   - Add a series/bridge: add a section. Add a newsletter: add an entry.
   - url "" = shows as plain text (no link yet).
   =================================================================== */
const NEWSLETTERS = [
  {
    id: "connecting-the-dots",
    title: "Connecting the Dots",
    desc: "Where I interpret: how strategy, functions and technology connect, one short edition at a time.",
    linkedin: "https://www.linkedin.com/newsletters/connecting-the-dots-7500071281342660608",
    sections: [
      { id: "s1", title: "Series 1: GTM, Sales & Marketing", status: "Complete",
        note: "Seven editions on how GTM, Sales and Marketing work as one growth system while each keeps its own questions.",
        editions: [
          {no: "Edition 1", title: "The Baton", date: "", summary: "Three distinct disciplines passing work along one growth system.", url: ""},
          {no: "Edition 2", title: "Integration is not an interchange. Absence is not a fracture.", date: "9 Sep 2026", summary: "A leader can hold more than one hat, but each hat stays distinct.", url: ""},
          {no: "Edition 3", title: "8 Questions, Not 6", date: "16 Sep 2026", summary: "A checklist gets better by getting harder to dodge, not by getting longer.", url: ""},
          {no: "Edition 4", title: "Flow Beats Title", date: "", summary: "GTM defines the terrain, Marketing creates demand, Sales converts it.", url: ""},
          {no: "Edition 5", title: "The Sun Doesn't Orbit", date: "", summary: "GTM is the Sun; every other function turns on its own axis around it.", url: ""},
          {no: "Edition 6", title: "AI Sits Inside the H", date: "", summary: "AI belongs inside the How, not in place of it.", url: ""},
          {no: "Edition 7", title: "Seats Still Exist", date: "", summary: "A title can merge or split. Questions still need an owner.", url: ""}
        ] },
      { id: "bridge", title: "Bridge", status: "Published",
        note: "Closes the GTM series and points to the AI series.",
        editions: [
          {no: "Edition 8", title: "What Comes Next?", date: "", summary: "Who owns the answer when AI makes answers instant.", url: ""}
        ] },
      { id: "s2", title: "Series 2: AI Platforms", status: "Starts Wed 28 Oct 2026", newestFirst: true,
        note: "What has actually changed, what it changes, who supervises these systems, and how roles are shifting.",
        editions: [
          {no: "Edition 9", title: "AI Platforms: Who Leads", date: "Wed 28 Oct 2026", summary: "The scoreboards disagree on who leads.", url: ""}
        ] }
    ]
  },
  {
    id: "signal-sheet",
    title: "Signal Sheet",
    desc: "A verified, one-page Tech & IT roundup. Awareness, not commentary.",
    linkedin: "https://www.linkedin.com/newsletters/signal-sheet-7508848907548815360",
    sections: [
      { id: "weekly", title: "Weekly editions", status: "Every Saturday IST", newestFirst: true,
        note: "Covers events up to 23:59 GMT every Friday.",
        editions: [
          {no: "Edition 1", title: "Announcement", date: "", summary: "", url: ""},
          {no: "Edition 2", title: "The permission gap", date: "3 Oct 2026", summary: "AI agents moved from answers to actions.", url: "https://www.linkedin.com/pulse/permission-gap-sharad-kumar-6mnjc"},
          {no: "Edition 3", title: "Who holds the brake", date: "10 Oct 2026", summary: "Safety insiders are leaving with public warnings.", url: ""},
          {no: "Edition 4", title: "Disclosures are not optional", date: "17 Oct 2026", summary: "Enforcers are moving ahead of the rules.", url: "https://www.linkedin.com/pulse/disclosures-optional-sharad-kumar-ny02c"},
          {no: "Edition 5", title: "The limits are beyond AI Chips", date: "24 Oct 2026", summary: "AI chip demand still outruns supply.", url: ""}
        ] }
    ]
  }
];
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const plural = (n, w) => n + " " + w + (n === 1 ? "" : "s");
