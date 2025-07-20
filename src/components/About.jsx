import { Container, Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '20px',
  marginTop: '20px',
  backgroundColor: '#1a1a1a',
  color: 'white',
}));

const About = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Back to Home
          </button>
        </div>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{ mb: 4, color: 'gold' }}
        >
          About Crypto Hunter
        </Typography>
        <Typography className="text-lg mb-6">
          Crypto Hunter is your premier destination for tracking and analyzing cryptocurrencies.
          We provide real-time data, market insights, and comprehensive information about various digital assets.
        </Typography>
        <Typography className="text-lg mb-6">
          Our platform helps investors and enthusiasts stay informed about the latest trends,
          price movements, and market developments in the cryptocurrency space.
        </Typography>
        <div className="bg-gray-800 p-6 rounded-lg">
          <Typography variant="h5" gutterBottom>
            Key Features
          </Typography>
          <Typography component="ul" sx={{ pl: 2 }}>
            <li>Real-time cryptocurrency price tracking</li>
            <li>Market cap and volume analytics</li>
            <li>Price change indicators</li>
            <li>Watchlist functionality</li>
            <li>Multi-currency support</li>
          </Typography>
        </div>
        <StyledPaper elevation={3}>
          <Typography variant="h6" gutterBottom>
            Technology Stack
          </Typography>
          <Typography paragraph>
            Built with React.js, Material-UI, and powered by reliable
            cryptocurrency APIs to ensure accurate and up-to-date information.
          </Typography>

          <Typography variant="body2" sx={{ mt: 4, textAlign: 'center' }}>
            © 2023 Crypto Hunter. All rights reserved.
          </Typography>
        </StyledPaper>
      </div>
    </div>
  );
};

export default About;
