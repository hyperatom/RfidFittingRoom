/**
* Product.js
*
* @description :: An M&S product.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    id: {
      type: 'integer',
      primaryKey: true,
      required: true
    },

    name: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    price: {
      type: 'float'
    },

    imageUrl: {
      type: 'string'
    },

    relatedTo: {
      model: 'Product'
    },

    relatedProducts: {
      collection: 'Product',
      via: 'relatedTo'
    }
  },

  seedData: [
    {
      id: 11111,
      name: 'Ruched Neckline Vest Shift Dress',
      description: 'Dressing down for the beach doesn\'t mean a compromise in style; ' +
      'this beach dress is a cute option.',
      price: 16.00,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/SD_01_T52_2809_F0_X_EC_0?$PDP_MAXI_ZOOM$'
    },
    {
      id: 22222,
      name: 'Floral Fit & Flare Tea Dress',
      description: 'For a gorgeously ladylike look, this tea dress is just the thing. ' +
      'Floral prints are an easy way to channel a current catwalk trend.',
      price: 39.50,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/SD_01_T42_2410D_F4_X_EC_0?$PDP_MAXI_ZOOM$'
    },
    {
      id: 33333,
      name: 'Bow Visor',
      description: 'Keep the sun out of your eyes with this chic visor.',
      price: 12.50,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/HT_01_T01_7201_V4_X_EC_90?$PDP_MAXI_ZOOM$',
      relatedTo: 11111
    },
    {
      id: 44444,
      name: 'Diamanté Sparkle Star Necklace',
      description: 'Add some pizzazz to your outfit with this statement necklace.',
      price: 18.00,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/RC_01_T06_6902L_AN_X_EC_1?$PDP_MAXI_ZOOM$',
      relatedTo: 11111
    },
    {
      id: 55555,
      name: 'Peep Toe Slingback Court Shoes with Insolia Flex®',
      description: 'Endorsed by the UK College of Podiatrists, Insolia Flex® makes walking in flats more' +
      ' comfortable by insuring your foot is correctly...',
      price: 19.50,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/SD_01_T52_2809_F0_X_EC_0?$PDP_MAXI_ZOOM$',
      relatedTo: 11111
    },
    {
      id: 66666,
      name: 'Contrast Round Frame Sunglasses',
      description: 'There\'s something fabulously retro about these round-framed sunnies. Keep the rest of ' +
      'your accessories to a minimum for an effortlessly...',
      price: 15.00,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/RC_01_T01_3612S_E0_X_EC_0?$PDP_MAXI_ZOOM$',
      relatedTo: 22222
    },
    {
      id: 77777,
      name: 'Raffia Floppy Wide Brim Hat',
      description: 'A stylish way to keep the sun off your face, this elegant sun hat is a summer must-have.',
      price: 18.00,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/HT_01_T01_4603L_V4_X_EC_90?$PDP_MAXI_ZOOM$',
      relatedTo: 22222
    },
    {
      id: 88888,
      name: 'Moisture Protect Clear Spray SPF15 200ml',
      description: 'Sun Smart clear formulations feature a skin caring complex of sunflower oil, soothing' +
      ' aloe and antioxidant Vitamin E to help maintain...',
      price: 15.00,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/RC_01_T01_3612S_E0_X_EC_0?$PDP_MAXI_ZOOM$',
      relatedTo: 22222
    }
  ]
};

