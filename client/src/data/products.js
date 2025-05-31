export const products = [
  {
    id: 1,
    name: "Chanel N°5",
    brand: "CHANEL",
    description: "A legendary fragrance, N°5 has become an iconic scent that embodies timeless luxury and sophistication. This floral-aldehyde perfume features notes of rose, jasmine, citrus, and bourbon vanilla.",
    longDescription: "Created in 1921 by Ernest Beaux for Coco Chanel, N°5 was revolutionary in its time and continues to be an emblem of luxury perfumery. The perfume's name originated from the fifth sample presented to Coco Chanel, which became the chosen formula. This complex blend creates an abstract fragrance that doesn't mimic nature but instead creates its own floral identity.",
    price: 135.00,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000",
      "https://images.unsplash.com/photo-1615093826418-b6d65c361441?q=80&w=1000"
    ],
    sizes: [
      { size: '30ml', price: 95.00 },
      { size: '50ml', price: 135.00 },
      { size: '100ml', price: 185.00 }
    ],
    rating: 4.8,
    reviews: [
      { id: 1, user: "Sarah M.", rating: 5, comment: "Absolutely love this fragrance! It's timeless and elegant.", date: "2024-02-15" },
      { id: 2, user: "James P.", rating: 4, comment: "Great scent, lasts all day. A bit pricey though.", date: "2024-02-10" }
    ],
    notes: {
      top: ["Aldehydes", "Bergamot", "Lemon"],
      heart: ["Jasmine", "Rose", "Lily of the Valley"],
      base: ["Vanilla", "Sandalwood", "Patchouli"]
    }
  },
  {
    id: 2,
    name: "J'adore",
    brand: "DIOR",
    description: "A modern, glamorous fragrance that has become a legend of haute perfumery. A floral bouquet with ylang-ylang, Damascus rose, and jasmine notes.",
    longDescription: "The iconic J'adore eau de parfum is an alluring combination of floral notes. Created by Calice Becker in 1999, this fragrance is a true modern classic that celebrates the divine femininity.",
    price: 128.00,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000",
      "https://images.unsplash.com/photo-1615093826418-b6d65c361441?q=80&w=1000",
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?q=80&w=1000"
    ],
    sizes: [
      { size: '30ml', price: 88.00 },
      { size: '50ml', price: 128.00 },
      { size: '100ml', price: 178.00 }
    ],
    rating: 4.7,
    reviews: [
      { id: 1, user: "Emma L.", rating: 5, comment: "My signature scent for years. Always get compliments.", date: "2024-02-18" },
      { id: 2, user: "Sophie R.", rating: 4, comment: "Beautiful floral fragrance, perfect for special occasions.", date: "2024-02-12" }
    ],
    notes: {
      top: ["Pear", "Melon", "Magnolia"],
      heart: ["Rose", "Jasmine", "Ylang-Ylang"],
      base: ["Musk", "Vanilla", "Blackberry"]
    }
  },
  {
    id: 3,
    name: "Black Orchid",
    brand: "TOM FORD",
    description: "A luxurious and sensual fragrance with a rich, dark heart. This oriental chypre is a blend of black truffle, ylang-ylang, and black orchid.",
    longDescription: "Tom Ford's first fragrance under his own brand is a rich blend of black truffle and ylang-ylang with a heart of black orchid and spice. The scent is both modern and timeless, with a sophisticated and unique character.",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000",
      "https://images.unsplash.com/photo-1615093826418-b6d65c361441?q=80&w=1000",
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?q=80&w=1000",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000"
    ],
    sizes: [
      { size: '30ml', price: 110.00 },
      { size: '50ml', price: 150.00 },
      { size: '100ml', price: 205.00 }
    ],
    rating: 4.9,
    reviews: [
      { id: 1, user: "Michael B.", rating: 5, comment: "Sophisticated and unique. A true masterpiece.", date: "2024-02-20" },
      { id: 2, user: "Rachel K.", rating: 5, comment: "Dark, mysterious, and absolutely captivating.", date: "2024-02-16" }
    ],
    notes: {
      top: ["Black Truffle", "Ylang-Ylang", "Blackcurrant"],
      heart: ["Black Orchid", "Spice", "Lotus Wood"],
      base: ["Patchouli", "Incense", "Vanilla"]
    }
  },
 
  {
    id: 5,
    name: "Light Blue",
    brand: "DOLCE & GABBANA",
    description: "A refreshing citrus fragrance that captures Mediterranean summer. Features notes of Sicilian citron, Granny Smith apple, and cedar wood.",
    longDescription: "Light Blue captures the sensual Mediterranean lifestyle. Launched in 2001, this refreshing scent combines citrus notes with crisp apple and bellflower to create the perfect summer fragrance.",
    price: 98.00,
    image: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?q=80&w=1000",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000"
    ],
    sizes: [
      { size: '25ml', price: 68.00 },
      { size: '50ml', price: 98.00 },
      { size: '100ml', price: 128.00 }
    ],
    rating: 4.5,
    reviews: [
      { id: 1, user: "David R.", rating: 4, comment: "Perfect summer scent, very fresh and clean.", date: "2024-02-17" },
      { id: 2, user: "Maria C.", rating: 5, comment: "My go-to fragrance for hot days.", date: "2024-02-13" }
    ],
    notes: {
      top: ["Sicilian Citron", "Apple", "Bellflower"],
      heart: ["Bamboo", "Jasmine", "White Rose"],
      base: ["Cedar Wood", "Amber", "Musk"]
    }
  },
  {
    id: 6,
    name: "Good Girl",
    brand: "CAROLINA HERRERA",
    description: "A sophisticated fragrance that celebrates the duality of modern femininity. Features tuberose, jasmine sambac, tonka bean, and cocoa.",
    longDescription: "Good Girl embodies the elegant and sensual sides of modern femininity. The innovative dual-faceted fragrance combines beautiful jasmine and tuberose with mysterious tonka bean and cocoa.",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000"
    ],
    sizes: [
      { size: '30ml', price: 80.00 },
      { size: '50ml', price: 120.00 },
      { size: '80ml', price: 160.00 }
    ],
    rating: 4.7,
    reviews: [
      { id: 1, user: "Victoria S.", rating: 5, comment: "Unique bottle design and amazing scent!", date: "2024-02-21" },
      { id: 2, user: "Isabella F.", rating: 4, comment: "Sweet and sexy. Perfect for evenings.", date: "2024-02-11" }
    ],
    notes: {
      top: ["Almond", "Coffee"],
      heart: ["Tuberose", "Jasmine Sambac"],
      base: ["Tonka Bean", "Cocoa", "Vanilla"]
    }
  },
  {
    id: 7,
    name: "Santal 33",
    brand: "LE LABO",
    description: "Imagine sitting in solitude on the rugged, wide plains of the American West, firelight on your face, indigo-blue night skies above. There is nothing around save for the soft, desert wind. You. Are. Free.",
    longDescription: "From this defining vision was born SANTAL 33: a perfume that touches the vast and wild universality of this dream... that intoxicates... It combines a mix of cardamom and notes of iris and violet, which crackle in the formula. Added to this smoking wood alloy (Australian sandalwood, cedarwood) are some spicy, leathery, musky notes, giving this perfume its signature and addictive comforting scent.",
    price: 310.00,
    image: "https://lelabo.ips.photos/lelabo-java/images/skus/100PS33100__PRODUCT_01--IMG_1200--SANTAL33-1891576354.jpg",
    images: [
      "https://lelabo.ips.photos/lelabo-java/images/skus/100PS33100__PRODUCT_01--IMG_1200--SANTAL33-1891576354.jpg"
    ],
    sizes: [
      { size: '50ml', price: 220.00 },
      { size: '100ml', price: 310.00 }
    ],
    rating: 4.9,
    reviews: [
      { id: 1, user: "Alex M.", rating: 5, comment: "The perfect unisex fragrance. Worth every penny.", date: "2024-02-20" }
    ],
    notes: {
      top: ["Violet Accord", "Cardamom"],
      heart: ["Iris", "Ambrox"],
      base: ["Cedarwood", "Leather", "Sandalwood"]
    }
  },
  {
    id: 8,
    name: "Black Opium",
    brand: "YVES SAINT LAURENT",
    description: "Black Opium Eau de Parfum is the seductively intoxicating women's fragrance. The opening notes of adrenaline-rich coffee and the sweet sensuality of vanilla recline into the softness of white flowers creating a long-lasting perfume.",
    longDescription: "This seductive women's perfume is inspired by the edgy and daring woman. Emboldened by the strong scent of coffee, the sensuous warm floral vanilla perfume captivates the senses with a sweet vanilla base and a burst of floral at the heart of the fragrance.",
    price: 139.00,
    image: "https://www.yslbeautyus.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dwa9ed1b09/Fragrance%20Audit/252YSL/3365440787971_alt2.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=85",
    images: [
      "https://www.yslbeautyus.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dwa9ed1b09/Fragrance%20Audit/252YSL/3365440787971_alt2.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=85"
    ],
    sizes: [
      { size: '50ml', price: 108.00 },
      { size: '90ml', price: 139.00 }
    ],
    rating: 4.8,
    reviews: [
      { id: 1, user: "Sofia K.", rating: 5, comment: "Perfect for night outs. The coffee note is amazing!", date: "2024-02-18" }
    ],
    notes: {
      top: ["Pear", "Pink Pepper", "Orange Blossom"],
      heart: ["Coffee", "Jasmine", "Bitter Almond", "Licorice"],
      base: ["Vanilla", "Patchouli", "Cedar", "Cashmere Wood"]
    }
  },
  {
    id: 9,
    name: "Ombré Leather",
    brand: "TOM FORD",
    description: "The Ombré Leather fragrance merges floral leather and spices, conjuring the still air, open spaces and layered landscapes of the American Southwest.",
    longDescription: "Dust on wind, skin on skin, the Ombré Leather fragrance evokes the desert heart of the West. The sensuality of rich black leather is texturized with patchouli and vetiver, while floral tones of jasmine sambac conjure wild desert beauty – and layers of amber and moss mimic the heat of rock and sand.",
    price: 150.00,
    image: "https://www.sephora.com/productimages/product/p433663-av-01-zoom.jpg?imwidth=1224",
    images: [
      "https://www.sephora.com/productimages/product/p433663-av-01-zoom.jpg?imwidth=1224"
    ],
    sizes: [
      { size: '50ml', price: 150.00 },
      { size: '100ml', price: 195.00 }
    ],
    rating: 4.7,
    reviews: [
      { id: 1, user: "Marcus R.", rating: 5, comment: "Rich leather scent. Very masculine and long-lasting.", date: "2024-02-15" }
    ],
    notes: {
      top: ["Cardamom"],
      heart: ["Leather", "Jasmine Sambac"],
      base: ["Amber", "Moss", "Patchouli"]
    }
  },
  {
    id: 10,
    name: "Love, Don't Be Shy",
    brand: "KILIAN PARIS",
    description: "This fragrance implores you at the opening with tender orange blossom absolute. Juicy honeysuckle and plush rose are softly caressed by the sweetness of luscious marshmallow sugar accord.",
    longDescription: "The bottles of Kilian's Narcotics family are adorned with a distinctive white lacquer and their bottle has been meticulously engraved on each side with the representation of the Achilles shield. Like Kilian Hennessy says, 'In perfumery, it is as much about seduction as it is about protection.'",
    price: 265.00,
    image: "https://www.sephora.com/productimages/sku/s2320133-av-05-zoom.jpg?imwidth=1224",
    images: [
      "https://www.sephora.com/productimages/sku/s2320133-av-05-zoom.jpg?imwidth=1224"
    ],
    sizes: [
      { size: '50ml', price: 265.00 }
    ],
    rating: 4.9,
    reviews: [
      { id: 1, user: "Emily W.", rating: 5, comment: "The most beautiful sweet fragrance ever created.", date: "2024-02-19" }
    ],
    notes: {
      top: ["Neroli", "Bergamot", "Pink Pepper", "Coriander"],
      heart: ["Orange Blossom", "Jasmine", "Honeysuckle", "Rose", "Iris"],
      base: ["Sugar", "Vanilla", "Caramel", "Musk", "Civet", "Labdanum"]
    }
  },
  {
    id: 11,
    name: "Mon Paris",
    brand: "YVES SAINT LAURENT",
    description: "Mon Paris Eau de Parfum is a sweet floral perfume for women. Sweet notes of red berries are softened by datura flower and anchored by the woody scent of white musk blended beautifully together with patchouli.",
    longDescription: "Inspired by Paris, this sensuous, romantic perfume reflects the intense passion found in the city of love. An unforgettable whirlwind journey to Paris, the feminine and floral perfume embodies desire and seduces the senses.",
    price: 108.00,
    image: "https://www.sephora.com/productimages/product/p410181-av-03-zoom.jpg?imwidth=1224",
    images: [
      "https://www.sephora.com/productimages/product/p410181-av-03-zoom.jpg?imwidth=1224"
    ],
    sizes: [
      { size: '50ml', price: 108.00 },
      { size: '90ml', price: 138.00 }
    ],
    rating: 4.7,
    reviews: [
      { id: 1, user: "Claire D.", rating: 5, comment: "Such a romantic and feminine scent!", date: "2024-02-17" }
    ],
    notes: {
      top: ["Strawberry", "Raspberry", "Pear", "Orange", "Bergamot"],
      heart: ["Peony", "Jasmine Sambac", "Datura", "Orange Blossom"],
      base: ["Patchouli", "White Musk", "Vanilla", "Cedar"]
    }
  },
  {
    id: 12,
    name: "Eros",
    brand: "VERSACE",
    description: "The primal power of woman is captured in this radiant, sensual essence. Attraction, desire, and passion intertwine in an alchemical mix of tempting, bright, and feminine notes.",
    longDescription: "A refined accord of lemon and jasmine is exalted by sensual and smooth woods for a fragrance of strength, individuality, and seduction. The bottle is crafted within the mythological codes of the Versace DNA. The gold Medusa and the Greek key design are engraved on the edge.",
    price: 130.00,
    image: "https://www.sephora.com/productimages/product/p395212-av-2-zoom.jpg?imwidth=1224",
    images: [
      "https://www.sephora.com/productimages/product/p395212-av-2-zoom.jpg?imwidth=1224"
    ],
    sizes: [
      { size: '50ml', price: 96.00 },
      { size: '100ml', price: 130.00 }
    ],
    rating: 4.6,
    reviews: [
      { id: 1, user: "Diana M.", rating: 5, comment: "Powerful and seductive. Perfect for special occasions.", date: "2024-02-16" }
    ],
    notes: {
      top: ["Sicilian Lemon", "Pomegranate", "Bergamot"],
      heart: ["Lemon Blossom", "Jasmine Sambac", "Peony"],
      base: ["Musk", "Ambroxan", "Sandalwood"]
    }
  },
  {
    id: 13,
    name: "Neroli Portofino",
    brand: "TOM FORD",
    description: "Vibrant. Sparkling. Transportive. This scent perfectly captures the cool breezes, sparkling clear water and lush foliage of the Italian Rivera.",
    longDescription: "His reinvention of a classic eau de cologne features crisp citrus oils, surprising floral notes and amber undertones to leave a splashy yet substantive impression.",
    price: 285.00,
    image: "https://www.sephora.com/productimages/product/p378133-av-05-zoom.jpg?imwidth=1224",
    images: [
      "https://www.sephora.com/productimages/product/p378133-av-05-zoom.jpg?imwidth=1224"
    ],
    sizes: [
      { size: '50ml', price: 285.00 },
      { size: '100ml', price: 385.00 }
    ],
    rating: 4.8,
    reviews: [
      { id: 1, user: "Thomas L.", rating: 5, comment: "The perfect summer fragrance. Fresh and sophisticated.", date: "2024-02-14" }
    ],
    notes: {
      top: ["Bergamot", "Mandarin Orange", "Lemon", "Lavender", "Rosemary"],
      heart: ["African Orange Flower", "Neroli", "Jasmine"],
      base: ["Amber", "Ambrette", "Angelica"]
    }
  }
]; 