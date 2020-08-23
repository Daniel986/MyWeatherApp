
export const englishOrSpaceInput = value => {
    return value.replace(/[^A-Za-z\s]/ig, '')
}