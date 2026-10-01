import { FaceShape, FaceShapeAnalysis, Hairstyle, SamplePortrait } from '../types';

export const FACE_SHAPES_DATA: Record<FaceShape, FaceShapeAnalysis> = {
  Oval: {
    id: 'Oval',
    name: 'Oval — Harmonious Balance',
    subtitle: 'Slightly narrower jaw than temples with gently curved contours',
    description: 'The oval face shape features well-proportioned symmetry. Face length is approximately 1.5 times the width, and the jawline curves smoothly without sharp angles.',
    proportions: {
      faceLengthToWidth: '1.5 : 1',
      widestPoint: 'Cheekbones',
      jawlineDescription: 'Softly rounded & tapered',
      foreheadRatio: 'Slightly wider than jawline',
      goldenRatioScore: 98
    },
    aestheticGoal: 'Preserve natural architectural harmony; maintain open forehead and cheekbone visibility while accentuating facial structure.',
    recommendedLengths: ['Mid-length with layers', 'Short crops & fades', 'Long cascades', 'Textured bobs'],
    recommendedTextures: ['Soft waves', 'Point-cut layers', 'Polished taper', 'Natural flow'],
    stylesToAvoid: [
      { title: 'Heavy Flat Horizontal Bangs', reason: 'Can visually truncate the balanced upper third of your face.' },
      { title: 'Excessive Top Volume Without Texture', reason: 'Unnecessarily elongates an already ideal vertical ratio.' }
    ],
    idealStylingTip: 'Almost all cuts flatter an oval face. Focus on accentuating your best feature (eyes, cheekbones, or jawline) through precision face-framing.'
  },
  Square: {
    id: 'Square',
    name: 'Square — Strong Angular Jawline',
    subtitle: 'Equal forehead, cheekbone and jaw width with defined corners',
    description: 'Characterized by a striking, angular jawline and broad temples. The width of your forehead, cheekbones, and jaw are nearly identical, giving an athletic, sculpted impression.',
    proportions: {
      faceLengthToWidth: '1.1 : 1',
      widestPoint: 'Equal at temples & jaw',
      jawlineDescription: 'Sharp, 90-degree square angle',
      foreheadRatio: 'Wide, straight hairline',
      goldenRatioScore: 94
    },
    aestheticGoal: 'Soften the angular corners of the jawline, add height and movement at the crown, and incorporate diagonal or rounded texturing.',
    recommendedLengths: ['Medium layered cuts', 'Textured quiffs with crown lift', 'Curtain bangs past jaw', 'Soft perimeter bobs'],
    recommendedTextures: ['Messy texturizing', 'Loose beach waves', 'Feathered layers', 'Side-swept fringe'],
    stylesToAvoid: [
      { title: 'Chin-Length Sharp Blunt Bobs', reason: 'Hits exactly at the jawline, drawing intense attention to square angles.' },
      { title: 'Flat Center Partings Without Volume', reason: 'Draws harsh vertical lines emphasizing boxy proportions.' }
    ],
    idealStylingTip: 'Keep volume at the crown and soften the perimeter with rounded interior layers or side-parted sweeping movement.'
  },
  Round: {
    id: 'Round',
    name: 'Round — Soft Curves & Fullness',
    subtitle: 'Equal length and width with curved jaw and youthful cheek curves',
    description: 'Round faces have soft perimeters with rounded jawlines and fuller cheek contours. The widest distance is across the cheekbones, with roughly equal length and width.',
    proportions: {
      faceLengthToWidth: '1.0 : 1',
      widestPoint: 'Mid cheekbones',
      jawlineDescription: 'Curved, soft rounded chin',
      foreheadRatio: 'Smooth curved hairline',
      goldenRatioScore: 91
    },
    aestheticGoal: 'Visually elongate the face vertically, create slimming diagonal lines, and add structural sharpness around the crown and temples.',
    recommendedLengths: ['Long layers below collarbones', 'Short high fades with volume', 'Asymmetrical lobs', 'Textured high crops'],
    recommendedTextures: ['Volumizing crown lift', 'Piecey pomade texture', 'Diagonal curtain layers'],
    stylesToAvoid: [
      { title: 'Rounded Bubble Bobs with Wide Sides', reason: 'Adds horizontal bulk, making cheeks look wider.' },
      { title: 'Chin-Length Inward Curved Cuts', reason: 'Accentuates the circular perimeter of the jawline.' }
    ],
    idealStylingTip: 'Always request crown volume and keep the sides relatively slim or tapered to create the optical illusion of vertical length.'
  },
  Diamond: {
    id: 'Diamond',
    name: 'Diamond — High Cheekbones & Narrow Taper',
    subtitle: 'Widest at high sculpted cheekbones with narrow forehead & chin',
    description: 'One of the rarest, high-fashion face shapes. High, striking cheekbones are the dramatic focal point, flanked by a tapered narrow forehead and a pointed chin.',
    proportions: {
      faceLengthToWidth: '1.4 : 1',
      widestPoint: 'High prominent cheekbones',
      jawlineDescription: 'Narrow, tapered pointed chin',
      foreheadRatio: 'Narrow tapered hairline',
      goldenRatioScore: 96
    },
    aestheticGoal: 'Add width at the forehead and jawline to balance the prominence of cheekbones; soften the sharpness of the pointed chin.',
    recommendedLengths: ['Chin-length textured bobs', 'Medium layered shags', 'Side-parted quiffs with temple width', 'Airy curtain bangs'],
    recommendedTextures: ['Soft flicks at chin level', 'Wispy bangs', 'Dimensional texturizing'],
    stylesToAvoid: [
      { title: 'Slick Backs with Bare Temples', reason: 'Exposes narrow temples, exaggerating cheekbone width unnaturally.' },
      { title: 'Heavy Center-Parted Straight Curtains', reason: 'Covers the cheekbones which are your most coveted feature.' }
    ],
    idealStylingTip: 'Embrace cuts that flare outward near the chin (like a butterfly lob or modern shag) to provide a flattering counterweight.'
  },
  Heart: {
    id: 'Heart',
    name: 'Heart — Delicate Taper & Broad Forehead',
    subtitle: 'Widest at forehead and brow, tapering gracefully to a pointed chin',
    description: 'Often featuring a romantic widow’s peak or broad brow line, this shape tapers progressively down to a delicate, sharp chin.',
    proportions: {
      faceLengthToWidth: '1.3 : 1',
      widestPoint: 'Upper forehead & temples',
      jawlineDescription: 'Delicate, tapered pointed chin',
      foreheadRatio: 'Noticeably broad and prominent',
      goldenRatioScore: 95
    },
    aestheticGoal: 'Balance the broader upper third by adding width, fullness, and bouncy texture around the lower jawline and collarbone.',
    recommendedLengths: ['Collarbone lobs with volume', 'Side-swept textured bangs', 'Mid-length wavy layers', 'Classic side-part with beard'],
    recommendedTextures: ['Outward flips at chin', 'Loose waves starting mid-shaft', 'Soft fringe'],
    stylesToAvoid: [
      { title: 'Sky-High Pompadours Without Width', reason: 'Draws all visual weight to the top, making the chin look excessively narrow.' },
      { title: 'Short Blunt Micro-Bangs', reason: 'Highlights forehead width and exaggerates lower face taper.' }
    ],
    idealStylingTip: 'Keep hair soft and bouncy around the chin and neck to draw the eye downward and create symmetrical harmony.'
  },
  Oblong: {
    id: 'Oblong',
    name: 'Oblong — Regal Vertical Dimension',
    subtitle: 'Face length significantly exceeds width with long straight cheeks',
    description: 'Also known as the rectangular face shape. Characterized by elongated vertical proportions, high forehead, and a straight, extended cheek profile.',
    proportions: {
      faceLengthToWidth: '1.7 : 1',
      widestPoint: 'Uniform across temples & jaw',
      jawlineDescription: 'Squared or long rounded chin',
      foreheadRatio: 'Tall, high vertical forehead',
      goldenRatioScore: 92
    },
    aestheticGoal: 'Visually shorten the vertical face length while building horizontal width and body through the sides and cheek areas.',
    recommendedLengths: ['Mid-length with wide waves', 'Full textured bangs', 'Horizontal bobs', 'Low-profile side tapers'],
    recommendedTextures: ['Full-bodied horizontal waves', 'Wispy horizontal fringe', 'Soft side volume'],
    stylesToAvoid: [
      { title: 'Extreme High Top Fades & Sky-Quiffs', reason: 'Adds 2+ inches of vertical height, over-elongating facial balance.' },
      { title: 'Long Flat Center-Parted Strands', reason: 'Creates dragging vertical lines that exaggerate face length.' }
    ],
    idealStylingTip: 'Fringes and bangs are your secret weapon. A soft eyebrow-skimming fringe cuts vertical length in half while side volume adds width.'
  }
};

