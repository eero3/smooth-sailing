import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledSelect = ({id, label, placeholder, options, onChange, icon}) => (
  <div className="flex-grow flex-shrink mb-1 sm:m-1 w-full sm:w-auto relative">
    <label htmlFor={id} className="hidden sm:block text-sm font-bold sm:pr-1 text-grey-darker">{label}</label>
    <select id={id} className="rounded py-2 pl-8 px-1 bg-white w-full cursor-pointer" onChange={onChange}>
      <option className="text-grey-darker">{placeholder}</option>
      <option>testOption</option>
      <option>testOption</option>
      <option>testOption</option>
      <option>testOption</option>
    </select>
    <FontAwesomeIcon icon={icon} className="booking-form-input-icon absolute z-10 text-grey-darker" />
  </div>
)

const BookingForm = () => (
  <div className="sm:w-full -ml-1 lg:ml-3 sm:mx-1">
    <form className="w-full flex flex-wrap items-center sm:items-end bg-blue-lighter rounded p-1 pb-0 sm:p-2 ml-2 mb-1">
      <StyledSelect
        id="From"
        label="From"
        placeholder="Departure harbor"
        options={[]}
        icon="anchor"
      />
      <StyledSelect
        id="To"
        label="To"
        placeholder="Arrival harbor"
        options={[]}
        icon="anchor"
      />

    </form>

  </div>
)

export default BookingForm
