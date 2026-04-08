import char1 from "./assets/char1.png";
import char2 from "./assets/char2.png";
import char3 from "./assets/char3.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import mainf from "./assets/mainf.jpeg";
import mainm from "./assets/mainm.jpeg";
import mainm2 from "./assets/mainm2.jpeg";

export const PROFILE = {
  displayName: "JAGR1792",
  githubUsername: "JAGR1792",
  githubUrl: "https://github.com/JAGR1792",
  nameTag: "Jagr1792's",
  aboutHandle: "@JAGR1792",
};

export const ABOUT_CHAR_IMAGES = [char1, char2, char3];
export const ABOUT_MAIN_IMAGES = [mainm, mainm2, mainf];

export const SIDE_PROJECT_ITEMS = [
  {
    id: "pokedex",
    title: "POKEDEX",
    stack: "Python / API",
    summary: "Proyecto de exploracion de datos Pokemon con enfoque backend.",
    href: "https://github.com/SKing25/Pokedex",
  },
  {
    id: "didasko",
    title: "DIDASKO",
    stack: "Python / Backend",
    summary: "Proyecto orientado a logica, estructura y crecimiento modular.",
    href: "https://github.com/JAGR1792/Didasko",
  },
  {
    id: "micelio",
    title: "MICELIO",
    stack: "C++ / Systems",
    summary: "Proyecto para practicar arquitectura, rendimiento y control fino.",
    href: "https://github.com/JAGR1792/Micelio",
  },
  {
    id: "credits",
    title: "SPECIAL THANKS",
    stack: "Original inspiration",
    summary: "Gracias a blairxu13 por el repo base que sirvio como punto de partida.",
    href: "https://github.com/blairxu13/persona3-website/projects",
  },
];

const SIDE_PROJECT_LINKS = SIDE_PROJECT_ITEMS.map((item) => item.href.replace("https://", ""));
const SIDE_PROJECT_TITLES = SIDE_PROJECT_ITEMS.map((item) => item.title);

export const SOCIAL_ITEMS = [
  {
    id: "github",
    label: "GITHUB",
    handle: PROFILE.aboutHandle,
    href: PROFILE.githubUrl,
    icon: "💻",
    barIcon: icon1,
    bars: SIDE_PROJECT_ITEMS.length - 1,
    newBars: [0],
    counts: SIDE_PROJECT_TITLES.slice(0, 3),
    links: SIDE_PROJECT_LINKS.slice(0, 3),
    stats: [
      { tag: "USR", value: PROFILE.githubUsername, color: "#9147ff" },
      { tag: "TOP", value: "PROJECTS", color: "#bf94ff" },
    ],
  },
  {
    id: "playlist",
    label: "PLAYLIST",
    handle: "youtube music",
    href: "https://music.youtube.com/playlist?list=PLjt39ieLaAuax60RJf8imPYY58AZXVCL4",
    icon: "🎵",
    barIcon: icon2,
    bars: 2,
    newBars: [1],
    counts: ["LOFI", "FOCUS"],
    links: ["music.youtube.com/playlist?list=PLjt39ieLaAuax60RJf8imPYY58AZXVCL4", "music.youtube.com"],
    stats: [
      { tag: "MOOD", value: "LO-FI", color: "#e1306c" },
      { tag: "FLOW", value: "DEEP", color: "#f77737" },
    ],
  },
  {
    id: "codewars",
    label: "CODEWARS",
    handle: "competitive mode",
    href: "https://www.codewars.com",
    icon: "⚔️",
    barIcon: icon3,
    bars: 3,
    newBars: [2],
    counts: ["KATAS", "RANK", "BATTLES"],
    links: ["codewars.com", "codewars.com/dashboard", "codewars.com/kata/latest"],
    stats: [
      { tag: "MODE", value: "RANKED", color: "#00f2ea" },
      { tag: "TIME", value: "3AM", color: "#ff0050" },
    ],
  },
];

