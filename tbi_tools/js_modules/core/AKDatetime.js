import  { format, parse } from 'date-fns'

export const tbiDefaultDateFormats = {
    de_DE: 'dd.MM.yyyy',
    en_EN: 'yyyy-MM-dd',
};

export class AKDateTime {
    constructor(locale = 'de_DE') {
        this.defaultDateFormat = tbiDefaultDateFormats.hasOwnProperty(locale)
            ? tbiDefaultDateFormats[locale]
            : tbiDefaultDateFormats['de_DE'];
    }

    /**
     *
     * @param {Date} date
     * @returns {string}
     */
    formatDate(date) {
        return format(date, this.defaultDateFormat);
    }

    /**
     *
     * @param {string} dateString
     * @returns {Date}
     * @example
     * parseDate('01.01.2023') => Sun Jan 01 2023 00:00:00 GMT+0100
     */
    parseDate(dateString) {
        return parse(dateString, this.defaultDateFormat, new Date());
    }
}
