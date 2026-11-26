// Product photos shown in the Our Products gallery (Services page and home preview).
// Images live in public/images/products/.

export type Product = { file: string; width: number; height: number; alt: string };

export const products: Product[] = [
  { file: "hdpe-jerry-can", width: 191, height: 358, alt: "Blow moulded HDPE jerry can" },
  { file: "toy-jeep", width: 339, height: 242, alt: "Injection moulded toy jeep" },
  { file: "injection-mould-tool", width: 248, height: 353, alt: "Injection mould tool assembly" },
  { file: "moulded-cover-component", width: 253, height: 254, alt: "Moulded plastic cover component" },
  { file: "pet-blow-mould", width: 270, height: 439, alt: "PET bottle blow mould halves" },
  { file: "round-moulded-lid", width: 241, height: 196, alt: "Round injection moulded lid" },
  { file: "lubricant-bottle", width: 179, height: 329, alt: "Blow moulded lubricant oil bottle" },
  { file: "moulded-roller", width: 270, height: 480, alt: "Moulded plastic roller" },
  { file: "ring-handle", width: 308, height: 221, alt: "Injection moulded ring handle" },
  { file: "mould-cavity", width: 272, height: 480, alt: "Machined mould cavity" },
  { file: "wall-mount-bracket", width: 179, height: 183, alt: "Moulded wall mount bracket" },
  { file: "play-dough-tub-set", width: 366, height: 263, alt: "Moulded play dough tub set" },
  { file: "moulded-base", width: 235, height: 250, alt: "Injection moulded base component" },
  { file: "washing-machine-pulsator", width: 288, height: 356, alt: "Washing machine pulsator component" },
  { file: "toy-excavator", width: 407, height: 376, alt: "Injection moulded toy excavator" },
  { file: "cnc-machining-mould-plate", width: 512, height: 288, alt: "CNC machining of a mould plate" },
  { file: "moulded-fan-hub", width: 360, height: 538, alt: "Moulded fan hub component" },
  { file: "multi-cavity-cap-mould", width: 308, height: 410, alt: "Multi-cavity cap mould" },
  { file: "moulded-cap", width: 318, height: 288, alt: "Injection moulded cap" },
  { file: "cnc-mould-machining", width: 512, height: 355, alt: "CNC machining of a mould" },
];
