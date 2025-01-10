import styled from '@emotion/styled';

// export const Media = styled('div')({
//   height: 0,
//   paddingTop: '56.25%',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   backgroundBlendMode: 'darken',
// });
export const Media = styled('div')(({ image }) => ({
  height: 0,
  paddingTop: '56.25%',  // Aspect ratio for the media container (16:9)
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  backgroundBlendMode: 'darken',
  backgroundImage: `url(${image})`,  // Set background image dynamically
  backgroundSize: 'contain',  // Ensure the image covers the container
  backgroundPosition: 'center',  // Center the image
  // backgroundRepeat: 'no-repeat' // for no repeating things
}));

export const Border = styled('div')({
  border: 'solid',
});

export const FullHeightCard = styled('div')({
  height: '100%',
});

export const Card = styled('div')({
   display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',    // Curved edges
  height: '100%',           // Full height of the container
  position: 'relative',     // Necessary for absolute positioning of children
  overflow: 'hidden',       // Ensures that any overflowing content respects the border-radius
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: adds depth
  backgroundColor: 'white', // Optional: sets a background color
  padding: '16px',
});

export const Overlay = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
});

export const Overlay2 = styled('div')({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
});

export const Grid = styled('div')({
  display: 'flex',
});

export const Details = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

export const Title = styled('div')({
  padding: '0 16px',
});

export const CardActions = styled('div')({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
});
