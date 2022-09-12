import * as React from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';

 import { setTokenInRequest} from './apolloClient';
const getDisplayName = (Component: { displayName: any; name: any; }) =>
  Component.displayName || Component.name || 'Component';

export const auth = (ctx: { req: any; res?: any; }) => {
  const { token, userId } = nextCookie(ctx);
console.log('logs:',ctx)
  if (ctx.req && !token) {
       {/* @ts-ignore */}
    ctx.res.writeHead(307, { Location: '/' });
       {/* @ts-ignore */}
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push('/');
  }

  return { token, userId };
};

export const withAuthSync = WrappedComponent =>
  class extends React.Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx: { req: any; res?: any; }) {
      const { token, userId } = auth(ctx);
      await  setTokenInRequest(token);

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token, userId };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };