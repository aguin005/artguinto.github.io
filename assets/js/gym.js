const spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove", e => {
  const rect = spotlight.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  spotlight.style.setProperty("--x", `${x}px`);
  spotlight.style.setProperty("--y", `${y}px`);
});