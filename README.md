# BlockFund - Web3 Crowdfunding Platform

BlockFund is a decentralized crowdfunding platform built on blockchain technology that enables transparent, secure, and efficient fundraising campaigns. The platform allows creators to launch campaigns and supporters to contribute using cryptocurrency, with all transactions recorded on the blockchain for complete transparency.

![BlockFund Platform](https://images.pexels.com/photos/7015034/pexels-photo-7015034.jpeg)

## Features

- **Decentralized Crowdfunding**: Launch and manage fundraising campaigns using smart contracts
- **Web3 Integration**: Seamless connection with Ethereum wallets (e.g., MetaMask)
- **Real-time Campaign Tracking**: Monitor campaign progress, contributions, and deadlines
- **Transparent Transactions**: All contributions are recorded on the blockchain
- **Responsive Design**: Beautiful, mobile-friendly user interface
- **Campaign Discovery**: Browse and filter active campaigns
- **User Dashboard**: Track your created campaigns and contributions

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **Blockchain Integration**: ethers.js
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MetaMask or another Web3 wallet

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blockfund.git
cd blockfund
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_CONTRACT_ADDRESS=your_contract_address
```

## Usage

### Connecting Your Wallet

1. Click the "Connect Wallet" button in the header
2. Approve the connection request in your Web3 wallet
3. Your wallet address and balance will be displayed in the header

### Creating a Campaign

1. Navigate to "Create Campaign"
2. Fill in the campaign details:
   - Title
   - Description
   - Target amount
   - Duration
   - Cover image URL
3. Submit the campaign
4. Approve the transaction in your Web3 wallet

### Contributing to Campaigns

1. Browse available campaigns
2. Select a campaign
3. Enter contribution amount
4. Approve the transaction in your Web3 wallet

## Project Structure

```
src/
├── components/         # Reusable UI components
├── context/           # React context providers
├── lib/              # Utility functions and helpers
├── pages/            # Page components
└── types/            # TypeScript type definitions
```

## Smart Contract Integration

The platform interacts with Ethereum smart contracts for:
- Campaign creation
- Fund contributions
- Campaign status tracking
- Fund distribution

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)