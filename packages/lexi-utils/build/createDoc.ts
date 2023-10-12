
import fs from 'fs';
import path from 'path';

export function readFileByFolder(options: any) {
    // 读取src目录下所有以.test.ts结尾的文件
    const { folder } = options;
    const files = fs.readdirSync(path.resolve(__dirname, `../${folder}`));
    files.forEach((file) => {
      // 判断是否时一个文件夹
      const isDir = fs
        .statSync(path.resolve(__dirname, `../${folder}/${file}`))
        .isDirectory();
  
      if (isDir) {
        readFileByFolder({
          folder: `${folder}/${file}`,
        });
        return;
      } else {
        // 判断file是否是以.test.ts结尾的文件
        if (file.endsWith('test.ts')) {
          console.log('file====>', file);
          // 读取file文件内容
          const fileContent = fs.readFileSync(
            path.resolve(__dirname, `../${folder}/${file}`),
            'utf-8'
          );
          console.log('fileContent', fileContent);
          // test('input is  Object', () => {
          //   expect(isObject({})).toBe(true);
          //   expect(isObject([])).toBe(false);
          //   expect(isObject(1)).toBe(false);
          //   expect(isObject('')).toBe(false);
          //   expect(isObject(null)).toBe(false);
          //   expect(isObject(undefined)).toBe(false);
          //   expect(isObject(true)).toBe(false);
          //   expect(isObject(null)).toBe(false);
          // });
          // 正则匹配 test函数中的第一个和第二个参数
          const reg= new RegExp(/test\((.*),(.*)\)$/g);
            // 正则匹配方法的第一个，第二个参数 test(1,2) 匹配结果为1，2

            fileContent.split('test(').slice(1).forEach((item)=>{
            console.log('item====>',item);
            // 正则获取()=>前面的内容
            const reg1 = new RegExp(/(.*)\(/);
            const res = item.match(reg1);
            console.log('res',res);
            
           })
      
          // const reg = new RegExp(/test\((.*)\,(.*)\)/);
        
          
          // // const reg = new RegExp(/test/);
          // const res = fileContent.match(reg);
          // console.log('res', res);
        }
      }
    });
  }