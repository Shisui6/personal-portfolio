/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import redditImg from '../../assets/images/reddit.jpg';
import todoImg from '../../assets/images/todo.jpg';
import bookImg from '../../assets/images/books.jpg';
import calcImg from '../../assets/images/calc.jpg';
import mealImg from '../../assets/images/meal.jpg';
import leaderImg from '../../assets/images/leader.jpg';
import vesperImg from '../../assets/images/vesper.jpg';
import weatherImg from '../../assets/images/weather.jpg';
import recipeImg from '../../assets/images/recipe.jpg';
import jammingImg from '../../assets/images/spotify.jpg';
import awesomeImg from '../../assets/images/awesome-books.jpg';
import vesperBackImg from '../../assets/images/vesper-backend.jpg';
import mealDemo from '../../assets/images/meal-demo.png';
import todoDemo from '../../assets/images/todo-demo.png';
import leaderboardDemo from '../../assets/images/leaderboard-demo.png';
import redditDemo from '../../assets/images/reddit-demo.png';
import bookDemo from '../../assets/images/bookstore-demo.png';
import calcDemo from '../../assets/images/calc-demo.png';
import jammingDemo from '../../assets/images/jamming-demo.png';
import awesomeDemo from '../../assets/images/awesome-demo.png';
import weatherDemo from '../../assets/images/weather-demo.png';
import vesperDemo from '../../assets/images/vesper-demo.png';
import vesperBackDemo from '../../assets/images/vesper-back-demo.png';
import recipeDemo from '../../assets/images/recipe-demo.png';

