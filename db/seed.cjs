const { createToDo } = require('./todos.cjs');
const client = require('./client.cjs');


const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS todos;
    `)
  } catch(err) {
    console.log(err);
  }
}

const createTables = async() => {
  try {
    await client.query(`
      CREATE TABLE todos (
        id SERIAL PRIMARY KEY,
        "taskName" VARCHAR(100),
        assignee VARCHAR(30),
        "createdAt" DATE,
        "updatedAt" DATE
      );
    `)
  } catch(err) {
    console.log(err);
  }
}

const syncAndSeed = async() => {
  try {
    await client.connect();
    console.log(`CONNECTED TO THE DB!`);

    await dropTables();
    console.log(`TABLES DROPPED!`);

    await createTables();
    console.log(`CREATED TABLES!`);

    await createToDo("Buy dog food", "Cody");
    await createToDo("Take over the world", "Cody");
    await createToDo("Buy a kangaroo", "Jesse");
    await createToDo("Protect the bunnies", "Sarah");
    console.log(`INITAL DATA CREATED`);
  } catch(err) {
    console.log(err);
  }
}

syncAndSeed();