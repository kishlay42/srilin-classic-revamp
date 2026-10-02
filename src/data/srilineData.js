export const COMPANY_INFO = {
  name: "SriLin Electronics Pvt. Ltd.",
  legalName: "SRILIN ELECTRONICS PRIVATE LIMITED",
  legalRegistration: "Registered under Companies Act, 2013 (18 of 2013), State of Telangana",
  tagline: "AS9100D & ISO 9001:2015 Certified Aerospace & Defense EMS",
  established: 2017,
  plantLocation: "PLOT: S-1/P/D, E-City EMC, Raviryala Village, Maheshwaram Mandal, Ranga Reddy District, Telangana - 501359, India",
  logisticsHub: "Fabcity (E-City EMC), Hyderabad — 15 minutes from Rajiv Gandhi International Airport & cargo terminal",
  phone: "+91 91777 02120",
  email: "sales@srilinelectronics.com",
  secondaryEmail: "rfq@srilinelectronics.com",
  lineCapacity: "200,000 CPH",
  smtAccuracy: "±0.025 mm, CpK ≥ 1.00 (3σ)",
  currentFacilitySqft: "25,000 sq ft",
  expansionSqft: "214,000 sq ft (8x footprint ready on campus)",
  experienceYears: "9+ Years of Excellence",
  clientsServed: "149+",
  projectsDelivered: "347+",
  globalCustomers: "75+",
  onTimeDelivery: "98%",
  prototypeCycle: "12-Day Prototype Cycle",
  cleanroomClass: "Class 100,000 / ISO-8 Cleanroom",
  esdCompliance: "ANSI/ESD S20.20-2021 & IEC 61340-5-1 Certified Facility"
};

export const CERTIFICATIONS = [
  {
    code: "AS9100D",
    title: "Aerospace & Defense EMS",
    issuer: "TUV NORD / IAQG",
    validity: "Active (Rev D)",
    description: "Quality management system for aviation, space, and defense organizations.",
    icon: "ShieldCheck",
    color: "from-red-600 to-amber-500"
  },
  {
    code: "ISO 9001:2015",
    title: "Quality Management System",
    issuer: "TUV NORD",
    validity: "Certified",
    description: "Consistent quality control, customer satisfaction, and continuous improvement processes.",
    icon: "Award",
    color: "from-emerald-600 to-teal-500"
  },
  {
    code: "ANSI/ESD S20.20-2021",
    title: "ESD Control Standard",
    issuer: "ESD Association",
    validity: "Certified",
    description: "Comprehensive electrostatic discharge control program protecting sensitive microelectronics.",
    icon: "Zap",
    color: "from-amber-500 to-orange-500"
  },
  {
    code: "IEC 61340-5-1",
    title: "Electrostatic Protection",
    issuer: "International Electrotechnical Commission",
    validity: "Active Compliance",
    description: "International standard for the protection of electronic devices from electrostatic phenomena.",
    icon: "ShieldCheck",
    color: "from-blue-600 to-indigo-500"
  },
  {
    code: "IPC-A-610 Class 3",
    title: "High-Rel Electronic Assemblies",
    issuer: "IPC Certified Trainers",
    validity: "Certified",
    description: "Rigorous standards for mission-critical aerospace, defense, and medical hardware.",
    icon: "CheckCircle2",
    color: "from-purple-600 to-indigo-500"
  }
];

export const CLIENT_LOGOS = [
  { name: "FICOSA", sector: "Automotive Advanced Vision & ADAS", badge: "Tier-1 Auto EMS Partner" },
  { name: "Pixcellence Technologies", sector: "Optoelectronics & AI Vision Systems", badge: "Strategic PCBA Client" },
  { name: "Skyroot Aerospace", sector: "Launch Vehicles & Space Launch", badge: "Mission Avionics" },
  { name: "Dhruva Space", sector: "Satellite Systems & Solar Arrays", badge: "Payload Electronics" },
  { name: "Carrier", sector: "Commercial Climate & Building Automation", badge: "IoT Controllers" },
  { name: "Apollo Hospitals", sector: "Medical Instrumentation & Monitoring", badge: "Life-Support Systems" }
];

export const TESTIMONIALS = [
  {
    quote: "The seamless integration of Srilin team efforts with FICOSA’s requirements has been instrumental in achieving high-quality outcomes. Their responsiveness, technical expertise, and proactive approach have significantly enhanced the collaboration. Srilin stands out as a model of professionalism, innovation and quality in the electronics manufacturing domain.",
    author: "Aravind",
    title: "Technical Director",
    company: "FICOSA"
  },
  {
    quote: "Pixcellence greatly appreciates Srilin Team's unwavering commitment to delivering high-quality PCBAs, reliable on-time shipments, competitive BOM pricing and open communication. Your meticulous attention to detail and stringent quality control have significantly reduced defects and enhanced our operational efficiency.",
    author: "Huzaifa Najmi",
    title: "President & CEO",
    company: "Pixcellence Technologies"
  }
];

