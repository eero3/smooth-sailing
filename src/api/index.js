export const reservationStatus = () => fetch('https://aqueous-thicket-34447.herokuapp.com/status')
export const makeReservation = () => fetch('https://aqueous-thicket-34447.herokuapp.com/add', { method: 'POST' })
export const cancelReservation = () => fetch('https://aqueous-thicket-34447.herokuapp.com/cancel', { method: 'POST' })
