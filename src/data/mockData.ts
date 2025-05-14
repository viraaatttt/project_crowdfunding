import { Campaign, Transaction } from "../types";

// Mock data for campaigns
export const mockCampaigns: Campaign[] = [
  {
    id: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    title: "Sustainable Urban Farming Project",
    description: "Help us build a sustainable vertical farming system in the heart of the city. This project aims to provide fresh, locally grown produce while reducing carbon footprint and creating green jobs. Our innovative approach combines hydroponics, solar power, and smart monitoring systems for maximum efficiency and minimal environmental impact.",
    creator: "0x1234567890123456789012345678901234567890",
    imageUrl: "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg",
    targetAmount: 5.0,
    raisedAmount: 3.2,
    deadline: new Date().getTime() + 15 * 24 * 60 * 60 * 1000, // 15 days from now
    isActive: true,
    contributors: 24
  },
  {
    id: "0x8dC3e877Ea5beE5Cf2Cf3fFBC78774aF25736270",
    title: "Decentralized Healthcare Records Platform",
    description: "We're building a blockchain-based platform that gives patients control over their medical records while ensuring privacy and security. Healthcare providers can request access to specific records, and patients can grant or revoke permissions at any time. This system will revolutionize data sharing in healthcare while maintaining patient autonomy.",
    creator: "0x2345678901234567890123456789012345678901",
    imageUrl: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg",
    targetAmount: 8.0,
    raisedAmount: 8.0,
    deadline: new Date().getTime() + 5 * 24 * 60 * 60 * 1000, // 5 days from now
    isActive: true,
    contributors: 56
  },
  {
    id: "0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed",
    title: "Community-Owned Solar Power Grid",
    description: "Join us in creating a community-owned solar power grid that will provide clean energy to over 200 households. Each contributor becomes a stakeholder in this renewable energy project, receiving energy credits proportional to their investment. Together, we can reduce our carbon footprint and create a model for sustainable community energy projects.",
    creator: "0x3456789012345678901234567890123456789012",
    imageUrl: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    targetAmount: 12.0,
    raisedAmount: 4.8,
    deadline: new Date().getTime() + 25 * 24 * 60 * 60 * 1000, // 25 days from now
    isActive: true,
    contributors: 32
  },
  {
    id: "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a",
    title: "Open Source Educational Platform",
    description: "We're developing an open-source educational platform that makes quality learning materials accessible to everyone, regardless of their economic situation. The platform will feature interactive lessons, peer-to-peer learning, and verifiable credentials using blockchain technology. Help us democratize education for all.",
    creator: "0x4567890123456789012345678901234567890123",
    imageUrl: "https://images.pexels.com/photos/4144234/pexels-photo-4144234.jpeg",
    targetAmount: 3.5,
    raisedAmount: 2.1,
    deadline: new Date().getTime() + 12 * 24 * 60 * 60 * 1000, // 12 days from now
    isActive: true,
    contributors: 18
  },
  {
    id: "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
    title: "Blockchain-Based Supply Chain Tracking",
    description: "Our project aims to create a transparent supply chain tracking system using blockchain technology. Consumers will be able to scan product QR codes to see the complete journey from raw materials to finished product, ensuring ethical sourcing and production. We're starting with the coffee and cacao industries to combat unfair trade practices.",
    creator: "0x5678901234567890123456789012345678901234",
    imageUrl: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg",
    targetAmount: 7.5,
    raisedAmount: 5.6,
    deadline: new Date().getTime() + 18 * 24 * 60 * 60 * 1000, // 18 days from now
    isActive: true,
    contributors: 41
  },
  {
    id: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    title: "Decentralized Artist Marketplace",
    description: "We're building a platform where artists can sell their work directly to collectors without intermediaries, using NFTs to verify authenticity and ownership. Artists receive fair compensation for their work, including royalties on secondary sales. Help us empower creators in the digital age with true ownership of their art.",
    creator: "0x1234567890123456789012345678901234567890",
    imageUrl: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg",
    targetAmount: 4.0,
    raisedAmount: 1.2,
    deadline: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
    isActive: true,
    contributors: 15
  },
  {
    id: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    title: "Micro-Lending for Rural Entrepreneurs",
    description: "Our blockchain-based micro-lending platform connects investors directly with rural entrepreneurs in developing countries. By eliminating traditional banking obstacles, we're helping small business owners access the capital they need to grow their businesses and support their communities.",
    creator: "0x2345678901234567890123456789012345678901",
    imageUrl: "https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg",
    targetAmount: 10.0,
    raisedAmount: 2.5,
    deadline: new Date().getTime() + 22 * 24 * 60 * 60 * 1000, // 22 days from now
    isActive: true,
    contributors: 28
  },
  {
    id: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    title: "Ocean Plastic Cleanup Initiative",
    description: "Join us in our mission to clean the oceans using autonomous solar-powered drones that collect plastic waste. The collected plastic will be recycled into useful products, with profits reinvested into expanding the cleanup operation. Our blockchain system ensures transparent tracking of collection and recycling activities.",
    creator: "0x3456789012345678901234567890123456789012",
    imageUrl: "https://images.pexels.com/photos/3943916/pexels-photo-3943916.jpeg",
    targetAmount: 15.0,
    raisedAmount: 7.8,
    deadline: new Date().getTime() - 5 * 24 * 60 * 60 * 1000, // 5 days ago (ended)
    isActive: false,
    contributors: 64
  }
];

// Mock data for transactions
export const mockTransactions: Transaction[] = [
  {
    from: "0x1234567890123456789012345678901234567890",
    to: "0x8dC3e877Ea5beE5Cf2Cf3fFBC78774aF25736270", // Decentralized Healthcare Records Platform
    amount: 0.5,
    timestamp: new Date().getTime() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
    transactionHash: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
  },
  {
    from: "0x2345678901234567890123456789012345678901",
    to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", // Sustainable Urban Farming Project
    amount: 0.25,
    timestamp: new Date().getTime() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
    transactionHash: "0x2345678901abcdef2345678901abcdef2345678901abcdef2345678901abcdef"
  },
  {
    from: "0x3456789012345678901234567890123456789012",
    to: "0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed", // Community-Owned Solar Power Grid
    amount: 1.0,
    timestamp: new Date().getTime() - 5 * 24 * 60 * 60 * 1000, // 5 days ago
    transactionHash: "0x3456789012abcdef3456789012abcdef3456789012abcdef3456789012abcdef"
  },
  {
    from: "0x1234567890123456789012345678901234567890",
    to: "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a", // Open Source Educational Platform
    amount: 0.1,
    timestamp: new Date().getTime() - 7 * 24 * 60 * 60 * 1000, // 7 days ago
    transactionHash: "0x4567890123abcdef4567890123abcdef4567890123abcdef4567890123abcdef"
  },
  {
    from: "0x4567890123456789012345678901234567890123",
    to: "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9", // Blockchain-Based Supply Chain Tracking
    amount: 0.75,
    timestamp: new Date().getTime() - 10 * 24 * 60 * 60 * 1000, // 10 days ago
    transactionHash: "0x5678901234abcdef5678901234abcdef5678901234abcdef5678901234abcdef"
  }
];