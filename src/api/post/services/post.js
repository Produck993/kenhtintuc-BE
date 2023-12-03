'use strict';

/**
 * post service
 */

const { createCoreService } = require('@strapi/strapi').factories;
console.log(createCoreService);
module.exports = createCoreService('api::post.post');