export const SAMPLE_PORTRAITS: SamplePortrait[] = [
  {
    id: 'sample-oval',
    name: 'Sophia Chen',
    gender: 'Female',
    faceShape: 'Oval',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    landmarkDetails: {
      foreheadWidth: '138 mm',
      cheekboneWidth: '142 mm',
      jawlineAngle: '118°',
      faceLength: '202 mm'
    }
  },
  {
    id: 'sample-square',
    name: 'Julian Vance',
    gender: 'Male',
    faceShape: 'Square',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
    landmarkDetails: {
      foreheadWidth: '152 mm',
      cheekboneWidth: '154 mm',
      jawlineAngle: '94°',
      faceLength: '172 mm'
    }
  },
  {
    id: 'sample-diamond',
    name: 'Amara Sterling',
    gender: 'Female',
    faceShape: 'Diamond',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
    landmarkDetails: {
      foreheadWidth: '126 mm',
      cheekboneWidth: '158 mm',
      jawlineAngle: '128°',
      faceLength: '196 mm'
    }
  },
  {
    id: 'sample-round',
    name: 'Liam Gallagher',
    gender: 'Male',
    faceShape: 'Round',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
    landmarkDetails: {
      foreheadWidth: '144 mm',
      cheekboneWidth: '152 mm',
      jawlineAngle: '132°',
      faceLength: '156 mm'
    }
  },
  {
    id: 'sample-heart',
    name: 'Elena Roux',
    gender: 'Female',
    faceShape: 'Heart',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
    landmarkDetails: {
      foreheadWidth: '156 mm',
      cheekboneWidth: '140 mm',
      jawlineAngle: '136°',
      faceLength: '184 mm'
    }
  },
  {
    id: 'sample-oblong',
    name: 'Marcus Kaine',
    gender: 'Male',
    faceShape: 'Oblong',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80',
    landmarkDetails: {
      foreheadWidth: '136 mm',
      cheekboneWidth: '138 mm',
      jawlineAngle: '102°',
      faceLength: '228 mm'
    }
  }
];

