'use strict'

/** 
 *    @author Ericson Weah Dev  
 *    email: ericson.weah@ericsonweah.dev
 *    github: https://github.com/ericson-weah-dev
 *    phone: +1.385.204.5167
 *    Website: https://www.ericsonweah.dev
 *
 * 
 * @module Router
 * @kind class
 * 
 * @extends Base
 * @requires Base
 * 
 * @classdesc Router class
 */


class Router extends require('./base') {

  constructor(...arrayOfObjects) {

    super({ objectMode: true, encoding: "utf-8", autoDestroy: true });

    arrayOfObjects.forEach(option => {
        if(Object.keys(option).length > 0){
          Object.keys(option).forEach((key) => { if(!this[key]) this[key] = option[key];})
        }
    });

    // auto bind methods
    this.autobind(Router);
    // auto invoke methods
    this.autoinvoker(Router);
    // add other classes method if methods do not already exist. Argument order matters!
    // this.methodizer(..classList);
    //Set the maximum number of listeners to infinity
    this.setMaxListeners(Infinity);
  }

    // Available default HTTP methods for mounting to Router
    methodList() {
        return ['get', 'post', 'put', 'delete', 'patch']
    }

    // Mounting HTTP Method To Router : GET Method
    get(path, fn = () => {}) {
        let router = {}
        return router[path] = this.app.get(path, fn)
    }

    // Mounting HTTP Method To Router : POST Method
    post(path, fn = () => {}) {
        let router = {}
        return router[path] = this.app.post(path, fn)
    }
    // Mounting HTTP Method To Router : PUT Method
    put(path, fn = () => {}) {
        let router = {}
        return router[path] = this.app.put(path, fn)
    }
    // Mounting HTTP Method To Router : DELETE Method
    delete(path, fn = () => {}) {
        let router = {}
        return router[path] = this.app.delete(path, fn)
    }
    // Mounting HTTP Method To Router : PATCH Method
    patch(path, fn = () => {}) {
        let router = {}
        return router[path] = this.app.patch(path, fn)
    }

}

module.exports = Router