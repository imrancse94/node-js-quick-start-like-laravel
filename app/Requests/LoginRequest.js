const _ = require('lodash');
var Validator = require("validatorjs");
const { app_status_code } = require('../../constant');

module.exports = (request, response, next, rules) => {

  Validator.registerAsync('unique', async function (value, attribute, req, passes) {

    var attr_arrays = attribute.split(',');
    if (attr_arrays.length < 2 || attr_arrays.length > 3) {
      //passes(false, `attribute must be in format collection name,field_name`);
      return false;
    }

    var collection_name = attr_arrays[0];
    var field_name = attr_arrays[1];
    if (attr_arrays[2]) {
      var id = attr_arrays[2];
    }

    // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    //   passes(false, `id is not a valid ObjectId`);
    //   return;
    // }

    console.log('value', id);

    try {
      const schema = require(`./../Schema/${collection_name}`);
      const model = new schema();
      var filter = {};
      filter[field_name] = value;

      if (id) {
        var mongoose = require('mongoose');
        if (mongoose.Types.ObjectId.isValid(id)) {

        }
        filter['_id'] = { $ne: mongoose.Types.ObjectId(id) };
      }
      console.log('filter', filter);
      const modelData = await schema.find(filter);
      //console.log('modelData', modelData.length);
      if (modelData.length > 0) {
        passes(false, `${field_name} already exists`);
        return false;
      }
    } catch (e) {
      console.log('e', e);
    }


    passes();
  });

  var validation = new Validator(request.body, rules);

  validation.checkAsync(() => {
    next();
  }, () => {
    return senApiErrorResponse(response, app_status_code.validation_error, "Validation Error", validation.errors.all());
  });
}