export const INDUSTRY_VERTICALS = [
  {
    id: "automotive",
    title: "Automotive",
    description: "EV battery management, ADAS sensor suites, and infotainment assembly. Compliant with IATF 16949 quality management standards.",
    standard: "IATF 16949 Compliant"
  },
  {
    id: "aerospace-defense",
    title: "Aviation, Space & Defence",
    description: "High-reliability PCBA for avionics, flight control systems, and engine management. Strict adherence to AS9100D and vibration-resistance specs.",
    standard: "AS9100D Rev D Flight Ready"
  },
  {
    id: "it-hardware",
    title: "IT Hardware & Consumer Electronics",
    description: "High-mix, high-volume SMT assembly for computing peripherals and consumer-grade devices, balancing speed with quality control.",
    standard: "IPC-A-610 Class 2/3"
  },
  {
    id: "telecom",
    title: "Telecom",
    description: "Next-gen 5G infrastructure, satellite comms, and base station assemblies. Specialized in high-frequency RF substrate handling.",
    standard: "Rogers RF / High-Tg"
  },
  {
    id: "electric-vehicles",
    title: "Electric Vehicles",
    description: "Battery pack electronics, charging infrastructure, and power control modules engineered for thermal stress and high-current reliability.",
    standard: "Heavy Copper 3oz-6oz"
  },
  {
    id: "railways",
    title: "Railways",
    description: "Signaling systems, onboard control units, and rolling stock electronics built to meet long-lifecycle and harsh-environment standards.",
    standard: "EN 50155 Ruggedized"
  },
  {
    id: "iot-automation",
    title: "AI, IoT & Automation",
    description: "Rapid prototyping for edge computing nodes, AI accelerators, and industrial IoT sensors with complex chip-on-board requirements.",
    standard: "Quick-Turn Prototype"
  },
  {
    id: "medical",
    title: "Medical Devices",
    description: "Life-saving diagnostic equipment and surgical robotics. Cleanroom SMT lines compliant with ISO 13485, ensuring full traceability.",
    standard: "ISO 13485 / Class 3"
  }
];

export const CLINICAL_STANDARDS_TABLE = [
  { metric: "IPC Standard", aviation: "Class 3 (Critical)", medical: "Class 2/3 (Life-critical)", iot: "Class 2 (Dedicated)" },
  { metric: "AOI Frequency", aviation: "100% Post-Reflow", medical: "100% Multi-Stage", iot: "Batch Statistical" },
  { metric: "Cleanliness", aviation: "Ionic Contam. Test", medical: "100K Cleanroom (ISO-8)", iot: "Standard ESD-Safe" },
  { metric: "Traceability", aviation: "Individual Serial & CoC", medical: "Lot & Component Level", iot: "Batch ID Track" }
];

