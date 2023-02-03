export default function bundleReplace() {
  return {
    name: 'bundle-replace', // 名字用来展示在警告和报错中
    transform(bundle) {
      return bundle
        .replace('key_word', 'replace_word')
        .replace(/正则/, '替换内容');
    },
  };
}
