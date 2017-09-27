import Task from '../../models/task';

export async function createTask(task) {

  try {

    task = new Task(task);

    return await task.save();

  } catch (err) {

    err.error = true;
    return err;

  }

}

export async function getTasks() {

  try {

    return await Task.find({});

  } catch (err) {

    err.error = true;
    return err;

  }

}