export const SERVICES = [
  {
    id: "smt-assembly",
    title: "Surface Mount Technology (SMT) Assembly",
    shortDesc: "Ultra-high-speed Fuji and Panasonic SMT lines yielding 200,000 CPH with 01005 chip placement.",
    fullDesc: "Our automated cleanroom SMT lines feature dual-gantry high-speed placers capable of handling 01005 passives, 0.3mm pitch micro-BGAs, PoP (Package-on-Package), and ultra-fine QFNs. 13-zone nitrogen reflow ensures defect-free metallurgical bonding.",
    category: "Assembly",
    turnaround: "24-48 Hours Express",
    badge: "200k CPH Capacity",
    icon: "Cpu"
  },
  {
    id: "tht-assembly",
    title: "Through-Hole Technology (THT) Assembly",
    shortDesc: "Lead-free dual-wave soldering and precision selective soldering for heavy electromechanical components.",
    fullDesc: "Equipped with automated lead-forming machines, dual-pot wave soldering, and precision selective soldering systems for high-reliability connectors, power transformers, and ruggedized industrial headers.",
    category: "Assembly",
    turnaround: "48-72 Hours",
    badge: "Selective Soldering",
    icon: "Boxes"
  },
  {
    id: "box-build",
    title: "Box Build & Complete System Integration",
    shortDesc: "End-to-end electromechanical assembly, CNC enclosures, wiring harnesses, and final product packaging.",
    fullDesc: "Comprehensive turnkey box build services including custom CNC milled and sheet metal chassis integration, cable looms, pneumatic & power interconnects, firmware programming, and full functional burn-in testing.",
    category: "Integration",
    turnaround: "5-7 Days",
    badge: "Turnkey Integration",
    icon: "Layers"
  },
  {
    id: "prototype-quickturn",
    title: "Prototype & Quick-Turn Assembly",
    shortDesc: "Rapid engineering prototypes with no minimum order quantity (MOQ) and 24-48 hour turnaround.",
    fullDesc: "Dedicated prototype cells configured for fast changeover without setup delays. Designed specifically for R&D labs, aerospace testing, and defense flight trials with full DFM verification.",
    category: "Prototyping",
    turnaround: "24 Hours Express",
    badge: "No MOQ",
    icon: "Rocket"
  },
  {
    id: "high-mix-production",
    title: "High-Mix Low-to-Medium Volume Production",
    shortDesc: "Flexible manufacturing schedules tailored for specialized defense, medical, and industrial runs.",
    fullDesc: "Engineered for high complexity, high mix hardware where repeatable process control, serialization, and strict batch traceability are non-negotiable.",
    category: "Production",
    turnaround: "7-10 Days",
    badge: "Lot Traceability",
    icon: "Factory"
  },
  {
    id: "component-sourcing",
    title: "Component Sourcing & Supply Chain",
    shortDesc: "Direct global franchise distributor access (Mouser, Digi-Key, Arrow, Avnet) with counterfeit mitigation.",
    fullDesc: "BOM optimization with automated obsolescence alerts (NRND/EOL tracking), moisture-sensitive device (MSD) dry baking, and rigorous component authenticity verification.",
    category: "Supply Chain",
    turnaround: "Immediate",
    badge: "Authorized Franchises",
    icon: "Truck"
  },
  {
    id: "pcb-fabrication",
    title: "Printed Circuit Board (PCB) Fabrication",
    shortDesc: "High-density interconnect (HDI), multi-layer rigid, flex, and Rogers RF substrate manufacturing.",
    fullDesc: "Fabrication of 1 to 32 layer boards with controlled impedance (±10%), blind & buried microvias, ENIG / ENEPIG surface finishes, and aerospace grade Shengyi/Rogers laminates.",
    category: "Fabrication",
    turnaround: "48 Hours",
    badge: "Up to 32 Layers",
    icon: "CircuitBoard"
  },
  {
    id: "cable-harness",
    title: "Cable & Wire Harness Assembly",
    shortDesc: "Mil-spec circular connector termination, ribbon cables, and automated crimp pull-force testing.",
    fullDesc: "Custom wiring looms for aerospace avionics, industrial machinery, and automotive systems using Schleuniger automated cut, strip, and crimp machinery.",
    category: "Integration",
    turnaround: "3-5 Days",
    badge: "Mil-DTL-38999",
    icon: "Cable"
  },
  {
    id: "conformal-coating",
    title: "Conformal Coating & Potting",
    shortDesc: "Automated selective robotic spray coating (Acrylic, Silicone, Polyurethane) and epoxy encapsulation.",
    fullDesc: "Protects high-rel electronics against moisture, salt spray, thermal shock, and chemical exposure. Includes UV blacklight inspection for 100% film coverage verification.",
    category: "Protection",
    turnaround: "24-48 Hours",
    badge: "Robotic Selective",
    icon: "ShieldAlert"
  },
  {
    id: "testing-qa",
    title: "Testing & Quality Assurance (3D SPI/AOI & X-Ray)",
    shortDesc: "Koh Young 3D SPI/AOI, Nordson 160kV X-Ray inspection, In-Circuit Testing (ICT), and Flying Probe.",
    fullDesc: "Defect prevention and detection at every step. Non-destructive X-ray inspection examines BGA solder ball voiding and micro-bridging under high-voltage magnification.",
    category: "Quality",
    turnaround: "Real-Time Inspection",
    badge: "160kV X-Ray",
    icon: "ScanLine"
  },
  {
    id: "burn-in-testing",
    title: "Environmental Stress Screening & Burn-in (8h - 240h)",
    shortDesc: "Thermal cycling chambers operating from -40°C to +125°C for infant mortality elimination.",
    fullDesc: "Dedicated burn-in facility providing continuous thermal stress testing up to 240 hours under electrical load, meeting MIL-STD-810 and aerospace flight readiness standards.",
    category: "Quality",
    turnaround: "8h to 240h Cycles",
    badge: "Mil-STD Screening",
    icon: "Flame"
  },
  {
    id: "dfm-analysis",
    title: "Design for Manufacturability (DFM / DFA)",
    shortDesc: "Pre-production CAD/CAM design rule checks eliminating manufacturing bottlenecks before fab.",
    fullDesc: "Comprehensive review of copper clearances, annular rings, aspect ratios, component spacing, thermal relief, and solder paste stencils to ensure maximum first-pass yield.",
    category: "Engineering",
    turnaround: "Same-Day Analysis",
    badge: "Free Pre-Check",
    icon: "FileCheck"
  },
  {
    id: "rework-bga",
    title: "Precision Rework & BGA Reballing",
    shortDesc: "Split-vision optical alignment rework stations for high-value FPGA, SoC, and BGA replacement.",
    fullDesc: "IPC-7711/7721 certified rework station with controlled multi-zone infrared bottom and hot gas top reflow profiles for zero-damage component replacement.",
    category: "Engineering",
    turnaround: "24 Hours",
    badge: "Optical Alignment",
    icon: "Wrench"
  },
  {
    id: "aerospace-defense-ems",
    title: "Aerospace & Defense Mission EMS",
    shortDesc: "Full ITAR-compliant, AS9100D certified manufacturing with complete component traceability.",
    fullDesc: "Specialized defense cell designed for launch vehicles, satellite payloads, radar sub-assemblies, and defense secure communications with strict traceability and CoC records.",
    category: "Aerospace",
    turnaround: "Project Milestone",
    badge: "AS9100D Flight Ready",
    icon: "Plane"
  }
];

