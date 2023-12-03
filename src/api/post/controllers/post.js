"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async test(ctx) {
    try {
    //   const { data } = await super.find(ctx);
      const data = await strapi.db.connection.raw(`SELECT`)

      return ctx.send(
        {
          data,
        },
        200
      );
    } catch (err) {
      return ctx.send({
        data: null,
        error: err.message,
      }, 500);
    }
  },

}));
