import fs from 'fs'

export class TBIFile {
    copyFile(source, destination) {
        return new Promise((resolve, reject) => {
            const readStream = fs.createReadStream(source);
            const writeStream = fs.createWriteStream(destination);
            readStream.on('error', (err) => {
                reject(err);
            });
            writeStream.on('error', (err) => {
                reject(err);
            });
            writeStream.on('finish', () => {
                resolve();
            });
            readStream.pipe(writeStream);
        });
    }
}

/**
 * @typedef (object) TBIFileListSchema
 * @property (number) id
 * @property (string) name
 * @property (string) type
 * @property (string) size
 * @property (string) date
 * @property (string) apiLink
 */

export const TBIFileListSchema = {
    id: 0,
    name: '',
    type: '',
    size: '',
    date: '',
    apiLink: '',
};


