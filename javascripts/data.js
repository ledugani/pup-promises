const domString = require('./dom');

const getAllPups = () => {
  $.get('../db/pup1.json')
    .done((data1) => {
      domString(data1);
    })
    .fail((error1) => {
      console.error(error1);
    });
};

const initializer = () => {
  getAllPups();
};

module.exports = {
  initializer,
};
