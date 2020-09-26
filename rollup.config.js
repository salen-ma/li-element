import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const isDev = process.env.NODE_ENV !== 'production'

// 公共插件配置
const plugins = [
  vue({
    css: true,
    compileTemplate: true
  }),
  json(),
  nodeResolve(),
  postcss({
    // 把 css 放到和 js 同一目录
    extract: true
  })
]

// 如果是生产环境，开启压缩
isDev || plugins.push(terser())

// packages 文件夹路径
const root = path.resolve(__dirname, 'packages')

module.exports = fs.readdirSync(root)
  // 只保留文件夹
  .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
  .map(item => {
    const pkg = require(path.resolve(root, item, 'package.json'))
    return {
      input: path.resolve(root, item, 'index.js'),
      output: [
        {
          export: 'auto',
          file: path.resolve(root, item, pkg.main),
          format: 'cjs'
        },
        {
          export: 'auto',
          file: path.resolve(root, item, pkg.module),
          format: 'es'
        }
      ],
      plugins
    }
  })