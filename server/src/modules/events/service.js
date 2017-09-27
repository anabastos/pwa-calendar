import * as postRepository from './repository';

export async function getEvent(ctx, next) {

  const post = await postRepository.getEvents();

  if (!post)
    ctx.throw(400);

  ctx.body = {
    post
  }

}

export async function postEvent(ctx, next) {
  const post = await postRepository.createEvent(ctx.request.body.post);

  if (!post || post.error)
    ctx.throw(400, post)

  ctx.body = {
    post
  }

}
