module.exports = {

  rfidCode: null,

  show: function() {

    return this.rfidCode;
  },

  store: function(rfid) {
    this.rfidCode = rfid;
  }

};
