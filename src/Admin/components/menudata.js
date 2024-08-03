import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import CampaignIcon from '@mui/icons-material/Campaign';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import PaidIcon from '@mui/icons-material/Paid';
import LogoutIcon from '@mui/icons-material/Logout';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export const menu = [
    {
        id: 1,
        title: 'Dashboard',
        listItems: [
            {
                id: 1,
                title: 'Homepage',
                url: '/admin',
                icon: <HomeIcon />,
            },
            {
                id: 1,
                title: 'Profile',
                url: '/admin/adminprofile',
                icon: <Person2Icon />,
            },
        ],
    },
    {
        id: 2,
        title: 'General',
        listItems: [
            {
                id: 1,
                title: 'Donor Details',
                url: '/admin/donordetails',
                icon: <Diversity1Icon />,
            },
            {
                id: 2,
                title: 'Charity Details',
                url: '/admin/charitydetails',
                icon: <VolunteerActivismIcon />,
            },
            {
                id: 3,
                title: 'Campaigns',
                url: '/admin/campaigndetails',
                icon: <CampaignIcon />,
            },
            {
                id: 4,
                title: 'Donations',
                url: '/admin/donationdetails',
                icon: <LoyaltyIcon />,
            },
        ],
    },
    {
        id: 3,
        title: 'Finance',
        listItems: [
            {
                id: 1,
                title: 'Transactions',
                url: '/admin/transactions',
                icon: <PaidIcon />,
            },
        ],
    },
    {
        id: 4,
        title: 'Analytics',
        listItems: [
            {
                id: 1,
                title: 'Charts',
                url: '#',
                icon: <BubbleChartIcon />,
            },
            {
                id: 2,
                title: 'LogOut',
                url: '#',
                icon: <LogoutIcon />,
            },
        ],
    },
];

export const topDealUsers = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      username: "Elva McDonald",
      email: "elva@gmail.com",
      amount: "3.668",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Linnie Nelson",
      email: "linnie@gmail.com",
      amount: "3.256",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Brent Reeves",
      email: "brent@gmail.com",
      amount: "2.998",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Adeline Watson",
      email: "adeline@gmail.com",
      amount: "2.512",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Juan Harrington",
      email: "juan@gmail.com",
      amount: "2.134",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Augusta McGee",
      email: "augusta@gmail.com",
      amount: "1.932",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Angel Thomas",
      email: "angel@gmail.com",
      amount: "1.560",
    },
  ];

  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/users.png",
    title: "Total Donors",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 450 },
    ],
  };
  