export const MACHINERY_DATA = [
  {
    name: "Fuji AIMEX IIIc Modular SMT Line",
    type: "High-Speed SMT Placement",
    capacity: "Up to 120,000 CPH combined",
    capability: "01005 passives to 74x74mm ICs, 0.3mm BGA pitch",
    highlight: "Dual-gantry intelligent vision with dynamic auto-feeder pitch control",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Panasonic NPM-D3 High-Speed Mounter",
    type: "Ultra-Fast SMT Placement",
    capacity: "84,000 CPH dual-lane",
    capability: "PCB dimensions up to 510 x 590mm, multi-lane independent conveyors",
    highlight: "Lightweight 16-nozzle head with real-time vacuum sensor checks",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Koh Young 3D SPI (KY8030-2)",
    type: "3D Solder Paste Inspection",
    capacity: "100% Volume & Height Inspection",
    capability: "True 3D shadow-free dual-projection Moire measurement",
    highlight: "Detects solder paste volume defects down to 1 micrometer precision",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Nordson Dage Quadra 5 160kV X-Ray",
    type: "Non-Destructive Inspection",
    capacity: "160kV High-Voltage Tube",
    capability: "0.1 micrometer feature recognition, sub-micron voiding detection",
    highlight: "Real-time 3D CT computed tomography for hidden BGA ball joints",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Heller 1809 MK5 13-Zone Reflow Oven",
    type: "Nitrogen Thermal Reflow",
    capacity: "13 Heating + 3 Cooling Zones",
    capability: "Nitrogen inert atmosphere (<50 ppm O2) with KIC thermal profiling",
    highlight: "Ultra-low Delta-T profile ensures uniform aerospace solder joints",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Environmental Thermal Burn-In Chamber",
    type: "Mil-Spec Screening Facility",
    capacity: "Continuous 8h to 240h Run",
    capability: "Temperature range: -40°C to +125°C with power dissipation monitoring",
    highlight: "Eliminates infant mortality before aerospace launch deployment",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
  }
];

export const CAPABILITIES_MATRIX = [
  { parameter: "Layer Count", standard: "1 to 8 Layers", advanced: "Up to 32 Layers (High-Density)", unit: "Layers" },
  { parameter: "Base Materials", standard: "FR-4 Standard (Tg 140)", advanced: "Rogers RF, Polyimide Flex, Shengyi High-Tg, Bergquist Aluminum", unit: "Substrates" },
  { parameter: "Board Thickness", standard: "0.8mm - 2.0mm", advanced: "0.2mm - 4.0mm (Custom Tolerance ±5%)", unit: "mm" },
  { parameter: "Min Trace Width / Spacing", standard: "4 / 4 mil (0.10mm)", advanced: "3 / 3 mil (0.075mm)", unit: "mil / mm" },
  { parameter: "Min Finished Hole Size", standard: "0.20mm (8 mil)", advanced: "0.15mm mechanical / 0.10mm laser microvia", unit: "mm" },
  { parameter: "Copper Thickness", standard: "1 oz (35 µm) / 2 oz", advanced: "Up to 6 oz Heavy Copper", unit: "oz" },
  { parameter: "Surface Finishes", standard: "Lead-Free HASL, ENIG", advanced: "ENIG (Gold 3u\"), ENEPIG, Immersion Silver, OSP, Hard Gold", unit: "Finish" },
  { parameter: "Solder Mask Colors", standard: "Green, Black, Blue, Red, White", advanced: "Matte Black, Aerospace Purple, High-Vis Yellow", unit: "Colors" },
  { parameter: "Impedance Control", standard: "±10% Standard", advanced: "±5% Precision Controlled Impedance (TDR Verified)", unit: "Tolerance" },
  { parameter: "SMT Component Pitch", standard: "0402 passives, 0.5mm IC", advanced: "01005 chips, 0.3mm BGA pitch, PoP package", unit: "Pitch" },
  { parameter: "Cleanroom Standard", standard: "ISO 9", advanced: "Class 100,000 / ISO 8 Certified Cleanroom", unit: "Class" },
  { parameter: "Inspection Standard", standard: "IPC-A-610 Class 2", advanced: "IPC-A-610 Class 3 (Aerospace & Spacecraft Flight)", unit: "Class" }
];

