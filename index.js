'use strict';
var fis = require('fis-plus');
var bt = require('./bd-template.js');

bt.MODULE_PATH = 'common:widget/js/util/template/template.js';
bt.LEFT_DELIMITER = '<#';
bt.RIGHT_DELIMITER = '#>';

module.exports = function(content, file, conf){
    fis.util.map(conf, bt, true);
    content = bt._compile(content).toString().replace(/^function anonymous/, 'function');
    return '[' + content + '][0]';
};