import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors'; // Import the 'red' color
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


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
    navigate(`/`);
  };
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 310,bgcolor: '#007B5F',
          color: 'white' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {card.title.charAt(0)} 
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" sx={{ color: 'white' }}>
                <MoreVertIcon /> 
              </IconButton>
            }
            title={card.title} 
            sx={{ color: 'white' }} 

          />
          <CardMedia
            sx={{height: 140,color: 'white' }}
            image={card.img}
            title={card.title}
          />
          <CardContent>
            <Typography variant="body2" color="white">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"sx={{ color: 'white' }}>Share</Button>
            <Button size="small"onClick={() => handleLearnMoreClick(card.title)}sx={{ color: 'white' }}>Donate</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}