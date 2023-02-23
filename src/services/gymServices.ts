import diaryEnters from './gymEnters.json'
import  {gymEnters}  from './types'

const diaries: Array<gymEnters> = diaryEnters as Array<gymEnters>
export const getEntries = () => diaries

export const postEntries = () => null