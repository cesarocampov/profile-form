import React from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import Input from '@vtex/styleguide/lib/Input'
import RuleFieldShape from '../../propTypes/RuleFieldShape'
import ProfileFieldShape from '../../propTypes/ProfileFieldShape'

const StyleguideInput = ({ field, intl, data, onChange }) => {
  return (
    <div
      className={`vtex-profile-form__${field.name} ${
        field.hidden ? 'dn' : ''
      } pb7`}
    >
      <Input
        name={field.name}
        label={intl.formatMessage({
          id: `profile-form.field.${field.label}`,
        })}
        value={data.value || ''}
        errorMessage={
          data.error &&
          intl.formatMessage({
            id: `profile-form.error.${data.error}`,
          })
        }
        placeholder={
          !field.required
            ? intl.formatMessage({ id: 'profile-form.optional' })
            : null
        }
        onChange={onChange}
      />
    </div>
  )
}

StyleguideInput.propTypes = {
  /** Rules for the field this input represents */
  field: RuleFieldShape.isRequired,
  /** Data this input will display */
  data: ProfileFieldShape.isRequired,
  /** Function to be called when input changes */
  onChange: PropTypes.func.isRequired,
  /** React-intl utility */
  intl: intlShape.isRequired,
}

export default injectIntl(StyleguideInput)