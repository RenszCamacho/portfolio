/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        PUBLIC_URL: string
        REACT_APP_PROJECT_ID:string
        REACT_APP_DATASET:string
        REACT_APP_API_VERSION:string
        REACT_APP_USE_CDN:boolean
        REACT_APP_TOKEN:string
    }
}
