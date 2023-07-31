import {route} from 'quasar/wrappers';
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory,} from 'vue-router';
import routes from './routes';
import {useAuthStore} from 'stores/auth-store';
import moment from 'moment/moment';
import {useQuasar} from 'quasar';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({left: 0, top: 0}),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  const store = useAuthStore()
  const $q = useQuasar()

  if (!!store.token) {
    store.setToken(store.token)
  }

  Router.beforeEach(async (to, from, next) => {


    if (to.matched.some(record => record.meta.requiresAuth)) {
      // If token doesn't exist redirect to auth
      if (!store.token) next({name: 'login', query: {next: to.fullPath}})

      // If user doesn't exist or token is expired redirect to auth
      if (!store.user || moment(store.token.expiration).isBefore(moment()))
        await store.verifyToken((message) => {
          $q.notify({
            message,
            type: 'negative',
            position: 'top'
          })
          next({name: 'login', query: {next: to.fullPath}})
        })
    }

    /*if (store.getCurrentUser?.role != 'SUPERADMIN' && to.matched.some(record => record.meta.authorizedGroups)) {
      const authorizedGroup: any = to.meta.authorizedGroups
      const permissions: Array<string> = store.getCurrentUser?.role_relation?.permissions ?? []
      if (!permissions || !permissions.find(it => it == authorizedGroup)) {
        next({path: '/unauthorized'})
      }
    }*/

    next()
  })

  return Router;
});
