import "bootstrap/dist/css/bootstrap.min.css";
import App from "next/app";

export function redirectUser(ctx, location) {
  if (ctx.res && typeof ctx.res.writeHead === "function") {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  }
}
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (ctx.pathname === "/" || ctx.pathname === "/_error") {
      redirectUser(ctx, "/login");
      return { pageProps };
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      // <MainLayout {...pageProps.appProps}>
      <Component {...pageProps}></Component>
      // </MainLayout>
    );
  }
}
