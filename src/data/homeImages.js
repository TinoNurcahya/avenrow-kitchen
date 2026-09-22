import H1Small from '../assets/images/home/hero/avenrow-hero-960.webp'
import H1Large from '../assets/images/home/hero/avenrow-hero-1536.webp'
import F1Small from '../assets/images/home/featured/braised-short-rib-640.webp'
import F1Large from '../assets/images/home/featured/braised-short-rib-1280.webp'
import F2Small from '../assets/images/home/featured/atlantic-salmon-640.webp'
import F2Large from '../assets/images/home/featured/atlantic-salmon-1280.webp'
import F3Small from '../assets/images/home/featured/mushroom-rigatoni-640.webp'
import F3Large from '../assets/images/home/featured/mushroom-rigatoni-1280.webp'
import I1Small from '../assets/images/home/story/restaurant-interior-640.webp'
import I1Large from '../assets/images/home/story/restaurant-interior-1280.webp'
import G1Small from '../assets/images/home/gallery/dining-corner-640.webp'
import G1Large from '../assets/images/home/gallery/dining-corner-1122.webp'
import G2Small from '../assets/images/home/gallery/hands-plating-640.webp'
import G2Large from '../assets/images/home/gallery/hands-plating-1280.webp'
import G3Small from '../assets/images/home/gallery/cocktail-640.webp'
import G3Large from '../assets/images/home/gallery/cocktail-1122.webp'
import G4Small from '../assets/images/home/gallery/table-setting-640.webp'
import G4Large from '../assets/images/home/gallery/table-setting-1280.webp'

// Approved PNG masters remain untouched; only responsive WebP exports ship.
// Featured photos use empty alt because adjacent dish copy supplies their meaning.
export const homeImages = {
  H1: {
    id: 'H1', src: H1Large,
    srcSet: `${H1Small} 960w, ${H1Large} 1536w`,
    sizes: "(min-width: 1340px) 647px, (min-width: 1024px) calc(55vw - 75px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)",
    width: 1536, height: 1024, alt: "Short rib, roasted vegetables, salad, and bread shared across a wooden table.",
  },
  F1: {
    id: 'F1', src: F1Large,
    srcSet: `${F1Small} 640w, ${F1Large} 1280w`,
    sizes: "(min-width: 1340px) 418px, (min-width: 1024px) 34vw, (min-width: 640px) calc(50vw - 48px), calc(100vw - 40px)",
    width: 1280, height: 960, alt: "",
  },
  F2: {
    id: 'F2', src: F2Large,
    srcSet: `${F2Small} 640w, ${F2Large} 1280w`,
    sizes: "(min-width: 1340px) 418px, (min-width: 1024px) 34vw, (min-width: 640px) calc(50vw - 48px), calc(100vw - 40px)",
    width: 1280, height: 960, alt: "",
  },
  F3: {
    id: 'F3', src: F3Large,
    srcSet: `${F3Small} 640w, ${F3Large} 1280w`,
    sizes: "(min-width: 1340px) 418px, (min-width: 1024px) 34vw, (min-width: 640px) calc(50vw - 48px), calc(100vw - 40px)",
    width: 1280, height: 960, alt: "",
  },
  I1: {
    id: 'I1', src: I1Large,
    srcSet: `${I1Small} 640w, ${I1Large} 1280w`,
    sizes: "(min-width: 1340px) 642px, (min-width: 768px) 52vw, calc(100vw - 40px)",
    width: 1280, height: 853, alt: "Candlelit dining room with wooden tables, leather seating, and an open kitchen.",
  },
  G1: {
    id: 'G1', src: G1Large,
    srcSet: `${G1Small} 640w, ${G1Large} 1122w`,
    sizes: "(min-width: 1340px) 392px, (min-width: 768px) 32vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)",
    width: 1122, height: 1402, alt: "A wooden table set beside a leather banquette with candles and flowers.",
  },
  G2: {
    id: 'G2', src: G2Large,
    srcSet: `${G2Small} 640w, ${G2Large} 1280w`,
    sizes: "(min-width: 1340px) 816px, (min-width: 768px) 66vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)",
    width: 1280, height: 853, alt: "Hands adding herbs to a plated short rib.",
  },
  G3: {
    id: 'G3', src: G3Large,
    srcSet: `${G3Small} 640w, ${G3Large} 1122w`,
    sizes: "(min-width: 1340px) 376px, (min-width: 768px) 30vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)",
    width: 1122, height: 1402, alt: "An amber drink with a large ice cube and orange peel in a short glass.",
  },
  G4: {
    id: 'G4', src: G4Large,
    srcSet: `${G4Small} 640w, ${G4Large} 1280w`,
    sizes: "(min-width: 1340px) 710px, (min-width: 768px) 57vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)",
    width: 1280, height: 853, alt: "Ceramic plates, folded linen napkins, cutlery, and wine glasses on a wooden table.",
  },
}
