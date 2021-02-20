export const required = value => value ? undefined : 'Complete all fields'

export const maxLength = value => value?.length <= 30 ? undefined  : `Max name's length is 30 symbols`