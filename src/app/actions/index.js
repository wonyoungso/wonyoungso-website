export const windowResize = (dimension) => {
  return {
    type: 'WINDOW_RESIZE',
    payload: {
      windowWidth: dimension.width,
      windowHeight: dimension.height
    }
  }
}

export const changeArticles = (articles) => {
  return {
    type: 'CHANGE_ARTICLES',
    payload: {
      articles: articles
    }
  }
}


export const changeProjects = (projects) => {
  return {
    type: 'CHANGE_PROJECTS',
    payload: {
      projects: projects
    }
  }
}

export const changeLightbox = (lightbox) => {
  return {
    type: 'CHANGE_LIGHTBOX',
    payload: {
      lightbox: lightbox
    }
  }
}


export const changeProject = (project) => {
  return {
    type: 'CHANGE_PROJECT',
    payload: {
      project: project
    }
  }
}

export const changeColors = (colors) => {
  return {
    type: 'CHANGE_COLORS',
    payload: {
      colors: colors
    }
  } 
}