export const hostelData = {
    hostelName: "Victory Towers",
    city: "Ayeduase",
    adress: "P. A. Sarpong Street, Ayeduase",
    distanceFromCasleyHayford: "5 minutes",
    rating: 4.86,
    reviews: 5,
    inOne:4,
    images:["https://a0.muscache.com/im/pictures/miso/Hosting-43101167/original/62e62bf2-a1ad-4222-8a24-f6c41e6200e5.jpeg?im_w=720&im_format=avif"],
    distanceFromOthers: [{'Main Library':'10 Minutes'},{'Administration':'10 Minutes'},{'KSB':'10 Minutes'},{'College of Science':'10 Minutes'}],
    amenities: [
        "3/4 Size Double Bed",
        "Wardrobe",
        "Desk And Chair",
        "Ensuite Bathroom",
        "Pin Board",
        "Study Space"
      ],
    about: `
    Edinburgh College Residence, located at 348 W Granton Rd near the waterfront, offers cozy ensuite rooms and studios ideal for students who value privacy. The University of Edinburgh is 3.6 miles away, and the Open University is 2.8 miles away. With nearby shops and excellent public transport, this student accommodation keeps life simple and convenient.
    
    The city of Edinburgh is a vibrant hub for over 100,000 students, including 40,000 international students. It has a safety index of 65 and a 74% employment rate, making part-time work accessible. Edinburgh offers rich culture, from castles and festivals to scenic parks. The average student living cost is between £1,000–£1,400/month.
    
    Room options include Classic En-suite rooms with a 3/4 double bed, wardrobe, desk, and private bathroom, and Studio Plus rooms with added space and amenities. Accessible 2-bed apartments are also available, all fully furnished with a smart TV and fitted kitchen.
    
    Amenities include on-site laundry, secure bike storage, vending machines, communal lounges, and 24/7 CCTV. All bills (WiFi, heating, water, electricity, gas) are included in the rent.
    
    Located near Edinburgh College Granton Campus and the University of Edinburgh Holyrood Campus, residents enjoy quick access to campus and local hotspots. Cafes like Morrisons Café and Yes Café, eateries like Apprentice Restaurant and Darin's Takeaway, and pubs like The Anchor Inn are all nearby. Nightlife options include Lulu Bar and Club Tropicana.
    
    For shopping, Morrisons and Tesco Express are around the corner. Healthcare is available at Western General Hospital, and sports fans can catch events at Tynecastle Park and Murrayfield Stadium. Cultural attractions like the Scottish National Gallery and Royal Botanic Garden are close by, as are Inverleith Park and the Edinburgh Playhouse.
    
    Commuting is easy with nearby bus stops (Granton Mains East, Edinburgh College) and tram stops (Newhaven, West End). Haymarket Travel Terminal provides access beyond the city. Distances to Edinburgh College are just 1 minute by bus, cab, or walking.
    `,
    roomTypes: [{type: "Classic En-suite",
        availableFrom: "23 Aug, 2025",
        images:["https://assets.amberstudent.com/inventories/257570/cb042430.jpg?w=1094.4&h=792&mode=fill&fill=blur&bg=000&q=90&auto=format&trim=auto","https://assets.amberstudent.com/inventories/257570/dd7c05c8.jpg?w=817.2&h=554.4&mode=fill&fill=blur&bg=000&q=90&auto=format&trim=auto","https://assets.amberstudent.com/inventories/257570/aa7278aa.jpg?w=1094.4&h=792&mode=fill&fill=blur&bg=000&q=90&auto=format&trim=auto","https://assets.amberstudent.com/inventories/257570/e1196d0e.jpg?w=1094.4&h=792&mode=fill&fill=blur&bg=000&q=90&auto=format&trim=auto","https://assets.amberstudent.com/inventories/257570/7e161f3a.jpg?fit=fill&auto=format&trim=auto&text=amber&text_position=bottomright&text_padding=20&text_color=%23ffffffb3&text_font_size=24"],
        description: `
      This ensuite room offers a comfortable and convenient living space with all the amenities you need. The room features a 3/4 size double bed, perfect for a comfortable night's sleep. A double wardrobe is provided for ample clothing storage, and a pin board is included for personal organization and decoration. The room also boasts shelves, perfect for displaying personal items or storing books.
      
      The room also features a study space with a desk and chair, providing a dedicated area for work or studying. The private en-suite shower is an added convenience, allowing for easy and quick access to personal hygiene without having to leave the room. This ensuite room has all the necessities for a comfortable and productive stay.
        `,
        details: {
          ensuite: true,
          privateRoom: true,
          privateBathroom: true,
          sharedKitchen: true,
          size: "13 Sqm"
        },
        amenities: [
          "3/4 Size Double Bed",
          "Wardrobe",
          "Desk And Chair",
          "Ensuite Bathroom",
          "Pin Board",
          "Study Space"
        ],
        tenancy: {
          durationWeeks: 43,
          moveInDate: "23 Aug, 2025",
          pricePerWeek: "£204"
        }},{
            type: "2 Bed Accessible Apartment",
            availableFrom: "23 Aug, 2025",
        images:["https://assets.amberstudent.com/inventories/257570/cb042430.jpg?w=1094.4&h=792&mode=fill&fill=blur&bg=000&q=90&auto=format&trim=auto","https://assets.amberstudent.com/inventories/257570/dd7c05c8.jpg?w=817.2&h=554.4&mode=fill&fill=blur&bg=000&q=90&auto=format&trim=auto","https://assets.amberstudent.com/inventories/257570/aa7278aa.jpg?w=1094.4&h=792&mode=fill&fill=blur&bg=000&q=90&auto=format&trim=auto","https://assets.amberstudent.com/inventories/257570/e1196d0e.jpg?w=1094.4&h=792&mode=fill&fill=blur&bg=000&q=90&auto=format&trim=auto","https://assets.amberstudent.com/inventories/257570/7e161f3a.jpg?fit=fill&auto=format&trim=auto&text=amber&text_position=bottomright&text_padding=20&text_color=%23ffffffb3&text_font_size=24"],
            description: `
          The 2 Bed Accessible Apartment provides a private and comfortable living space designed with accessibility in mind. It includes a small double bed, a desk and chair for studying, and a wardrobe for storage. The ensuite bathroom adds convenience and privacy, while a shared kitchen supports a social living experience. The room is tailored to meet accessibility needs while ensuring a productive student lifestyle.
            `,
            details: {
              ensuite: true,
              privateRoom: true,
              privateBathroom: true,
              sharedKitchen: true
            },
            amenities: [
              "Small Double Bed",
              "Desk & Chair",
              "Wardrobe"
            ],
            tenancy: {
              durationWeeks: 43,
              moveInDate: "23 Aug, 2025",
              pricePerWeek: "£219"
            }
          }],
}