export const HAIRSTYLES_CATALOG: Hairstyle[] = [
  {
    id: 'style-1',
    name: 'Textured Crop with Mid Skin Fade',
    categoryName: 'Short Textured Barber Cut',
    gender: 'Men',
    primaryTexture: 'Straight',
    length: 'Short',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    profileImage: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
    maintenance: 'Medium',
    stylingTime: '3-5 mins',
    recommendedProducts: ['Matte Styling Clay', 'Texture Powder'],
    howToStyleSteps: [
      'Towel-dry hair until slightly damp.',
      'Dust a sprinkle of texture powder evenly across crown.',
      'Work a pea-sized dab of matte clay through fingertips and pinch into piecey sections.'
    ],
    salonServicePriceINR: 1499,
    shapeCompatibility: {
      Oval: {
        score: 96,
        label: 'Best Match',
        whyItWorks: [
          'Enhances balanced facial symmetry without pulling proportions out of alignment.',
          'Crisp mid fade exposes clean jaw contours cleanly.'
        ]
      },
      Round: {
        score: 98,
        label: 'Best Match',
        whyItWorks: [
          'High textural spikes at the crown create needed vertical elongation.',
          'Tight mid-fade sides immediately slim the rounded cheek area.'
        ]
      },
      Square: {
        score: 91,
        label: 'Ideal Match',
        whyItWorks: [
          'Angular point-cutting softens the square forehead boundary.',
          'Tight neckline emphasizes masculine bone structure.'
        ]
      },
      Diamond: {
        score: 84,
        label: 'Great Match',
        whyItWorks: [
          'Keeps the crown textured, but requires low drop fade to avoid narrowing temples.'
        ]
      },
      Heart: {
        score: 79,
        label: 'Moderate Match',
        whyItWorks: [
          'Blunt fringe can work if cut with soft feathered texture rather than heavy lines.'
        ]
      },
      Oblong: {
        score: 68,
        label: 'Not Recommended',
        whyItWorks: [
          'Cropped fringe is good, but sky-high top texture can over-elongate long faces.'
        ]
      }
    }
  },
  {
    id: 'style-2',
    name: 'Layered Curtain Bangs with Soft Waves',
    categoryName: 'Artisan Dimensional Cut',
    gender: 'Women',
    primaryTexture: 'Wavy',
    length: 'Long',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    profileImage: 'https://images.unsplash.com/photo-1584297091622-af8e5fd85f54?auto=format&fit=crop&w=800&q=80',
    maintenance: 'Medium',
    stylingTime: '10-15 mins',
    recommendedProducts: ['Volumizing Sea Salt Mist', 'Thermal Shield Serum', 'Medium Hold Gloss Spray'],
    howToStyleSteps: [
      'Apply heat protectant to damp hair and blow dry curtain bangs away from face using round ceramic brush.',
      'Use a 1.25" curling wand to create loose S-waves through mid-lengths.',
      'Finish with light texturizing sea salt mist for touchable bounce.'
    ],
    salonServicePriceINR: 2899,
    shapeCompatibility: {
      Square: {
        score: 98,
        label: 'Best Match',
        whyItWorks: [
          'Curved curtain bangs arc around sharp temple corners, softening strong jawlines.',
          'Cascading layers break up boxy facial perimeter with organic movement.'
        ]
      },
      Diamond: {
        score: 97,
        label: 'Best Match',
        whyItWorks: [
          'Curtain fringe opens up narrow forehead while layers fill out the space around the chin.',
          'Accentuates high cheekbones while softening their extreme width.'
        ]
      },
      Oval: {
        score: 95,
        label: 'Best Match',
        whyItWorks: [
          'Naturally frames facial thirds in golden-ratio harmony.',
          'Adds glamorous red-carpet volume.'
        ]
      },
      Oblong: {
        score: 94,
        label: 'Ideal Match',
        whyItWorks: [
          'Mid-length horizontal wave volume expands side width to balance vertical length.',
          'Curtain bangs visually shorten tall foreheads.'
        ]
      },
      Round: {
        score: 87,
        label: 'Great Match',
        whyItWorks: [
          'Long layers below collarbones drag eye downward for slimming effect.'
        ]
      },
      Heart: {
        score: 92,
        label: 'Ideal Match',
        whyItWorks: [
          'Fullness around the neck fills in the narrow taper of the chin.'
        ]
      }
    }
  },
  {
    id: 'style-3',
    name: 'Modern Quiff with Tapered Perimeter',
    categoryName: 'Executive Gentleman Sculpt',
    gender: 'Men',
    primaryTexture: 'Straight',
    length: 'Short',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    maintenance: 'Low',
    stylingTime: '4-6 mins',
    recommendedProducts: ['Water-Soluble Pomade', 'Vented Styling Brush'],
    howToStyleSteps: [
      'Direct blow dryer upward and backward at roots to build foundation lift.',
      'Warm small amount of pomade in palms and comb through crown.',
      'Slightly part to side for tailored finish.'
    ],
    salonServicePriceINR: 1699,
    shapeCompatibility: {
      Round: {
        score: 99,
        label: 'Best Match',
        whyItWorks: [
          'The 2-inch vertical brush-up drastically counters circular facial softness.',
          'Tapered sides prevent horizontal expansion at cheek level.'
        ]
      },
      Square: {
        score: 95,
        label: 'Best Match',
        whyItWorks: [
          'Classic executive masculinity that celebrates strong jawlines with balanced crown height.'
        ]
      },
      Oval: {
        score: 93,
        label: 'Ideal Match',
        whyItWorks: [
          'Flawlessly exposes clear brow and balanced facial thirds.'
        ]
      },
      Heart: {
        score: 82,
        label: 'Great Match',
        whyItWorks: [
          'Keep quiff height moderate to avoid over-accentuating wide forehead.'
        ]
      },
      Diamond: {
        score: 86,
        label: 'Great Match',
        whyItWorks: [
          'Works nicely when paired with low scissor taper to keep width at temples.'
        ]
      },
      Oblong: {
        score: 64,
        label: 'Not Recommended',
        whyItWorks: [
          'Vertical brush-up exaggerates elongated face length excessively.'
        ]
      }
    }
  },
  {
    id: 'style-4',
    name: 'Chic Parisian Textured French Bob',
    categoryName: 'Haute Parisian Short Cut',
    gender: 'Women',
    primaryTexture: 'Wavy',
    length: 'Short',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    profileImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    maintenance: 'Medium',
    stylingTime: '8-10 mins',
    recommendedProducts: ['Air-Dry Botanical Balm', 'Micro-Fine Sea Salt Spray'],
    howToStyleSteps: [
      'Towel-press hair and apply lightweight curl defining cream.',
      'Twist random 1-inch sections and diffuse on low heat for French undone texture.',
      'Mist ends with dry texture spray for effortless Parisian separation.'
    ],
    salonServicePriceINR: 2499,
    shapeCompatibility: {
      Oval: {
        score: 97,
        label: 'Best Match',
        whyItWorks: [
          'Hits precisely at the lip line, framing delicate jaw contours perfectly.'
        ]
      },
      Heart: {
        score: 98,
        label: 'Best Match',
        whyItWorks: [
          'The jawline bluntness adds weight exactly where heart shapes are narrowest.',
          'Soft brow-skimming fringe minimizes forehead breadth.'
        ]
      },
      Diamond: {
        score: 93,
        label: 'Ideal Match',
        whyItWorks: [
          'Fullness around the mouth and chin softens the pointed taper.'
        ]
      },
      Oblong: {
        score: 96,
        label: 'Best Match',
        whyItWorks: [
          'Horizontal jaw perimeter breaks up vertical length dramatically.',
          'Wispy fringe cuts forehead height.'
        ]
      },
      Square: {
        score: 72,
        label: 'Moderate Match',
        whyItWorks: [
          'Only recommended if cut with heavily razored, curved perimeter rather than blunt line.'
        ]
      },
      Round: {
        score: 68,
        label: 'Not Recommended',
        whyItWorks: [
          'Chin-length horizontal cuts add circular weight to round cheeks.'
        ]
      }
    }
  },
  {
    id: 'style-5',
    name: 'High Definition Spiral Curl Shag',
    categoryName: 'Organic Curl Architecture',
    gender: 'Gender-Neutral',
    primaryTexture: 'Curly',
    length: 'Medium',
    image: 'https://images.unsplash.com/photo-1522337094346-297fa4d4eb81?auto=format&fit=crop&w=800&q=80',
    profileImage: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    maintenance: 'Low',
    stylingTime: '12-15 mins',
    recommendedProducts: ['Hydrating Flaxseed Gel', 'Botanical Curl Glaze', 'Diffuser Nozzle'],
    howToStyleSteps: [
      'Apply curl cream to soaking wet hair using praying-hands technique.',
      'Scrunch gently upward toward scalp to stimulate ringlet bounce.',
      'Diffuse upside down for maximum dimensional crown volume.'
    ],
    salonServicePriceINR: 3200,
    shapeCompatibility: {
      Square: {
        score: 97,
        label: 'Best Match',
        whyItWorks: [
          'Organic, chaotic spiral curls diffuse rigid angular facial lines.',
          'Shag layers create circular softness around the jaw.'
        ]
      },
      Oblong: {
        score: 95,
        label: 'Best Match',
        whyItWorks: [
          'Expansive lateral curl width provides necessary horizontal counterweight.',
          'Curly fringe conceals high forehead.'
        ]
      },
      Diamond: {
        score: 94,
        label: 'Ideal Match',
        whyItWorks: [
          'Fills in temples and chin with buoyant curls while softening cheekbones.'
        ]
      },
      Oval: {
        score: 92,
        label: 'Ideal Match',
        whyItWorks: [
          'Lively organic texture brings effortless rock-and-roll charisma.'
        ]
      },
      Heart: {
        score: 90,
        label: 'Ideal Match',
        whyItWorks: [
          'Lower curl mass balances pointed chin nicely.'
        ]
      },
      Round: {
        score: 75,
        label: 'Moderate Match',
        whyItWorks: [
          'Requires vertical crown layering to prevent too much spherical width.'
        ]
      }
    }
  },
  {
    id: 'style-6',
    name: 'Classic Executive Side Part & Scissor Taper',
    categoryName: 'Timeless Tailored Barbering',
    gender: 'Men',
    primaryTexture: 'Straight',
    length: 'Short',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    maintenance: 'Low',
    stylingTime: '4 mins',
    recommendedProducts: ['Low-Shine Cream Pomade', 'Fine-Tooth Dressing Comb'],
    howToStyleSteps: [
      'Locate natural parting line aligned with pupil or eyebrow arch.',
      'Comb sides cleanly downward with low-shine cream.',
      'Lift front lock slightly for subtle gentleman arch.'
    ],
    salonServicePriceINR: 1599,
    shapeCompatibility: {
      Oval: {
        score: 98,
        label: 'Best Match',
        whyItWorks: [
          'Showcases symmetrical cheekbones and balanced forehead naturally.'
        ]
      },
      Square: {
        score: 96,
        label: 'Best Match',
        whyItWorks: [
          'Clean architectural parting balances a chisel-carved jawline with authority.'
        ]
      },
      Round: {
        score: 92,
        label: 'Ideal Match',
        whyItWorks: [
          'Diagonal part break introduces asymmetry and structure to rounded cheeks.'
        ]
      },
      Heart: {
        score: 86,
        label: 'Great Match',
        whyItWorks: [
          'Pairs exceptionally well with clean stubble or tailored beard.'
        ]
      },
      Diamond: {
        score: 89,
        label: 'Great Match',
        whyItWorks: [
          'Scissor taper keeps subtle softness at temples.'
        ]
      },
      Oblong: {
        score: 85,
        label: 'Great Match',
        whyItWorks: [
          'Low profile front avoids adding unneeded vertical height.'
        ]
      }
    }
  },
  {
    id: 'style-7',
    name: 'Feathered Butterfly Cut with Curtain Layers',
    categoryName: 'Bespoke Volumizing Experience',
    gender: 'Women',
    primaryTexture: 'Straight',
    length: 'Long',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    profileImage: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80',
    maintenance: 'Medium',
    stylingTime: '12-15 mins',
    recommendedProducts: ['Root Lift Mousse', 'Ceramic Round Brush', 'Dry Finishing Spray'],
    howToStyleSteps: [
      'Apply volumizing mousse to crown and roots.',
      'Blow dry with 2-inch ceramic round brush directing sections backward and away.',
      'Pin in loose rollers for 10 minutes to set red-carpet butterfly bounce.'
    ],
    salonServicePriceINR: 3499,
    shapeCompatibility: {
      Diamond: {
        score: 99,
        label: 'Best Match',
        whyItWorks: [
          'Feathery butterfly wings flick exactly outward to balance narrow chin.',
          'Frames cheekbones without masking their coveted sculpt.'
        ]
      },
      Square: {
        score: 97,
        label: 'Best Match',
        whyItWorks: [
          'Soft feathery cascade completely diffuses square jaw rigidity.'
        ]
      },
      Heart: {
        score: 96,
        label: 'Best Match',
        whyItWorks: [
          'Lower layered body fills the chin area symmetrically.'
        ]
      },
      Oval: {
        score: 95,
        label: 'Best Match',
        whyItWorks: [
          'Luxurious airy movement that enhances balanced proportions.'
        ]
      },
      Round: {
        score: 91,
        label: 'Ideal Match',
        whyItWorks: [
          'Vertical layers elongate neck line.'
        ]
      },
      Oblong: {
        score: 88,
        label: 'Great Match',
        whyItWorks: [
          'Horizontal bounce provides flattering lateral breadth.'
        ]
      }
    }
  },
  {
    id: 'style-8',
    name: 'Modern Shag / 70s Wolf Cut',
    categoryName: 'Editorial Rebel Texture',
    gender: 'Gender-Neutral',
    primaryTexture: 'Wavy',
    length: 'Medium',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    profileImage: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    maintenance: 'Low',
    stylingTime: '5-7 mins',
    recommendedProducts: ['Matte Texture Paste', 'Dry Shampoo Mist'],
    howToStyleSteps: [
      'Apply texture paste to dry hair, twisting choppy layer ends.',
      'Shake crown with fingers for rebellious rock-and-roll separation.'
    ],
    salonServicePriceINR: 2699,
    shapeCompatibility: {
      Square: {
        score: 99,
        label: 'Best Match',
        whyItWorks: [
          'Razored choppy layers counteract angular jaw lines with supreme coolness.',
          'Wispy fringe breaks rigid forehead corners.'
        ]
      },
      Oval: {
        score: 96,
        label: 'Best Match',
        whyItWorks: [
          'Effortlessly cool editorial shape that frames facial thirds.'
        ]
      },
      Diamond: {
        score: 95,
        label: 'Best Match',
        whyItWorks: [
          'Fills out narrow temples and pointed chin with piecey fringe.'
        ]
      },
      Oblong: {
        score: 94,
        label: 'Ideal Match',
        whyItWorks: [
          'Eyebrow fringe truncates face length; side layers widen cheeks.'
        ]
      },
      Heart: {
        score: 90,
        label: 'Ideal Match',
        whyItWorks: [
          'Choppy ends at shoulder level balance forehead width.'
        ]
      },
      Round: {
        score: 82,
        label: 'Great Match',
        whyItWorks: [
          'Requires heavy crown texturing to keep height dominant.'
        ]
      }
    }
  }
];
