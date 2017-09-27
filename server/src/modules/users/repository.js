import User from '../../models/user';

export async function createUser(user) {

  try {

    user = new User(user);

    return await user.save();

  } catch (err) {

    err.error = true;
    return err;

  }

}

export async function getUsers() {

  try {

    return await User.find({}, '-password')

  } catch (err) {

    err.error = true;
    return err;

  }

}

export async function getUser(param) {

  try {

    return await User.findById(param, '-password')

  } catch (err) {

    err.error = true;
    return err;

  }

}

export async function updateUser(user) {

  try {

    return await user.save()

  } catch (err) {

    err.error = true;
    return err;

  }

}

export async function deleteUser(user) {

  try {

    await user.remove()

  } catch (err) {

    err.error = true;
    return err;

  }

}
