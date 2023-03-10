export default class {
  static key() {
    let searchParam = window.location.search.split("?")[1]
    let path = (window.location.pathname || '').replace(/\//g, '');
    if (path.length == 0) path = undefined

    if (searchParam) {
      return searchParam
    } else {
      return path
    }
  }
  static pathname = window.location.pathname
}
