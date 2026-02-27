// Shared destination coordinates — single source of truth
// Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  rome: { lat: 41.9028, lng: 12.4964, label: 'Rome' },
  florence: { lat: 43.7696, lng: 11.2558, label: 'Florence' },
  venice: { lat: 45.4408, lng: 12.3155, label: 'Venice' },
  milan: { lat: 45.4642, lng: 9.1900, label: 'Milan' },
  naples: { lat: 40.8518, lng: 14.2681, label: 'Naples' },
  'amalfi-coast': { lat: 40.6340, lng: 14.6027, label: 'Amalfi Coast' },
  'cinque-terre': { lat: 44.1461, lng: 9.6439, label: 'Cinque Terre' },
  tuscany: { lat: 43.3188, lng: 11.3308, label: 'Tuscany' },
  sicily: { lat: 37.5994, lng: 14.0154, label: 'Sicily' },
  sardinia: { lat: 40.1209, lng: 9.0129, label: 'Sardinia' },
  bologna: { lat: 44.4949, lng: 11.3426, label: 'Bologna' },
  'lake-como': { lat: 45.9942, lng: 9.2572, label: 'Lake Como' },
  pompeii: { lat: 40.7462, lng: 14.4989, label: 'Pompeii' },
  positano: { lat: 40.6281, lng: 14.4850, label: 'Positano' },
  verona: { lat: 45.4384, lng: 10.9917, label: 'Verona' },
};
