import { getRandomInt } from './generateRandRange';

const adjectives = [
  'Graceful',
  'Gentle',
  'Happy',
  'Silly',
  'Gigantic',
  'Grumpy',
  'Eager'
];
const animals = [
  'Panda',
  'Frog',
  'Tiger',
  'Hippo',
  'Lynx',
  'Kangaroo',
  'Badger',
  'Bobcat'
];

export const generateRoomName = () => {
  const n = getRandomInt(0, adjectives.length);
  const m = getRandomInt(0, adjectives.length);
  return adjectives[n] + animals[m];
};
