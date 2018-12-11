import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import VehicleInput from './vehicleInput'

const getHarborObj = (value, label) => ({value, label})

const MOCK_HARBORS = [
  getHarborObj(1, "Asterholma"),
  getHarborObj(2, "Bergö"),
  getHarborObj(3, "Dagerby"),
  getHarborObj(4, "Enklinge"),
  getHarborObj(5, "Gallby"),
  getHarborObj(6, "Hummelvik"),
  getHarborObj(7, "Husö"),
  getHarborObj(8, "Jurmo"),
  getHarborObj(9, "Kumlinge"),
  getHarborObj(10, "Kyrkogårdsö"),
  getHarborObj(11, "Kökar"),
  getHarborObj(12, "Lappo"),
  getHarborObj(13, "Långnäs"),
  getHarborObj(14, "Osnäs"),
  getHarborObj(15, "Snäckö"),
  getHarborObj(16, "Sottunga"),
  getHarborObj(17, "Torsholma"),
  getHarborObj(18, "Åva"),
  getHarborObj(19, "Överö")
]

const StyledSelect = ({id, label, placeholder, options, onChange, icon}) => (
  <div className="flex-grow flex-shrink mb-1 sm:m-1 w-full sm:w-auto relative">
    <label htmlFor={id} className="hidden sm:block text-sm font-bold sm:pr-1 text-grey-darker">{label}</label>
    <select id={id} className="rounded py-2 pl-8 px-1 bg-white w-full cursor-pointer" onChange={onChange}>
      <option className="text-grey-darker">{placeholder}</option>
      {options.map(h => <option key={h.value}>{h.label}</option>)}
    </select>
    <FontAwesomeIcon icon={icon} className="booking-form-input-icon absolute z-10" />
  </div>
)

const BasicDatePicker = ({id, label, onChange}) => (
  <div className="flex-grow flex-shrink mb-1 sm:m-1 w-full sm:w-auto relative">
    <label htmlFor={id} className="hidden sm:block text-sm font-bold sm:pr-1 text-grey-darker">{label}</label>
    <input
      type="date"
      onChange={onChange}
      className="rounded py-1 pl-8 bg-white w-full booking-datepicker"
    />
    <FontAwesomeIcon icon="calendar-alt" className="booking-form-input-icon absolute z-10"/>
  </div>
)

const SearchButton = ({onClick}) => (
  <div className="flex-grow flex-shrink w-full sm:w-auto flex justify-center mt-3 mb-2 sm:m-1">
    <button
      type="button"
      className="booking-search-btn bg-green-dark hover:bg-green-darker font-semibold text-white rounded;"
      onClick={onClick}
    >
      Search
    </button>
  </div>
)

const DepartureSelect = ({onIconClick, onChange}) => (
  <div className="flex-grow flex-shrink w-full sm:w-auto relative mr-6 sm:mr-5">
    <StyledSelect
      id="From"
      label="From"
      placeholder="Departure harbor"
      options={MOCK_HARBORS}
      icon="anchor"
    />
    <FontAwesomeIcon
      icon="exchange-alt"
      className="absolute z-10 text-grey-darker hover:text-black cursor-pointer booking-exchange-icon"/>
  </div>
)

const BookingForm = ({handleSearchClick, handleVehiclesSave}) => (
  <div className="booking-form sm:w-full -ml-1 lg:ml-3 sm:mx-1 sm:mr-4 ">
    <form className="w-full flex flex-wrap items-center sm:items-end bg-blue-lighter rounded p-1 pb-0 sm:p-2 ml-2 mb-1">
      <DepartureSelect />
      <StyledSelect
        id="To"
        label="To"
        placeholder="Arrival harbor"
        options={MOCK_HARBORS}
        icon="anchor"
      />
      <BasicDatePicker id="departure" label="Departure" onChange={null}/>
      <VehicleInput handleSelectClick={handleVehiclesSave} />
      <SearchButton onClick={handleSearchClick}/>
    </form>
  </div>
)

export default BookingForm
