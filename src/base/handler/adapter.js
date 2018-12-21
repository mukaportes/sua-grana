import Handler from './index';

const handlerAdapter = (ctx, Factory) => {
  const command = new Factory().create();
  const handler = new Handler(command);

  return handler.handle(ctx);
};

export default handlerAdapter;
