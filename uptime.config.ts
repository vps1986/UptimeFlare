// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

/**
 * =========================
 * Status Page（中文美化 + 分组）
 * 你这个版本的 PageConfig.group 是 string[][]
 * 写法：['组名', 'monitorId1', 'monitorId2', ...]
 * =========================
 */
const pageConfig: PageConfig = {
  title: 'KVX 状态页',

  links: [
    { link: 'https://kvx.me', label: '博客', highlight: true },
    { link: 'https://pan.sepr.cc', label: '网盘' },
    { link: 'https://45678.eu.org', label: '图床1' },
    { link: 'https://img.kvx.me', label: '图床2' },
  ],

  // ✅ 分组：每个数组第一个元素是“组名”，后面是 monitor id
  group: [
    ['🌐 网站服务', 'kvx-blog', 'pan-sepr', 'img-45678', 'img-kvx'],
    ['🖥 节点 / SSH', 'ssh-ggc', 'ssh-diylink', 'ssh-ikoula', 'ssh-aliyun'],
  ],
}

/**
 * =========================
 * Worker monitors（不同组不同频率）
 * - 网站：2 分钟一次
 * - 节点：1 分钟一次
 * =========================
 */
const workerConfig: WorkerConfig = {
  monitors: [
    /**
     * ===== 🌐 网站服务（2 分钟）=====
     */
    {
      id: 'kvx-blog',
      name: '📝 kvx.me（博客）',
      method: 'GET',
      target: 'https://kvx.me',
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
      statusPageLink: 'https://img.kvx.me',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
      interval: 2,
    },

    /**
     * ===== 🖥 节点 / SSH（1 分钟）=====
     * 仅 TCP 22 端口探测（不登录）
     */
    {
      id: 'ssh-ggc',
      name: '🇺🇸 乔治 ggc（SSH）',
      method: 'TCP_PING',
      target: '23.173.152.59:22',
      timeout: 10000,
      interval: 1,
    },
    {
      id: 'ssh-diylink',
      name: '🇺🇸 diylink（SSH）',
      method: 'TCP_PING',
      target: '156.255.90.199:22',
      timeout: 10000,
      interval: 1,
    },
    {
      id: 'ssh-ikoula',
      name: '🇫🇷 ikoula（SSH）',
      method: 'TCP_PING',
      target: '109.238.6.180:22',
      timeout: 10000,
      interval: 1,
    },
    {
      id: 'ssh-aliyun',
      name: '🇸🇬 阿里云（SSH）',
      method: 'TCP_PING',
      target: '8.219.168.105:22',
      timeout: 10000,
      interval: 1,
    },
  ],
}

/**
 * =========================
 * Maintenances（不需要就空数组）
 * =========================
 */
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
