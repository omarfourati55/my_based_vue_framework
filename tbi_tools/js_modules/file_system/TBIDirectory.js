import fs from 'fs'
import path from 'path'

export class TBIDirectory {
    copyTwoDirectories(sourceDir, destinationDir) {
        const copyRecursive = (source, destination) => {
            const sourceStats = fs.statSync(source);
            if (sourceStats.isDirectory()) {
                fs.mkdirSync(destination, { recursive: true });
                fs.readdirSync(source).forEach((file) => {
                    const sourceFile = path.join(source, file);
                    const destinationFile = path.join(destination, file);
                    copyRecursive(sourceFile, destinationFile);
                });
            } else if (sourceStats.isFile()) {
                fs.copyFileSync(source, destination);
            }
        };
        copyRecursive(sourceDir, destinationDir);
    }
}

