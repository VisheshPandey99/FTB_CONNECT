import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
    const jokes = [
  {
    id: 1,
    title:'joke',
    joke: "Why do programmers prefer dark mode? Because light attracts bugs! 🐛"
  },
  {
    id: 2,
    title:'another joke',
    joke: "Why did the JavaScript developer go broke? Because he used up all his cache! 💸"
  },
  {
    id: 3,
    title:'one more joke',
    joke: "Why do programmers hate nature? It has too many bugs. 🌳🐛"
  },
  {
    id: 4,
    title:'yet another joke',
    joke: "What do you call a programmer who doesn't use Git? A risky developer! 😅"
  },
  {
    id: 5,
    title:'one last joke',
    joke: "Why was the JavaScript developer sad? Because he didn't know how to `null` his feelings. 😂"
  }
];
    res.send(jokes);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});