import handlerAdapter from '../../../base/handler/adapter';
import SalaryFactory from '../../factory/salary';

const salaryComparisonRouter = (router) => {
  router.get('/salary', ctx => handlerAdapter(ctx, SalaryFactory));
};

export default salaryComparisonRouter;
