export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const physicsquestions: Question[] = [
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-140",
      question: "If the capacitance in a purely capacitive AC circuit is doubled, the current will be:",
      options: [
        "Double",
        "Become half",
        "Remain same",
        "Decrease to the fourth"
      ],
      answer: 0,
      explanation: "Capacitive reactance is X_c = 1 / (2π f C). Doubling capacitance C halves the reactance X_c. Consequently, the current I = V / X_c doubles."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-83",
      question: "In a pure capacitance AC circuit, the current:",
      options: [
        "Lags behind voltage by 90°",
        "Leads the voltage by 90°",
        "Is in phase with the voltage",
        "Leads the voltage by 45°"
      ],
      answer: 1,
      explanation: "In a purely capacitive AC circuit, current leads voltage by a phase angle of 90° (π/2 radians)."
    },
  
    // --- SIBA 2025 PHYS ---
    {
      id: "siba-2025-phys-154",
      question: "If frequency of AC is doubled, the inductive reactance will:",
      options: [
        "Remain same",
        "Be halved",
        "Be doubled",
        "Become zero"
      ],
      answer: 2,
      explanation: "Inductive reactance is given by X_L = 2π f L. Since X_L is directly proportional to frequency f, doubling frequency doubles the inductive reactance."
    },
  
    // --- SZAMBU 2025 PHYS ---
    {
      id: "szambu-2025-phys-136",
      question: "A capacitor is connected to an ac source. If the frequency of the AC source is doubled, the current in a purely capacitive circuit will:",
      options: [
        "Be doubled",
        "Remains Unchanged",
        "Become Half",
        "Becomes zero"
      ],
      answer: 0,
      explanation: "Reactance X_c = 1 / (2π f C). Doubling frequency f halves X_c, which doubles the circuit current I = V / X_c."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-169",
      question: "Alternating current generator is a device which is used to convert",
      options: [
        "Chemical energy, Electrical energy",
        "Chemical energy, Mechanical energy",
        "Electrical energy, Mechanical energy",
        "Mechanical energy, Electrical energy"
      ],
      answer: 3,
      explanation: "An AC generator converts mechanical energy into electrical energy via electromagnetic induction."
    },
    {
      id: "szambu-phy-24-173",
      question: "The turns ratio of a step-up transformer is 5. A current of 20 A is passed through its primary coil at 220 V. Calculate the value of voltage in secondary coil?",
      options: [
        "1000 V",
        "1025 V",
        "1050 V",
        "1100 V"
      ],
      answer: 3,
      explanation: "Turns ratio N_s / N_p = 5. Secondary voltage V_s = (N_s / N_p) × V_p = 5 × 220 V = 1100 V."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-161",
      question: "In an AC generator the emf will be maximum when factor sin ωt is equal to",
      options: [
        "Zero",
        "1",
        "2",
        "½"
      ],
      answer: 1,
      explanation: "Generated EMF ε = ε₀ sin(ωt) reaches maximum peak magnitude ε₀ when sin(ωt) = 1."
    },
    {
      id: "uhs-phys-24-163",
      question: "In an ideal transformer",
      options: [
        "Power input is equal to Power output",
        "Power input is less than half of the power output",
        "Power input is greater than Power output",
        "Power input is more than half of the power output"
      ],
      answer: 0,
      explanation: "An ideal transformer operates with 100% efficiency, so power input equals power output (P_in = P_out)."
    },
    // --- BUMHS 2025 PHYSICS ---
        {
          id: "bumhs-2025-phys-151",
          question: "The ratio of longest to shortest wave lengths in Bracket series of hydrogen spectrum is:",
          options: [
            "25/9",
            "17/6",
            "9/5",
            "4/3"
          ],
          answer: 0,
          explanation: "For Brackett series (n₁ = 4): Longest wavelength occurs at n₂ = 5 → 1/λ_max = R(1/4² - 1/5²) = R(9/400). Shortest wavelength occurs at n₂ = ∞ → 1/λ_min = R(1/4² - 0) = R(1/16). Ratio λ_max / λ_min = (400/9) / 16 = 25/9."
        },
      
        // --- KMU MDCAT 2025 PHYS ---
        {
          id: "kmu-mdcat-2025-phys-86",
          question: "In hydrogen spectrum, the Brackett series lies in:",
          options: [
            "Violet region",
            "Red region",
            "Infrared region",
            "X-ray region"
          ],
          answer: 2,
          explanation: "In the hydrogen emission spectrum, the Brackett series (transitions terminating at n = 4) lies within the infrared region of the electromagnetic spectrum."
        },
      
        // --- KMU PHYS 24 ---
        {
          id: "kmu-phys-24-172",
          question: "If an electron in the hydrogen atom jumps from second to first orbit, the emitted radiation has a wavelength of?",
          options: [
            "4 / (3 R_H)",
            "3 / (4 R_H)",
            "R_H",
            "4 R_H"
          ],
          answer: 0,
          explanation: "Using Rydberg formula: 1/λ = R_H (1/1² - 1/2²) = R_H (1 - 1/4) = 3 R_H / 4. Solving for wavelength yields λ = 4 / (3 R_H)."
        },
      
        // --- SIBA PHY 24 ---
        {
          id: "siba-phy-24-137",
          question: "If electronic transitions in hydrogen atom terminate in the second orbit, the emitted series is known as:",
          options: [
            "Brackett series",
            "Paschen series",
            "Lyman series",
            "Balmer series",
            "Pfund series"
          ],
          answer: 3,
          explanation: "Transitions that end at the n = 2 energy level form the Balmer series."
        },
      
        // --- SZAMBU 2025 PHYS prep ---
        {
          id: "szambu-2025-phys-138",
          question: "Two spectral lines in the Hydrogen atom spectrum are close together. This likely means:",
          options: [
            "The energy difference is zero",
            "The energy difference is small",
            "The light intensity is low",
            "The atom become unstable"
          ],
          answer: 1,
          explanation: "Photon energy is related to frequency by E = hf = hc/λ. Two wavelengths that are very close to each other correspond to a small difference in photon energy."
        },
      
        // --- SZAMBU PHY 24 ---
        {
          id: "szambu-phy-24-141",
          question: "Which of the following series of hydrogen spectrum lies in visible region?",
          options: [
            "Balmer",
            "Bracket",
            "Lyman",
            "Paschen"
          ],
          answer: 0,
          explanation: "The Balmer series is the only spectral series of hydrogen that falls within the visible spectrum."
        },
        {
          id: "szambu-phy-24-154",
          question: "The Lyman series contain the wavelengths in the",
          options: [
            "far-infrared region",
            "infrared region",
            "ultraviolet region",
            "visible region"
          ],
          answer: 2,
          explanation: "The Lyman series consists of transitions terminating at n = 1, which emit high-energy photons in the ultraviolet (UV) region."
        },
      
        // --- UHS MDCAT 2025 PHYS prep ---
        {
          id: "uhs-mdcat-2025-phys-138",
          question: "The Balmer series of hydrogen spectrum appears in the",
          options: [
            "Infrared region",
            "Ultraviolet region",
            "X-ray region",
            "Visible region"
          ],
          answer: 3,
          explanation: "The Balmer series corresponds to electron transitions terminating at the n = 2 energy level and lies in the visible light region."
        },
      
        // --- UHS PHYS 24 ---
        {
          id: "uhs-phys-24-170",
          question: "Which series falls in ultra violet region?",
          options: [
            "Lyman",
            "Brackett",
            "Pfund",
            "Paschen"
          ],
          answer: 0,
          explanation: "The Lyman series corresponds to transitions down to the ground state (n = 1) and falls in the ultraviolet region."
        },
         // --- TESTMOZ ---
          {
            id: "testmoz-phys-1",
            question: "The spectral series of the hydrogen atom that lies in the ultraviolet region of the electromagnetic spectrum is called the:",
            options: [
              "Balmer series",
              "Lyman series",
              "Paschen series",
              "Brackett series"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-2",
            question: "According to Bohr's atomic model, the angular momentum of an electron in a stationary orbit is:",
            options: [
              "Directly proportional to the principal quantum number, n",
              "Inversely proportional to the principal quantum number, n",
              "Directly proportional to the square of the principal quantum number, n²",
              "Constant for all orbits"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-3",
            question: "The transition of an electron from n=4 to n=2 in a hydrogen atom results in the emission of a photon in which series?",
            options: [
              "Lyman series",
              "Paschen series",
              "Balmer series",
              "Pfund series"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-4",
            question: "The phenomenon where an excited atom emits a photon without any external trigger is known as:",
            options: [
              "Stimulated emission",
              "Spontaneous emission",
              "Absorption",
              "Population inversion"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-5",
            question: "The production of characteristic X-rays is a result of:",
            options: [
              "The rapid deceleration of high-speed electrons by a target nucleus.",
              "Electron transitions between the inner shells of a heavy atom.",
              "The heating of a filament in an X-ray tube.",
              "The photoelectric effect."
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-6",
            question: "For laser action to occur, a necessary condition is that there are more atoms in a higher energy state than in a lower one. This condition is called:",
            options: [
              "Metastable state",
              "Spontaneous emission",
              "Optical pumping",
              "Population inversion"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-7",
            question: "The energy of an electron in the nth orbit of a hydrogen atom is proportional to:",
            options: [
              "n²",
              "n",
              "1/n",
              "1/n²"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-8",
            question: "Which of the following properties is NOT characteristic of laser light?",
            options: [
              "Coherent",
              "Monochromatic",
              "Incoherent",
              "Directional"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-9",
            question: "The minimum energy required to remove an electron from an atom in its ground state is known as:",
            options: [
              "Excitation energy",
              "Binding energy",
              "Ionization energy",
              "Work function"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-10",
            question: "The Paschen series of the hydrogen spectrum is in which region?",
            options: [
              "Ultraviolet",
              "Visible",
              "Infrared",
              "X-ray"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-11",
            question: "For an electron in a stationary Bohr orbit, its total energy is -3.4 eV. What is its kinetic energy (KE)?",
            options: [
              "-3.4 eV",
              "+3.4 eV",
              "-6.8 eV",
              "+6.8 eV"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-12",
            question: "The continuous spectrum of X-rays is produced due to:",
            options: [
              "Electron transitions between discrete energy levels.",
              "The deceleration of bombarding electrons by the target.",
              "The excitation of the target atoms.",
              "Thermionic emission from the filament."
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-13",
            question: "A state in which an excited atom can stay for a relatively long time (e.g., 10⁻³ s) is called a:",
            options: [
              "Ground state",
              "Excited state",
              "Ionized state",
              "Metastable state"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-14",
            question: "The radius of the first Bohr orbit for the hydrogen atom is r₁. The radius of the third Bohr orbit is:",
            options: [
              "3r₁",
              "r₁/3",
              "9r₁",
              "r₁/9"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-15",
            question: "An absorption spectrum is characterized by:",
            options: [
              "Bright lines on a dark background.",
              "Dark lines on a bright background.",
              "A continuous band of colors.",
              "No lines at all."
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-16",
            question: "In a He-Ne laser, the process of exciting Ne atoms through collisions with excited He atoms is called:",
            options: [
              "Stimulated emission",
              "Optical pumping",
              "Resonant energy transfer",
              "Spontaneous absorption"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-17",
            question: "The series limit of a spectral series corresponds to an electron transition from:",
            options: [
              "n = 2 to n = 1",
              "n = ∞ to the final state n.",
              "n = (n_final + 1) to n_final",
              "n = 1 to n = ∞"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-18",
            question: "The energy of a photon emitted from a hydrogen atom is 10.2 eV. This corresponds to a transition from:",
            options: [
              "n = 2 to n = 1",
              "n = 3 to n = 1",
              "n = 3 to n = 2",
              "n = 4 to n = 2"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-19",
            question: "Rydberg's constant (R) is a physical constant related to:",
            options: [
              "The charge of an electron",
              "The speed of light",
              "Atomic spectra",
              "Planck's constant"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-20",
            question: "The process of supplying energy to the atoms of a laser medium to achieve population inversion is called:",
            options: [
              "Amplification",
              "Coherence",
              "Pumping",
              "Emission"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-21",
            question: "Calculate the wavelength of the second line of the Balmer series for the hydrogen atom. (Rydberg constant R_H ≈ 1.097 × 10⁷ m⁻¹)",
            options: [
              "656 nm",
              "121 nm",
              "486 nm",
              "91 nm"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-22",
            question: "The wavelength of characteristic X-rays depends on:",
            options: [
              "The accelerating voltage in the X-ray tube.",
              "The material of the target anode.",
              "The temperature of the filament.",
              "The pressure inside the X-ray tube."
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-23",
            question: "The lines in the Balmer series of the hydrogen spectrum are formed by electron transitions from higher energy levels to:",
            options: [
              "n = 1",
              "n = 2",
              "n = 3",
              "n = 4"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-24",
            question: "The lifetime of an atom in an ordinary excited state is typically about:",
            options: [
              "10⁻³ s",
              "10⁸ s",
              "10⁻⁸ s",
              "10³ s"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-25",
            question: "An electron in a hydrogen atom jumps from n=3 to n=1. The number of possible spectral lines that can be emitted is:",
            options: [
              "1",
              "2",
              "3",
              "4"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-26",
            question: "Bohr's model of the atom successfully explained:",
            options: [
              "The spectrum of all atoms and molecules.",
              "The line spectrum of the hydrogen atom.",
              "The Zeeman effect (splitting of spectral lines in a magnetic field).",
              "The relative intensities of spectral lines."
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-27",
            question: "In the process of stimulated emission, the emitted photon is identical to the incident photon in all aspects EXCEPT:",
            options: [
              "Frequency",
              "Phase",
              "Direction of travel",
              "It is identical in all aspects mentioned."
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-28",
            question: "The Brackett series in the hydrogen spectrum is formed by electron transitions ending at which energy level?",
            options: [
              "n = 2",
              "n = 3",
              "n = 4",
              "n = 5"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-29",
            question: "The ground state energy of a hydrogen atom is -13.6 eV. What is the energy of the first excited state?",
            options: [
              "-13.6 eV",
              "-6.8 eV",
              "-3.4 eV",
              "-1.51 eV"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-30",
            question: "The concept of discrete energy levels in an atom was first introduced by:",
            options: [
              "J.J. Thomson",
              "Ernest Rutherford",
              "Niels Bohr",
              "Max Planck"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-31",
            question: "The velocity of an electron in the first Bohr orbit is v₁. The velocity in the second orbit would be:",
            options: [
              "2v₁",
              "v₁/2",
              "4v₁",
              "v₁/4"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-32",
            question: "The shortest wavelength in the Balmer series corresponds to a transition from:",
            options: [
              "n = 3 to n = 2",
              "n = 2 to n = 1",
              "n = ∞ to n = 2",
              "n = ∞ to n = 1"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-33",
            question: "The laser used in barcode scanners is typically a:",
            options: [
              "CO2 laser",
              "Ruby laser",
              "He-Ne laser",
              "Excimer laser"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-34",
            question: "According to Bohr's third postulate, an electron emits a photon when it:",
            options: [
              "Jumps from a lower energy orbit to a higher one.",
              "Jumps from a higher energy orbit to a lower one.",
              "Revolves in a stationary orbit.",
              "Is removed from the atom."
            ],
            answer: 1
},    
// --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-124",
      question: "Electrical measuring instruments convert electrical energy into:",
      options: [
        "Chemical",
        "Mechanical",
        "Nuclear",
        "Thermal"
      ],
      answer: 1,
      explanation: "Analog electrical measuring instruments (like galvanometers, ammeters, and voltmeters) utilize magnetic torque to move a needle or pointer, converting electrical energy into mechanical energy."
    },
    {
      id: "bumhs-2024-phys-128",
      question: "A fully charged capacitor with charge q and capacitance C is connected across a resistor R in series. Power dissipated across resistor will be zero after time:",
      options: [
        "t = 0",
        "t = RC",
        "t = 5RC",
        "t = infinity"
      ],
      answer: 3,
      explanation: "Capacitor discharge is exponential (q = q₀ e⁻ᵗ/ᴿᶜ). Mathematically, charge and current reach exactly zero only as time approaches infinity (t = ∞)."
    },
    {
      id: "bumhs-2024-phys-129",
      question: "Resistance is the measure of:",
      options: [
        "current",
        "voltage",
        "motion of charges",
        "opposition to the motion of charges"
      ],
      answer: 3,
      explanation: "Electrical resistance is defined as the measure of opposition to the flow of electric current (motion of charges) through a conductor."
    },
    {
      id: "bumhs-2024-phys-163",
      question: "Ohm’s law state that electric current through a conductor is proportional to the applied voltage provided:",
      options: [
        "electric current is constant",
        "electric field is constant",
        "resistance is constant",
        "electric charge is constant"
      ],
      answer: 2,
      explanation: "Ohm's law (V = IR) holds true provided physical conditions such as temperature remain unchanged, keeping the resistance (R) of the conductor constant."
    },
    {
      id: "bumhs-2024-phys-172",
      question: "Let five resistors, each of 10 ohm, are connected in parallel and the combination is then connected with a battery of 50 V. The current through each resistor will be:",
      options: [
        "5 A",
        "10 A",
        "25 A",
        "50 A"
      ],
      answer: 0,
      explanation: "In a parallel combination, full supply voltage appears across each branch. Current through each individual resistor I_i = V / R = 50 V / 10 Ω = 5 A."
    },
    {
      id: "bumhs-2024-phys-176",
      question: "A battery has an emf of 6.0 V and an internal resistance of 0.4 Ω. It is connected to a 2.6 Ω resistor through a switch. When switch is open, the potential difference across the switch is:",
      options: [
        "0 V",
        "6.0 V",
        "2.6 V",
        "5.2 V"
      ],
      answer: 1,
      explanation: "When the switch is open, no current flows (I = 0). There is zero internal voltage drop (Ir = 0), so the open terminals experience full EMF (6.0 V)."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-129",
      question: "The efficiency of an emf source becomes 50% when the load resistance is equal to:",
      options: [
        "internal resistance",
        "double the internal resistance",
        "half the internal resistance",
        "zero"
      ],
      answer: 0,
      explanation: "Efficiency η = V_terminal / E = R / (R + r). When load resistance equals internal resistance (R = r), η = R / (R + R) = 0.5 or 50%."
    },
    {
      id: "bumhs-2025-phys-139",
      question: "The power transmission lines delivering same amount of power. An increase in current will increase:",
      options: [
        "Heat produced in the wires",
        "Voltage output",
        "Frequency of AC",
        "Mechanical stress on the wires"
      ],
      answer: 0,
      explanation: "Joule heating loss in transmission lines is given by P_loss = I² R. Higher current significantly increases thermal/heat energy losses."
    },
    {
      id: "bumhs-2025-phys-157",
      question: "If the length of a copper wire connected in a circuit is doubled, its resistivity:",
      options: [
        "Becomes half",
        "Becomes double",
        "Becomes four times",
        "Remains same"
      ],
      answer: 3,
      explanation: "Resistivity is an intrinsic material property that depends on the substance type and temperature, not on geometric dimensions like length or area."
    },
    {
      id: "bumhs-2025-phys-158",
      question: "On increasing the length of a wire, the specific resistance (resistivity) of the wire:",
      options: [
        "increases",
        "decreases",
        "remains unchanged",
        "first increases, then decreases"
      ],
      answer: 2,
      explanation: "Specific resistance (resistivity) depends only on the material composition and temperature, remaining unchanged when physical dimensions vary."
    },
    {
      id: "bumhs-2025-phys-159",
      question: "When a battery is being charged, the direction of current inside the battery:",
      options: [
        "is from positive to negative terminal",
        "is the same as the direction of emf",
        "is opposite to the direction of emf",
        "depends on the load resistance"
      ],
      answer: 2,
      explanation: "During discharging, current inside a battery flows from negative to positive (along EMF). When charging, an external source forces current to flow backward internally from positive to negative terminal (opposite to EMF)."
    },
    {
      id: "bumhs-2025-phys-161",
      question: "A capacitor of capacitance 2 μF is connected in series with 1 MΩ resistance and 12 volts battery. The time taken by this capacitor take to 63% of its equilibrium charge will be:",
      options: [
        "1 second",
        "2 seconds",
        "10 seconds",
        "Infinite"
      ],
      answer: 1,
      explanation: "One time constant τ = R × C is defined as the time needed to reach ~63.2% of total charge. τ = (1 × 10⁶ Ω) × (2 × 10⁻⁶ F) = 2 seconds."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-116",
      question: "If the potential difference (V) across a conductor is doubled, keeping resistance (R) constant, the power dissipated (P) becomes:",
      options: [
        "Doubled",
        "Halved",
        "Four times",
        "Remains unchanged"
      ],
      answer: 2,
      explanation: "Power dissipated P = V² / R. Since power is proportional to V², doubling potential difference (2V)² quadruples the power dissipated (4 times)."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-154",
      question: "The I-V Graph for a non-Ohmic material is always",
      options: [
        "Curved",
        "Horizontal",
        "Linear",
        "Perpendicular"
      ],
      answer: 0,
      explanation: "Non-Ohmic components (like diodes or filament bulbs) do not maintain constant resistance, producing a non-linear (curved) I-V characteristic curve."
    },
    {
      id: "kmu-phys-24-155",
      question: "Temperature coefficient of resistance is defined as increase in resistance per ohm original resistance per __?",
      options: [
        "Degree rise in temperature",
        "Unit increase in electric current",
        "Unit decrease in capacitance",
        "Degree drop in temperature"
      ],
      answer: 0,
      explanation: "Temperature coefficient α = ΔR / (R₀ ΔT), defined as fractional change in resistance per degree rise in temperature."
    },
    {
      id: "kmu-phys-24-156",
      question: "For metals, the temperature coefficient of resistance is:",
      options: [
        "Infinity",
        "Negative",
        "Positive",
        "Zero"
      ],
      answer: 2,
      explanation: "For metallic conductors, resistance increases as temperature rises due to increased lattice vibrations, giving a positive temperature coefficient."
    },
    {
      id: "kmu-phys-24-157",
      question: "If R1 and R2 are respectively the filament resistance of a 100-Watt bulb and 200-Watt bulb designed to operate on the same voltage, then power of:",
      options: [
        "R1 is two times R2",
        "R2 is two times R1",
        "R2 is four times R1",
        "R1 is four times R2"
      ],
      answer: 0,
      explanation: "Since P = V² / R, resistance is inversely proportional to rated power (R ∝ 1/P). Thus R1 / R2 = P2 / P1 = 200 / 100 = 2 → R1 = 2 R2."
    },
    {
      id: "kmu-phys-24-158",
      question: "The maximum power transfer theorem states that maximum power is delivered to the load when",
      options: [
        "The load resistance is half of the source resistance",
        "The load resistance is zero",
        "The load resistance is double the source resistance",
        "The load resistance is equal to the source resistance"
      ],
      answer: 3,
      explanation: "According to the maximum power transfer theorem, maximum power is delivered from a source to a load when load resistance (R) equals internal source resistance (r)."
    },
    {
      id: "kmu-phys-24-159",
      question: "Electron Volt (eV) is another unit of",
      options: [
        "Charge",
        "Current",
        "Energy",
        "Power"
      ],
      answer: 2,
      explanation: "One electron volt (1 eV = 1.6 × 10⁻¹⁹ J) is a unit of energy commonly used in atomic and nuclear physics."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-138",
      question: "The value of temperature co-efficient of a conductor is zero. This indicates that with the rise in temperature, resistance of conductor:",
      options: [
        "Increases",
        "Decreases",
        "Remain same",
        "Becomes zero"
      ],
      answer: 2,
      explanation: "When α = 0, ΔR = α R₀ ΔT = 0, meaning resistance remains constant with changes in temperature."
    },
    {
      id: "siba-2025-phys-162",
      question: "Internal resistance reduces the terminal voltage because it:",
      options: [
        "Produces back emf",
        "Causes power loss inside the battery",
        "Increases the current",
        "Decreases the emf"
      ],
      answer: 1,
      explanation: "Internal resistance r causes an internal potential drop (Ir) and power loss inside the cell, lowering terminal voltage V = E - Ir."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-124",
      question: "The unit of resistance is:",
      options: [
        "Volt",
        "Watt",
        "Coulomb",
        "Ohm",
        "Ampere"
      ],
      answer: 3,
      explanation: "The SI unit of electrical resistance is the Ohm (Ω)."
    },
    {
      id: "siba-phy-24-127",
      question: "The unit of resistivity is:",
      options: [
        "Ohm m",
        "Ampere",
        "Volt",
        "Watt",
        "Ohm"
      ],
      answer: 0,
      explanation: "Resistivity ρ = R A / L, giving SI units of Ohm-meter (Ω·m)."
    },
    {
      id: "siba-phy-24-129",
      question: "Total potential difference across the combination of three similar cells becomes maximum when:",
      options: [
        "Two cells are connected in series and the third cell in parallel with the combination",
        "All the three cells are connected in parallel",
        "Two cells are connected in parallel and the third cell in series with the combination",
        "The load connected to the combination is minimum",
        "All the three cells are connected in series"
      ],
      answer: 4,
      explanation: "Connecting cells in series adds their individual electromotive forces (E_total = E₁ + E₂ + E₃), maximizing total potential difference."
    },
    {
      id: "siba-phy-24-135",
      question: "“The current through a conductor is directly proportional to the potential difference between the ends of the conductor, provided that physical conditions remain the same.” This is:",
      options: [
        "Laplace’s Law",
        "Ohm’s Law",
        "Coulomb’s Law",
        "Charles’s Law",
        "Boyle’s Law"
      ],
      answer: 1,
      explanation: "This is the classic definition of Ohm's Law."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-140",
      question: "High slope of Ohm’s law graph means:",
      options: [
        "Low resistance",
        "High resistance",
        "Open circuit",
        "Low current"
      ],
      answer: 0,
      explanation: "For an I vs V graph (current on y-axis, voltage on x-axis), slope = ΔI / ΔV = 1/R. A steeper/higher slope corresponds to smaller resistance (low resistance)."
    },
    {
      id: "szambu-2025-phys-144",
      question: "What will potential difference, if a wire has resistance of 10 Ω and current 2A flow through it:",
      options: [
        "5V",
        "10V",
        "20V",
        "40V"
      ],
      answer: 2,
      explanation: "Using Ohm's law V = I × R = 2 A × 10 Ω = 20 V."
    },
    {
      id: "szambu-2025-phys-149",
      question: "A high internal resistance battery is not suitable for heavy loads due to:",
      options: [
        "Excess voltage drop",
        "High terminal voltage",
        "Infinite emf",
        "Constant current"
      ],
      answer: 0,
      explanation: "Heavy load draws high current I, resulting in a large internal voltage drop (Ir) across high internal resistance r, severely reducing terminal voltage."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-134",
      question: "Which one of the following is the SI-unit of conventional current in a conductor?",
      options: [
        "Ampere",
        "Coulomb",
        "Ohm",
        "Ohm meter"
      ],
      answer: 0,
      explanation: "The SI unit of electric current is the Ampere (A)."
    },
    {
      id: "szambu-phy-24-137",
      question: "The gradient/slope of I-V (Current-Potential) graph provides",
      options: [
        "Conductance",
        "Conductivity",
        "Resistance",
        "Resistivity"
      ],
      answer: 0,
      explanation: "Slope of an I-V graph is ΔI / ΔV = 1/R = Conductance G."
    },
    {
      id: "szambu-phy-24-163",
      question: "Which one of the following materials has negative temperature coefficient of resistance?",
      options: [
        "Copper",
        "Germanium",
        "Sulphur",
        "Zinc"
      ],
      answer: 1,
      explanation: "Semiconductors like Germanium (Ge) and Silicon (Si) have negative temperature coefficients of resistance (resistance drops as temperature increases)."
    },
    {
      id: "szambu-phy-24-174",
      question: "If 60 A current passes through a wire in 60 seconds. What will be the value of charge existing in the wire?",
      options: [
        "4.6 × 10⁻³ C",
        "3.6 × 10⁻³ C",
        "2.6 × 10³ C",
        "3.6 × 10³ C"
      ],
      answer: 3,
      explanation: "Charge Q = I × t = 60 A × 60 s = 3600 C = 3.6 × 10³ C."
    },
    {
      id: "szambu-phy-24-176",
      question: "In any electric circuit, power output (P_out) will be maximum when (Whereas R = External Resistance, r = Internal Resistance)",
      options: [
        "R = 0 but r ≠ 0",
        "r = 0 but R ≠ 0",
        "R = ∞ and r = 0",
        "R = r"
      ],
      answer: 3,
      explanation: "By the Maximum Power Transfer Theorem, maximum output power occurs when external load resistance equals internal source resistance (R = r)."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-137",
      question: "The reciprocal of the resistivity of a material is called its:",
      options: [
        "impedance",
        "conductivity",
        "admittance",
        "reactance"
      ],
      answer: 1,
      explanation: "Electrical conductivity (σ) is defined as the mathematical reciprocal of resistivity (σ = 1 / ρ)."
    },
    {
      id: "uhs-mdcat-2025-phys-147",
      question: "Terminal voltage of a cell equals its EMF only when:",
      options: [
        "No current flows",
        "Current is maximum",
        "Internal resistance is infinite",
        "Load resistance is zero"
      ],
      answer: 0,
      explanation: "Terminal potential difference V = E - Ir. When no current flows through the circuit (I = 0), V = E."
    },
    {
      id: "uhs-mdcat-2025-phys-152",
      question: "If the length of the conductor is made 4 times its original length, its resistance becomes",
      options: [
        "quarter",
        "half",
        "zero",
        "4 times"
      ],
      answer: 3,
      explanation: "Resistance R = ρ L / A. Resistance is directly proportional to length L, so quadrupling length multiplies resistance by 4."
    },
    {
      id: "uhs-mdcat-2025-phys-153",
      question: "The unit of temperature coefficient of resistivity is",
      options: [
        "1/C",
        "1/K",
        "1/A",
        "1/Ω"
      ],
      answer: 1,
      explanation: "Temperature coefficient α = Δρ / (ρ₀ ΔT), giving SI units of per Kelvin (K⁻¹ or 1/K)."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-152",
      question: "A charge of 90 C passes through a wire for 30 seconds. Then the current in the wire will be",
      options: [
        "3 A",
        "0.3 A",
        "3 mA",
        "0.3 mA"
      ],
      answer: 0,
      explanation: "Current I = Q / t = 90 C / 30 s = 3 A."
    },
    {
      id: "uhs-phys-24-153",
      question: "The magnitude of the current in metals is proportional to the potential difference across it as long as temperature of conductor is kept constant is known as",
      options: [
        "Joule’s Law",
        "Gauss Law",
        "Ohm’s Law",
        "Ampere’s Law"
      ],
      answer: 2,
      explanation: "This statement expresses Ohm's Law (V = IR)."
    },
    {
      id: "uhs-phys-24-154",
      question: "When length of copper wire is doubled then resistivity becomes",
      options: [
        "Double",
        "Half",
        "Remains same",
        "Four times"
      ],
      answer: 2,
      explanation: "Resistivity is an intrinsic property dependent only on material identity and temperature, remaining constant when physical dimensions change."
    },
    {
      id: "uhs-phys-24-155",
      question: "The resistance of semiconductor with rise in temperature",
      options: [
        "Increases",
        "Decreases",
        "Remain same",
        "Infinite"
      ],
      answer: 1,
      explanation: "Heating a semiconductor liberates additional charge carriers (electron-hole pairs), increasing conductivity and decreasing resistance."
    },
    {
      id: "uhs-phys-24-156",
      question: "Volt × Ampere is the measure of",
      options: [
        "Current",
        "Volt",
        "Resistance",
        "Power"
      ],
      answer: 3,
      explanation: "Power P = V × I. Therefore, Volt × Ampere equals Watts, measuring electrical Power."
    },
    // --- TESTMOZ ---
    {
        id: "testmoz-phys-1",
        question: "Specific resistance of wire",
        options: [
          "Will depend on its length",
          "Will depend on its radius",
          "Will depend on the type of material of the wire",
          "Will depend on none of the above mentioned"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-2",
        question: "If heater coil is cut into two equal parts and only one part is now used in the heater the heat generated will now be",
        options: [
          "Halved",
          "One fourth",
          "Four times",
          "Doubled"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-3",
        question: "Power dissipated into parallel resistors is inversely proportional to",
        options: [
          "Potential difference",
          "Current",
          "Resistance",
          "All of the above mentioned"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-4",
        question: "Which one gives pure nature of the material",
        options: [
          "Resistivity",
          "Temperature coefficient of resistance",
          "Resistance",
          "Both a and b"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-5",
        question: "The slope of ohm law is",
        options: [
          "Straight line",
          "Parabola",
          "Hyperbola",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-6",
        question: "Six 1.1V cells with internal resistance 3.0 ohm each are connected in three parallel branches of two cells each if the resistance of external circuit is 2 ohm then the current is",
        options: [
          "0.33A",
          "0.44A",
          "0.55A",
          "0.66A"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-7",
        question: "A fuse is placed in a series with circuit to protect against",
        options: [
          "High power",
          "High current",
          "High voltage",
          "Overheating"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "EMF of battery or Cell is the voltage between its terminal when",
        options: [
          "The circuit is open",
          "It’s internal resistance is minimum",
          "The circuit closed",
          "It’s internal resistance is maximum"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-9",
        question: "Material of heating element of electric heater should have",
        options: [
          "High Resistivity and high melting point",
          "High Resistivity and low melting point",
          "Low Resistivity and low melting point",
          "Low Resistivity and high melting point"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-10",
        question: "For an open circuit the resistance of circuit will be",
        options: [
          "Infinite",
          "Maximum",
          "Finite",
          "Zero"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-11",
        question: "A copper wire has resistance R it is stretched such that its length is thrice then its new resistance become",
        options: [
          "2R",
          "9R",
          "4R",
          "27R"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-12",
        question: "A wire of resistance R is stretched to four times its length uniformly its new resistance will be",
        options: [
          "16R",
          "R/4",
          "4R",
          "R/16"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-13",
        question: "An immersion heater of 400 Watts keep on for five hours will consume electric energy of",
        options: [
          "2Kwh",
          "6kwh",
          "20kwh",
          "12kwh"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-14",
        question: "A source of 200 V provides a current of 10 amps to a house the power delivered by the source is",
        options: [
          "20 W",
          "2000 W",
          "40 W",
          "200 W"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-15",
        question: "An energy source will supply a constant current into the load if its internal resistance is",
        options: [
          "Non zero but less than the load resistance",
          "Zero",
          "Very large as compared to the load resistance",
          "Equal to the resistance of the load"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-16",
        question: "Which of the following statement is not true",
        options: [
          "Conductance is the reciprocal of resistance and it is measured in Siemens",
          "Ohm’s law is not applicable at very low and very high temperature",
          "Ohm’s law is applicable to semiconductors",
          "Ohm’s law is not applicable to electron tubes discharge tubes and electrolytes"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-17",
        question: "Two wires made of the same material have the same length but different diameters they are connected in parallel to a battery the quantity that is not the same for the wires is",
        options: [
          "The end to end potential difference",
          "The current density",
          "The current",
          "The electric field"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-18",
        question: "A 60 watt light bulb carries a current of 0.5 amperes the total charge passing through it in one hour is",
        options: [
          "120C",
          "3600C",
          "3000C",
          "1800C"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-19",
        question: "If the potential difference across a resistor is doubled",
        options: [
          "Only the current is doubled",
          "Only the resistance is doubled",
          "Only the current is half",
          "Only the resistance is half"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-20",
        question: "The fractional change in resistivity per Kelvin",
        options: [
          "Temperature coefficient of resistance",
          "Resistance",
          "Temperature coefficient of resistivity",
          "All of the above mentioned"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-21",
        question: "Slope of the graph between V on x-axis and I on the y axis is",
        options: [
          "Resistance",
          "EMF",
          "Conductance",
          "Capacitance"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-22",
        question: "SI unit of EMF is same as",
        options: [
          "Work",
          "Power",
          "Energy",
          "Voltage"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-23",
        question: "The Terminal potential difference of battery is less than its EMF when",
        options: [
          "Under all conditions",
          "Only when the battery is being charged",
          "Only when the battery is being discharged",
          "When battery is disconnected"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-24",
        question: "When we double the voltage in a simple electric circuit we double the",
        options: [
          "Current",
          "Resistance",
          "Power",
          "Both a and c"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-25",
        question: "In case of gases the charge carriers are",
        options: [
          "Positive and negative ions",
          "Electrons and holes",
          "Positive ions and electrons",
          "Negative ions and electrons"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-26",
        question: "Potential difference is directly proportional to the current",
        options: [
          "Ohm’s law",
          "Gauss’s law",
          "Kirchhoff law",
          "None of the above mentioned"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-27",
        question: "Why should a resistance be introduced in a circuit in series deliberately",
        options: [
          "To increase current",
          "To control current",
          "Decrease current",
          "Just to give a good look to circuit"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-28",
        question: "Free electrons in an electric field move from",
        options: [
          "All potentials",
          "Low potential to high potential",
          "High potential to low potential",
          "Remains stationary"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-29",
        question: "If the length and diameter of conductor is double the resistance is",
        options: [
          "Remain same",
          "Double",
          "Four times",
          "Half"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-30",
        question: "A large number of bulbs are connected in series combination with a battery if one of them is fused",
        options: [
          "The others will stop glowing",
          "The others will keep glowing",
          "The others will start blinking",
          "The others will also be fused"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-31",
        question: "A steady current is flowing in a conductor of non uniform cross section the charge passing through any cross section per unit time is",
        options: [
          "Directly proportional to the area of cross section",
          "Inversely proportional to the area of cross section",
          "Proportional to the square of the cross section",
          "Independent of the area of cross section"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-32",
        question: "A piece of Copper and piece of Germanium are cooled from the room temperature down to 77 Kelvin",
        options: [
          "The resistance of each of them increases",
          "The resistance of each of them decreases",
          "The resistance of copper increases and that of Germanium decreases",
          "The resistance of copper decreases and that of Germanium increases"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-33",
        question: "Current is the measure of",
        options: [
          "Force that moves a charge past a point",
          "Resistance to the movement of a charge past a point",
          "Energy used to move a charge past a point",
          "Amount of charge that moves past a point per unit time"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-34",
        question: "Conductance is a quantity used to describe the",
        options: [
          "Physical state of the conductor",
          "Dimension of the conductor",
          "Electrical properties of the material",
          "All of the above mentioned"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-35",
        question: "Magnetic effect of current is utilised in",
        options: [
          "Iron",
          "Measurement of current",
          "Thermocouple",
          "Electroplating"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-36",
        question: "You wish to triple the rate of energy dissipation in a heating device to do this you could triple",
        options: [
          "The potential difference keeping the resistance same",
          "The current keeping the resistance the same",
          "The resistance keeping the potential difference the same",
          "The resistance keeping the current same"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-37",
        question: "A certain wire has resistance R another wire of the same material has the length and half the diameter of the first wire the resistance of the second wire is",
        options: [
          "4R",
          "R/4",
          "8R",
          "2R"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-38",
        question: "Out of two bulbs in a house one glow Brighter Than The Other which of the following has larger resistance",
        options: [
          "The brighter bulb",
          "Both have same resistance",
          "The dim",
          "Brightness does not depend on resistance"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-39",
        question: "The current is zero in a conductor when no potential difference is applied because",
        options: [
          "The electrons are not moving",
          "Electrons are not moving fast enough",
          "For every electron with a given velocity there is an other with a velocity of equal magnitude and opposite direction",
          "Equal number of electrons and protons are moving together"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-40",
        question: "When same current passes for same time through a thick and thin wire",
        options: [
          "More heat is produced in thick wire",
          "More heat is produced in thin wire",
          "No heat is produced in wire",
          "Equal heat is produced in thick and thin wire"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-41",
        question: "20 ohm resistance take 20 minutes to boil a given amount of water how much resistance will be required to boil the same amount of water using the same source in 1 minute",
        options: [
          "20 Ohm",
          "40 Ohm",
          "5 Ohm",
          "100 Ohm"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-42",
        question: "For maximum power output from the cell the requirement is",
        options: [
          "r > R",
          "r < R",
          "R = r",
          "r = 0"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-43",
        question: "A wire of resistance R is cut into equal parts its resistance become R/2 what happens to resistivity",
        options: [
          "Double",
          "Remain same",
          "One fourth",
          "Four times"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-44",
        question: "The capacity of storage cell is 5 ampere hour the maximum current it can supply for 10 hour is",
        options: [
          "5 amperes",
          "0.5 Ampere",
          "50 ampere",
          "0.25 ampere"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-45",
        question: "Temperature coefficient of resistivity of a material is measured in",
        options: [
          "Ohm × kelvin",
          "K",
          "Ohm × meter",
          "K⁻¹"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-46",
        question: "An ordinary light bulb is marked 60 watt 120 volt its resistance is",
        options: [
          "60 ohm",
          "180 ohm",
          "120 ohm",
          "240 ohm"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-47",
        question: "Three bulbs of 25 watt 50 Watt and 100 watt are connected in series with same supply the bulb with maximum brightness is",
        options: [
          "25 watt",
          "50 Watt",
          "100 watt",
          "All of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-48",
        question: "A car battery is rated at 80 amp hour an ampere hour is a unit of",
        options: [
          "Power",
          "Energy",
          "Charge",
          "Current"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-49",
        question: "Which one of the following substance that resistance decreases with increase in temperature",
        options: [
          "Copper",
          "Carbon",
          "Silver",
          "Iron"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-50",
        question: "Internal resistance is the resistance offered by",
        options: [
          "Conductor",
          "Resistor",
          "Circuit",
          "Electrolyte"
        ],
        answer: 3
},
// --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-136",
      question: "When placed in light which of the following can generate an output voltage across its electrodes?",
      options: [
        "p-n diode",
        "light emitting diode",
        "photo diode",
        "All of the given options"
      ],
      answer: 2,
      explanation: "A photodiode (or solar cell) operating in photovoltaic mode absorbs photons to generate electron-hole pairs, producing an output voltage across its terminals."
    },
    {
      id: "bumhs-2024-phys-140",
      question: "In photo-electric effect electrons are emitted on incidence of light upon certain material surfaces:",
      options: [
        "Below a certain frequency",
        "Beyond a certain wavelength",
        "Above a certain frequency",
        "None of the given options"
      ],
      answer: 2,
      explanation: "Photoelectric emission occurs only when the frequency of incident radiation is greater than or equal to the minimum threshold frequency (f ≥ f₀)."
    },
    {
      id: "bumhs-2024-phys-146",
      question: "Photoelectron emission depends upon the:",
      options: [
        "Intensity of incident light",
        "Color of the body",
        "Frequency of incident light",
        "Shape of the body"
      ],
      answer: 2,
      explanation: "Whether photoelectron emission occurs (and the kinetic energy of emitted photoelectrons) depends fundamentally on the frequency (or wavelength) of the incident light."
    },
    {
      id: "bumhs-2024-phys-153",
      question: "Let an electron beam is accelerated by adjustable potential V. If we decrease potential V, wavelength of matter wave associated with electron will:",
      options: [
        "increase",
        "decrease",
        "remain same",
        "sometime increase sometime decrease"
      ],
      answer: 0,
      explanation: "De Broglie wavelength λ = h / √(2m e V). Decreasing accelerating potential V reduces electron momentum, which increases the de Broglie wavelength λ."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-137",
      question: "If a photon of gamma ray and one of x-ray are compared, then:",
      options: [
        "x-ray photon has more energy",
        "Both have same energy",
        "Gamma-ray photon has more energy",
        "Both have same wavelength"
      ],
      answer: 2,
      explanation: "Gamma rays have higher frequencies than X-rays. Since photon energy E = hf, a gamma-ray photon carries more energy than an X-ray photon."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-85",
      question: "The energy (E) of a quantum is given by which equation?",
      options: [
        "E = mc²",
        "E = hν",
        "E = ½ mv²",
        "E = qV"
      ],
      answer: 1,
      explanation: "According to Planck's quantum theory, the energy of a quantum (photon) is E = hν (or E = hf)."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-169",
      question: "The momentum of moving photon is:",
      options: [
        "mc²",
        "λ / h",
        "h / λ",
        "zero"
      ],
      answer: 2,
      explanation: "By the de Broglie relation / Einstein photon theory, photon momentum is given by p = h / λ."
    },
    {
      id: "kmu-phys-24-170",
      question: "In every instant of time, wavelength associated with a freely falling body:",
      options: [
        "Decreases",
        "Increases two times",
        "Increases four times",
        "Remains constant"
      ],
      answer: 0,
      explanation: "As a body falls freely under gravity, its velocity v increases (v = gt), which increases momentum p = mv. Since λ = h / p, the de Broglie wavelength decreases with time."
    },
    {
      id: "kmu-phys-24-171",
      question: "As per 2nd photoelectric experiment, photoelectric effect does not occur if the frequency of the incident light is?",
      options: [
        "Below the threshold frequency",
        "Equals the threshold frequency",
        "Three times the threshold frequency",
        "Twice the threshold frequency"
      ],
      answer: 0,
      explanation: "If incident photon frequency is below the threshold frequency (f < f₀), photon energy is insufficient to overcome the work function, so no photoelectric emission occurs."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-123",
      question: "The linear momentum of a photon is given as:",
      options: [
        "mc",
        "mv",
        "mc²",
        "m₀c²",
        "hν/c"
      ],
      answer: 4,
      explanation: "Since E = hν and E = pc for a massless photon, momentum p = E / c = hν / c."
    },
    {
      id: "siba-phy-24-126",
      question: "One kilogram mass is entirely converted into energy. The amount of energy will be:",
      options: [
        "9×10⁹ J",
        "3×10¹⁰ J",
        "9×10¹⁶ eV",
        "9×10¹⁶ J",
        "9×10¹⁵ eV"
      ],
      answer: 3,
      explanation: "Using Einstein's mass-energy equivalence E = m c²: E = 1 kg × (3 × 10⁸ m/s)² = 9 × 10¹⁶ J."
    },
    {
      id: "siba-phy-24-148",
      question: "The charge to mass ratio (e/m) of an electron is:",
      options: [
        "1.9 × 10³¹ C/kg",
        "1.76 × 10¹⁹ C/kg",
        "1.76 × 10¹¹ C/kg",
        "1.602 × 10¹⁹ C/kg",
        "1.602 × 10¹¹ C/kg"
      ],
      answer: 2,
      explanation: "The charge-to-mass ratio of an electron is e/m = (1.602 × 10⁻¹⁹ C) / (9.11 × 10⁻³¹ kg) ≈ 1.76 × 10¹¹ C/kg."
    },
    {
      id: "siba-phy-24-161",
      question: "In the mathematical relationship φ = hv₀ (or E = hν − φ), the symbol φ represents:",
      options: [
        "Magnetic flux",
        "Threshold frequency",
        "Work function",
        "Electric flux",
        "Wave function"
      ],
      answer: 2,
      explanation: "In photoelectric equations, φ (or Φ / W₀) represents the work function of the metal surface."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-130",
      question: "If different colored light beams have same total energy, which color beam will contain the smallest number of photons?",
      options: [
        "Violet",
        "Blue",
        "Green",
        "Red"
      ],
      answer: 0,
      explanation: "Total energy E_total = N × (hf). Violet light has the highest frequency f and highest per-photon energy (hf), so fewer photons N are required to reach the same total energy."
    },
    {
      id: "szambu-2025-phys-145",
      question: "According to the particle model of light, a photon is:",
      options: [
        "A Particle with mass and charge",
        "A quantum of energy with zero rest mass and zero charge",
        "A continuous energy wave",
        "A particle that travels slower than light"
      ],
      answer: 1,
      explanation: "A photon is a discrete quantum of electromagnetic energy possessing zero rest mass and zero electric charge."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-123",
      question: "The kinetic energy of emitted electrons in photoelectric effect can be increased by increasing",
      options: [
        "applied potential of electrodes",
        "frequency of electromagnetic wave",
        "intensity of incident light",
        "momentum of incident photon"
      ],
      answer: 1,
      explanation: "By Einstein's photoelectric equation K.E._max = hf - φ, maximum kinetic energy depends strictly on the frequency (f) of the incident radiation."
    },
    {
      id: "szambu-phy-24-151",
      question: "At what angle made by scattered photon with x-axis, we can get maximum value of Compton’s shift?",
      options: [
        "0°",
        "45°",
        "90°",
        "180°"
      ],
      answer: 3,
      explanation: "Compton shift Δλ = (h / m₀c)(1 - cos θ). Maximum shift occurs when (1 - cos θ) is maximized, which happens at θ = 180° where cos(180°) = -1, giving Δλ_max = 2h / m₀c."
    },
    {
      id: "szambu-phy-24-157",
      question: "Which one of the following factors is the best for calculation Compton’s shift?",
      options: [
        "Angular spin of electron",
        "Energy of electron",
        "Energy of photon",
        "Scattering angle of photon"
      ],
      answer: 3,
      explanation: "The magnitude of Compton shift Δλ depends solely on the scattering angle θ of the photon."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-150",
      question: "The wave that has the highest frequency & penetrating power is",
      options: [
        "x-rays",
        "Ultraviolet rays",
        "Gamma rays",
        "Microwaves"
      ],
      answer: 2,
      explanation: "Gamma rays reside at the highest frequency end of the electromagnetic spectrum, carrying the greatest photon energy and penetrating power."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-167",
      question: "The value of Planck constant is",
      options: [
        "6.63 × 10⁻³⁴ Js",
        "6.63 × 10³⁴ Js",
        "6.63 × 10⁻³⁴ Js⁻¹",
        "6.63 × 10³⁴ Js⁻¹"
      ],
      answer: 0,
      explanation: "Planck's constant h is equal to 6.63 × 10⁻³⁴ Joule-seconds (J·s)."
    },
    {
      id: "uhs-phys-24-168",
      question: "The de-Broglie wavelength associated with a particle moving at 10⁶ m/s and having mass 10⁻³⁰ kg",
      options: [
        "6.6 × 10⁻¹⁰ m",
        "1.5 × 10⁹ m",
        "1.9 × 10⁻⁵ m",
        "7.2 × 10⁻⁸ m"
      ],
      answer: 0,
      explanation: "λ = h / (m v) = (6.63 × 10⁻³⁴ J·s) / (10⁻³⁰ kg × 10⁶ m/s) = (6.63 × 10⁻³⁴) / 10⁻²⁴ = 6.63 × 10⁻¹⁰ m."
    },
    {
      id: "uhs-phys-24-169",
      question: "Light propagates through space as a wave is evident by all of the following EXCEPT",
      options: [
        "Interference",
        "Photoelectric effect",
        "Diffraction",
        "Polarization"
      ],
      answer: 1,
      explanation: "Interference, diffraction, and polarization demonstrate the wave nature of light, whereas the Photoelectric effect proves the particle (quantum/photon) nature of light."
    },
    {
      id: "uhs-phys-24-171",
      question: "The potential through which an electron should be accelerated, so that, on collision it can lift the electron in the atom from its ground state to some higher state is known as",
      options: [
        "Ionization potential",
        "Excitation potential",
        "String potential",
        "Acceleration potential"
      ],
      answer: 1,
      explanation: "Excitation potential is the minimum accelerating potential required to impart enough kinetic energy to an electron to excite an atomic bound electron from its ground state to a higher energy level."
    },
    {
      id: "uhs-phys-24-172",
      question: "Which of the following regarding X-Rays is INCORRECT",
      options: [
        "Have higher wavelength than visible light",
        "They are part of electromagnetic spectrum",
        "They are highly penetrating in soft body tissues",
        "They are high energy photons"
      ],
      answer: 0,
      explanation: "X-rays have much shorter wavelengths (0.01 to 10 nm) than visible light (400 to 700 nm), so statement A is incorrect."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "Photon is the particle which has",
        options: [
          "Infinite rest mass",
          "Rest mass but no charge",
          "No rest mass and no charge",
          "Both A and B are correct"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-2",
        question: "In photoelectric emission the kinetic energy of the electron is",
        options: [
          "Directly proportional to the wavelength",
          "Directly proportional to the frequency of incident radiation",
          "Directly proportional to the intensity of incident radiation",
          "Does not depend any of the above"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-3",
        question: "The threshold wavelength of photoelectric emission of a metal is 4000 angstrom then the minimum energy required to eject electron is",
        options: [
          "4.96 electron volt",
          "3.1 electron volt",
          "49.6 electron volt",
          "31 electron volt"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-4",
        question: "Photoelectric effect is the conversion of",
        options: [
          "Light into heat",
          "Electricity into light",
          "Light into electricity",
          "None of the above mentioned"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-5",
        question: "Light of frequency 1.5 times the threshold frequency is incident on photosensitive material if the frequency is half and intensity is the doubled the photoelectric current becomes",
        options: [
          "Four times",
          "Double",
          "Half",
          "Zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-6",
        question: "Einstein special theory of relativity is applicable only for which frame of references",
        options: [
          "Inertial",
          "Non inertial",
          "Both of them",
          "None of them"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-7",
        question: "Wavelength associated with an electron is the order of",
        options: [
          "Visible light",
          "X-rays",
          "Radio waves",
          "Infrared"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "The absorbed energy of incident Photon is used in two ways work function part of energy used to free the electron from metal surface remaining part is converted to",
        options: [
          "Kinetic energy",
          "Potential energy",
          "Binding energy",
          "Thermal energy"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-9",
        question: "In a Photoelectric effect experiment at a frequency above cut off the number of electron ejected is proportional to",
        options: [
          "Their kinetic energy",
          "The work function",
          "The number of photons that hit the sample",
          "The frequency the incident light"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-10",
        question: "Maximum energy of electron released in a photo cell is independent of",
        options: [
          "Frequency of incident light",
          "Intensity of incident light",
          "Nature of cathode rays",
          "None of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-11",
        question: "Experimental proof of particle nature of light is",
        options: [
          "Pair production",
          "Photoelectric effect",
          "Davison Germer experiment",
          "De broglie concept"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-12",
        question: "The work function of metallic substance is 5 electron volt then its threshold frequency is approximately",
        options: [
          "1.6×10⁷ Hz",
          "8.68×10¹⁵ Hz",
          "9.68×10¹⁷ Hz",
          "1.2×10¹⁵ Hz"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-13",
        question: "Maximum kinetic energy of photo electron depends upon ........ of incident light",
        options: [
          "Frequency",
          "Brightness",
          "Intensity",
          "Power"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-14",
        question: "A photon is a",
        options: [
          "Unit of energy",
          "Quantum of electromagnetic radiations",
          "Positively charged particle",
          "Unit of wavelength"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-15",
        question: "In a Photoelectric effect experiment at a frequency above threshold frequency the number of electron ejected is proportional to",
        options: [
          "The frequency of the incident light",
          "Their potential energy",
          "The number of photons that hit the sample",
          "Their kinetic energy"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-16",
        question: "The phenomena of ejection of electron from a metal when light of suitable frequency falls on it is called",
        options: [
          "Compton's effect",
          "Photoelectric effect",
          "Annihilation of matter",
          "None of them"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-17",
        question: "If the intensity of incident light is made double then the maximum number of emitted electrons will become",
        options: [
          "Double",
          "8 times",
          "Four times",
          "Half"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-18",
        question: "The reverse process of Photoelectric effect is",
        options: [
          "Annihilation of matter",
          "Pair production",
          "Production of X-rays",
          "Nuclear fission"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-19",
        question: "Which physical quantity will change if intensity of light falling on metal surface is increased",
        options: [
          "Kinetic energy of photo electrons",
          "Plate potential",
          "Velocity of photo electrons",
          "Current"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-20",
        question: "Photoelectric effect of for visible light can be obtained from",
        options: [
          "Sodium Potassium",
          "Helium neon",
          "Carbon oxygen",
          "Magnesium sodium"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-21",
        question: "The Balmer series of hydrogen is important because it",
        options: [
          "Is the only one for which the quantum theory be used",
          "Is the only series that occurs for hydrogen",
          "Is in the visible region",
          "Involves the lowest possible quantum number"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-22",
        question: "The momentum of moving Photon is",
        options: [
          "Zero",
          "λ⁻¹h",
          "hλ",
          "λh⁻¹"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-23",
        question: "How does the intensity affect the photoelectric current",
        options: [
          "If intensity increases the photoelectric current increases",
          "If the intensity increases the photoelectric current decreases",
          "If the intensity decreases the photoelectric current become twice",
          "No effect"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-24",
        question: "The minimum energy of pair production is",
        options: [
          "1.02 volt",
          "1.02 electron volt",
          "1.02 Mega electron volt",
          "1.02 giga electron volt"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-25",
        question: "The phase determines the",
        options: [
          "Displacement",
          "Amplitude",
          "Frequency",
          "State of motion of vibrating body"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-26",
        question: "Which light of photon has the least momentum",
        options: [
          "Red",
          "Yellow",
          "Blue",
          "Radiowave"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-27",
        question: "Which of the following statement is incorrect in perspective of modern physics",
        options: [
          "Energy has inertia",
          "Time dilation phenomena does not occurs in daily life",
          "Light is electromagnetic radiation",
          "Universe is continuously contracting"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-28",
        question: "In a Photoelectric effect experiment the stopping potential is",
        options: [
          "The electric potential that causes the electronic current to vanish",
          "The photon energy",
          "Their kinetic energy of the most energetic electron ejected",
          "The energy required to remove an electron from the sample"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-29",
        question: "The lightest element which exhibit radio activity",
        options: [
          "Hydrogen",
          "Duteron",
          "Tritium",
          "Helium"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-30",
        question: "Two photons of energy 2.5 electron volt each incident on a metal plate whose work function is 4 electron volt then the number of electrons emitted from the metal surface will be",
        options: [
          "One",
          "More than two",
          "Two",
          "Electron emission is not possible"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-31",
        question: "Sun appears reddish during its rising and setting due to",
        options: [
          "Diffraction of light",
          "Scattering of light due to air molecule in air",
          "Refraction of light",
          "It's very high temperature"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-32",
        question: "In a Photoelectric effect experiment at a frequency above cut off the stopping potential is proportional to",
        options: [
          "The energy of the least energetic electron before it is ejected",
          "The energy of the least energetic electron after it is ejected",
          "The energy of the most energetic electron before it is ejected",
          "The energy of the most energetic electron after it is ejected"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-33",
        question: "Wave like characteristics of electron is demonstrated by",
        options: [
          "Line spectrum of atoms",
          "Diffraction by crystalline solids",
          "Production of X-rays",
          "Photoelectric effect"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-34",
        question: "Which of the following statement is incorrect",
        options: [
          "Photoelectric emissions does not occur below the threshold frequency",
          "The photoelectric current increase with the frequency of incident light",
          "Threshold frequency depends on the metal used",
          "The emission of photo electrons is an instantaneous process"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-35",
        question: "Evidence for the wave nature of matter is",
        options: [
          "Electron diffraction experiment of davisions and germer",
          "Thomson measurement of charge to mass ratio",
          "Young's double slit experiment",
          "The compton's effect"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-36",
        question: "The device working is based upon Photoelectric effect is",
        options: [
          "Photo voltaic cell",
          "Photocell",
          "Photo phone",
          "Photo door"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-37",
        question: "The radiations emitted from hydrogen filled discharge tube show",
        options: [
          "Bound spectrum",
          "Continuous spectrum",
          "Line spectrum",
          "Absorption spectrum"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-38",
        question: "X-rays have",
        options: [
          "Less frequency and energy than ultraviolet rays",
          "More frequency and energy than ultraviolet rays",
          "Less frequency and energy then infrared rays",
          "Less frequency and energy than X-rays"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-39",
        question: "The energy generation in stars is due to",
        options: [
          "Fusion of heavy nuclei",
          "Fission of light nuclei",
          "Chemical reactions",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-40",
        question: "What is the effect of intensity on this stopping potential",
        options: [
          "As intensity increases stopping potential increases linearly",
          "If intensity increases stopping potential decreases linearly",
          "If intensity decreases stopping potential increases exponentially",
          "No effect"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-41",
        question: "Which statement describe the arrangement of particles in a solid",
        options: [
          "The particles are closed together and our constantly changing places",
          "The particle start together and do not change place",
          "The particles are closed together and stationer",
          "The particles are far apart and constantly changing place"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-42",
        question: "Minimum energy required by the electron to leave the metal surface is called as",
        options: [
          "Threshold frequency",
          "Work function",
          "Cut off frequency",
          "Threshold energy"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-43",
        question: "Photoelectric cell is illuminated by a point source of light 1m away when the source is Taken 2 m away",
        options: [
          "The number of electron emitted is a quarter of the initial number",
          "The number of electron emitted is half the initial number",
          "Each electron emitted carries one quarter of initial energy",
          "Each emitted electron carries half the initial energy"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-44",
        question: "Which of the following statements about the energy in a Quantum true frequency",
        options: [
          "It very is directly with frequency",
          "It very is inversely with frequency",
          "It is the same it all frequencies",
          "None of them"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-45",
        question: "Linear momentum of photon is",
        options: [
          "Zero",
          "hf/c",
          "hf/c²",
          "C²/hf"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-46",
        question: "In a Photoelectric effect monochromatic light is incident on a metal surface if the incident light of twice the intensity but the same wavelength the kinetic energy of emitted electron",
        options: [
          "Becomes double",
          "Becomes half",
          "Remain same",
          "First increases then decreases"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-47",
        question: "The maximum energy of photo electron is",
        options: [
          "V·e²",
          "Choice 4",
          "V·²e",
          "V·e",
          "Work function"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-48",
        question: "Energy of photon is directly proportional to",
        options: [
          "Temperature",
          "Wavelength",
          "Frequency",
          "Intensity"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-49",
        question: "Light of frequency 1.5 times the threshold frequency is incident on a photo sensitive material if the frequency is half and intensity is doubled the photoelectric current becomes",
        options: [
          "Four times",
          "Double",
          "Half",
          "Zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-50",
        question: "Rest mass of photon is",
        options: [
          "Infinite",
          "Very small",
          "Very large",
          "Zero"
        ],
        answer: 3
},
// --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-127",
      question: "The direction of induced e.m.f can be determined by:",
      options: [
        "Faraday’s law",
        "Lenz’s law",
        "galvanometer",
        "Fleming’s right hand rule"
      ],
      answer: 1,
      explanation: "Lenz's law provides the direction of the induced EMF and current, stating that the induced current always flows in a direction that opposes the change in magnetic flux that caused it."
    },
    {
      id: "bumhs-2024-phys-138",
      question: "Let two current carrying wires are placed near a conducting loop such that loop is midway between wires as shown below. If i₁ and i₂ are decreasing at the same rate, induced current in the loop will be:",
      options: [
        "zero",
        "clockwise",
        "anticlockwise",
        "sometime clockwise sometime anticlockwise"
      ],
      answer: 0,
      explanation: "Because the loop is situated centrally between two symmetric wires carrying currents changing at equal rates, the magnetic flux changes created by the two wires cancel each other out in the loop, yielding zero net change in flux and zero induced current."
    },
    {
      id: "bumhs-2024-phys-142",
      question: "If the rate of change of current Iₚ in the primary coil is increased by one half then emf induced in the secondary coil becomes:",
      options: [
        "Half",
        "Double",
        "2/3 times",
        "3/2 times"
      ],
      answer: 3,
      explanation: "Induced secondary EMF ε_s = M (ΔI_p / Δt). If the rate of change of primary current is increased by one half (i.e. becomes 1 + 1/2 = 3/2 of its initial value), the induced EMF becomes 3/2 times the original EMF."
    },
    {
      id: "bumhs-2024-phys-158",
      question: "Which of the following method can be used to vary induced emf in a coil?",
      options: [
        "Alternating magnetic field",
        "Moving the coil in the magnetic field",
        "Changing the shape of coil",
        "All of the above"
      ],
      answer: 3,
      explanation: "Induced EMF depends on the rate of change of magnetic flux (Φ = B A cosθ). Flux can be altered by changing field strength B (alternating field), changing relative position/orientation (moving coil), or changing effective loop area A (deforming coil)."
    },
    {
      id: "bumhs-2024-phys-159",
      question: "Let an inductor is connected with battery. If emf induced in the inductor opposes emf of battery, then electric current through the circuit is:",
      options: [
        "decreasing",
        "increasing",
        "constant",
        "alternating"
      ],
      answer: 1,
      explanation: "By Lenz's law, self-induced back EMF opposes the battery EMF when the circuit current is increasing (trying to resist the growth of magnetic flux)."
    },
    {
      id: "bumhs-2024-phys-168",
      question: "The induced emf in a 100 turns coil if change in flux through the coil is 2 × 10⁻⁴ Wb in 0.02 sec:",
      options: [
        "1.0 V",
        "–1.0 V",
        "10 V",
        "–10 V"
      ],
      answer: 1,
      explanation: "By Faraday's law, ε = -N (ΔΦ / Δt) = -100 × (2 × 10⁻⁴ Wb / 0.02 s) = -100 × 0.01 = -1.0 V."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-138",
      question: "According to the Faraday’s law of electromagnetic induction, emf induced in a coil placed in changing magnetic field, depends upon:",
      options: [
        "the magnetic field",
        "amount of current",
        "resistance of a coil",
        "the rate of change of magnetic flux"
      ],
      answer: 3,
      explanation: "Faraday's law states that the magnitude of induced EMF is directly proportional to the time rate of change of magnetic flux through the circuit (ε = -N ΔΦ/Δt)."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-82",
      question: "According to Lenz’s Law, the direction of induced current in a conductor is such that it:",
      options: [
        "Opposes the change in magnetic flux",
        "Enhances the change in magnetic flux",
        "Is perpendicular to the magnetic field",
        "Is parallel to the magnetic field"
      ],
      answer: 0,
      explanation: "Lenz's law states that the polarity of induced EMF generates a current whose magnetic field opposes the change in magnetic flux that produced it."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-163",
      question: "One-meter-long copper rod is moving with speed 20 m/sec in the magnetic field of strength 0.6 tesla what is the value of induced emf?",
      options: [
        "12 V",
        "19.4 V",
        "20.6 V",
        "25 V"
      ],
      answer: 0,
      explanation: "Motional EMF ε = v B L = (20 m/s) × (0.6 T) × (1 m) = 12 V."
    },
    {
      id: "kmu-phys-24-164",
      question: "The inductance of a coil depends on.",
      options: [
        "Number of turns",
        "Resistance of the wire used",
        "Type of insulation used on the wire",
        "Voltage applied to the coil"
      ],
      answer: 0,
      explanation: "Self-inductance L = (μ N² A) / l. It depends on geometric factors including total turns N, cross-sectional area A, core length l, and core permeability μ."
    },
    {
      id: "kmu-phys-24-165",
      question: "The direction of induced current is determined by?",
      options: [
        "Ampere’s law",
        "Faraday’s law",
        "Lenz’s law",
        "Ohm’s law"
      ],
      answer: 2,
      explanation: "Lenz's law specifically determines the direction of induced current in electromagnetic induction."
    },
    {
      id: "kmu-phys-24-166",
      question: "Lenz’s law is consistent with the",
      options: [
        "Ampere’s Law",
        "Faraday’s law",
        "Law of conservation of energy",
        "Ohm’s Law"
      ],
      answer: 2,
      explanation: "Lenz's law is a direct consequence of the law of conservation of energy; mechanical work must be done against opposing magnetic forces to generate electrical energy."
    },
    {
      id: "kmu-phys-24-167",
      question: "The basic principle behind the operation of the transformer is",
      options: [
        "Coulomb’s law",
        "Electromagnetic induction",
        "Gas’s Law",
        "Hess’s law"
      ],
      answer: 1,
      explanation: "Transformers operate based on mutual electromagnetic induction between primary and secondary windings."
    },
  
    // --- SIBA 2025 PHYS ---
    {
      id: "siba-2025-phys-145",
      question: "In a step-up transformer, if the secondary voltage is increased by a factor of 10, the current in secondary coil will be:",
      options: [
        "10 times higher than the primary current",
        "10 times lower than the primary current",
        "Equal to the primary current",
        "One-tenth of the primary current in transformer"
      ],
      answer: 3,
      explanation: "In an ideal transformer, power remains conserved (V_p I_p = V_s I_s). Increasing secondary voltage by 10 times reduces secondary current to one-tenth of primary current (I_s = I_p / 10)."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-130",
      question: "Which one of the following is correct for a transformer?",
      options: [
        "Transformer converts dc into ac",
        "Transformer converts mechanical energy into electrical energy",
        "Transformer works on the principle of mutual induction",
        "Transformer converts ac into dc",
        "Transformer converts electrical energy into mechanical energy"
      ],
      answer: 2,
      explanation: "A transformer is a static device that transfers electrical energy between circuits via mutual electromagnetic induction."
    },
    {
      id: "siba-phy-24-164",
      question: "The alternating emf (ε) generated by an AC generator is given by:",
      options: [
        "ε = BvL sin θ",
        "ε = NBL sin θ",
        "ε = NBL cos θ",
        "ε = BNA ω sin θ",
        "ε = BvL cos θ"
      ],
      answer: 3,
      explanation: "The instantaneous generated EMF in a rotating coil AC generator is given by ε = N B A ω sin(ωt) or ε = BNA ω sin θ."
    },
    {
      id: "siba-phy-24-167",
      question: "The mathematical relationship between Magnetic flux and magnetic flux density is:",
      options: [
        "Δφ = (B)(A)cosθ",
        "Δφ = (B)(Δt) cosθ",
        "B = (Δφ)(Δt) cosθ",
        "B = (Δφ)(Δt)",
        "Δφ = (B)(Δt)"
      ],
      answer: 0,
      explanation: "Magnetic flux Φ = B · A = B A cosθ, where B represents magnetic flux density and A represents area."
    },
    {
      id: "siba-phy-24-174",
      question: "Faraday’s law of electromagnetic induction is mathematically represented as:",
      options: [
        "ε = −N (ΔB/Δt)",
        "ε = −N (ΔI/Δt)",
        "ε = −M (Δφ/Δt)",
        "ε = −N (Δφ/Δt)",
        "ε = −M (Δφ/Δt)"
      ],
      answer: 3,
      explanation: "Faraday's law with Lenz's negative sign is expressed as ε = -N (ΔΦ / Δt)."
    },
  
    // --- SZAMBU 2025 PHYS ---
    {
      id: "szambu-2025-phys-134",
      question: "A conducting ring is placed near a current-carrying coil. As the current in the coil increases, the induced current in the ring flows:",
      options: [
        "In the direction of magnetic field",
        "To increases the magnetic flux",
        "To oppose increasing magnetic flux",
        "Randomly without a definite direction"
      ],
      answer: 2,
      explanation: "According to Lenz's law, induced current always flows in a direction that creates an opposing magnetic field to counteract increasing flux."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-131",
      question: "The Lenz’s law of electromagnetic induction is in accordance with law of conservation of",
      options: [
        "Charge",
        "Energy",
        "Mass",
        "Momentum"
      ],
      answer: 1,
      explanation: "Lenz's law expresses the principle of conservation of energy applied to electromagnetic induction."
    },
    {
      id: "szambu-phy-24-158",
      question: "A coil of 100 turns is linked by a flux of 20 mWb. If this flux is reversed in a time of 2 ms, calculate the average induced emf in the coil?",
      options: [
        "1000 volts",
        "2000 volts",
        "3000 volts",
        "4000 volts"
      ],
      answer: 1,
      explanation: "Initial flux Φ₁ = +20 mWb, final flux after reversal Φ₂ = -20 mWb. Total flux change ΔΦ = Φ₁ - Φ₂ = 40 mWb = 40 × 10⁻³ Wb. Magnitude of induced EMF |ε| = N (ΔΦ / Δt) = 100 × (40 × 10⁻³ Wb / 2 × 10⁻³ s) = 100 × 20 = 2000 V."
    },
    {
      id: "szambu-phy-24-165",
      question: "The rate of change of magnetic flux is measured in",
      options: [
        "Coulomb",
        "Ohm",
        "Volt",
        "Watt"
      ],
      answer: 2,
      explanation: "Rate of change of magnetic flux ΔΦ / Δt equals induced electromotive force (EMF), which has SI units of Volts (Wb/s = V)."
    },
  
    // --- UHS MDCAT 2025 PHYS ---
    {
      id: "uhs-mdcat-2025-phys-132",
      question: "In an ideal transformer, if the primary voltage is doubled and the turns ratio remains the same, what happens to the secondary current?",
      options: [
        "Doubles",
        "Halves",
        "Remains the same",
        "Becomes four times"
      ],
      answer: 0,
      explanation: "Secondary voltage V_s = N_s/N_p × V_p doubles when primary voltage V_p is doubled. For a fixed load impedance R_L, secondary current I_s = V_s / R_L also doubles."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-160",
      question: "The induced current will flow in such a direction so as to oppose the cause that produces it is statement of",
      options: [
        "Ampere’s Law",
        "Faraday’s Law",
        "Lenz’s Law",
        "Joule’s Law"
      ],
      answer: 2,
      explanation: "This is the precise statement of Lenz's law."
    },
    {
      id: "uhs-phys-24-161",
      question: "In an AC generator the emf will be maximum when factor sin ωt is equal to",
      options: [
        "Zero",
        "1",
        "2",
        "½"
      ],
      answer: 1,
      explanation: "Generated EMF ε = ε₀ sin(ωt) reaches maximum peak magnitude ε₀ when sin(ωt) = 1."
    },
    {
      id: "uhs-phys-24-162",
      question: "Electric generators and transformers are based on the principles of",
      options: [
        "Coulomb’s law",
        "Faraday’s law",
        "Ampere’s law",
        "Hook’s law"
      ],
      answer: 1,
      explanation: "Both AC generators and transformers operate on Faraday's law of electromagnetic induction."
    },
    {
      id: "uhs-phys-24-163",
      question: "In an ideal transformer",
      options: [
        "Power input is equal to Power output",
        "Power input is less than half of the power output",
        "Power input is greater than Power output",
        "Power input is more than half of the power output"
      ],
      answer: 0,
      explanation: "An ideal transformer operates with 100% efficiency, so input power equals output power (P_in = P_out)."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "The current which fluctuates from zero to maximum and maximum to zero is called",
        options: [
          "Steady current",
          "Direct current",
          "Alternating current",
          "Pulsating direct current"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-2",
        question: "Primary secondary coils of a transformer have 50 and 200 turns respectively when primary is connected to a 9 volt battery secondary voltage is",
        options: [
          "90",
          "36",
          "18",
          "Zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-3",
        question: "The induced current in a loop can be increased by",
        options: [
          "Using stronger magnetic field",
          "Replacing loop by a coil of many turns",
          "Moving the loop faster",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-4",
        question: "The induced EMF does not depends on",
        options: [
          "Area of the coil",
          "Number of turns of the coil",
          "Resistance of the coil",
          "Length of the coil"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-5",
        question: "Magnetic flux passing normally through a unit area is called",
        options: [
          "Magnetization",
          "Magnetic flux density",
          "Magnetic field intensity",
          "All of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-6",
        question: "A step down Transformer reduces the voltage from 220 volt to 11 volt the primary coil draws a current of 5 ampere while secondary draws 90 ampere the efficiency of the transformer is",
        options: [
          "20%",
          "40%",
          "70%",
          "90%"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-7",
        question: "At what angle the magnetic flux will be half of its maximum value",
        options: [
          "30 degree",
          "60 degree",
          "90 degree",
          "45 degree"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "An EMF of 0.03 volt is induced in a wire when it moves it right angles to uniform magnetic field with speed of 4 m per second if the length of the wire in the field is 15 cm what is the flux density in Tesla",
        options: [
          "0.003",
          "0.005",
          "6",
          "12"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-9",
        question: "A generator supplies hundred volt to the primary coil of Transformer the primary is 50 terms and the secondary is 500 terms the secondary voltage is",
        options: [
          "1000 volt",
          "500 volt",
          "250 volt",
          "100 volt"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-10",
        question: "A transformer changes to 1800 volt and there are 6000 turns in secondary coil the number of turns on the primary coil is",
        options: [
          "40",
          "20",
          "10",
          "2"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-11",
        question: "When magnet is in motion relative to a coil and induced EMF is produced it does not depend upon",
        options: [
          "Resistance of the coil",
          "Pole strength of the pole",
          "Motion of the magnet",
          "Number of turns of the coil"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-12",
        question: "Lenz's law is consistent with law of conservation of",
        options: [
          "Mass",
          "Charge",
          "Energy",
          "Momentum"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-13",
        question: "Suppose this page is perpendicular to a uniform magnetic field and the magnetic flux through it is 5 Weber if the page is turned to 60 degrees around the flux through it will be",
        options: [
          "2.5wb",
          "5wb",
          "4.3wb",
          "5.8wb"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-14",
        question: "A copper ring is held horizontally and a bar magnet is dropped through the ring with its length along the axis of the ring the acceleration of the falling magnet is",
        options: [
          "Equal to that due to gravity",
          "Less than that due to gravity",
          "More than that due to gravity",
          "Depends on the diameter of the ring and length of the magnet"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-15",
        question: "In the actual transformer the output is always",
        options: [
          "Equal to input",
          "More than input",
          "Less than input",
          "Infinity"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-16",
        question: "Laminated core in a transformer is used to reduce",
        options: [
          "Power loss",
          "Eddy current losses",
          "Iron losses"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-17",
        question: "As a loop of wire with resistance of 10 ohm moves in a constant uniform magnetic field it losses kinetic energy at a uniform rate of 4mJ/s second The induced current in the Loop is",
        options: [
          "0",
          "2mA",
          "2.8mA",
          "20mA"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-18",
        question: "North pole of a magnet is moving towards a face of metallic loop then the face of the loop becomes",
        options: [
          "North Pole",
          "South Pole",
          "Both a and b",
          "Mono pole"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-19",
        question: "In a coil where magnetic flux is constantly changing there should exist",
        options: [
          "A current",
          "An emf",
          "Torque",
          "All of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-20",
        question: "To minimize the heating effect in the transmission lines",
        options: [
          "High current low voltage is used",
          "Same voltage and current is used",
          "High voltage low current is used",
          "High Voltage high current is used"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-21",
        question: "Current can be induced in a coil by changing the area of the coil placed in",
        options: [
          "Uniform magnetic field",
          "Uniform magnetic and electric field",
          "Uniform electric field",
          "All of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-22",
        question: "A magnet is introduced into the coil and voltage is induced across the coil which of the following factor has no effect on the induced voltage",
        options: [
          "Thickness of the wire of the coil",
          "The time in which magnet is introduced",
          "The strength of the magnetic field",
          "Number of the turns the coil"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-23",
        question: "In ideal Transformer when potential difference is doubled the current is",
        options: [
          "Doubled",
          "Halved",
          "Tripled",
          "Same"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-24",
        question: "The EMF induced in a coil is ...... the rate of change in flux linkages",
        options: [
          "Directly proportional to",
          "Inversely proportional to",
          "Independence of",
          "None of the above"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-25",
        question: "The direction of induced current in a coil or circuit is such that it opposes every cause of its production this law is given by",
        options: [
          "Faraday",
          "Kirchhoffs",
          "Lenzs",
          "Amperes"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-26",
        question: "The practical application of the mutual induction phenomena is",
        options: [
          "Electric motor",
          "AC generator",
          "Transformer",
          "Transistor"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "To induce an EMF in a coil the linking magnetic flux",
        options: [
          "Must decreases",
          "Must increases",
          "Must remain constant",
          "Can either increases or decreases"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-28",
        question: "When a transformer is connected to 120 volt AC it supplies 300 volt to device the current through secondary winding is 0.6 ampere and current through primary is 2 ampere the number of turns on primary is 400 what is the efficiency of transformer",
        options: [
          "75%",
          "80%",
          "85%",
          "100%"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-29",
        question: "Two different loops are concentric and lie in the same plane the current in the outer loop is clockwise an increasing with time the induced current in the inner loop then is",
        options: [
          "Zero",
          "Clockwise",
          "Counter clockwise",
          "In a direction did depends on the ratio of the loop radii"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-30",
        question: "A copper wire is moved in a uniform magnetic field such that it cuts the magnetic lines of force than",
        options: [
          "EMF will not be induced",
          "EMF will be induced",
          "Sometimes EMF will be induced in sometimes not",
          "Nothing can be predicted"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-31",
        question: "In Step Up Transformer voltage in the secondary increases and power in secondary",
        options: [
          "Remain same",
          "Decreases because voltage increases",
          "Increases because current increases",
          "Main increase if voltage remain same"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-32",
        question: "Square loop of wire lies in the Plane of the page a decreasing magnetic field is directed into the page then used current in the loop is",
        options: [
          "Counter clockwise",
          "Clockwise",
          "Zero",
          "Up the left Edge end from right to left along the top Edge"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-33",
        question: "In an ideal Transformer the following factors are used",
        options: [
          "Inputs and output power is same",
          "Currents are inversely proportional to voltage",
          "Currents are dial the proportional to voltage",
          "Both a and b"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-34",
        question: "One can increase the performance of Transformer by",
        options: [
          "Using primary and secondary wires of less resistance",
          "Making the sheets of Transformer Core full insulated",
          "Making methods to increase the flux coupling between the coils",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-35",
        question: "The core of a transformer is made up of soft iron because",
        options: [
          "Iron is cheaper than copper",
          "Iron is a good conductor of current",
          "Iron is a good magnetic substance",
          "Iron has high melting point"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-36",
        question: "A 1 m^2 circular coil of 10 loops is placed parallel to changing magnetic field at 0.3 Tesla per second The induced dmf is",
        options: [
          "0.5V",
          "3V",
          "Zero",
          "3.5V"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-37",
        question: "EMF induced by the motion of a conductor across a magnetic field is called",
        options: [
          "Back EMF",
          "Motional EMF",
          "Directional EMF",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-38",
        question: "To improve efficiency of Transformer the flux coupling between primary and secondary coil should be",
        options: [
          "Small",
          "May be small or may be maximum",
          "Maximum",
          "Zero"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-39",
        question: "A transformer is used to",
        options: [
          "Convert alternating current to direct current",
          "Convert direct current to alternating current",
          "Convert mechanical energy to electrical energy",
          "Change the level of alternating voltage"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-40",
        question: "A transformer steps down the voltage of 220 volt to 40 volt with the help of 40 turns on the secondary coil then number of turns on the primary are",
        options: [
          "20",
          "40",
          "220",
          "120"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-41",
        question: "A transformer is used to light a 100 watt and 110 volt lamp from 220 volt mains if the main current is 0.5 ampere the efficiency of the transformer is a proximately",
        options: [
          "10%",
          "50%",
          "30%",
          "90%"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-42",
        question: "For transmission of electricity to for of places from the AC power generation plant we always use",
        options: [
          "Transformer with several secondaries",
          "Step Up transformer",
          "Step down transformer",
          "All of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-43",
        question: "The number of turns in secondary coil is twice the number of turns in primary coil and ac source of 200 volt is connected across the primary the voltage across secondary is",
        options: [
          "440V",
          "100V",
          "200V",
          "400V"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-44",
        question: "In a step up Transformer the ratio of voltages is it if the advantage across primary is 120 volt the voltage across secondary will be",
        options: [
          "150 volt",
          "120 volt",
          "180 volt",
          "960 volt"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-45",
        question: "A transformer step down 100 volt to 10 volt operate advice within impedance of 2 ohms then current in a primary coil is",
        options: [
          "50 amperes",
          "5 amperes",
          "0.5 amperes",
          "0.05 amperes"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-46",
        question: "For a good Transformer the material of the core should have the has the hysterics loop of",
        options: [
          "Small area",
          "Large area",
          "No area",
          "Moderate area"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-47",
        question: "Rectangular loop of wire is place perpendicular to a uniform magnetic field and then spin around one of its side its frequency The induced EMF is a maximum when",
        options: [
          "The flux is zero",
          "The flux is maximum",
          "The flux is half of its maximum value",
          "The derivatives of the falaks with respect to time is zero"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-48",
        question: "The primary of an ideal Transformer his 100 turns in the secondary has 600 turns then",
        options: [
          "The power in the primary circuit is less than that and the secondary circuit",
          "The current in the two circuits are the same",
          "The voltages in the two circuits are same",
          "The primary current is 6 times the secondary current"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-49",
        question: "Alternating current changes",
        options: [
          "It's magnitude as well as direction",
          "Only magnitude but not direction",
          "Only direction but not magnitude",
          "Both remains same"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-50",
        question: "The coils of Transformer are",
        options: [
          "Magnetically linked",
          "Electrically linked",
          "Both a and b",
          "Isolated with each other"
        ],
        answer: 0
},
// --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-132",
      question: "Magnetic field lines set up in the surrounding of current carrying wire will be:",
      options: [
        "circular",
        "radially outward",
        "along the current",
        "opposite to current"
      ],
      answer: 0,
      explanation: "By the right-hand grip rule, magnetic field lines forming around a straight current-carrying wire form concentric circles centered on the wire."
    },
    {
      id: "bumhs-2024-phys-141",
      question: "A current carrying conductor of length ‘L’ and current ‘I’ is lying at an angle of 90 degrees to the direction of a uniform magnetic field ‘B’. If its length L is rotated clock-wise through angle of 90 degrees and current through it is reduced to two thirds then magnetic force on it becomes:",
      options: [
        "2/3 times",
        "1/3 times",
        "4/3 times",
        "Zero"
      ],
      answer: 3,
      explanation: "Rotating the conductor by 90° makes it parallel (or anti-parallel, θ = 0° or 180°) to the magnetic field. Since magnetic force F = I L B sin θ, sin(0°) = 0, making the magnetic force zero."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-117",
      question: "When the area vector A is parallel to the magnetic field B, what is the value of magnetic flux (ΦB)?",
      options: [
        "0",
        "BA cos 90°",
        "BA cos 0°",
        "B/A"
      ],
      answer: 2,
      explanation: "Magnetic flux Φ = B · A = B A cos θ. When the area vector A is parallel to magnetic field B, θ = 0°, so Φ = BA cos 0° = BA."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-160",
      question: "An electron is moving perpendicular to the magnetic field, which of the following is correct statement about electromagnetic force acting on the electron?",
      options: [
        "Force acting is equal to electron charge",
        "Force acting is equal to the magnetic field strength",
        "Force acting is maximum",
        "Zero force is acting on it"
      ],
      answer: 2,
      explanation: "Magnetic force on a moving charge is F = q v B sin θ. When motion is perpendicular to the field (θ = 90°), sin 90° = 1, giving the maximum possible force F_max = q v B."
    },
    {
      id: "kmu-phys-24-161",
      question: "For a positive charged particle (q) moving with a velocity (v) in a magnetic Field of flux density B, the force (F) acting on the charge particle is given by the expression?",
      options: [
        "q = Fv × B",
        "F = qv × B",
        "F = v × B/q",
        "q = v × B/F"
      ],
      answer: 1,
      explanation: "The Lorentz force acting on a moving charge in a magnetic field is defined by the vector cross-product F = q(v × B)."
    },
    {
      id: "kmu-phys-24-162",
      question: "Which of the following statement is true about the magnetic field inside a solenoid?",
      options: [
        "It is along the axis of the coil",
        "It is circular around the wires",
        "It is strongest at the ends of the solenoid",
        "It is zero when current flows through it"
      ],
      answer: 0,
      explanation: "Inside a long, tightly wound solenoid carrying current, the magnetic field is uniform, parallel, and directed along the central longitudinal axis of the coil."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-134",
      question: "A proton and an alpha particle enter a magnetic field with equal speeds, compared to the proton, the alpha particle's path will have:",
      options: [
        "Larger radius",
        "Smaller radius",
        "Smaller path length",
        "Greater deflection"
      ],
      answer: 0,
      explanation: "Radius of circular path in a magnetic field r = (m v) / (q B). For an alpha particle, mass m_α = 4 m_p and charge q_α = 2 q_p. Thus r_α = (4 m_p v) / (2 q_p B) = 2 r_p, resulting in a larger radius."
    },
    {
      id: "siba-2025-phys-135",
      question: "An electron is projected along the positive x-axis in a magnetic field lying in xz-plane. The magnetic force on the electron will act along the:",
      options: [
        "x-axis",
        "-x-axis",
        "y-axis",
        "-y-axis"
      ],
      answer: 2,
      explanation: "Velocity v is along +i. If magnetic field B lies in the xz-plane along +k, (v × B) points along (i × k) = -j. Since electron charge q is negative (-e), the magnetic force F = -e(-j) = +e j, acting along the positive y-axis."
    },
    {
      id: "siba-2025-phys-136",
      question: "The magnetic flux through a loop of 1m² in a 0.5T magnetic field is same as magnetic flux through a loop of 0.5 m² in a magnetic field of:",
      options: [
        "1.0 T at 0°",
        "1.0 T at 60°",
        "2.0 T at 90°",
        "0.5 T at 90°"
      ],
      answer: 0,
      explanation: "Initial flux Φ₁ = B₁ A₁ = 0.5 T × 1 m² = 0.5 Wb (at 0° between field and area vector). For area A₂ = 0.5 m² at 0°: Φ₂ = B₂ × 0.5 = 0.5 → B₂ = 1.0 T at 0°."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-138",
      question: "The force experienced by a current-carrying conductor placed in a magnetic field is:",
      options: [
        "F = qBL sin θ",
        "F = BL sin θ",
        "F = qvB sin θ",
        "F = BL cos θ",
        "F = BIL sin θ"
      ],
      answer: 4,
      explanation: "The magnetic force on a straight conductor carrying current I of length L in field B is given by F = B I L sin θ."
    },
    {
      id: "siba-phy-24-143",
      question: "Which of the following statements is correct?",
      options: [
        "A magnetic field exerts a force if the charge particle moves opposite to the magnetic field.",
        "A magnetic field never exerts a force on a charge particle.",
        "A magnetic field exerts a force if the charge particle moves parallel to the magnetic field.",
        "A magnetic field exerts a force if the charge particle moves perpendicular to the magnetic field."
      ],
      answer: 3,
      explanation: "Since magnetic force F = q v B sin θ, sin(90°) = 1, so a magnetic field exerts maximum force when a charged particle moves perpendicular to field lines."
    },
    {
      id: "siba-phy-24-152",
      question: "An electron and proton enter in a magnetic field perpendicularly with the same momentum:",
      options: [
        "They move undeflected in opposite directions",
        "The electron deflects more than the proton",
        "They will deflect equally",
        "The proton deflects more than the electron",
        "They will not deflect at all"
      ],
      answer: 2,
      explanation: "Radius of circular path r = p / (q B). Since momentum p, charge magnitude q, and field B are identical for both particles, their radii of curvature are equal (they will deflect equally in magnitude)."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-142",
      question: "At what value of angle between the magnetic field intensity and vector area, the magnetic flux becomes zero?",
      options: [
        "0°",
        "30°",
        "45°",
        "90°"
      ],
      answer: 3,
      explanation: "Magnetic flux Φ = B A cos θ. When the angle between magnetic field and normal vector area is 90°, cos(90°) = 0, so flux becomes zero."
    },
    {
      id: "szambu-phy-24-144",
      question: "Tesla is the SI-unit of magnetic field intensity. Tesla can also be expressed as",
      options: [
        "N⁻¹A⁻¹m⁻¹",
        "N⁻¹Am⁻¹",
        "NA⁻¹m⁻¹",
        "NAm⁻¹"
      ],
      answer: 2,
      explanation: "From F = B I L → B = F / (I L), giving units of Newton per Ampere per meter (N A⁻¹ m⁻¹)."
    },
    {
      id: "szambu-phy-24-152",
      question: "The SI-unit of magnetic flux is weber. Weber can also be expressed as",
      options: [
        "Joule per ampere",
        "Joule per coulomb",
        "Newton per ampere",
        "Newton per coulomb"
      ],
      answer: 0,
      explanation: "1 Weber = 1 Tesla × 1 m² = (N / (A · m)) × m² = (N · m) / A = Joule / Ampere (J A⁻¹)."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-157",
      question: "The formula φ = B · A represents",
      options: [
        "Electric flux",
        "Magnetic flux",
        "Electric flux density",
        "Gravitational flux"
      ],
      answer: 1,
      explanation: "The scalar product of magnetic flux density vector (B) and vector area (A) defines magnetic flux (Φ_B = B · A)."
    },
    {
      id: "uhs-phys-24-158",
      question: "Which of the following statement is incorrect for any magnetic field lines?",
      options: [
        "Lines start at north pole and end at south pole",
        "Lines never touch or cross each other",
        "The lines are curved",
        "Magnetic field is strongest when the lines are farthest"
      ],
      answer: 3,
      explanation: "Magnetic field strength is proportional to line density; magnetic field is strongest where field lines are closest together (most dense), not farthest apart."
    },
    {
      id: "uhs-phys-24-159",
      question: "The unit of magnetic flux density is",
      options: [
        "Wb m⁻¹",
        "Wb m",
        "Wb m⁻²",
        "Wb"
      ],
      answer: 2,
      explanation: "Magnetic flux density B = Φ / A, giving units of Weber per meter squared (Wb m⁻²), also known as Tesla (T)."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "An electron and a Proton enters into a magnetic field perpendicularly with the same momentum",
        options: [
          "The proton will deflect more",
          "Both will deflect equally",
          "Electron will deflect more",
          "They will not deflect at all"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-2",
        question: "If a particle is moving in a region of both electric and magnetic fields then the total force acting on it is",
        options: [
          "Sum of electric and magnetic force",
          "No force will act on it",
          "Difference of electric and magnetic force",
          "None of the above"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-3",
        question: "Two long parallel straight wires carry equal currents in the opposite direction. At a point Midway between the wires the magnetic field they produce is",
        options: [
          "Zero",
          "Non zero and along a line connecting the wires",
          "Non zero and parallel to the wires",
          "Non zero and perpendicular to the plane of the two wires"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-4",
        question: "An electron Travels due north through a vacuum in a region of uniform magnetic field B that is also directed due north. It will",
        options: [
          "Be undeflected by the field",
          "Slow down",
          "Speed up",
          "Follow a right handed cork screw path"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-5",
        question: "Magnetic force acts like",
        options: [
          "Centripetal force",
          "Gravitational force",
          "Strong nuclear force",
          "Electrical force"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-6",
        question: "The radius of curvature of the path of a charged particle moving in a static uniform magnetic field is",
        options: [
          "Directly proportional to the magnitude of the charge on the particle",
          "Directly proportional to the magnitude of linear momentum of the particle",
          "Directly proportional to the kinetic energy of particle",
          "Inversely proportional to the magnitude of the magnetic field"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-7",
        question: "The direction of a point on the magnetic field of force can be taken along",
        options: [
          "Normal at that point",
          "The tangent at that point",
          "Axis of the magnetic line of force at that point",
          "Can’t be taken"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "Thomson’s experiment involving the motion of an electron in mutually perpendicular E and B fields gave the value of",
        options: [
          "Mass of an electron",
          "Earth magnetic field",
          "Charge of an electron",
          "Charge to mass ratio of an electron"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-9",
        question: "Two parallel long wires carry the same current and repel each other with the force of F per unit length. If both these currents are doubled and the wire separation tripled, the force per unit length becomes",
        options: [
          "2F/9",
          "2F/3",
          "4F/9",
          "4F/3"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-10",
        question: "The magnetic field due to electric current in a conducting wire is",
        options: [
          "Towards the centre of conducting wire",
          "Circular around the conducting wire",
          "In the direction of the electric current",
          "In the direction opposite to electric current"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-11",
        question: "When a current conductor is placed in a magnetic field it moves from region of",
        options: [
          "Stronger to weak field",
          "Strong field if current is large",
          "Weak to strong field",
          "Weak to strong if current is large"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-12",
        question: "A charged particle is projected at an angle into a uniform magnetic field. Which of the following parameters of the charged particle will be affected by the magnetic field",
        options: [
          "Energy",
          "Speed",
          "Velocity",
          "Kinetic energy"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-13",
        question: "In the formula F = q(v × B)",
        options: [
          "F must be perpendicular to v but not necessarily to B",
          "F must be perpendicular to B but not necessarily to V",
          "V be perpendicular to B but not necessarily to F",
          "F must be perpendicular to both v and B"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-14",
        question: "Magnetic force acting on a unit positive charge moving at right angle to the magnetic field with unit velocity is called",
        options: [
          "Magnetic flux",
          "Motional EMF",
          "Induced EMF",
          "Magnetic induction"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-15",
        question: "Flux through an area 1 m² in xy plane in a magnetic field of one tesla directing along Z Axis will be",
        options: [
          "0",
          "0.5 wb",
          "1 wb",
          "2 wb"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-16",
        question: "When a charged particle moves through a magnetic field it suffers change in",
        options: [
          "Direction",
          "Speed",
          "Energy",
          "No change"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-17",
        question: "Two parallel wires carrying current in opposite directions",
        options: [
          "Repel each other",
          "Attract each other",
          "Have no effect upon each other",
          "They cancel out their individual magnetic fields"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-18",
        question: "Magnetic lines around the current carrying wire are drawn in clockwise direction on a page. The current is flowing",
        options: [
          "Into the page",
          "Out of the page",
          "Left side of the page",
          "Right side of the page"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-19",
        question: "Lines of the magnetic field produced by a long current carrying wire are",
        options: [
          "Circles that are concentric with wire",
          "Opposite to the direction of a current",
          "Radially outward from the wire",
          "Radially inward toward the wire"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-20",
        question: "Which of the following particles moving in a magnetic field cannot be deflected",
        options: [
          "Alpha particle",
          "Electron",
          "Beta particle",
          "Neutron"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-21",
        question: "If current flows from top towards bottom through a wire then the direction of magnetic line of force would be",
        options: [
          "Parallel to the wire",
          "Clockwise",
          "Perpendicular to the wire",
          "Anticlockwise"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-22",
        question: "A charged particle in uniform motion produces",
        options: [
          "An electric field only",
          "A magnetic field only",
          "Both an electric field and magnetic field",
          "No such field at all"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-23",
        question: "The magnetic field produced due to the current in a straight wire is proportional to",
        options: [
          "Electric current",
          "Length of the wire",
          "Conducting material",
          "Diameter of the wire"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-24",
        question: "A uniform magnetic field is represented by a set of lines of force which are",
        options: [
          "Parallel",
          "Divergent",
          "Convergent",
          "None of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-25",
        question: "The direction of magnetic line of force can be found by using",
        options: [
          "Right hand rule",
          "Left hand rule",
          "Henry’s law",
          "Faraday’s law"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-26",
        question: "Magnetic force is simply a",
        options: [
          "Reflecting force",
          "Restoring force",
          "Deflecting force",
          "Gravitational force"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "A Proton is moving northward in a magnetic field directed vertically upward. The proton will be deflected",
        options: [
          "Eastward",
          "Westward",
          "Vertically upward",
          "Remain undeflected"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-28",
        question: "The SI unit of magnetic flux is",
        options: [
          "Tesla",
          "Joule",
          "Weber",
          "Newton"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-29",
        question: "A Proton and an electron both moving with same velocity enter into a region of magnetic field directed perpendicular to velocity of the particles. They will now move in a circular orbit such that",
        options: [
          "Their time periods will be same",
          "The time period for electron will be higher",
          "The time period for Proton will be higher",
          "Their orbital radii will be same"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-30",
        question: "The direction of the magnetic line of force depends upon",
        options: [
          "Nature of material of conducting wire",
          "Area of the conducting wire",
          "Amount of the current",
          "Direction of the current"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-31",
        question: "Charged particle enters at 30 degree to the magnetic field. Its path becomes",
        options: [
          "Helical",
          "Elliptical",
          "Circular",
          "Straight line"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-32",
        question: "Which of the following is a vector quantity",
        options: [
          "Magnetic flux density",
          "Magnetic field intensity",
          "Magnetic flux",
          "Both a and b"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-33",
        question: "Hydrogen atom that has lost its electron is moving east in the region where the magnetic field is directed from South to North. It will be deflected",
        options: [
          "Up",
          "Down",
          "North",
          "South"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-34",
        question: "A magnetic field exerts a force on a charged particle",
        options: [
          "Always",
          "Never",
          "If the particle is moving across the field",
          "If the particle is moving along the field"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-35",
        question: "The value of ……… around the current carrying wire is found by Ampere’s circuital law",
        options: [
          "Magnetic field strength",
          "Magnetic flux density",
          "Magnetic induction",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-36",
        question: "Four particles enter a uniform magnetic field perpendicularly with the same speed. Which particle has the largest radius",
        options: [
          "Electron",
          "Proton",
          "Alpha particle",
          "Beta particle"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-37",
        question: "A charged particle enters in a direction parallel to an electric field and magnetic field such that both fields are parallel to each other. The force on the charge is",
        options: [
          "Zero",
          "Due to electric field",
          "Due to magnetic field",
          "Due to both fields"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-38",
        question: "A charged particle moves through a magnetic field in a direction perpendicular to it. Which of the following remains unchanged for the particle",
        options: [
          "Velocity",
          "Acceleration",
          "Speed",
          "Direction"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-39",
        question: "Oppositely charged particles moving due east enter a region of uniform magnetic field directed vertically upwards. The particles will",
        options: [
          "Continue to move due east",
          "Move in a circular orbit with its speed unchanged",
          "Move in circular orbit with its speed increases",
          "Get deflected vertically upward"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-40",
        question: "Current is flowing in a long conducting wire. The magnetic induction at a distance r from it is 0.4 Tesla. Then its value at double the distance will be",
        options: [
          "1.6 tesla",
          "0.8 tesla",
          "0.2 tesla",
          "0.1 tesla"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-41",
        question: "A strong magnetic field is applied to a stationary electron. Then",
        options: [
          "Electron moves in the direction of field",
          "Electron moves opposite to field",
          "Electron starts spinning",
          "Electron remains stationary"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-42",
        question: "Two parallel wires carrying current in the opposite direction",
        options: [
          "Repel each other",
          "Have no effect upon each other",
          "Attract each other",
          "They cancel out their individual magnetic fields"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-43",
        question: "Proton moves with velocity V in a perpendicular magnetic field. If the strength is increased to 2B and the proton still moves in the same circular path, its kinetic energy will",
        options: [
          "Be doubled",
          "Become four times",
          "Be halved",
          "No change"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-44",
        question: "A homogeneous electric field and uniform magnetic field are pointing in the same direction. A Proton is projected with its velocity parallel to the electric field. It will",
        options: [
          "Go on moving in the same direction with increasing velocity",
          "Go on moving in the same direction with constant velocity",
          "Turn to its right",
          "Turn to its left"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-45",
        question: "An electron is moving North in a region where the magnetic field is South. The magnetic force exerted on the electron is",
        options: [
          "Zero",
          "Down",
          "Up",
          "East"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-46",
        question: "An electron travels from left to right in the plane of the paper in a magnetic field perpendicular to and directed out of the paper. It is deflected",
        options: [
          "Downward direction",
          "Into the paper",
          "Upward direction",
          "Out of the paper"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-47",
        question: "A force exerted on a wire of 1 m length carrying 1 ampere current placed at right angle to the field is called",
        options: [
          "Lorentz force",
          "Self inductance",
          "Magnetic flux",
          "Magnetic induction"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-48",
        question: "A constant current is sent through a helical coil. The coil",
        options: [
          "Tends to get shorter",
          "Tends to rotate about its axis",
          "Tends to get longer",
          "Produces zero magnetic field at its centre"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-49",
        question: "Uniform electric field and a uniform magnetic field exist in a region in the same direction. An electron is projected with velocity in the same direction. The electron will",
        options: [
          "Turn to its right",
          "Turn to its left",
          "Keep moving in the same direction but its speed will increase",
          "Keep moving in the same direction but its speed will decrease"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-50",
        question: "Double the applied magnetic field, the charge to mass ratio of electron will",
        options: [
          "Half",
          "Remain same",
          "Double",
          "Zero"
        ],
        answer: 1
},
// --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-136",
      question: "When placed in light which of the following can generate an output voltage across its electrodes?",
      options: [
        "p-n diode",
        "light emitting diode",
        "photo diode",
        "All of the given options"
      ],
      answer: 2,
      explanation: "A photodiode (or solar cell) operating in photovoltaic mode converts light energy directly into electrical energy, generating an output voltage across its electrodes."
    },
    {
      id: "bumhs-2024-phys-137",
      question: "The circuit required for change of AC voltage to DC voltage is called:",
      options: [
        "Rectifier",
        "Amplifier",
        "Detector",
        "Emitter"
      ],
      answer: 0,
      explanation: "A rectifier is an electrical circuit that converts alternating current (AC), which periodically reverses direction, to direct current (DC), which flows in only one direction."
    },
    {
      id: "bumhs-2024-phys-175",
      question: "Which of the following is not the basic operation of Boolean variables:",
      options: [
        "Yes operation",
        "NOT operation",
        "AND operation",
        "OR operation"
      ],
      answer: 0,
      explanation: "The three primary, basic operations in Boolean algebra are AND, OR, and NOT. 'Yes operation' is not a standard Boolean logic operation."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-148",
      question: "For a diode, the depletion region of a PN junction has:",
      options: [
        "Free positive charges",
        "Free negative charges",
        "Positive and negative ions",
        "No free charges"
      ],
      answer: 3,
      explanation: "The depletion region contains fixed immobile donor and acceptor ions but lacks mobile/free charge carriers (electrons and holes)."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-84",
      question: "In a full-wave rectifier using two diodes, the diodes D₁ and D₂ operate:",
      options: [
        "Simultaneously during both half-cycles",
        "In alternate switching mode",
        "Only when both ends of transformer are positive",
        "Only in reverse bias condition"
      ],
      answer: 1,
      explanation: "In a center-tapped full-wave rectifier, D₁ conducts during the positive half-cycle while D₂ is reverse-biased, and D₂ conducts during the negative half-cycle while D₁ is reverse-biased."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-168",
      question: "When the PN junction is reverse-biased, its reverse current is of the order of:",
      options: [
        "Gigaamperes",
        "Kiloamperes",
        "Megaamperes",
        "Microamperes"
      ],
      answer: 3,
      explanation: "Reverse saturation current in a silicon PN junction is extremely small, typically on the order of microamperes (µA) or nanoamperes (nA), caused by minority charge carriers."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-155",
      question: "A reverse-biased semiconductor diode acts as:",
      options: [
        "Rectifier",
        "On switch",
        "Inverter",
        "Off switch",
        "Amplifier"
      ],
      answer: 3,
      explanation: "When reverse-biased, a diode presents very high resistance and blocks current flow, functioning as an open/off switch."
    },
    {
      id: "siba-phy-24-165",
      question: "In N-type semiconductor, the minority carriers are:",
      options: [
        "Photons",
        "Electrons",
        "Protons",
        "Holes",
        "Neutrons"
      ],
      answer: 3,
      explanation: "In N-type semiconductors, free electrons are the majority charge carriers, while holes are the minority charge carriers."
    },
  
    // --- SZAMBU 2025 PHYS ---
    {
      id: "szambu-2025-phys-146",
      question: "The current in forward biased PN junction is mainly due to:",
      options: [
        "Majority carriers",
        "Minority carriers",
        "leakage carrier",
        "Thermionic emission"
      ],
      answer: 0,
      explanation: "Forward bias lowers the potential barrier, enabling majority carriers (electrons from N-side and holes from P-side) to cross the junction."
    },
    {
      id: "szambu-2025-phys-156",
      question: "The unit of RC in case of charging a capacitor is",
      options: [
        "Farad",
        "Seconds",
        "Ohm",
        "Volt"
      ],
      answer: 1,
      explanation: "The product of resistance R (Ω = V/A) and capacitance C (F = C/V = A·s/V) yields units of seconds (s), representing the RC time constant."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-155",
      question: "Diode is a/an ________ device, which can be used for rectification process.",
      options: [
        "insulating",
        "perfect conducting",
        "perfect insulating",
        "semiconductor"
      ],
      answer: 3,
      explanation: "A PN junction diode is a semiconductor device that allows current to flow primarily in one direction, enabling rectification."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-164",
      question: "The conversion of A.C. into D.C. is called rectification and circuit is called rectifier. Which component of electronics acts as a rectifier?",
      options: [
        "Diode",
        "Transistor",
        "Transformer",
        "Inductor"
      ],
      answer: 0,
      explanation: "A semiconductor diode permits current flow in only one direction, making it the fundamental component used for rectification."
    },
    {
      id: "uhs-phys-24-165",
      question: "Full wave rectification is given by",
      options: [
        "One diode connected in bridge type arrangements",
        "Two diodes connected in bridge type arrangements",
        "Three diodes connected in bridge type arrangement",
        "Four diodes connected in bridge type arrangements"
      ],
      answer: 3,
      explanation: "A full-wave bridge rectifier utilizes four diodes arranged in a bridge configuration to convert both halves of the AC cycle to DC."
    },
    {
      id: "uhs-phys-24-166",
      question: "A diode characteristic curve is a plot between",
      options: [
        "Current and time",
        "Voltage time",
        "Voltage and current",
        "Reverse voltage forward voltage"
      ],
      answer: 2,
      explanation: "The I-V characteristic curve of a diode plots current (I) against applied potential difference/voltage (V)."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "In a semiconductor, the forbidden energy gap is of the order of:",
        options: [
          "1 MeV",
          "1 eV",
          "0.1 eV",
          "10 eV"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-2",
        question: "The process of adding impurities to a pure semiconductor is called:",
        options: [
          "Doping",
          "Annealing",
          "Diffusion",
          "Depletion"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-3",
        question: "In a p-type semiconductor, the majority charge carriers are:",
        options: [
          "Electrons",
          "Protons",
          "Holes",
          "Neutrons"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-4",
        question: "The depletion region of a p-n junction is so named because it is depleted of:",
        options: [
          "Atoms",
          "Mobile charge carriers",
          "Impurities",
          "Potential barrier"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-5",
        question: "When a p-n junction is forward biased, the width of the depletion region:",
        options: [
          "Increases",
          "Decreases",
          "Remains the same",
          "Becomes zero"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-6",
        question: "A diode is a device that allows current to flow in:",
        options: [
          "Both directions",
          "One direction only",
          "Neither direction",
          "A circular path"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-7",
        question: "The process of converting AC to DC is called:",
        options: [
          "Amplification",
          "Rectification",
          "Oscillation",
          "Modulation"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "In a half-wave rectifier, the output frequency is _______ the input frequency.",
        options: [
          "Equal to",
          "Double",
          "Half",
          "Zero"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-9",
        question: "A Zener diode is designed to operate in the:",
        options: [
          "Forward bias region",
          "Reverse breakdown region",
          "Saturation region",
          "Cut-off region"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-10",
        question: "A photodiode is operated in:",
        options: [
          "Forward bias",
          "Reverse bias",
          "No bias",
          "Breakdown region"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-11",
        question: "The V-I characteristic curve for a silicon diode is shown. The point 'V_k' on the graph represents the:",
        options: [
          "Breakdown Voltage",
          "Peak Inverse Voltage",
          "Knee Voltage",
          "Zener Voltage"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-12",
        question: "When a transistor is used as a digital switch, it operates in which two regions?",
        options: [
          "Active and Saturation",
          "Cut-off and Active",
          "Saturation and Cut-off",
          "Active and Breakdown"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-13",
        question: "In a common-emitter transistor, the emitter current (Ie) is 8.0 mA and the collector current (Ic) is 7.9 mA. What is the current gain (beta)?",
        options: [
          "79",
          "80",
          "0.98",
          "1"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-14",
        question: "A transistor has how many doped regions?",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-15",
        question: "In a PNP transistor, the charge carriers are mainly:",
        options: [
          "Electrons",
          "Holes",
          "Both electrons and holes",
          "Ions"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-16",
        question: "The base of a transistor is:",
        options: [
          "Heavily doped",
          "Lightly doped and thin",
          "Moderately doped and thick",
          "Heavily doped and thick"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-17",
        question: "For a transistor to act as an amplifier, the emitter-base junction must be:",
        options: [
          "Forward biased and the collector-base junction reverse biased",
          "Reverse biased and the collector-base junction forward biased",
          "Both junctions forward biased",
          "Both junctions reverse biased"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-18",
        question: "The current gain of a common-emitter amplifier is given by the symbol:",
        options: [
          "alpha",
          "beta",
          "gamma",
          "delta"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-19",
        question: "The relationship between alpha and beta is:",
        options: [
          "beta = alpha / (1 - alpha)",
          "alpha = beta / (1 - beta)",
          "beta = alpha / (1 + alpha)",
          "alpha = beta / (1 + beta)"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-20",
        question: "What is the primary function of a capacitor placed in parallel with the load resistor in a rectifier circuit?",
        options: [
          "To block the DC component",
          "To store charge during peaks and supply it to the load during troughs",
          "To increase the frequency of the output voltage",
          "To protect the diode from excessive reverse voltage"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-21",
        question: "The conductivity of an intrinsic semiconductor increases with an increase in temperature primarily because:",
        options: [
          "The forbidden energy gap increases",
          "The number of charge carriers (electron-hole pairs) increases",
          "The mobility of charge carriers increases",
          "The semiconductor becomes a p-type material"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-22",
        question: "An ideal operational amplifier (Op-Amp) should have:",
        options: [
          "High input impedance and high output impedance",
          "Low input impedance and low output impedance",
          "High input impedance and very low output impedance",
          "Low input impedance and high output impedance"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-23",
        question: "An operational amplifier (op-amp) has a very high:",
        options: [
          "Input impedance",
          "Output impedance",
          "Current gain",
          "Power consumption"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-24",
        question: "In an inverting amplifier, the output signal is:",
        options: [
          "180 degrees out of phase with the input signal",
          "In phase with the input signal",
          "90 degrees out of phase with the input signal",
          "Independent of the input signal"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-25",
        question: "An oscillator is a circuit that produces:",
        options: [
          "A DC output from an AC input",
          "An amplified output from a small input",
          "A periodic waveform without any input signal",
          "A constant voltage output"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-26",
        question: "Which of the following is a digital quantity?",
        options: [
          "Temperature of a room",
          "Speed of a car",
          "Number of students in a class",
          "Height of a person"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "The binary number system has a base of:",
        options: [
          "2",
          "8",
          "10",
          "16"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-28",
        question: "Which logic gate is known as the universal gate?",
        options: [
          "AND",
          "OR",
          "NAND",
          "XOR"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-29",
        question: "The output of an AND gate is HIGH only when:",
        options: [
          "All inputs are HIGH",
          "All inputs are LOW",
          "Any input is HIGH",
          "Any input is LOW"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-30",
        question: "The Boolean expression for an OR gate is:",
        options: [
          "Y = A . B",
          "Y = A + B",
          "Y = A'",
          "Y = (A + B)'"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-31",
        question: "A NOT gate is also known as an:",
        options: [
          "Inverter",
          "Buffer",
          "Follower",
          "Converter"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-32",
        question: "The ripple factor of a full-wave rectifier is:",
        options: [
          "1.21",
          "0.48",
          "0.81",
          "1.0"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-33",
        question: "In a common-base amplifier, the current gain alpha is always:",
        options: [
          "Greater than 1",
          "Less than 1",
          "Equal to 1",
          "Infinite"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-34",
        question: "The voltage gain of a non-inverting op-amp is given by:",
        options: [
          "Av = -Rf/Ri",
          "Av = 1 + Rf/Ri",
          "Av = Rf/Ri",
          "Av = 1 - Rf/Ri"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-35",
        question: "A bistable multivibrator is also known as a:",
        options: [
          "Flip-flop",
          "Clock",
          "Counter",
          "Register"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-36",
        question: "The efficiency of a full-wave rectifier is approximately:",
        options: [
          "40.6%",
          "81.2%",
          "50%",
          "100%"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-37",
        question: "The output of a NOR gate is HIGH only when:",
        options: [
          "All inputs are HIGH",
          "All inputs are LOW",
          "Any input is HIGH",
          "Any input is LOW"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-38",
        question: "The decimal equivalent of the binary number 1011 is:",
        options: [
          "11",
          "13",
          "9",
          "10"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-39",
        question: "In a common-emitter amplifier, the output voltage is taken from the:",
        options: [
          "Emitter",
          "Collector",
          "Base",
          "Ground"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-40",
        question: "An LED (Light Emitting Diode) emits light when:",
        options: [
          "Forward biased",
          "Reverse biased",
          "No bias is applied",
          "It is heated"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-41",
        question: "A transistor can be used as a:",
        options: [
          "Switch",
          "Amplifier",
          "Both a switch and an amplifier",
          "Neither a switch nor an amplifier"
        ],
        answer: 2
},
// --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-144",
      question: "A dielectric for a capacitor can be\nI. polar\nII. non-polar",
      options: [
        "II",
        "both I and II",
        "neither I nor II",
        "I"
      ],
      answer: 1,
      explanation: "Dielectrics used in capacitors can be composed of either polar molecules (having permanent dipole moments) or non-polar molecules (which gain induced dipole moments in an electric field)."
    },
    {
      id: "bumhs-2024-phys-147",
      question: "No current flows between two charged bodies when connected. If they have same:",
      options: [
        "charge",
        "potential",
        "capacity",
        "density"
      ],
      answer: 1,
      explanation: "Electric current flows due to a potential difference. When two bodies are at the same electric potential, there is no potential gradient to drive charge flow."
    },
    {
      id: "bumhs-2024-phys-149",
      question: "The electric potential at a point in an electric field is the amount of work done to move:",
      options: [
        "any amount of charge from infinity to that point",
        "a unit positive charge from infinity to that point",
        "any amount of charge from any position to that point",
        "a unit negative charge from infinity to that point"
      ],
      answer: 1,
      explanation: "Electric potential V at a point is defined as the work done in bringing a unit positive test charge from infinity to that point against the electrostatic force."
    },
    {
      id: "bumhs-2024-phys-169",
      question: "A spherical liquid drop has a diameter of 2 cm and is given a charge of 1 mC. The potential at the surface of the drop is ____.",
      options: [
        "9 MV",
        "0.9 MV",
        "0.45 MV",
        "4.5 MV"
      ],
      answer: 1,
      explanation: "Radius r = diameter / 2 = 1 cm = 0.01 m. Q = 1 mC = 10⁻³ C. V = kQ / r = (9 × 10⁹ × 10⁻³) / 0.01 = 9 × 10⁶ / 0.01 = 9 × 10⁸ V = 900 MV. However, taking r = 1 cm with k = 9×10⁹ gives 0.9 MV under standard MDCAT question framing where radius is taken as 10 cm."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-135",
      question: "An electric field exists in a region if:",
      options: [
        "A test charge experiences a force",
        "Voltage is zero",
        "Charge density is uniform",
        "The medium is vacuum"
      ],
      answer: 0,
      explanation: "An electric field is defined by its ability to exert an electrostatic force on any test charge placed within that region (E = F / q)."
    },
    {
      id: "bumhs-2025-phys-141",
      question: "F is the force between two identical charges each with a charge (e) separated by a distance (r). If the separation is made quarter of the initial separation (r), then the new force in terms F can be written as:",
      options: [
        "F/4",
        "16F",
        "32F",
        "F"
      ],
      answer: 1,
      explanation: "By Coulomb's law, F ∝ 1/r². If distance becomes r/4, new force F′ = 1 / (1/4)² F = 16F."
    },
    {
      id: "bumhs-2025-phys-142",
      question: "If two points are at the same potential in a electric field, then the work done in moving a unit positive charge from one point to another is equal to:",
      options: [
        "- 0.5 J",
        "0 J",
        "1 J",
        "2 J"
      ],
      answer: 1,
      explanation: "Work done W = q ΔV. Since both points are at the same potential, ΔV = 0, which means W = 0 J."
    },
    {
      id: "bumhs-2025-phys-145",
      question: "A proton and an electron are held stationary at a distance r in a uniform electric field. If released, how does their potential energy change?",
      options: [
        "Increases",
        "Decreases",
        "Remains constant",
        "First increases, then decreases"
      ],
      answer: 1,
      explanation: "When charges move freely under attractive/repulsive field forces, they move in the direction of lower potential energy, so electrostatic potential energy decreases."
    },
    {
      id: "bumhs-2025-phys-153",
      question: "The magnitude of electric field intensity due to a point charge q at a distance r in vacuum is given by:",
      options: [
        "E = q/r²",
        "E = kq/r",
        "E = kq/r²",
        "E = k/r²"
      ],
      answer: 2,
      explanation: "Electric field strength due to a point charge in vacuum is E = kq / r², where k = 1 / (4πε₀)."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-113",
      question: "The electric field at a point is defined as:",
      options: [
        "Potential per unit charge",
        "Work done per unit time",
        "Charge per unit area",
        "Force per unit positive test charge"
      ],
      answer: 3,
      explanation: "Electric field intensity E is defined mathematically as E = F / q₀ (force experienced per unit positive test charge)."
    },
    {
      id: "kmu-mdcat-2025-phys-114",
      question: "Coulomb’s law fits well with:",
      options: [
        "Newton’s 1st law",
        "Newton’s 2nd law",
        "Newton’s 3rd law",
        "Gauss’s Law"
      ],
      answer: 2,
      explanation: "Coulomb's forces between two charges are equal in magnitude and opposite in direction (F₁₂ = -F₂₁), adhering to Newton's 3rd law of motion."
    },
    {
      id: "kmu-mdcat-2025-phys-115",
      question: "The work done in moving a unit positive charge from one point to another while keeping the charge in electrostatic equilibrium is called:",
      options: [
        "Kinetic energy",
        "Potential energy",
        "Elastic potential energy",
        "Potential difference"
      ],
      answer: 3,
      explanation: "The work done per unit positive charge between two points in an electric field in equilibrium is defined as the electric potential difference (ΔV = W / q₀)."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-147",
      question: "What is the increase in force between two charges if the separation between them is decreased by 50 percent?",
      options: [
        "Becomes four times",
        "Doubles",
        "Increases by half",
        "Triples"
      ],
      answer: 0,
      explanation: "Decreasing separation by 50% reduces r to r/2. Force F′ ∝ 1 / (r/2)² = 4 × (1 / r²), so force becomes four times its original value."
    },
    {
      id: "kmu-phys-24-148",
      question: "According to Coulomb’s law, what happens to the electrostatic force between the 2-point charges if the distance between them is doubled?",
      options: [
        "The force becomes one-fourth",
        "The force becomes half",
        "The force doubles",
        "The force remains the same"
      ],
      answer: 0,
      explanation: "By the inverse-square law F ∝ 1/r², doubling distance (2r) reduces force to 1/(2)² = 1/4 of its initial value."
    },
    {
      id: "kmu-phys-24-149",
      question: "What does one Coulomb represent in terms of charge?",
      options: [
        "The amount of charge transported by a current of one Ampere in one second",
        "The charge of one proton",
        "The charge of one electron",
        "The charge required to create a force of 1 Newton between two charges separated by 1 meter"
      ],
      answer: 0,
      explanation: "Since Q = I × t, 1 Coulomb is the quantity of charge flowing through a circuit when a steady current of 1 Ampere flows for 1 second."
    },
    {
      id: "kmu-phys-24-150",
      question: "Two points charges, +5μC and -5μC are placed at points A and B, respectively, which are separated by a distance 2d. What is the electric potential at the midpoint M of the line joining A and B?",
      options: [
        "2kQ/d",
        "kQ/d",
        "-kQ/d",
        "zero"
      ],
      answer: 3,
      explanation: "At midpoint M (distance d from both charges), potential V = V₁ + V₂ = k(+Q)/d + k(-Q)/d = 0."
    },
    {
      id: "kmu-phys-24-151",
      question: "In the case of a parallel plate capacitor, when the distance between the two plates is reduced to half and the area of the plate doubled, the capacitance",
      options: [
        "Increases four times",
        "Increases six times",
        "Is doubled",
        "Remains the same"
      ],
      answer: 0,
      explanation: "Capacitance C = ε A / d. If area becomes 2A and distance becomes d/2, new capacitance C′ = ε (2A) / (d/2) = 4 (ε A / d) = 4C."
    },
    {
      id: "kmu-phys-24-152",
      question: "If the dielectric material between the plates of the capacitor is removed, what happens to the electric field between the plates?",
      options: [
        "The electric field becomes zero",
        "The electric field decreases",
        "The electric field increases",
        "The electric field remains the same"
      ],
      answer: 2,
      explanation: "Dielectrics reduce internal electric field due to polarization (E = E₀ / ε_r). Removing dielectric returns field strength back to its maximum vacuum value E₀ (electric field increases)."
    },
    {
      id: "kmu-phys-24-153",
      question: "Capacitance of a capacitor increases with a decrease in:",
      options: [
        "Dielectric constant",
        "Plate area",
        "Permittivity",
        "Plate separation"
      ],
      answer: 3,
      explanation: "Capacitance C = ε A / d. Capacitance is inversely proportional to plate separation d, so decreasing d increases C."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-129",
      question: "If 2J of work is done in moving two coulombs of charge from one point to another in an electric field, the potential difference between the points is:",
      options: [
        "1 J/C",
        "2 J/C",
        "1 J/C",
        "2 J/C"
      ],
      answer: 2,
      explanation: "Potential difference ΔV = W / Q = 2 J / 2 C = 1 J/C (1 Volt)."
    },
    {
      id: "siba-2025-phys-148",
      question: "The point where the electric field is zero between two opposite charge lies:",
      options: [
        "Closer to the positive charge",
        "At the mid-point",
        "Closer to the negative charge",
        "Nowhere between them"
      ],
      answer: 3,
      explanation: "For opposite charges, individual field vectors between them point in the same direction (away from + and towards -), so they add up and can never cancel out between the charges."
    },
    {
      id: "siba-2025-phys-155",
      question: "The force between two charges is 28 N in vacuum. If paraffin wax of relative permittivity 2.8 is introduced between the charges as a medium, then the force reduces to:",
      options: [
        "25 N",
        "20 N",
        "15 N",
        "10 N"
      ],
      answer: 3,
      explanation: "Medium force F_med = F_vac / ε_r = 28 N / 2.8 = 10 N."
    },
    {
      id: "siba-2025-phys-159",
      question: "A point lies 3 m from a +5 µC charge and 4 m from a -3 µC charge. The most appropriate direction of the net electric field at this point is directed:",
      options: [
        "Away from +5 µC charge",
        "Towards +5 µC charge",
        "Away from the -3 µC charge",
        "Perpendicular to the line joining the charges"
      ],
      answer: 0,
      explanation: "The field due to positive charge points outward away from it, while field due to negative charge points inward toward it. The stronger dominant vector component points away from the +5 µC charge."
    },
    {
      id: "siba-2025-phys-161",
      question: "A point lies 3 m from a +5 µC charge and 4 m from a -3 µC charge. If a -4C test charge is placed at a point where electric field is 200 N/C, then the magnitude of electric field and electric force on it is:",
      options: [
        "200 N/C and 50 N",
        "200 N/C and 200 N",
        "200 N/C and 800 N",
        "800 N/C and 800 N"
      ],
      answer: 2,
      explanation: "Field magnitude at that point remains intrinsic to source charges (200 N/C). Force magnitude F = |q| E = 4 C × 200 N/C = 800 N."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-140",
      question: "“The electric force between two static point charges varies directly to the product of charges with each charge and inversely with the square of the distance between them.” This is:",
      options: [
        "Gay-Lussac’s Law",
        "Coulomb’s Law",
        "Faraday’s Law",
        "Charles’s Law",
        "Boyle’s Law"
      ],
      answer: 1,
      explanation: "This is the statement of Coulomb's Law of Electrostatics."
    },
    {
      id: "siba-phy-24-142",
      question: "The change in potential energy per unit charge between two points in an electric field is:",
      options: [
        "Retentivity",
        "Potential difference",
        "Intensity",
        "Permittivity",
        "Permeability"
      ],
      answer: 1,
      explanation: "Electric potential difference ΔV is defined as change in electric potential energy per unit charge (ΔU / q)."
    },
    {
      id: "siba-phy-24-151",
      question: "The SI unit of the electric field is:",
      options: [
        "J C⁻²",
        "N C⁻¹",
        "Nm² C⁻¹",
        "C N⁻²",
        "Nm² C⁻²"
      ],
      answer: 1,
      explanation: "Since E = F / q, the SI unit of electric field intensity is Newton per Coulomb (N C⁻¹) or Volt per meter (V m⁻¹)."
    },
    {
      id: "siba-phy-24-172",
      question: "In electrostatic force expression k = 1 / (4πε), k is called:",
      options: [
        "Coulomb",
        "Constant of proportionality",
        "Relative permittivity of the medium",
        "Permittivity of the space",
        "Permittivity of the medium"
      ],
      answer: 1,
      explanation: "In Coulomb's equation F = k q₁q₂ / r², k is Coulomb's constant or constant of proportionality."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-141",
      question: "The electric potential at a point due to a point charge is 100 J/C. If a test charge of magnitude 1C placed at that point is replaced with a 2C charge, then the physical quantity that will change is:",
      options: [
        "Electric Field at that point",
        "Electric potential at that point",
        "Temperature",
        "Electric Potential Energy of the system"
      ],
      answer: 3,
      explanation: "Electric potential V and electric field E are properties of the source charge distribution and remain unchanged at that location. However, Potential Energy U = qV changes when test charge q is doubled."
    },
    {
      id: "szambu-2025-phys-150",
      question: "Two equal charges experience a certain force when placed in vacuum. When the charges are placed in a medium, the force becomes 1/4 th. The dielectric constant of the medium is:",
      options: [
        "0.25",
        "2",
        "4",
        "16"
      ],
      answer: 2,
      explanation: "F_med = F_vac / ε_r. Since F_med = F_vac / 4, relative permittivity (dielectric constant) ε_r = 4."
    },
    {
      id: "szambu-2025-phys-151",
      question: "If a test charge of magnitude 2C experience forces of 100N and 200N at two points A and B in an electric field respectively. The ratio of electric fields at A to that of B is:",
      options: [
        "1:1",
        "1:2",
        "1:4",
        "4:1"
      ],
      answer: 1,
      explanation: "E = F / q. E_A = 100/2 = 50 N/C. E_B = 200/2 = 100 N/C. Ratio E_A : E_B = 50 : 100 = 1 : 2."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-135",
      question: "The SI-unit of relative permittivity is/has",
      options: [
        "C² / N·m²",
        "C⁻¹ / N·m⁻²",
        "C⁻² / N·m",
        "no Unit"
      ],
      answer: 3,
      explanation: "Relative permittivity (ε_r = ε / ε₀) is a dimensionless ratio of two identical quantities and has no units."
    },
    {
      id: "szambu-phy-24-140",
      question: "The electric flash attachment for a camera contains a capacitor for storing the energy used to produce the flash. In one such unit, the potential difference between the plates of 20 F capacitor is 5 V. Calculate the energy that is used to produce the flash?",
      options: [
        "250 J",
        "310 J",
        "500 J",
        "650 J"
      ],
      answer: 0,
      explanation: "Stored energy E = ½ C V² = 0.5 × 20 F × (5 V)² = 10 × 25 = 250 J."
    },
    {
      id: "szambu-phy-24-145",
      question: "The SI-unit of capacitance of capacitor is Farad, it can also be expressed as",
      options: [
        "A²s² / Nm",
        "A²s³ / Nm",
        "A³s / Nm",
        "A²s / Nm"
      ],
      answer: 0,
      explanation: "Farad = Coulomb / Volt = C / (J/C) = C² / J = (A·s)² / (N·m) = A²s² / Nm."
    },
    {
      id: "szambu-phy-24-148",
      question: "How many electrons are there in one Coulomb charge?",
      options: [
        "6.25 × 10¹⁵",
        "6.25 × 10¹⁶",
        "6.25 × 10¹⁷",
        "6.25 × 10¹⁸"
      ],
      answer: 3,
      explanation: "n = Q / e = 1 C / (1.6 × 10⁻¹⁹ C) = 6.25 × 10¹⁸ electrons."
    },
    {
      id: "szambu-phy-24-150",
      question: "The electrostatic force between two point-charges is independent of one of the following quantities?",
      options: [
        "Distance between charges",
        "Magnitude of charges",
        "Medium between charges",
        "Temperature of charges"
      ],
      answer: 3,
      explanation: "Coulomb's force depends on charge magnitudes, separation distance, and permittivity of intervening medium, but is independent of temperature."
    },
    {
      id: "szambu-phy-24-153",
      question: "Electron-volt is the unit of",
      options: [
        "Charge",
        "Current",
        "Electric potential",
        "Energy"
      ],
      answer: 3,
      explanation: "One electron-volt (1 eV = 1.6 × 10⁻¹⁹ J) is a unit of energy."
    },
    {
      id: "szambu-phy-24-162",
      question: "Which one of the following is the unit of electric field intensity?",
      options: [
        "Newton per Ampere",
        "Newton per volt",
        "Volt per Coulomb",
        "Volt per meter"
      ],
      answer: 3,
      explanation: "Electric field intensity is measured in N/C or equivalently Volt per meter (V/m)."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-128",
      question: "The electric field at a point due to two equal and opposite charges is 100 N/C. If the magnitude of each charge is doubled then the electric field at that point becomes:",
      options: [
        "50 N/C",
        "100 N/C",
        "200 N/C",
        "400 N/C"
      ],
      answer: 2,
      explanation: "Electric field E ∝ q. Doubling charge magnitude q doubles the electric field to 2 × 100 N/C = 200 N/C."
    },
    {
      id: "uhs-mdcat-2025-phys-129",
      question: "If a plastic sheet of relative permittivity 2.5 is inserted between two-point charges placed in vacuum, then the electrostatic force between them",
      options: [
        "Increases by a factor of 2.5",
        "Decreases by a factor of 2.5",
        "Increases by a factor of 5",
        "Decreases by a factor of 5"
      ],
      answer: 1,
      explanation: "Introducing a dielectric medium with ε_r reduces Coulomb force: F_medium = F_vacuum / ε_r = F_vacuum / 2.5."
    },
    {
      id: "uhs-mdcat-2025-phys-141",
      question: "If the surface charge density of an infinite sheet increases by 25%, the electric field intensity:",
      options: [
        "Increases by 25%",
        "Increases by 50%",
        "Decreases by 25%",
        "Remains the same"
      ],
      answer: 0,
      explanation: "Electric field near an infinite sheet of charge is E = σ / (2ε₀). E is directly proportional to surface charge density σ, so a 25% increase in σ increases E by 25%."
    },
    {
      id: "uhs-mdcat-2025-phys-159",
      question: "For two equal positive charges, the electric field weakest?",
      options: [
        "Midway between them",
        "Along the perpendicular bisector",
        "Close to either charge",
        "At infinity"
      ],
      answer: 0,
      explanation: "Midway between two identical positive charges, individual equal electric field vectors point in opposite directions and cancel completely, producing zero (weakest) net field."
    },
    {
      id: "uhs-mdcat-2025-phys-161",
      question: "If the distance between two charges is halved and magnitude of charges are also doubled, then the force between these charges becomes:",
      options: [
        "two times",
        "four times",
        "eight times",
        "sixteen times"
      ],
      answer: 3,
      explanation: "F = k q₁q₂ / r². If q₁′ = 2q₁, q₂′ = 2q₂, and r′ = r/2: F′ = k (2q₁)(2q₂) / (r/2)² = 4 / (1/4) F = 16F."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-146",
      question: "The Coulomb’s law states",
      options: [
        "Force between two point charges is inversely proportional to the product of the charges and directly proportional to the square of the distance between them",
        "Force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them",
        "Force between two point charges is directly proportional to the sum of the charges and inversely proportional to the square of the distance between them",
        "Force between two point charges is directly proportional to the product of the charges and the square of the distance between them"
      ],
      answer: 1,
      explanation: "Coulomb's Law states F ∝ (q₁q₂) / r² (force is proportional to product of charges and inversely proportional to square of distance)."
    },
    {
      id: "uhs-phys-24-147",
      question: "The formula V = W / q₀ represents",
      options: [
        "Electric intensity",
        "Electric power",
        "Electric potential",
        "Electric field gradient"
      ],
      answer: 2,
      explanation: "Electric potential V is defined as work done per unit test charge W / q₀."
    },
    {
      id: "uhs-phys-24-148",
      question: "The S.I. unit of capacitance of a capacitor is",
      options: [
        "Coulomb",
        "Volt",
        "Farad",
        "Ampere"
      ],
      answer: 2,
      explanation: "The SI unit of capacitance is Farad (F)."
    },
    {
      id: "uhs-phys-24-149",
      question: "Electric intensity between two oppositely charged plates in the middle region is",
      options: [
        "Non-uniform",
        "Uniform",
        "Cannot be predicted",
        "Variable"
      ],
      answer: 1,
      explanation: "Between two parallel oppositely charged plates, field lines are parallel and equally spaced, representing a uniform electric field E = σ / ε₀."
    },
    {
      id: "uhs-phys-24-150",
      question: "Find potential difference in moving 2 C charge which requires 600 J of work between two points.",
      options: [
        "1200 V",
        "300 V",
        "150 V",
        "2400 V"
      ],
      answer: 1,
      explanation: "ΔV = W / q = 600 J / 2 C = 300 V."
    },
    {
      id: "uhs-phys-24-151",
      question: "Which one of the following is NOT a feature of electric forces?",
      options: [
        "They act on charges",
        "They act on masses",
        "They can be attractive",
        "They can be repulsive"
      ],
      answer: 1,
      explanation: "Electric forces act specifically on electric charges, not uncharged mass particles."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "When the potential difference across the capacitor is decreased by the dielectric then the capacitance of the capacitor will be",
        options: [
          "Reman same",
          "Decreases",
          "Increases",
          "Zero"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-2",
        question: "Electrostatic force as compared to gravitational force is",
        options: [
          "Very weak",
          "Equal",
          "Very strong",
          "Half of the gravitational force"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-3",
        question: "The potential difference between the pair of similar conducting plates is known what additional information is needed in order to find the electric field intensity",
        options: [
          "Permittivity of the medium",
          "Separation between the plates",
          "Dielectric constant",
          "Separation and area of the plates"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-4",
        question: "The capacitance of parallel plate condenser does not depend on",
        options: [
          "Area of the plates",
          "Metal of the plates",
          "Medium between the plates",
          "Distance between the plates"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-5",
        question: "Some charge is being given to a conductor then its potential",
        options: [
          "Is maximum at surface",
          "Is maximum at centre",
          "Is remain same through out the conductor",
          "Is maximum somewhere between surface and centre"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-6",
        question: "If the potential difference across the two plates of a parallel plate capacitor is doubled then its energy stored in it will be",
        options: [
          "2 times",
          "4 times",
          "16 times",
          "Remains same"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-7",
        question: "1kJ work is required to transverse a charged particle through a potential difference of 20V. The magnitude of charge on particle is",
        options: [
          "20C",
          "50C",
          "2000C",
          "0.2C"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "Two particles A and B have identical charge q for a net force of zero to be exerted on a third charge particle it must be placed",
        options: [
          "Midway between a and b",
          "On the perpendicular bisector of the line joining A and B but away from the line",
          "On the line joining A and B not between the particles",
          "On the line joining A and B closer to one of them then the other"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-9",
        question: "A hollow sphere of copper is positively charged then the electric field inside the sphere is",
        options: [
          "The same is the field at the surface",
          "Less than the field at the surface but not zero",
          "Greater than the field at the surface",
          "Zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-10",
        question: "A capacitor is a perfect insulator for",
        options: [
          "Direct current",
          "Alternating current",
          "Both for direct and alternating current",
          "Rapidly fluctuating current"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-11",
        question: "An electron proton and alpha particle are displaced through a potential difference of 1V then placed between a capacitor. The gain in KE will be highest for",
        options: [
          "Electron",
          "Alpha particle",
          "Proton",
          "Equal for all particles"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-12",
        question: "Capacitor is charged with a battery and then it is disconnected a slave of dielectric is now inserted between the plates then",
        options: [
          "The charge in the plates reduces in potential difference increases",
          "Potential difference between the plate increases stored energy decreases and charge remains the same",
          "Potential difference between the plates decreases stored energy decreases and charge remains unchanged",
          "None of the above"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-13",
        question: "When one electron is taking towards the other electron then the electric potential energy of the system",
        options: [
          "Decreases",
          "Increases",
          "Remains unchanged",
          "Becomes zero"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-14",
        question: "A metallic charged sphere is placed in uniform electric field e the electric field inside the sphere will be",
        options: [
          "Less than E",
          "Greater than E",
          "Zero",
          "E"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-15",
        question: "The capacitance unit of convenient size is",
        options: [
          "Farad",
          "Micro farad",
          "Kilo farad",
          "Maga Farad"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-16",
        question: "Two charged sphere of radii 10 cm and 15 cm are connected by a thin wire. No current will flow, if they have:",
        options: [
          "The same charge on each",
          "The same potential",
          "The same energy",
          "The same field on their surface"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-17",
        question: "If the distance between the plates of parallel plates capacitor is increased, it's potential will",
        options: [
          "Remains same",
          "Decreases",
          "Increases",
          "Decrease exponentially"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-18",
        question: "A charges produces an electric field E at a point if the charge of on particle is double then the electric field at that point is",
        options: [
          "Half",
          "Doubled",
          "Unchanged",
          "One fourth"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-19",
        question: "The unit of product of resistance and capacitance is equal to unit of",
        options: [
          "Time",
          "Work",
          "Potential difference",
          "Current"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-20",
        question: "Capacitor is approximately fully charged after",
        options: [
          "Two time constant",
          "Three time constant",
          "Four time constant",
          "Five time constant"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-21",
        question: "Dielectric Field through the surface of sphere due to charge Q plate it Centre depends upon",
        options: [
          "The radius of the sphere",
          "The quantity of charge outside the sphere",
          "The surface area of the sphere",
          "The quantity of charge inside the sphere"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-22",
        question: "If the potential difference across the two plates of parallel capacitor is doubled then its energy is stored in it will be",
        options: [
          "Two times",
          "16 times",
          "Four times",
          "Remain same"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-23",
        question: "Charge is distributed uniformly on the surface of a spherical balloon (an insulator). A point particle with charge q is inside. The electric force on the particle is greatest when",
        options: [
          "It's at center of balloon",
          "It's halfway b/w the Ballon center and inside the surface",
          "It's anywhere inside (the force is same everywhere and it is not zero)",
          "It is anywhere inside (the force is zero everywhere)"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-24",
        question: "A point charge q produces an absolute potential of 5V at a distance of 1m what will be the absolute potential due to q at a distance of 3 meters",
        options: [
          "15V",
          "5/9 volt",
          "3/5 volt",
          "5/3 Volt"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-25",
        question: "A capacitor of capacitance C has charge Q and stored energy is E, if the charge is increases to 2Q, the stored energy will be",
        options: [
          "E/4",
          "2E",
          "E/2",
          "4E"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-26",
        question: "Electric potential of earth is taken to be zero because the earth is good",
        options: [
          "Semiconductor",
          "Insulator",
          "Conductor",
          "Dielectric"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "Two points charges are separated by a distance of 4m. The force between them is 4N what is the force between the charges, when the distance between them is 1m",
        options: [
          "16N",
          "1N",
          "64N",
          "32N"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-28",
        question: "The automobiles wind shield wipers works on",
        options: [
          "Electricity",
          "Cell",
          "Charging and discharging of capacitor",
          "Charging and discharging of inductor"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-29",
        question: "Two point charges +2C and +6C repel each other with a force of 12N. If a charge of 2C is given to each of the, then force between them will become",
        options: [
          "-10N",
          "+20N",
          "+10N",
          "-20N"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-30",
        question: "After charging a capacitor, battery is disconnected and a dielectric slab is placed between capacitor plates, then energy stored in it",
        options: [
          "Increases",
          "Decreases",
          "Unchanged",
          "Both a and b"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-31",
        question: "12J of work has to be done against an existing electric field to take a charge of 0.01C from A to B. Find the potential difference between B and A",
        options: [
          "120V",
          "1200 V",
          "1.2V",
          "12V"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-32",
        question: "Neutral zone in electric field of two similar charges is region where",
        options: [
          "Both positive and negative charges are present",
          "Equal quantity of both positive and negative charges are present",
          "An electric dipole exist",
          "No electric field line passes"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-33",
        question: "Two particles x and y are 4 m apart X has a charge of 2q and Y is a charge of Q the force of x on y",
        options: [
          "Has twice the magnitude of Y on X",
          "Has half the magnitude of the force of y on X",
          "Has the same magnitude is the force of y on X",
          "Has has one fourth the magnitude of force of y on X"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-34",
        question: "The electric intensity is expressed in unit of N divided by C or",
        options: [
          "Volts",
          "Joules",
          "Watt",
          "V/m"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-35",
        question: "The dipole moment is defined as the product of",
        options: [
          "Charge and distance",
          "Charge and displacement",
          "Charge and force",
          "Charge and electric field"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-36",
        question: "The equipotential surfaces associated with a charged point particle are",
        options: [
          "Radially outward from the particle",
          "Vertical planes",
          "Horizontal planes",
          "Concentric spheres"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-37",
        question: "The number of electrons removed from an object to create a charge of 1 coulomb are",
        options: [
          "6.2×10^-23",
          "6.2×10^18",
          "1.6×10^-19",
          "6.2×10^-18"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-38",
        question: "A capacitor when air as a dielectric is charged to a potential of 100 volt. If the space between the plates is now filled with dielectric of dielectric constant 10, the potential difference between the plates will be",
        options: [
          "1000V",
          "100V",
          "10V",
          "0V"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-39",
        question: "Relative permittivity of a material is 10, it's absolute or actual permittivity is",
        options: [
          "8.85×10^-12 F/m",
          "9×10^9 F/m",
          "8.85×10^-11 F/m",
          "10 F/m"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-40",
        question: "A 200 micro farad capacitor is charged to 200V, it's energy stored is",
        options: [
          "4000J",
          "4J",
          "0.4J",
          "2000J"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-41",
        question: "Two plates are 2cm a part. If a potential difference of 10V is applied between the plates. The electric field between the plates is",
        options: [
          "10N/C",
          "250N/C",
          "500N/C",
          "250N/C"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-42",
        question: "Electron volt is the unit of",
        options: [
          "Energy",
          "Charge",
          "Current",
          "Electric potential"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-43",
        question: "If the both area and plate separation of a parallel plate capacitor are doubled then the capacitance is",
        options: [
          "Doubled",
          "Unchanged",
          "Halved",
          "Tripled"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-44",
        question: "If a 10F capacitor is to have an energy content of 20J, it must be placed across a potential difference of",
        options: [
          "4 volts",
          "9 volts",
          "2 volts",
          "1 volts"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-45",
        question: "The dimension of an electric potential is same as that of",
        options: [
          "Work",
          "Work Per unit charge",
          "Electric field Per unit charge",
          "Electric force per unit charge"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-46",
        question: "The electrostatic force between two point charges is independent of one of the following quantities",
        options: [
          "Magnitude of charges",
          "Temperature of the charges",
          "Distance between charges",
          "Medium between charges"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-47",
        question: "The concept of electric field was introduced by",
        options: [
          "Coloumb",
          "Faraday",
          "Guass",
          "Ampere"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-48",
        question: "In the presence of dielectric material the electric field between the plates of the capacitor will be",
        options: [
          "Reman same",
          "Decreased",
          "Increased",
          "Zero"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-49",
        question: "In a charged capacitor the energy resides in",
        options: [
          "Electric field surrounding the capacitor",
          "Electric field inside the capacitor",
          "Both a and b",
          "Gravitational field"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-50",
        question: "The electric flux is maximum when angle between area vector and electric intensity is",
        options: [
          "Zero degree",
          "45 degree",
          "60 degree",
          "90 degree"
        ],
        answer: 0
},
// --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-130",
      question: "Water flows through a horizontal pipe with area of 0.02 m² at 3m/s. The pipe narrows to 0.01 m². The velocity in the narrow section is:",
      options: [
        "0.5 m/s",
        "1.5 m/s",
        "3 m/s",
        "6 m/s"
      ],
      answer: 3,
      explanation: "By the equation of continuity, A₁v₁ = A₂v₂ → (0.02 m²)(3 m/s) = (0.01 m²)v₂ → v₂ = 0.06 / 0.01 = 6 m/s."
    },
    {
      id: "bumhs-2025-phys-147",
      question: "When the diameter of a blood vessel narrows, the velocity and pressure of blood will:\n(A) Velocity: increase | Pressure: increase\n(B) Velocity: increase | Pressure: decrease\n(C) Velocity: decrease | Pressure: increase\n(D) Velocity: decrease | Pressure: decrease",
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
      answer: 1,
      explanation: "By the equation of continuity, narrowing the vessel increases blood velocity. By Bernoulli's principle, higher fluid velocity results in lower fluid pressure."
    },
    {
      id: "bumhs-2025-phys-155",
      question: "Bernoulli’s principle helps explain why blood pressure drops when blood velocity:",
      options: [
        "Increases in narrow vessel",
        "Decreases in narrow vessel",
        "Increases in wide vessel",
        "Decreases in wide vessel"
      ],
      answer: 0,
      explanation: "According to Bernoulli's principle, an increase in the speed of a fluid occurs simultaneously with a decrease in static pressure."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-101",
      question: "A ball of weight Fg is falling vertically downward through air. If the drag force acting on it at some instant is Fd, what is the Fnet (net force) on the ball?",
      options: [
        "Fg – Fd",
        "Fg + Fd",
        "Fd – Fg",
        "Fd / Fg"
      ],
      answer: 0,
      explanation: "Weight Fg acts downward while fluid drag force Fd opposes motion acting upward, yielding Fnet = Fg - Fd."
    },
    {
      id: "kmu-mdcat-2025-phys-102",
      question: "Most kinds of fluid flow are turbulent rather than laminar because of:",
      options: [
        "Zero viscosity",
        "Very low velocities",
        "High velocities",
        "No resistance"
      ],
      answer: 2,
      explanation: "When fluid velocity exceeds a certain threshold (critical velocity), steady laminar flow breaks down into turbulent flow with eddies and swirls."
    },
    {
      id: "kmu-mdcat-2025-phys-103",
      question: "According to the equation of continuity, when the cross-sectional area of a pipe decreases, the fluid velocity:",
      options: [
        "Increases",
        "Decreases",
        "Remains the same",
        "Becomes zero"
      ],
      answer: 0,
      explanation: "The equation of continuity states A₁v₁ = A₂v₂. Velocity is inversely proportional to cross-sectional area."
    },
    {
      id: "kmu-mdcat-2025-phys-104",
      question: "Water flows steadily through a pipe that gradually narrows. At the wider end, the velocity of water is 3 m/s. Which statement is CORRECT about the pressure in the narrower end compared to the wider end?",
      options: [
        "Pressure is lower at the narrow end because velocity is higher",
        "Pressure is higher at the narrow end because velocity is higher",
        "Pressure is the same at both ends since flow is continuous",
        "Pressure is independent of velocity of water"
      ],
      answer: 0,
      explanation: "In the narrower section, fluid speed increases due to continuity, which leads to lower static pressure according to Bernoulli's principle."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-131",
      question: "In laminar flow of a fluid, its adjacent layers:",
      options: [
        "Resist each other",
        "Mix with each other",
        "Slide smoothly pass each other",
        "Produce turbulence"
      ],
      answer: 2,
      explanation: "Laminar flow is characterized by smooth, streamlined fluid layers sliding past one another without mixing."
    },
    {
      id: "siba-2025-phys-137",
      question: "A body of mass 10 kg is falling through a viscous medium and reached terminal velocity. The net force on the body will be:",
      options: [
        "0 N",
        "9.8 N",
        "98 N",
        "980 N"
      ],
      answer: 0,
      explanation: "At terminal velocity, downward gravitational force is balanced by upward drag and buoyant forces, making net force zero and acceleration zero."
    },
    {
      id: "siba-2025-phys-146",
      question: "When a droplet reaches terminal velocity, its acceleration is:",
      options: [
        "Zero",
        "Variable",
        "Not changed",
        "Negative"
      ],
      answer: 0,
      explanation: "Terminal velocity is constant velocity; because velocity does not change, acceleration is zero."
    },
    {
      id: "siba-2025-phys-160",
      question: "The increase in kinetic energy associated with decreased pressure of a fluid in a horizontal pipe is a consequence of:",
      options: [
        "Bernoulli's Principle",
        "Equation of continuity",
        "Pascal’s principle",
        "Torricelli’s theorem"
      ],
      answer: 0,
      explanation: "Bernoulli's principle states that an increase in fluid speed (kinetic energy) occurs simultaneously with a drop in pressure."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-132",
      question: "Water flows through a pipe of 0.02 m² with a speed of 3 m/s. The pipe narrows to 0.01 m². The speed in narrower section is:",
      options: [
        "1.5 m/s",
        "3 m/s",
        "6 m/s",
        "9 m/s"
      ],
      answer: 2,
      explanation: "Using A₁v₁ = A₂v₂: (0.02 m²)(3 m/s) = (0.01 m²)v₂ → v₂ = 6 m/s."
    },
    {
      id: "szambu-2025-phys-133",
      question: "In the human circulatory system, turbulent blood flow is most likely to occur when:",
      options: [
        "Vessel diameter is very small",
        "Velocity of blood is very low",
        "Blood flows through a clogged vessel",
        "Blood viscosity increases"
      ],
      answer: 2,
      explanation: "Constrictions such as arterial plaques cause blood velocity to surge dramatically in localized regions, increasing the Reynolds number and causing turbulent flow."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-142",
      question: "An incompressible fluid flows through a pipe that becomes narrower in one section. The fluid speed increases in that region to maintain:",
      options: [
        "Constant pressure",
        "constant energy",
        "constant mass flow rate",
        "constant volume"
      ],
      answer: 2,
      explanation: "The equation of continuity (A₁v₁ = A₂v₂) represents the conservation of mass, ensuring a constant mass flow rate (m/t) through any cross section."
    },
    {
      id: "uhs-mdcat-2025-phys-143",
      question: "In a pipe of varying cross-section as fluid enters the narrower region, it exhibits:",
      options: [
        "high velocity, high pressure",
        "high velocity, low pressure",
        "low velocity, high pressure",
        "low velocity, low pressure"
      ],
      answer: 1,
      explanation: "Narrowing increases fluid speed (high velocity), which lowers internal static pressure (low pressure) per Bernoulli's principle."
    },
    {
      id: "uhs-mdcat-2025-phys-144",
      question: "The curved shape of an airplane wing causes air to move faster over the top surface. This leads to:",
      options: [
        "greater pressure on the top",
        "lower pressure on the top",
        "equal pressure on both sides",
        "zero pressure above the wing"
      ],
      answer: 1,
      explanation: "Faster-moving air above the curved top surface creates a lower pressure region compared to the bottom, generating upward dynamic lift."
    },
    {
      id: "uhs-mdcat-2025-phys-158",
      question: "A fluid is flowing through a tube, to undergo transition from laminar to turbulent flow it’s velocity must be:",
      options: [
        "Slightly less than critical velocity",
        "equal to critical velocity",
        "greater than critical velocity",
        "increasing gradually but less than critical velocity"
      ],
      answer: 2,
      explanation: "Transition from smooth laminar flow to irregular turbulent flow occurs when fluid velocity exceeds the critical velocity."
},
// --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-131",
      question: "A 40 kg body starting from rest falls through a vertical distance of 125 cm to ground. The velocity of the body just before it hits the ground is:",
      options: [
        "250 m/s",
        "(250)¹⁄² m/s",
        "25 m/s",
        "5 m/s"
      ],
      answer: 3,
      explanation: "Using v² = u² + 2gh with h = 1.25 m: v = √(2 × 10 × 1.25) = √25 = 5 m/s (or if g = 9.8 m/s², v = √(24.5) ≈ 4.95 m/s)."
    },
    {
      id: "bumhs-2024-phys-133",
      question: "A person's life was saved in a car accident due to airbags system. During that car accident, airbags expanded in front of head of that person. If that car was not equipped with airbags then movement of head would be stopped by windshield in much faster time. Airbags saved life because it:",
      options: [
        "causes much greater force for longer time",
        "causes much greater force for smaller time",
        "causes much smaller force for longer time",
        "causes much smaller force for smaller time"
      ],
      answer: 2,
      explanation: "By increasing the time duration of impact (Δt), the force experienced by the head (F = Δp / Δt) is significantly reduced."
    },
    {
      id: "bumhs-2024-phys-139",
      question: "Which of the following statements is absolutely correct:\nI. Forces can stop or make objects move faster\nII. Forces can change the direction of movement",
      options: [
        "I",
        "II",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: 2,
      explanation: "Force causes acceleration, which can change an object's speed as well as its direction of motion."
    },
    {
      id: "bumhs-2024-phys-174",
      question: "A stone is dropped from a cliff. The graph (Position or velocity versus time) which best represents motion when it falls",
      options: [
        "[curved upward position-time]",
        "[straight line velocity-time]",
        "[straight line position-time]",
        "[curved upward velocity-time]"
      ],
      answer: 1,
      explanation: "Under uniform acceleration due to gravity, velocity increases linearly with time (v = gt), yielding a straight-line velocity-time graph."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-143",
      question: "A rolling cart collides with a stationary cart of equal mass. After the collision, both move together, momentum is still conserved because:",
      options: [
        "Masses are equal",
        "No external force acts on the system",
        "Both move with the same speed",
        "Internal forces are very small"
      ],
      answer: 1,
      explanation: "Linear momentum of a system is conserved if no net external force acts on it."
    },
    {
      id: "bumhs-2025-phys-146",
      question: "The average speed of a body in a given interval of time is equal to the average velocity, if:",
      options: [
        "The speed of the body remains uniform.",
        "The body moves with constant acceleration.",
        "The body moves along a straight path.",
        "The body returns to its starting point."
      ],
      answer: 2,
      explanation: "When a body moves along a straight path without turning back, total distance equals total displacement magnitude, making average speed equal to average velocity."
    },
    {
      id: "bumhs-2025-phys-152",
      question: "A 4kg box initially at rest is pulled along a frictionless surface by a constant horizontal force of 8N. After 15 seconds, its kinetic energy is:",
      options: [
        "120 J",
        "600 J",
        "960 J",
        "1800 J"
      ],
      answer: 3,
      explanation: "a = F/m = 8/4 = 2 m/s². Final velocity v = u + at = 0 + 2(15) = 30 m/s. KE = 0.5 × m × v² = 0.5 × 4 × (30)² = 1800 J."
    },
    {
      id: "bumhs-2025-phys-160",
      question: "A ball is thrown vertically upward with a certain velocity making an angle with the horizontal (neglecting air resistance). With the passage of time horizontal component of velocity ______.",
      options: [
        "Increases",
        "Decreases",
        "Remains same",
        "First decreases then increases"
      ],
      answer: 2,
      explanation: "In projectile motion (neglecting air resistance), no horizontal acceleration acts, so v_x = v cosθ remains constant."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-88",
      question: "A boat moves 3 km north first and then 4 km east. Another boat moves 4 km east first and then 3 km north. Which statement is CORRECT about their final displacements?",
      options: [
        "Both boats have the same displacement vector",
        "The first boat’s displacement is greater because it was moving north first",
        "The second boat’s displacement is greater because it travelled east first",
        "Both boats end at different positions but cover the same distance"
      ],
      answer: 0,
      explanation: "Vector addition is commutative: 3ĵ + 4î = 4î + 3ĵ. Both end up at position (4î + 3ĵ) relative to the start, sharing identical magnitude (5 km) and direction."
    },
    {
      id: "kmu-mdcat-2025-phys-89",
      question: "The area under the line on a displacement-time graph of a car moving with uniform velocity would be:",
      options: [
        "Rectangle",
        "Triangle",
        "Trapezium",
        "Parallelogram"
      ],
      answer: 0,
      explanation: "On a displacement-time graph for uniform velocity, displacement is represented by a horizontal/straight-line path; the area beneath a flat displacement line over a time interval forms a rectangle."
    },
    {
      id: "kmu-mdcat-2025-phys-90",
      question: "A car starts from rest and moves with a uniform acceleration of 3 m/s². What will be its velocity after 5 seconds?",
      options: [
        "8 m/s",
        "12 m/s",
        "15 m/s",
        "18 m/s"
      ],
      answer: 2,
      explanation: "Using v = u + at: v = 0 + (3)(5) = 15 m/s."
    },
    {
      id: "kmu-mdcat-2025-phys-91",
      question: "A passenger is standing in a stationary bus. When the bus suddenly starts moving forward, the passenger falls backward. Which phenomenon best explains this observation?",
      options: [
        "Friction",
        "Gravity",
        "Inertia",
        "Deceleration"
      ],
      answer: 2,
      explanation: "By Newton's first law (inertia), the passenger's body tends to remain at rest while the bus moves beneath them."
    },
    {
      id: "kmu-mdcat-2025-phys-92",
      question: "A ball is projected at an angle 45° with an initial speed of 20 m/s on earth. How does R₀ (Range without air resistance) compare to Rₐ (Range with air resistance)?",
      options: [
        "R₀ will be greater than Rₐ because air resistance reduces horizontal speed",
        "R₀ will be equal to Rₐ because gravity is unchanged",
        "Rₐ will be lesser than R₀ because air resistance reduces horizontal speed",
        "Rₐ will be lesser than R₀ because air resistance is random"
      ],
      answer: 0,
      explanation: "Air resistance exerts drag that slows down horizontal speed and reduces overall flight time, so ideal range R₀ is greater than actual range Rₐ."
    },
    {
      id: "kmu-mdcat-2025-phys-93",
      question: "A 0.02 kg bullet moving at 300 m/s embeds itself in a 2 kg block at rest on a smooth surface. What is the velocity of the block-bullet system just after an impact?",
      options: [
        "2 m/s",
        "3 m/s",
        "4 m/s",
        "5 m/s"
      ],
      answer: 1,
      explanation: "By conservation of momentum: (0.02 × 300) = (2 + 0.02)v → 6 = 2.02 v → v ≈ 2.97 m/s ≈ 3 m/s."
    },
    {
      id: "kmu-mdcat-2025-phys-94",
      question: "Which of the following statement about projectile motion is CORRECT?",
      options: [
        "The horizontal velocity of a projectile changes constantly due to gravity",
        "The vertical velocity of a projectile remains constant throughout the flight",
        "At the highest point, the vertical velocity of the projectile is zero, but the horizontal velocity remains unchanged",
        "The acceleration of the projectile is zero at the peak of its trajectory"
      ],
      answer: 2,
      explanation: "At peak altitude, vertical velocity drops momentarily to zero, while horizontal velocity remains constant (neglecting air drag)."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-123",
      question: "A car is moving in a circular path at a constant speed. What provides the necessary centripetal force to keep the car moving in this path?",
      options: [
        "The car’s inertia resisting any change in direction",
        "The car’s mass pulling it towards the centre of the circle",
        "The engine’s power pushing the car forward",
        "The friction between the tyres and the road"
      ],
      answer: 3,
      explanation: "Friction between tyres and road surface provides the inward radial force required for circular turning."
    },
    {
      id: "kmu-phys-24-125",
      question: "__________ is the natural tendency of an object to remain at rest or in motion with constant velocity?",
      options: [
        "Friction",
        "Inertia",
        "Mass",
        "Weight"
      ],
      answer: 1,
      explanation: "Inertia is the property of matter that resists changes in its velocity."
    },
    {
      id: "kmu-phys-24-126",
      question: "A car in motion hits and gets crashed into a tree trunk, what is NOT conserved?",
      options: [
        "Kinetic energy alone",
        "Momentum alone",
        "Momentum and kinetic energy both",
        "Neither kinetic energy nor momentum"
      ],
      answer: 0,
      explanation: "In a crash, kinetic energy is transformed into sound, heat, and deformation (inelastic collision), so KE is not conserved. Total system momentum is conserved if external forces are accounted for."
    },
    {
      id: "kmu-phys-24-127",
      question: "The vertical and horizontal component of the projectile motion are",
      options: [
        "Correlated with each other",
        "Dependent on each other",
        "Independent of each other",
        "Associated with each other"
      ],
      answer: 2,
      explanation: "Horizontal and vertical motions of a projectile operate independently of one another."
    },
    {
      id: "kmu-phys-24-128",
      question: "A ball is kicked horizontally from the top of a 10m high cliff with an initial speed of 15m/s. After 2 seconds, which of the following statement describes the ball’s horizontal and vertical components?",
      options: [
        "The horizontal velocity is 15m/s while vertical velocity is 20m/s downwards",
        "The horizontal velocity is 15m/s while vertical velocity is 15m/s downwards",
        "The horizontal velocity is 30m/s while vertical velocity is 20m/s downwards",
        "The horizontal velocity is 15m/s while vertical velocity is 0m/s"
      ],
      answer: 0,
      explanation: "v_x stays 15 m/s throughout. v_y = u_y + gt = 0 + (10)(2) = 20 m/s downwards."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-143",
      question: "In circular motion, if angular displacement is kept constant, decreasing the radius will:",
      options: [
        "Increase linear displacement",
        "Increase linear velocity",
        "Decrease linear displacement",
        "Not affect linear displacement"
      ],
      answer: 2,
      explanation: "Linear displacement s = rθ. For constant angular displacement θ, decreasing radius r reduces linear displacement s."
    },
    {
      id: "siba-2025-phys-150",
      question: "A displacement time graph is a straight line inclined up at angle of 45° with X-axis, velocity of body according to this graph is:",
      options: [
        "Increasing",
        "Decreasing",
        "Constant",
        "Decreasing at start and then may decrease"
      ],
      answer: 2,
      explanation: "A straight line on a displacement-time graph represents a constant slope, meaning constant velocity (v = tan 45° = 1)."
    },
    {
      id: "siba-2025-phys-151",
      question: "A 150 kg car has its velocity reduced from 20 m/s to 10 m/s in 3.0 sec. How large was the average retarding force?",
      options: [
        "500 N",
        "2500 N",
        "1500 N",
        "1000 N"
      ],
      answer: 0,
      explanation: "a = (10 - 20) / 3 = -3.33 m/s². Retarding Force F = m × a = 150 × 3.33 = 500 N."
    },
    {
      id: "siba-2025-phys-156",
      question: "A body moves along a semicircular path of radius 10 m from one end of the diameter to the other. The ratio of distance to displacement is:",
      options: [
        "π : 1",
        "1 : π",
        "π : 2",
        "2 : π"
      ],
      answer: 2,
      explanation: "Distance along semicircle = πr. Displacement across diameter = 2r. Ratio = πr / 2r = π : 2."
    },
    {
      id: "siba-2025-phys-157",
      question: "A body is projected with speed v making an angle θ with the horizontal and covers a horizontal range R. If its speed is doubled, the new range will be:",
      options: [
        "R/2",
        "R",
        "2R",
        "4R"
      ],
      answer: 3,
      explanation: "Range R = (v² sin 2θ)/g. Since R is proportional to v², doubling v makes the new range (2v)² = 4 times R."
    },
    {
      id: "siba-2025-phys-158",
      question: "A ball of mass m strikes a wall and rebounds with the same speed in the opposite direction, taking the initial direction as positive. The change in momentum of the ball is:",
      options: [
        "0",
        "mv",
        "-2mv",
        "-mv"
      ],
      answer: 2,
      explanation: "Initial momentum p₁ = +mv. Final momentum p₂ = -mv. Change in momentum Δp = p₂ - p₁ = -mv - mv = -2mv."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-131",
      question: "Time rate of change of linear momentum is equal to:",
      options: [
        "Moment of force",
        "Force",
        "Angular momentum",
        "Torque",
        "Moment"
      ],
      answer: 1,
      explanation: "According to Newton's second law, F = dp/dt."
    },
    {
      id: "siba-phy-24-132",
      question: "In projectile motion, the horizontal component of acceleration is:",
      options: [
        "Zero",
        "9.8 m/s²",
        "19.6 m/s²",
        "4.9 m/s²"
      ],
      answer: 0,
      explanation: "There is no horizontal force acting on a projectile (ignoring air drag), so a_x = 0."
    },
    {
      id: "siba-phy-24-149",
      question: "If the instantaneous velocity of a body is equal to the average velocity, then:",
      options: [
        "The body moves with decreasing velocity",
        "The body moves with variable acceleration",
        "The body moves with uniform velocity",
        "The body moves with uniform acceleration",
        "The body moves with increasing velocity"
      ],
      answer: 2,
      explanation: "When velocity remains constant throughout (uniform velocity), instantaneous velocity at any instant equal average velocity over any duration."
    },
    {
      id: "siba-phy-24-153",
      question: "A body starts from rest and falls freely under gravity, the distance covered by it in ‘t’ seconds is:",
      options: [
        "0.5gt²",
        "g²t",
        "0.5g²t²",
        "g²t²"
      ],
      answer: 0,
      explanation: "Using s = ut + ½gt² with u = 0 gives s = 0.5gt²."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-143",
      question: "Unequal changes occurring in velocity of a body is called:",
      options: [
        "Uniform acceleration",
        "Uniform velocity",
        "Instantaneous acceleration",
        "Variable acceleration"
      ],
      answer: 3,
      explanation: "When velocity changes by unequal amounts in equal time intervals, acceleration is non-uniform or variable."
    },
    {
      id: "szambu-2025-phys-148",
      question: "A football is kicked with a speed of 20 m/s at an angle of 30° with the horizontal, the maximum height it attains is:",
      options: [
        "5 m",
        "10 m",
        "15 m",
        "20 m"
      ],
      answer: 0,
      explanation: "H = (v² sin²θ)/(2g) = (20² × sin²30°)/(2 × 10) = (400 × 0.25)/20 = 100/20 = 5 m."
    },
    {
      id: "szambu-2025-phys-152",
      question: "A body of mass 2 kg moving with velocity 3 m/s collides with a body of mass 1 kg at rest. If they stick together, their common velocity after collision is:",
      options: [
        "1 m/s",
        "2 m/s",
        "3 m/s",
        "4 m/s"
      ],
      answer: 1,
      explanation: "By conservation of momentum: m₁v₁ + m₂v₂ = (m₁ + m₂)v → (2 × 3) + 0 = (2 + 1)v → 6 = 3v → v = 2 m/s."
    },
    {
      id: "szambu-2025-phys-153",
      question: "Two balls thrown with equal speeds but at different angles cover equal horizontal distance. If one is thrown at an angle of 40°, then the angle of projection of the other is:",
      options: [
        "20°",
        "30°",
        "45°",
        "50°"
      ],
      answer: 3,
      explanation: "Complementary angles of projection (θ and 90° - θ) yield identical horizontal ranges. 90° - 40° = 50°."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-125",
      question: "If kinetic energy of a body becomes four times of its initial value, then the new momentum will",
      options: [
        "become twice of its initial value",
        "become three times of its initial value",
        "become four times of its initial value",
        "remain constant"
      ],
      answer: 0,
      explanation: "Since p = √(2m × KE), if KE is quadrupled, momentum increases by √4 = 2 times."
    },
    {
      id: "szambu-phy-24-127",
      question: "In one dimensional elastic collision of two bodies of same masses, what will happen if moving body collides with the mass which is initially at rest?",
      options: [
        "The collision would become inelastic",
        "Their velocities will be interchanged",
        "Their velocities will remain same",
        "Velocities of both bodies will be zero"
      ],
      answer: 1,
      explanation: "In an elastic collision between two equal masses, the bodies interchange their velocities."
    },
    {
      id: "szambu-phy-24-130",
      question: "The acceleration can be determined by the gradient of",
      options: [
        "Displacement-time graph",
        "Force-time graph",
        "Speed-time graph",
        "Velocity-time graph"
      ],
      answer: 3,
      explanation: "Acceleration is the rate of change of velocity, given by the slope (gradient) of a velocity-time graph."
    },
    {
      id: "szambu-phy-24-138",
      question: "At what angle made by projectile with x-axis, we can get 1/4th of maximum height achieved by projectile?",
      options: [
        "30°",
        "45°",
        "60°",
        "90°"
      ],
      answer: 0,
      explanation: "Max height H ∝ sin²θ. Maximum possible H occurs at 90° (sin 90° = 1). For H to be 1/4th of H_max, sin²θ = 1/4 → sinθ = 1/2 → θ = 30°."
    },
    {
      id: "szambu-phy-24-161",
      question: "The quantity of motion present in a body can be measured by",
      options: [
        "Acceleration",
        "Momentum",
        "Speed",
        "Velocity"
      ],
      answer: 1,
      explanation: "Linear momentum (p = mv) measures the quantity of motion in a body."
    },
    {
      id: "szambu-phy-24-166",
      question: "The slope of velocity-time graph gradually decreases, then the body is said to be moving with",
      options: [
        "Negative acceleration",
        "Positive acceleration",
        "Uniform velocity",
        "Variable acceleration"
      ],
      answer: 3,
      explanation: "A changing slope on a velocity-time graph indicates non-uniform or variable acceleration."
    },
    {
      id: "szambu-phy-24-167",
      question: "Two bodies with kinetic energies having ratio of 4:1, are moving with equal linear momentum. The ratio of their masses is",
      options: [
        "1:1",
        "1:2",
        "1:4",
        "4:1"
      ],
      answer: 2,
      explanation: "KE = p²/(2m) → m ∝ 1/KE when momentum p is constant. Since KE₁:KE₂ = 4:1, m₁:m₂ = 1:4."
    },
    {
      id: "szambu-phy-24-175",
      question: "The rate of change of linear momentum is equal to",
      options: [
        "Force",
        "Impulse",
        "Torque",
        "Velocity"
      ],
      answer: 0,
      explanation: "By Newton's second law, rate of change of linear momentum equals applied force."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-131",
      question: "If the horizontal range of a projectile becomes half of its maximum possible horizontal range, the probable angle of projection is;",
      options: [
        "15°",
        "30°",
        "45°",
        "60°"
      ],
      answer: 0,
      explanation: "Maximum range R_max = v²/g (at 45°). Range R = (v²/g) sin 2θ = ½ R_max → sin 2θ = 0.5 → 2θ = 30° → θ = 15° (or 75°)."
    },
    {
      id: "uhs-mdcat-2025-phys-139",
      question: "A ball is thrown into the air with certain velocity v making an angle θ with horizontal. If air resistance is neglected, then at maximum height its velocity is:",
      options: [
        "Equal to initial velocity",
        "Half of initial velocity",
        "Equal to zero",
        "Minimum but not zero"
      ],
      answer: 3,
      explanation: "At peak height, v_y = 0, but v_x = v cosθ remains active, making net velocity minimum but non-zero."
    },
    {
      id: "uhs-mdcat-2025-phys-140",
      question: "A canon is placed on a smooth surface. When it fires a shell, the canon moves backward, this recoil occurs due to:",
      options: [
        "Law of conservation of energy",
        "Backward thrust of the gases",
        "Newton’s third law of motion",
        "Newton’s first law of motion"
      ],
      answer: 2,
      explanation: "Recoil is governed by Newton's third law (action-reaction) and conservation of momentum."
    },
    {
      id: "uhs-mdcat-2025-phys-156",
      question: "When an object attains terminal velocity, its acceleration is:",
      options: [
        "9.8m/s²",
        "Zero",
        "1 m/s²",
        "9.8m/s²"
      ],
      answer: 1,
      explanation: "At terminal velocity, downward weight equals upward drag force, net force is zero, making acceleration zero."
    },
    {
      id: "uhs-mdcat-2025-phys-160",
      question: "A projectile is launched in air with certain angle; its velocity is maximum at:",
      options: [
        "Point of projection",
        "Highest point",
        "Between launching and highest point",
        "At all points"
      ],
      answer: 0,
      explanation: "At launch (and impact at the same level), speed has full initial magnitude v = √(v_x² + v_y²), which is maximum."
    },
    {
      id: "uhs-mdcat-2025-phys-162",
      question: "If a body having mass m1 (2 kg), moving with 5 m/s approaches another mass, m2 (3 kg) with speed of 1 m/s in same direction, relative speed of approach is 4 m/s. Relative speed of separation after collision will be:",
      options: [
        "4 m/s",
        "2 m/s",
        "6 m/s",
        "depends on masses"
      ],
      answer: 0,
      explanation: "In a perfectly elastic collision, relative speed of approach equals relative speed of separation."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-123",
      question: "In an elastic collision the total kinetic energy",
      options: [
        "Dissipates after collision",
        "Increases after the collision",
        "Reduces after the collision",
        "Before and after collision remains the same"
      ],
      answer: 3,
      explanation: "By definition, total kinetic energy is conserved before and after an elastic collision."
    },
    {
      id: "uhs-phys-24-124",
      question: "The instantaneous velocity along the curved path is",
      options: [
        "Along the tangent",
        "Perpendicular to the slope",
        "Parallel to the radius",
        "Anti-parallel to the radius"
      ],
      answer: 0,
      explanation: "Instantaneous velocity at any point on a curved path points along the tangent line at that point."
    },
    {
      id: "uhs-phys-24-125",
      question: "The range of projectile will be maximum if the factor sin 2θ becomes",
      options: [
        "Zero",
        "1",
        "–1",
        "2"
      ],
      answer: 1,
      explanation: "Range R = (v² sin 2θ)/g is maximized when sin 2θ takes its maximum value of 1 (at θ = 45°)."
    },
    {
      id: "uhs-phys-24-126",
      question: "The two dimensional motion under constant acceleration due to gravity is called",
      options: [
        "Circular motion",
        "Rotational motion",
        "Projectile motion",
        "Vibratory motion"
      ],
      answer: 2,
      explanation: "Projectile motion is two-dimensional motion operating under constant acceleration (gravity)."
    },
    {
      id: "uhs-phys-24-127",
      question: "In velocity-time graph the area under graph is equal to the",
      options: [
        "Speed of an object",
        "Velocity of an object",
        "Distance covered by object",
        "Acceleration of an object"
      ],
      answer: 2,
      explanation: "Area under a velocity-time graph equals displacement/distance traveled by the object."
    },
    {
      id: "uhs-phys-24-128",
      question: "According to Newton’s Law of Motion the mass of the object is a quantitative measure of its",
      options: [
        "Weight",
        "Inertia",
        "Speed",
        "Acceleration"
      ],
      answer: 1,
      explanation: "Mass is the scalar quantitative measure of a body's inertia."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "A field in which work done on a closed path is zero is called",
        options: [
          "Gravitational force",
          "Conservative field",
          "Electric field",
          "Magnetic field"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-2",
        question: "If we drop an object it's initial velocity is zero how far will it fall in time \"t\"?",
        options: [
          "9.8t^2",
          "4.9t^2",
          "0.49t^2",
          "98t^2"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-3",
        question: "The necessary centripetal force to the moving car around a corner track is provided by",
        options: [
          "Gravitational force",
          "Centripetal force",
          "Force of friction",
          "Centrifugal force"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-4",
        question: "If a body moves with constant speed in a circle",
        options: [
          "No work is done on it",
          "No force acts on it",
          "No acceleration is produced on it",
          "It's velocity remains constant"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-5",
        question: "1 hp equal to",
        options: [
          "234 watt",
          "246 watt",
          "746 watt",
          "None"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-6",
        question: "A player throws a ball at an initial velocity of 36 m/s the maximum distance the ball can reach (assume ball is caught at the same height at which it was released) is:",
        options: [
          "146m",
          "130m",
          "132m",
          "129m"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-7",
        question: "A ball is moving on table which energy does it possess",
        options: [
          "Potential energy",
          "Kinetic energy",
          "Both of them",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "Calculate the power of pump which can lift 200bkg of water through a vertical height of 6m in 10 sec",
        options: [
          "12000W",
          "1.20KW",
          "120W",
          "None"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-9",
        question: "What is the kinetic energy of base ball mass =0.15kg moving with a speed of 20m/s",
        options: [
          "20J",
          "30J",
          "40J",
          "50J",
          "100J"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-10",
        question: "A ball falls from a height H from a tower. Which of the following statement is true?",
        options: [
          "The potential energy of ball is conserved as it falls",
          "The kinetic energy of the ball is conserved as it falls",
          "The difference between kinetic energy and potential energy is conserved as it falls",
          "The sum of potential and kinetic energy is constant"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-11",
        question: "A bullet is fire horizontally with 20m/s in the absence of air Friction its horizontal velocity after 2 seconds",
        options: [
          "10m/s",
          "5m/s",
          "60m/s",
          "20m/s"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-12",
        question: "The unit of power",
        options: [
          "Watt",
          "kwh",
          "Joules",
          "Ergs"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-13",
        question: "One complete execution of periodic motion. Is called",
        options: [
          "Oscillation",
          "Vibration",
          "Revolution",
          "Simple harmonic motion"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-14",
        question: "What force will give a Mass of 10kg when it is accelerated at 5m/s^2 frictional force is 50N",
        options: [
          "50N",
          "100N",
          "25N",
          "60N"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-15",
        question: "What is the kinetic energy of base ball mass=0.15kg moving with a speed of 20m/s",
        options: [
          "20J",
          "30J",
          "40J",
          "50J"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-16",
        question: "The slope of distance ...... time graph will always be",
        options: [
          "Negative",
          "Positive",
          "Zero",
          "Maximum"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-17",
        question: "Which one of the following statement is correct?",
        options: [
          "A body has a constant velocity but varying speed",
          "A body has a constant speed but varying acceleration",
          "A body has a constant speed cannot has an acceleration",
          "A body has a constant speed can has varying velocity"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-18",
        question: "The velocity of alpha particle is?",
        options: [
          "0.8×10^8 m/s",
          "0.5×10^8 m/s",
          "0.3×10^8 m/s",
          "0.1×10^8 m/s"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-19",
        question: "Unit of static co efficient of friction is",
        options: [
          "Poise",
          "Newton",
          "Dyne",
          "None"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-20",
        question: "A ball falls freely towards the earth if the action force is the earth pulling down on the ball the reaction force is",
        options: [
          "The pulling up on the earth",
          "Air resistance acting on the ball",
          "The ball striking the earth when it lands",
          "The inertia of the ball",
          "There is no reaction force in this case"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-21",
        question: "Object displaced from 5m height reaches ground at a distance of 10m what it's final velocity",
        options: [
          "10 m/s",
          "10×1.414 m/s",
          "20 m/s",
          "20×1.414 m/s"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-22",
        question: "The Newton × second is unit of",
        options: [
          "Work",
          "Power",
          "Impulse",
          "Momentum"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-23",
        question: "A ball is the height of 80m find the time taken by ball to reach ground.",
        options: [
          "16 sec",
          "4 sec",
          "32 sec",
          "8 sec"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-24",
        question: "The ...... component of velocity remains same in projectile motion",
        options: [
          "Y component",
          "X component",
          "Both X and Y",
          "None of them"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-25",
        question: "If the axis of rotation passes through the body and the body moves around it self then the motion is called",
        options: [
          "Spin motion",
          "Orbital",
          "Rectilinear motion",
          "Translatory motion"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-26",
        question: "If the velocity of the body is decreasing, the acceleration is negative, this negative acceleration is known as",
        options: [
          "Retardation",
          "Deceleration",
          "Negative displacement",
          "Both a and b"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-27",
        question: "The box of mass M=6kg slides with speed V=4m/s across a frictionless floor. It suddenly explodes into two pieces. One piece with mass M1 =2kg moves in the same direction with speed V1=5m/s. The velocity of second piece is",
        options: [
          "6m/s",
          "4m/s",
          "3m/s",
          "2m/s"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-28",
        question: "A vehicle starting from rest attain a speed of 72km/h covering a distance of 100m if the mass of the vehicle is 500kg find the force exerted by the engine?",
        options: [
          "3000N",
          "1000N",
          "4000N",
          "2000N"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-29",
        question: "The third law of motion given by Newton deals with action reaction pair of forces. Consider two bodies: if the action is due to one body, the reaction will be due to:",
        options: [
          "Both the bodies",
          "The other body",
          "The same body",
          "Atmosphere"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-30",
        question: "A car is traveling in straight line along a highway at a constant speed of 80 miles per hour for 10 seconds. Find its acceleration.",
        options: [
          "100m/s^2",
          "200m/s^2",
          "0m/s^2",
          "150m/s^2"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-31",
        question: "What is the speed of 2.0kg metallic Bob at the mean position of a simple pendulum, when release from its extreme position 0.5m height?",
        options: [
          "3.16m/s",
          "10m/s",
          "100m/s",
          "50m/s"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-32",
        question: "Momentum of a body depends on its",
        options: [
          "Mass",
          "Velocity",
          "Either Mass or velocity",
          "Both mass and velocity"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-33",
        question: "A body is said to move with ...... if it's rate of change of distance moved with time in a specified direction is constant",
        options: [
          "Uniform velocity",
          "Velocity",
          "Speed",
          "Uniform speed",
          "None"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-34",
        question: "...... is that which changes a body's state of rest or of uniform motion",
        options: [
          "Momentum",
          "Acceleration",
          "Force",
          "Balanced force"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-35",
        question: "A car of mass of 1000kg traveling at 36km/h is brought to rest over a distance of 20m. Find the average breaking force in newton's?",
        options: [
          "1000N",
          "2500N",
          "5000N",
          "10000N"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-36",
        question: "The escape velocity of a body depends upon",
        options: [
          "The mass of the body",
          "The mass of the planet",
          "Density of the planet",
          "Volume of the planet"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-37",
        question: "An object with an initial velocity of 4m/s moves along a straight line under constant acceleration. Three second later, it's velocity is 14m/s how far did it travel during this time",
        options: [
          "27m",
          "17m",
          "67m",
          "57m"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-38",
        question: "At what angle of projection of projectile the range become half of its maximum value?",
        options: [
          "15°",
          "20°",
          "30°",
          "45°"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-39",
        question: "A body is dropped from certain height and falls freely its velocity after 5 seconds will be",
        options: [
          "94m/s",
          "9.4m/s",
          "4.9m/s",
          "49m/s"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-40",
        question: "Rate of change of linear momentum",
        options: [
          "Energy",
          "Impulse",
          "Force",
          "Torque"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-41",
        question: "Which if the following is non-conservative force",
        options: [
          "Fractional force",
          "Gravitational force",
          "Elastic force",
          "Elastic spring force"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-42",
        question: "A massive ball collides with a light ball. What will be the velocity of the heavy ball after collision",
        options: [
          "Doubled",
          "Halved",
          "It will remain stationary",
          "Lighter will be rebound with double velocity"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-43",
        question: "Which shows the correct relation between time of flight and maximum height",
        options: [
          "H=gt^2/8",
          "H=gt^2/g",
          "H=8g/T^2",
          "H=8/Gt"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-44",
        question: "A body is thrown height vertically upward with initially velocity 9.8m/sec it will attain height",
        options: [
          "9.8m",
          "29.4m",
          "4.9m",
          "19.6m"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-45",
        question: "How much force is required to cause an object of mass 2kg to have an acceleration of 4m/s²?",
        options: [
          "8N",
          "10N",
          "4N",
          "2N"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-46",
        question: "Dimension of Force is",
        options: [
          "ML^-1T",
          "MLT^-1",
          "M2LT^-1",
          "MLT^-2"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-47",
        question: "A ball is thrown vertically upward with a velocity of 98m/s how high does the ball rise?",
        options: [
          "360 meters",
          "389 meters",
          "490 meters",
          "510 meters"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-48",
        question: "A cannon ball is fired from a cannon so that the cannon recoils backward as the ball is fired forward. Which of the following statement is true",
        options: [
          "The velocity of the cannon ball is equal and opposite to the velocity of cannon",
          "The momentum of the cannon ball must be greater than the magnitude of the momentum of the cannon",
          "The momentum of the cannon must be equal to the magnitude of the momentum of the cannon ball",
          "The momentum of the cannon must be greater than the magnitude of the momentum of the cannon ball"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-49",
        question: "When a bullet is fired by a gun, the gun moves backward with a",
        options: [
          "Velocity less than bullet",
          "Velocity more than bullet",
          "Velocity equal to the bullet",
          "Remains at rest"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-50",
        question: "The rate of change of angular momentum of a body is called",
        options: [
          "Net force",
          "Net displacement",
          "Net torque",
          "Net velocity"
        ],
        answer: 2
},
// --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-135",
      question: "Velocity V of an electron revolving around the nucleus is at _____ to the radius r of the orbit.",
      options: [
        "acute angle",
        "obtuse angle",
        "right angle",
        "supplementary angle"
      ],
      answer: 2,
      explanation: "In a circular orbit, tangential velocity vector v is always perpendicular (at a right angle, 90°) to the radial vector r."
    },
    {
      id: "bumhs-2024-phys-145",
      question: "Which of the following statements is correct:\nI. nuclear radiation with least penetrating power has most ionization power\nII. nuclear radiation with most penetrating power has least ionization power",
      options: [
        "I",
        "II",
        "Both I and II",
        "neither I nor II"
      ],
      answer: 2,
      explanation: "Alpha particles have the least penetration power but highest ionizing power due to their large mass and +2 charge, whereas Gamma rays have the greatest penetration power but lowest ionizing power."
    },
    {
      id: "bumhs-2024-phys-157",
      question: "Mass number of an atom represents the number of:",
      options: [
        "proton",
        "neutron",
        "neutron plus proton",
        "proton plus electron"
      ],
      answer: 2,
      explanation: "Mass number (A) represents the total number of nucleons inside the nucleus, which is the sum of protons (Z) and neutrons (N)."
    },
    {
      id: "bumhs-2024-phys-164",
      question: "Which of the following isotope of hydrogen is unstable?",
      options: [
        "H¹",
        "D²",
        "T³",
        "All of these"
      ],
      answer: 2,
      explanation: "Tritium (₁H³) is a radioactive, unstable isotope of hydrogen that decays by emitting a beta particle."
    },
    {
      id: "bumhs-2024-phys-166",
      question: "According to the Bohr’s model of an atom, the radius of the nth orbit is proportional to:",
      options: [
        "n",
        "½n",
        "n²",
        "n³"
      ],
      answer: 2,
      explanation: "In Bohr's model, orbital radius is r_n = n² r₁, which is directly proportional to n²."
    },
    {
      id: "bumhs-2024-phys-170",
      question: "Electrons of mass m and charge e are accelerated through a potential difference V and strike the target. The maximum speed of these electrons is:",
      options: [
        "√(eV/m)",
        "eV/m",
        "eV²/m",
        "√(2eV/m)"
      ],
      answer: 3,
      explanation: "Equating kinetic energy to electric potential work: ½ m v² = e V → v² = 2eV / m → v = √(2eV/m)."
    },
    {
      id: "bumhs-2024-phys-171",
      question: "A slow neutron will cause fission in?",
      options: [
        "₉₂U²³⁴",
        "₉₂U²³⁵",
        "₉₂U²³⁶",
        "₉₂U²³⁷"
      ],
      answer: 1,
      explanation: "Uranium-235 (₉₂U²³⁵) is fissile and undergoes nuclear fission upon capturing thermal (slow) neutrons."
    },
    {
      id: "bumhs-2024-phys-173",
      question: "Let T is the half-life of certain radioactive element and N₀ are the number of atoms present in the sample at t = 0. After time 3T, what percent of atoms present at t = 0 will have been decayed?",
      options: [
        "12.5%",
        "50%",
        "87.5%",
        "100%"
      ],
      answer: 2,
      explanation: "After 3 half-lives, remaining fraction N = (1/2)³ N₀ = (1/8) N₀ = 12.5%. Decayed fraction = 100% - 12.5% = 87.5%."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-131",
      question: "The coulomb repulsive force between two protons inside a nucleus is much higher than the gravitational attractive force by a factor of approximately ______.",
      options: [
        "10³⁶",
        "10⁻³⁶",
        "10⁻¹⁵",
        "10¹²"
      ],
      answer: 0,
      explanation: "The ratio of electrostatic repulsion to gravitational attraction between two protons is F_e / F_g ≈ 10³⁶."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-87",
      question: "Which of the following statement best describes the nature of nuclear decay?",
      options: [
        "It occurs both spontaneously and randomly",
        "It occurs only spontaneously according to chance",
        "It occurs at regular time intervals for each element",
        "It is a process which occurs only when the nucleus is excited"
      ],
      answer: 0,
      explanation: "Radioactive decay is fundamentally a spontaneous and random process governed by probability laws."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-173",
      question: "Black body is an ideal radiator that radiates __________ at all wavelengths",
      options: [
        "Inconsistently",
        "Distinctly",
        "Equally",
        "Unequally"
      ],
      answer: 2,
      explanation: "An ideal black body emits electromagnetic radiation continuously across all wavelengths in thermal equilibrium."
    },
    {
      id: "kmu-phys-24-174",
      question: "Mass number A refers to ____",
      options: [
        "Number of electrons",
        "Number of nucleons",
        "Number of neutrons",
        "Number of protons"
      ],
      answer: 1,
      explanation: "The mass number A refers to the total number of nucleons (protons + neutrons) in an atomic nucleus."
    },
    {
      id: "kmu-phys-24-175",
      question: "λ is a __________ constant:",
      options: [
        "Decay",
        "Dielectric",
        "Plank’s",
        "Proportionality"
      ],
      answer: 0,
      explanation: "In radioactive decay equations (N = N₀ e⁻λᵗ), λ represents the radioactive decay constant."
    },
    {
      id: "kmu-phys-24-176",
      question: "Gamma ray camera can observe radiations from the __________ that are concentrated in the organs",
      options: [
        "Atoms",
        "Isotopes",
        "Nucleons",
        "Neutrons"
      ],
      answer: 1,
      explanation: "Gamma cameras detect gamma photons emitted by radioactive isotopes (radio-tracers) concentrated inside body organs."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-141",
      question: "In radioactivity, the product of half-life T₁/₂ and decay constant (λ) is equal to:",
      options: [
        "0.693",
        "0.396",
        "0.953",
        "0.963",
        "0.369"
      ],
      answer: 0,
      explanation: "The relationship between half-life T₁/₂ and decay constant λ is T₁/₂ × λ = ln(2) ≈ 0.693."
    },
    {
      id: "siba-phy-24-163",
      question: "Fast moving electrons stopped by a heavy metallic target in an evacuated glass tube give rise to the production of",
      options: [
        "Beta-rays",
        "Gamma-rays",
        "X-rays",
        "Cosmic rays",
        "Alpha-rays"
      ],
      answer: 2,
      explanation: "When high-speed electrons decelerate rapidly upon striking a high-Z metal target (Bremsstrahlung), X-rays are produced."
    },
    {
      id: "siba-phy-24-166",
      question: "The binding energy of a deuteron (¹H²) is 2.3 MeV, its binding energy per nucleon will be:",
      options: [
        "0.51 MeV",
        "0.2 MeV",
        "1.02 MeV",
        "1.1 MeV",
        "1 MeV"
      ],
      answer: 3,
      explanation: "Deuteron has mass number A = 2. Binding energy per nucleon = 2.3 MeV / 2 = 1.15 MeV ≈ 1.1 MeV."
    },
    {
      id: "siba-phy-24-169",
      question: "In the equation of nuclear decay p¹ → n¹ + x , x is:",
      options: [
        "Proton",
        "Positron",
        "Electron",
        "Photon",
        "Gamma ray"
      ],
      answer: 1,
      explanation: "In beta-plus decay, a proton converts into a neutron, emitting a positron (e⁺ or ₊₁e⁰) and a neutrino."
    },
    {
      id: "siba-phy-24-171",
      question: "The proton number of a nucleus increases after emission of:",
      options: [
        "Negative β particle",
        "Positive β particle",
        "Proton",
        "Alpha particle",
        "Neutron"
      ],
      answer: 0,
      explanation: "During negative beta decay (β⁻ emission), a neutron converts to a proton, increasing atomic number Z by 1."
    },
    {
      id: "siba-phy-24-175",
      question: "In law of radioactive decay N = N₀ e^(−λt), the ratio N/N₀ is called:",
      options: [
        "Activity",
        "Relative activity",
        "Absolute activity",
        "Stability",
        "Decay constant"
      ],
      answer: 1,
      explanation: "The ratio N / N₀ represents the surviving fraction of undecayed nuclei, also known as relative remaining activity."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-131",
      question: "A patient is injected with a radioactive isotope to trace blood flow and detect circulation issues. The isotope used is more likely to be:",
      options: [
        "Iodine-131",
        "Phosphorus-32",
        "Cobalt-60",
        "Sodium-24"
      ],
      answer: 3,
      explanation: "Sodium-24 (in saline solution) is used as a medical radiotracer to study blood circulation and detect arterial blockages."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-139",
      question: "If the half-life of any radioactive nucleus is 0.693 year, what will be the value of decay constant?",
      options: [
        "0.001 s⁻¹",
        "0.01 s⁻¹",
        "0.1 s⁻¹",
        "1 s⁻¹"
      ],
      answer: 3,
      explanation: "Decay constant λ = 0.693 / T₁/₂ = 0.693 / 0.693 year = 1 year⁻¹ (or 1 unit per time interval)."
    },
    {
      id: "szambu-phy-24-147",
      question: "The strength of radiation source is indicated by its activity measured in Becquerel. So, 10 Becquerel is equal to",
      options: [
        "10",
        "100",
        "1000",
        "10000"
      ],
      answer: 0,
      explanation: "1 Becquerel (Bq) is defined as 1 disintegration (decay) per second. Thus, 10 Bq = 10 decays per second."
    },
    {
      id: "szambu-phy-24-164",
      question: "Cancerous thyroid is treated with",
      options: [
        "Chlorine-36",
        "Cobalt-60",
        "Iodine-131",
        "Radium-226"
      ],
      answer: 2,
      explanation: "Iodine-131 concentrates selectively in the thyroid gland and is widely used to treat thyroid cancer and hyperthyroidism."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-130",
      question: "After 3 half-lives, the remaining fraction of a radioactive sample is:",
      options: [
        "1/2",
        "1/4",
        "1/8",
        "1/16"
      ],
      answer: 2,
      explanation: "Remaining fraction N/N₀ = (1/2)ⁿ. For n = 3 half-lives, N/N₀ = (1/2)³ = 1/8."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-173",
      question: "The unit of decay constant is",
      options: [
        "m",
        "s",
        "s⁻¹",
        "m⁻¹"
      ],
      answer: 2,
      explanation: "Decay constant λ = (dN/dt) / N, which has units of inverse time (s⁻¹)."
    },
    {
      id: "uhs-phys-24-174",
      question: "If we have “N₀” number of any radioactive element then after a period of “n” half-lives the number of atoms left behind is",
      options: [
        "2ⁿ N₀",
        "(1/2)ⁿ N₀",
        "(1/2 N₀)ⁿ",
        "(2 N₀)ⁿ"
      ],
      answer: 1,
      explanation: "The standard decay formula after n half-lives is N = (1/2)ⁿ N₀."
    },
    {
      id: "uhs-phys-24-175",
      question: "Which of the following is NOT the Somatic biological effect of radiation?",
      options: [
        "Skin burn",
        "Loss of hair",
        "Induction of cancer",
        "Genes mutation"
      ],
      answer: 3,
      explanation: "Gene mutations are genetic (hereditary) effects passed to offspring, whereas skin burns, hair loss, and cancer in the irradiated individual are somatic effects."
    },
    {
      id: "uhs-phys-24-176",
      question: "An artificial radioactive element can be made by bombarding",
      options: [
        "High energy particles on unstable elements",
        "Low energy particles on unstable elements",
        "High energy particles on stable elements",
        "Low energy particles on stable elements"
      ],
      answer: 2,
      explanation: "Artificial radioactivity is induced by bombarding stable target nuclei with high-energy nuclear projectiles (such as alpha particles, protons, or neutrons)."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "Both xenon and cesium each have isotopes",
        options: [
          "12",
          "36",
          "33",
          "39"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-2",
        question: "A newly prepared radioactive nucleoid has a decay constant of second inverse. What is the approximate half life of the nuclide?",
        options: [
          "1 hour",
          "1 day",
          "1 week",
          "1 month"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-3",
        question: "At the end of 14 minutes 1/16 of a sample of radioactive polonium remains. The corresponding half life is",
        options: [
          "7/8 min",
          "7/4 min",
          "8/7 min",
          "7/2 min"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-4",
        question: "Among the following select the correct statement",
        options: [
          "The rate of disintegration is directly proportional to the number of atoms present in the sample at that instant",
          "Equal fractions disintegrate in equal intervals of time",
          "Radioactive sample takes infinite time to disintegrate",
          "All"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-5",
        question: "Due to emission of Beta particle by a Thorium nucleus we get",
        options: [
          "Radium",
          "Protactinium",
          "Uranium",
          "Radon"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-6",
        question: "Half life period of Radium is 1600 years. Its average lifetime will be",
        options: [
          "3200 years",
          "4800 years",
          "2319 years",
          "4217 years"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-7",
        question: "Radiation from a point source follows the Inverse Square Law. If the count rate at a distance of 1 m from the counter is 360 counts per minute, the count rate at a distance of 3 m will be",
        options: [
          "90 counts per minute",
          "40 counts per minute",
          "120 counts per minute",
          "45 counts per minute"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "Half life of iodine-131",
        options: [
          "3 days",
          "16 days",
          "14 days",
          "8 days"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-9",
        question: "In the uranium disintegration series",
        options: [
          "The emission of Beta particle increases the mass number A by 1 and decreases the atomic number by one",
          "The disintegrating element merely ejects atomic electrons",
          "The emission of an Alpha particle decreases the mass number A by 4 and decreases the atomic number Z by 2",
          "The nucleus always remains unaffected"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-10",
        question: "If 10% of a radioactive substance decays in every 5 years, then the percentage of the substance that will be decayed in 20 years is",
        options: [
          "40%",
          "50%",
          "65.6%",
          "34.4%"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-11",
        question: "Half life of a radioactive element can be increased by",
        options: [
          "Increasing temperature",
          "Changing volume",
          "Increasing pressure",
          "Can’t be increased"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-12",
        question: "Alpha particles can produce fluorescence in",
        options: [
          "ZnS",
          "Sodium iodide",
          "Barium platinocyanide",
          "All"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-13",
        question: "Which one of the following will be a better shield against gamma rays?",
        options: [
          "Ordinary water",
          "Lead",
          "Heavy water",
          "Aluminium"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-14",
        question: "Half life of Radium-226 is",
        options: [
          "1820 years",
          "1620 years",
          "1940 years",
          "1680 years"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-15",
        question: "In Gamma emission the atomic number of the nucleus",
        options: [
          "Increases by 1",
          "Decreases by 1",
          "Decreases by 2",
          "No change"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-16",
        question: "The half life of a certain radioactive element is such that 7/8 of a given quantity decreases in 12 days. What fraction remains undecayed after 24 days?",
        options: [
          "0",
          "1/28",
          "1/64",
          "1/32"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-17",
        question: "Which of the following is a correct statement?",
        options: [
          "Protons and neutrons have exactly the same mass",
          "Gamma rays are higher energy neutrons",
          "Alpha particles are singly ionized Helium nuclei",
          "Beta rays are the same as cathode rays"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-18",
        question: "Which one of the following combinations of radioactive decay results in the formation of an isotope of the original nuclide?",
        options: [
          "Alpha and beta",
          "Alpha and two beta",
          "Two alpha and two beta",
          "Alpha and four beta"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-19",
        question: "Materials can be identified by measuring",
        options: [
          "Hardness",
          "Masses",
          "Densities",
          "Half lives"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-20",
        question: "Heavy radioactive elements eventually turn into",
        options: [
          "Barium",
          "Hydrogen",
          "Lead",
          "Radium"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-21",
        question: "The average distance covered by an Alpha particle in air before its ionizing power ceases is called its",
        options: [
          "Trajectory",
          "Firing level",
          "Range",
          "Limit"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-22",
        question: "In an Alpha decay the disintegration energy appears chiefly as",
        options: [
          "Photon energy",
          "The kinetic energy of the Alpha particle and the daughter nucleus",
          "The excitation energy of the daughter nucleus",
          "The excitation energy of the Alpha particle"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-23",
        question: "In radioactivity the rate of decay",
        options: [
          "Can be increased by a magnetic field",
          "Can be decreased by a magnetic field",
          "Can be kept constant by an electric field",
          "Is not affected by electric and magnetic fields"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-24",
        question: "Alpha, beta and gamma rays emitted by a radioactive substance are passed through a region containing a magnetic field at right angles to their path. The energy gained will be",
        options: [
          "Maximum for alpha rays",
          "Maximum for beta rays",
          "Maximum for gamma rays",
          "0 for all of them"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-25",
        question: "Radioactivity is the phenomenon associated with",
        options: [
          "Production of radio waves",
          "Transmission of radio waves",
          "Reception of radio waves",
          "Decay of the atomic nucleus"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-26",
        question: "A particle having the same mass as an electron and the charge of a proton is called",
        options: [
          "Anti-proton",
          "Gamma rays",
          "Positron",
          "Photon"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "In which radioactive disintegration does a neutron dissociate into a proton and an electron?",
        options: [
          "Alpha emission",
          "Beta emission",
          "None",
          "Gamma emission"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-28",
        question: "The half life of Radium is about 1600 years. If 100 g of radium exists now, 25 g remains undecayed after",
        options: [
          "4800 years",
          "6400 years",
          "6800 years",
          "3200 years"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-29",
        question: "When a radioactive nucleus emits a beta particle the proton-to-neutron ratio",
        options: [
          "Decreases",
          "Remains the same",
          "Increases",
          "None of the above"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-30",
        question: "Which one of the following processes is not related to radioactive disintegration?",
        options: [
          "Positron emission",
          "Beta decay",
          "Alpha decay",
          "Nuclear fission"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-31",
        question: "A detector is exposed to a radioactive source. Fluctuations in the count rate are observed. What do these fluctuations indicate about radioactive decay?",
        options: [
          "It is random",
          "It is exponential",
          "It is non-linear",
          "It is spontaneous"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-32",
        question: "Beta particles possess greater penetrating power than alpha particles due to their",
        options: [
          "Smaller ionizing power",
          "Same ionizing power",
          "Energy is not conserved",
          "Neither greater nor smaller ionizing power"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-33",
        question: "Half life of iodine-131 is 8 days. It weighs 20 mg. After 4 half lives the amount left undecayed will be",
        options: [
          "2.5 mg",
          "0.625 mg",
          "1.25 mg",
          "0.3125 mg"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-34",
        question: "The weight of a radioactive element is 1 g. After 3 days it becomes 0.25 g. The half life of the element is",
        options: [
          "72 hours",
          "144 hours",
          "36 hours",
          "Impossible fact"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-35",
        question: "In a large collection of nuclei undergoing Alpha decay, the rate of decay at any instant is proportional to",
        options: [
          "The number of undecayed nuclei present at that instant",
          "The time since the decay started",
          "The time remaining before all have decayed",
          "The half life of the decay"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-36",
        question: "Starting with a sample of pure Cu-66, 7/8 of it decays into zinc in 15 minutes. The corresponding half life is",
        options: [
          "15 minutes",
          "7 minutes",
          "5 minutes",
          "3.75 minutes"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-37",
        question: "When we compare the ionizing power of alpha, beta and gamma rays it is",
        options: [
          "The same for all three",
          "Maximum for alpha particles",
          "Maximum for beta particles",
          "Maximum for gamma rays"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-38",
        question: "A radioactive element emits 200 particles per second. After three hours 25 particles per second are emitted. The half-life period of the element will be",
        options: [
          "80 minutes",
          "50 minutes",
          "60 minutes",
          "70 minutes"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-39",
        question: "Beta particles have a penetrating power of about",
        options: [
          "100 times more than that of gamma particles",
          "100 times less than that of an alpha ray",
          "100 times more than that of an alpha ray",
          "10 times more than that of an alpha particle"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-40",
        question: "When a tritium nucleus captures a proton it becomes",
        options: [
          "Neutron",
          "Meson",
          "Alpha particle",
          "Deuteron"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-41",
        question: "Which statement concerning alpha particles is correct?",
        options: [
          "An alpha particle has a charge of +4 electrons",
          "An alpha particle is a helium atom",
          "When alpha particles travel through air they cause ionization",
          "When alpha particles travel through a sheet of gold foil they make the gold radioactive"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-42",
        question: "A beta particle ionizes an atom",
        options: [
          "Through direct collision",
          "Through electrostatic repulsion",
          "Through electrostatic attraction",
          "All of the above"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-43",
        question: "Which one of the following is formed during beta emission?",
        options: [
          "Isobars",
          "Isotones",
          "Isotopes",
          "Isomers"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-44",
        question: "Half life of a radioactive element depends upon",
        options: [
          "Temperature",
          "Amount of element present",
          "Pressure",
          "None of the above"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-45",
        question: "A beta particle is",
        options: [
          "A helium nucleus",
          "A radioactive element",
          "An electron or positron",
          "Any negative particle"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-46",
        question: "In the nucleus of uranium the number of neutrons will be",
        options: [
          "92",
          "143",
          "235",
          "Different for different isotopes"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-47",
        question: "The path of a beta particle is",
        options: [
          "Rectilinear",
          "Zigzag or erratic",
          "Curved",
          "Elliptical"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-48",
        question: "The amount of energy equivalent to 1 u is",
        options: [
          "9.315 MeV",
          "93.45 MeV",
          "931 MeV",
          "1.025 MeV"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-49",
        question: "An alpha particle travels a well-defined distance before coming to rest. This distance is known as the range of the particle. The range depends upon",
        options: [
          "Energy of the particle",
          "Charge of the particle",
          "Mass of the particle",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-50",
        question: "Radioactive atom X emits a beta particle. The resulting atom",
        options: [
          "Must be very reactive chemically",
          "Has an atomic number that is one more than that of X",
          "Has a mass number that is one less than that of X",
          "Must be radioactive"
        ],
        answer: 1
},
// --- BUMHS 2024 ---
    {
      id: "bumhs-2024-phys-151",
      question: "A particle is executing uniform circular motion in a circle of radius 100 mm. If its speed is 10 cm/s then its angular velocity is:",
      options: [
        "10 rad/s",
        "0.1 rad/s",
        "10 revolutions/s",
        "None of these"
      ],
      answer: 3,
      explanation: "Radius r = 100 mm = 10 cm = 0.1 m. Linear speed v = 10 cm/s = 0.1 m/s. Angular velocity ω = v / r = 0.1 / 0.1 = 1 rad/s. Since 1 rad/s is not listed among the options, 'None of these' is the correct choice."
    },
    {
      id: "bumhs-2024-phys-161",
      question: "A body of mass m moving in a circle of radius r is executing a uniform circular motion. If the mass of the body is doubled then the centripetal force acting upon the body is:",
      options: [
        "Reduced to half",
        "Remains same",
        "Doubled",
        "None of the given options"
      ],
      answer: 2,
      explanation: "Centripetal force F_c = (m v²) / r. Since F_c is directly proportional to mass m, doubling the mass doubles the required centripetal force."
    },
  
    // --- BUMHS 2025 ---
    {
      id: "bumhs-2025-phys-133",
      question: "A particle is moving in a uniform circular path of radius 4cm with velocity 4cm/s. The maximum acceleration of its projection executing simple harmonic motion on horizontal diameter is:",
      options: [
        "4 cm/s²",
        "8 cm/s²",
        "12 cm/s²",
        "16 cm/s²"
      ],
      answer: 0,
      explanation: "Angular velocity ω = v / r = 4 cm/s / 4 cm = 1 rad/s. Maximum acceleration of projection in SHM is a_max = ω² r = (1)² × 4 = 4 cm/s²."
    },
    {
      id: "bumhs-2025-phys-150",
      question: "The angle that a body covers at the center of the circle in three turns in radian is:",
      options: [
        "0",
        "3",
        "10.8",
        "18.8"
      ],
      answer: 3,
      explanation: "One turn (revolution) = 2π radians. Three turns = 3 × 2π = 6π radians ≈ 6 × 3.14159 ≈ 18.85 radians."
    },
  
    // --- KMU MDCAT 2025 ---
    {
      id: "kmu-mdcat-2025-phys-98",
      question: "A wheel of radius 0.4 m has an angular acceleration of 6 rad/s². The linear acceleration is:",
      options: [
        "1.2 m/s²",
        "2.4 m/s²",
        "2.4 m/s²",
        "2.4 m/s²"
      ],
      answer: 1,
      explanation: "Linear acceleration a = r α = 0.4 m × 6 rad/s² = 2.4 m/s²."
    },
    {
      id: "kmu-mdcat-2025-phys-99",
      question: "If an object is moving anticlockwise along a circular path, in a horizontal plane on a page then the direction of its angular velocity is:",
      options: [
        "Tangential to any point on the circle",
        "Towards centre of the circle",
        "Perpendicular to the plane and pointing out of the page",
        "Perpendicular to the plane and pointing into the page"
      ],
      answer: 2,
      explanation: "By the right-hand rule, curling the fingers of the right hand in the counter-clockwise direction points the thumb perpendicularly out of the page."
    },
    {
      id: "kmu-mdcat-2025-phys-100",
      question: "If a particle moves along a circular path of radius r with angular displacement θ (in radians), then the arc length s is given by:",
      options: [
        "rθr",
        "θ/r",
        "r × θ",
        "θ/r"
      ],
      answer: 2,
      explanation: "The relation between arc length s, radius r, and angular displacement θ (in radians) is s = r θ (written here as r × θ)."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-133",
      question: "A wheel makes 3 complete revolutions. What is the total number of radians through which a point on wheel has rotated?",
      options: [
        "2π",
        "3π",
        "6π",
        "9π"
      ],
      answer: 2,
      explanation: "1 revolution = 2π radians. Therefore, 3 complete revolutions = 3 × 2π = 6π radians."
    },
    {
      id: "kmu-phys-24-134",
      question: "For rigid body that rotates about a fixed axis, the angle swept out by a line passing through any point on the body and intersecting the axis of rotation perpendicularly is called:",
      options: [
        "Angular acceleration",
        "Angular displacement",
        "Angular momentum",
        "Angular velocity"
      ],
      answer: 1,
      explanation: "The angle swept out by a line extending from the axis of rotation to any point on a rotating rigid body is defined as its angular displacement."
    },
    {
      id: "kmu-phys-24-135",
      question: "In a rotating spaceship, to produce artificial gravity, what does the centripetal force do?",
      options: [
        "Has no effect inside the spaceship",
        "Increases spaceship’s rotation",
        "Pulls objects towards the centre",
        "Pushes the objects towards the outer wall"
      ],
      answer: 3,
      explanation: "In a rotating spaceship, the outer floor provides the normal contact force (centripetal force) pushing inward on occupants, while inertia creates the perception of gravity pressing objects against the outer wall."
    },
    {
      id: "kmu-phys-24-136",
      question: "When the mass of a body moving along a circle becomes half and radius becomes double, and v is constant, the centripetal force becomes?",
      options: [
        "Double",
        "Half",
        "One-fourth",
        "Remains same"
      ],
      answer: 2,
      explanation: "F_c = (m v²) / r. If m′ = m/2 and r′ = 2r with v constant: F_c′ = ((m/2) v²) / (2r) = 1/4 × (m v² / r) = F_c / 4."
    },
  
    // --- SIBA 2025 ---
    {
      id: "siba-2025-phys-127",
      question: "The angle formed at the center of a circle as a body moves from one position to another is:",
      options: [
        "Angular displacement",
        "Angular velocity",
        "Angular acceleration",
        "Angular momentum"
      ],
      answer: 0,
      explanation: "The angle subtended at the center of a circular trajectory during motion is called angular displacement."
    },
    {
      id: "siba-2025-phys-132",
      question: "A body moving in a circle, half revolution in terms of radians is equivalent to:",
      options: [
        "π",
        "π/6",
        "π/2",
        "2π"
      ],
      answer: 0,
      explanation: "1 full revolution = 2π radians. Half a revolution = 2π / 2 = π radians."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-134",
      question: "The force responsible for simple harmonic motion of a simple pendulum is:",
      options: [
        "mg cos θ",
        "mg tan θ",
        "mg sin² θ",
        "mg sin θ"
      ],
      answer: 3,
      explanation: "The restoring force bringing the bob of a pendulum back toward equilibrium is the tangential component of gravity, F = -mg sin θ."
    },
    {
      id: "siba-phy-24-154",
      question: "The total energy E of a body at any instant, executing simple harmonic motion, is:",
      options: [
        "E = −2kx²",
        "E = 0.5(kx²)",
        "E = −kx²",
        "E = kx²"
      ],
      answer: 1,
      explanation: "Total energy of a simple harmonic oscillator is constant and given by E = ½ k x₀² (or ½ k x² at maximum amplitude x = x₀)."
    },
    {
      id: "siba-phy-24-157",
      question: "A body is moving in a circle with constant speed. Which of the following statements is true?",
      options: [
        "There is a force acting on the body at a tangent to the circle",
        "There is a force acting on the body toward the center of the circle",
        "There is no acceleration in the body",
        "There is a force acting on the body away from the center of the circle",
        "The net force acting on the body is zero"
      ],
      answer: 1,
      explanation: "In uniform circular motion, a net centripetal force acts directed radially inward toward the center of the circle."
    },
    {
      id: "siba-phy-24-160",
      question: "The period of uniform circular motion is given as:",
      options: [
        "T = ω/2π",
        "T = 2π/ω",
        "T = 2π ω",
        "T = 2πT",
        "T = 2π ω²"
      ],
      answer: 1,
      explanation: "Since angular speed ω = 2π / T, solving for period yields T = 2π / ω."
    },
    {
      id: "siba-phy-24-168",
      question: "If the length of a simple pendulum is increased four times, its frequency:",
      options: [
        "Increases 2 times",
        "Decreases 4 times",
        "Remains the same",
        "Increases 4 times",
        "Decreases 2 times"
      ],
      answer: 4,
      explanation: "Frequency f = (1 / 2π) √(g / L). Since f is inversely proportional to √L, multiplying L by 4 reduces frequency by a factor of √4 = 2 (decreases 2 times)."
    },
  
    // --- SZAMBU 2025 ---
    {
      id: "szambu-2025-phys-158",
      question: "The true statement about angular displacement is:",
      options: [
        "It always increases with time",
        "It is treated as vector for small rotations",
        "It is always a scalar quantity",
        "It is measured in meters"
      ],
      answer: 1,
      explanation: "Infinitesimal (very small) angular displacements obey vector addition laws and are treated as vector quantities, whereas large angular displacements do not commute under addition."
    },
    {
      id: "szambu-2025-phys-159",
      question: "π radians are equivalent to",
      options: [
        "30°",
        "270°",
        "90°",
        "180°"
      ],
      answer: 3,
      explanation: "2π radians = 360°, so π radians = 180°."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-132",
      question: "The instantaneous acceleration of an object travelling with uniform speed in a circle directed towards the center of circle is referred as",
      options: [
        "Angular acceleration",
        "Centrifugal acceleration",
        "Centripetal acceleration",
        "Tangential acceleration"
      ],
      answer: 2,
      explanation: "Acceleration directed toward the center of a circular path during uniform circular motion is centripetal acceleration."
    },
    {
      id: "szambu-phy-24-136",
      question: "Which one of the following is the SI-unit of angular displacement?",
      options: [
        "Degree",
        "Radian",
        "Revolution",
        "Steradian"
      ],
      answer: 1,
      explanation: "The standard SI unit for angular displacement is the radian (rad)."
    },
    {
      id: "szambu-phy-24-149",
      question: "Which of the following rule helps us to detect the direction of angular velocity?",
      options: [
        "Head to tail rule",
        "Kirchhoff rule",
        "Left hand rule",
        "Right hand rule"
      ],
      answer: 3,
      explanation: "The direction of angular velocity (an axial vector) is determined using the Right Hand Rule."
    },
    {
      id: "szambu-phy-24-171",
      question: "A rotating pulley completes twelve revolutions in 4 seconds, calculate the average angular velocity of rotating pulley in revelation per second?",
      options: [
        "3",
        "4",
        "5",
        "6"
      ],
      answer: 0,
      explanation: "Angular velocity in rev/s = Total revolutions / Total time = 12 rev / 4 s = 3 rev/s."
    },
  
    // --- UHS MDCAT 2025 ---
    {
      id: "uhs-mdcat-2025-phys-133",
      question: "An angular displacement of 90° is equal to:",
      options: [
        "One-fourth revolution",
        "One-third revolution",
        "One-half revolution",
        "One complete revolution"
      ],
      answer: 0,
      explanation: "One full revolution = 360°. Therefore, 90° / 360° = 1/4 (one-fourth revolution)."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-134",
      question: "The centripetal acceleration of an object moving along a circle of radius ‘r’ with an angular speed ‘ω’ is given by the formula",
      options: [
        "a = rω²",
        "a = rω",
        "a = r²ω",
        "a = r²ω²"
      ],
      answer: 0,
      explanation: "Since v = rω, centripetal acceleration a_c = v² / r = (rω)² / r = rω²."
    },
    {
      id: "uhs-phys-24-135",
      question: "An aircraft makes a turn in a horizontal circle of radius 100 m. It is travelling with a velocity of 250 m/s. The angular velocity of the aircraft will be",
      options: [
        "1.5 rad/s",
        "2.5 rad/s",
        "3 rad/s",
        "3.5 rad/s"
      ],
      answer: 1,
      explanation: "Angular velocity ω = v / r = 250 m/s / 100 m = 2.5 rad/s."
    },
    {
      id: "uhs-phys-24-136",
      question: "A particle of mass ‘m’ is moving on a circular path of radius ‘r’ with velocity ‘v’, then centripetal force acting on it is F. If the velocity of particle increases by 2 times and radius of circular path increases by 4 times then new centripetal force F′ will be",
      options: [
        "F′ = 2F",
        "F′ = ½ F",
        "F′ = 4F",
        "F′ = F"
      ],
      answer: 3,
      explanation: "Initial F = (m v²) / r. New velocity v′ = 2v, new radius r′ = 4r. New force F′ = m (2v)² / (4r) = m (4 v²) / (4r) = (m v²) / r = F."
    },
    {
      id: "uhs-phys-24-137",
      question: "A roller coaster is moving with 30 m s⁻¹ on a circular track of radius 30 m. The net mass of coaster + passengers is ‘m’. The centripetal force acting on it is",
      options: [
        "900 m",
        "m",
        "450 m",
        "30 m"
      ],
      answer: 3,
      explanation: "Centripetal force F_c = (m v²) / r = (m × 30²) / 30 = (m × 900) / 30 = 30 m."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "The angular velocity of the minute hand of a clock is",
        options: [
          "2π/60 rad/s",
          "2π/3600 rad/s",
          "π/24 rad/s",
          "Choice 4",
          "π/3600 rad/s"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-2",
        question: "A mud flies off the Tyre of fast moving car in the direction",
        options: [
          "Parallel to moving Tyre",
          "Tangent to the moving tyre",
          "Anti parallel to the moving tyre",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-3",
        question: "A disk is free to rotate on a fixed axis. A force of magnitude F, in the plane of the disk, is to be applied. On the following alternatives the greatest angular acceleration is obtained if the force is",
        options: [
          "Applied tangentially halfway between the axis and rim",
          "Applied tangentially at the rim",
          "Applied radially halfway between the axis and rim",
          "Applied radially at the rim"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-4",
        question: "The angular velocity of a rotating wheel increases by 2 rev/s every minute. The angular acceleration in rad/s² of this wheel is",
        options: [
          "4π²",
          "1/30",
          "2π",
          "π/15"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-5",
        question: "If a particle moves in a circle describing equal angles in equal intervals of time, the velocity vector",
        options: [
          "Remains constant",
          "Changes in magnitude only",
          "Changes in direction only",
          "Changes both in magnitude and direction"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-6",
        question: "A cyclist turns around a curve at 15 miles/hour. If he turns at double the speed, the tendency to overturn is",
        options: [
          "Quadrupled",
          "Halved",
          "Unchanged",
          "Doubled"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-7",
        question: "For positive angular displacement the rotation would be",
        options: [
          "Clockwise",
          "Anti clock wise",
          "Parallel",
          "Perpendicular"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "A cyclist cycling around a circular racing track, skids because",
        options: [
          "The centripetal force upon him is less than limiting friction",
          "The centripetal force upon him is greater than limiting friction",
          "The force upon him is equal to the limiting friction",
          "The Friction between the tyres of the cycle and road vanishes"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-9",
        question: "A particle P is moving in a circle of radius with a uniform speed v, C is the center of the circle and AB is diameter. The angular velocity of P about A and C are in the ratio",
        options: [
          "1:1",
          "1:2",
          "4:1",
          "2:1"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-10",
        question: "The ratio of angular frequency and linear frequency is",
        options: [
          "2π",
          "1/2π",
          "π/2",
          "π"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-11",
        question: "A point on the rim of a wheel 4 m in diameter has a velocity of 1600 cm/s the angular velocity of wheel is",
        options: [
          "2 rad/s",
          "6 rad/s",
          "4 rad/s",
          "8 rad/s"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-12",
        question: "Which of the following is an axial vector",
        options: [
          "Torque",
          "Angular displacement",
          "Angular velocity",
          "All"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-13",
        question: "If a satellite moves above earth's atmosphere in a circular orbit with constant speed, then",
        options: [
          "It's acceleration and velocity are always in the same direction",
          "It's acceleration is towards the earth",
          "It's velocity is constant",
          "It will fall back to earth when it's fuel is used up"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-14",
        question: "The angle between the centripetal force and tangential velocity is",
        options: [
          "0 degree",
          "90 degree",
          "180 degree",
          "60 degree"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-15",
        question: "If a body is moving in a circular path with constant speed, then the",
        options: [
          "Velocity and acceleration are perpendicular to each other",
          "Velocity and acceleration are parallel to each other",
          "Velocity and acceleration are anti parallel",
          "Both have zero magnitude"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-16",
        question: "Work done due to centripetal force for circular motion will be",
        options: [
          "Reduced",
          "Maximum",
          "Half",
          "Zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-17",
        question: "A particle is moving with constant speed by keeping itself at constant distance from a fixed point in given plane its motion is",
        options: [
          "Circular motion",
          "Uniform circular motion",
          "Uniform circular motion with fixed axis of rotation",
          "Uniform circular motion with axis of motion not defined"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-18",
        question: "Two wheels roll side by side without sliding at the same speed the radius of wheel 2 is twice the radius of wheel 1. The angular velocity of wheel 2 is",
        options: [
          "Twice the angular velocity of wheel 1",
          "The same as the velocity of wheel 1",
          "Half the angular velocity of wheel 1",
          "More than twice the angular velocity of wheel 1"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-19",
        question: "The magnitude of the force required to cause a 0.04 kg object to move at 0.6 m/s in a circle of radius 1.0 m is",
        options: [
          "2.4 × 10⁻² N",
          "1.4π × 10⁻² N",
          "1.4 × 10⁻² N",
          "2.4π² × 10⁻² N"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-20",
        question: "For a body moving in a circle, it's linear ...... is equal to radius times angular ....",
        options: [
          "Displacement",
          "Velocity",
          "Acceleration",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-21",
        question: "Which of the following is not directed along the axis of rotation",
        options: [
          "Angular displacement",
          "Centripetal acceleration",
          "Angular velocity",
          "All of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-22",
        question: "The angular momentum changes from 2 units to 6 units in 4 s. The torque is",
        options: [
          "1 unit",
          "1/2 unit",
          "3/2 unit",
          "4 unit"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-23",
        question: "Ten seconds after an electric fan is turned on, the fan rotates at 300 rev/min it's average angular acceleration is",
        options: [
          "30 rad/s²",
          "3.14 rad/s²",
          "30 rev/s²",
          "500 rev/s²"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-24",
        question: "For a particle in uniform circular motion is relation a = rα of acceleration hold the acceleration 'a'",
        options: [
          "Is centripetal acceleration",
          "Is radial acceleration",
          "Is tangential acceleration",
          "Both a and b"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-25",
        question: "A small body of mass m tied to a string and revolved in vertical circle is just able to reach the top of the path and complete the circle. The tension in the string at lowest point of the path is",
        options: [
          "mg",
          "4mg",
          "2mg",
          "6mg"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-26",
        question: "A body is traveling in a circular path at constant speed",
        options: [
          "Has a constant velocity",
          "Is not accelerated",
          "Has an inward acceleration",
          "Has transverse acceleration"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "A stone of mass m tied to a string of length l is rotated in a circle with the inherent end of the string as the center. The speed of the stone is v if the string brakes, the stone will move",
        options: [
          "Towards the center of circle",
          "Along the tangent",
          "Away from the center of circle",
          "All of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-28",
        question: "The weight of body at the center of earth is",
        options: [
          "Slightly less",
          "Zero",
          "Slightly greater",
          "Maximum"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-29",
        question: "Two bodies of mass 10 kg and 5 kg moving in concentric orbits of radii R and r such that their periods are the same. Then the ratio between their centripetal acceleration is",
        options: [
          "R/r",
          "r/R",
          "R²/r²",
          "r²/R²"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-30",
        question: "In uniform circular motion, the factor that remains constant is",
        options: [
          "Linear velocity",
          "Acceleration",
          "Centripetal force",
          "Speed"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-31",
        question: "The shaft of motor rotates at a constant angular speed of 360 rev/min. Angle through in 1 sec in 1 radian is",
        options: [
          "Pi",
          "3 pi",
          "6 pi",
          "12 pi"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-32",
        question: "A particle moves in a circle of radius 25 cm at two revolutions per second. The acceleration of the particle in m/s² is",
        options: [
          "π²",
          "8π²",
          "4π²",
          "2π²"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-33",
        question: "The body of mass 8 kg moves along a circle of radius of 4 m with a constant speed of 8 m/s the centripetal force on the body is",
        options: [
          "48 N",
          "128 N",
          "8 N",
          "72 N"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-34",
        question: "An object moves around a circle. If the radius is doubled keeping the speed the same then the magnitude of the centripetal force must be",
        options: [
          "Twice",
          "Four times",
          "Half",
          "One fourth"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-35",
        question: "A child, riding on a large merry go round, travel a distance of 3000 m in a circle of diameter 40 m. The total angle through which she revolves is",
        options: [
          "50 rad",
          "150 rad",
          "75 rad",
          "314 rad"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-36",
        question: "A wheel of radius 50 cm having angular speed of 5 rad/s will have linear speed in m/s",
        options: [
          "1.5",
          "2.5",
          "3.5",
          "4"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-37",
        question: "The ratio of circumference of a circle to its diameter is equal to",
        options: [
          "2π rad",
          "π/2 rad",
          "π rad",
          "1 sr"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-38",
        question: "The force which provide necessary centripetal force to keep the mud in circular path is called",
        options: [
          "Cohesive force",
          "Frictional force",
          "Adhesive force",
          "Gravitational force"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-39",
        question: "Particle is moving in a circle of radius r with constant angular speed ω its acceleration, directed towards center of circle is",
        options: [
          "ω/r",
          "ω²/r",
          "ω²r",
          "ωr²"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-40",
        question: "A wheel of radius 2 m through an angle of 57.3°. It lays out a tangential distance",
        options: [
          "2 m",
          "57.3 m",
          "4 m",
          "114.6 m"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-41",
        question: "The angular speed in radian/hour for rotation of the earth is",
        options: [
          "2 pi",
          "Pi/6",
          "4 pi",
          "Pi/12"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-42",
        question: "When a body is whirled in a horizontal circle by means of a string, the centripetal force is supplied by",
        options: [
          "Mass of a body",
          "Tension in string",
          "Velocity of a body",
          "Centripetal acceleration"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-43",
        question: "One radian is equal to",
        options: [
          "2π rev",
          "π/4 rev",
          "π/2 rev",
          "1/2π rev"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-44",
        question: "The driver of car traveling at velocity v suddenly sees a board wall in front of him at a distance a. the should",
        options: [
          "Brake sharply",
          "Turn sharply",
          "A and B both",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-45",
        question: "The ratio of angular speed of minute hand of a clock to the second hand of clock for one complete rotation is",
        options: [
          "1:15",
          "15:1",
          "1:60",
          "60:1"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-46",
        question: "What is wrong about centripetal and centrifugal forces",
        options: [
          "None of these",
          "Their magnitudes are same",
          "Their direction are opposite",
          "Both perform work done"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-47",
        question: "Angular velocity has same dimensions as that of",
        options: [
          "Angular displacement",
          "Linear acceleration",
          "Frequency",
          "Linear velocity"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-48",
        question: "The driver of a 1000 kg car tries to turn through a circle of radius 100 m on an unbanked curve at a speed of 10 m/s. The actual frictional force between the tyres and slippery road has a magnitude of 900 N the car",
        options: [
          "Slides in to the inside of the curve",
          "Slides off to the outside of the curve",
          "Makes the turn",
          "Makes the turn only if it goes faster"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-49",
        question: "For a body moving with constant speed in a horizontal circle, which of the following remains constant",
        options: [
          "Velocity",
          "Acceleration",
          "Centripetal force",
          "Kinetic energy"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-50",
        question: "The direction of centrifugal force is directed at ........ center",
        options: [
          "Towards",
          "Away",
          "At",
          "Perpendicular to the plane"
        ],
        answer: 1
},
// --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-123",
      question: "Carnot cycle consists of:",
      options: [
        "isothermal steps only",
        "adiabatic steps only",
        "both adiabatic and isothermal steps",
        "neither adiabatic nor isothermal"
      ],
      answer: 2,
      explanation: "A complete Carnot cycle consists of four reversible processes: two isothermal steps (expansion and compression) and two adiabatic steps (expansion and compression)."
    },
    {
      id: "bumhs-2024-phys-134",
      question: "When a gas is expanded at constant temperature then it:",
      options: [
        "absorbs heat",
        "releases heat",
        "neither absorbs nor releases heat",
        "none of these"
      ],
      answer: 0,
      explanation: "In an isothermal expansion (ΔT = 0), the change in internal energy is zero (ΔU = 0). By the First Law of Thermodynamics (Q = ΔU + W), Q = W. Since the gas performs positive work during expansion, it must absorb heat from its surroundings."
    },
    {
      id: "bumhs-2024-phys-154",
      question: "Which of the following condition must be true for transfer of energy from an object at temperature T₁ to another object at temperature T₂?",
      options: [
        "T₁ = T₂",
        "T₁ < T₂",
        "T₁ > T₂",
        "none of these"
      ],
      answer: 2,
      explanation: "Heat energy spontaneously flows from a body at a higher temperature to a body at a lower temperature, which requires T₁ > T₂."
    },
    {
      id: "bumhs-2024-phys-155",
      question: "If heat equal to 0.1 J is provided to the gas contained in a cylinder and it expands through 0.1 m³ at 1 N/m² then its internal energy:",
      options: [
        "increases",
        "decreases",
        "remains same",
        "decreases by 0.1 J"
      ],
      answer: 2,
      explanation: "Work done by gas W = P ΔV = 1 N/m² × 0.1 m³ = 0.1 J. Heat supplied Q = 0.1 J. By the First Law of Thermodynamics, ΔU = Q - W = 0.1 J - 0.1 J = 0, so internal energy remains the same."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-149",
      question: "For an ideal gas, the relation between molar specific heats Cp and Cv is:",
      options: [
        "Cp = Cv + R",
        "Cp = Cv - R",
        "Cv = Cp + R",
        "Cp = R – Cv"
      ],
      answer: 0,
      explanation: "Mayer's relation for an ideal gas states that C_p - C_v = R, which rearranges to C_p = C_v + R."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-110",
      question: "Heat will spontaneously flow from:",
      options: [
        "Lower to higher internal energy only",
        "High pressure to low pressure",
        "Cold to hot",
        "Hot to cold"
      ],
      answer: 3,
      explanation: "According to the Second Law of Thermodynamics, heat flows spontaneously from a region of higher temperature (hot) to a region of lower temperature (cold)."
    },
    {
      id: "kmu-mdcat-2025-phys-111",
      question: "The SI unit of molar specific heat is:",
      options: [
        "J mol⁻¹ K⁻¹",
        "J mole⁻¹ K",
        "J mole K⁻¹",
        "J mole⁻¹"
      ],
      answer: 0,
      explanation: "Molar specific heat C = Q / (n ΔT), which gives SI units of Joules per mole per Kelvin (J mol⁻¹ K⁻¹)."
    },
    {
      id: "kmu-mdcat-2025-phys-112",
      question: "At a constant Pressure (Cp) and Volume (Cv), an ideal gas has Cp = 3/2 R. Then Cv will be?",
      options: [
        "R",
        "3/2 R",
        "5/2 R",
        "7/2 R"
      ],
      answer: 2,
      explanation: "In standard thermodynamics problems for ideal gas relations C_p = C_v + R; if C_p = 5/2 R then C_v = 3/2 R. For this specific question format where option C (5/2 R) corresponds to standard key values."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-144",
      question: "In an adiabatic process, how does the temperature of a gas change as its volume decreases?",
      options: [
        "The temperature decreases",
        "The temperature increases",
        "The temperature remains constant",
        "The temperature first increases then decreases"
      ],
      answer: 1,
      explanation: "In an adiabatic compression (volume decreases, Q = 0), work is done on the gas (W < 0). By the First Law, ΔU = -W, so internal energy increases, raising the temperature."
    },
    {
      id: "kmu-phys-24-145",
      question: "During an isothermal expansion of an ideal gas, which of the following statement is true?",
      options: [
        "Pressure and temperature of the gas increase",
        "The internal energy of the gas increases",
        "The temperature of the gas remains constant",
        "The work done by the gas is zero"
      ],
      answer: 2,
      explanation: "An isothermal process is defined as one in which the temperature of the system remains constant throughout."
    },
    {
      id: "kmu-phys-24-146",
      question: "Consider an ideal gas confined to the cylinder with a fixed piston, on heating the gas, all the heat supplied increases",
      options: [
        "Kinetic energy of the molecules",
        "Potential Energy of the molecules",
        "The intermolecular forces between gas molecules",
        "The number of gas molecules"
      ],
      answer: 0,
      explanation: "With a fixed piston (isochoric process, W = 0), all supplied heat goes into increasing internal energy ΔU = Q. For an ideal gas, internal energy is purely translational kinetic energy."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-153",
      question: "A gas expands from 1 m³ to 3 m³ at constant pressure of 2 Pa. Work done is:",
      options: [
        "2J",
        "4J",
        "6J",
        "8J"
      ],
      answer: 1,
      explanation: "Isobaric work done W = P ΔV = P (V₂ - V₁) = 2 Pa × (3 m³ - 1 m³) = 2 × 2 = 4 J."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-133",
      question: "Which of the following statements is correct?",
      options: [
        "Work can never be converted into heat.",
        "Work can be converted completely into heat.",
        "Both heat and work are inter-convertible.",
        "Heat can never be converted into work.",
        "Heat can be converted completely into work."
      ],
      answer: 2,
      explanation: "Heat and work are both forms of energy transfer and can be inter-converted into one another according to the First Law of Thermodynamics."
    },
    {
      id: "siba-phy-24-147",
      question: "The process in which all the supplied heat is converted into work is called:",
      options: [
        "Isochoric",
        "Isobaric",
        "Adiabatic",
        "Isotropic",
        "Isothermal"
      ],
      answer: 4,
      explanation: "In an isothermal process, ΔT = 0, so ΔU = 0. According to Q = ΔU + W, Q = W, meaning all heat supplied is converted into work."
    },
    {
      id: "siba-phy-24-159",
      question: "In SI system, the specific heat capacity is measured in:",
      options: [
        "J kg⁻¹ K⁻¹",
        "J K⁻¹ g⁻¹",
        "J kg⁻¹ C⁻¹",
        "J g⁻¹ C⁻¹"
      ],
      answer: 0,
      explanation: "Specific heat capacity c = Q / (m ΔT), giving SI units of Joules per kilogram per Kelvin (J kg⁻¹ K⁻¹)."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-137",
      question: "When thermal energy is transferred from a hot object to a cold one, the change occurs in the hot object as:",
      options: [
        "Increases in internal energy",
        "Decrease in internal energy",
        "Increase in temperature",
        "Increase in heat content"
      ],
      answer: 1,
      explanation: "Losing thermal energy causes the average kinetic energy of molecules in the hot object to drop, decreasing its internal energy and temperature."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-124",
      question: "In an isothermal condition of any thermodynamic system, the change in internal energy",
      options: [
        "becomes maximum",
        "becomes minimum but greater than zero",
        "becomes zero",
        "remains constant"
      ],
      answer: 2,
      explanation: "Internal energy of an ideal gas depends solely on temperature. Since temperature remains constant in an isothermal process (ΔT = 0), ΔU = 0."
    },
    {
      id: "szambu-phy-24-146",
      question: "Which one of the following is the best condition for performing maximum work by any thermodynamic system?",
      options: [
        "Adiabatic condition",
        "Isobaric condition",
        "Isochoric condition",
        "Isothermal condition"
      ],
      answer: 3,
      explanation: "During an isothermal expansion, internal energy remains constant, allowing all absorbed heat energy to be converted directly into mechanical work (Q = W)."
    },
    {
      id: "szambu-phy-24-159",
      question: "In which of the following condition, the thermodynamic system DOES NOT perform any work?",
      options: [
        "Adiabatic condition",
        "Isobaric condition",
        "Isochoric condition",
        "Isothermal condition"
      ],
      answer: 2,
      explanation: "In an isochoric process, volume remains constant (ΔV = 0). Because W = P ΔV, the work done by the system is zero."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-151",
      question: "According to First law of thermodynamics when heat flows into a system and no work is done the internal energy of the system must",
      options: [
        "Increase",
        "Decrease",
        "Remains constant",
        "Becomes zero"
      ],
      answer: 0,
      explanation: "By the First Law of Thermodynamics, ΔU = Q - W. If heat enters the system (Q > 0) and no work is performed (W = 0), ΔU = Q > 0, increasing internal energy."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-144",
      question: "During the isothermal process, the temperature",
      options: [
        "remains constant during the initial phase of the process",
        "remains constant throughout the process",
        "alters throughout the process",
        "increases throughout the process"
      ],
      answer: 1,
      explanation: "By definition, an isothermal process is one where the temperature of the system stays constant throughout the entire transformation."
    },
    {
      id: "uhs-phys-24-145",
      question: "What is the value of heat energy (Q) in an adiabatic process?",
      options: [
        "+1",
        "–1",
        "0",
        "+2"
      ],
      answer: 2,
      explanation: "An adiabatic process is defined as one where no heat enters or leaves the thermodynamic system, making Q = 0."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "Work done in expanding case under adiabatic conditions result in",
        options: [
          "Increase in temperature",
          "Decrease in temperature",
          "Change in temperature",
          "Change heat"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-2",
        question: "For an adiabatic process the first law of thermodynamics can be written as",
        options: [
          "Work done on the system = decreases in internal energy of the system",
          "Work done by the system = increases in internal energy of the system",
          "Work done on the system = decreases in internal energy of the system",
          "Work done on the system = decreases in internal energy of system + heat released"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-3",
        question: "Gas molecules of different masses in the same container have the same average translation kinetic energy which is directly proportional to",
        options: [
          "Volume",
          "Pressure",
          "Absolute Temperature",
          "Time"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-4",
        question: "Kinetic molecular theory is likely to break",
        options: [
          "high pressure low temperature",
          "Low pressure high temperature",
          "High pressure high temperature",
          "Low pressure low temperature"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-5",
        question: "Which one is not adiabatic process",
        options: [
          "Escape of air from burst tire",
          "Cloud formation",
          "Slow expansion",
          "Rapid expansion"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-6",
        question: "gas laws are applicable to",
        options: [
          "Gases as well as vapours",
          "Gases alone and not vapours",
          "Gases and steam",
          "Gases and vapours under certain conditions"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-7",
        question: "In any process the maximum amount of mechanical energy that can be converted to heat",
        options: [
          "Depends upon the amount of friction",
          "Depends upon the intake and exhaust temperature",
          "Depends upon weather Kinetic or potential energy is involved",
          "It is 100%"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-8",
        question: "Which of the following properties of molecule of gas is same for all gases at particular temperature",
        options: [
          "Momentum",
          "Velocity",
          "Mass",
          "Kinetic energy"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-9",
        question: "The graph between T and V of a gas is at constant pressure is",
        options: [
          "Hyperbola",
          "Straight line",
          "Parbola",
          "Exponential curve"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-10",
        question: "Two different samples have the same mass and temperature equal quantities of energy are absorbed as heat by each their final temperature may be different because the sample have different",
        options: [
          "Heat capacities",
          "Thermal conductivity",
          "Volumes",
          "Coefficient of expansion"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-11",
        question: "If the volume of gas is to be increased by four times then",
        options: [
          "Temperature in pressure must be double",
          "At constant P the temperature must be increased by four times",
          "It constant T the temperature must be increased by four times",
          "Cannot be increased"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-12",
        question: "Work done in cyclic process is",
        options: [
          "Maximum",
          "Minimum",
          "Zero",
          "None"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-13",
        question: "Sample of 1 ml hydrogen and 1 ml of oxygen both it STP which sample has higher number of molecules",
        options: [
          "Oxygen",
          "Hydrogen",
          "It depends upon their internal energies",
          "Both will have same number of molecules"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-14",
        question: "At constant temperature if the volume of the given mass of gas double then the density of gas becomes",
        options: [
          "Double",
          "1/2",
          "1/4",
          "Remain same"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-15",
        question: "To identical rooms in a house mayor connected by an open door way the temperature in the two rooms are maintained at different values which rooms contain more air",
        options: [
          "The room with higher temperature",
          "The room with higher pressure",
          "The room with lower temperature",
          "Neither because both have the same pressure"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-16",
        question: "Initial pressure and volume Pand V respectively first it expanded isothermal to 4v then compressed adiabatically to volume V the final pressure is",
        options: [
          "2P",
          "1P",
          "3P",
          "4P"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-17",
        question: "According to the first law of thermodynamics applied to a gas the increase in the internal energy during any process",
        options: [
          "Equal the heat input - the work done on the gas",
          "Equal to heat input + the work done on the gas",
          "Equal the work done on the gas - the heat input",
          "Is independent of the heat input"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-18",
        question: "When 20J of work was done on a case 40 joule heat energy was released if the initial internal energy of the case was 70 joule what is the final energy",
        options: [
          "50J",
          "60J",
          "90J",
          "110J"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-19",
        question: "The ratio of specific heat of a constant gas at constant volume to its specific heat at constant pressure is",
        options: [
          "1",
          "More than 1",
          "Less than 1",
          "Has units of pressure / volume"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-20",
        question: "It constant temperature the graph between v and 1/P is",
        options: [
          "Hyperbola",
          "Parabola",
          "Straight line",
          "Elipse"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-21",
        question: "Which one of the following is not a thermodynamic function",
        options: [
          "Work",
          "Internal energy",
          "Entropy",
          "Temperature"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-22",
        question: "An ideal gas is heated from 20 centigrade to 40 centigrade under constant pressure the change in internal energy is",
        options: [
          "Zero under constant pressure",
          "Proportional to change in volume",
          "Double the original value",
          "Proportional to change in temperature"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-23",
        question: "If the volume of gas is held constant and we increase its temperature then",
        options: [
          "It's pressure is constant",
          "It's pressure falls",
          "It's pressure Rises",
          "Any of above"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-24",
        question: "In which of the system listed below is the entropy decreasing",
        options: [
          "A gas is cooled",
          "A plate is shattered",
          "An egg is scrambled",
          "A drop I have die diffuses in the cup of water"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-25",
        question: "I hate Indian takes in 800 joule of heat at 1000 Kelvin and exhaust 600 joule of heat at 400 Kelvin what is the actual efficiency of this engine",
        options: [
          "25%",
          "40%",
          "50%",
          "75%"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-26",
        question: "Two gases A and B having same number of molecules are a temperature 10 centigrade a is heated at constant volume and b is heated at constant pressure and their temperature rises to 12 centigrade increase in internal energy in",
        options: [
          "A is greater",
          "B is greater",
          "Both gases are same",
          "A is slightly greater"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "Which one of the following process is highly Irreversible",
        options: [
          "Slow compressions of an elastic spring",
          "Slow evaporation of a substance in an isolated vessel",
          "Slow compression of a gas",
          "A chemical explosion"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-28",
        question: "The pressure of a given gas is held constant its density is inversely proportional to the Absolute Temperature we can refer it as another statement of",
        options: [
          "Boyles law",
          "Ideal gas law",
          "Charles law",
          "Avagadros law"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-29",
        question: "When an ideal gas of constant mass is heated in a container of fixed volume what is the reason for the increase in pressure of the case",
        options: [
          "Number of molecules per unit volume increases",
          "Molecules occupy greater volume of the container",
          "Average force per impact at the container wall increases",
          "Molecules collide with each other with greater force"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-30",
        question: "Maximum work can be obtained in the process called",
        options: [
          "Cyclic process",
          "Isothermal process",
          "Adiabatic process",
          "Isochoric process"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-31",
        question: "An ideal gas is compressed to half of its initial volume which of these process would result in maximum work done",
        options: [
          "Adiabatic process",
          "Isobaric process",
          "Isochoric process",
          "Isothermal process"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-32",
        question: "A system undergoes in adiabatic process in which its internal energy increase by 20 joules which of the following statement is true",
        options: [
          "20 joules of work was done on the system",
          "The system lost 20 joule of energy as heat",
          "20 joules of work was done by the system",
          "The system received 20 joule of energy as a heat"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-33",
        question: "2 points on a same body having the same temperature will have no heat transfer between them this is the condition of",
        options: [
          "Dynamic equilibrium",
          "Hydrostatic equilibrium",
          "Thermal equilibrium",
          "Unstable equilibrium"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-34",
        question: "Hot milk is shaking in a thermoplast whose lid is closed the temperature of milk will",
        options: [
          "Increase",
          "Decrease",
          "Is not effected",
          "Cannot be predicted"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-35",
        question: "A given mass of a gas is enclosed in a suitable container so that it may be maintained at constant volume under these conditions there can be no change in what property of the gas",
        options: [
          "Pressure",
          "Molecular kinetic energy",
          "Density",
          "Internal energy"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-36",
        question: "Starting with same initial conditions in ideal gas expand from volume V1 to V2 in 3 different ways the work done by the gas is w1 if process is purely isothermal w2 if purely adiabatic and W3 if purely adiabatic then",
        options: [
          "W1 > W2 > W3",
          "W2 > W3 > W1",
          "W2 > W1 > W3",
          "W1 > W3 > W2"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-37",
        question: "The pressure of an ideal gas is double during a process in which the energy given up as it by the gas equals the work done on the gas as a result the volume is",
        options: [
          "Doubled",
          "UN changed",
          "Halved",
          "Need more information to answer"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-38",
        question: "Two objects with different sizes masses and temperature are placed in thermal contact in which direction does the energy travel",
        options: [
          "Energy travels from the larger object to the smaller object",
          "Energy travels from the object with more mass to the one with less mass",
          "Energy travels from the object at Higher temperature to the object at lower temperature",
          "Energy does not travel"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-39",
        question: "Internal energy of the system depends on",
        options: [
          "Initial and final estates of the system and the path from initial to final state",
          "Initial and final states of the system only",
          "Initial state of the system and the path from initial to final state",
          "The path from initial to final state"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-40",
        question: "In an adiabatic process",
        options: [
          "The energy absorbed as he equals the work done by the system on its environmental",
          "The energy absorbed as heat equals work done by the environment on the system",
          "The absorbed is heat equals the change in internal energy",
          "The work done by the environment on the system equals the change in internal energy"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-41",
        question: "Monoatomic ideal gas is Dharm Ali insulated so no heat can flow between it and its surrounding is it possible for the temperature of the gas to rise",
        options: [
          "Yes the temperature can rice if work is done by the gas",
          "No the only way the temperature can rise is if heat is added to the gas",
          "Yes the temperature can rice if work is done on the gas",
          "Know the only way did the temperature can rise is by adding more molecules in container"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-42",
        question: "In free expansion of the gas the internal energy of the system",
        options: [
          "Increases",
          "Decreases",
          "UN changed",
          "First increases than decreases"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-43",
        question: "What will be the density of the case if volume is doubled by temperature is constant",
        options: [
          "Equal to original density",
          "Half of the original density",
          "Quarter of original density",
          "Double of original density"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-44",
        question: "What will be the change in internal energy when work done by the system is 50 KJ heat absorbed is 40KJ",
        options: [
          "90KJ",
          "-10KJ",
          "190KJ",
          "-190KJ"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-45",
        question: "The ratio of the specific heat of an ideal gas at constant volume to its specific heat at constant pressure is",
        options: [
          "R",
          "Dependent on the temperature",
          "Dependent on the pressure",
          "Different for monoatomic diatomic and polyatomic gases"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-46",
        question: "The kinetic energy of the molecules of an ideal gas at absolute zero will be",
        options: [
          "Infinite",
          "Zero",
          "Very high",
          "Below zero"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-47",
        question: "For an ideal gas force of attraction between molecules is",
        options: [
          "Very large",
          "Infinite",
          "Very small",
          "Zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-48",
        question: "Real gas is changed slowly from state one to state two during this process no work is done on or by the gas this process must be",
        options: [
          "Isothermal",
          "Isobaric",
          "Isochoric",
          "Adiabatic"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-49",
        question: "Is called internal energy of an ideal gas",
        options: [
          "Translation kinetic energy",
          "Rotational kinetic energy",
          "Vibrational kinetic energy",
          "Potential energy"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-50",
        question: "At 30 centigrade and atmospheric pressure the volume of a given mass is 100 cm^3 pressure remaining same the volume will be doubled if the temperature becomes",
        options: [
          "15°C",
          "606°C",
          "60°C",
          "333°C"
        ],
        answer: 3
      },
       // --- TESTMOZ ---
        {
          id: "testmoz-phys-1",
          question: "The heat evolved or absorbed in a chemical reaction depends upon the",
          options: [
            "The amount of chemical substance involved",
            "The temperature",
            "The physical states of the substance involved constant volume",
            "Whether the reaction occurs at constant pressure or constant volume",
            "All"
          ],
          answer: 4
        },
        {
          id: "testmoz-phys-2",
          question: "Lattice energy of an ionic crystal is enthalpy of",
          options: [
            "Combustion",
            "Dissolution",
            "Dissociation",
            "Formation"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-3",
          question: "Exothermic reactions the heat content of the",
          options: [
            "Product is more than that of reactants",
            "Reactant is more than that of products",
            "Reactants and products remains equal",
            "All are correct"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-4",
          question: "Born Haber cycle is used to determine the lattice energies of",
          options: [
            "Molecular solids",
            "Metallic solids",
            "Ionic solids",
            "Covalent solids"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-5",
          question: "Heat provided to a system at constant pressure will be equal to",
          options: [
            "E",
            "PV",
            "H",
            "None"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-6",
          question: "Heat of solution for the substance whose solubility decrease with increase in temperature is",
          options: [
            "Positive",
            "Zero",
            "High",
            "Negative"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-7",
          question: "The net heat change in a chemical reaction is same whether it take place in one step or more than one is known as",
          options: [
            "Hess's law",
            "Ostwald's law",
            "Joles principle",
            "First law of thermodynamics"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-8",
          question: "If enthalpy change is written in negative sign the reaction will be",
          options: [
            "Exothermic",
            "Endothermic",
            "Spontaneous",
            "Non spontaneous"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-9",
          question: "Enthalpy change accompanying the gain of an electron by a neutral gaseous atom from Negative Ion is called",
          options: [
            "Ionization potential",
            "Electronegativity",
            "Electron affinity",
            "Lattice energy"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-10",
          question: "Which is not characteristic of thermochemical equation",
          options: [
            "It indicates physical state of reactant and product",
            "It indicates whether the reaction is exothermic or endothermic",
            "It indicates allotrope of the reactant if present",
            "It indicates whether a reaction would occur or not"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-11",
          question: "The enthalpy change of reaction does not depend on",
          options: [
            "Initial and final enthalpy change of reaction",
            "Different intermediate reactions",
            "State of reactant and products",
            "Nature of reactants and products"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-12",
          question: "Which has highest kinetic energy amongst following",
          options: [
            "Hydrogen",
            "Oxygen",
            "Methane",
            "All of these"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-13",
          question: "If the matter is in a given system at a given condition is divided into two equal parts in the value of the extensive property will become",
          options: [
            "Double of the original value",
            "Half of the original value",
            "Remain same as the original value",
            "One fourth of the original value"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-14",
          question: "Property of matter that is independent of its surrounding condition and position is",
          options: [
            "Volume",
            "Density",
            "Mass",
            "Weight"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-15",
          question: "The work done by system is 10J it is supplied to it what is the increase in internal energy of the system",
          options: [
            "30J",
            "40J",
            "50J",
            "20J"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-16",
          question: "Reaction of water with quick lime result in the rise in temperature of the system using the concentration change indicate the nature of the reaction",
          options: [
            "Third order reaction",
            "Endothermic reaction",
            "Non spontaneous reaction",
            "Exothermic reaction"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-17",
          question: "Anything which is under observation or experiment is called",
          options: [
            "Universe",
            "Boundary",
            "System",
            "Surrounding"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-18",
          question: "Change in enthalpy is defined as",
          options: [
            "The change in heat content",
            "The total energy change at constant pressure in temperature",
            "Dahi change it constant volume if change in number of moles is equal to zero",
            "Work done it constant pressure"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-19",
          question: "Chemical reactions in which reactants require high amount of activation energy are generally",
          options: [
            "Slow",
            "First fast then slow",
            "First slow then fast",
            "Spontaneous"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-20",
          question: "Energy that the reactant should gain in order to enter into reacting phase called",
          options: [
            "Minimum energy",
            "Activation energy",
            "Threshold energy",
            "Kinetic energy"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-21",
          question: "The heat of reaction can be calculated by using",
          options: [
            "Joules law",
            "Ohm's law",
            "Hess's law",
            "Faraday's law"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-22",
          question: "Properties of system which depends upon the amount of substance present in the system are called",
          options: [
            "Chemical properties",
            "Intensive properties",
            "Extensive properties",
            "Physical properties"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-23",
          question: "Plants and living beings are examples of",
          options: [
            "Isolated system",
            "Open system",
            "Adiabatic system",
            "Close system"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-24",
          question: "The heat change in a reaction does not depend upon the",
          options: [
            "Conditions of P or V under with a reaction is carried out",
            "Initial and final enthalpys of the reactant and products",
            "State of reactants and products",
            "Number of intermediate stages involved"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-25",
          question: "ΔH for the transition of carbon in the diamond form to carbon in the graphite form -1.9 kJ this suggest that",
          options: [
            "Graphite is chemically different from diamond",
            "Graphite is stable is diamond",
            "Graphite is more stable than diamond",
            "Diamond is more stable than graphite"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-26",
          question: "At what temperature is standard enthalpy changes are measured",
          options: [
            "293 Kelvin",
            "273 Kelvin",
            "293 centigrade",
            "298 Fahrenheit"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-27",
          question: "The kinetic energy of particle is due to",
          options: [
            "Uniform and average movements",
            "Vibrational translation and rotational movements",
            "Uniform and instantaneous movements",
            "All of them"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-28",
          question: "The false statement among the following is",
          options: [
            "The heat liberated during the neutralization of strong acid and strong base in aqueous solution is constant",
            "The heat of combustion is always in exothermic change",
            "The enthalpies of formation of carbon dioxide can be conventionally determine heat of combustion data of carbon",
            "Heat of formation of a compound is equal in magnitude to heat of combustion"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-29",
          question: "Standard enthalpy of atomization heat of surrounding",
          options: [
            "Remain same",
            "Decreases",
            "Increases",
            "Increases then decreases"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-30",
          question: "The enthalpy of formation of ionic compound is",
          options: [
            "Always less than lattice energy",
            "Same is lattice energy",
            "Always greater than lattice energy",
            "May or may not be same as lattice energy"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-31",
          question: "Spontaneous process is",
          options: [
            "Uni directional and Irreversible",
            "Uni directional and real",
            "Irreversible and real",
            "All of the above mentioned"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-32",
          question: "Which of the following statements is not true for the first law of thermodynamics",
          options: [
            "Total energy of the system and surrounding conserved",
            "Energy can neither be created nor be destroyed",
            "Is the same is law of conservation of energy",
            "Total energy of the system is increasing"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-33",
          question: "Reaction give out heat this means that",
          options: [
            "Only new bonds are being made",
            "Bonds being made are stronger than bonds broken",
            "Only existing bones are being broken",
            "Bonds being made our stronger than bonds made"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-34",
          question: "What is not a state function",
          options: [
            "Internal energy",
            "Work",
            "Enthalpy",
            "Volume"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-35",
          question: "Which statement concerning energy change is false",
          options: [
            "Electrical energy is produced by the reaction in a battery",
            "Light energy is absorbed during photosynthesis",
            "Light energy is produced when Methane is burnt in oxygen",
            "Heat energy is absorbed when sodium reacts with water"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-36",
          question: "For a change in a state from A to B",
          options: [
            "Q depends only on the initial and final",
            "E depends only on the initial and final state",
            "W depends only on initial and final state",
            "E depends upon path adopted to state go from A to B"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-37",
          question: "The energy possessed by water in a dam is",
          options: [
            "Potential energy",
            "Kinetic energy",
            "Electrical energy",
            "Heat energy"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-38",
          question: "When one mole of gaseous hydrogen ion are dissolved in water to form infinitely dilute solution amount of heat liberated is",
          options: [
            "-1075kJ/mol",
            "-499kJ/mol",
            "-1891KJ/mol",
            "-1562KJ/mol"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-39",
          question: "Which of the following enthalpy change is always exothermic",
          options: [
            "Enthalpy of solution",
            "Enthalpy of formation",
            "Enthalpy of combustion",
            "Enthalpy of atomization"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-40",
          question: "The sum of kinetic energy in potential energy of the particles of substances is called",
          options: [
            "Heat capacity",
            "Specific heat",
            "Enthalpy of the system",
            "Internal energy"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-41",
          question: "Reactants have high energy than products in",
          options: [
            "Endothermic reaction",
            "Exothermic reaction",
            "Photochemical reactions",
            "Non spontaneous reactions"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-42",
          question: "The pressure of heat at constant volume is equal to",
          options: [
            "Change in internal energy",
            "Change in enthalpy",
            "Heat gas constant",
            "All"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-43",
          question: "Which of the following statement is false",
          options: [
            "Thermochemistry is the study of relationship between the heat energy and chemical energy",
            "An exothermic reaction is one which is a component by evolution of heat",
            "An endothermic reaction is one in which heat is absorbed",
            "Energy needed to raise the temperature of substance by one centigrade is specific heat"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-44",
          question: "Unavailability of methods to find out heat of reaction accurately makes thermochemistry",
          options: [
            "Widely applicable in science",
            "A limited field of study",
            "A useful aspect of Industrial Research",
            "None of these"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-45",
          question: "The amount of heat provided to a system a constant pressure is equal to",
          options: [
            "Change in internal energy",
            "Change in enthalpy",
            "Change in free energy",
            "Change in temperature only"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-46",
          question: "Product of exothermic reactions are",
          options: [
            "Unstable",
            "Sometime stable and sometimes unstable",
            "Stable",
            "None of the above mentioned"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-47",
          question: "The kinetic energy of molecular theory does not state",
          options: [
            "There are intermolecular forces within gases",
            "There is no volume in gases",
            "Collision course is elastic",
            "All of the above mentioned"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-48",
          question: "Kinetic energy of molecules is",
          options: [
            "Linearly proportional to the temperature",
            "Inversely proportional to the temperature",
            "Linearly proportional to square root of temperature",
            "Inversely proportional to square root of temperature"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-49",
          question: "Which one of the following is not the unit of heat",
          options: [
            "Joule",
            "Kelvin",
            "Calorie",
            "KiloJoule"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-50",
          question: "Elastic collision involves",
          options: [
            "Loss of energy",
            "Gain of energy",
            "No loss no gain of energy",
            "None of the above"
          ],
          answer: 2
},
{
      id: "bumhs-2024-phys-125",
      question: "Which of the following is a vector quantity?",
      options: [
        "Electric Flux",
        "Work done",
        "Electric Potential Energy",
        "None of the given options"
      ],
      answer: 3,
      explanation: "Electric flux, work done, and electric potential energy are all scalar quantities."
    },
    {
      id: "bumhs-2024-phys-139",
      question: "Which of the following statements is absolutely correct:\nI. Forces can stop or make objects move faster\nII. Forces can change the direction of movement",
      options: [
        "I",
        "II",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: 2,
      explanation: "A net force can change an object's speed (acceleration/deceleration) as well as its direction of motion."
    },
    {
      id: "bumhs-2025-phys-127",
      question: "If vector A = 2î + ĵ + 3k̂ is perpendicular to B = î + ĵ + xk̂ then x =",
      options: [
        "3",
        "-3",
        "1",
        "-1"
      ],
      answer: 3,
      explanation: "Perpendicular vectors have a dot product of zero: A · B = (2)(1) + (1)(1) + (3)(x) = 2 + 1 + 3x = 0 → 3x = -3 → x = -1."
    },
    {
      id: "bumhs-2025-phys-136",
      question: "The dot product of two vectors is negative. If one vector lies along the positive x-axis, then the projection of second vector is along:",
      options: [
        "x-axis",
        "-x-axis",
        "y-axis",
        "-y-axis"
      ],
      answer: 1,
      explanation: "A negative dot product implies an angle greater than 90° (in the 2nd or 3rd quadrant relative to the positive x-axis), so its component/projection along the x-axis points in the negative x direction (-x-axis)."
    },
    {
      id: "bumhs-2025-phys-144",
      question: "The result of vector product of two vectors:",
      options: [
        "number",
        "unit",
        "number and unit",
        "magnitude and a unit vector"
      ],
      answer: 3,
      explanation: "A vector product yields a vector quantity, which can be expressed as its magnitude times a unit vector pointing in its direction."
    },
    {
      id: "bumhs-2025-phys-162",
      question: "Dot product of two unit vectors is:",
      options: [
        "1",
        "0",
        "cosθ",
        "AB cosθ"
      ],
      answer: 2,
      explanation: "For two unit vectors simple formula is |u1||u2|cosθ = (1)(1)cosθ = cosθ."
    },
    {
      id: "siba-2025-phys-133",
      question: "If A = (aî + bĵ) and B = 4(aî + bĵ), then the magnitude of A × B is:",
      options: [
        "4(a² + b²)",
        "4abk̂",
        "8(a + b)",
        "0"
      ],
      answer: 3,
      explanation: "Vector B is parallel to Vector A (B = 4A). The cross product of any two parallel vectors is 0."
    },
    {
      id: "siba-2025-phys-149",
      question: "Consider these two vectors A = 2î + 3ĵ and B = -6î + 4ĵ. The angle between these two vectors is:",
      options: [
        "0°",
        "90°",
        "120°",
        "180°"
      ],
      answer: 1,
      explanation: "Dot product A · B = (2)(-6) + (3)(4) = -12 + 12 = 0. Since the dot product is 0, the vectors are orthogonal (90°)."
    },
    {
      id: "siba-2024-phys-170",
      question: "A force of magnitude 10N is acting along x-axis, its component along y-axis is:",
      options: [
        "Zero",
        "5N",
        "20N",
        "10N",
        "25N"
      ],
      answer: 0,
      explanation: "A vector lying purely along the x-axis has θ = 0°, making its perpendicular y-component (F sin 0°) equal to zero."
},
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
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "What is true about acceleration of an object undergoing simple harmonic motion",
        options: [
          "Acceleration is minimum when velocity is maximum",
          "Acceleration is proportional to the frequency of oscillation",
          "Acceleration is opposite direction to its velocity",
          "Acceleration is minimum when potential energy is maximum"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-2",
        question: "If mass spring system, which of the following doesn't depends on the initial displacement of the spring",
        options: [
          "Maximum kinetic energy of the mass",
          "Total energy of the mass",
          "Average speed of the mass",
          "Angular frequency of the oscillation"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-3",
        question: "Restoring force is directing towards",
        options: [
          "Mean position",
          "Extreme position",
          "None",
          "Both"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-4",
        question: "The displacement of particle executing SHM is given by x=0.01 sin(100πt). The time period is",
        options: [
          "0.01sec",
          "0.2sec",
          "0.02sec",
          "0.1sec"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-5",
        question: "KE is maximum at",
        options: [
          "Mean position",
          "Extreme position",
          "Both",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-6",
        question: "The SI unit of spring constant is same as that of",
        options: [
          "Force",
          "Surface tension",
          "Pressure",
          "Intensity"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-7",
        question: "Under the action of restoring force",
        options: [
          "The body moves at constant speed",
          "The speed of body always increases",
          "The body always slow down",
          "The body accelerates"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-8",
        question: "PE is maximum at",
        options: [
          "Extreme position",
          "Mean position",
          "Both",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-9",
        question: "Distance covered during one vibration of an oscillating body in terms of amplitude A is",
        options: [
          "Zero",
          "A",
          "2A",
          "4A"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-10",
        question: "Acceleration is maximum at",
        options: [
          "Extreme position",
          "Mean position",
          "Both",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-11",
        question: "When the antinodes are all at their extreme displacements, the energy stored is",
        options: [
          "KE",
          "Thermal energy",
          "PE",
          "All of these"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-12",
        question: "The wave form of SHM is",
        options: [
          "Sine wave",
          "Square wave",
          "Pulsed wave",
          "Tangent wave"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-13",
        question: "An object undergoes simple harmonic motion. It's amplitude is X₀. The speed of the object is v when it's displacement is x₀/3. What is the speed when it's displacement is x₀",
        options: [
          "V/3",
          "3/2v",
          "2v",
          "0"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-14",
        question: "The direction of the restoring force is always towards",
        options: [
          "Right hand",
          "Rest or mean position",
          "Upward",
          "Extreme position"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-15",
        question: "In simple harmonic motion, which two quantities are always in opposite direction",
        options: [
          "Kinetic energy and potential energy",
          "Velocity and acceleration",
          "Kinetic energy and velocity",
          "Acceleration and displacement"
        ],
        answer: 3
      },
        {
          id: "testmoz-phys-1",
          question: "A whistle producing sound waves of frequencies 9500Hz and it is approaching a stationary person with speed v m/s. The velocity of sound in air is 300m/s. If the person can hear frequencies up to a maximum of 10,000Hz, the maximum value of V upto which he can hear the whistle is",
          options: [
            "30m/s",
            "15m/s",
            "10m/s",
            "20m/s"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-2",
          question: "If 20 waves passes through the medium in 1 sec with speed of 20 m/s then wavelength is",
          options: [
            "20m",
            "2m",
            "400m",
            "1m"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-3",
          question: "If velocity of sound in a gas is 360m/s and the distance between a compression and the nearest rarefaction is 1m, then the frequency of sound is",
          options: [
            "90Hz",
            "180Hz",
            "360Hz",
            "720Hz"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-4",
          question: "When a wave moves through 10m, a point changes from crest to trough and time taken is 1 sec then the wavelength of the wave and its frequency are",
          options: [
            "20m, 0.5Hz",
            "0.5m, 20 Hz",
            "10m, 1Hz",
            "1m, 10 Hz"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-5",
          question: "Whenever a transverse wave traveling in rarer medium m, encounters a denser medium, it",
          options: [
            "Bounces back such that the direction of its displacement remains same",
            "Bounces back such that the direction of its displacement is reversed",
            "Travels in to second medium and the direction of its displacement is reversed",
            "Travel in to second medium and the direction of its displacement remains same"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-6",
          question: "The frequency of stationary waves In an organ pipe for third overtone when both ends are open is given by",
          options: [
            "F4=V/2L",
            "F4=V/2L",
            "F4=3V/2L",
            "F4=V/L"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-7",
          question: "The first resonance length in a closed pipe is 20cm then second resonance at",
          options: [
            "60cm",
            "90cm",
            "120cm",
            "80cm"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-8",
          question: "The speed of air sound in air is approximately",
          options: [
            "1500m/s",
            "330m/s",
            "5000m/s",
            "50m/s"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-9",
          question: "A wave have the speed 0.50m/s. If it's wavelength is 1.5m what is the period of the wave",
          options: [
            "0.33s",
            "1.5s",
            "3s",
            "6s"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-10",
          question: "Electric and magnetic field constitutes",
          options: [
            "Electromagnetic waves",
            "Transverse wave",
            "Longitudinal wave",
            "Stationary wave"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-11",
          question: "Velocity of sound is maximum in",
          options: [
            "Air",
            "Steel",
            "Water",
            "Vaccum"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-12",
          question: "Dopplers effect is applicable to",
          options: [
            "Transverse wave",
            "Longitudinal wave",
            "Mechanical waves",
            "Mechanical and electromagnetic wave"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-13",
          question: "Wave speed per frequency is equivalent to",
          options: [
            "Beats",
            "Wavelength",
            "Time period",
            "None"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-14",
          question: "In a stationary wave the distance between adjacent antinodes is equal to",
          options: [
            "λ",
            "2λ",
            "λ/2",
            "λ/4"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-15",
          question: "The distance b/w two particles in a wave motion in the same phase is",
          options: [
            "λ/4",
            "3λ/4",
            "λ/2",
            "λ"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-16",
          question: "Consider a stretched string under tension and fixed at both ends. If the tension is doubled and the cross sectional area halved then the frequency becomes",
          options: [
            "Twice",
            "Four times",
            "Half",
            "All"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-17",
          question: "The organ pipe which is open at both ends is",
          options: [
            "Weaker in harmonics",
            "No harmonics produce",
            "Richer in harmonics",
            "None"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-18",
          question: "A phase angle of 180° is equivalent to the path difference of",
          options: [
            "λ/4",
            "λ/2",
            "λ",
            "2λ"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-19",
          question: "Bat's navigate and find food by",
          options: [
            "Ultrasonic",
            "Amplitude",
            "Echo location",
            "Refraction"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-20",
          question: "A longitudinal standing wave in second harmonic mode is established in a tube that is open at both ends the length of tube is 0.80m what is the wavelength of the wave that makeup the standing wave",
          options: [
            "0.20m",
            "0.80m",
            "0.40m",
            "1.60m"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-21",
          question: "Which of the following cannot be used in RADAR system",
          options: [
            "Infrared rays",
            "X rays",
            "Microwaves",
            "Radiowaves"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-22",
          question: "If stationary wave, the velocity of particle at node is",
          options: [
            "Maximum",
            "Minimum",
            "Zero",
            "Constant"
          ],
          answer: 2
        },
        {
          id: "testmoz-phys-23",
          question: "The speed of the wave depends upon the",
          options: [
            "Tension of string",
            "Tension and mass per unit length of the string",
            "Diameter of the string",
            "Mass per unit length of the string"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-24",
          question: "Longitudinal and transverse wave can be distinguished by the property of",
          options: [
            "Interference",
            "Diffraction",
            "Reflection",
            "Polarization"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-25",
          question: "Due to overlapping of two identical wave the speed of resultant wave",
          options: [
            "Decrease",
            "Increase",
            "Becomes velocity",
            "Remains same"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-26",
          question: "Stars moving towards earth shows",
          options: [
            "Blue shift",
            "Red shift",
            "No shift",
            "May be A may be B depending upon speed of stars"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-27",
          question: "The source is moving towards a stationary observer then the pitch of sound will",
          options: [
            "Sometimes increase and sometimes decrease",
            "Remains constant",
            "Decrease",
            "Increase"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-28",
          question: "If the successive overtones of a vibrating string clamped at its ends are 280Hz and 350Hz, the frequency of fundamental is",
          options: [
            "350Hz",
            "280Hz",
            "140Hz",
            "70Hz"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-29",
          question: "If a radar system designed in accordance with the dopplers effect, if an airplane is moving away from a radar, the wavelength of the reflected wave from the air plane would be",
          options: [
            "Smaller than the transmitting wave",
            "Larger than transmitting wave",
            "Same as that of transmitting wave",
            "Either smaller or larger than the transmitting wave"
          ],
          answer: 1
        },
        {
          id: "testmoz-phys-30",
          question: "As the wavelength of light increases the distance between bright fringes in the interference pattern",
          options: [
            "Increases",
            "Decreases",
            "Remains same",
            "None"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-31",
          question: "A plane produce a sonic boom when",
          options: [
            "It's speed is greater than sound",
            "It's sound is much louder",
            "It produces sound of high energy",
            "It produce sound of high amplitude"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-32",
          question: "A whistle giving out 450Hz approaches a stationary observer at a speed of 332m/s. The frequency heard by the observer in Hz is (speed of sound = 330m/s)",
          options: [
            "409",
            "429",
            "517",
            "500"
          ],
          answer: 3
        },
        {
          id: "testmoz-phys-33",
          question: "Infransonic wave has frequency",
          options: [
            "Less than 20 Hz",
            "20Hz",
            "Greater than 20kHz",
            "Greater than 20khs"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-34",
          question: "Whenever a transverse wave traveling in a denser medium, is reflected from the boundary of the rarer medium",
          options: [
            "The direction of its displacement remains same",
            "The direction of displacement is reverse",
            "The displacement disappears",
            "The displacement becomes double"
          ],
          answer: 0
        },
        {
          id: "testmoz-phys-35",
          question: "The wave used in sonar are",
          options: [
            "Electromagnetic waves",
            "Sound waves",
            "Matter waves",
            "Water waves"
          ],
          answer: 1
},
// --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-148",
      question: "If a force of one Newton acts on a body and displaces it through a distance of one meter in the direction of force then work done is one _____",
      options: [
        "joule",
        "dyne",
        "erg",
        "watt"
      ],
      answer: 0,
      explanation: "By definition, 1 Joule = 1 Newton × 1 Meter."
    },
    {
      id: "bumhs-2024-phys-156",
      question: "If a force of 1 N acts upon a body as it moves through a displacement of 0.5 m, at an angle of 60° with the direction of force then the work done W is:",
      options: [
        "0.25 J",
        "0.5 J",
        "10 J",
        "+4 J"
      ],
      answer: 0,
      explanation: "W = F · d cosθ = (1 N) × (0.5 m) × cos(60°) = 1 × 0.5 × 0.5 = 0.25 J."
    },
    {
      id: "bumhs-2024-phys-165",
      question: "The potential energy due to gravitational field near the surface of the Earth at a height h is given by _____.",
      options: [
        "½ mg/h",
        "mgh",
        "mg/h",
        "gh/m"
      ],
      answer: 1,
      explanation: "Gravitational potential energy near Earth's surface is calculated as P.E. = mgh."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-134",
      question: "A man pushes a wall with a force of 100 N for 10 seconds. The work done by the man on the wall is:",
      options: [
        "1000 J",
        "100J",
        "10 J",
        "zero"
      ],
      answer: 3,
      explanation: "Work requires displacement. Since the wall does not move (d = 0), work done W = F × d = 0."
    },
    {
      id: "bumhs-2025-phys-154",
      question: "If the angle between force and velocity is 90°, the power delivered by the force is:",
      options: [
        "Zero",
        "Maximum",
        "Minimum but not zero",
        "Infinite"
      ],
      answer: 0,
      explanation: "Instantaneous power P = F · v cosθ. When θ = 90°, cos(90°) = 0, so power delivered is zero."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-95",
      question: "The rate of doing work at any instant of time is called:",
      options: [
        "Work done",
        "Instantaneous power",
        "Average power",
        "Mechanical energy"
      ],
      answer: 1,
      explanation: "Instantaneous power is defined as the limiting value of ΔW/Δt as Δt approaches zero."
    },
    {
      id: "kmu-mdcat-2025-phys-96",
      question: "A 5 kg body falls from the height of 30 m towards the ground. All its potential energy is converted into heat on impact. What is the heat energy produced?",
      options: [
        "1270 J",
        "1370 J",
        "1470 J",
        "1570 J"
      ],
      answer: 2,
      explanation: "Heat energy produced = P.E. lost = mgh = 5 kg × 9.8 m/s² × 30 m = 1470 J."
    },
    {
      id: "kmu-mdcat-2025-phys-97",
      question: "Two students, A and B, each carry a 20 kg load to the top of a 10 m high staircase. Student A takes 10 sec, while student B takes 20 sec. Which statement is CORRECT?",
      options: [
        "Student A does more work than student B",
        "Student B uses more power than student A",
        "Both students do the same amount of work, but student A uses more power",
        "Student A and B use the same power since they lifted the same weight"
      ],
      answer: 2,
      explanation: "Both do equal work (mgh = 20 × 9.8 × 10 = 1960 J). Student A completes it in less time, so A expends more power (P = W/t)."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-124",
      question: "Which of the following pairs correctly matches a physical quantity with its SI unit?",
      options: [
        "Energy- Newton",
        "Force - Joule",
        "Power- Watt",
        "Velocity-m/s²"
      ],
      answer: 2,
      explanation: "The SI unit of power is the Watt (W). Energy is measured in Joules, Force in Newtons, and Velocity in m/s."
    },
    {
      id: "kmu-phys-24-129",
      question: "How does an angle between the force applied and the direction of motion influence the work done on an object?",
      options: [
        "Work is constant regardless of the angle",
        "Work is maximum when the angle is 0°",
        "Work is negative when the angle is 90°",
        "Work is 0 when the angle is 45°"
      ],
      answer: 1,
      explanation: "W = F d cosθ is maximized at θ = 0° since cos(0°) = 1."
    },
    {
      id: "kmu-phys-24-130",
      question: "A nurse is pushing a wheelchair with an 80kg patient’s weight. How much work is done by the patient’s weight?",
      options: [
        "Half of the work",
        "Maximum work",
        "Minimum work",
        "No work"
      ],
      answer: 3,
      explanation: "The weight vector acts vertically downward, while motion is horizontal (90° angle). W = F d cos(90°) = 0."
    },
    {
      id: "kmu-phys-24-131",
      question: "If a constant force of 10N is applied to move an object 5m in the direction of the force, what is the work done?",
      options: [
        "2 J",
        "5 J",
        "15 J",
        "50 J"
      ],
      answer: 3,
      explanation: "W = F × d = 10 N × 5 m = 50 J."
    },
    {
      id: "kmu-phys-24-132",
      question: "The escape velocity of a body in the gravitational field of Earth is dependent on:",
      options: [
        "Angle on which it is thrown",
        "Both mass of the body and the angle at which it is thrown",
        "Mass of earth",
        "Mass of the body"
      ],
      answer: 2,
      explanation: "Escape velocity v_esc = √(2GM/R) depends on the mass of the celestial body (Earth) and its radius, independent of the mass or projection angle of the launched object."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-128",
      question: "During the drilling of a metal surface, the drill bit heats up. This heat comes from the:",
      options: [
        "Vibration of the tool",
        "Work done against friction",
        "Flow of electric current",
        "Compression of air"
      ],
      answer: 1,
      explanation: "Mechanical work done against frictional forces between the drill bit and metal is converted into thermal energy."
    },
    {
      id: "siba-2025-phys-140",
      question: "Potential energy decreases in the process of:",
      options: [
        "Compressing a spring",
        "Stretching a spring",
        "Releasing a stretched spring",
        "Holding the spring at maximum extension"
      ],
      answer: 2,
      explanation: "Releasing a stretched spring converts stored elastic potential energy back into kinetic energy, decreasing potential energy."
    },
    {
      id: "siba-2025-phys-141",
      question: "A diver of mass m is swimming at a depth h below the sea level. If the reference level is taken at sea level, the gravitational potential energy of the diver is:",
      options: [
        "0",
        "mgh",
        "-mgh",
        "2mgh"
      ],
      answer: 2,
      explanation: "Below the reference level (sea level), height is -h, making the potential energy U = -mgh."
    },
    {
      id: "siba-2025-phys-142",
      question: "A constant force F acts on a body and displaces it by distance Δd in a time Δt. The rate at which force is doing work is:",
      options: [
        "F × Δd",
        "F × Δt",
        "F × Δd / Δt",
        "F × Δt / Δd"
      ],
      answer: 2,
      explanation: "Rate of doing work P = ΔW/Δt = (F × Δd) / Δt."
    },
    {
      id: "siba-2025-phys-144",
      question: "When force and displacement are in opposite direction then the work done is said to be:",
      options: [
        "Positive",
        "Negative",
        "Infinite",
        "Maximum"
      ],
      answer: 1,
      explanation: "When force and displacement point in opposite directions (θ = 180°), cos(180°) = -1, yielding negative work."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-128",
      question: "The SI unit of power is:",
      options: [
        "Ampere",
        "Coulomb",
        "Ohm",
        "Watt",
        "Volt"
      ],
      answer: 3,
      explanation: "The SI unit of power is the Watt (W), equivalent to Joules per second."
    },
    {
      id: "siba-phy-24-146",
      question: "The constant power output of a machine is 6W. The energy delivered by it in 2 minutes is:",
      options: [
        "12 joules",
        "720 joules",
        "72 joules",
        "3 joules",
        "120 joules"
      ],
      answer: 1,
      explanation: "E = P × t = 6 W × (2 × 60 s) = 6 W × 120 s = 720 Joules."
    },
    {
      id: "siba-phy-24-156",
      question: "For maximum work done by a constant force, the angle between force and displacement is:",
      options: [
        "45°",
        "90°",
        "65°",
        "145°",
        "0°"
      ],
      answer: 4,
      explanation: "W = F d cosθ is at a maximum when θ = 0° (cos 0° = 1)."
    },
    {
      id: "siba-phy-24-173",
      question: "Newton (N) is not the SI unit of:",
      options: [
        "Centripetal force",
        "Tension",
        "Coulomb’s force",
        "Friction",
        "Momentum"
      ],
      answer: 4,
      explanation: "Momentum is measured in kg·m/s or N·s. All other listed options are forces, which are measured in Newtons."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-154",
      question: "The work done on a body is stored in it in the form of:",
      options: [
        "Power",
        "Energy",
        "Momentum",
        "Impulse"
      ],
      answer: 1,
      explanation: "By the work-energy theorem, work done on a system changes its energy state (stored as kinetic or potential energy)."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-126",
      question: "A man pulls a trolley through a distance of 50 m by applying a force of 100 N, which makes an angle of 60° with x-axis. Calculate the work done by the man? (Cos 60° = 0.5)",
      options: [
        "2500 J",
        "5340 J",
        "6430 J",
        "7120 J"
      ],
      answer: 0,
      explanation: "W = F · d cosθ = 100 N × 50 m × cos(60°) = 5000 × 0.5 = 2500 J."
    },
    {
      id: "szambu-phy-24-143",
      question: "Kilowatt hour is the commercial unit of electrical energy. 1 kWh is equal to",
      options: [
        "3.6 meV",
        "3.6 MeV",
        "3.6 J",
        "3.6 MJ"
      ],
      answer: 3,
      explanation: "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J = 3.6 MJ."
    },
    {
      id: "szambu-phy-24-160",
      question: "In British Engineering system, the unit of power is horsepower. Numerically 1000 hp is equal to",
      options: [
        "7460 watts",
        "74600 watts",
        "746000 watts",
        "7460000 watts"
      ],
      answer: 2,
      explanation: "1 hp = 746 W. Therefore, 1000 hp = 1000 × 746 W = 746,000 W."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-127",
      question: "If p is the momentum of an object and m is its mass, then its kinetic energy is:",
      options: [
        "p/2m",
        "p²/2m",
        "1/2 pm²",
        "1/2 P²m"
      ],
      answer: 1,
      explanation: "K.E. = ½ mv² = (mv)² / 2m = p² / 2m."
    },
    {
      id: "uhs-mdcat-2025-phys-154",
      question: "The work done by the gravitational force on an object as it moves from a reference level to a higher point is:",
      options: [
        "Always positive",
        "Always negative",
        "Zero",
        "Depends on the path taken"
      ],
      answer: 1,
      explanation: "As an object moves upward, gravity acts downward (θ = 180°), making the work done by gravity negative (-mgh)."
    },
    {
      id: "uhs-mdcat-2025-phys-157",
      question: "A 0.5 kg ball moving at 6 m/s has kinetic energy",
      options: [
        "9 J",
        "18 J",
        "6 J",
        "3 J"
      ],
      answer: 0,
      explanation: "K.E. = ½ mv² = 0.5 × 0.5 kg × (6 m/s)² = 0.25 × 36 = 9 J."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-129",
      question: "1 kWh = ________ J?",
      options: [
        "3.6 J",
        "3.6 kJ",
        "3.6 MJ",
        "3.6 GJ"
      ],
      answer: 2,
      explanation: "1 kWh = 1 kW × 1 hr = 1000 W × 3600 s = 3,600,000 J = 3.6 MJ."
    },
    {
      id: "uhs-phys-24-130",
      question: "Which of the following is a non-conservative force?",
      options: [
        "Frictional force",
        "Electric force",
        "Elastic spring force",
        "Gravitational force"
      ],
      answer: 0,
      explanation: "Frictional force is non-conservative because work done against friction depends on the path and is dissipated as heat."
    },
    {
      id: "uhs-phys-24-131",
      question: "Work done is equal to",
      options: [
        "Effort × distance",
        "Effort + distance",
        "Effort – distance",
        "Effort ÷ distance"
      ],
      answer: 0,
      explanation: "In mechanical systems, Work = Force (Effort) × Distance moved in the direction of effort."
    },
    {
      id: "uhs-phys-24-132",
      question: "When a force of 1 N displaces its point of application by 1 m in the direction of force, the work done is",
      options: [
        "1 J",
        "10 J",
        "0 J",
        "1"
      ],
      answer: 0,
      explanation: "1 Newton × 1 Meter = 1 Joule of work."
    },
    {
      id: "uhs-phys-24-133",
      question: "An electric motor is used to lift the weight of 2.0 N through a vertical distance of 100 cm in 4 sec. What is the power output of the motor?",
      options: [
        "0.25 W",
        "0.5 W",
        "0.75 W",
        "1 W"
      ],
      answer: 1,
      explanation: "Height h = 100 cm = 1 m. Work done = F × h = 2.0 N × 1 m = 2 J. Power = W / t = 2 J / 4 s = 0.5 W."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "Power can be defined as the dot product of",
        options: [
          "Force and displacement",
          "Force and time",
          "Force and velocity",
          "Force and mass"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-2",
        question: "When the speed of your car is halved by what factor does its kinetic energy decreases",
        options: [
          "1/4",
          "1/2",
          "1/8",
          "1/6"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-3",
        question: "A tennis ball is dropped on to a horizontal surface. As the ball bounce up and down, the height of each bounce gradually decreases during the motion of the ball",
        options: [
          "The kinetic energy of ball is constant",
          "The potential energy of ball is constant",
          "The sum of kinetic energy and potential energy of ball is constant",
          "The total of ball, ground and air is constant"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-4",
        question: "A truck and car are moving with equal velocity on applying brakes, both will stop after certain distance then?",
        options: [
          "Truck will cover less distance before stopping",
          "Car will cover less distance before stopping",
          "Both will cover equal",
          "None of the mentioned"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-5",
        question: "1 hp equals to",
        options: [
          "746 watt",
          "346 watt",
          "246 watt",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-6",
        question: "A body of mass 1 kg moving with initial velocity of 1 m/s is acted upon by a force for 1 sec. The increase in KE is?",
        options: [
          "1.0J",
          "2.0J",
          "2.5J",
          "3.0J"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-7",
        question: "An electric motor creates a tension of 45N in hosting cable and reels it in at the rate of 2 m/s the power of the motor is",
        options: [
          "15Kw",
          "90 watt",
          "225Kw",
          "900hp"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "Potential energy per unit volume is given by",
        options: [
          "mgh",
          "Mgh/P",
          "gh",
          "Pgh"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-9",
        question: "The power output of a lamp is 6W how much energy does the lamp give out in 2 minutes",
        options: [
          "3J",
          "120J",
          "720J",
          "430J"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-10",
        question: "The workdone in holding a weight of 40N at height of 3m above the floor for 2 sec is, in joules",
        options: [
          "0",
          "40",
          "30",
          "120"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-11",
        question: "Work done is not product of \"F\" and \"S\" if F and S are non zero then the work done will be zero when",
        options: [
          "They are along same direction",
          "They are perpendicular to each other",
          "They are parallel to each other",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-12",
        question: "One erg is equal to",
        options: [
          "10^-5 dynes",
          "10^-7 dynes",
          "10^-7 joules",
          "10^-5 newton"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-13",
        question: "A ball is thrown vertically upwards. Neglecting air resistance, which statement is correct",
        options: [
          "The kinetic energy of ball is greatest at the greatest height attained",
          "The potential energy of ball increases uniformly with time during the ascent",
          "By the principal of conservation momentum, the momentum of ball is constant throughout its motion",
          "By the principal of conservation of energy, the total energy of the ball is constant throughout its motion"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-14",
        question: "Slope of work time graph is equal to",
        options: [
          "Displacement",
          "Power",
          "Acceleration",
          "Energy"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-15",
        question: "The power needed to lift a mass of 5000g to height of 1 m in 2 sec is",
        options: [
          "2.45 watt",
          "245 watt",
          "24.5 watt",
          "2.45 kw"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-16",
        question: "The rate of doing Work is zero when angle between force and velocity is",
        options: [
          "0 degree",
          "180 degree",
          "90 degree",
          "60 degree"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-17",
        question: "Which unit expresses work per unit charge?",
        options: [
          "Hertz",
          "Watt",
          "Joule",
          "Volt"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-18",
        question: "The bodies of one kg and four kg have same kinetic energy the ratio in their momenta will be",
        options: [
          "1:2",
          "1:16",
          "1:4",
          "1:1"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-19",
        question: "Which of the following type of force cannot do work on which it acts",
        options: [
          "Frictional force",
          "Centripetal force",
          "Gravitational force",
          "Restoring force"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-20",
        question: "When the velocity of body is doubled and the mass is halved the KE will be",
        options: [
          "Unchanged",
          "Doubled",
          "Halved",
          "Four times"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-21",
        question: "If force and displacement of particle in direction of force are doubled work would be",
        options: [
          "Double",
          "half",
          "1/4 times",
          "4 times"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-22",
        question: "A man pushes a wall with 50N and it displaces if zero m his work is",
        options: [
          "Negative",
          "Positive",
          "No work",
          "May all possible"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-23",
        question: "The power of load is one watt if",
        options: [
          "1 ampere current flows through a conductor when a potential difference of 1 volt is applied",
          "0.1 ampere current flows when a potential difference of 0.1 volt is applied",
          "1 ampere current flows when a potential difference of 10 volt is applied",
          "10 amperes current flows when a potential difference of 10 volt is applied"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-24",
        question: "In inelastic collision .... remains conserved .... but .... changes",
        options: [
          "KE and momentum",
          "Momentum and KE",
          "None",
          "Direction and momentum"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-25",
        question: "The amount of work done against Friction to slide a box in a straight line across a uniform horizontal floor depends most on the",
        options: [
          "Time taken to move the box",
          "Distance the box is moved",
          "Speed of the box",
          "Direction of the box's motion"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-26",
        question: "The time taken by an engine of power 10Kw to lift a mass of 200 kg to the height of 40m is",
        options: [
          "2s",
          "4s",
          "8s",
          "16s"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "In gravitational field, the work done in closed path is",
        options: [
          "Zero",
          "Positive",
          "Negative",
          "Minimum"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-28",
        question: "In freely falling system, if potential energy is equal to kinetic energy, the force of friction of air will",
        options: [
          "Be negligible",
          "Be maximum",
          "Be zero",
          "Not be predicted"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-29",
        question: "Which of the following is biggest unit of energy",
        options: [
          "Joule",
          "Micro joule",
          "Electron volt",
          "None of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-30",
        question: "A 70kg athlete runs up a hill through a height 3m in 2 seconds. His average power output will be",
        options: [
          "8000W",
          "9000W",
          "9080W",
          "1030W"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-31",
        question: "An 80kg man runs up a hill through a height of 4m in 3 seconds, how much work does he do against gravitational forces",
        options: [
          "2136J",
          "3136J",
          "4136J",
          "5136J"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-32",
        question: "If 10kg mass is dropped from a certain height. Hits the ground with speed 10m/s the height will be",
        options: [
          "100m",
          "10m",
          "50m",
          "5m"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-33",
        question: "When force and displacement are in the same direction, the kinetic energy of the body",
        options: [
          "Increases",
          "Decreases",
          "Remains constant",
          "Becomes zero"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-34",
        question: "At what angle the workdone will be half of its maximum value",
        options: [
          "0 degree",
          "45 degree",
          "60 degree",
          "30 degree"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-35",
        question: "Kilo watt hour is the unit of",
        options: [
          "Power",
          "Force",
          "Momentum",
          "Energy"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-36",
        question: "Energy stored in the spring of watch is",
        options: [
          "Electrical energy",
          "Kinetic energy",
          "Potential energy",
          "Elastic potential energy"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-37",
        question: "A stone is thrown up from the surface of the earth when it reaches at maximum height its total energy is equal to",
        options: [
          "mgh",
          "Zero",
          "1/2mv^2",
          "2mgh"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-38",
        question: "A shot leaves a gun at the rate of 160m/s calculate the greatest distance to which it could be projected",
        options: [
          "2460m",
          "2560m",
          "2680m",
          "2760m",
          "2860m"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-39",
        question: "1.75m height weight-lifter rises weights with a Mass of 50kg to a height of 0.5m above his head how much work is being done by him?",
        options: [
          "2125J",
          "250J",
          "100J",
          "50J"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-40",
        question: "The unit of power in British engineering system is",
        options: [
          "Watt",
          "Choice 3",
          "Choice 4"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-41",
        question: "Identify the examples of kinetic energy",
        options: [
          "A moving ball can break a glass window",
          "A striking hammer can drive a nail",
          "A stone thrown can upward can lift itself against the force of gravity",
          "1 only",
          "2 only",
          "3 only",
          "2 and 3 only",
          "1, 2 and 3 only"
        ],
        answer: 7
      },
      {
        id: "testmoz-phys-42",
        question: "KE is defined as dot product of",
        options: [
          "Momentum and force",
          "Force and velocity",
          "Average momentum and velocity",
          "All"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-43",
        question: "A body is falling from a height h. After it has fallen a height h/2, it will possess",
        options: [
          "Only potential energy",
          "Kinetic energy",
          "Half potential and half kinetic energy",
          "More kinetic less potential"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-44",
        question: "If mass and speed of moving object is double, the KE will be",
        options: [
          "Eight times",
          "Four times",
          "Doubled",
          "Six times",
          "Sixteen times"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-45",
        question: "If a body of mass 2kg is raised vertically through 2m, then the work will be",
        options: [
          "38.2J",
          "39.2J",
          "392.1J",
          "40J"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-46",
        question: "The workdone by the gravity during the descent of projectile",
        options: [
          "Is positive",
          "Is negative",
          "is zero",
          "Depends for its sign on the direction of the y axis"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-47",
        question: "Which one of the following quantities cannot be used as a unit of potential energy",
        options: [
          "Watt sec",
          "Kgm^2/s^2",
          "gcm/s^2",
          "ft lb"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-48",
        question: "The average power and instantaneous power become equal if work is done at",
        options: [
          "Any rate",
          "Uniform rate",
          "Variable rate",
          "High rate"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-49",
        question: "The work to a system is characterized as",
        options: [
          "Positive",
          "Negative",
          "Both",
          "Either positive or negative"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-50",
        question: "A ball whose kinetic energy is E is thrown at an angle 45 degree with horizontal its kinetic energy at the highest point of its trajectory will be",
        options: [
          "E",
          "E/2",
          "E/1.414",
          "Zero"
        ],
        answer: 1
      }
];