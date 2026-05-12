/**
 * paintings.js — Gallery data source
 *
 * HOW TO ADD A NEW PAINTING
 * ─────────────────────────
 * 1. Drop your images into assets/illustrations/
 * 2. Copy one of the objects below and paste it at the end of the array
 * 3. Fill in the fields:
 *    - id         : unique slug, no spaces (used for future deep-linking)
 *    - title      : display name shown in the gallery and lightbox
 *    - year       : e.g. "2025"
 *    - medium     : e.g. "Digital painting"
 *    - desc       : short description shown in the lightbox panel
 *    - thumbnail  : the image shown in the gallery grid (usually the final piece)
 *    - stages     : array of process stages, shown in lightbox order
 *                   Each stage has:
 *                     label  — short name shown in the thumbnail strip
 *                     src    — path to the image file
 *                     caption (optional) — extra note shown below the image
 *
 * STAGE LABEL SUGGESTIONS
 * ───────────────────────
 * "Thumbnail", "Composition", "Value study", "Colour study",
 * "Lighting", "Line art", "Rough", "WIP", "Detail pass", "Final"
 *
 * Leave stages as a single-item array if you only have the final piece.
 */

const PAINTINGS = [
  {
    id: 'forest',
    title: 'Forest',
    year: '2026',
    medium: 'Digital painting',
    desc: 'A sprawling ancient forest bathed in diffuse light.',
    thumbnail: 'assets/illustrations/forest_final.webp',
    stages: [
      {
        src: 'assets/illustrations/forest_final.webp',
      }
    ],
  },
  {
    id: 'plains',
    title: 'Plains',
    year: '2026',
    medium: 'Digital painting',
    desc: 'Wide-open grassland at golden hour.',
    thumbnail: 'assets/illustrations/plains_final.webp',
    stages: [
      {
        label: 'Final',
        src: 'assets/illustrations/plains_final.webp',
      },
      {
        label: 'Drawing',
        src: 'assets/illustrations/plains_drawing.webp',
      },
      {
        label: 'Thumbnails',
        src: 'assets/illustrations/plains_thumbs.webp',
      },
    ],
  },
  {
    id: 'umbral-rift',
    title: 'Umbral Rift',
    year: '2026',
    medium: 'Digital painting',
    desc: 'A monumental beast-mouth cavern entrance.',
    thumbnail: 'assets/illustrations/umbral_rift_final.webp',
    stages: [
      {
        label: 'Final',
        src: 'assets/illustrations/umbral_rift_final.webp',
      },
      {
        label: 'Drawing',
        src: 'assets/illustrations/umbral_rift_drawing.webp',
      },
      {
        label: 'Thumbnails',
        src: 'assets/illustrations/umbral_rift_thumbs.webp',
      },
    ],
  },
  {
    id: 'ash-monolith',
    title: 'Ash Monolith',
    year: '2025',
    medium: 'Digital painting',
    desc: 'A solitary ancient monolith rises from an ash-covered plain.',
    thumbnail: 'assets/illustrations/ash-monolith_final.webp',
    stages: [
      {
        label: 'Final',
        src: 'assets/illustrations/ash-monolith_final.webp',
      },
      {
        label: 'Drawing',
        src: 'assets/illustrations/ash-monolith_drawing.webp',
      },
      {
        label: 'Thumbnails',
        src: 'assets/illustrations/ash-monolith_thumbs.webp',
      },
    ],
  },
  {
    id: 'mana-breach',
    title: 'Mana Breach',
    year: '2025',
    medium: 'Digital painting',
    desc: 'An arcane rupture tears through a ruined landscape.',
    thumbnail: 'assets/illustrations/mana-breach_final.webp',
    stages: [
      {
        label: 'Final',
        src: 'assets/illustrations/mana-breach_final.webp',
      },
      {
        label: 'Drawing',
        src: 'assets/illustrations/mana-breach_drawing.webp',
      },
      {
        label: 'Thumbnails',
        src: 'assets/illustrations/mana-breach_thumbs.webp',
      },
    ],
  },
  {
    id: 'whispers-from-the-mireglass',
    title: 'Whispers from the Mireglass',
    year: '2025',
    medium: 'Digital painting',
    desc: 'A reflective swamp with ghostly apparitions.',
    thumbnail: 'assets/illustrations/whispers-from-the-mireglass_final.webp',
    stages: [
      {
        label: 'Final',
        src: 'assets/illustrations/whispers-from-the-mireglass_final.webp',
      },
      {
        label: 'Drawing',
        src: 'assets/illustrations/whispers-from-the-mireglass_drawing.webp',
      },
      {
        label: 'Thumbnails',
        src: 'assets/illustrations/whispers-from-the-mireglass_thumbs.webp',
      },
    ],
  },
  {
    id: 'heartroot-vault',
    title: 'Heartroot Vault',
    year: '2025',
    medium: 'Digital painting',
    desc: 'A vast underground root network forms a cathedral-like natural vault.',
    thumbnail: 'assets/illustrations/heartroot-vault_final.webp',
    stages: [
      {
        label: 'Final',
        src: 'assets/illustrations/heartroot-vault_final.webp',
      },
      {
        label: 'Drawing',
        src: 'assets/illustrations/heartroot-vault_drawing.webp',
      },
      {
        label: 'Thumbnails',
        src: 'assets/illustrations/heartroot-vault_thumbs.webp',
      },
    ],
  },
  {
    id: 'paradox-hollow',
    title: 'Paradox Hollow',
    year: '2025',
    medium: 'Digital painting',
    desc: 'A spatially distorted desert where geometry defies logic.',
    thumbnail: 'assets/illustrations/paradox-hollow_final.webp',
    stages: [
      {
        label: 'Final',
        src: 'assets/illustrations/paradox-hollow_final.webp',
      },
      {
        label: 'Drawing',
        src: 'assets/illustrations/paradox-hollow_drawing.webp',
      },
      {
        label: 'Thumbnails',
        src: 'assets/illustrations/paradox-hollow_thumbs.webp',
      },
    ],
  },
];
