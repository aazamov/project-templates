import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'
import LanguageSwitcher from '@/features/LanguageSwitcher'

export default function HomePage() {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('hello')}</h1>
      <LanguageSwitcher />
      <Link to="/about">Go to about page</Link>
    </div>
  )
}
