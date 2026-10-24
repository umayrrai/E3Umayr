// @deno-types="./asset-url.d.ts"
import hatUrl from "./assets/hat.svg?no-inline";
// @deno-types="./asset-url.d.ts"
import moonUrl from "./assets/moon.svg?no-inline";

const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

function buildFace(): SVGSVGElement {
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 -30 200 230");
  face.setAttribute("role", "img");
  face.setAttribute(
    "aria-label",
    "A green wizard with a purple pointy hat and a crescent moon behind him",
  );

  // moon.svg: my own drawing, written by hand as SVG in a text editor.
  // No outside source; I made it myself.
  const moonImage = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  moonImage.setAttribute("href", moonUrl);
  moonImage.setAttribute("x", "140");
  moonImage.setAttribute("y", "5");
  moonImage.setAttribute("width", "50");
  moonImage.setAttribute("height", "50");
  face.append(moonImage);

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "#1a9d00");
  head.setAttribute("stroke", "#302c29");
  head.setAttribute("stroke-width", "4");
  face.append(head);

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

  // hat.svg: my own drawing, written by hand as SVG in a text editor.
  // No outside source; I made it myself. Appended last so it draws on top.
  const hatImage = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  hatImage.setAttribute("href", hatUrl);
  hatImage.setAttribute("x", "50");
  hatImage.setAttribute("y", "-30");
  hatImage.setAttribute("width", "100");
  hatImage.setAttribute("height", "100");
  face.append(hatImage);

  return face;
}

const face = buildFace();
portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});