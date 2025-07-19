import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithubSquare, FaTelegram } from 'react-icons/fa';

export const footMenu = [
    {
        id: 1,
        title: "Help",
        menu: [
            {
                id: 1,
                link: "FAQs",
                path: "/"
            },
            {
                id: 2,
                link: "Track Order",
                path: "/"
            },
            {
                id: 3,
                link: "Cancel Order",
                path: "/"
            },
            {
                id: 4,
                link: "Return Order",
                path: "/"
            },
            {
                id: 5,
                link: "Warranty Info",
                path: "/"
            },
        ]
    },
    {
        id: 2,
        title: "Policies",
        menu: [
            {
                id: 1,
                link: "Return Policy",
                path: "/"
            },
            {
                id: 2,
                link: "Security",
                path: "/"
            },
            {
                id: 3,
                link: "Sitemap",
                path: "/"
            },
            {
                id: 4,
                link: "Privacy Policy",
                path: "/"
            },
            {
                id: 5,
                link: "Terms & Conditions",
                path: "/"
            },
        ]
    },
    {
        id: 3,
        title: "About Us",
        menu: [
            {
                id: 1,
                link: "ZapZone",
                path: "/"
            },
            {
                id: 2,
                link: "Ahmedabad [India]",
                path: "/"
            },
            {
                id: 3,
                link: "+91 9521587624",
                path: "/"
            },
            {
                id: 4,
                link: "Vaishnavmontu3@gmail.com",
                path: "/"
            },
            {
                id: 5,
                link: "~ Thanks For Visit",
                path: "/"
            },
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <FaGithubSquare />,
        path: "https://github.com/monturaja",
    },
    {
        id: 2,
        icon: <FaTelegram />,
        path: "http://t.me/montu_raja",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        path: "https://www.instagram.com/_montu_raja_vaishnav__?igsh=MmN5bncxYnQwdWht",
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/montu-raja-vaishnav-aa409531a/",
    },
];