export const chartBoxProduct = {
    color: "skyblue",
    icon: "/campaign.png",
    title: "Total Campaigns",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
      { name: "Sun", products: 400 },
      { name: "Mon", products: 600 },
      { name: "Tue", products: 500 },
      { name: "Wed", products: 700 },
      { name: "Thu", products: 400 },
      { name: "Fri", products: 500 },
      { name: "Sat", products: 450 },
    ],
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/transactions.png",
    title: "Total Donations",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  };
  export const chartBoxConversion = {
    color: "gold",
    icon: "/projects.png",
    title: "Ongoing Projects",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
      { name: "Sun", ratio: 400 },
      { name: "Mon", ratio: 600 },
      { name: "Tue", ratio: 500 },
      { name: "Wed", ratio: 700 },
      { name: "Thu", ratio: 400 },
      { name: "Fri", ratio: 500 },
      { name: "Sat", ratio: 450 },
    ],
  };

  export const barChartBoxRevenue = {
    title: "Total Earnings",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
      {
        name: "Sun",
        profit: 4000,
      },
      {
        name: "Mon",
        profit: 3000,
      },
      {
        name: "Tue",
        profit: 2000,
      },
      {
        name: "Wed",
        profit: 2780,
      },
      {
        name: "Thu",
        profit: 1890,
      },
      {
        name: "Fri",
        profit: 2390,
      },
      {
        name: "Sat",
        profit: 3490,
      },
    ],
  };
  
  export const barChartBoxVisit = {
    title: "Total site visits",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Sun",
        visit: 4000,
      },
      {
        name: "Mon",
        visit: 3000,
      },
      {
        name: "Tue",
        visit: 2000,
      },
      {
        name: "Wed",
        visit: 2780,
      },
      {
        name: "Thu",
        visit: 1890,
      },
      {
        name: "Fri",
        visit: 2390,
      },
      {
        name: "Sat",
        visit: 3490,
      },
    ],
  };
  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Hubbard",
      firstName: "Eula",
      email: "kewez@@gmail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Manning",
      firstName: "Stella",
      email: "comhuhmit@gmail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Greer",
      firstName: "Mary",
      email: "ujudokon@hottmail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williamson",
      firstName: "Mildred",
      email: "tinhavabe@gmail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Gross",
      firstName: "Jose",
      email: "gobtagbes@yahoo.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Sharp",
      firstName: "Jeremy",
      email: "vulca.eder@mail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lowe",
      firstName: "Christina",
      email: "reso.bilic@gmail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dean",
      firstName: "Garrett",
      email: "codaic@mail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Parsons",
      firstName: "Leah",
      email: "uzozor@gmail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Reid",
      firstName: "Elnora",
      email: "tuhkabapu@gmail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dunn",
      firstName: "Gertrude",
      email: "gibo@gmail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Mark",
      email: "tic.harvey@hotmail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Cruz",
      firstName: "Charlotte",
      email: "ceuc@gmail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harper",
      firstName: "Sara",
      email: "bafuv@hotmail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Griffin",
      firstName: "Eric",
      email: "ubi@gmail.com",
      Nationality:'african',
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
  ];

  export const singleUser = {
    id: 1,
    title: "John Doe",
    img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
      username: "Johndoe99",
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      phone: "123 456 789",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "John Doe added 3 items into their wishlist",
        time: "1 week ago",
      },
      {
        text: "John Doe purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "1 month ago",
      },
      {
        text: "John Doe added 1 items into their wishlist",
        time: "1 month ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "2 months ago",
      },
    ],
  };

  export const campaigns = [
   
      {
        id:1,
        campaign_name: "Spring Fundraiser",
        description: "A campaign to raise funds for the new community center. Includes activities like bake sales, car washes, and a charity auction.",
        start_date: "2024-04-01",
        end_date: "2024-06-30",
        goal_amount: 50000,
        amount_raised: 35000,
        campaign_status: "Active"
      },
      {
        id:2,
        campaign_name: "Back to School Drive",
        description: "A campaign to collect school supplies and donations for underprivileged students. Events include a supply drop-off day and a fundraising concert.",
        start_date: "2024-07-15",
        end_date: "2024-09-15",
        goal_amount: 20000,
        amount_raised: 15000,
        campaign_status: "Pending"
      },
      {
        id:3,
        campaign_name: "Holiday Food Drive",
        description: "A campaign to gather food donations for local food banks during the holiday season. Includes food collection points and a volunteer day at the food bank.",
        start_date: "2024-11-01",
        end_date: "2024-12-31",
        goal_amount: 10000,
        amount_raised: 8000,
        campaign_status: "Closed"
      },
      {
        id:3,
        campaign_name: "Summer Sports Equipment Fundraiser",
        description: "Raising funds to buy new sports equipment for the local youth sports programs. Activities include a charity sports tournament and a community picnic.",
        start_date: "2024-06-01",
        end_date: "2024-08-31",
        goal_amount: 15000,
        amount_raised: 15000,
        campaign_status: "Closed"
      },
      {
        id:4,
        campaign_name: "Winter Warmth Initiative",
        description: "Collecting donations to provide warm clothing and blankets for homeless shelters during the winter season.",
        start_date: "2024-10-01",
        end_date: "2024-12-31",
        goal_amount: 12000,
        amount_raised: 5000,
        campaign_status: "Active"
      },
      {
        id:5,
        campaign_name: "Medical Aid Fundraiser",
        description: "Raising funds to provide medical supplies and support for underfunded clinics in rural areas.",
        start_date: "2024-03-01",
        end_date: "2024-05-31",
        goal_amount: 30000,
        amount_raised: 27000,
        campaign_status: "Active"
      },
      {
        id:6,
        campaign_name: "Community Garden Project",
        description: "Supporting the development of community gardens to promote urban farming and provide fresh produce to local neighborhoods.",
        start_date: "2024-05-01",
        end_date: "2024-08-31",
        goal_amount: 8000,
        amount_raised: 6000,
        campaign_status: "Pending"
      },
      {
        id:7,
        campaign_name: "Disaster Relief Fund",
        description: "Gathering funds to support relief efforts in areas affected by natural disasters.",
        start_date: "2024-01-01",
        end_date: "2024-12-31",
        goal_amount: 100000,
        amount_raised: 75000,
        campaign_status: "Active"
      },
      {
        id:8,
        campaign_name: "Clean Water Initiative",
        description: "Raising money to build wells and provide clean water to communities in need.",
        start_date: "2024-02-01",
        end_date: "2024-11-30",
        goal_amount: 40000,
        amount_raised: 25000,
        campaign_status: "Pending"
      },
      {
        id:9,
        campaign_name: "Animal Shelter Support",
        description: "Funding to support local animal shelters with supplies, food, and medical care.",
        start_date: "2024-06-01",
        end_date: "2024-09-30",
        goal_amount: 18000,
        amount_raised: 18000,
        campaign_status: "Completed"
      },
      {
        id:10,
        campaign_name: "Youth Education Fund",
        description: "Providing scholarships and educational resources to underprivileged youth.",
        start_date: "2024-08-01",
        end_date: "2024-12-31",
        goal_amount: 50000,
        amount_raised: 35000,
        campaign_status: "Active"
      }
    
  ];
  export const donations = [
  
      {
        id: 1,
        donor_name: "John Doe",
        campaign_name: "Spring Fundraiser",
        donation_amount: 500,
        donation_date: "2024-04-05",
        donation_status: "Confirmed"
      },
      {
        id: 2,
        donor_name: "Jane Smith",
        campaign_name: "Back to School Drive",
        donation_amount: 200,
        donation_date: "2024-07-20",
        donation_status: "Confirmed"
      },
      {
        id: 3,
        donor_name: "Emily Johnson",
        campaign_name: "Holiday Food Drive",
        donation_amount: 100,
        donation_date: "2024-11-10",
        donation_status: "Confirmed"
      },
      {
        id: 4,
        donor_name: "Michael Brown",
        campaign_name: "Summer Sports Equipment Fundraiser",
        donation_amount: 150,
        donation_date: "2024-06-15",
        donation_status: "Confirmed"
      },
      {
        id: 5,
        donor_name: "Sarah Davis",
        campaign_name: "Winter Warmth Initiative",
        donation_amount: 250,
        donation_date: "2024-10-05",
        donation_status: "Confirmed"
      },
      {
        id: 6,
        donor_name: "David Wilson",
        campaign_name: "Medical Aid Fundraiser",
        donation_amount: 300,
        donation_date: "2024-03-20",
        donation_status: "Confirmed"
      },
      {
        id: 7,
        donor_name: "Laura Moore",
        campaign_name: "Community Garden Project",
        donation_amount: 100,
        donation_date: "2024-05-10",
        donation_status: "Confirmed"
      },
      {
        id: 8,
        donor_name: "Daniel Taylor",
        campaign_name: "Disaster Relief Fund",
        donation_amount: 1000,
        donation_date: "2024-01-15",
        donation_status: "Confirmed"
      },
      {
        id: 9,
        donor_name: "Megan Anderson",
        campaign_name: "Clean Water Initiative",
        donation_amount: 400,
        donation_date: "2024-02-25",
        donation_status: "Confirmed"
      },
      {
        id: 10,
        donor_name: "Christopher Thomas",
        campaign_name: "Animal Shelter Support",
        donation_amount: 180,
        donation_date: "2024-06-05",
        donation_status: "Confirmed"
      },
      {
        id: 11,
        donor_name: "Sophia Martinez",
        campaign_name: "Youth Education Fund",
        donation_amount: 350,
        donation_date: "2024-08-15",
        donation_status: "Confirmed"
      }
    
  ];
 export const transactionsData = [
    {
      transaction_id: 1,
      donor: {
        donor_id: 101,
        first_name: "John",
        last_name: "Doe",
      },
      amount: 50.00,
      currency: "USD",
      transaction_date: new Date("2023-10-27T10:30:00"),
      payment_method: "Credit Card",
      transaction_status: "Completed",
      notes: "Donation for the 'Clean Water' project",
    },
    {
      transaction_id: 2,
      donor: {
        donor_id: 102,
        first_name: "Jane",
        last_name: "Smith",
      },
      amount: 100.00,
      currency: "USD",
      transaction_date: new Date("2023-10-25T14:15:00"),
      payment_method: "PayPal",
      transaction_status: "Pending",
      notes: "Recurring monthly donation",
    },
    {
      transaction_id: 3,
      donor: {
        donor_id: 103,
        first_name: "Peter",
        last_name: "Brown",
      },
      amount: 25.50,
      currency: "USD",
      transaction_date: new Date("2023-10-23T09:00:00"),
      payment_method: "Bank Transfer",
      transaction_status: "Completed",
      notes: "Donation made via website",
    },
    {
      transaction_id: 4,
      donor: {
        donor_id: 104,
        first_name: "Sarah",
        last_name: "Wilson",
      },
      amount: 75.00,
      currency: "USD",
      transaction_date: new Date("2023-10-21T16:45:00"),
      payment_method: "Credit Card",
      transaction_status: "Failed",
      notes: "Payment failed due to insufficient funds",
    },
    {
      transaction_id: 5,
      donor: {
        donor_id: 105,
        first_name: "David",
        last_name: "Jones",
      },
      amount: 500.00,
      currency: "USD",
      transaction_date: new Date("2023-10-19T12:30:00"),
      payment_method: "PayPal",
      transaction_status: "Completed",
      notes: "Large donation for the 'Education' project",
    },
  ];