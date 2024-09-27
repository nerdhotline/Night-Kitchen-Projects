import { createMachine } from "xstate"
import { assign } from "xstate"

// export const myMachine = createMachine({
//         /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYgFkB5AVQGUBRDgDU+AJQDaABgC6iUAAdysXJVzl8skAA9EAJgBsJPXp0BWCQE4ALFcs6AzAHZLJgDQgAnoj0OSJk3rsARkCADj0Qh31ggF9otzQsPEJSbHomVk5eAS4AFUkZJBAFJRU1DW0EOwkSBwizf0DLQL1G0LdPBBMax0sIhwlAhwc7EOdYuJAKCDgNBJwCYg1i5VV1QoqAWmadEhCdaz1LPQk-fpM7dsQNkMCSc0cTRodA+6MQu1j4jHnksipaBjMCBLRQrMrrK7BSy7fbmQ7HU4nC4eLwGBxmCTGfRVQISd6fEBzJLEEipQGQEElVblRChcy+G76Ew6cyROyWS4IIw1DFYgIDPE6cbRIA */
//         initial: "notHovered",  // initial state

//         states: {
//             notHovered: {
//                 on:{
//                     // transition to 'hovered' on the MOUSEOVER event.
//                     MOUSEOVER : { target: "hovered" }
//                 }
//             },
            
//             hovered: {
//                 on: {
//                     // transition to 'notHovered' on the MOUSEOUT event.
//                     MOUSEOUT: { target: "notHovered" }
//                 }
//             },
//         }
//     },
// );

export const fetchMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QDMwBcDGALAdASwgBswBiAMQFEAVAYQAkBtABgF1FQAHAe1jzTy4A7diAAeiAIwBWAOw4JMqUyYBOCQDYAHAGZN6gCwAmADQgAnpP3qchpku0qr6iUYnaAvu9OpMuDmEEIPEEoEgAlCgBlAHkAGQA1CmY2JBBuXn4hEXEEKX05QxVtRSl1JmdpbVMLBBcmHE1NRQkmTUMpFTV1T290bBxkAEM8YghyanpkkXS+AWFUnO0JFRwmfU6VQ311wx0VasRDGUNV9qZDN20mCQlNCR6QH37YAFcMDDhYZBfCcdpGVjTHizLILRBGE7qdRnNQSQp5KrmRB3BrQpRbW4aNZSB5PPwBIIhcIUABSFBoVCmqRmmXmoByW00OChW02rRUehkKikBwQ2kM2nkzXUMmULh0OIegi4EDgIjxQIyc2yiAAtLZVuV2lJGuyLhzearrM4musynpuejcX1cARiIqQXSxIc5J1itsbmomDJNOdeS4pDgHE1NByykYtN0vI8bTh-IFglAHbSVQgjidSk0yj7tO7c-79IHgzJRT71I5WoZrb4BsNRsnlWDcvpBed7DJtFJblZETVdvU7qaZNIS1JdtXnm8PrAvj8G6D6Yg8icrO19Lr1z7NLyUXY0bs4dsuzJPJ4gA */
    id: 'fetchMachine',
    initial: 'idle',
    context: {
        results: [],
        message: ''
    },

    states:{
        idle: {
            on: {FETCH: 'pending'} 
        },

        pending: {
            entry: ['fetchData'],
            on: {
                RESOLVE: {target: 'successful', actions: ['setResults']}
            }
        },

        failed: {
            on: {FETCH: 'pending'}
        },

        successful: {
            on: {FETCH: 'pending'}
        }
    }

    }, {
    actions: {
        setResults: assign((context, event) => ({
            results: context.event.results
        })),
        
        setMessage: assign((context, event) => ({
            message: event.message
        }))
    }

});