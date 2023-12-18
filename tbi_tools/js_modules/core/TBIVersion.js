import {TBIFormatString} from "./TBIFormat.js";

/**
 * These are the formats you can print out the Version
 */
const TBIOutFormats = {
    IntFullString: '%(major)i.%(minor)i.%(patch)i',
    HexFullString: '%(major)02X.%(minor)02X.%(patch)02X',
};

/**
 * These are all the Version numbers itself
 */
const TBIVersionNumbersParam = {
    major: undefined,
    minor: undefined,
    patch: undefined,
    /**
     * here you can pass the Version as a Text. Format is 0.0.0.
     */
    byText: undefined,
};
export interface TBIVersionInterface {
    versions ;
    defaultOutFormat;
}
/**
 * This class is for a default version
 */
export class TBIVersion {
    /**
     * This ist the content of the current version
     */
    versions = { major: 0, minor: 0, patch: 0 };

    /**
     * This ist  the default toString format
     */
    defaultOutFormat = TBIOutFormats.IntFullString;

    /**
     * Constructor
     * @param passedVersion
     */
    constructor(passedVersion = TBIVersionNumbersParam) {
        if (passedVersion.minor !== undefined) {
            this.versions.minor = passedVersion.minor;
        }
        if (passedVersion.major !== undefined) {
            this.versions.major = passedVersion.major;
        }
        if (passedVersion.patch !== undefined) {
            this.versions.patch = passedVersion.patch;
        }
        if (passedVersion.byText !== undefined) {
            this.readByString(passedVersion.byText);
        }
    }

    readByString(versionText) {
        const decodePattern = /(\d{1,3})\.(\d{1,3})\.(\d{1,3})/;
        const arrayVersions = versionText.match(decodePattern);
        if (arrayVersions !== null) {
            if (arrayVersions.length > 3) {
                this.versions.major = Number(arrayVersions[1]);
                this.versions.minor = Number(arrayVersions[2]);
                this.versions.patch = Number(arrayVersions[3]);
            }
        }
    }

    toString() {
        const result = TBIFormatString.format(this.defaultOutFormat, this.versions);
        return result;
    }
}

