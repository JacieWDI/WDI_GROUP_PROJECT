const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const express = require('express');
const app = express();
const enviroment = app.get('env');

const { db } = require('../config/enviroment');
mongoose.connect(db[enviroment]);

const User = require('../models/user');
User.collection.drop();

const Group = require('../models/group');
Group.collection.drop();

User.create([
  {
    userName: 'matt',
    gender: 'female',
    firstName: 'Matt',
    lastName: 'Yates',
    email: 'matt@matt.com',
    image:
      'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/19/10/enhanced/buzzfeed-prod-fastlane-01/enhanced-2704-1508425095-1.jpg?downsize=715:*&output-format=auto&output-quality=auto',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'duck2017',
    gender: 'female',
    firstName: 'marleen',
    lastName: 'esser',
    email: 'marleen@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'Richard',
    gender: 'male',
    firstName: 'Richard',
    lastName: 'knight',
    email: 'ki@ga.com',
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'brad',
    gender: 'male',
    firstName: 'brad',
    lastName: 'herrera',
    email: 'braddy@ga.com',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'filicutie',
    gender: 'female',
    firstName: 'filipa',
    lastName: 'pedersen',
    email: 'pedersen@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/16.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'helloworld',
    gender: 'female',
    firstName: 'java',
    lastName: 'script',
    email: 'js@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'todi',
    gender: 'male',
    firstName: 'tody',
    lastName: 'nixon',
    email: 'nixon@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/72.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'josie',
    gender: 'female',
    firstName: 'josephine',
    lastName: 'kistensen',
    email: 'j.kristensen@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/67.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'emy',
    gender: 'female',
    firstName: 'emy',
    lastName: 'lecomte',
    email: 'e.lecomte@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'eemeli',
    gender: 'male',
    firstName: 'eemeli',
    lastName: 'paavola',
    email: 'pavola@ga.com',
    image: 'https://randomuser.me/api/portraits/men/49.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'alisa',
    gender: 'female',
    firstName: 'alisa',
    lastName: 'rush',
    email: 'rush@ga.com',
    image: 'https://randomuser.me/api/portraits/women/92.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'elyayaya',
    gender: 'female',
    firstName: 'elya',
    lastName: 'guillot',
    email: 'guillot@ga.com',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'mrwhite',
    gender: 'male',
    firstName: 'xavier',
    lastName: 'white',
    email: 'white@ga.com',
    image: 'https://randomuser.me/api/portraits/men/97.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'erico',
    gender: 'male',
    firstName: 'erico',
    lastName: 'barbosa',
    email: 'white@ga.com',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'jasmine',
    gender: 'female',
    firstName: 'jasmine',
    lastName: 'ouellet',
    email: 'ouellet@ga.com',
    image: 'https://randomuser.me/api/portraits/women/57.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'leon',
    gender: 'male',
    firstName: 'leon',
    lastName: 'graham',
    email: 'gra@ga.com',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'sad',
    gender: 'female',
    firstName: 'sady',
    lastName: 'wright',
    email: 'wright@ga.com',
    image: 'https://randomuser.me/api/portraits/women/20.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'flo',
    gender: 'male',
    firstName: 'florian',
    lastName: 'may',
    email: 'may@ga.com',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'leta',
    gender: 'female',
    firstName: 'leta',
    lastName: 'ramos',
    email: 'ramos@ga.com',
    image: 'https://randomuser.me/api/portraits/women/96.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'niklas',
    gender: 'male',
    firstName: 'niklas',
    lastName: 'latvala',
    email: 'latvala@ga.com',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'lenni',
    gender: 'male',
    firstName: 'lenni',
    lastName: 'kalio',
    email: 'kalio@ga.com',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'nathan',
    gender: 'male',
    firstName: 'nathan',
    lastName: 'daniels',
    email: 'daniels@ga.com',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'vero',
    gender: 'female',
    firstName: 'veronia',
    lastName: 'munoz',
    email: 'munoz@ga.com',
    image: 'https://randomuser.me/api/portraits/women/52.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'Orly',
    gender: 'male',
    firstName: 'Orlando',
    lastName: 'ramos',
    email: 'ramos@matt.com',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'aaliyah',
    gender: 'female',
    firstName: 'aaliyah',
    lastName: 'taylor',
    email: 'aaliyah@matt.com',
    image: 'https://randomuser.me/api/portraits/women/38.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'hannah',
    gender: 'female',
    firstName: 'hannah',
    lastName: 'taylor',
    email: 'taylor@matt.com',
    image: 'https://randomuser.me/api/portraits/women/70.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'ugo',
    gender: 'male',
    firstName: 'ugo',
    lastName: 'lucas',
    email: 'lucas@matt.com',
    image: 'https://randomuser.me/api/portraits/men/64.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'judith',
    gender: 'female',
    firstName: 'judith',
    lastName: 'harper',
    email: 'harper@matt.com',
    image: 'https://randomuser.me/api/portraits/women/0.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'stanley',
    gender: 'male',
    firstName: 'stanley',
    lastName: 'price',
    email: 'price@matt.com',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'di',
    gender: 'female',
    firstName: 'ediane',
    lastName: 'nogeuira',
    email: 'nogeuira@matt.com',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'luis',
    gender: 'male',
    firstName: 'luis',
    lastName: 'miller',
    email: 'miller@matt.com',
    image: 'https://randomuser.me/api/portraits/men/27.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'miss',
    gender: 'female',
    firstName: 'marjorie',
    lastName: 'mcdonald',
    email: 'marjorie@matt.com',
    image: 'https://randomuser.me/api/portraits/women/24.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'daniel',
    gender: 'male',
    firstName: 'daniel',
    lastName: 'kumar',
    email: 'kumar@matt.com',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'liam',
    gender: 'male',
    firstName: 'liam',
    lastName: 'harris',
    email: 'harris@matt.com',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'felix',
    gender: 'male',
    firstName: 'felix',
    lastName: 'olsen',
    email: 'olsen@matt.com',
    image: 'https://randomuser.me/api/portraits/men/66.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'konrad',
    gender: 'male',
    firstName: 'konrad',
    lastName: 'will',
    email: 'will@matt.com',
    image: 'https://randomuser.me/api/portraits/men/50.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'jud',
    gender: 'female',
    firstName: 'judith',
    lastName: 'kinn',
    email: 'kinn@matt.com',
    image: 'https://randomuser.me/api/portraits/women/24.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'ahbay',
    gender: 'male',
    firstName: 'ahmet',
    lastName: 'baykam',
    email: 'baykam@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/16.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'luke',
    gender: 'male',
    firstName: 'luke',
    lastName: 'gagnon',
    email: 'gagnon@ga.com',
    image: 'https://randomuser.me/api/portraits/men/66.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'florence',
    gender: 'female',
    firstName: 'florence',
    lastName: 'hill',
    email: 'hill@gm.com',
    image: 'https://randomuser.me/api/portraits/women/73.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'ella',
    gender: 'female',
    firstName: 'ella',
    lastName: 'thompson',
    email: 'hill@gm.com',
    image: 'https://randomuser.me/api/portraits/women/54.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'liv',
    gender: 'female',
    firstName: 'liva',
    lastName: 'andersen',
    email: 'l.andersen@gm.com',
    image: 'https://randomuser.me/api/portraits/women/41.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'gene',
    gender: 'male',
    firstName: 'gene',
    lastName: 'kempenaar',
    email: 'kempenaar@gm.com',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'anni',
    gender: 'female',
    firstName: 'anni',
    lastName: 'jarvela',
    email: 'kempenaar@gm.com',
    image: 'https://randomuser.me/api/portraits/women/86.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'oni',
    gender: 'male',
    firstName: 'onal',
    lastName: 'abanuz',
    email: 'onal.abanuz@gm.com',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'ryan',
    gender: 'male',
    firstName: 'fernando',
    lastName: 'ryan',
    email: 'ryan@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'alberto',
    gender: 'male',
    firstName: 'alberto',
    lastName: 'harris',
    email: 'harris@gm.com',
    image: 'https://randomuser.me/api/portraits/men/57.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'lio',
    gender: 'male',
    firstName: 'lionel',
    lastName: 'sauer',
    email: 'sauer@gm.com',
    image: 'https://randomuser.me/api/portraits/men/94.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'iiris',
    gender: 'female',
    firstName: 'iiris',
    lastName: 'kivisto',
    email: 'sauer@gm.com',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'johan',
    gender: 'male',
    firstName: 'johan',
    lastName: 'sorensen',
    email: 'jo.sorensen@gm.com',
    image: 'https://randomuser.me/api/portraits/men/49.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'holly',
    gender: 'female',
    firstName: 'holly',
    lastName: 'ramirez',
    email: 'rami@gm.com',
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'thomas',
    gender: 'male',
    firstName: 'thomas',
    lastName: 'robinson',
    email: 'robinson@gm.com',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'lyam',
    gender: 'male',
    firstName: 'lyam',
    lastName: 'roy',
    email: 'roy@ga.com',
    image: 'https://randomuser.me/api/portraits/men/96.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'lilly',
    gender: 'female',
    firstName: 'lilly',
    lastName: 'turner',
    email: 'lilly@ga.com',
    image: 'https://randomuser.me/api/portraits/women/20.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'afet',
    gender: 'female',
    firstName: 'afet',
    lastName: 'akbulut',
    email: 'akbulut@ga.com',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'francis',
    gender: 'male',
    firstName: 'francis',
    lastName: 'bradly',
    email: 'bradly@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'auguste',
    gender: 'male',
    firstName: 'auguste',
    lastName: 'guerin',
    email: 'guerin@ga.com',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'maddy',
    gender: 'female',
    firstName: 'madison',
    lastName: 'davies',
    email: 'davies@ga.com',
    image: 'https://randomuser.me/api/portraits/women/37.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'clayton',
    gender: 'male',
    firstName: 'clayton',
    lastName: 'rhodes',
    email: 'rhodes@ga.co',
    image: 'https://randomuser.me/api/portraits/men/30.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'jonny',
    gender: 'male',
    firstName: 'jonathan',
    lastName: 'sanders',
    email: 'sanders@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'delaforet',
    gender: 'male',
    firstName: 'elouan',
    lastName: 'delaforet',
    email: 'delaforet@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/28.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'eliza',
    gender: 'female',
    firstName: 'eliza',
    lastName: 'watts',
    email: 'watts@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/35.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'becky',
    gender: 'female',
    firstName: 'becky',
    lastName: 'pearson',
    email: 'pearson@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/83.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'nevaeh',
    gender: 'female',
    firstName: 'nevaeh',
    lastName: 'kumar',
    email: 'nevy@ga.com',
    image: 'https://randomuser.me/api/portraits/women/42.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'virgil',
    gender: 'male',
    firstName: 'virgil',
    lastName: 'jordan',
    email: 'jordan@ga.com',
    image: 'https://randomuser.me/api/portraits/men/97.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'oliver',
    gender: 'male',
    firstName: 'oliver',
    lastName: 'schneider',
    email: 'schneider@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'umut',
    gender: 'male',
    firstName: 'umut',
    lastName: 'koçyiğit',
    email: 'koçyiğit@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/48.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'paula',
    gender: 'female',
    firstName: 'paula',
    lastName: 'smith',
    email: 'p.smith@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/18.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'topias',
    gender: 'male',
    firstName: 'topias',
    lastName: 'saloum',
    email: 'saloum@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/95.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'leo',
    gender: 'male',
    firstName: 'leonard',
    lastName: 'silva',
    email: 'leo@gma.com',
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'laurent',
    gender: 'male',
    firstName: 'laurent',
    lastName: 'rougier',
    email: 'rougier@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/84.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'anisio',
    gender: 'male',
    firstName: 'anisio',
    lastName: 'das neves',
    email: 'daneves@gm.com',
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'amelia',
    gender: 'female',
    firstName: 'amelia',
    lastName: 'das neves',
    email: 'daneves@gm.com',
    image: 'https://randomuser.me/api/portraits/women/89.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'margarita',
    gender: 'female',
    firstName: 'margarita',
    lastName: 'bravo',
    email: 'bravo@gm.com',
    image: 'https://randomuser.me/api/portraits/women/27.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'jen',
    gender: 'female',
    firstName: 'jen',
    lastName: 'jenkins',
    email: 'jenkins@gm.com',
    image: 'https://randomuser.me/api/portraits/women/35.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'marouane',
    gender: 'male',
    firstName: 'marouane',
    lastName: 'bossink',
    email: 'bossink@gm.com',
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'alexa',
    gender: 'female',
    firstName: 'alexa',
    lastName: 'schmidt',
    email: 'schmidt@gm.com',
    image: 'https://randomuser.me/api/portraits/women/42.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'eline',
    gender: 'female',
    firstName: 'eline',
    lastName: 'gautier',
    email: 'gautier@gm.com',
    image: 'https://randomuser.me/api/portraits/women/51.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'nadeem',
    gender: 'male',
    firstName: 'nadeem',
    lastName: 'schee',
    email: 'schee@gm.com',
    image: 'https://randomuser.me/api/portraits/men/48.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'eren',
    gender: 'male',
    firstName: 'eren',
    lastName: 'akyürek',
    email: 'akyürek@gm.com',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'harold',
    gender: 'male',
    firstName: 'harold',
    lastName: 'cole',
    email: 'cole@gm.com',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'maddison',
    gender: 'female',
    firstName: 'maddison',
    lastName: 'foster',
    email: 'm.foster@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/41.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'fatin',
    gender: 'male',
    firstName: 'fatin',
    lastName: 'hamzaoğlu',
    email: 'hamzaoğlu@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/57.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'amber',
    gender: 'female',
    firstName: 'amber',
    lastName: 'garza',
    email: 'garza@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/35.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'jonas',
    gender: 'male',
    firstName: 'jonas',
    lastName: 'leclercq',
    email: 'leclercq@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/72.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'teo',
    gender: 'male',
    firstName: 'teo',
    lastName: 'aubert',
    email: 'aubert@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/16.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'lily',
    gender: 'female',
    firstName: 'lily',
    lastName: 'thomas',
    email: 'thomas@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/95.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'gabrielle',
    gender: 'female',
    firstName: 'gabrielle',
    lastName: 'addy',
    email: 'addy@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/78.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'jelger',
    gender: 'male',
    firstName: 'jelger',
    lastName: 'vogelzang',
    email: 'vogelzang@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/84.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'kayla',
    gender: 'female',
    firstName: 'kalya',
    lastName: 'edwards',
    email: 'edwards@ga.com',
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'jesus',
    gender: 'male',
    firstName: 'jesus',
    lastName: 'harris',
    email: 'harris@ga.com',
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'tita',
    gender: 'female',
    firstName: 'tita',
    lastName: 'ramos',
    email: 'ramos@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/94.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'lucian',
    gender: 'male',
    firstName: 'lucian',
    lastName: 'ramones',
    email: 'ramones@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'john',
    gender: 'male',
    firstName: 'john',
    lastName: 'singh',
    email: 'e.singh@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'ethan',
    gender: 'male',
    firstName: 'ethan',
    lastName: 'singh',
    email: 'e.singh@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'slow',
    gender: 'male',
    firstName: 'slow',
    lastName: 'longarm',
    email: 's.longarm@gmail.com',
    image: 'https://78.media.tumblr.com/avatar_a606c72a403f_128.png',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'cuttie',
    gender: 'male',
    firstName: 'johnny',
    lastName: 'rawr',
    email: 'rawr@gmail.com',
    image:
      'http://pa1.narvii.com/6468/c345deddd9f25b1b9d1d8ba83c7f02d63a7e6f8b_00.gif',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'fluff',
    gender: 'female',
    firstName: 'ginger',
    lastName: 'wouf',
    email: 'g.wouf@gmail.com',
    image:
      'https://assets.change.org/photos/0/pl/pj/yYPLpjhqItHRWvt-128x128-noPad.jpg?1454829422',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userName: 'otterson',
    gender: 'male',
    firstName: 'emet',
    lastName: 'otterson',
    email: 'otterson@gmail.com',
    image:
      'https://pbs.twimg.com/profile_images/651464732260462592/4YExEoUQ.jpg',
    password: 'password',
    passwordConfirmation: 'password'
  }
])
  .then(users => console.log(`${users.length} users created!`))
  .catch(err => console.log(err));

Group.create([
  {
    event: 123
  },
  {
    event: 456
  }
])
  .then(groups => console.log(`${groups.length} groups created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
