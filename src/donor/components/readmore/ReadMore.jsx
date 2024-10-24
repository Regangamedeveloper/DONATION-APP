import React, { useState } from 'react';
import './readmore.scss';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../../../Landing/components/footer/Footer'
import Donate from '../donatemodal/DonateModal';

const campaignData = {
  'make-clean-water-accessible': {
    title: 'Make Clean Water Accessible in Villages',
    description: 'Provide clean water to rural villages',
    image: '/images/borehole.jpg',
    raised: '16.78M',
    goal: '20M',
    progress: '83%',
    fullDescription: `
      The "Make Clean Water Accessible in Villages" campaign seeks to provide clean water to villages in need by constructing wells and installing rainwater harvesting systems. Access to clean water will reduce waterborne diseases and improve the quality of life in these communities.
    `,
    objectives: [
      'Construct 50 wells in water-scarce villages.',
      'Provide clean water access to 10,000 households.',
      'Educate 5,000 community members on water management and sanitation.',
      'Reduce waterborne diseases by 30% in targeted communities.'
    ],
    impactStories: [
      {
        story: 'In Buyende Village, a well was constructed, providing clean water and significantly reducing waterborne diseases.',
        image: '/images/borehole2.jpg'
      },
      {
        story: 'After a well was drilled in Nalutuntu Village, girls like Maria can now attend school regularly and focus on their education.',
        image: '/images/maria.jpg'
      }
    ],
    updates: [
      'Twenty wells constructed, benefiting over 4,000 households.',
      'Water sanitation and hygiene training conducted for 2,500 participants in 10 villages.'
    ]
  },
  'education-for-all': {
    title: 'Education for All',
    description: 'Support education for underprivileged children.',
    image: '/images/needy xul kid.jpg',
    raised: '32.1M',
    goal: '75M',
    progress: '70%',
    fullDescription: `
      The "Education for All" campaign seeks to bridge the educational gap by providing access to quality education for children from disadvantaged backgrounds. Many children are deprived of education due to poverty, lack of facilities, and geographic isolation. This initiative aims to supply learning materials, scholarships, and improve school infrastructure.
    `,
    objectives: [
      'Provide scholarships to at least 1,000 underprivileged children by the end of the year.',
      'Build or renovate 20 schools in underserved communities.',
      'Supply textbooks and learning materials to 5,000 students.',
      'Train 200 teachers in modern teaching methods.'
    ],
    impactStories: [
      {
        story: 'Sarah, a 12-year-old from a rural village, received a scholarship, new textbooks, and a bicycle. She now excels in her studies and dreams of becoming a doctor.',
        image: '/images/sarah.jpg'
      },
      {
        story: 'In Kiwoko Village, the "Education for All" campaign built a fully equipped school, greatly improving the village\'s literacy rate.',
        image: '/images/school.jpg'
      }
    ],
    updates: [
      'Over 2,000 textbooks distributed to students in remote areas.',
      'Renovation of five schools completed, with two more nearing completion.'
    ]
  },
  'save-the-forgotten': {
    title: 'Save the Forgotten',
    description: 'Helping the homeless and neglected in urban areas.',
    image: '/images/needy.jpg',
    raised: '56.8M',
    goal: '70M',
    progress: '83%',
    fullDescription: `
      The "Save the Forgotten" campaign addresses the needs of people living in regions affected by war, natural disasters, and social neglect. These people struggle to access food, clean water, medical care, and safe shelter. This campaign brings relief through emergency aid, trauma care, and long-term rebuilding efforts.
    `,
    objectives: [
      'Deliver food and medical supplies to at least 50,000 displaced individuals.',
      'Establish 10 temporary shelters in conflict zones.',
      'Provide psychological support to 2,000 survivors.',
      'Rebuild 200 homes destroyed by natural disasters or conflicts.'
    ],
    impactStories: [
      {
        story: 'In Kibale, 100 families now have safe housing and food supplies, thanks to the campaign’s efforts after years of civil unrest.',
        image: '/images/food-supplies.jpg'
      },
      {
        story: 'The campaign established a medical camp in a northern refugee camp, providing prenatal care to mothers like Amina.',
        image: '/images/medical-camp.jpg'
      }
    ],
    updates: [
      'Over 30,000 meals distributed to displaced families in northern Uganda.',
      'Five temporary shelters set up, providing safe havens for 500 families.'
    ]
  },
};

const ReadMore = () => {
  // State to manage the visibility of the Donate modal
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  // Function to open the Donate modal
  const handleOpenDonateModal = () => {
    setIsDonateOpen(true);
  };

  // Function to close the Donate modal
  const handleCloseDonateModal = () => {
    setIsDonateOpen(false);
  };

  const { id } = useParams();
  const campaign = campaignData[id];

  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  return (
    <div className="read-more-page">
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>{campaign.title}</h1>
          <img src={campaign.image} alt={campaign.title} />
          <div className="progress-container">
          <h2>Fundraising Progress</h2>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: campaign.progress }}></div>
            <div className="progress-info">
              <span>Raised: {campaign.raised}</span>
              <span>Goal: {campaign.goal}</span>
            </div>
          </div>
        </div>
        </div>
        <div className="description-section">
          <h2>About the Campaign</h2>
          <p>{campaign.fullDescription}</p>
          <h3>Campaign Objectives</h3>
          <ul>
            {campaign.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="impact-section">
        <h2>Impact Stories</h2>
        {campaign.impactStories.map((story, index) => (
          <div className="impact-story" key={index}>
            <img src={story.image} alt="Impact" />
            <p>{story.story}</p>
          </div>
        ))}
        <div className="donation-options">
          <button className="donate-button" onClick={handleOpenDonateModal}>Donate Now</button>
        </div>
      </section>

      {/* Donation Section */}
      <section className="donation-section">
        
      </section>

      {/* Campaign Updates Section */}
      <section className="updates-section">
        <h2>Campaign Updates</h2>
        {campaign.updates.map((update, index) => (
          <p key={index}>{update}</p>
        ))}
      </section>

      {/* Transparency & Accountability Section */}
      <section className="transparency-section">
        <h2>Transparency & Accountability</h2>
        <p>
          At our organization, transparency is a core value. Every donation is tracked, and funds are allocated with the utmost care. Our financial reports are publicly available, and we work with third-party auditors to ensure accountability.
        </p>
        <div className="transparency-links">
          <a href="/reports/annual-report.pdf" target="_blank" rel="noopener noreferrer">Download Annual Report</a>
          <a href="/reports/audit-2024.pdf" target="_blank" rel="noopener noreferrer">View Audit Report</a>
          <a href="https://charitywatch.org" target="_blank" rel="noopener noreferrer">Third-Party Validation by CharityWatch</a>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="partnerships-section">
        <h2>Our Partnerships</h2>
        <p>
          We believe in the power of collaboration. Our efforts are amplified by working closely with global and local organizations such as UNICEF, Red Cross, and WaterAid to bring long-lasting solutions to water scarcity in rural areas.
        </p>
        <div className="partnership-logos">
          <img src="/images/unicef.png" alt="UNICEF" />
          <img src="/images/redcross.png" alt="Red Cross" />
          <img src="/images/wateraid.png" alt="WaterAid" />
        </div>
      </section>
      <Footer/>
      
      {/* Reusable Donate modal component */}
      <Donate open={isDonateOpen} onClose={handleCloseDonateModal} />
    </div>
  );
};

export default ReadMore;