const initialState = {
  projects: [
    {
      id: 1,
      title: 'Vesper',
      intro: 'Sign up and rent your next dream car',
      desc: 'Vesper is a full stack application for all lovers of cars. Create an account, and become part of our car sharing economy. Let your car make money for you by listing it on our platform so others can view and rent. Find and book your dream car today.',
      tech: ['React', 'Redux', 'Ruby', 'Rails'],
      img: vesperImg,
      imgDemo: vesperDemo,
      source: 'https://github.com/Shisui6/vesper-frontend',
      demo: 'https://vesper-one.vercel.app/',
      label: 'Full-Stack',
    },
    {
      id: 2,
      title: 'Reddit App',
      intro: "View posts under Reddit's most popular subreddits",
      desc: "A React and Redux web application that uses the reddit API to fetch and display post information under reddit's most popular subreddits.",
      tech: ['React', 'Redux'],
      img: redditImg,
      imgDemo: redditDemo,
      source: 'https://github.com/Shisui6/reddit-app',
      demo: 'https://shisui-reddit-app.netlify.app/',
      label: 'Front-End',
    },
    {
      id: 3,
      title: 'Meal App',
      intro: 'View meal recipes from all over the world, like and comment',
      desc: "Meal App is a web application that helps you decide your next meal. Select a meal to see how its prepared, or post a comment on how delicious it is. Don't forget to like 🧡 your favorites",
      tech: ['HTML', 'CSS', 'JS'],
      img: mealImg,
      imgDemo: mealDemo,
      source: 'https://github.com/Shisui6/meal-app',
      demo: 'https://shisui6.github.io/meal-app/',
      label: 'Front-End',
    },
    {
      id: 4,
      title: 'Weather Hub',
      intro: 'View current weather info in Africa',
      desc: 'Weather Hub is a react and redux application that provides current weather info on different countries in Africa.',
      tech: ['React', 'Redux'],
      img: weatherImg,
      imgDemo: weatherDemo,
      source: 'https://github.com/Shisui6/weather-hub',
      demo: 'https://shisui-weather-hub.netlify.app/',
      label: 'Front-End',
    },
    {
      id: 5,
      title: 'Recipe App',
      intro: 'Sign up, create and share recipes',
      desc: 'Recipe app is a Ruby on Rails project designed to help you keep track of all you favorite recipes. Go ahead and sign up to start saving recipes, making shopping lists and viewing recipes created by other users.',
      tech: ['Ruby', 'Rails', 'PostgreSQL'],
      img: recipeImg,
      imgDemo: recipeDemo,
      source: 'https://github.com/Shisui6/recipe-app',
      demo: 'https://shisui-recipe-app.fly.dev/',
      label: 'Full-Stack',
    },
    {
      id: 6,
      title: 'Bookstore',
      intro: 'A personal library to keep track of your reading goals',
      desc: 'Bookstore is a react and redux application that helps you stick to your daily reading goals. Add all the books you are reading and keep track of your progress to completion. You can also filter your books by different categories',
      tech: ['React', 'Redux'],
      img: bookImg,
      imgDemo: bookDemo,
      source: 'https://github.com/Shisui6/bookstore',
      demo: 'https://shisui-bookstore.netlify.app/',
      label: 'Front-End',
    },
    {
      id: 7,
      title: 'Leaderboard',
      intro: 'Submit scores, find a winner',
      desc: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
      tech: ['HTML', 'CSS', 'JS'],
      img: leaderImg,
      imgDemo: leaderboardDemo,
      source: 'https://github.com/Shisui6/leaderboard',
      demo: 'https://shisui6.github.io/leaderboard/',
      label: 'Front-End',
    },
    {
      id: 8,
      title: 'My Day',
      intro: 'Organize your tasks for the day',
      desc: 'To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
      tech: ['HTML', 'CSS', 'JS'],
      img: todoImg,
      imgDemo: todoDemo,
      source: 'https://github.com/Shisui6/my-day',
      demo: 'https://shisui6.github.io/my-day/',
      label: 'Front-End',
    },
    {
      id: 9,
      title: 'Vesper-backend',
      intro: 'Backend API for vesper',
      desc: 'Vesper-backend is the rails backend API application for the full stack vesper app. It provides all the endpoints for the frontend to consume. Here the logic for the app is implemented.',
      tech: ['Ruby', 'Rails', 'PostgreSQL'],
      img: vesperBackImg,
      imgDemo: vesperBackDemo,
      source: 'https://github.com/Shisui6/vesper-backend',
      demo: 'https://vesper-backend.onrender.com/api-docs/index.html',
      label: 'Back-End',
    },
    {
      id: 10,
      title: 'Jamming',
      intro: 'Create and save playlists to spotify',
      desc: 'Jamming is a react application for creating and saving playlists to spotify.',
      tech: ['React'],
      img: jammingImg,
      imgDemo: jammingDemo,
      source: 'https://github.com/Shisui6/jammming',
      demo: 'https://spotify1-playlist-creator.netlify.app/',
      label: 'Front-End',
    },
    {
      id: 11,
      title: 'Math Magicians',
      intro: 'Make simple calculations, get inspired',
      desc: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
      tech: ['React'],
      img: calcImg,
      imgDemo: calcDemo,
      source: 'https://github.com/Shisui6/math-magicians',
      demo: 'https://shisui-math-magicians.netlify.app/',
      label: 'Front-End',
    },
    {
      id: 12,
      title: 'Awesome Books',
      intro: 'Add and remove books from your reading list',
      desc: 'Awesome books is a simple web application that displays a list of books and allows you to add and remove books from that list.',
      tech: ['HTML', 'CSS', 'JS'],
      img: awesomeImg,
      imgDemo: awesomeDemo,
      source: 'https://github.com/Shisui6/awesome-books',
      demo: 'https://shisui6.github.io/awesome-books',
      label: 'Front-End',
    },
  ],
  filter: 'All',
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = projectsSlice.actions;

export const selectProjects = (state) => state.projects.projects;
export const selectFilter = (state) => state.projects.filter;
export const selectFilteredProjects = (state) => {
  const projects = selectProjects(state);
  const filter = selectFilter(state);
  if (filter && filter !== 'All') {
    return projects.filter((project) => project.label.includes(filter));
  }

  return projects;
};

export default projectsSlice.reducer;
