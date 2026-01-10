// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

/**
 * pageConfig：你的类型里没有 customFooter
 * 但项目页面通常会读取 customFooter 来替换默认页脚
 * 所以这里用类型断言塞进去，从而“去掉底部 Powered by”
 */
const pageConfig = {
  title: 'Kvx探针',

  links: [
    { link: 'https://www.nodeseek.com/space/25846#/general', label: '我的主页', highlight: true },
    { link: 'https://pan.sept.cc', label: '网盘' },
    { link: 'https://45678.eu.org', label: '图床1' },
    { link: 'https://img.kvx.me', label: '图床2' },
  ],

  // 你的 PageConfig 支持 group（PageConfigGroup：对象映射）
  group: {
    '🌐 网站服务': ['web-kvx', 'web-pan', 'web-img1', 'web-img2'],
    '🖥 节点 / SSH': ['ssh-ggc', 'ssh-diylink', 'ssh-ikoula', 'ssh-aliyun', 'ssh-alice6'],
  },

  // ✅ 关键：空字符串 = 不显示底部页脚
  customFooter: '',
} as unknown as PageConfig

const workerConfig: WorkerConfig = {
  monitors: [
    // ===== 网站（HTTP）=====
    {
      id: 'web-kvx',
      name: '📝 kvx.me（博客）',
      method: 'GET',
      target: 'https://kvx.me',
      statusPageLink: 'https://kvx.me',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
    {
      id: 'web-pan',
      name: '🗂️ pan.sept.cc（网盘）',
      method: 'GET',
      target: 'https://pan.sept.cc',
      statusPageLink: 'https://pan.sept.cc',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
    {
      id: 'web-img1',
      name: '🖼️ 45678.eu.org（图床1）',
      method: 'GET',
      target: 'https://45678.eu.org',
      statusPageLink: 'https://45678.eu.org',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
    {
      id: 'web-img2',
      name: '🖼️ img.kvx.me（图床2）',
      method: 'GET',
      target: 'https://img.kvx.me',
      statusPageLink: 'https://img.kvx.me',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },

    // ===== SSH（TCP 22）=====
    {
      id: 'ssh-ggc',
      name: '🇺🇸 乔治 ggc（SSH:22）',
      method: 'TCP_PING',
      target: '23.173.152.59:22',
      timeout: 10000,
    },
    {
      id: 'ssh-diylink',
      name: '🇺🇸 diylink（SSH:22）',
      method: 'TCP_PING',
      target: '156.255.90.199:22',
      timeout: 10000,
    },
    {
      id: 'ssh-ikoula',
      name: '🇫🇷 ikoula（SSH:22）',
      method: 'TCP_PING',
      target: '109.238.6.180:22',
      timeout: 10000,
    },
    {
      id: 'ssh-aliyun',
      name: '🇸🇬 阿里云（SSH:22）',
      method: 'TCP_PING',
      target: '8.219.168.105:22',
      timeout: 10000,
    },

    // ✅ 新增：alice IPv6 22 端口监控
    {
      id: 'ssh-alice6',
      name: '🇫🇷 alice（IPv6 / SSH:22）',
      method: 'TCP_PING',
      // IPv6 必须用 [IPv6]:port 形式
      target: '[2a14:67c0:302:243::a]:22',
      timeout: 10000,
    },
  ],
}

// 维护窗口：不用就空数组
const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
