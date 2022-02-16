import { Component, OnInit } from '@angular/core';

interface Game {
  id: number;
  name: string;
  price: number;
  genre: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  tags: string[] = [];
  data: Game[] = [
    {
      id: 1,
      name: 'Doom Ethernal',
      price: 200,
      genre: 'Action',
      img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
    },
    {
      id: 2,
      name: 'SimCity',
      price: 120,
      genre: 'Simulator',
      img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid provident quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
    },
    {
      id: 3,
      name: 'Diablo 2',
      price: 300,
      genre: 'RPG',
      img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
    },
    {
      id: 4,
      name: 'Age of Empires 3',
      price: 225,
      genre: 'Strategy',
      img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
    },
    {
      id: 5,
      name: 'CS: GO',
      price: 55,
      genre: 'Action',
      img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
    },
    {
      id: 6,
      name: 'Minecraft',
      price: 10,
      genre: 'Simulator',
      img: 'https://dummyimage.com/300x150/bdbcff/bdbcff',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, omnis libero? Molestias, laboriosam nobis? Quae harum nemo aut nesciunt distinctio aliquid accusamus quis possimus at iure vitae vero amet sunt quidem impedit consequuntur error ea, nihil soluta!',
    },
  ];

  ngOnInit(): void {

  }
}
