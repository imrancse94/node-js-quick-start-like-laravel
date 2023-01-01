var Validator = require("validatorjs");
Validator.registerAsync('unique', async function (value, attribute, req, passes) {

    var attr_arrays = attribute.split(',');
    if (attr_arrays.length < 2 || attr_arrays.length > 3) {
        passes(false, `attribute must be in format collection name,field_name`);
        return false;
    }

    var collection_name = attr_arrays[0];
    var field_name = attr_arrays[1];
    var id = "";
    if (attr_arrays[2]) {
        id = attr_arrays[2];
    }

    // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    //   passes(false, `id is not a valid ObjectId`);
    //   return;
    // }

    //console.log('value', id);
    var modelData = {};

    try {
        const schema = require(`./../Models/${collection_name}`);
        var filter = {};
        filter[field_name] = value;

        if (id) {
            var mongoose = require('mongoose');
            if (mongoose.Types.ObjectId.isValid(id)) {
                modelData = await schema.where(filter).where('_id').ne(id);
            }
        }else{
            modelData = await schema.where(filter);
        }

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

module.exports = (request, response, next, rules,c_messages = {}) => {
    try {
        var validation = new Validator(request.body, rules, c_messages);
//console.log('c_messages',validation.errors.all());
        validation.checkAsync(() => {
            next();
        }, () => {
            return sendApiErrorResponse(response, app_status_code.validation_error, "Validation Error", validation.errors.all());
        });
    }catch (e){
        next(e)
    }

}
