import { h } from 'preact'

export default function ({ onclick }) {
  return (
    <button type='button' aria-label='start' onclick={onclick} id='start'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 37.95 39.6'><path d='M36.74 17.77L3.32.26A2.27 2.27 0 000 2.27v35a2.27 2.27 0 003.32 2l33.42-17.48a2.27 2.27 0 000-4.02z' /></svg>
    </button>
  )
}
