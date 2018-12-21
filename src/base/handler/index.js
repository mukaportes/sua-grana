import httpStatusEnum from '../enum/http-status-code';

export default class Handler {
  constructor(command) {
    this.command = command;
  }

  async handle(ctx) {
    try {
      const executeResult = await this.command.execute(ctx.request);
      console.warn('executeResult', executeResult);
      const { event, body } = executeResult;

      ctx.status = httpStatusEnum[event];
      ctx.body = { data: body };
    } catch (error) {
      console.log(`Handle error. Detail: ${error}`);
      ctx.status = 500;
      ctx.body = 'An error occurred while handling the HTTP request.';
    }
  }
}
