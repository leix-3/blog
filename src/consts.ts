export const SITE_TITLE = '阿雷实验室';
export const SITE_DESCRIPTION = '记录 AI、NAS、效率工具与家庭数字生活的真实实践。';
export const SITE_URL = 'https://example.com';
export const AUTHOR = '阿雷';

export const CATEGORIES = [
	{ slug: 'ai', name: 'AI 工具', short: 'AI', description: '大模型、Agent 与实用 AI 工作流' },
	{ slug: 'nas', name: 'NAS 数码', short: 'NAS', description: '家庭存储、备份与数码硬件实践' },
	{ slug: 'software', name: '效率软件', short: '效率', description: '软件工具、自动化与个人效率系统' },
	{ slug: 'content', name: '内容创作', short: '创作', description: '视频、写作与一人创作工作流' },
	{ slug: 'education', name: '家庭教育', short: '教育', description: '家庭 AI 教育与数字生活方法' },
] as const;

export type CategoryName = (typeof CATEGORIES)[number]['name'];

export const NAV_LINKS = [
	{ href: '/', label: '首页' },
	{ href: '/blog/', label: '文章' },
	{ href: '/category/ai/', label: 'AI 工具' },
	{ href: '/category/nas/', label: 'NAS 数码' },
	{ href: '/about/', label: '关于我' },
];

export const SOCIAL_LINKS = {
	github: '',
	bilibili: '',
};
