export const isEmail = (email = '') => {
    if (!email) {
      email = ''
    }
    const mailformat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email.match(mailformat)) {
      if (email.indexOf('+') !== -1) {
        return false
      }
      return true
    }
    return false
  }