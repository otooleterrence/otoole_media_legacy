import elements from './elements';

function mapper(projects) {
  // takes the list of projects returned from the service and returns a map of the

  let newColors = [];
  const newProjects = projects.map((project) => {
    project.thumbnailLink = `images/${project.name}/thumbnail.png`;
    project.mainImage = `images/${project.name}/main.png`;
    newColors.push(project.color);
    return project;
  });

  return {
    projects: newProjects,
    colors: newColors,
  };
}

export default mapper(elements.projects);
