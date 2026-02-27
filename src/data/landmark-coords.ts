// Popular Italian POI coordinates for itinerary geocoding.
// Used by generate-itinerary.ts to resolve activity coordinates without Geocoding API calls.

export const LANDMARK_COORDS: Record<string, { lat: number; lng: number }> = {
  // -- Rome --
  'colosseum': { lat: 41.8902, lng: 12.4922 },
  'roman forum': { lat: 41.8925, lng: 12.4853 },
  'vatican museums': { lat: 41.9065, lng: 12.4536 },
  'sistine chapel': { lat: 41.9029, lng: 12.4545 },
  'pantheon': { lat: 41.8986, lng: 12.4769 },
  'trevi fountain': { lat: 41.9009, lng: 12.4833 },
  'spanish steps': { lat: 41.9060, lng: 12.4828 },
  'trastevere': { lat: 41.8893, lng: 12.4695 },
  'piazza navona': { lat: 41.8992, lng: 12.4731 },
  'borghese gallery': { lat: 41.9142, lng: 12.4922 },
  'fiumicino airport': { lat: 41.8003, lng: 12.2389 },
  'roma termini': { lat: 41.9009, lng: 12.5016 },

  // -- Florence --
  'uffizi gallery': { lat: 43.7677, lng: 11.2553 },
  'florence cathedral': { lat: 43.7731, lng: 11.2560 },
  'duomo florence': { lat: 43.7731, lng: 11.2560 },
  'ponte vecchio': { lat: 43.7680, lng: 11.2531 },
  'piazzale michelangelo': { lat: 43.7629, lng: 11.2650 },
  'accademia gallery': { lat: 43.7767, lng: 11.2589 },
  'mercato centrale': { lat: 43.7763, lng: 11.2535 },
  'palazzo pitti': { lat: 43.7652, lng: 11.2500 },
  'firenze smn': { lat: 43.7764, lng: 11.2479 },

  // -- Venice --
  'st marks basilica': { lat: 45.4345, lng: 12.3397 },
  'piazza san marco': { lat: 45.4341, lng: 12.3388 },
  'rialto bridge': { lat: 45.4381, lng: 12.3360 },
  'rialto market': { lat: 45.4389, lng: 12.3358 },
  'murano': { lat: 45.4583, lng: 12.3532 },
  'burano': { lat: 45.4853, lng: 12.4170 },
  'doges palace': { lat: 45.4337, lng: 12.3401 },
  'marco polo airport': { lat: 45.5053, lng: 12.3519 },
  'venice santa lucia': { lat: 45.4408, lng: 12.3208 },

  // -- Milan --
  'the last supper': { lat: 41.9065, lng: 12.4536 },
  'milan cathedral': { lat: 45.4641, lng: 9.1919 },
  'duomo milan': { lat: 45.4641, lng: 9.1919 },
  'navigli district': { lat: 45.4500, lng: 9.1794 },
  'galleria vittorio emanuele': { lat: 45.4658, lng: 9.1900 },
  'la scala': { lat: 45.4676, lng: 9.1894 },
  'malpensa airport': { lat: 45.6306, lng: 8.7231 },
  'milano centrale': { lat: 45.4861, lng: 9.2044 },

  // -- Naples --
  'naples underground': { lat: 40.8506, lng: 14.2557 },
  'spaccanapoli': { lat: 40.8496, lng: 14.2558 },
  'naples archaeological museum': { lat: 40.8536, lng: 14.2503 },
  'naples airport': { lat: 40.8860, lng: 14.2908 },

  // -- Amalfi Coast --
  'amalfi town': { lat: 40.6340, lng: 14.6027 },
  'ravello': { lat: 40.6491, lng: 14.6113 },
  'villa rufolo': { lat: 40.6494, lng: 14.6119 },
  'path of the gods': { lat: 40.6369, lng: 14.5348 },

  // -- Cinque Terre --
  'riomaggiore': { lat: 44.0990, lng: 9.7379 },
  'manarola': { lat: 44.1068, lng: 9.7274 },
  'corniglia': { lat: 44.1193, lng: 9.7107 },
  'vernazza': { lat: 44.1353, lng: 9.6840 },
  'monterosso': { lat: 44.1461, lng: 9.6536 },
  'la spezia': { lat: 44.1024, lng: 9.8241 },

  // -- Tuscany --
  'siena': { lat: 43.3188, lng: 11.3308 },
  'piazza del campo': { lat: 43.3180, lng: 11.3319 },
  'san gimignano': { lat: 43.4677, lng: 11.0438 },
  'val dorcia': { lat: 43.0605, lng: 11.6268 },
  'pienza': { lat: 43.0764, lng: 11.6790 },
  'montepulciano': { lat: 43.0946, lng: 11.7831 },

  // -- Sicily --
  'mount etna': { lat: 37.7510, lng: 14.9934 },
  'valley of the temples': { lat: 37.2906, lng: 13.5861 },
  'taormina': { lat: 37.8516, lng: 15.2856 },
  'syracuse': { lat: 37.0755, lng: 15.2866 },
  'ortygia': { lat: 37.0603, lng: 15.2930 },
  'palermo': { lat: 38.1157, lng: 13.3615 },
  'catania': { lat: 37.5079, lng: 15.0830 },

  // -- Sardinia --
  'la pelosa beach': { lat: 40.9515, lng: 8.2056 },
  'costa smeralda': { lat: 41.0863, lng: 9.5213 },
  'nuraghe su nuraxi': { lat: 39.7058, lng: 8.9961 },
  'cagliari': { lat: 39.2238, lng: 9.1217 },

  // -- Bologna --
  'piazza maggiore': { lat: 44.4938, lng: 11.3430 },
  'asinelli tower': { lat: 44.4944, lng: 11.3474 },
  'quadrilatero market': { lat: 44.4940, lng: 11.3460 },

  // -- Lake Como --
  'bellagio': { lat: 45.9875, lng: 9.2600 },
  'varenna': { lat: 46.0100, lng: 9.2847 },
  'villa balbianello': { lat: 45.9650, lng: 9.2050 },
  'como town': { lat: 45.8081, lng: 9.0852 },

  // -- Pompeii --
  'pompeii ruins': { lat: 40.7462, lng: 14.4989 },
  'mount vesuvius': { lat: 40.8210, lng: 14.4260 },

  // -- Positano --
  'spiaggia grande': { lat: 40.6276, lng: 14.4856 },
  'positano town': { lat: 40.6281, lng: 14.4850 },

  // -- Verona --
  'arena di verona': { lat: 45.4391, lng: 10.9943 },
  'juliets balcony': { lat: 45.4419, lng: 10.9987 },
  'piazza delle erbe': { lat: 45.4432, lng: 10.9976 },
  'castelvecchio': { lat: 45.4393, lng: 10.9862 },
};
