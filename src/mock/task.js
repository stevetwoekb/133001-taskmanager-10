import {Colors} from '../const.js';

const descriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

const defaultRepeatingDays = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false,
};

const Tags = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`
];

const getRandomIntegerNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length - 1);
  return array[randomIndex];
};


const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 7);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};


const generateRepeatingDays = () => {
  return Object.assign({}, defaultRepeatingDays, {
    'mo': Math.random() > 0.5,
    'tu': Math.random() > 0.5,
    'we': Math.random() > 0.5,
    'th': Math.random() > 0.5,
    'fr': Math.random() > 0.5,
    'sa': Math.random() > 0.5,
    'su': Math.random() > 0.5,
  });
};

const generateTags = (tags) => {
  return tags
    .filter(() => Math.random() > 0.5)
    .slice(0, 3);
};


const generateTask = () => {
  const dueDate = Math.random() > 0.5 ? null : getRandomDate();

  return {
    description: getRandomArrayItem(descriptionItems),
    dueDate: Math.random() > 0.5 ? null : getRandomDate(),
    repeatingDays: dueDate ? defaultRepeatingDays : generateRepeatingDays(),
    tags: new Set(generateTags(Tags)),
    color: getRandomArrayItem(Colors),
    isFavorite: Math.random() > 0.5,
    isArchive: Math.random() > 0.5,
  };
};

const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};

export {generateTask, generateTasks};
