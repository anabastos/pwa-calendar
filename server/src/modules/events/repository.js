import Event from '../../models/event';

export async function createEvent(event) {

  try {

    event = new Event(event);

    return await event.save();

  } catch (err) {

    err.error = true;
    return err;

  }

}

export async function getEvents() {

  try {

    return await Event.find({});

  } catch (err) {

    err.error = true;
    return err;

  }

}