/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Peak = require('../api/peak/peak.model');
var Picture = require('../api/picture/picture.model');
console.log('Seed started');
Peak.find({}).remove(function() {
  Peak.create({
    _id: 0,
    animation: 'google.maps.Animation.DROP',
    latitude: '50.963426',
    longitude: '-118.089938',
    title : 'Mount Mackenzie',
    zone: 'Revelstoke'
  },
  {
    _id: 1,
    animation: 'google.maps.Animation.DROP',
    latitude: '50.932107',
    longitude: ' -118.287929',
    title : 'Mount MacPherson',
    zone: 'Revelstoke'
  },
  {
    _id: 2,
    animation: 'google.maps.Animation.DROP',
    latitude: '50.954528',
    longitude: '-118.070146',
    zone: 'Revelstoke',
    title : 'Montana Peak'
  },
  {
    _id: 3,
    animation: 'google.maps.Animation.DROP',
    latitude: '50.947210',
    longitude: '-118.070838',
    zone: 'Revelstoke',
    title : 'Kokanee Peak'
  },
  {
    _id: 4,
    animation: 'google.maps.Animation.DROP',
    latitude: '51.284364',
    longitude: '-117.559961',
    zone: 'Roger\'s Pass',
    title : 'Cheops Mountain STS Couloir'
  },
  {
    _id: 5,
    animation: 'google.maps.Animation.DROP',
    latitude: '51.311348',
    longitude: '-117.577142',
    zone: 'Roger\'s Pass',
    title : 'Ursus Minor Mountain'
  },
  {
    _id: 6,
    animation: 'google.maps.Animation.DROP',
    latitude: '51.302349',
    longitude: '-117.585946',
    zone: 'Roger\'s Pass',
    title : 'Video Peak'
  },
  {
    _id: 7,
    animation: 'google.maps.Animation.DROP',
    latitude: '51.296874',
    longitude: '-117.591284',
    zone: 'Roger\'s Pass',
    title : 'Balu Peak (8812)'
  },
  {
    _id: 8,
    animation: 'google.maps.Animation.DROP',
    latitude: '51.399418',
    longitude: '-116.22351',
    zone: 'Banff National Park',
    title : 'Fairview Mountain'
  },
  {
    _id: 9,
    animation: 'google.maps.Animation.DROP',
    latitude: '43.719915',
    longitude: '-110.799791',
    zone: 'Teton National Park',
    title : 'Nez Perce West Hourglass'
  },
  {
    _id: 10,
    animation: 'google.maps.Animation.DROP',
    latitude: '43.729266',
    longitude: '-110.809493',
    zone: 'Teton National Park',
    title : 'Middle Teton East Face'
  });
});

console.log('Peak seed done');

Picture.find({}).remove(function() {
  Picture.create(
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-27+13.46.15.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-27+13.47.42.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-27+13.57.00.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-27+14.10.33.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-27+14.11.00.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-27+14.11.30.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-27+14.19.57.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-27+14.33.39.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-27+14.34.09.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-27+14.34.14.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+09.48.29.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+09.48.39.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+10.06.51.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+10.07.02.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+10.28.29.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+10.28.32.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+10.28.50.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+10.39.22.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+10.39.38.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+10.45.39.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+11.06.04.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+11.06.10.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+11.06.22.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+11.17.21.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+11.21.33.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-02-28+11.21.42.jpg',
  	peak: 'mount-mackenzie'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+12.00.07.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+12.00.13.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+12.11.00.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+12.11.04.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+12.12.52.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+12.12.56.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+13.10.35.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+13.10.40.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+13.24.27.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+14.18.32.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+14.18.37.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+15.10.11.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+15.24.18.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+15.29.53.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-01+15.29.57.jpg',
  	peak: 'montana-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+14.09.21.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+14.10.52.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+14.14.51.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+14.15.14.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+14.15.31.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+14.15.40.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+14.15.46.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+14.47.06.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+15.07.00.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+15.08.18.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+15.08.59.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+15.53.49.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-03-07+18.05.36.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+10.22.49.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+10.22.59.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+10.23.04.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+11.05.23.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+11.05.33.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+13.51.30.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+13.51.35.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+13.51.45.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+13.51.54.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+14.04.05.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+14.05.07.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+14.05.17.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+14.05.23.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-02+14.20.19.jpg',
  	peak: 'ursus-minor-mountain'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-04+12.20.23.jpg',
  	peak: 'video-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-04+12.20.27.jpg',
  	peak: 'video-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-04+14.09.52.jpg',
  	peak: 'video-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-04+14.12.28.jpg',
  	peak: 'video-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-04+14.12.37.jpg',
  	peak: 'video-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-07+12.28.27.jpg',
  	peak: 'cheops-mountain-sts-couloir'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-07+12.28.40.jpg',
  	peak: 'cheops-mountain-sts-couloir'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-07+13.20.43.jpg',
  	peak: 'cheops-mountain-sts-couloir'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-07+13.20.49.jpg',
  	peak: 'cheops-mountain-sts-couloir'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-07+13.23.18.jpg',
  	peak: 'cheops-mountain-sts-couloir'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-07+13.23.29.jpg',
  	peak: 'cheops-mountain-sts-couloir'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-07+13.48.58.jpg',
  	peak: 'cheops-mountain-sts-couloir'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-07+13.53.31.jpg',
  	peak: 'cheops-mountain-sts-couloir'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-07+13.53.58.jpg',
  	peak: 'cheops-mountain-sts-couloir'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-08+14.10.54.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-08+14.10.58.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-08+14.27.11.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-08+14.27.19.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-08+14.27.22.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-08+14.27.30.jpg',
  	peak: 'kokanee-peak'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+08.30.17.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+08.30.23.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+08.32.40.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+08.32.50.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+08.32.52.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+08.33.00.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+08.33.10.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+08.33.16.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+11.33.56.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+14.57.27.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+14.57.35.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+14.57.48.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+14.58.42.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+14.58.58.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+15.02.53.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+15.02.57.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+17.09.55.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+17.11.10.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-17+17.11.21.jpg',
  	peak: 'nez-perce-west-hourglass'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-22+16.01.40.jpg',
  	peak: 'middle-teton-east-face'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-22+16.01.44.jpg',
  	peak: 'middle-teton-east-face'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-22+16.01.57.jpg',
  	peak: 'middle-teton-east-face'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-22+19.40.51.jpg',
  	peak: 'middle-teton-east-face'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-22+20.07.40.jpg',
  	peak: 'middle-teton-east-face'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-22+20.07.44.jpg',
  	peak: 'middle-teton-east-face'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-22+20.34.31.jpg',
  	peak: 'middle-teton-east-face'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-22+20.35.30.jpg',
  	peak: 'middle-teton-east-face'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-22+20.58.15.jpg',
  	peak: 'middle-teton-east-face'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-22+21.08.01.jpg',
  	peak: 'middle-teton-east-face'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-23+08.59.25.jpg',
  	peak: 'middle-teton-east-face'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-23+10.29.04.jpg',
  	peak: 'middle-teton-east-face'
  },
  {
  	url: 'https://s3.amazonaws.com/peakmap.media/2015-04-23+10.29.10.jpg',
  	peak: 'middle-teton-east-face'
  });
});
console.log('Picture seed done');
