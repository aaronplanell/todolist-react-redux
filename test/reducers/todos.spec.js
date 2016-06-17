import expect from 'expect'
import todoList from '../../src/todoList/reducer'

describe('todoList reducer', () => {

  /*
  * Check initial state
  ***/
  it('should handle initial state', () => {
    expect(
      todoList(undefined, {})
    ).toEqual([])
  })


  /*
  * Check ADD_TODO
  ***/
  it('should handle ADD_TODO', () => {
    expect(
      todoList([], {
        type: 'ADD_TODO',
        text: 'Run the tests',
        id: 0
      })
    ).toEqual([
      {
        text: 'Run the tests',
        isCompleted: false,
        id: 0
      }
    ])

    expect(
      todoList([
        {
          text: 'Run the tests',
          isCompleted: false,
          id: 0
        }
      ], {
        type: 'ADD_TODO',
        text: 'Use Redux',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        isCompleted: false,
        id: 0
      }, {
        text: 'Use Redux',
        isCompleted: false,
        id: 1
      }
    ])

    expect(
      todoList([
        {
          text: 'Run the tests',
          isCompleted: false,
          id: 0
        }, {
          text: 'Use Redux',
          isCompleted: false,
          id: 1
        }
      ], {
        type: 'ADD_TODO',
        text: 'Fix the tests',
        id: 2
      })
    ).toEqual([
      {
        text: 'Run the tests',
        isCompleted: false,
        id: 0
      }, {
        text: 'Use Redux',
        isCompleted: false,
        id: 1
      }, {
        text: 'Fix the tests',
        isCompleted: false,
        id: 2
      }
    ])
  })


  /*
  * Check REMOVE_TODO
  ***/
  it('should handle REMOVE_TODO', () => {
    expect(
      todoList([
        {
          text: 'Run the tests',
          isCompleted: false,
          id: 0
        }, {
          text: 'Use Redux',
          isCompleted: false,
          id: 1
        }, {
          text: 'Fix the tests',
          isCompleted: false,
          id: 2
        }
      ], {
        type: 'REMOVE_TODO',
        id: 0
      })
    ).toEqual([
      {
        text: 'Use Redux',
        isCompleted: false,
        id: 1
      }, {
        text: 'Fix the tests',
        isCompleted: false,
        id: 2
      }
    ])

    expect(
      todoList([
        {
          text: 'Run the tests',
          isCompleted: false,
          id: 0
        }, {
          text: 'Use Redux',
          isCompleted: false,
          id: 1
        }, {
          text: 'Fix the tests',
          isCompleted: false,
          id: 2
        }
      ], {
        type: 'REMOVE_TODO',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        isCompleted: false,
        id: 0
      }, {
        text: 'Fix the tests',
        isCompleted: false,
        id: 2
      }
    ])

    expect(
      todoList([
        {
          text: 'Run the tests',
          isCompleted: false,
          id: 0
        }, {
          text: 'Use Redux',
          isCompleted: false,
          id: 1
        }, {
          text: 'Fix the tests',
          isCompleted: false,
          id: 2
        }
      ], {
        type: 'REMOVE_TODO',
        id: 2
      })
    ).toEqual([
      {
        text: 'Run the tests',
        isCompleted: false,
        id: 0
      }, {
        text: 'Use Redux',
        isCompleted: false,
        id: 1
      }
    ])
  })


  /*
  * Check TOGGLE_TODO
  ***/
  it('should handle TOGGLE_TODO', () => {
    expect(
      todoList([
        {
          text: 'Run the tests',
          isCompleted: false,
          id: 1
        }, {
          text: 'Use Redux',
          isCompleted: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        isCompleted: true,
        id: 1
      }, {
        text: 'Use Redux',
        isCompleted: false,
        id: 0
      }
    ])
  })

})
