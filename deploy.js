const client = require('scp2');
const ora = require('ora');
const chalk = require('chalk');
const spinner = ora(chalk.green('正在发布到服务器...'));
spinner.start();

client.scp('./dist/', {    // 本地打包文件的位置
  "host": '140.210.193.35', // IP地址
  "port": '22',            // 服务器端口
  "username": 'root',       // 用户名
  "password": 'yu189910..',     // 密码
  "path": '/www/wwwroot/xy_oa'            // 项目路径
}, err => {
  spinner.stop();
  if (!err) {
    console.log(chalk.green("服务器部署完毕。"))
  } else {
    console.log("err", err)
  }
})
