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

// 实现如下
function upload (files: string[]): Promise<boolean> {
    return Promise.all(files.filter(file => {
        return IsFileError(file);
    }).map(file => {
        dealFile(file)
    })).then(() => {
        console.log('upload success.')
        return true
    })
}

// 判断传入的文件的类型是否错误
function IsFileError(file) {
    if(!file) {
        console.error('未提供文件的名称');
        return null;
    }
    const ext = file.match(/\.(\w+)$/)[1]
    if (ext !== 'txt' && ext !== 'ext' && ext !== 'doc') {
        return false
    }
    return true
}

// 处理文件
function dealFile(file) {
    if(!file) {
        console.error('未提供文件的名称');
        return null;
    }
    const ext = file.match(/\.(\w+)$/)[1]
    if(actionMap[ext]) {
        actionMap[ext](file)    
    }
}

const actionMap = {
    txt: uploadByFtpFun,
    exe: uploadBySftpFun,
    doc: uploadByHttpFun,
}

function uploadByFtpFun(file) {
    return uploadByFtp(file)
}

function uploadBySftpFun(file) {
    return new Promise((resolve, reject) => {
        uploadBySftp([file], ret => {
            if (ret) {
                resolve(true)
            } else {
                reject()
            }
        })
    })
}

function uploadByHttpFun(file) {
    return Promise.resolve(uploadByHttp(file))
}






