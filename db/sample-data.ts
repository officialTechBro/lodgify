import {hashSync} from 'bcrypt-ts-edge'
 
const sampleData = {
  users: [
    {
      name: 'Taiwo',
      email: 'admin@example.com',
      password: hashSync('123456', 10),
      role: 'admin'
    },
    {
      name: 'Mariam',
      email: 'user@example.com',
      password: hashSync('123456', 10),
      role: 'user'
    },
  ],
    properties: [
  {
    name: "Cozy Mountain Retreat",
    slug: "Cozy-Mountain-Retreat",
    tagline: "A perfect escape in the mountains",
    price: 12000,
    category: "Cottage",
    description: "This cozy retreat offers a stunning view of the mountains with all modern amenities.",
    country: "USA",
    bedrooms: 2,
    beds: 2,
    guests: 2,
    baths: 1,
    numReviews: 8,
    amenities: "Wi-Fi,TV, Washer, Dryer",
    images: [
      "/images/sample-products/cabin-1.jpg",
      "/images/sample-products/cabin-2.jpg",
      "/images/sample-products/cabin-3.jpg",
    ],
    rating: 7,
    isFeatured: true
  },
  {
    name: "Urban Studio Apartment",
    slug: "Urban-Studio-Apartment",
    tagline: "Modern living in the heart of the city",
    price: 75000,
    category: "Apartment",
    description: "A stylish and well-equipped studio in the heart of the city's vibrant district.",
    country: "Canada",
    bedrooms: 1,
    beds: 1,
    guests: 2,
    baths: 1,
    numReviews: 10,
    amenities: "Wi-Fi,TV, Washer, Dryer",
    images: [
      "/images/sample-products/caravan-1.jpg",
      "/images/sample-products/caravan-2.jpg",
      "/images/sample-products/caravan-3.jpg",
    ],
    rating: 2,
    isFeatured: false
  },
  {
    name: "Seaside Villa",
    slug: "Seaside-Villa",
    tagline: "Breathtaking views by the ocean",
    price: 30000,
    category: "Villa",
    description: "Relax in a spacious villa with private access to the beach and incredible sunset views.",
    country: "Italy",
    bedrooms: 3,
    beds: 4,
    guests: 2,
    baths: 2,
    numReviews: 4,
    amenities: "Wi-Fi,TV, Washer, Dryer",
    images: [
      "/images/sample-products/tent-1.jpg",
      "/images/sample-products/tent-2.jpg",
      "/images/sample-products/tent-3.jpg",
    ],
    rating: 7,
    isFeatured: true
  },
  {
    name: "Charming-Country-Cottage",
    slug: "Charming Country Cottage",
    tagline: "Experience serenity in the countryside",
    price: 15000,
    category: "Cottage",
    description: "A charming and rustic cottage surrounded by greenery, perfect for a peaceful getaway.",
    country: "Australia",
    bedrooms: 2,
    beds: 3,
    guests: 2,
    baths: 4,
    numReviews: 1,
    amenities: "Wi-Fi,TV, Washer, Dryer",
    images: [
      "/images/sample-products/cabin-4.jpg",
      "/images/sample-products/cabin-5.jpg",
      "/images/sample-products/tent-5.jpg",
    ],
    rating: 5,
    isFeatured: false
  },
  {
    name: "Luxury Penthouse Suite",
    slug: "Luxury-Penthouse-Suite",
    tagline: "Indulge in luxury above the skyline",
    price: 50000,
    category: "Penthouse",
    description: "Experience unparalleled luxury in this penthouse with sweeping city views.",
    country: "Japan",
    bedrooms: 4,
    beds: 6,
    guests: 2,
    baths: 3,
    numReviews: 5,
    amenities: "Wi-Fi,TV, Washer, Dryer",
    images: [
      "/images/sample-products/caravan-4.jpg",
      "/images/sample-products/caravan-5.jpg",
      "/images/sample-products/tent-4.jpg",
    ],
    rating: 9,
    isFeatured: true
  }
]
}

export default sampleData

