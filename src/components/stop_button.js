import { h } from 'preact'

export default function ({ onclick }) {
  return (
    <button type='button' aria-label='stop' onclick={onclick} id='stop'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.52 42.52'><rect width='42.52' height='42.52' rx='2.27' ry='2.27' /></svg>
    </button>
  )
}
