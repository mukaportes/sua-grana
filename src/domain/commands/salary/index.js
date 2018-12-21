import events from '../../../base/enum/events';
import BaseCommand from '../../../base/command';

const { success } = events;

export default class SalaryCommand extends BaseCommand {
  async execute(params) {
    console.log('success, { dataTest: true }', success, { dataTest: true });

    return this.emitEvent(success, { dataTest: true, params });
  }
}