export const FAQS = [
  {
    question: "What files do I need to submit to receive an instant SriLin quote?",
    answer: "For bare PCB fabrication, provide RS-274X Gerber files and Excellon drill files in a .zip archive. For turnkey SMT assembly, include your Bill of Materials (BOM) in Excel or CSV format (specifying Designator, Quantity, Manufacturer Part Number MPN, and Package) plus the XY Pick-and-Place (Centroid) data.",
    category: "Quoting & DFM"
  },
  {
    question: "What is the turnaround time for prototype PCB assembly?",
    answer: "Our dedicated quick-turn cell provides 24-hour to 48-hour turnarounds for prototype SMT assemblies when components are consigned or available in our high-runner inventory. Production runs typically ship within 5 to 7 business days.",
    category: "Turnaround & Delivery"
  },
  {
    question: "Can SriLin source all electronic components (Full Turnkey)?",
    answer: "Yes. SriLin provides full turnkey procurement directly from authorized global franchise distributors including Mouser, Digi-Key, Arrow, and Avnet. We maintain strict Certificate of Conformance (CoC) records and ESD dry-storage protocols to eliminate counterfeit risks.",
    category: "Component Sourcing"
  },
  {
    question: "Are your manufacturing lines certified for Aerospace & Defense applications?",
    answer: "Yes. SriLin Electronics operates an AS9100D Rev D and ISO 9001:2015 certified facility in E-City EMC, Hyderabad. All operators are IPC-A-610 Class 3 certified, and we maintain complete lot traceability with non-destructive 160kV X-Ray and environmental burn-in screening.",
    category: "Quality & Compliance"
  },
  {
    question: "How does the environmental burn-in testing chamber work?",
    answer: "Our temperature-controlled thermal chambers operate from -40°C to +125°C. Assemblies undergo continuous operational thermal cycling under electrical load for periods ranging from 8 hours up to 240 hours to eliminate infant mortality and verify mil-spec mission reliability.",
    category: "Testing & Validation"
  },
  {
    question: "Do you support flexible and rigid-flex PCB assemblies?",
    answer: "Yes. We support single-sided, double-sided, and multi-layer flexible circuits (Polyimide substrate) as well as rigid-flex combinations with custom stiffeners (FR-4 or Stainless Steel) for aerospace avionics and medical wearables.",
    category: "Manufacturing Capabilities"
  }
];

export const CURRENCIES = {
  INR: { symbol: "₹", rate: 1, label: "INR (₹)" },
  USD: { symbol: "$", rate: 0.0116, label: "USD ($)" },
  EUR: { symbol: "€", rate: 0.0108, label: "EUR (€)" }
};

/**
 * Dynamic Pricing Algorithm mimicking JLCPCB transparent self-service calculation
 */
