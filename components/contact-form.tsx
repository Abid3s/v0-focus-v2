'use client'

import { useActionState } from 'react'
import { sendContact } from '@/app/actions/send-contact'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CheckCircle2, AlertTriangle } from 'lucide-react'

type State = Awaited<ReturnType<typeof sendContact>>

export default function ContactForm() {
  const [state, action, pending] = useActionState<State, FormData>(sendContact as any, null)

  return (
    <section id="contact-form" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Send us an enquiry</CardTitle>
              <p className="text-sm text-gray-600">
                We will provide information that is clear, fair and not misleading. Submitting this form does not
                purchase a policy. Terms and conditions apply. Subject to underwriting.
              </p>
            </CardHeader>
            <CardContent>
              <form action={action} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Jane Smith" aria-invalid={!!state?.errors?.name} />
                  {state?.errors?.name && <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>}
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="phone">Telephone</Label>
                  <Input id="phone" name="phone" placeholder="01733 263311" aria-invalid={!!state?.errors?.phone} />
                  {state?.errors?.phone && <p className="mt-1 text-sm text-red-600">{state.errors.phone}</p>}
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="email" placeholder="you@example.com" aria-invalid={!!state?.errors?.email} />
                  {state?.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>}
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="enquiryType">Enquiry type</Label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                    aria-label="Select an enquiry type"
                  >
                    <option>General enquiry</option>
                    <option>Personal insurance</option>
                    <option>Commercial insurance</option>
                    <option>Specialist insurance</option>
                    <option>Claims</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us a little about your enquiry. Please do not include card or bank details."
                    aria-invalid={!!state?.errors?.message}
                  />
                  {state?.errors?.message && <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-sm text-gray-700">
                    <input type="checkbox" name="consent" value="yes" className="mt-1" />
                    <span>
                      I have read the privacy information and understand how my data will be used to handle my enquiry.
                      I consent to being contacted about this enquiry.
                    </span>
                  </label>
                  {state?.errors?.consent && <p className="mt-1 text-sm text-red-600">{state.errors.consent}</p>}
                </div>

                <div className="sm:col-span-2 flex items-center gap-3">
                  <Button type="submit" disabled={pending}>
                    {pending ? 'Sending…' : 'Send enquiry'}
                  </Button>
                  {state?.ok && (
                    <div className="flex items-center gap-2 text-green-700">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{state.message}</span>
                    </div>
                  )}
                  {!state?.ok && state?.message && (
                    <div className="flex items-center gap-2 text-amber-700">
                      <AlertTriangle className="h-4 w-4" />
                      <span>{state.message}</span>
                    </div>
                  )}
                </div>

                <p className="sm:col-span-2 mt-2 text-xs text-gray-600">
                  Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. The
                  information you provide will be used to handle your enquiry in line with our privacy policy.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-gray-900">Contact details</h3>
              <ul className="mt-3 text-sm text-gray-700 space-y-1">
                <li><strong>Telephone:</strong> 01733 263311</li>
                <li><strong>Email:</strong> info@focusinsurance.co.uk</li>
                <li><strong>Address:</strong> 29 Ivatt Way, Peterborough PE3 7PH</li>
                <li><strong>Hours:</strong> Mon–Fri, 9:00am–5:00pm</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-gray-900">Important information</h3>
              <p className="mt-2 text-sm text-gray-700">
                We provide information to help you make informed decisions. Where advice is available, this will be made
                clear and provided appropriately. Terms and conditions apply. Subject to underwriting and acceptance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
