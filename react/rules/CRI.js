import costarica from '@vtex/phone/countries/CRI' // Used for initialization purposes, do not remove it!

import { getPhoneFields } from '../modules/phone'
import regexValidation from '../modules/regexValidation'

const phoneCountryCode = '506'

export default {
  country: 'CRI',
  personalFields: [
    {
      name: 'firstName',
      maxLength: 100,
      label: 'firstName',
      required: true,
    },
    {
      name: 'lastName',
      maxLength: 100,
      label: 'lastName',
      required: true,
    },
    {
      name: 'email',
      maxLength: 100,
      label: 'email',
      hidden: true,
    },
    {
      name: 'document',
      maxLength: 50,
      label: 'CRI_cedula',
      hidden: true,
      validate: regexValidation(/^\d{10}$/)
    },
    {
      name: 'homePhone',
      maxLength: 30,
      label: 'homePhone',
      ...getPhoneFields(phoneCountryCode),
    },
    {
      name: 'gender',
      maxLength: 30,
      label: 'gender',
    },
    {
      name: 'birthDate',
      maxLength: 30,
      label: 'birthDate',
      type: 'date'
    },
  ],
  businessFields: [
    {
      name: 'corporateName',
      maxLength: 100,
      label: 'corporateName',
    },
    {
      name: 'tradeName',
      maxLength: 100,
      label: 'tradeName',
      hidden: true,
    },
    {
      name: 'corporateDocument',
      maxLength: 30,
      label: 'CRI_cedula',
      hidden: true,
    },
    {
      name: 'businessPhone',
      maxLength: 30,
      label: 'businessPhone',
      ...getPhoneFields(phoneCountryCode),
    },
  ],
}
