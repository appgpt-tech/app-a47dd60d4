//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import {
  ProductsList,
  ProductsCreate,
  ProductsEdit,
} from './resources/Products';
import {
  ProductCategoriesList,
  ProductCategoriesCreate,
  ProductCategoriesEdit,
} from './resources/ProductCategories';
import {
  CategoriesList,
  CategoriesCreate,
  CategoriesEdit,
} from './resources/Categories';
import {
  CustomersList,
  CustomersCreate,
  CustomersEdit,
} from './resources/Customers';
import { OrdersList, OrdersCreate, OrdersEdit } from './resources/Orders';
import {
  OrderDetailsList,
  OrderDetailsCreate,
  OrderDetailsEdit,
} from './resources/OrderDetails';
import ProductsIcon from '@mui/icons-material/ShoppingCart';
import ProductCategoriesIcon from '@mui/icons-material/Category';
import CategoriesIcon from '@mui/icons-material/Category';
import CustomersIcon from '@mui/icons-material/Person';
import OrdersIcon from '@mui/icons-material/ShoppingCart';
import OrderDetailsIcon from '@mui/icons-material/ListAlt';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/a47dd60d4">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="Products"
          options={{ label: 'Products' }}
          list={ProductsList}
          create={ProductsCreate}
          edit={ProductsEdit}
          recordRepresentation="name"
          icon={ProductsIcon}
        />
        <Resource
          name="ProductCategories"
          options={{ label: 'Product Categories' }}
          list={ProductCategoriesList}
          create={ProductCategoriesCreate}
          edit={ProductCategoriesEdit}
          recordRepresentation="id"
          icon={ProductCategoriesIcon}
        />
        <Resource
          name="Categories"
          options={{ label: 'Categories' }}
          list={CategoriesList}
          create={CategoriesCreate}
          edit={CategoriesEdit}
          recordRepresentation="name"
          icon={CategoriesIcon}
        />
        <Resource
          name="Customers"
          options={{ label: 'Customers' }}
          list={CustomersList}
          create={CustomersCreate}
          edit={CustomersEdit}
          recordRepresentation="name"
          icon={CustomersIcon}
        />
        <Resource
          name="Orders"
          options={{ label: 'Orders' }}
          list={OrdersList}
          create={OrdersCreate}
          edit={OrdersEdit}
          recordRepresentation="id"
          icon={OrdersIcon}
        />
        <Resource
          name="OrderDetails"
          options={{ label: 'Order Details' }}
          list={OrderDetailsList}
          create={OrderDetailsCreate}
          edit={OrderDetailsEdit}
          recordRepresentation="id"
          icon={OrderDetailsIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
