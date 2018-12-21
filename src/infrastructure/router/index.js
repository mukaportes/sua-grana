import salaryRouter from './salary';

const createRoute = ((router) => {
  salaryRouter(router);
});

export default createRoute;