export function calculateQuote({
  serviceType = 'pcb', // 'pcb', 'pcba', 'boxbuild', 'testing'
  layers = 2,
  lengthMm = 100,
  widthMm = 100,
  quantity = 5,
  thickness = 1.6,
  material = 'FR-4',
  solderMask = 'Green',
  surfaceFinish = 'Lead-Free HASL',
  copperWeight = '1oz',
  isTurnkey = true,
  smdPartsCount = 20,
  thtPartsCount = 4,
  bgaInspection = true,
  conformalCoating = false,
  burnInHours = 0,
  currency = 'INR'
}) {
  const areaCm2 = (lengthMm * widthMm) / 100;
  
  // Base PCB Fab Cost
  let basePcbCost = 450; // Base INR setup
  
  // Layer multiplier
  const layerMultipliers = {
    1: 0.8,
    2: 1.0,
    4: 2.2,
    6: 3.8,
    8: 5.6,
    10: 7.8,
    12: 10.5,
    14: 13.5,
    16: 18.0
  };
  basePcbCost *= (layerMultipliers[layers] || 1.0);

  // Material surcharge
  if (material === 'High-TG FR-4') basePcbCost *= 1.25;
  if (material === 'Aluminum') basePcbCost *= 1.45;
  if (material === 'Rogers RF') basePcbCost *= 3.5;
  if (material === 'Flexible PI') basePcbCost *= 2.4;

  // Surface finish surcharge
  if (surfaceFinish === 'ENIG (Gold)') basePcbCost += (150 * (areaCm2 / 100) * (layers >= 4 ? 1.5 : 1));
  if (surfaceFinish === 'Immersion Silver') basePcbCost += 120;

  // Copper weight
  if (copperWeight === '2oz') basePcbCost *= 1.2;
  if (copperWeight === '3oz') basePcbCost *= 1.45;

  // Area & Quantity cost
  const unitBoardCost = (basePcbCost / 5) * (areaCm2 / 100);
  const totalPcbCost = (basePcbCost + (unitBoardCost * quantity));

  // SMT Assembly Calculation
  let totalSmtaCost = 0;
  let stencilCost = 0;
  if (serviceType === 'pcba' || serviceType === 'boxbuild' || serviceType === 'testing') {
    stencilCost = 1200; // Laser-cut stainless steel stencil
    const smdPlacementFee = smdPartsCount * 0.45 * quantity;
    const thtPlacementFee = thtPartsCount * 1.50 * quantity;
    const smtSetupFee = 1800; // Line feeder setup
    let xRayFee = bgaInspection ? 1500 : 0;
    let coatingFee = conformalCoating ? (120 * quantity) : 0;

    totalSmtaCost = stencilCost + smtSetupFee + smdPlacementFee + thtPlacementFee + xRayFee + coatingFee;
  }

  // Testing & Environmental Burn-in Calculation
  let testingCost = 0;
  if (burnInHours > 0) {
    testingCost += 1000 + (burnInHours * 80); // Chamber hourly cycle
  }
  if (serviceType === 'testing') {
    testingCost += 2500; // Comprehensive ICT & 3D AOI report
  }

  // Box Build Integration
  let boxBuildCost = 0;
  if (serviceType === 'boxbuild') {
    boxBuildCost = (2500 + (350 * quantity)); // Enclosure integration & cabling
  }

  const subtotalINR = Math.round(totalPcbCost + totalSmtaCost + testingCost + boxBuildCost);
  const rate = CURRENCIES[currency]?.rate || 1;
  const symbol = CURRENCIES[currency]?.symbol || '₹';

  // Lead time calculation
  let buildTimeDays = 2;
  if (layers >= 6) buildTimeDays += 2;
  if (serviceType === 'pcba') buildTimeDays += 1;
  if (burnInHours >= 72) buildTimeDays += 3;
  if (serviceType === 'boxbuild') buildTimeDays += 3;

  return {
    subtotal: (subtotalINR * rate).toFixed(2),
    rawINR: subtotalINR,
    currencySymbol: symbol,
    pcbPart: (totalPcbCost * rate).toFixed(2),
    smtaPart: (totalSmtaCost * rate).toFixed(2),
    stencilPart: (stencilCost * rate).toFixed(2),
    testingPart: (testingCost * rate).toFixed(2),
    boxBuildPart: (boxBuildCost * rate).toFixed(2),
    buildTime: `${buildTimeDays}-${buildTimeDays + 2} Days`,
    expressBuildTime: `${Math.max(1, buildTimeDays - 1)} Days`,
    unitPrice: ((subtotalINR / quantity) * rate).toFixed(2)
  };
}

/**
 * Authentic Leadership Team from srilinelectronics.com
 */
export const LEADERSHIP_TEAM = [
  {
    name: "Akhil Nandepu",
    role: "Managing Director & Chief Executive Officer (MD & CEO)",
    credentials: "IIM Indore • Amrita University B.Tech",
    experience: "12+ Years EMS Scaling",
    focus: "Strategy, Production Expansion & High-Reliability Defense EMS",
    bio: "Spearheaded SriLin's 6X growth, cleanroom capacity doubling, AS9100D aerospace certification, and strategic defense manufacturing programs. Instrumental in formalizing industry-academia MoUs with SR University and Vaagdevi College.",
    image: "https://res.cloudinary.com/dgyf0afim/image/upload/v1727786432/gyp5pwbxqdocv6oi2wrs.jpg"
  },
  {
    name: "Dr. Satyanarayana Vaddi",
    role: "Board Advisor — Strategy & Finance",
    credentials: "Stanford Seed • AIM NITI Aayog Mentor • Top 10 Leaders of Finance",
    experience: "25+ Years Global Financial & Industrial Strategy",
    focus: "Strategic Alliances, Institutional Capital & M&A Governance",
    bio: "Senior advisor guiding SriLin's strategic trajectory. Architect of the landmark tri-party electronics manufacturing agreement with INP Technologies and Creative NewTech (Honeywell distribution partner), and advisor on campus capital allocation.",
    image: "https://res.cloudinary.com/dgyf0afim/image/upload/v1727786432/siaqhtro5dylw1ex6cqj.jpg"
  },
  {
    name: "Nandepu Srinivas",
    role: "Chairman",
    credentials: "Industrialist • Former AP State Convenor",
    experience: "40+ Years Manufacturing & Enterprise Leadership",
    focus: "Corporate Governance, Statutory Compliance & Infrastructure",
    bio: "Founding chairman guiding SriLin's capital expenditure and high-volume industrial facilities at E-City EMC (Fabcity), Hyderabad, ensuring seamless operational alignment with Telangana state industrial policies.",
    image: "https://res.cloudinary.com/dgyf0afim/image/upload/v1727786432/r1fz3ahcvebhzihfqgoo.jpg"
  },
  {
    name: "Ram Reddy Palukuru",
    role: "Advisor — Technical Partnerships",
    credentials: "Ex-Vice President, OnePlus India",
    experience: "20+ Years Global Consumer Electronics & High-Density SMT",
    focus: "Smart Hardware Sourcing, Scale Manufacturing & Ecosystems",
    bio: "Brings extensive mobile communications and tier-1 high-density SMT manufacturing expertise to SriLin, advising on global supply chain resilience, automated component logistics, and high-mix volume delivery.",
    image: ""
  },
  {
    name: "Anil Hongal",
    role: "Advisor — Manufacturing Standards & Process Controls",
    credentials: "Ex-AVP, SMILE Electronics / Compaq / HP",
    experience: "35+ Years SMT Engineering & AS9100 Cleanroom Operations",
    focus: "IPC-A-610 Class 3 Process Window, DFM & Zero-Defect Protocols",
    bio: "Veteran electronics manufacturing director who oversaw aerospace-grade SMT production lines across India. Directs SriLin's ISO-8 cleanroom protocols, SMT CpK process metrics, and Koh Young 3D inspection standards.",
    image: ""
  },
  {
    name: "Dr. Venkata Subba Rao",
    role: "Advisor — Government & Defense Partnerships",
    credentials: "Former General Manager, Singareni Collieries",
    experience: "30+ Years Public Sector & Strategic Programs",
    focus: "Defense Offsets, Public Procurement & Industrial Alliances",
    bio: "Guides SriLin in public-private defense collaborations, DRDO/ISRO indigenous electronics programs, and compliance with statutory defense procurement frameworks.",
    image: ""
  }
];

