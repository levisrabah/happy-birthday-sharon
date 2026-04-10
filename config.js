/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Sharon",
  photo: "./img/best.jpg",
  music: "./music/Happy_birthday_to_you_MIDI(chosic.com).mp3",

  // ── Theme Colors ──────────────────────────────────────────────
  colors: {
    primary: "#c084fc",
    accent: "#e879f9",
    dark: {
      background: "#1a0a2e",
      text: "#f1f5f9",
    },
    light: {
      background: "#faf5ff",
      text: "#1e293b",
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  sections: [
    {
      type: "greeting",
      title: "Heeeyyy...",
      subtitle: "Unajua ni siku yako eeh😂😎!",
    },
    {
      type: "countdown",
      from: 3,
      goText: "🎉",
    },
    {
      type: "announcement",
      text: "It's your birthday!",
    },
    {
      // Warm, personal birthday message drawing on what makes Sharon special
      type: "chatbox",
      message:
        "Happy birthday, Sharon! You're a rare person, making the world feel a little calmer, a little warmer and a whole lot more interesting. Here's to you and an incredible year ahead! 🎂",
      buttonText: "Send",
    },
    {
      // Personal tribute — reveals line by line, building to the heart of it
      type: "ideas",
      lines: [
        "If I had to describe you,",
        "This simple webpage wouldn't be enough .",
        "You're caring. Calm. A great listener.",
        "Your stories? <strong>Absolutely amazing.</strong>",
        "You call yourself a jack of all trades and a master of none —",
        "but honestly?",
        "I see someone who is <strong>the best</strong> at everything she does.",
        "Not because you're perfect.",
        "But because you give everything <em>everything you've got.</em>",
        "And that's a rare thing. <span>✨</span>",
      ],
      bigLetters: "YOU",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      // Numbers 6:24-26 — the priestly blessing over Sharon's new year
      type: "quote",
      text: "The LORD bless thee and keep thee; The LORD make his face shine upon thee and be gracious unto thee; The LORD lift up his countenance upon thee, and give you peace.",
      author: "Numbers 6:24–26",
    },
    {
      type: "balloons",
      count: 30,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday, Sharon!",
      wishText: "May this year bring you all the joy, love, peace and the best that life has to offer. <br> May the Lord grant you all the desires of your heart!",
    },
    {
      type: "fireworks",
      count: 30,
    },
    {
      // A warm, celebratory quote to close out the celebration
      type: "quote",
      text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
      author: "Oprah Winfrey",
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      // Closing in Swahili — personal, warm, and a little playful
      type: "closing",
      text: "... <br> Wishing you an incredible year🥳✨."
      
    },
  ],
};