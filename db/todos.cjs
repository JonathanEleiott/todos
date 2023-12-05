const client = require('./client.cjs');

const createToDo = async(taskName, assignee) => {
  try {
    await client.query(`
      INSERT INTO todos ("taskName", assignee, "createdAt", "updatedAt")
      VALUES ('${taskName}', '${assignee}', '2022-05-13 07:47:05.782-07', '2022-05-13 07:47:05.782-07');
    `);
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  createToDo
}