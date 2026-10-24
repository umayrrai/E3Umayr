const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "A green wizard with a long grey beard in front of a starry night sky",
);

// Night sky behind everything.
const sky = document.createElementNS("http://www.w3.org/2000/svg", "rect");
sky.setAttribute("width", "200");
sky.setAttribute("height", "200");
sky.setAttribute("fill", "#002cbc");
face.append(sky);

// Stars (no randomness, so the sky is the same every load).
// Points behind the head are skipped so every star stays visible.
for (let i = 0; i < 400; i++) {
  const x = (i * 73.7 + 11) % 200;
  const y = (i * 127.3 + 5) % 200;
  const x2 = (x - 100) / 78;
  const y2 = (y - 100) / 86;
  if (x2 * x2 + y2 * y2 < 1) continue;
  const big = i % 10 === 0;
  const star = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  star.setAttribute("cx", String(x));
  star.setAttribute("cy", String(y));
  star.setAttribute("r", big ? "2.5" : "1");
  star.setAttribute("fill", big ? "#fff3a0" : "#ffffff");
  face.append(star);
}

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#1a9d00");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

// Adding a beard for fun
const beard = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "polygon",
);
beard.setAttribute("points", "40,120 160,120 100,198");
beard.setAttribute("fill", "#b8b8b8");
beard.setAttribute("stroke", "#302c29");
beard.setAttribute("stroke-width", "4");
beard.setAttribute("stroke-linejoin", "round");
face.append(beard);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
