import OpenOrdersTable from '../OpenOrdersTable'
import { useTranslation } from 'next-i18next'

const AccountOrders = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <h2 className="py-4">{t('open-orders')}</h2>
      <OpenOrdersTable />
    </>
  )
}

export default AccountOrders
