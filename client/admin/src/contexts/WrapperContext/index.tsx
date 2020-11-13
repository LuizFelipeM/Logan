import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faExclamationCircle, faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {
  createContext, ReactNode, useEffect, useState
} from 'react'
import { Spinner, Toast } from 'react-bootstrap'

import './style.scss'

interface WrapperContextProps {
  children: ReactNode
}

interface Context {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  notification: INotification
}

interface NotificationValues {
  title?: string
  body?: string
  className: string
  icon: IconProp
}

interface INotification {
  info: (title: string, body: string) => void
  warn: (title: string, body: string) => void
  error: (title: string, body: string) => void
}

const WrapperContext = createContext<Context>({} as Context)

const { Provider } = WrapperContext

const WrapperProvider: React.FC<WrapperContextProps> = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationValues, setNotificationValues] = useState<NotificationValues | undefined>(undefined)

  useEffect(() => setShowNotification(true), [notificationValues])

  const notification: INotification = {
    info(title: string, body: string) {
      setNotificationValues({
        title,
        body,
        icon: faInfoCircle,
        className: 'info'
      })
    },

    warn(title: string, body: string) {
      setNotificationValues({
        title,
        body,
        icon: faExclamationCircle,
        className: 'warn'
      })
    },

    error(title: string, body: string) {
      setNotificationValues({
        title,
        body,
        icon: faTimesCircle,
        className: 'error'
      })
    }
  }

  return (
    <Provider value={{ setLoading, notification }}>
      {loading && (
        <div className="loading-container d-flex justify-content-center">
          <Spinner animation="border" variant="light" />
        </div>
      )}
      {notificationValues && (
        <Toast
          delay={3000}
          show={showNotification}
          onClose={() => setShowNotification(false)}
          className={`toast-notification ${notificationValues?.className}`}
          animation
          autohide
        >
          <Toast.Header>
            <FontAwesomeIcon
              className={`icon ${notificationValues?.className}`}
              icon={notificationValues?.icon}
            />
            <strong className="mr-auto">{notificationValues?.title}</strong>
          </Toast.Header>
          <Toast.Body>
            {notificationValues?.body}
          </Toast.Body>
        </Toast>
      )}
      {children}
    </Provider>
  )
}

export { WrapperContext, WrapperProvider }
