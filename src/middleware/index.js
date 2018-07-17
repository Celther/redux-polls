import { applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import logger from './logger'

export default applyMiddleware(ReduxThunk, logger)
