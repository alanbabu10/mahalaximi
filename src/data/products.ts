// Product photos shown in the Our Products gallery (Services page and home preview).
// Images live in public/images/products/.

export type Product = { file: string; width: number; height: number; alt: string };

export const products: Product[] = [
  { file: "hdpe-jerry-can", width: 65, height: 118, alt: "Blow moulded HDPE jerry can" },
  { file: "toy-jeep", width: 144, height: 105, alt: "Injection moulded toy jeep" },
  { file: "injection-mould-tool", width: 100, height: 140, alt: "Injection mould tool assembly" },
  { file: "moulded-cover-component", width: 122, height: 121, alt: "Moulded plastic cover component" },
  { file: "pet-blow-mould", width: 177, height: 111, alt: "PET bottle blow mould halves" },
  { file: "round-moulded-lid", width: 134, height: 110, alt: "Round injection moulded lid" },
  { file: "lubricant-bottle", width: 76, height: 134, alt: "Blow moulded lubricant oil bottle" },
  { file: "moulded-roller", width: 78, height: 133, alt: "Moulded plastic roller" },
  { file: "ring-handle", width: 125, height: 92, alt: "Injection moulded ring handle" },
  { file: "mould-cavity", width: 143, height: 80, alt: "Machined mould cavity" },
  { file: "wall-mount-bracket", width: 90, height: 90, alt: "Moulded wall mount bracket" },
  { file: "detergent-bottles", width: 109, height: 100, alt: "Blow moulded detergent bottles" },
  { file: "play-dough-tub-set", width: 120, height: 88, alt: "Moulded play dough tub set" },
  { file: "moulded-base", width: 145, height: 126, alt: "Injection moulded base component" },
  { file: "washing-machine-pulsator", width: 154, height: 189, alt: "Washing machine pulsator component" },
  { file: "toy-excavator", width: 194, height: 181, alt: "Injection moulded toy excavator" },
  { file: "cnc-machining-mould-plate", width: 245, height: 131, alt: "CNC machining of a mould plate" },
  { file: "moulded-fan-hub", width: 155, height: 160, alt: "Moulded fan hub component" },
  { file: "multi-cavity-cap-mould", width: 149, height: 179, alt: "Multi-cavity cap mould" },
  { file: "moulded-cap", width: 124, height: 112, alt: "Injection moulded cap" },
  { file: "cnc-mould-machining", width: 183, height: 164, alt: "CNC machining of a mould" },
];
