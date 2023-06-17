// 请使用优化以下代码：

// 假设已经存在以下3个函数，3个函数的功能都是向服务器上传文件，根据不同的上传类型参数都会不一样。内容的实现这里无须关注
// 请重新设计一个功能，根据不同文件的后缀名，上传到不同的服务器。
// txt 上传到 ftp
// exe 上传到 sftp
// doc 上传到 http
function uploadByFtp (file: string): Promise<boolean> {
    return new Promise(resolve => resolve(true))
}
function uploadBySftp (file: string[], cb: (ret: boolean) => void): void {
    cb(true)
}
function uploadByHttp (file: string): boolean {
    return true
}

// 将三个函数统一转换成 (file: string) => Promise<boolean> 类型
function uploadByFtpProm (file: string) {
    console.trace(`upload ${file} to ftp`);
    return uploadByFtp(file);
}

function uploadBySftpProm (file: string) {
    console.trace(`upload ${file} to sftp`);
    return new Promise<boolean>(resolve => {
        uploadBySftp([file], resolve);
    });
}

function uploadByHttpProm (file: string) {
    console.trace(`upload ${file} to http`);
    return new Promise<boolean>(resolve => {
        resolve(uploadByHttp(file));
    });
}

const uploadActionMap = {
    txt: uploadByFtpProm,
    exe: uploadBySftpProm,
    doc: uploadByHttpProm,
}

function getExt(file: string) {
    return file.match(/\.(\w+)$/)?.[1];
}

// 实现如
function upload(files: string[]) {
    return Promise.all(files.map(async file => {
        const ext = getExt(file);

        if (!ext) {
            console.warn(`${file} no has ext`);
            return Promise.resolve();
        }
        if (!Object.keys(uploadActionMap).includes(ext)) {
            console.warn(`${file} no has upload function`);
            return Promise.resolve();
        }

        const res = await uploadActionMap[ext](file);
        if (!res) {
            return Promise.reject(`upload ${file} fail`);
        }

        return Promise.resolve();
    })).then(() => {
        console.log('upload success.');
        return true;
    }).catch((err) => {
        console.error(err);
        return false;
    });
}

// function upload (files: string[]): Promise<boolean> {
//     return Promise.all(files.filter(file => {
//         const ext = file.match(/\.(\w+)$/)[1]
//         if (ext !== 'txt' && ext !== 'ext' && ext !== 'doc') {
//             return false
//         }
//         return true
//     }).map(file => {
//         const ext = file.match(/\.(\w+)$/)[1]
//         if (ext === 'txt') {
//             return uploadByFtp(file)
//         } else if (ext === 'exe') {
//             return new Promise((resolve, reject) => {
//                 uploadBySftp([file], ret => {
//                     if (ret) {
//                         resolve(true)
//                     } else {
//                         reject()
//                     }
//                 })
//             })
//         } else if (ext === 'doc') {
//             return Promise.resolve(uploadByHttp(file))
//         }
//     })).then(() => {
//         console.log('upload success.')
//         return true
//     })
// }


