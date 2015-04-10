/**
* Product.js
*
* @description :: An M&S product.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    id: {
      type: 'integer'
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
    }
  ]
};

