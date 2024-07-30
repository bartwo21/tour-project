const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_DATE':
            return {...state , date: action.payload}
        case 'SET_PERSON':
            return {...state , person: action.payload}
        case 'SET_NAMESURNAME':
            return {...state , nameSurname: action.payload}
        case 'SET_EMAIL':
            return {...state , email: action.payload}
        case 'SET_TICKET':
            return {...state , ticket: action.payload}
        case 'SET_FORM_SUBMITTED':
            return {...state , isFormSubmitted: action.payload}
        default: return state;
    }
}

export default reducer;