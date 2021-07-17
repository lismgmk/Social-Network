

export const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const minLength = min => value => value && value.length < min ? `Must be ${min} characters or less` : undefined
const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength7 = minLength(7)
export const maxLength20 = maxLength(20)


export const isEmail = value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email) ?
    'Invalid email address' : undefined

