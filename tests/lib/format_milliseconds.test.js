import formatMilliseconds from '../../src/lib/format_milliseconds'

describe('formatMilliseconds', () => {
  test('00:00:00.00', () => {
    expect(formatMilliseconds(1)).toBe('00:00:00.00')
  })

  test('00:00:00.01', () => {
    expect(formatMilliseconds(10)).toBe('00:00:00.01')
  })

  test('00:00:00.11', () => {
    expect(formatMilliseconds(110)).toBe('00:00:00.11')
  })

  test('00:00:01.11', () => {
    expect(formatMilliseconds(1110)).toBe('00:00:01.11')
  })

  test('00:00:11.11', () => {
    expect(formatMilliseconds(11111)).toBe('00:00:11.11')
  })

  test('00:01:11:11', () => {
    const ms = 60 * 1000 + 11111
    expect(formatMilliseconds(ms)).toBe('00:01:11.11')
  })

  test('00:11:11:11', () => {
    const ms = 11 * 60 * 1000 + 11111
    expect(formatMilliseconds(ms)).toBe('00:11:11.11')
  })

  test('01:11:11:11', () => {
    let ms = 11 * 60 * 1000 + 11111
    ms += 60 * 60 * 1000
    expect(formatMilliseconds(ms)).toBe('01:11:11.11')
  })

  test('11:11:11:11', () => {
    let ms = 11 * 60 * 1000 + 11111
    ms += 11 * 60 * 60 * 1000
    expect(formatMilliseconds(ms)).toBe('11:11:11.11')
  })
})
