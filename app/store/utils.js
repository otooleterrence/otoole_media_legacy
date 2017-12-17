export default function mapper(projects) {
  // takes the list of projects returned from the service and returns a map of the

  let newColors = [];
  const newProjects = projects.map((project) => {
    project.thumbnailLink = `images/${project.name}/thumbnail.png`;
    newColors.push(project.color);
    return project;
  });

  return {
    projects: newProjects,
    colors: newColors,
  };
}
