var Ajax = require('superagent');

/**
 * A simple translation class, querying Google Translate via YQL
 *
 * @class   Translator
 * @param   {Object}    options     Valid options are "from" and "to". Both should be language codes.
 * @constructor
 */
function Translator(options) {
    this.options = options || {};

    if(this.options.from === undefined) {
        this.options.from = 'auto';
    }

    if(this.options.to === undefined) {
        this.options.to = 'en';
    }
}

/**
 * Set the input language
 *
 * @method  from
 * @param   {String}    language    A valid language code
 * @return  {Translator}
 * @chainable
 */
Translator.prototype.from = function(language) {
    this.options.from = language;

    return this;
};

/**
 * Set the input language
 *
 * @method  from
 * @param   {String}    language    A valid language code
 * @return  {Translator}
 * @chainable
 */
Translator.prototype.to = function(language) {
    this.options.to = language;

    return this;
};

/**
 * Translates some text from the input language to the output langage
 *
 * @method  from
 * @param   {String}    string      The string to translate
 * @param   {Function}  callback    The callback receives an error (or null), and the translated string
 * @return  {Translator}
 * @chainable
 */
Translator.prototype.translate = function(string, callback) {
    var yql = 'select * from google.translate where q="' + string + '" and source="' + this.options.from + '" and target="' + this.options.to + '"',
        url = 'https://query.yahooapis.com/v1/public/yql?env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&format=json&q=' + encodeURIComponent(yql);

    Ajax.get(url).end(function(err, res) {
        if(err) {
            callback(err);
        } else {
            callback(null, res.body.query.results.json.sentences.trans);
        }
    });

    return this;
};

module.exports = Translator;