// This is a simplified config file
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
   * ✅ 分组（你的类型是 PageConfigGroup：Record<string, string[]>）
   * 写法：{ '组名': ['monitorId1','monitorId2'] }
   */
  group: {
    '🌐 网站服务': ['kvx-blog', 'pan-sepr', 'img-45678', 'img-kvx'],
    '🖥 节点 / SSH': ['ssh-ggc', 'ssh-diylink', 'ssh-ikoula', 'ssh-aliyun'],
  },
}

const workerConfig: WorkerConfig = {
  monitors: [
    /**
     * =========================
     * 🌐 网站服务（2 分钟一次）
     * =========================
     */
    {
      id: 'kvx-blog',
      name: '📝 kvx.me（博客）',
      method: 'GET',
      target: 'https://kvx.me',
      tooltip: 'KVX 博客主站',
      statusPageLink: 'https://kvx.me',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
      interval: 2,
    },
    {
      id: 'pan-sepr',
      name: '🗂️ pan.sepr.cc（网盘）',
      method: 'GET',
      target: 'https://pan.sepr.cc',
      tooltip: '网盘服务',
      statusPageLink: 'https://pan.sepr.cc',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
      interval: 2,
    },
    {
      id: 'img-45678',
      name: '🖼️ 45678.eu.org（图床1）',
      method: 'GET',
      target: 'https://45678.eu.org',
      tooltip: '图床服务 1',
      statusPageLink: 'https://45678.eu.org',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
      interval: 2,
    },
    {
      id: 'img-kvx',
      name: '🖼️ img.kvx.me（图床2）',
      method: 'GET',
      target: 'https://img.kvx.me',
      tooltip: '图床服务 2',
      statusPageLink: 'https://img.kvx.me',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
      interval: 2,
    },

    /**
     * =========================
     * 🖥 节点 / SSH（1 分钟一次）
     * TCP 22 端口探测（不登录 SSH）
     * =========================
     */
    {
      id: 'ssh-ggc',
      name: '🇺🇸 乔治 ggc（SSH）',
      method: 'TCP_PING',
      target: '23.173.152.59:22',
      tooltip: 'TCP 22 端口探测',
      timeout: 10000,
      interval: 1,
    },
    {
      id: 'ssh-diylink',
      name: '🇺🇸 diylink（SSH）',
      method: 'TCP_PING',
      target: '156.255.90.199:22',
      tooltip: 'TCP 22 端口探测',
      timeout: 10000,
      interval: 1,
    },
    {
      id: 'ssh-ikoula',
      name: '🇫🇷 ikoula（SSH）',
      method: 'TCP_PING',
      target: '109.238.6.180:22',
      tooltip: 'TCP 22 端口探测',
      timeout: 10000,
      interval: 1,
    },
    {
      id: 'ssh-aliyun',
      name: '🇸🇬 阿里云（SSH）',
      method: 'TCP_PING',
      target: '8.219.168.105:22',
      tooltip: 'TCP 22 端口探测',
      timeout: 10000,
      interval: 1,
    },
  ],
}

// 维护窗口：不需要就留空数组（最干净）
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
