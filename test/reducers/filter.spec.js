import expect from 'expect'
import filter from '../../src/filter/reducer'

describe('filter reducer', () => {

  /*
  * Check initial state
  ***/
  it('should handle initial state', () => {
    expect(
      filter(undefined, {})
    ).toEqual('SHOW_ALL')
  })


  /*
  * Change the filter
  ***/
  it('should handle SET_FILTER', () => {
    expect(
      filter('SHOW_ALL', {
        type: 'SET_FILTER',
        filter: 'SHOW_COMPLETED'
      })
    ).toEqual('SHOW_COMPLETED')
  })

})
