# Portrait Plan

The character is a green wizard with a long grey beard and stars behind him.
A, B, and C are three different ways to draw him. I'm only going to keep one.

## A

- Geometry. About 120 little star shapes scattered in the background
  behind the wizard's head.
- Some stars big, most small, spread out so the sky looks full.
- It should look like he's standing in front of a busy night sky.

- Status: explored on branch `A`. Built as planned: about 190 stars on a
  blue sky behind the wizard.

## B

- Assets. Two images:
  1. A pointy hat on top of his head. I'll draw it myself.
  2. A glowing moon behind him on the upper right, from a free (CC0) site
     or drawn myself.
- The face stays simple, and the images do most of the work.

- Status: explored on branch `B`. Both images are hand-drawn SVGs. The hat
  needed extra room above the head, so I made the canvas taller.

## C

- Color and curves.
- Gradient: the background goes from dark blue at the top to purple at the
  bottom, like the sky at night.
- Bézier curve: the beard, drawn as one long curved shape flowing down
  from the chin.
- Fewer pieces, but it should look smooth.

- Status: explored on branch `C`. The gradient and curved beard worked as
  planned, but I used Bézier curves for the whole beard shape instead of
  only a line.

## How I'll choose

I'll pick the one that looks most like a wizard and is still easy to
recognize when it's small.

## Decision

I chose B, the hat and moon version, and it is now on `main`.

My criterion was that the portrait should look most like a wizard and still
be easy to recognize when it's small. The pointy hat is the strongest
wizard signal, and it still reads at a small size. A had a lot of stars but
the face itself looked like a plain green head, and C was smooth but nothing
in it said wizard apart from the beard.

A and C stay on their own branches, untouched, as a record of those
alternatives.
