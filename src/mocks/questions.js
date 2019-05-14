import {Genre, QuestionType} from "../data";

export const questions = [
  {
    type: QuestionType.GENRE,
    genre: Genre.ROCK,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: Genre.ROCK,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: Genre.POP,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: Genre.JAZZ,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: Genre.ROCK,
      },
    ],
  },
  {
    type: QuestionType.ARTIST,
    song: {
      artist: `Tim Aminov`,
      src: `opium.mp3`
    },
    answers: [
      {
        picture: `burton.jpg`,
        artist: `Tim Burton`
      },
      {
        picture: `tim_cook.jpg`,
        artist: `Tim Cook`
      },
      {
        picture: `obrien.jpg`,
        artist: `Tim o'Brien`
      }
    ]
  }
];
