import React from 'react'
import './don.scss';

<<<<<<< HEAD

const cardData = [
  {
    img: 'https://media.istockphoto.com/id/465426619/photo/close-up-view-of-hand-writing-a-donation-check.jpg?s=1024x1024&w=is&k=20&c=kIPdF8YdVbdHj42tLpMfRTg1QXrW8ni54HXKkqzhjn8=',
    title: 'Donations',
    description: '"There is no greater joy, nor greater reward than to make a fundamental difference in someone\'s life."',
  },
  {
    img: 'https://media.istockphoto.com/id/1284547520/photo/fists-raised-for-equality.jpg?s=612x612&w=0&k=20&c=xGbbsMEthndZApl9vCrUv6kQqn5JlarXzQLXlZQUQvU=',
    title: 'Volunteer',
    description: 'The best way to find yourself is to lose yourself in the service of others." — Mahatma Gandhi',
  },
  {
    img: 'https://media.istockphoto.com/id/1219003850/photo/woman-with-baby-in-displaced-persons-camp-juba-south-sudan.jpg?s=612x612&w=0&k=20&c=TbXoPpquI3R-DVUsE0BwU4rYhdLL7RP0GfV19j8bU6M=',
    title: 'Shelter',
    description: 'Empowering Karamoja: Join us in building a brighter future for communities in Karamoja, Uganda',
  },
  {
    img: 'https://media.istockphoto.com/id/1430650502/photo/beggar-homeless-man-laying-on-the-sidewalk-in-mumbai-in-india.jpg?s=612x612&w=0&k=20&c=V4tk2qfN0ydIppoA6k7lSILc-rpTupvEIWNayHec0IA=',
    title: 'Street kids',
    description: '"Food is for eating, and it\'s a requirement for life. If you miss a meal, that\'s a really great problem to have." - Joan Cusack',
  },
];

export default function MediaCard() {
  const [expandedCardIndex, ] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate
  const handleLearnMoreClick = (cardTitle) => {
    // Use cardTitle to determine the navigation path
    navigate(`/donorhome`);
  };
=======
const Don = () => {
>>>>>>> b864a0807ee76d381a4dae40c512d554a440c24c
  return (
    <div className="services-container">
      <div className="service-container">
        <img src="https://media.istockphoto.com/id/465426619/photo/close-up-view-of-hand-writing-a-donation-check.jpg?s=1024x1024&w=is&k=20&c=kIPdF8YdVbdHj42tLpMfRTg1QXrW8ni54HXKkqzhjn8=" alt="image 1" />
        <h1>WHO WE ARE</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid est dignissimos provident pariatur? Natus iure quaerat veniam ducimus voluptates molestias!</p>
        </div>
        <div className="service-container">
        <img src="https://media.istockphoto.com/id/465426619/photo/close-up-view-of-hand-writing-a-donation-check.jpg?s=1024x1024&w=is&k=20&c=kIPdF8YdVbdHj42tLpMfRTg1QXrW8ni54HXKkqzhjn8=" alt="image 1" />
        <h1>WHO WE ARE</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid est dignissimos provident pariatur? Natus iure quaerat veniam ducimus voluptates molestias!</p>
        </div>
        <div className="service-container">
        <img src="https://media.istockphoto.com/id/465426619/photo/close-up-view-of-hand-writing-a-donation-check.jpg?s=1024x1024&w=is&k=20&c=kIPdF8YdVbdHj42tLpMfRTg1QXrW8ni54HXKkqzhjn8=" alt="image 1" />
        <h1>WHO WE ARE</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid est dignissimos provident pariatur? Natus iure quaerat veniam ducimus voluptates molestias!</p>
        </div>
      </div>
      

  )
}

export default Don