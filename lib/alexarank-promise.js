'use strict';

const alexa = require('alexarank');
const google = require('google-tools');

module.exports = {
  alexa: url => {
    return new Promise((resolve, reject) => {
      alexa(url, (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  },
  google: url => {
    return new Promise((resolve, reject) => {
      google.pagerank({
        url: url
      }, (err, data) => {
        if (err) return reject(err);

        resolve(data);
      });
    });
  }
};
