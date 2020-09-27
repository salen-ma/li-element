/**
 * 生成h5项目初始化代码
 * plop https://plopjs.com/
 * 模板引擎 https://handlebarsjs.com/
 */

module.exports = plop => {
  plop.setGenerator('newPackage', {
    description: '创建一个新项目',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '输入项目名称'
      }
    ],
    actions: data => {
      data.pkgName = `li-${data.name}`
      data.compName = `Li${data.name[0].toUpperCase() + data.name.slice(1)}`                      
      let actions = [
        {
          type: 'add',
          path: 'packages/{{name}}/index.js',
          templateFile: 'plop-templates/index.js.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{name}}/package.json',
          templateFile: 'plop-templates/package.json.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{name}}/README.md',
          templateFile: 'plop-templates/README.md.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{name}}/LICENSE',
          templateFile: 'plop-templates/LICENSE.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{name}}/src/{{name}}.vue',
          templateFile: 'plop-templates/src/index.vue.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{name}}/__tests__/{{name}}.spec.js',
          templateFile: 'plop-templates/__tests__/index.spec.js.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{name}}/stories/{{name}}.stories.js',
          templateFile: 'plop-templates/stories/index.stories.js.hbs'
        }
      ]

      return actions
    }
  })
}
