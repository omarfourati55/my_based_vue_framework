import lodash from 'lodash'

export class TBITimings {
    static debounce(func, delay) {
        return lodash.debounce(func, delay);
    }
}

