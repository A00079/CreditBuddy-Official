/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Catalogue ',
    description:
      'Various banks provide customers with a catalogue that comprises things that they can swap in exchange for their acquired reward points, such as apparel, eatables, footwear, accessories, stationery, and so on.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Vouchers ',
    description:
      'A variety of credit cards provide vouchers as a means of redeeming reward points. These coupons can be used at a variety of stores with which the bank may be affiliated. Banks may also allow clients to use these certificates for online purchases with certain online businesses. These vouchers might be for as little as Rs 100 or as much as a few thousand rupees.',
    icon: ScaleIcon,
  },
  {
    name: 'Miles ',
    description:
      'Miles are an excellent option for people who enjoy travelling. Several banks collaborate with travel booking platforms or airlines to deliver travel-related benefits to cardholders',
    icon: LightningBoltIcon,
  },
  {
    name: 'Donations ',
    description:
      'Some banks permit cardholders to donate their reward points. Customers have the option of donating to a charity of their choice. The reward points will be converted into cash and donated to the charity of the cardholders choice.',
    icon: AnnotationIcon,
  },
  {
    name: 'Cashback  ',
    description:
      'When it comes to redeeming reward points, another alternative is cash back. Instead of gaining points for a transaction, the consumer will receive cash back for a portion of their purchase price.',
    icon: AnnotationIcon,
  },
]

export default function CreditRedeem() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Credit Redeem</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          How Can I Redeem Reward Points?
          </p>
          <p className="mt-4 max-w-2xl text-sm text-gray-700 lg:mx-auto">
          Once the credit card customer has accumulated a sufficient amount of points, they can redeem those points for a variety of options provided by the bank. You can redeem your reward points in any of the following ways, depending on what your bank offers.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-sm text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
