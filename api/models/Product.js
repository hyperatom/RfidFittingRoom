/**
* Product.js
*
* @description :: An M&S product.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    id: {
      type: 'string',
      primaryKey: true,
      required: true
    },

    name: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string',
      required: true
    },

    price: {
      type: 'float',
      required: true
    },

    imageUrl: {
      type: 'string',
      required: true
    },

    relatedTo: {
      model: 'Product'
    },

    relatedProducts: {
      collection: 'Product',
      via: 'relatedTo'
    },

    rating: {
      type: 'integer',
      min: 0,
      max: 5,
      required: true
    },

    inStore: {
      type: 'boolean'
    }
  },

  seedData: [
    {
      id: '0268098208',
      name: 'Ruched Neckline Vest Shift Dress',
      description: 'Dressing down for the beach doesn\'t mean a compromise in style; ' +
      'this beach dress is a cute option.',
      price: 16.00,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/SD_01_T52_2809_F0_X_EC_0?$PDP_PROD_IMAGE$',
      rating: 5,
      inStore: true
    },
    {
      id: '1231094920',
      name: 'Floral Fit & Flare Tea Dress',
      description: 'For a gorgeously ladylike look, this tea dress is just the thing. ' +
      'Floral prints are an easy way to channel a current catwalk trend.',
      price: 39.50,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/SD_01_T42_2410D_F4_X_EC_0?$PDP_PROD_IMAGE$',
      rating: 5,
      inStore: true
    },
    {
      id: '33333',
      name: 'Three Faux Feather Bow Hat',
      description: 'Wearing this striking fascinator means you won\'t fail to go unnoticed.',
      price: 89.00,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/HT_01_T01_6859E_FU_SP14_EC_90?$PDP_PROD_IMAGE$',
      relatedTo: '0268098208',
      rating: 4,
      inStore: true
    },
    {
      id: '44444',
      name: 'Diamanté Sparkle Star Necklace',
      description: 'Add some pizzazz to your outfit with this statement necklace.',
      price: 18.00,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/RC_01_T06_6902L_AN_X_EC_1?$PDP_PROD_IMAGE$',
      relatedTo: '0268098208',
      rating: 5,
      inStore: true
    },
    {
      id: '55555',
      name: 'Peep Toe Slingback Court Shoes',
      description: 'Endorsed by the UK College of Podiatrists, Insolia Flex® makes walking in flats more' +
      ' comfortable by insuring your foot is correctly...',
      price: 19.50,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/HT_01_T02_0705_Y1_X_EC_0?$PDP_PROD_IMAGE$',
      relatedTo: '0268098208',
      rating: 4,
      inStore: true
    },
    {
      id: '66666',
      name: 'Contrast Round Frame Sunglasses',
      description: 'There\'s something fabulously retro about these round-framed sunnies. Keep the rest of ' +
      'your accessories to a minimum for an effortlessly...',
      price: 15.00,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/RC_01_T01_3612S_E0_X_EC_0?$PDP_PROD_IMAGE$',
      relatedTo: '1231094920',
      rating: 3,
      inStore: true
    },
    {
      id: '77777',
      name: 'Diamanté Feather & Net Fascinator',
      description: 'Wearing this striking fascinator means you won\'t fail to go unnoticed.',
      price: 25.00,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/HT_01_T01_6173_FU_X_EC_90?$PDP_PROD_IMAGE$',
      relatedTo: '1231094920',
      rating: 4,
      inStore: true
    },
    {
      id: '88888',
      name: 'Moisture Protect Clear Spray SPF15 200ml',
      description: 'Sun Smart clear formulations feature a skin caring complex of sunflower oil, soothing' +
      ' aloe and antioxidant Vitamin E to help maintain...',
      price: 15.00,
      imageUrl: 'http://asset1.marksandspencer.com/is/image/mands/RC_07_T22_4376_NC_X_EC_0?$PDP_PROD_IMAGE$',
      relatedTo: '1231094920',
      rating: 3,
      inStore: true
    }
  ]
};

