// uptime.config.ts
// 直接整文件替换你仓库根目录的 uptime.config.ts 即可

import type { PageConfig, WorkerConfig } from './src/types'

/**
 * =========================
 * 中文美化：状态页信息
 * =========================
 */
const pageConfig: PageConfig = {
  title: 'KVX 状态监控',
  description: '网站 & 节点可用性监控（UptimeFlare + Cloudflare Workers）',
  // 右上角链接（可自行增删）
  links: [
    { link: 'https://kvx.me', label: '博客' },
    { link: 'https://pan.sepr.cc', label: '网盘' },
    { link: 'https://github.com/vps1986/UptimeFlare', label: '项目' },
  ],

  /**
   * =========================
   * 分组（页面展示顺序）
   * =========================
   * 注意：分组只影响页面展示与排序，不影响监控本身。
   */
  groups: [
    {
      name: '🌐 网站服务',
      monitors: ['kvx-blog', 'pan-sepr', 'img-45678', 'img-kvx'],
    },
    {
      name: '🖥 节点 / SSH',
      monitors: ['ssh-ggc', 'ssh-diylink', 'ssh-ikoula', 'ssh-aliyun'],
    },
  ],
}

/**
 * =========================
 * 监控配置（Worker 端）
 * =========================
 * - HTTP/HTTPS：method 用 GET/POST 等，target 用 URL
 * - SSH/端口：method 用 TCP_PING，target 用 "ip:port"
 */
const workerConfig: WorkerConfig = {
  // 可选：若想私有状态页，取消注释并改成你自己的账号密码
  // passwordProtection: 'username:password',

  monitors: [
    /**
     * =========================
     * 🌐 网站服务（频率：每 2 分钟）
     * =========================
     */
    {
      id: 'kvx-blog',
      name: '📝 kvx.me 博客',
      method: 'GET',
      target: 'https://kvx.me',
      interval: 2, // 2 分钟一次（不同组不同频率：网站组）
      timeout: 10000,
      expectedCodes: [200, 301, 302],
    },
    {
      id: 'pan-sepr',
      name: '🗂️ pan.sepr.cc 网盘',
      method: 'GET',
      target: 'https://pan.sepr.cc',
      interval: 2,
      timeout: 10000,
      expectedCodes: [200, 301, 302],
    },
    {
      id: 'img-45678',
      name: '🖼️ 45678.eu.org 图床1',
      method: 'GET',
      target: 'https://45678.eu.org',
      interval: 2,
      timeout: 10000,
      expectedCodes: [200, 301, 302],
    },
    {
      id: 'img-kvx',
      name: '🖼️ img.kvx.me 图床2',
      method: 'GET',
      target: 'https://img.kvx.me',
      interval: 2,
      timeout: 10000,
      expectedCodes: [200, 301, 302],
    },

    /**
     * =========================
     * 🖥 节点 / SSH（频率：每 1 分钟）
     * =========================
     * 说明：这里只做 TCP 22 端口探测（不登录，更安全）
     */
    {
      id: 'ssh-ggc',
      name: '🇺🇸 乔治 ggc（SSH）',
      method: 'TCP_PING',
      target: '23.173.152.59:22',
      interval: 1, // 1 分钟一次（不同组不同频率：节点组）
      timeout: 10000,
    },
    {
      id: 'ssh-diylink',
      name: '🇺🇸 diylink（SSH）',
      method: 'TCP_PING',
      target: '156.255.90.199:22',
      interval: 1,
      timeout: 10000,
    },
    {
      id: 'ssh-ikoula',
      name: '🇫🇷 ikoula（SSH）',
      method: 'TCP_PING',
      target: '109.238.6.180:22',
      interval: 1,
      timeout: 10000,
    },
    {
      id: 'ssh-aliyun',
      name: '🇸🇬 阿里云（SSH）',
      method: 'TCP_PING',
      target: '8.219.168.105:22',
      interval: 1,
      timeout: 10000,
    },
  ],
}

export default {
  pageConfig,
  workerConfig,
}
