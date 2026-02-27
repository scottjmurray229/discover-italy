/**
 * Shared video map for destination cards.
 * Maps destination slugs to video file paths (preview preferred, hero as fallback).
 * Used by: src/pages/index.astro, src/pages/destinations/index.astro
 */
export const destinationVideoMap: Record<string, string> = {
  rome: '/videos/destinations/rome-preview.mp4',
  florence: '/videos/destinations/florence-preview.mp4',
  venice: '/videos/destinations/venice-preview.mp4',
  milan: '/videos/destinations/milan-preview.mp4',
  naples: '/videos/destinations/naples-preview.mp4',
  'amalfi-coast': '/videos/destinations/amalfi-coast-preview.mp4',
  'cinque-terre': '/videos/destinations/cinque-terre-preview.mp4',
  tuscany: '/videos/destinations/tuscany-preview.mp4',
  sicily: '/videos/destinations/sicily-preview.mp4',
  sardinia: '/videos/destinations/sardinia-preview.mp4',
  bologna: '/videos/destinations/bologna-preview.mp4',
  'lake-como': '/videos/destinations/lake-como-preview.mp4',
  pompeii: '/videos/destinations/pompeii-preview.mp4',
  positano: '/videos/destinations/positano-preview.mp4',
  verona: '/videos/destinations/verona-preview.mp4',
} as const;
