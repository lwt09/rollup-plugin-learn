export default function customerAlias(options) {
  const aliasConfig = getAlias(options);
  console.log(aliasConfig);

  return {
    name: 'my-alias',

    // 当前模块路径、引用当前模块的模块路径、其余参数
    resolveId(importee, importer, resolveOptions) {
        // const path = Object.keys(aliasConfig).find(item => importee.)
    },
  };
}

/**
 * [
 *      {from: 'string' , to: 'string'}
 * ]
 * @param {*} options
 * @return from : to
 */
function getAlias(options) {
  const entires = {};
  options.map((item) => {
    entires[item.from] = item.to;
  });
  return entires;
}
