import { User } from "./models/user.model";
import { Friend } from './models/friend.model';
import { Game } from './models/game.model';

export const USERS: User[] = [
  {
    id: 1,
    email: 'yarmannagibator@gmail.com',
    password: 'toothpaste',
    userName: '',
    age: 0,
    friends: [
      {
        id: 6,
        name: 'Nataliia'
      },
      {
        id: 7,
        name: 'Olha'
      },
      {
        id: 8,
        name: 'Vitaliy'
      }
    ],
    games: [
      {
        id: 7,
        name: 'Doom Ethernal',
        price: 200,
        genre: 'Action',
        img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
      },
      {
        id: 8,
        name: 'SimCity',
        price: 120,
        genre: 'Simulator',
        img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
      },
      {
        id: 9,
        name: 'Diablo 2',
        price: 300,
        genre: 'RPG',
        img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
      },
      {
        id: 10,
        name: 'Age of Empires 3',
        price: 225,
        genre: 'Strategy',
        img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
      },
    ]
  },
  {
    id: 1,
    email: 'mmarkiv0413@outlook.com',
    password: '123456',
    userName: '',
    age: 0,
    friends: [
      {
        id: 6,
        name: 'Mariia'
      },
      {
        id: 7,
        name: 'Iryna'
      },
      {
        id: 8,
        name: 'Katia',
      }
    ],
    games: [
      {
        id: 7,
        name: 'Doom Ethernal',
        price: 200,
        genre: 'Action',
        img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
      },
      {
        id: 8,
        name: 'SimCity',
        price: 120,
        genre: 'Simulator',
        img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
      },
      {
        id: 9,
        name: 'Diablo 2',
        price: 300,
        genre: 'RPG',
        img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
      },
      {
        id: 10,
        name: 'Age of Empires 3',
        price: 225,
        genre: 'Strategy',
        img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
      },
    ]
  },
]

export const FRIENDS: Friend[] = [
  {
    id: 1,
    name: 'Dima'
  },
  {
    id: 2,
    name: 'Roxsolana'
  },
  {
    id: 3,
    name: 'Nastya'
  },
  {
    id: 4,
    name: 'Sviatoslav'
  },
  {
    id: 5,
    name: 'Sasha'
  }
]

export const GAMES: Game[] = [
  {
    id: 1,
    name: 'Doom Ethernal',
    price: 200,
    genre: 'Action',
    img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
  },
  {
    id: 2,
    name: 'SimCity',
    price: 120,
    genre: 'Simulator',
    img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
  },
  {
    id: 3,
    name: 'Diablo 2',
    price: 300,
    genre: 'RPG',
    img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
  },
  {
    id: 4,
    name: 'Age of Empires 3',
    price: 225,
    genre: 'Strategy',
    img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
  },
  {
    id: 5,
    name: 'CS: GO',
    price: 55,
    genre: 'Action',
    img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
  },
  {
    id: 6,
    name: 'Minecraft',
    price: 10,
    genre: 'Simulator',
    img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident praesentium accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
  },
]