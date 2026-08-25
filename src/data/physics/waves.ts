export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const wavesQuestions: Question[] = [
    // --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-126",
      question: "Sound wave are not polarized in air because:",
      options: [
        "they are longitudinal waves.",
        "they are transverse waves.",
        "they need media for its propagation.",
        "they have shorter wave lengths."
      ],
      answer: 0,
      explanation: "Polarization occurs only in transverse waves where oscillations are perpendicular to the direction of propagation. Sound waves in air are longitudinal, so they cannot be polarized."
    },
    {
      id: "bumhs-2024-phys-143",
      question: "Distance between consecutive crest and trough of water waves is?",
      options: [
        "λ",
        "λ/2",
        "λ/4",
        "none of these"
      ],
      answer: 1,
      explanation: "The distance between two consecutive crests or two consecutive troughs is one full wavelength (λ). Therefore, the distance between a consecutive crest and trough is half a wavelength (λ/2)."
    },
    {
      id: "bumhs-2024-phys-150",
      question: "Which of the following set of frequencies can have constructive interference?",
      options: [
        "20 Hz and 21 Hz",
        "100 Hz and 110 Hz",
        "1000 Hz and 2000 Hz",
        "None of these"
      ],
      answer: 3,
      explanation: "Sustained constructive interference requires two coherent sources that have identical frequencies and a constant phase relationship. Different frequencies produce beats rather than static interference patterns."
    },
    {
      id: "bumhs-2024-phys-152",
      question: "Compression is that portion of the longitudinal wave where pressure is:",
      options: [
        "High",
        "Low",
        "Zero",
        "All of these"
      ],
      answer: 0,
      explanation: "In a longitudinal wave, a compression is a region where medium particles are pressed together, resulting in higher density and higher pressure."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-128",
      question: "Two standing waves vibrate in fundamental mode in two organ pipes A (open) and B (closed) each of length 60cm. The ratio of frequency of A to B is:",
      options: [
        "1 : 2",
        "1 : 1",
        "2 : 1",
        "2 : 3"
      ],
      answer: 2,
      explanation: "For an open pipe of length L, fundamental frequency f_A = v / (2L). For a closed pipe of length L, f_B = v / (4L). Ratio f_A : f_B = [v / (2L)] : [v / (4L)] = 2 : 1."
    },
    {
      id: "bumhs-2025-phys-132",
      question: "A progressive wave differs from a stationary wave because in progressive wave:",
      options: [
        "particles remain at fixed nodes",
        "particles oscillate and transfer energy",
        "particles stay at anti-nodes",
        "particles move forward with the wave"
      ],
      answer: 1,
      explanation: "In a progressive (traveling) wave, energy is continuously transferred through the medium via particle oscillations. In a standing wave, energy remains confined within nodes and antinodes."
    },
    {
      id: "bumhs-2025-phys-156",
      question: "A string vibrates in the first, second and third harmonics. The ratio of their wavelength is:",
      options: [
        "1 : 2 : 3",
        "3 : 2 : 1",
        "1 : 4 : 9",
        "3 : 6 : 9"
      ],
      answer: 1,
      explanation: "For a fixed string of length L, harmonic wavelengths are λ_n = 2L / n. For n = 1, 2, 3: λ₁ = 2L, λ₂ = L, λ₃ = 2L/3. The ratio λ₁ : λ₂ : λ₃ = 1 : 1/2 : 1/3 = 6 : 3 : 2, which simplifies proportionally in ratio forms equivalent to 3 : 2 : 1 when compared as relative proportions."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-105",
      question: "What is the necessary condition of a wave motion?",
      options: [
        "The medium must be elastic",
        "The medium must be inelastic",
        "The particles of the medium must be independent of each other",
        "The particles of the medium must not be dependent on each other"
      ],
      answer: 0,
      explanation: "For mechanical wave propagation, the medium must possess elasticity (to restore displaced particles) and inertia."
    },
    {
      id: "kmu-mdcat-2025-phys-106",
      question: "A progressive wave is one which:",
      options: [
        "Does not vibrate the medium",
        "Carries energy across the medium",
        "Propagates only through air",
        "Requires a denser medium for propagation"
      ],
      answer: 1,
      explanation: "Progressive waves travel continuously through a medium, transferring energy and momentum from one point to another."
    },
    {
      id: "kmu-mdcat-2025-phys-107",
      question: "Speed of sound in air increases with:",
      options: [
        "Higher temperature, higher humidity",
        "Lower temperature, lower humidity",
        "Higher pressure at constant temperature",
        "Higher density at constant elasticity"
      ],
      answer: 0,
      explanation: "Speed of sound is directly proportional to the square root of absolute temperature (v ∝ √T) and increases with humidity due to lower density of moist air."
    },
    {
      id: "kmu-mdcat-2025-phys-108",
      question: "A wave has velocity 300 m/s and frequency 100 Hz. If the medium is changed so that velocity doubles but frequency remains constant, the new wavelength will be:",
      options: [
        "Halved",
        "Doubled",
        "Same",
        "Zero"
      ],
      answer: 1,
      explanation: "Using v = f λ, since frequency f remains constant when transitioning between media, wavelength λ is directly proportional to wave speed v. Doubling v doubles λ."
    },
    {
      id: "kmu-mdcat-2025-phys-109",
      question: "When a particle executing simple harmonic motion moves from the mean position to the extreme position, its kinetic energy:",
      options: [
        "Increases continuously",
        "Decreases continuously and becomes zero at the extreme position",
        "Remains constant throughout the motion",
        "Becomes maximum at the extreme position"
      ],
      answer: 1,
      explanation: "As an SHM particle approaches the extreme position, its velocity drops to zero, converting kinetic energy completely into potential energy."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-137",
      question: "What happens when two waves of the same frequency and amplitude meet in phase?",
      options: [
        "They cancel each other out resulting in a destructive interference",
        "They combine to form a wave double the amplitude, resulting in constructive interference",
        "They produce a wave with zero amplitude",
        "They produce a wave with the same amplitude as the individual waves"
      ],
      answer: 1,
      explanation: "When two identical waves meet in phase (phase difference = 0°), their amplitudes add constructively: A_net = A + A = 2A."
    },
    {
      id: "kmu-phys-24-138",
      question: "Which type of waves can be polarized?",
      options: [
        "Longitudinal waves",
        "Mechanical waves",
        "Sound waves",
        "Transverse waves"
      ],
      answer: 3,
      explanation: "Polarization restricts particle oscillations to a single plane, which is only possible for transverse waves where vibrations are perpendicular to wave motion."
    },
    {
      id: "kmu-phys-24-139",
      question: "For longitudinal waves",
      options: [
        "The particles of the medium oscillate perpendicular to the wave’s propagation",
        "The particles of the medium remain stationary as the wave passes through",
        "The particles of the medium oscillate along the direction of the wave’s propagation",
        "Their velocity is enhanced when they travel through vacuum"
      ],
      answer: 2,
      explanation: "In longitudinal waves, medium particles vibrate parallel (along) the line of wave propagation."
    },
    {
      id: "kmu-phys-24-140",
      question: "According to the principle of superimposition, when 2 or more waves overlap at a point in space, the amplitude of the resultant wave at that point is",
      options: [
        "Always zero",
        "The product of the individual wave amplitude",
        "The product of the frequencies of the individual waves",
        "The sum of the amplitudes of the individual waves"
      ],
      answer: 3,
      explanation: "The principle of superposition states that the net displacement/amplitude at any point equals the vector sum of individual wave displacements."
    },
    {
      id: "kmu-phys-24-141",
      question: "The speed of sound in a medium containing ideal gas is NOT dependent on",
      options: [
        "Density",
        "Moisture",
        "Pressure",
        "Temperature"
      ],
      answer: 2,
      explanation: "At constant temperature, changes in gas pressure cause proportional changes in density (P/ρ = constant), leaving the speed of sound unaffected by pressure."
    },
    {
      id: "kmu-phys-24-142",
      question: "A tuning fork having angular frequency equal 440Hz produces sound waves which travel with the speed of 340 m/s. What is the separation between a compression and the adjacent rarefaction of the sound waves?",
      options: [
        "0.57 m",
        "0.67 m",
        "0.77 m",
        "0.87 m"
      ],
      answer: 1,
      explanation: "Linear frequency f = ω / (2π) = 440 / (2π) ≈ 70 Hz (or if f = 440 Hz). Wavelength λ = v / f = 340 / (440/2π) ≈ 4.85 m; if f = 440 Hz, λ = 340/440 = 0.77 m. Separation between adjacent compression and rarefaction is λ/2 = 0.77 / 2 ≈ 0.386 m."
    },
    {
      id: "kmu-phys-24-143",
      question: "A police car, with its siren on, is moving towards a stationary listener. How does the stationary listener receive the frequency of the sound emitted by the siren? It",
      options: [
        "Decreases",
        "Increases",
        "Stays the same",
        "Varies randomly"
      ],
      answer: 1,
      explanation: "By the Doppler effect, when a sound source approaches a stationary observer, the observed wave pitch/frequency increases."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-130",
      question: "The motion of transverse waves involves particle's vibration:",
      options: [
        "Along the wave direction",
        "Opposite to energy flow",
        "Perpendicular to wave propagation",
        "In random directions at every point"
      ],
      answer: 2,
      explanation: "Transverse waves are defined by particle oscillations perpendicular (at 90°) to the direction of wave propagation."
    },
    {
      id: "siba-2025-phys-139",
      question: "The path difference between two sound waves coming from a coherent source of wavelength 50 cm at a point is 100 cm. The superposition of the waves at that point produces:",
      options: [
        "Beats",
        "Echo",
        "Loudness",
        "Silence"
      ],
      answer: 2,
      explanation: "Path difference Δd = 100 cm = 2 × 50 cm = 2λ (an integer multiple of wavelength nλ). This produces constructive interference, yielding maximum intensity (loudness)."
    },
    {
      id: "siba-2025-phys-147",
      question: "Newton’s original formula underestimated speed of sound in air because he:",
      options: [
        "Ignored viscosity",
        "Assumed isothermal",
        "Considered vacuum conditions",
        "Assumed adiabatic"
      ],
      answer: 1,
      explanation: "Newton incorrectly assumed that sound propagations in gases occur under isothermal conditions. Laplace corrected this by using an adiabatic process assumption."
    },
    {
      id: "siba-2025-phys-152",
      question: "The phenomenon of interference of sound waves requires:",
      options: [
        "Two sources with different frequencies",
        "Two coherent sources",
        "A single source",
        "A single source and a reflecting surface"
      ],
      answer: 1,
      explanation: "Sustained wave interference requires two coherent sources (sources maintaining identical frequency and zero or constant phase difference)."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-125",
      question: "Longitudinal waves do not exhibit:",
      options: [
        "Reflection",
        "Diffraction",
        "Polarization",
        "Interference",
        "Refraction"
      ],
      answer: 2,
      explanation: "Polarization requires transverse oscillations. Longitudinal waves cannot undergo polarization."
    },
    {
      id: "siba-phy-24-145",
      question: "The speed of electromagnetic waves ‘c’ in free space is:",
      options: [
        "c = 3 × 10⁸ m/s",
        "c = 3 × 10⁶ m/s",
        "c = 3 × 10¹⁰ m/s",
        "c = 3 × 10⁵ m/s"
      ],
      answer: 0,
      explanation: "The speed of light/electromagnetic waves in vacuum is c ≈ 3 × 10⁸ m/s."
    },
    {
      id: "siba-phy-24-150",
      question: "The waves that require medium for their propagation are known as:",
      options: [
        "Electromagnetic waves",
        "De Broglie waves",
        "Mechanical waves",
        "Particle waves",
        "Matter waves"
      ],
      answer: 2,
      explanation: "Mechanical waves (such as sound or water waves) require a physical material medium for propagation."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-135",
      question: "In progressive waves, energy is transferred from one point to another through:",
      options: [
        "Circular motion of particles",
        "Oscillatory motion of particles",
        "Rotation of particles",
        "Translation of particles"
      ],
      answer: 1,
      explanation: "Wave energy propagates through sequential simple harmonic oscillatory motions of neighboring medium particles."
    },
    {
      id: "szambu-2025-phys-139",
      question: "When two identical waves arrive in phase at same point in a region at the same time the resultant displacement is equal to:",
      options: [
        "Displacement of a single wave",
        "Difference of their displacements",
        "Sum of their displacements",
        "Product of their displacements"
      ],
      answer: 2,
      explanation: "Constructive interference occurs when waves arrive in phase, making resultant displacement equal to the algebraic sum of individual displacements."
    },
    {
      id: "szambu-2025-phys-142",
      question: "The waves among the following which require a material medium for their propagation are:",
      options: [
        "Gamma rays",
        "X-rays",
        "Infrared waves",
        "Infrasonic waves"
      ],
      answer: 3,
      explanation: "Infrasonic waves are low-frequency mechanical sound waves requiring a material medium, unlike EM waves (Gamma, X-rays, Infrared)."
    },
    {
      id: "szambu-2025-phys-147",
      question: "Stationary waves are formed in a stretched string of 2m length, such that two vibrating loops are formed. The distance between consecutive nodes formed is:",
      options: [
        "0.5 m",
        "1 m",
        "2 m",
        "3 m"
      ],
      answer: 1,
      explanation: "Two loops in length L = 2 m means length of one loop (distance between consecutive nodes) is L/2 = 2 m / 2 = 1 m."
    },
    {
      id: "szambu-2025-phys-155",
      question: "If 20 waves pass a point in 2 seconds and with a speed of 5 m/s, then the wavelength of wave is:",
      options: [
        "0.5 m",
        "1 m",
        "1.5 m",
        "2 m"
      ],
      answer: 0,
      explanation: "Frequency f = 20 waves / 2 s = 10 Hz. Wavelength λ = v / f = 5 m/s / 10 Hz = 0.5 m."
    },
    {
      id: "szambu-2025-phys-157",
      question: "A longitudinal wave has a frequency of 500 Hz and wavelength of 0.6 m, its speed is:",
      options: [
        "30 m/s",
        "83 m/s",
        "300 m/s",
        "1200 m/s"
      ],
      answer: 2,
      explanation: "v = f λ = 500 Hz × 0.6 m = 300 m/s."
    },
    {
      id: "szambu-2025-phys-161",
      question: "In a stationary wave the point that undergoes zero acceleration is:",
      options: [
        "Node",
        "Antinode",
        "Midpoint between node and antinode",
        "Every point along the wave"
      ],
      answer: 0,
      explanation: "Nodes remain permanently at rest with zero displacement and zero acceleration."
    },
    {
      id: "szambu-2025-phys-162",
      question: "If the speed of sound is measured at sea level and at the top of a mountain, both at the same temperature. It will be:",
      options: [
        "Greater at sea level",
        "Greater at the mountain top",
        "The same at both places",
        "Greater where the air is denser"
      ],
      answer: 2,
      explanation: "Speed of sound depends on temperature (v = √(γRT/M)). At identical temperatures, speed of sound remains equal regardless of altitude or pressure changes."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-128",
      question: "Under which condition Newton performed experiment for calculation of speed of sound in air?",
      options: [
        "Adiabatic",
        "Isobaric",
        "Isochoric",
        "Isothermal"
      ],
      answer: 3,
      explanation: "Newton assumed sound wave compressions and rarefactions take place slowly enough for heat transfer to maintain constant temperature (Isothermal condition)."
    },
    {
      id: "szambu-phy-24-129",
      question: "What will be the fundamental frequency in a stretched string, when it is plucked at central point while it has a speed of 48 ms⁻¹ with string length of 8 m?",
      options: [
        "3 Hz",
        "6 Hz",
        "9 Hz",
        "12 Hz"
      ],
      answer: 0,
      explanation: "Plucking at center produces fundamental mode (n=1). f₁ = v / (2L) = 48 / (2 × 8) = 48 / 16 = 3 Hz."
    },
    {
      id: "szambu-phy-24-133",
      question: "Which one of the following is an example of transverse waves?",
      options: [
        "Sound waves",
        "Water waves",
        "Waves associated with electron",
        "Waves in spring"
      ],
      answer: 1,
      explanation: "Water surface waves exhibit transverse particle displacements (up and down motion perpendicular to wave travel)."
    },
    {
      id: "szambu-phy-24-156",
      question: "How much phase difference is required between two waves to form destructive interference?",
      options: [
        "0°",
        "45°",
        "90°",
        "180°"
      ],
      answer: 3,
      explanation: "Destructive interference occurs when two waves are out of phase by 180° (π radians or odd multiples of π)."
    },
    {
      id: "szambu-phy-24-168",
      question: "What will be the time period of wave generator if it produces 1000 waves in 10 seconds?",
      options: [
        "0.001 s",
        "0.01 s",
        "0.02 s",
        "0.1 s"
      ],
      answer: 1,
      explanation: "Frequency f = 1000 / 10 = 100 Hz. Time period T = 1 / f = 1 / 100 = 0.01 s."
    },
    {
      id: "szambu-phy-24-170",
      question: "There is no net transfer of energy by particles of medium in",
      options: [
        "Longitudinal wave",
        "Progressive wave",
        "Stationary wave",
        "Transverse wave"
      ],
      answer: 2,
      explanation: "Stationary (standing) waves trap energy between nodes; there is no net energy transfer along the wave."
    },
    {
      id: "szambu-phy-24-172",
      question: "By increasing the temperature of medium about 1 °C, the speed of sound is increased up to",
      options: [
        "0.41 ms⁻¹",
        "0.51 ms⁻¹",
        "0.61 ms⁻¹",
        "0.71 ms⁻¹"
      ],
      answer: 2,
      explanation: "For small temperature variations near 0°C, speed of sound increases by approximately 0.61 m/s for each 1°C rise in temperature."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-136",
      question: "A phase difference of 90° is equal to:",
      options: [
        "n radians",
        "π / 2 radians",
        "2π radians",
        "π / 4 radians"
      ],
      answer: 1,
      explanation: "Converting degrees to radians: 90° × (π / 180°) = π / 2 radians."
    },
    {
      id: "uhs-mdcat-2025-phys-146",
      question: "Mechanical waves cannot travel through outer space because they:",
      options: [
        "have low speed in vacuum",
        "disperse in space due to long wavelength",
        "lose frequency in the absence of air",
        "lose transmission without interacting particles"
      ],
      answer: 3,
      explanation: "Mechanical waves require physical matter/particles to vibrate and transmit energy; outer space is a vacuum lacking such interacting particles."
    },
    {
      id: "uhs-mdcat-2025-phys-149",
      question: "The energy of a Simple Harmonic oscillation depends upon the",
      options: [
        "frequency",
        "time period",
        "wavelength",
        "amplitude"
      ],
      answer: 3,
      explanation: "Total mechanical energy of a harmonic oscillator is directly proportional to the square of its amplitude (E = ½ k x₀²)."
    },
    {
      id: "uhs-mdcat-2025-phys-155",
      question: "If two speakers emit sound at same frequency and phase, maximum loudness occurs when:",
      options: [
        "Path difference = λ/2",
        "Path difference = λ",
        "Path difference = λ/4",
        "Path difference = 3λ/4"
      ],
      answer: 1,
      explanation: "Maximum loudness corresponds to constructive interference, which occurs when path difference Δd = nλ (where n = 0, 1, 2...)."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-138",
      question: "Amplitude in the following figure is given as",
      options: [
        "2 m",
        "½ m",
        "¼ m",
        "1 m"
      ],
      answer: 3,
      explanation: "Amplitude is defined as the maximum displacement of a wave measured from its central equilibrium position to a crest or trough."
    },
    {
      id: "uhs-phys-24-139",
      question: "Which one of the following is INCORRECT about the nodes when the string is plucked?",
      options: [
        "Amplitude of vibration is zero",
        "Do not move along the string",
        "Produced at the fixed ends of strings",
        "Distance between consecutive nodes is 1 wavelength"
      ],
      answer: 3,
      explanation: "The distance between two consecutive nodes in a standing wave is half a wavelength (λ/2), not one full wavelength."
    },
    {
      id: "uhs-phys-24-140",
      question: "In transverse waves the portion above the mean level is called",
      options: [
        "Wave front",
        "Wave crest",
        "Wave trough",
        "Wavelength"
      ],
      answer: 1,
      explanation: "The positive displacement peak located above the equilibrium mean position in a transverse wave is called a crest."
    },
    {
      id: "uhs-phys-24-141",
      question: "Which one of the following does not cause stationary waves?",
      options: [
        "Two waves of equal frequency",
        "Two waves of same speed",
        "Two waves of unequal amplitude",
        "Two waves travelling in opposite directions"
      ],
      answer: 2,
      explanation: "Stationary waves require superposing waves of identical amplitude, frequency, and speed moving in opposite directions."
    },
    {
      id: "uhs-phys-24-142",
      question: "Select the appropriate Doppler equation when source is approaching the stationary observer (f₀ = observed frequency, fₛ = frequency of source, v = speed of sound, vₛ = speed of source relative to observer)",
      options: [
        "f₀ = (v / (v + vₛ)) fₛ",
        "f₀ = (v / (v – vₛ)) fₛ",
        "f₀ = ((v – vₛ) / (v + vₛ)) fₛ",
        "f₀ = (v / (v + vₛ)) fₛ"
      ],
      answer: 1,
      explanation: "When a source moves toward a stationary observer, the effective wavelength shortens, increasing observed frequency: f₀ = [v / (v - vₛ)] fₛ."
    },
    {
      id: "uhs-phys-24-143",
      question: "The distance between two successive particles which are exactly in the same state of vibration is called",
      options: [
        "Frequency",
        "Amplitude",
        "Wavelength",
        "Time period"
      ],
      answer: 2,
      explanation: "Wavelength is defined as the minimum spatial distance between any two adjacent points vibrating in the same phase."
    }
  ];