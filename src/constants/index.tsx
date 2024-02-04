export const COLORS = [
  "#E57373",
  "#9575CD",
  "#4FC3F7",
  "#81C784",
  "#FFF176",
  "#FF8A65",
  "#F06292",
  "#7986CB",
];


export const FAQList: FAQListProps = {
  section1: [
    {
      question: "How can this web application help individuals dealing with depression?",
      answer: "Our web application provides a safe space for users experiencing emotional distress, offering resources, connecting them with empathetic individuals, and facilitating support to navigate through emotional challenges."
    },
    {
      question: "What kind of resources are available on the platform to assist with depression?",
      answer: "The platform offers a range of resources, including articles, coping mechanisms, self-help guides, and expert advice, tailored to help individuals understand and manage depression."
    },
    {
      question: "How does the web application connect users with empathetic individuals?",
      answer: "Through our community features, users can engage in discussions, share experiences, and connect with empathetic individuals who understand their struggles. Peer support and understanding play a crucial role in fostering a sense of community."
    },
    {
      question: "Can users remain anonymous while using the platform?",
      answer: "Yes, users have the option to remain anonymous if they choose, providing a secure and confidential environment for them to share their thoughts and feelings without fear of judgment."
    },
    {
      question: "What measures are in place to ensure the safety and well-being of users on the platform?",
      answer: "The platform employs robust moderation and reporting systems to maintain a positive and safe environment. Moderators monitor interactions, and users can report any inappropriate behavior or content."
    },
  ],
  section2: [
    {
      question: "How can the platform encourage open communication about mental health issues?",
      answer: "We promote open communication through forums, discussion threads, and user-generated content where individuals can share their experiences and insights. Breaking the stigma surrounding mental health is a key focus of the platform."
    },
    {
      question: "Are there trained professionals available on the platform for more serious mental health concerns?",
      answer: "While the platform provides peer support, we also emphasize the importance of seeking professional help. We offer information on mental health professionals and resources to guide users towards appropriate assistance."
    },
    {
      question: "Can users find local support groups through the web application?",
      answer: "Yes, the platform includes features that help users discover local support groups, fostering a sense of community both online and offline."
    },
    {
      question: "How can the web application assist friends and family in supporting individuals dealing with depression?",
      answer: "We provide resources and guides for friends and family to better understand depression, offering tips on providing support and encouragement to their loved ones."
    },
    {
      question: "Is the web application accessible to people with various levels of technological expertise?",
      answer: "Yes, the platform is designed to be user-friendly, ensuring accessibility for individuals with varying levels of technological proficiency to easily navigate and benefit from the available resources and support."
    },
  ],
};

import { FaBullseye, FaEye, FaHeart, FaFlag, FaBullhorn, FaRocket, FaHandshake, FaThumbsUp } from 'react-icons/fa';

const DummyLorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ex necessitatibus excepturi, id modi repellat.'

export const AboutList: AboutListProps[] = [
  {
    icon: <FaBullseye color={`#fff`} size={45} />,
    title: 'Our Mission',
    description: DummyLorem
  },
  {
    icon: <FaEye color={`#fff`} size={45} />,
    title: 'Our Vision',
    description: DummyLorem
  },
  {
    icon: <FaHeart color={`#fff`} size={45} />,
    title: 'Our Values',
    description: DummyLorem
  },
  {
    icon: <FaFlag color={`#fff`} size={45} />,
    title: 'Our Goals',
    description: DummyLorem
  },
  {
    icon: <FaBullhorn color={`#fff`} size={45} />,
    title: 'Our Objectives',
    description: DummyLorem
  },
  {
    icon: <FaRocket color={`#fff`} size={45} />,
    title: 'Our Purpose',
    description: DummyLorem
  },
  {
    icon: <FaHandshake color={`#fff`} size={45} />,
    title: 'Our Commitment',
    description: DummyLorem
  },
  {
    icon: <FaThumbsUp color={`#fff`} size={45} />,
    title: 'Our Promise',
    description: DummyLorem
  },
]

export const OptionsObject: OptionsListProps = {
  options: [
    {
      title: 'Option 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
      suboptions: [
        {
          options: [
            {
              title: 'Suboption 1',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
            {
              title: 'Suboption 2',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
            {
              title: 'Suboption 3',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
          ]
        }
      ]
    },
    {
      title: 'Option 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
      suboptions: [
        {
          options: [
            {
              title: 'Suboption 1',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
            {
              title: 'Suboption 2',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
            {
              title: 'Suboption 3',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
          ]
        }
      ]
    },
    {
      title: 'Option 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
      suboptions: [
        {
          options: [
            {
              title: 'Suboption 1',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
            {
              title: 'Suboption 2',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
          ],
        },
      ]
    },
  ]
}

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export const FooterList: FooterProps[] = [
  {
    title: 'Contact Us',
    links: [
      {
        name: 'Email',
        link: '/email',
      },
      {
        name: 'Phone',
        link: '/phone',
      },
      {
        name: 'Address',
        link: '/address',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        name: 'Privacy Policy',
        link: '/privacy',
      },
      {
        name: 'Terms of Service',
        link: '/terms',
      },
      {
        name: 'Cookie Policy',
        link: '/cookie',
      },
    ],
  },
];