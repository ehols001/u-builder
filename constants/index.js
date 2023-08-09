import profilepic from '../public/assets/profile-pic.jpg';

const userInfo =
{
    name: "Evan Holster",
    picture: profilepic,
    titles: [
        {
            title: "Software Engineer | "
        },
        {
            title: "Web Developer | "
        },
        {
            title: "Content Developer "
        },
    ]
};

export const navbarLinks = [
    {
        id: "about",
        title: "About Me"
    },
    {
        id: "experience",
        title: "Work Experience"
    },
    {
        id: "projects",
        title: "My Projects"
    },
    {
        id: "contact",
        title: "Contact Me"
    },
];

export { userInfo };