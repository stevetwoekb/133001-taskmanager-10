const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`
];


const generateFilters = (tasks) => {
  const filterCount = (element) => {
    switch (element) {
      case `all`:
        return tasks.length;
      case `overdue`:
        return tasks.filter((task) => task.dueDate instanceof Date && task.dueDate < Date.now()).length;
      case `today`:
        return tasks.filter((task) => task.dueDate instanceof Date && task.dueDate === Date.now()).length;
      case `favorites`:
        return tasks.filter((task) => task.isFavorite).length;
      case `repeating`:
        return tasks.filter((task) => Object.values(task.repeatingDays).some(Boolean)).length;
      case `tags`:
        return tasks.filter((task) => task.tags.size).length;
      case `archive`:
        return tasks.filter((task) => task.isArchive).length;
      default:
    }
    return undefined;
  };

  return filterNames.map((it) => {

    return {
      title: it,
      count: filterCount(it),
    };
  });
};

export {generateFilters};
