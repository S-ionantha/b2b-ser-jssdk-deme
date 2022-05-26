/**
 * @file: Redis
 * @author: sunziwen(sunziwen@baidu.com)
 */

/**
  * Redis 实例
  * 存储的值必须为Object，不能是字符串，目前提供的方法有
    * 单条数据
      * checkItem 检查单条数据是否在Redis中 
      * getItem 从Redis中获取单条数据
      * setItem 将数据存储到Redis中
    * Hash数据
      * checkHashItem 检查Hash数据是否在Redis中 
      * getHashItem 从Redis中获取Hash数据
      * setHashItem 将Hash数据存储到Redis中
*/

var redis = require("redis")
var bluebird = require('bluebird')
var { port, host, password, preFix } = require('../conf/redis')
var Client = null

// 使用bluebrid全部promise话
bluebird.promisifyAll(redis)

function fix(key) {
  return preFix + '_' + key
}
class Redis {
  constructor() {
    Client = redis.createClient(port, host, {
      password
    })
    Client.info((err, res) => {
      err && console.error('==连接redis失败==', err)
      console.log('==连接redis成功==')
    })
    // Client = bluebird.promisifyAll(Client)
  }

  /**
   * 检索当前是否存在这个值
   *
   * @param {String} key 
   */
  async checkItem(key) {
    try {
      let res = await Client.existsAsync(key)
      console.log('查询单条数据状态', res)
      return res
    } catch (error) {
      console.error(error)
      return false
    }
  }

  /**
   * 获取单条数据
   *
   * @param {String} key 
   */
  async getItem(key) {
    try {
      let res = await Client.getAsync(key)
      return JSON.parse(res)
    } catch (error) {
      console.error(error)
      return false
    }
  }

  async delItem(key) {
    try {
      let res = await Client.delAsync(key)
      return JSON.parse(res)
    } catch (error) {
      console.error(error)
      return false
    }
  }


  async incItem(key, total = 1) {
    let res = 0
    try {
      res = await Client.incrbyAsync(key, total)
    } catch (error) {
      console.error(error)
    }
    return res
  }

  /**
   * 设置单条数据
   *
   * @param {String} key 
   * @param {Object} value 
   * @param {Number} expire 
   */
  async setItem(key, value, expire = 60) {
    try {
      let res = await Client.setAsync(key, JSON.stringify(value))
      await Client.expireAsync(key, expire)
      return res
    } catch (error) {
      console.error(error)
      return false
    }
  }

  /**
   * 获取hash表
   *
   * @param {Object} obj 
  */
  async getHashItem(obj) {
    let { table, key } = obj
    try {
      let res = await Client.hgetAsync(fix(table), key)
      return JSON.parse(res)
    } catch (error) {
      console.error(error)
      return false
    }
  }

  /**
   * 获取hash表
   *
   * @param {Object} obj 
  */
  async getHashAll(table) {
    try {
      let res = await Client.hgetallAsync(fix(table))
      if (res) {
        for (let i in res) {
          res[i] = JSON.parse(res[i])
        }
      }
      return res
    } catch (error) {
      console.error(error)
      return false
    }
  }

  /**
   * 查询hash表状态
   *
   * @param {Object} obj 
   */
  async checkHashItem(obj) {
    let { table, key } = obj
    try {
      let res = await Client.hexistsAsync(fix(table), key)
      console.log('查询Hash数据状态', res)
      return res
    } catch (error) {
      console.error(error)
      return false
    }
  }

  /**
   * 更新hash表
   *
   * @param {Object} obj 
   */
  async setHashItem(obj) {
    let { table, key, value } = obj
    try {
      let res = await Client.hsetAsync(fix(table), key, JSON.stringify(value))
      return res
    } catch (error) {
      console.error(error)
      return false
    }
  }
}

module.exports = new Redis()