import { StaticImageData } from 'next/image';
import profilepic from '../public/assets/profile-pic.jpg';

export const user_details: { name: string; picture: StaticImageData; titles: string[] } = {
    name: 'Evan Holster',
    picture: profilepic,
    titles: [ "Software Engineer", "Web Developer", "Content Developer"
    ]
};

export const navbar_left: { name: string; slug: string }[] = [
    {
        name: 'About Me',
        slug: 'about',
    },
    {
        name: 'Experience',
        slug: 'experience',
    },
];

export const navbar_right: { name: string; slug: string }[] = [
    {
        name: 'Projects',
        slug: 'projects',
    },
    {
        name: 'Reach Out',
        slug: 'contact',
    },
];