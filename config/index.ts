import type { AppInfo } from '@/types/app'
export const APP_ID = '4bc8a9b9-538b-45b8-923d-7df78e13ab9b' // `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = 'app-TAon59W7zZb7gebKy2RPetuq' // `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = 'https://api.dify.ai/v1' // `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: '콜센터',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'en',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
