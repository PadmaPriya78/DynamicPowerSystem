/* ── V-Guard Heat Pump Water Heaters Product Data ── */
/* Source: https://www.vguard.in/product-categories/vguard-heat-pump-water-heaters */

export const VGUARD_NAV = [
    { id: 'section-heat-pumps', label: 'Heat Pump Water Heaters' },
];

export const VGUARD_SECTIONS = [
    {
        id:      'section-heat-pumps',
        tag:     'V-Guard Heat Pumps',
        title:   'Heat Pump Water Heaters',
        tagline: 'Energy-efficient and innovative heat pump water heating solutions for domestic, commercial, swimming pool, and extreme cold climate applications',
        products: [
            {
                id:       'domestic-heat-pump-series',
                name:     'Domestic Heat Pump Series',
                subtitle: 'Heat Pump Water Heater',
                badge:    'Domestic',
                capacity: 'Hot Water Round the Clock',
                image:    'https://www.vguard.in/uploads/product/domestic-heat-pump-v3-bg.jpg',
                description: 'This series of Domestic Heat Pump Water Heaters is designed to give you and your family hot water round the clock. Comes with a 5-year warranty for the tank and compressor and a 3-year warranty for the heat pump.',
                specs: [
                    { label: 'Tank & Compressor Warranty', value: '5 Years' },
                    { label: 'Heat Pump Warranty',         value: '3 Years' },
                    { label: 'Application',                value: 'Residential' },
                    { label: 'Operation',                  value: 'Round the Clock' },
                ],
                highlights: [
                    'Hot water round the clock',
                    '5-year warranty for tank and compressor',
                    '3-year warranty for the heat pump',
                    'Energy-efficient domestic solution',
                ],
            },
            {
                id:       'commercial-heat-pump-series',
                name:     'Commercial Heat Pump Series',
                subtitle: 'Heat Pump Water Heater',
                badge:    'Commercial',
                capacity: 'ASHPWH',
                image:    'https://www.vguard.in/uploads/product/CommercialHeatPumpSeries-sm.jpg',
                description: 'For commercial environments like Hospitals, Hostels, Hotels etc. easy access to hot water is mandatory. This series is both energy-efficient and innovative equally. An Air Source Heat Pump Water Heater (ASHPWH) from V-Guard is the go-to solution for readily available hot water.',
                specs: [
                    { label: 'Application',    value: 'Hospitals, Hostels, Hotels' },
                    { label: 'Type',           value: 'Air Source Heat Pump (ASHPWH)' },
                    { label: 'Efficiency',     value: 'Energy-efficient' },
                    { label: 'Hot Water',      value: 'Readily Available' },
                ],
                highlights: [
                    'Designed for commercial environments',
                    'Energy-efficient and innovative',
                    'Air Source Heat Pump Water Heater (ASHPWH)',
                    'Ideal for Hospitals, Hostels, Hotels',
                ],
            },
            {
                id:       'swimming-pool-heat-pumps-series',
                name:     'Swimming Pool Heat Pumps Series',
                subtitle: 'Heat Pump Water Heater',
                badge:    'Swimming Pool',
                capacity: 'Pool Heating',
                image:    'https://www.vguard.in/uploads/product/swimming-pool-hp.jpg',
                description: 'This series of swimming pool heat pumps is designed to give you the comfort of Heated Swimming Pool round the clock. Comes with a 2 year warranty for the heat pump.',
                specs: [
                    { label: 'Application',          value: 'Swimming Pool' },
                    { label: 'Heat Pump Warranty',   value: '2 Years' },
                    { label: 'Operation',            value: 'Round the Clock' },
                    { label: 'Comfort',              value: 'Heated Pool' },
                ],
                highlights: [
                    'Heated Swimming Pool round the clock',
                    '2 year warranty for the heat pump',
                    'Designed for pool comfort',
                    'Energy-efficient pool heating',
                ],
            },
            {
                id:       'evi-heat-pumps-series',
                name:     'EVI Heat Pumps Series',
                subtitle: 'Heat Pump Water Heater',
                badge:    'EVI Tech',
                capacity: 'Extreme Cold',
                image:    'https://www.vguard.in/uploads/product/evi-hp.jpg',
                description: 'This series of EVI heat pumps is designed to deliver the hot water at even the lowest temperature of -30 deg C temperature.',
                specs: [
                    { label: 'Technology',     value: 'Enhanced Vapor Injection (EVI)' },
                    { label: 'Working Temp',   value: 'Down to -30°C' },
                    { label: 'Application',    value: 'Extreme Cold Climates' },
                    { label: 'Hot Water',      value: 'All Weather Delivery' },
                ],
                highlights: [
                    'Works at temperatures as low as -30°C',
                    'Enhanced Vapor Injection technology',
                    'All-weather hot water delivery',
                    'Ideal for cold climate regions',
                ],
            },
        ],
    },
];
