import ReactGA from 'react-ga'
//https://github.com/fus-marcom/ci-react/blob/master/utils/analytics.js
export const initGA = () => {
  //tracking number ''
  ReactGA.initialize('')
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}