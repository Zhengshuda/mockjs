// 请使用优化以下代码：

// 假设已经存在以下3个函数，3个函数的功能都是向服务器上传文件，根据不同的上传类型参数都会不一样。内容的实现这里无须关注
// 请重新设计一个功能，根据不同文件的后缀名，上传到不同的服务器。
// txt 上传到 ftp
// exe 上传到 sftp
// doc 上传到 http
function uploadByFtp(file: string): Promise<boolean> {
    return new Promise(resolve => resolve(true));
}

function uploadBySftp(file: string[], cb: (ret: boolean) => void): void {
    cb(true);
}

function uploadByHttp(file: string): boolean {
    return true;
}

// 优化后的代码如下
const uploadTxt = async (file: string) => {
    console.trace(`${file} upload by ftp.`);

    const res = await uploadByFtp(file);

    if (!res) {
        return Promise.reject();
    }
    return true;
}

const uploadExe = (file: string) => {
    console.trace(`${file} upload by sftp.`);

    return new Promise<boolean>((resolve, reject) => {
        uploadBySftp([file], ret => {
            if (ret) {
                resolve(true);
            } else {
                reject();
            }
        });
    });
}

const uploadDoc = async (file: string) => {
    console.trace(`${file} upload by http.`)

    const res = await Promise.resolve(uploadByHttp(file));
    if (!res) {
        return Promise.reject();
    }
    return true;
}

const uploadFuncMap = {
    txt: uploadTxt,
    doc: uploadDoc,
    exe: uploadExe,
};

function getFileExt(file: string) {
    return file.match(/.(\w+)$/)?.[1];
}

function upload(files: string[]): Promise<boolean> {
    const promises = files.map(file => {
        const ext = getFileExt(file);

        if (!ext) {
            console.warn(`file ${file} has no extention.`)
            return;
        }
        const uploadFunc = uploadFuncMap[ext];

        if (uploadFunc) {
            return uploadFunc(file);
        } else {
            return Promise.reject(`Unsupported file type: ${ext}`);
        }
    });

    return Promise.all(promises).then(() => {
        console.log('upload success.');
        return true;
    }).catch(() => {
        console.log('upload failed.');
        return false;
    });
}

// 实现如下
// function upload(files: string[]): Promise<boolean> {
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