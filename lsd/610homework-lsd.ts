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

function dealSftp(file: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        uploadBySftp([file], ret => {
            if (ret) {
                resolve(true)
            } else {
                console.error(file, '上传失败');
                reject()
            }
        })
    })
}

function dealHttp (file: string): Promise<boolean> {
    return Promise.resolve(uploadByHttp(file))
}

const uploadMap = {
    txt: uploadByFtp,
    exe: dealSftp,
    doc: dealHttp
}

function getFileType(file: string): string {
    const res = file.match(/\.(\w+)$/)?.[1];
    if(!res) {
        console.error('传入的名称格式有误');
        return '';
    }
    return res;
}

function getTaskList (files: string[]): Promise<boolean>[] {
    return files.filter(file => {
        const ext = getFileType(file);
        if (!uploadMap[ext]) {
            console.log('传入的文件类型当前不支持上传');
            return false;
        }
        return true;
    }).map(file => {
        const ext = getFileType(file);
        return uploadMap[ext](file);
    });
}

// 实现如下
function upload (files: string[]): Promise<boolean> {
    return Promise.all(getTaskList(files)).then(() => {
        console.log('upload success.')
        return true
    }).catch(error => {
        console.error(error);
        return false;
    })
}


