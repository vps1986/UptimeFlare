// uptime.config.ts

import type { PageConfig, WorkerConfig, MaintenanceConfig } from './src/types'

/**
 * =========================
 * 状态页（中文美化 + 分组展示）
 * =========================
 */
export const pageConfig: PageConfig = {
  title: 'KVX 状态页',
  description: '网站与节点可用性监控',

  links: [
    { link: 'https://kvx.me', label: '博客', highlight: true },
    { link: 'https://pan.sepr.cc', label: '网盘' },
    { link: 'https://45678.eu.org', label: '图床1' },
    { link: 'https://img.kvx.me', label: '图床2' },
  ],

  // 分组展示（写 monitor 的 id）
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
 * Worker 监控（不同组不同频率）
 * =========================
 * 网站：2 分钟一次
 * 节点：1 分钟一次（TCP 22 端口探测）
 */
export const workerConfig: WorkerConfig = {
  monitors: [
    /**
     * ===== 🌐 网站服务（2 分钟） =====
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
      tooltip: 'KVX 博客主站',
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
      tooltip: '文件网盘服务',
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
      tooltip: '图床服务 1',
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
      tooltip: '图床服务 2',
    },

    /**
     * ===== 🖥 节点 / SSH（1 分钟）=====
     * 仅 TCP 端口探测，不登录 SSH
     */
    {
      id: 'ssh-ggc',
      name: '🇺🇸 乔治 ggc（SSH）',
      method: 'TCP_PING',
      target: '23.173.152.59:22',
      timeout: 10000,
      interval: 1,
      tooltip: 'TCP 22 端口探测',
    },
    {
      id: 'ssh-diylink',
      name: '🇺🇸 diylink（SSH）',
      method: 'TCP_PING',
      target: '156.255.90.199:22',
      timeout: 10000,
      interval: 1,
      tooltip: 'TCP 22 端口探测',
    },
    {
      id: 'ssh-ikoula',
      name: '🇫🇷 ikoula（SSH）',
      method: 'TCP_PING',
      target: '109.238.6.180:22',
      timeout: 10000,
      interval: 1,
      tooltip: 'TCP 22 端口探测',
    },
    {
      id: 'ssh-aliyun',
      name: '🇸🇬 阿里云（SSH）',
      method: 'TCP_PING',
      target: '8.219.168.105:22',
      timeout: 10000,
      interval: 1,
      tooltip: 'TCP 22 端口探测',
    },
  ],
}

/**
 * =========================
 * 维护窗口（必须导出，util.ts 会 import）
 * =========================
 */
export const maintenances: MaintenanceConfig[] = []

/**
 * 有的地方可能用 default export，这里也一并提供（不影响具名导出）
 */
export default {
  pageConfig,
  workerConfig,
  maintenances,
}
