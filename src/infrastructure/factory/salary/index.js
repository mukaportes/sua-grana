import SalaryCommand from '../../../domain/commands/salary';

export default class SalaryCommandFactory {
  create() {
    return new SalaryCommand();
  }
}
