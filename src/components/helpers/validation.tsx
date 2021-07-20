

export const required: validateType = (value) => (value || typeof value === 'number' ? undefined : 'Required')

const minLength = (min: number): validateType => (value) => value && value.length < min ? `Must be ${min} characters or less` : undefined
const maxLength = (max: number): validateType => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength7 = minLength(7)
export const maxLength20 = maxLength(20)



export type validateType = (value: string) => string | undefined