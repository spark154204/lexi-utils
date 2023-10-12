import * as vite from 'vite';

import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url'; // fileURLToPath() 方法会返回一个从 URL 对象的 href 属性中解析出的绝对路径。
import { readFileByFolder } from './createDoc';

const __filename = fileURLToPath(import.meta.url); // __filenam 获取当前文件的绝对路径
const __dirname = dirname(__filename); // dirname() 方法会返回一个 path 的目录名

function run() {
  // 读取package.json文件内容，生成打包需要的新package.json文件
  const packageJson = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8')
  );
  const { description } = packageJson;
  const newPackageJson = {
    ...packageJson,
    description,
    exports: {
      '.': {
        import: './dist/lexi-utils.umd.js',
        types: './dist/types/index.d.ts',
      },
    },
  };
  console.log(
    '写入新的package.json文件',
    path.resolve(__dirname, '../dist/package.json')
  );

  // fs.writeFileSync(
  //   path.resolve(__dirname, '../dist/package.json'),
  //   JSON.stringify(newPackageJson, null, 4)
  // ); // JSON.stringify(newPackageJson, null, 4) 格式化json文件 4个空格缩进
}


export default function myVitePlugin(options): vite.Plugin {
  return {
    name: 'my-vite-plugin',

    config(config) {
      // 修改 Vite 配置
      // 读取src目录下所有.ts的内容信息
    },

    buildStart() {
      readFileByFolder({
        folder: 'src',
      });
      console.log('start');
      // 在构建开始时执行任务
    },

    configureServer(server) {
      // console.log('server', server);
      // 在开发服务器启动时执行任务
    },
    transform(code, id, options) {
    },
    closeBundle() {
      run();
    },
  };
}
