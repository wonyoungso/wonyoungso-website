import { DEFAULT_STATE } from '../constants/defaults';

export default function screenReducer(state = DEFAULT_STATE, action){
  switch(action.type) {
    case 'CHANGE_COLORS':
      document.body.style.backgroundColor = action.payload.colors.bgColor;
      return {
        ...state,
        colors: action.payload.colors
      };
    case 'WINDOW_RESIZE':
      return {
        ...state,
        windowWidth: action.payload.windowWidth,
        windowHeight: action.payload.windowHeight
      }
    case 'CHANGE_PROJECTS':
      return {
        ...state,
        projects: action.payload.projects
      }
    case 'CHANGE_PROJECT':
      return {
        ...state,
        project: action.payload.project
      }
    case 'CHANGE_ARTICLES':
      return {
        ...state,
        articles: action.payload.articles
      }
    case 'CHANGE_LIGHTBOX':
      return {
        ...state,
        lightbox: action.payload.lightbox
      }
    default: 
      return state
  }

};

