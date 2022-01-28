'use strict';

/**
 * Module dependencies.
 */

const Notifier = require('notifier');
const pug = require('pug');
const config = require('../../config');

/**
 * Process the templates using swig - refer to notifier#processTemplate method
 *
 * @param {String} tplPath
 * @param {Object} locals
 * @return {String}
 * @api public
 */

Notifier.prototype.processTemplate = function(tplPath, locals) {
  locals.filename = tplPath;
  return pug.renderFile(tplPath, locals);
};

/**
 * Expose
 */

module.exports = {
  /**
   * Comment notification
   *
   * @param {Object} options
   * @param {Function} cb
   * @api public
   */

  comment: function(options, cb) {
    const article = options.article;
    const author = article.user;
    const user = options.currentUser;
    const notifier = new Notifier(config.notifier);

    const obj = {
      to: author.email,
      from: 'your@product.com',
      subject: `${ user.name } ha añadido un comentario en tu articulo ${ article.title }`,
      alert: `${ user.name } comenta: ${ options.comment }`,
      locals: {
        to: author.name,
        from: user.name,
        body: options.comment,
        article: article.name
      }
    };

    // apple push notifications
    /*notifier.use({
      APN: true
      parseChannels: ['USER_' + author._id.toString()]
    })*/

    try {
      notifier.send('comment', obj, cb);
    } catch (err) {
      console.log(err);
    }
  }
};
