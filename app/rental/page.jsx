'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import RoomModal from '../../components/RoomModal'  // Corrected import (capitalized component name)
import Carousel from '@/components/Carousel'
import Gallery from '@/components/Gallery'
import Modal from '@/components/Modal'
import { hostelData } from '@/data/data'

const Page = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [clippedText, setClippedText] = useState(""); 
    const [expanded, setExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
        console.log('Expanded:', expanded);
    }
    const [openImage, setOpenImage] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    
    

    const toggleOpen = (state) => () => setOpenImage(state);
    
    const updateIndex = ({ index: current }) => setIndex(current);

    const hostel = {
        name: 'Victory Towers',
        address: 'Ayeduase, Knust, Homestel',
        description: "About\n\
iQ Aldgate, E1 1NZ, ideally located at Skyline Plaza Commercial Rd, boasts an impressive array of student accommodation options. This popular property offers a range of ensuites, non-ensuites, and studios, ensuring that every student can find the perfect fit for their needs. Notably, iQ Aldgate London is conveniently situated at a commutable distance from top educational institutions like Hult International Business School and London Metropolitan University (Aldgate Campus), making it a highly sought-after location for students in the city.\n\
\n\
For those in pursuit of iQ Aldgate London student accommodation, this property is an excellent choice. Aside from being a well-known financial and cultural capital, London is a beacon of education with a student population teeming in the hundreds of thousands. Emerging from its humble beginnings as a Roman settlement in 43 AD, London has transformed into a global metropolis that pulses with historical significance and contemporary dynamism. The city's educational landscape is equally impressive, hosting world-class institutions like University College London (UCL) and King's College. Beyond academic pursuits, London offers students an unparalleled tapestry of experiences: from exploring free world-renowned museums to discovering eclectic neighborhoods that range from the hipster enclaves of Shoreditch to the regal surroundings of Kensington.\n\
\n\
Nestled in the heart of East London's dynamic Aldgate district, iQ Aldgate student accommodation London represents a contemporary living solution meticulously designed for the modern student's multifaceted lifestyle. This state-of-the-art residence transcends traditional housing by offering more than just a place to sleep – it's a holistic living environment that harmonises academic productivity with personal well-being. With a diverse range of room configurations, from compact studios to spacious ensuites, iQ Aldgate caters to varied preferences and budgetary constraints while maintaining high standards of comfort and design. The accommodation's strategic location provides students with immediate access to multiple universities, while its proximity to the City of London ensures exposure to a bustling professional ecosystem. The thoughtfully curated spaces, combined with the building's contemporary architectural design, create an environment that feels simultaneously professional and welcoming – a true home away from home for students navigating the exciting academic and cultural landscape of London.\n\
\n\
Features\n\
At iQ Aldgate London, students will find themselves in a vibrant and stylish accommodation that is designed to enhance the experience of living and studying in the heart of London. The available room types cater to a variety of preferences, featuring options like the Platinum Studio Premium, Gold Studio Deluxe, and Twin Room Plus among others, ensuring a comfortable and private living space for every student. Each room features a small double bed with underbed storage for added space efficiency, along with a study desk & chair to create a focused study environment. Storage needs are met with a spacious wardrobe, while the kitchenette is equipped with a hob, microwave, fridge, and sink for easy meal preparation. A dining area with tables & chairs adds a communal touch, perfect for shared meals or casual gatherings. Additionally, the private shower ensures comfort and convenience, making iQ Aldgate an excellent choice for modern student living.\n\
\n\
iQ Aldgate accommodation offers a fantastic range of common amenities designed to create an exciting and secure living environment as showcased in iQ Aldgate reviews. Students can enjoy entertainment options like the cinema room, karaoke room, and games room, perfect for socializing and unwinding. The spacious lounge is a great place to relax, while the arcade arena provides a fun space for friendly competition. For stunning views, the sky lounge offers an ideal spot to unwind. The London student accommodation is also committed to maintaining a clean and safe environment, with policies of no pets allowed and no smoking allowed. Safety is prioritised with 24/7 security, 24/7 staff presence, and CCTV to ensure peace of mind for all residents.\n\
\n\
Location and What's Hot?\n\
iQ Aldgate London is situated in a vibrant and bustling area, offering students a rich tapestry of experiences just steps from their accommodation. The prestigious Queen Mary University (Whitechapel) and Glasgow Caledonian University (London Campus) reside in this energetic city, drawing a diverse student population to the heart of London. Within a stroll, residents of Aldgate iQ student accommodation can discover an array of cafes such as Yi Cha Bubble Tea and the delightful Grounded providing perfect nooks for studying or socialising. For culinary enthusiasts, the property's proximity to an array of restaurants is a gastronomical delight. One can head to Dilpasand Restaurant, DanDan Restaurant, and Hotto Potto. The Dog and The Culpeper is ideal for those seeking a relaxed gastro-pub vibe.\n\
\n\
When the night beckons, students can find themselves at the heart of London's nightlife with clubs like the famous Ministry of Sound and the lively Cargo, both within easy reach. Grocery shopping is a breeze with Tian Tian Market and Tesco Express close by, ensuring that essentials are never far from reach. In times of need, The Royal London Hospital offers medical services and peace of mind, located conveniently near iQ Aldgate student accommodation. Cultural enrichment abounds with the iconic Whitechapel Gallery providing artistic inspiration, while the Tower of London and its historic grandeur and the buzzing Spitalfields Market are popular hangout spaces for students and tourists alike. Intellectual pursuits can be continued at the renowned British Library or the tranquil reading rooms of The Wellcome Collection. iQ Aldgate London student accommodation situated in the epicentre of London's cultural melting pot, not only offers students premium living in London but ensures that every aspect of student living is catered to, with a plethora of amenities, entertainment, and educational opportunities enveloping this remarkable locale.\n\
\n\
Commute\n\
The iQ Aldgate London student accommodation is excellently located for ease of commute in the bustling city of London. For bus travel, students will find Henriques Street (Stop P) and Henriques Street (Stop U), two of the nearest bus stops where students can hop on several routes that span across the city. For individuals who prefer rail, Aldgate East Underground Station and Aldgate Underground Station are conveniently located, offering access to the Hammersmith & City, District, Metropolitan, and Circle lines. Whether it's attending classes, exploring cultural hotspots, or enjoying the city's nightlife, Aldgate iQ student accommodation in London is a strong contender for students who value convenience and time.",
        rating: 4.86,
        toConsider: 'La tassa di soggiorno è di 2,50€ a persona a notte ed è dovuta alla partenza.',
        inOne: 4,
        reviews: 5,
        image: 'https://a0.muscache.com/im/pictures/miso/Hosting-43101167/original/62e62bf2-a1ad-4222-8a24-f6c41e6200e5.jpeg?im_w=720&im_format=avif',
        amenities: [
            { name: 'TV', icon: 'M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z' },
            { name: '24 hour Security', icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z' }
        ],
        rooms: [
            {
                type: '1 in a Room',
                price: 7500,
                availableRooms: 4,
                availableFrom: '1st September',
                image: 'https://a0.muscache.com/im/pictures/miso/Hosting-43101167/original/62e62bf2-a1ad-4222-8a24-f6c41e6200e5.jpeg?im_w=720&im_format=avif'
            },
            {
                type: '2 in a Room',
                price: 6500,
                availableRooms: 4,
                availableFrom: '1st September',
                image: 'https://a0.muscache.com/im/pictures/miso/Hosting-43101167/original/62e62bf2-a1ad-4222-8a24-f6c41e6200e5.jpeg?im_w=720&im_format=avif'
            },
            {
                type: '3 in a Room',
                price: 5500,
                availableRooms: 4,
                availableFrom: '1st September',
                image: 'https://a0.muscache.com/im/pictures/miso/Hosting-43101167/original/62e62bf2-a1ad-4222-8a24-f6c41e6200e5.jpeg?im_w=720&im_format=avif'
            },
            {
                type: '4 in a Room',
                price: 4500,
                availableRooms: 4,
                availableFrom: '1st September',
                image: 'https://a0.muscache.com/im/pictures/miso/Hosting-43101167/original/62e62bf2-a1ad-4222-8a24-f6c41e6200e5.jpeg?im_w=720&im_format=avif'
            }]
    };



    useEffect(() => {
        const words = hostelData.about.split(' ');
        if (words.length > 10) {
            setClippedText(words.slice(0, 80).join(' ') + '...');
        } else {
            setClippedText(hostelData.about);
        }
    }, [hostelData.about]); // Trigger effect when description changes

    return (
        <div className='bg-slate-100'>
            <div className='flex'>
            <div className='lg:w-2/3  px-4'>
            <div className='bg-white'>
                <Carousel updateIndex={updateIndex} toggleOpen={toggleOpen} openImage = {openImage} index= {index} className="rounded-lg"/>
                <div className='mx-4 flex gap-x-4 mt-4'>
                    <div className='flex ring-gray-300 ring-1 rounded-lg p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg> Camera
                    </div>
                    <div className='flex ring-gray-300 ring-1 rounded-lg p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg> Videos
</div>
                    <div className='flex ring-gray-300 ring-1 rounded-lg p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
</svg> Map View
</div>
                </div>
                <div className='w-full ml-4 mt-6'>
                <h1 className='font-bold text-3xl'>
                    {hostelData.name}
                </h1>
            </div>
            <span className='text-slate-600 ml-4'>{hostelData.adress}</span>
            <div className='mx-4 my-2'>{hostelData.adress}</div>

            <div className="flex border border-slate-300 rounded-lg mx-4 p-2 items-center justify-center space-x-4 m-4">
                <div className="w-1/5 text-center">{hostelData.rating}</div>
                <div className="border-r border-slate-300 h-8"></div>
                <div className="w-3/5 text-center">{hostelData.inOne} Room Types</div>
                <div className="border-r border-slate-300 h-8"></div>
                <div className="w-1/5 text-center">{hostelData.reviews} reviews</div>
            </div>
            <div>
                <h1 className='text-center text-2xl font-semibold my-4'>Description</h1>
            <div className='text-center m-4'>
            <p className='fr relative max-h-40 overflow-hidden' onClick={handleExpandClick}>
                {clippedText}
                {/* Gradient or Blur Effect */}
                <span className='absolute z-10 bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent'></span>
            </p>

        </div>
        <button className='m-4' onClick={handleExpandClick}><div className='flex'>See More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg></div>
</button>
           </div>
            
            <div>
            {/* Room Details */}
            {hostelData.roomTypes.map((room, index) => (
                <div key={index} className=''>
                <div className='w-full rounded-lg bg-white flex p-4 flex-col' >
                        
                    
                <div className='flex'>
                    <Image
                        src={room?.images[0]}
                        alt="A description of the image"
                        width={250}
                        height={200}
                        className='rounded-lg'
                    />
                    <div>
                    <div className='ml-4 space-y-4'>
                        <span className='flex font-bold'><h1>{room?.type}</h1></span>
                        <span className='flex  p-1'> 
                            <div className='bg-gradient-to-r from-green-500 via-green-500 to-transparent p-0.5 rounded-lg'><div className='text-green-500 rounded-md bg-white h-full w-full '> <h1 className='p-1 bg-gradient-to-r from-green-50 to-transparent'>Available rooms</h1> </div></div> <p className='ml-4'>{room?.availableRooms}</p>
                        </span>
                        <span className='flex'><p>Available from:</p><p className='ml-2'>{room?.availableFrom}</p></span>
                    <button type="button" onClick={handleOpen} className='text-red-400 flex'>Open Modal <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
                    </div>
                    <RoomModal openstatus={open} handleclose={handleClose} /> {/* Corrected component name */}
                </div>
                </div>

            </div>
            </div>
            ))}
            </div>
            <div className='mt-5'>
            <span className='font-bold'>Room Amenities</span>
            <div className='w-full border border-b-slate-500 my-4 mx-auto'></div>
            <span>Bills Included</span>
            <div>
                <div>Ensuite</div>
                <div>Private Room</div>
                <div>Private Bathroom</div>
                <div>Shared Kitchen</div>
            </div>
            <div className='w-full border border-b-slate-500 my-4 mx-auto'></div>
            <span className='font-bold'>Common Amenities</span>
            <div>
                {hostelData.amenities.map((amenity, index) => (
                    <div key={index} className='flex m-2 text-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d={amenity.icon} />
                        </svg>  
                        {amenity}
                    </div>
                ))}
            </div>
            <div className='w-full border border-b-slate-500 my-4 mx-auto'></div>
            <span className='font-bold'>Safety and Security</span>
            <div>
                <div>Ensuite</div>
                <div>Private Room</div>
                <div>Private Bathroom</div>
                <div>Shared Kitchen</div>
            </div>
        </div>
        </div>

        

            </div>
            <div className='hidden lg:flex w-1/3 fixed right-0 top-0 '>
            <div className='flex flex-col items-center w-full'>
            <div className='w-full my-3 rounded-lg p-5 bg-white '>
                <span className='font-extrabold mx-auto'>Edinburgh College Residence, Edinburgh</span>
                <div className='w-full m-3 font-semibold border-fuchsia-600 border-2 rounded-md p-2 text-fuchsia-600 text-center mx-auto'>View Rooms</div>
                <div className='w-full m-3 font-semibold rounded-md p-2 bg-fuchsia-600 text-center text-white mx-auto'>Enquire Now</div>
                <div className='bg-blue-400 text-white text-sm p-1 rounded-lg'>1206 students shortlisted this property in last 30 days</div>
            </div>
            <div className='w-full my-3 rounded-lg p-5 bg-white'>
                <div>Instant Booking</div>
                <div>Lowest Price Guaranteed</div>
                <div>Verified Properties</div>
                <div>24x7 Personal Assistance</div>
                <div>5.8K+ Reviews</div>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="p-2 bg-blue-500 text-white">
        Open Modal
      </button>
            </div>
            </div>
            </div>
            
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
        <div >
        <span>Classic Ensuite</span>
        <div className='w-full border border-b-slate-500 my-4 mx-auto'></div>
            <div className='flex gap-x-4 mb-4'><Image
                        src={"https://assets.amberstudent.com/inventories/207117/e51874be.jpg?w=720&fit=fill&q=80&auto=format&trim=auto"}
                        alt="A description of the image"
                        width={250}
                        height={200}
                        className='rounded-lg'
                    /><Image
                        src={"https://assets.amberstudent.com/inventories/207117/e51874be.jpg?w=720&fit=fill&q=80&auto=format&trim=auto"}
                        alt="A description of the image"
                        width={250}
                        height={200}
                        className='rounded-lg'
                    />
                    <Image
                        src={"https://assets.amberstudent.com/inventories/207117/e51874be.jpg?w=720&fit=fill&q=80&auto=format&trim=auto"}
                        alt="A description of the image"
                        width={250}
                        height={200}
                        className='rounded-lg'
                    />
                    </div>
                    <div className='text-green-500 my-4'>Available From:13 Sep, 2025</div>
                    <div className='mt-5'>Classic En-Suite rooms are a great options if you’re looking to relax in the London borough or Greenwich, This room style comes equipped with your very own single bed to cosy up in after a busy day of working, as well as featuring under bed storage so you can store away all of your items, Unwind and take a long shower in your private en-suite bathroom or use your modern desk for the perfect study area or gaming setup. If you’re after some social time with others, head into the shared kitchen and living room area where you’ll find a TV to watch your favourite shows with your flatmates.
All the flat have 6 Rooms, So 6 Students will be sharing a kitchen</div>
            </div>
        <div className='w-full border border-b-slate-500 my-4 mx-auto'></div>
        <div className='mt-4'>
            <span className='font-bold'>Room Details</span>
            <div>
                <div>Ensuite</div>
                <div>Private Room</div>
                <div>Private Bathroom</div>
                <div>Shared Kitchen</div>
            </div>
        </div>
        <div className='mt-5'>
            <span className='font-bold'>Room Amenities</span>
            <div>
                <div>Ensuite</div>
                <div>Private Room</div>
                <div>Private Bathroom</div>
                <div>Shared Kitchen</div>
            </div>
        </div>
    
        <div>
            <span className='font-bold'>Choose Your Tenancy</span>
            <div>duration</div>

        </div>
        <div className='w-full border border-b-slate-300 my-4 mx-auto'></div>
            <span>Looking for different dates?
            Contact Us</span>
      </Modal>
        </div>
    );
}

export default Page;