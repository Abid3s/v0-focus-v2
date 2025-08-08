import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Get a Quote | Focus Insurance Services',
  description: 'For quotes and enquiries please use our Contact page. You will be redirected.',
}

export default function GetQuoteRedirectPage() {
  redirect('/contact')
  return null
}
