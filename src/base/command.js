export default class BaseCommand {
  emitEvent(event, body) {
    console.warn('{ event, body }', { event, body });
    return { event, body };
  }
}
