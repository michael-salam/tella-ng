export const reports = [
  {
    id: "report-1",
    title: "No Water in Karu",
    description:
      "We've had no water in the area for 4 days. It's affecting hygiene and daily life.",
    issueType: "No Water",
    location: "Karu, Abuja",
    submittedBy: {
      id: "user-1",
      name: "Aisha Bello",
      email: "aisha@example.com",
    },
    images: [
      {
        id: "img-1",
        dataurl: "https://via.placeholder.com/150",
        altText: "Dry tap in Karu",
      },
    ],
    status: "pending",
  },
  {
    id: "report-2",
    title: "Electricity Outage in Yaba",
    description:
      "We've had a blackout in Yaba for 2 days. No communication or refrigeration.",
    issueType: "Electricity Problem",
    location: "Yaba, Lagos",
    submittedBy: {
      id: "user-2",
      name: "John Ade",
      email: "john@example.com",
    },
    images: [
      {
        id: "img-2",
        dataurl: "https://via.placeholder.com/150",
        altText: "Dark streets in Yaba",
      },
    ],
    status: "in_progress",
  },
  {
    id: "report-3",
    title: "Damaged Road in Ikorodu",
    description:
      "Potholes everywhere in Ikorodu. Cars and bikes are getting damaged daily.",
    issueType: "Bad Road",
    location: "Ikorodu, Lagos",
    submittedBy: {
      id: "user-3",
      name: "Ngozi Ude",
      email: "ngozi@example.com",
    },
    images: [
      {
        id: "img-3",
        dataurl: "https://via.placeholder.com/150",
        altText: "Large pothole",
      },
    ],
    status: "resolved",
  },
  {
    id: "report-4",
    title: "Health Center Closed",
    description:
      "The local clinic has been closed for 3 weeks without explanation.",
    issueType: "Healthcare Issue",
    location: "Nsukka, Enugu",
    submittedBy: {
      id: "user-4",
      name: "Chuka Nnamdi",
      email: "chuka@example.com",
    },
    images: [
      {
        id: "img-4",
        dataurl: "https://via.placeholder.com/150",
        altText: "Empty clinic gate",
      },
    ],
    status: "pending",
  },
  {
    id: "report-5",
    title: "Broken Transformer in Wuse",
    description:
      "The transformer in Wuse exploded on Friday night and hasn’t been repaired.",
    issueType: "Electricity Problem",
    location: "Wuse, Abuja",
    submittedBy: {
      id: "user-5",
      name: "Fatima Musa",
      email: "fatima@example.com",
    },
    images: [
      {
        id: "img-5",
        dataurl: "https://via.placeholder.com/150",
        altText: "Damaged transformer",
      },
    ],
    status: "pending",
  },
  {
    id: "report-6",
    title: "Flooded Street in Karu",
    description: "A blocked drainage system has flooded our street in Karu.",
    issueType: "Bad Road",
    location: "Karu, Abuja",
    submittedBy: {
      id: "user-6",
      name: "Emeka Obi",
      email: "emeka@example.com",
    },
    images: [
      {
        id: "img-6",
        dataurl: "https://via.placeholder.com/150",
        altText: "Flooded street",
      },
    ],
    status: "in_progress",
  },
  {
    id: "report-7",
    title: "Overcrowded Hospital in Yaba",
    description:
      "Patients are lying on the floor due to overcrowding in the hospital.",
    issueType: "Healthcare Issue",
    location: "Yaba, Lagos",
    submittedBy: {
      id: "user-7",
      name: "Bola Hassan",
      email: "bola@example.com",
    },
    images: [
      {
        id: "img-7",
        dataurl: "https://via.placeholder.com/150",
        altText: "Crowded hospital hallway",
      },
    ],
    status: "resolved",
  },
  {
    id: "report-8",
    title: "Water Pipeline Leak",
    description:
      "A major pipeline is leaking clean water into the gutter near Wuse Market.",
    issueType: "No Water",
    location: "Wuse, Abuja",
    submittedBy: {
      id: "user-8",
      name: "Kabir Lawal",
      email: "kabir@example.com",
    },
    images: [
      {
        id: "img-8",
        dataurl: "https://via.placeholder.com/150",
        altText: "Water leak on street",
      },
    ],
    status: "pending",
  },
  {
    id: "report-9",
    title: "Collapsed Drainage",
    description: "A collapsed drainage is blocking a major road in Nsukka.",
    issueType: "Bad Road",
    location: "Nsukka, Enugu",
    submittedBy: {
      id: "user-9",
      name: "Gloria Eze",
      email: "gloria@example.com",
    },
    images: [
      {
        id: "img-9",
        dataurl: "https://via.placeholder.com/150",
        altText: "Collapsed drainage slab",
      },
    ],
    status: "pending",
  },
  {
    id: "report-10",
    title: "Power Surges in Ikorodu",
    description: "We're experiencing daily power surges damaging electronics.",
    issueType: "Electricity Problem",
    location: "Ikorodu, Lagos",
    submittedBy: {
      id: "user-10",
      name: "Isaac Adeniran",
      email: "isaac@example.com",
    },
    images: [
      {
        id: "img-10",
        dataurl: "https://via.placeholder.com/150",
        altText: "Burnt extension socket",
      },
    ],
    status: "in_progress",
  },
  // ... add 10 more if you want — let me know and I’ll continue
];

export const faqs = [
  {
    id: "faq-1",
    question: "What is Tella?",
    answer:
      "Tella is a civic voice platform that allows citizens to report community issues—like power outages, water shortages, and damaged roads—to the appropriate authorities in real time.",
  },
  {
    id: "faq-2",
    question: "Who can use Tella?",
    answer:
      "Anyone can use Tella—whether you're a student, worker, or resident in a community. If there's a problem where you live, you can report it anonymously or with your name.",
  },
  {
    id: "faq-3",
    question: "Do I need to create an account to report an issue?",
    answer:
      "No. You can submit a report without creating an account. Just fill in the details and hit submit.",
  },
  {
    id: "faq-4",
    question: "How are issues tracked or updated?",
    answer:
      "Each report has a status: pending, in progress, or resolved. As authorities take action, they can update the status from their admin dashboard.",
  },
  {
    id: "faq-5",
    question: "Can I upload photos with my report?",
    answer:
      "Yes. You can optionally attach one or more images to help describe the issue more clearly.",
  },
  {
    id: "faq-6",
    question: "What if I don’t have a smartphone or internet access?",
    answer:
      "We're designing a USSD version of Tella that allows users with basic phones to submit issues via our short code - *384*60#.",
  },
  {
    id: "faq-7",
    question: "Is my information private?",
    answer:
      "Yes. You can choose to submit reports anonymously. We only collect your name and email if you provide them, and we do not share this information publicly.",
  },
  {
    id: "faq-8",
    question: "Who sees the reports I submit?",
    answer:
      "Reports are stored locally in your browser and shown to community leaders or project admins through a secure dashboard. They use this to review and respond to issues in real time.",
  },
  {
    id: "faq-9",
    question: "Can I see the status of past reports?",
    answer:
      "Yes. You can view your past submissions and track whether they’ve been marked as in progress or resolved—if you're on the same device you used to submit them.",
  },
  {
    id: "faq-10",
    question: "Is Tella free to use?",
    answer:
      "Absolutely. Tella is built to empower citizens and create more responsive communities. It’s 100% free.",
  },
];
