import { Container, Group } from '@mantine/core'
import classes from '@/styles/Header.module.css'
import { pageConfig } from '@/uptime.config'
import { PageConfigLink } from '@/types/config'
import { useTranslation } from 'react-i18next'

export default function Header({ style }: { style?: React.CSSProperties }) {
  const { t } = useTranslation('common')

  const linkToElement = (link: PageConfigLink, i: number) => {
    return (
      <a
        key={i}
        href={link.link}
        target={link.link.startsWith('/') ? undefined : '_blank'}
        className={classes.link}
        data-active={link.highlight}
      >
        {link.label}
      </a>
    )
  }

  const links = [{ label: t('Incidents'), link: '/incidents' }, ...(pageConfig.links || [])]

  return (
    <header className={classes.header} style={style}>
      <Container size="md" className={classes.inner}>
        {/* ✅ Logo 已删除，这里不再渲染 Image */}

        <Group gap={5} visibleFrom="sm">
          {links.map(linkToElement)}
        </Group>

        <Group gap={5} hiddenFrom="sm">
          {links
            .filter((link) => link.highlight || link.link.startsWith('/'))
            .map(linkToElement)}
        </Group>
      </Container>
    </header>
  )
}