/**
 * Proprietary OEM Hardware Systems from srilinelectronics.com
 */
export const OEM_PRODUCTS = [
  {
    id: "ai-adas-dms-camera",
    name: "AI ADAS + DMS Camera System",
    category: "Automotive Safety & Edge AI Vision",
    tagline: "Dual-Channel Integrated ADAS & Driver Monitoring Solution",
    badge: "Proprietary SriLin OEM Hardware",
    features: [
      { label: "Forward ADAS Camera", value: "1080P Full HD, 60fps HDR with lane departure & collision warning" },
      { label: "Cabin DMS Camera", value: "720P with 940nm IR night-vision LEDs for driver fatigue & gaze detection" },
      { label: "AI Processing Core", value: "Embedded Neural Processing Unit (NPU) with real-time on-device inference" },
      { label: "Telemetry & Sensor Fusion", value: "Built-in 6-Axis IMU (harsh braking, cornering) + High-Precision GPS/GLONASS" },
      { label: "Connectivity", value: "4G LTE Cat-4 Cellular Modem with emergency SOS trigger" },
      { label: "Automotive Grade", value: "AEC-Q100 qualified silicon, ISO 16750 environmental compliance" }
    ],
    description: "Designed and manufactured in-house at SriLin's Hyderabad facility. Combines automotive-grade vision sensors with embedded machine learning to deliver proactive fleet safety, driver fatigue alerting, and high-frequency incident telemetry.",
    image: "https://res.cloudinary.com/dgyf0afim/image/upload/v1727786432/xwhgfbqwesxb6u8rjgqf.jpg"
  }
];

/**
 * National Instruments LabVIEW Automated Test Systems (ATE)
 */
export const TEST_ENGINEERING_LABVIEW = {
  title: "National Instruments LabVIEW Automated Test Systems (ATE)",
  subtitle: "High-Throughput Functional Testing, DAQ & Custom Instrumentation Fixtures",
  platform: "National Instruments LabVIEW & PXI Architecture",
  description: "SriLin Electronics provides comprehensive Embedded Software and Automated Test Engineering. Our engineers develop dedicated LabVIEW automated test application suites that interface with digital oscilloscopes, multimeters, spectrum analyzers, and dynamic loads to guarantee 100% production functional compliance.",
  capabilities: [
    { title: "Automated Hardware Test Sequences", desc: "Reduces functional test cycle time from 15 mins to under 45 seconds per assembly with zero operator bias." },
    { title: "Multi-Instrument DAQ Integration", desc: "Automated control of Keysight, Rohde & Schwarz, and NI PXI instrumentation via GPIB, USB, and Ethernet (LXI)." },
    { title: "Real-Time Telemetry & Yield Logging", desc: "Every unit is serialized with parametric voltage, current, and RF metrics stored in a secure traceability database." },
    { title: "Custom Bed-of-Nails FCT Fixtures", desc: "In-house mechanical and pneumatic test fixture design tailored to customer PCB test points and conformal coating masks." }
  ]
};

/**
 * High-Level Milestones, Institutional Collaborations & Growth
 */
