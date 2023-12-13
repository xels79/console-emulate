/**
 * 
 * Для оформления вывода use jQuery
 *  
 */
class MyConsole {
    constructor(id) {
        this._console = $(id);
    }
    clear() {
        this._console.children().remove();
    }
    log(obj) {
        const el = this._renderObj(obj);
        this._console.append(el);
        this._console.scrollTop(this._console[0].scrollHeight);
    }
    _createKey(keyName, addClass) {
        const key = $('<div>');
        key.addClass("console__key");
        if (addClass) {
            key.addClass(addClass);
        }
        key.text(keyName);
        return key;
    }
    _createValue(valueContent, addClass) {
        const value = $('<div>');
        value.addClass("console__value");
        if (addClass) {
            value.addClass(addClass);
        }
        value.append($("<pre>").text(valueContent));
        return value;

    }
    _createLine(key, value, addClass) {
        const line = $('<div>');
        line.addClass('console__line');
        if (key) {
            line.append(key);
        }
        if (value) {
            line.append(value);
        }
        if (addClass) {
            line.addClass(addClass);
        }
        return line;
    }
    _renderObj(obj, addClass) {
        const block = $('<div>');
        block.addClass('console__block');
        if (addClass) {
            block.addClass(addClass);
        }
        if (typeof (obj) === 'object') {
            let itemCount = Object.keys(obj).length;
            Object.keys(obj).forEach(key => {
                const keyBlock = this._createKey(key);
                let value;
                itemCount--;
                if (obj[key] instanceof Array) {
                    value = this._renderObj(obj[key], 'array');
                } else {
                    switch (typeof (obj[key])) {
                        case "string":
                            value = this._createValue(`"${obj[key]}"`, 'string');
                            break;
                        case "number":
                            value = this._createValue(`${obj[key]}`, 'number');
                            break;
                        case "boolean":
                            value = this._createValue(`${obj[key]}`, 'bool');
                            break;
                        case "function":
                            keyBlock.addClass("funct__key")
                            value = this._createValue(`<function> ${obj[key].name}`, 'funct');
                            break;
                        case "object":
                            value = this._renderObj(obj[key]);
                            break;
                        default:
                            value = this._createValue(`<${typeof (obj[key])}>${obj[key]}`);
                            break;
                    }
                }
                block.append(this._createLine(keyBlock, value, itemCount ? 'comma' : ''));
            });
        } else {
            block.addClass('text')
            block.append(this._createLine(this._createValue(obj)));
        }
        return block;
    }
}