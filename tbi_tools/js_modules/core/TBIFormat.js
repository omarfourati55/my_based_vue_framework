import{ sprintf } from 'sprintf-js'

export class TBIFormatString {
  static format(text, args) {
    return sprintf(text, args);
  }
}