export const CORPORATE_MILESTONES = [
  {
    year: "2025 - 2026",
    title: "6X Revenue Growth & Cleanroom Expansion Milestone",
    highlight: "Doubled SMT Capacity to 200,000 CPH",
    description: "Celebrated an extraordinary milestone of 6X growth in FY 2025-26 under the leadership of MD & CEO Akhil Nandepu. Integrated advanced laser marking, ultrasonic welding, set up an expanded reliability burn-in room, and launched full concept-to-production design services.",
    badge: "6X Growth FY25-26"
  },
  {
    year: "2025",
    title: "Tri-Party Manufacturing Agreement with Honeywell Distribution Partner",
    highlight: "INP Technologies Ltd & Creative NewTech Ltd (Honeywell Partner)",
    description: "Signed a landmark tri-party agreement with INP Technologies and Creative NewTech (brand licensing partner for Honeywell International Inc) in collaboration with ACS Technologies. SriLin will manufacture the entire electronics product line for the collaborating partners.",
    badge: "Strategic Tri-Party EMS"
  },
  {
    year: "2025",
    title: "National Leadership & State R&D Centre Inauguration",
    highlight: "Hon'ble IT Minister Shri Sridhar Babu & Dr. G. Satheesh Reddy",
    description: "SriLin leadership shared the dais with Telangana Minister for IT & Electronics Shri D. Sridhar Babu garu and former DRDO Chief & Scientific Advisor to Raksha Mantri Dr. G. Satheesh Reddy garu at the new R&D Centre inauguration in Hyderabad.",
    badge: "Govt & Defense Recognition"
  },
  {
    year: "2025 - 2026",
    title: "Strategic Institutional Equity Partner & Campus Expansion",
    highlight: "214,000 Sq. Ft. Expansion Campus Funding",
    description: "Welcomed a reputed family office as an equity partner to fund the next-phase 214,000 sq ft adjacent campus expansion at E-City EMC, ensuring 8X manufacturing footprint without greenfield construction delays.",
    badge: "Equity Backed"
  },
  {
    year: "2025 - 2026",
    title: "Academic Alliances & Workforce Development MoUs",
    highlight: "SR University, Vaagdevi College & Malla Reddy College",
    description: "Signed formal MoUs with SR University and Vaagdevi Engineering College for industry-academia knowledge sharing, while hosting industrial cleanroom exposure visits for Malla Reddy College engineering students.",
    badge: "Industry-Academia MoUs"
  }
];

/**
 * Real-Time DFM Process Confidence Score Algorithm
 */
export function calculateDfmConfidence({
  layers = 2,
  minTraceMil = 4,
  surfaceFinish = 'Lead-Free HASL',
  bgaInspection = true,
  thickness = 1.6
}) {
  let score = 99.8;
  const factors = [];

  // Trace / Space risk
  if (minTraceMil <= 3) {
    score -= 3.2;
    factors.push({ rule: "3/3 mil Ultra-Fine Trace", status: "Requires LDI Laser Direct Imaging & micro-etch compensation", impact: "-3.2%" });
  } else {
    factors.push({ rule: "Standard Trace Clearance (≥4 mil)", status: "Optimal process capability window", impact: "+0.0%" });
  }

  // Aspect ratio risk (thickness / drill)
  const aspectRatio = thickness / 0.2;
  if (aspectRatio > 8) {
    score -= 1.8;
    factors.push({ rule: `High Aspect Ratio (${aspectRatio.toFixed(1)}:1)`, status: "Requires pulse electroplating in via holes", impact: "-1.8%" });
  }

  // Layer count
  if (layers >= 8) {
    score -= 1.2;
    factors.push({ rule: `${layers}-Layer Multi-Lamination`, status: "Sequential pressing with X-ray layer alignment", impact: "-1.2%" });
  }

  // Surface finish reliability
  if (surfaceFinish === 'ENIG (Gold)' || surfaceFinish.includes('Gold')) {
    score += 0.8;
    factors.push({ rule: "Electroless Nickel Immersion Gold (ENIG)", status: "Planar surface with superior SMT wetting", impact: "+0.8%" });
  }

  // Non-destructive inspection
  if (bgaInspection) {
    score += 1.4;
    factors.push({ rule: "160kV Nordson X-Ray CT Inspection", status: "Sub-micron voiding & bridging verification guaranteed", impact: "+1.4%" });
  } else {
    score -= 2.0;
    factors.push({ rule: "No Dedicated X-Ray Verification", status: "BGA/QFN hidden joints rely solely on automated optical inspection", impact: "-2.0%" });
  }

  const normalizedScore = Math.min(99.9, Math.max(92.0, score));

  return {
    score: normalizedScore.toFixed(1),
    processWindow: normalizedScore >= 98 ? "AS9100D Class 3 Guaranteed" : "IPC Class 2 Controlled",
    riskLevel: normalizedScore >= 98 ? "Low Risk (Standard Cleanroom Run)" : "Moderate Risk (Tight Tolerance Run)",
    factors
  };
}

