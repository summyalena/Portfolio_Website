import medium from '../assets/vercell.PNG';
import blog from './blog2.PNG';
import Image1 from '../assets/angular-course-logo-zdgvg5193qbxzcx0.jpg';
import Image2 from '../assets/cozy-winter-illustration-woman-working-laptop-363026479.webp';

const Blogs = [
    {
        id: 1,
        name: 'Deploying my first project on Vercel',
        description: 'This talks about how to deploy a nextjs project to vercel',
        image: medium,
        link: 'https://medium.com/@LenaDev/deploying-my-first-project-on-vercel-f9245a39fd3d'
    },
    {
        id: 2,
        name: 'A Beginners Guide to Building Scalable Web Apps With React and Nextjs',
        description: 'This talks about how build scalable web applications using Nextjs',
        image: blog,
        link: 'https://medium.com/@LenaDev/a-beginners-guide-to-building-scalable-web-apps-with-react-and-next-js-b7c33a497a98'
    },
    {
        id: 3,
        name: 'A Beginners Guide to Building your first Data-Driven Angular Component',
        description: 'This talks about how to build your first data driven component in Angular',
        image: Image1,
        link: 'https://medium.com/@LenaDev/a-beginners-guide-to-building-your-first-data-driven-angular-component-d527a0837979'
    },
    {
        id: 4,
        name: 'How I learned to navigate life as a developer(Quiet imposter syndrome)',
        description: 'This talks about how I overcame imposter syndrome as a developer',
        image: Image2,
        link: 'https://medium.com/@LenaDev/how-i-learned-to-navigate-life-as-a-developer-and-quiet-imposter-syndrome-along-the-way-933e8b2f0e05'
    }

]

export default Blogs;