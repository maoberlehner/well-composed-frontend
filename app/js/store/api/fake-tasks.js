export default new Promise((resolve) => {
  setTimeout(() => resolve([
    {
      id: 1,
      title: `Task 1`,
      progress: 0,
    },
    {
      id: 2,
      title: `Task 2`,
      progress: 30,
    },
    {
      id: 3,
      title: `Task 3`,
      progress: 10,
    },
  ]), 200);
});
