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
    _createValue(valueData, addClass) {
        const value = $('<div>');
        const valueType = typeof(valueData);
        let valueContent='';
        value.addClass("console__value");
        value.addClass(valueType);
        if (addClass) {
            value.addClass(addClass);
        }
        if (valueData instanceof Array){
            value.addClass('array');
            value.removeClass(valueType);
            return this._renderObj(valueData);
        }else if (valueType === 'function'){
            valueContent = `<function> ${valueData.name?valueData.name:'anonymous'}`;
        }else if (valueType === 'object'){
            return this._renderObj(valueData);
        }else{
            valueContent = `${valueData}`;
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
        if (obj instanceof Array){
            block.addClass('array');
        }
        if (typeof (obj) === 'object') {
            let itemCount = Object.keys(obj).length;
            Object.keys(obj).forEach(key => {
                const keyBlock = this._createKey(key);
                let value;
                itemCount--;
                if (obj[key] instanceof Array) {
                    value = this._renderObj(obj[key]);
                } else {
                    value = this._createValue(obj[key]);
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