export const ABOUT_ITEMS = [
  {
    id: "about",
    label: "ABOUT ME",
    handle: PROFILE.aboutHandle,
    href: PROFILE.githubUrl,
    icon: "👤",
    barIcon: icon1,
    bars: 1,
    newBars: [0],
    counts: ["24"],
    links: [PROFILE.githubUrl.replace("https://", "")],
    stats: [
      { tag: "ROLE", value: "BACKEND", color: "#4a8fff" },
      { tag: "MODE", value: "LEARN", color: "#bf94ff" },
    ],
  },
  {
    id: "fun",
    label: "FUN FACT ABOUT ME",
    handle: PROFILE.aboutHandle,
    href: PROFILE.githubUrl,
    icon: "☕",
    barIcon: icon2,
    bars: 5,
    newBars: [0, 2],
    counts: ["3AM", "LOFI", "CCPL", "PY", "C++"],
    links: ["debug-mode/3am", "music/lofi", "competitive/ccpl", "learning/python", "learning/cpp"],
    stats: [
      { tag: "FUEL", value: "COFFEE", color: "#e1306c" },
      { tag: "VIBE", value: "LOFI", color: "#f77737" },
    ],
  },
  {
    id: "weird",
    label: "WEIRD FACT ABOUT ME",
    handle: PROFILE.aboutHandle,
    href: PROFILE.githubUrl,
    icon: "⚡",
    barIcon: icon3,
    bars: 7,
    newBars: [1, 3, 6],
    counts: ["PY", "C++", "RUST", "API", "SQL", "DEBUG", "RUN"],
    links: ["learning/python", "learning/cpp", "future/rust", "backend/api", "backend/sql", "quality/debugging", "hobby/running"],
    stats: [
      { tag: "FOCUS", value: "PY+C++", color: "#00f2ea" },
      { tag: "RUST", value: "FUTURE", color: "#ff0050" },
    ],
  },
];

export const RESUME_ITEMS = [
  { id: "i", badge: "I", title: "EDUCATION", subtitle: "CCIA / Continuous Learning", rank: 4 },
  { id: "ii", badge: "II", title: "SKILLS", subtitle: "Python / C++ / Problem Solving", rank: 5 },
  { id: "iii", badge: "III", title: "PROJECTS", subtitle: "PLACEHOLDER", rank: 5 },
  { id: "iv", badge: "IV", title: "FOCUS", subtitle: "Backend / APIs / SQL", rank: 4 },
];

export const EDUCATION_ROWS = [
  { index: "01", title: "CCIA", status: "Active" },
  { index: "02", title: "Backend Practice", status: "Daily" },
  { index: "03", title: "Python + C++", status: "Learning" },
  { index: "04", title: "Rust", status: "Future" },
];

export const MENU_ITEMS = [
  { id: "about", label: "ABOUT ME", page: "about", fontSize: 80, offsetX: 0, offsetY: 0, skew: -6, skewY: 10 },
  { id: "resume", label: "RESUME", page: "resume", fontSize: 66, offsetX: 20, offsetY: 8, skew: -11, skewY: -10 },
  { id: "github", label: "GITHUB LINK", page: "github", fontSize: 68, offsetX: 8, offsetY: 6, skew: 0, skewY: -4 },
  { id: "socials", label: "SOCIALS", page: "socials", fontSize: 74, offsetX: 16, offsetY: 8, skew: -3, skewY: 5 },
  { id: "sideproj", label: "SIDE PROJECTS", page: "sideproj", fontSize: 56, offsetX: 10, offsetY: 6, skew: -4, skewY: 7 },
];

export const ABOUT_REVEAL_CONTENT = [
  {
    upper: ["name: JAGR1792", "location: Colombia", "focus: backend development"],
    lower: "learning python and c++ | rust: future goal",
  },
  {
    upper: [
      "I debug better at 3am.",
      "I code with lo-fi almost every session.",
      "I compete in CCPL and enjoy problem solving.",
    ],
    lower: "yes, coffee is still required",
  },
  {
    upper: [
      "Born for backend, forced into frontend.",
      "Main stack in progress: Python and C++.",
      "Rust is part of my future roadmap.",
      "Special thanks to blairxu13 for the original repo inspiration.",
      "Favorite fuel: coffee + code.",
    ],
    lower: `github: github.com/${PROFILE.githubUsername}`,
  },
];
