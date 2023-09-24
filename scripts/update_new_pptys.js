import Game from '../models/Games.js'; // Import your game model

// Update existing documents to set default values for new properties
Game.updateMany(
  { featured: { $exists: false } }, // Select documents where 'featured' doesn't exist
  {
    $set: {
      featured: false,  // Set 'featured' to default value
      discount: 0,      // Set 'discount' to default value
      png_image: "",     // Set 'png_image' to default value
    },
  },
  { multi: true } // Update multiple documents
)
  .then(() => {
    console.log('Default values set for new properties in existing documents.');
  })
  .catch((error) => {
    console.error('Error updating documents:', error);
  });
