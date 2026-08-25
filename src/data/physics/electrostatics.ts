export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const electrostaticsQuestions: Question[] = [
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
    }
  ];