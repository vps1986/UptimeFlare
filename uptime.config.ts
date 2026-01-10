// This is a simplified example config file for quickstart
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: 'KVX 状态页',

  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://kvx.me', label: '博客', highlight: true },
    { link: 'https://pan.sepr.cc', label: '网盘' },
    { link: 'https://45678.eu.org', label: '图床1' },
    { link: 'https://img.kvx.me', label: '图床2' },
  ],

  /**
   * 分组（你这个版本的类型是 PageConfigGroup：对象映射）
   * 写法：{ '组名': ['monitorId1', 'monitorId2'] }
   */
  group: {
    '🌐 网站服务': ['web-kvx', 'web-pan', 'web-img1', 'web-img2'],
    '🖥 节点 / SSH': ['ssh-ggc', 'ssh-diylink', 'ssh-ikoula', 'ssh-aliyun', 'ssh-alice6'],
  },
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    /**
     * =========================
     * 🌐 网站服务（HTTP）
     * =========================
     */
    {
      id: 'web-kvx',
      name: '📝 kvx.me（博客）',
      method: 'GET',
      target: 'https://kvx.me',
      tooltip: '博客主站',
      statusPageLink: 'https://kvx.me',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
    {
      id: 'web-pan',
      name: '🗂️ pan.sepr.cc（网盘）',
      method: 'GET',
      target: 'https://pan.sepr.cc',
      tooltip: '网盘服务',
      statusPageLink: 'https://pan.sepr.cc',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
    {
      id: 'web-img1',
      name: '🖼️ 45678.eu.org（图床1）',
      method: 'GET',
      target: 'https://45678.eu.org',
      tooltip: '图床服务 1',
      statusPageLink: 'https://45678.eu.org',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
    {
      id: 'web-img2',
      name: '🖼️ img.kvx.me（图床2）',
      method: 'GET',
      target: 'https://img.kvx.me',
      tooltip: '图床服务 2',
      statusPageLink: 'https://img.kvx.me',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },

    /**
     * =========================
     * 🖥 节点 / SSH（TCP 22）
     * =========================
     * 注意：这里只做 TCP 端口探测，不登录 SSH
     */
    {
      id: 'ssh-ggc',
      name: '🇺🇸 乔治 ggc（SSH:22）',
      method: 'TCP_PING',
      target: '23.173.152.59:22',
      tooltip: 'TCP 22 端口探测',
      timeout: 10000,
    },
    {
      id: 'ssh-diylink',
      name: '🇺🇸 diylink（SSH:22）',
      method: 'TCP_PING',
      target: '156.255.90.199:22',
      tooltip: 'TCP 22 端口探测',
      timeout: 10000,
    },
    {
      id: 'ssh-ikoula',
      name: '🇫🇷 ikoula（SSH:22）',
      method: 'TCP_PING',
      target: '109.238.6.180:22',
      tooltip: 'TCP 22 端口探测',
      timeout: 10000,
    },
    {
      id: 'ssh-aliyun',
      name: '🇸🇬 阿里云（SSH:22）',
      method: 'TCP_PING',
      target: '8.219.168.105:22',
      tooltip: 'TCP 22 端口探测',
      timeout: 10000,
    },
    {
      id: 'ssh-alice6',
      name: '🇫🇷 alice（IPv6 / SSH:22）',
      method: 'TCP_PING',
      // IPv6 请用 [IPv6]:port 格式，避免冒号导致 host:port 解析错误
      target: '[2a14:67c0:302:243::a]:22',
      tooltip: 'IPv6 TCP 22 端口探测',
      timeout: 10000,
    },
  ],
}

// 不需要维护窗口就留空
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
