const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`
];


const generateFilters = (tasks) => {
  const filterCount = (element) => {
    switch (element) {
      case `all`:
          return tasks.length;
      case `overdue`:
          return tasks.filter( (el) => el.dueDate instanceof Date && el.dueDate < Date.now()).length;
      case `today`:
          return tasks.filter( (el) => el.dueDate instanceof Date && el.dueDate === Date.now()).length;
      case `favorites`:
          return tasks.filter( (el) => el.isFavorite).length;
      case `repeating`:
          return tasks.reduce((reduce, task) => {
            let days = Object.values(task.repeatingDays);
            if (days.indexOf(true) > -1) {
              console.log(days)
              ++reduce;
            }
            return reduce;
          }, 0)
      case `tags`:
          return tasks.filter( (el) => el.tags.size > 0).length;
      case `archive`:
        return tasks.filter( (el) => el.isArchive).length;
      default:
    }
  }

  const filterCount2 = tasks.filter((el) =>
    el.color === 'green'
  );
    // console.log(test);
  return filterNames.map((it) => {

    return {
      title: it,
      count: filterCount(it),
    };
  });
};

export {generateFilters};