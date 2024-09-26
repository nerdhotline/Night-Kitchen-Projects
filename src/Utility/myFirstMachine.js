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
    /** @xstate-layout N4IgpgJg5mDOIC5QDMwBcDGALAdASwgBswBiAMQFEAVAYQAkBtABgF1FQAHAe1jzTy4A7diAAeiAIwB2AEw4AzAA4JMgCwA2KRICc6gKyK9egDQgAnpI04ZTPUxvztM-eomqAvu9OpMuDmEEIPEEoEgAlCgBlAHkAGQA1CmY2JBBuXn4hEXEEPVUpa215KSN1JlcJPXlTCwQ3JhxFRRKJJkUZPW1tCXVPb3RsHH9A4NCIgCkKGipkkXS+AWFUnLVFHHV1NSc27UVNbRNzRHkZeRxpPR6pJiY3RXk9PpAfQeQAQzxiCHJqelnU+aZJagHLyHQ4JiqLpOVRQmT3bQ1RAyWQQjr2CTyeS3CTKJ4vXCwACuGAwcFgyCJhB+tEYrDmPAWWWWiFUMjkG3R3RUB1U1SOCGUjU2djUuJ6kMeT0EXAgcBEBIZGUW2UQAFobBDyh0DIodjIdIokQg1ep1ripFCynsDqL8QNcARiEqmcCxMiCl1irCJDpWlI9TJjW49ApdgHdmU2eo9vbfEMAkEQi6gaqECi5HoY1IygGsZascHVKHHM1rgH1NpVG0ZHHXh8vimVSzcny0XZig9cRp+bV4Q1lM18pUpCV4XXCSSybAKVSm8yQYg8nINB1VE1Ic0msahbYRfCVLDLlJPJ4gA */
    id: 'fetch',
    initial: 'idle',
    context: {
        results: undefined,
        message: undefined
    },

    states:{
        idle: {
            on: {FETCH: 'pending'} 
        },

        pending: {
            entry: ['fetchData'],
            on: {
                RESOLVE: {target: 'successful', actions: ['setResults']},
                REJECT: {target: 'failed', actions: ['setMessage']}
            }
        },

        failed: {
            on: {FETCH: 'pending'}
        },

        successful: {
            on: {FETCH: 'pending'}
        }
    },  
}, {
    actions: {
        setResults: assign((context, event) => ({
            results: event.results
        })),

        setMessage: assign((context, event) => ({
            message: event.message
        }))


    }

})