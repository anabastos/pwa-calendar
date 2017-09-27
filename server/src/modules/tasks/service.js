import * as postRepository from './repository';

export async function getTask(ctx, next) {

  const post = await postRepository.getTasks();

  if (!post)
    ctx.throw(400);

  ctx.body = {
    post
  }

}

export async function postTask(ctx, next) {
  const post = await postRepository.createTask(ctx.request.body.post);

  if (!post || post.error)
    ctx.throw(400, post)

  ctx.body = {
    post
  }

}
